import * as bcrypt from 'bcrypt';

export default class Hash {
  private static readonly saltOrRounds: number = 10;

  static hash(content: string): string {
    return bcrypt.hashSync(content, Hash.saltOrRounds);
  }

  static compare(plainStr: string, hash: string) {
    return bcrypt.compare(plainStr, hash);
  }
}
