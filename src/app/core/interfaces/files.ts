export type IFileTypes = 'Adserving' | 'User';


export interface IFileUploads {
  created: Date;
  module: IFileTypes;
  customer: string;
  path: string;
  processed: boolean;
  link: string;
  id?: string;
}
