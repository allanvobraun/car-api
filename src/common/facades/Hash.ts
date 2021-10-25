import * as bcrypt from 'bcrypt';
import md5 from 'md5';

export default class Hash {
  private static readonly saltOrRounds: number = 10;

  static hash(content: string, type: 'bcrypt' | 'md5' = 'bcrypt'): string {
    if (type === 'bcrypt') {
      return bcrypt.hashSync(content, Hash.saltOrRounds);
    }
    return md5(content);
  }

  static compare(
    plainStr: string,
    hash: string,
    type: 'bcrypt' | 'md5' = 'bcrypt',
  ) {
    if (type === 'bcrypt') {
      return bcrypt.compareSync(plainStr, hash);
    }
    return md5(plainStr) === hash;
  }
}
