import { AddAccount } from '../../../domain/usecases/add-account'

export class DbAddAccount implements AddAccount {
  add(account: AddAccountModel): Promise<AccountModel> {}
}
