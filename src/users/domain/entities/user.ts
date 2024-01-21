import { PartialConstruction } from '@/common/shared/utils/partial-construction';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    user: PartialConstruction<User, { updatedAt?: Date; createdAt?: Date }>
  ) {
    Object.assign(this, user);
  }
}

// export class User {
//   private props: UserProps;
//   private _id: string;

//   constructor(
//     props: ReplaceAt<UserProps, { createdAt?: Date; updatedAt?: Date }>,
//     id?: string
//   ) {
//     this._id = !id ? randomUUID() : id;
//     this.props = {
//       ...props,
//       createdAt: props.createdAt || new Date(),
//       updatedAt: props.updatedAt || new Date()
//     };
//   }

//   @Expose()
//   get id() {
//     return this._id;
//   }

//   get firstName() {
//     return this.props.firstName;
//   }

//   get lastName() {
//     return this.props.lastName;
//   }

//   @Expose()
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   get email() {
//     return this.props.email;
//   }

//   get createdAt() {
//     return this.props.createdAt;
//   }

//   get updatedAt() {
//     return this.props.updatedAt;
//   }
// }
