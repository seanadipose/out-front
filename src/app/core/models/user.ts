export interface Roles {
  customer?: boolean;
  guest?: boolean;
  admin?: boolean;
}

export interface IUser {
  uid?: string;
  email: string;
  roles: Roles;
}

export class User implements IUser {
  uid?: string;
  email: string;
  roles: Roles;

  constructor(
    { ...fields }
  ) {
    const { email: email, roles: [...roles], uid: uid } = fields;
    this.email = email;
    this.roles = roles;
    this.uid = uid;
  }
}
