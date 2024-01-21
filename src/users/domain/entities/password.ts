import { randomUUID } from 'node:crypto';

export interface PasswordProps {
  value: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export class Password {
  private props: PasswordProps;
  private _id: string;

  constructor(props: PasswordProps, id?: string) {
    this._id = !id ? randomUUID() : id;

    this.props = {
      ...props,
      createdAt: props.createdAt || new Date()
    };
  }

  get value() {
    return this.props.value;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get userId() {
    return this.props.userId;
  }
}
