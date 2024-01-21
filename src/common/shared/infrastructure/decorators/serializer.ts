import { ClassConstructor } from 'class-transformer';

type SerializerOptions = {
  multiple?: boolean;
};

const defaultOptions: SerializerOptions = {
  multiple: false
};

export const Serializer = <T>(
  Model: ClassConstructor<T>,
  options: SerializerOptions = defaultOptions
) => {
  return (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: unknown[]) {
      const result = await originalMethod.apply(this, args);

      if (options.multiple)
        return result.map((item: unknown) => new Model(item));
      else return new Model(result);
    };

    return descriptor;
  };
};
