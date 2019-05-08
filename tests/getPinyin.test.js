import pinyinUtil from '../src';

const { getPinyin } = pinyinUtil;

describe('根据汉字获取拼音', () => {
  test('小明 => xiao ming', () => {
    expect(getPinyin('小明', ' ')).toBe('xiao ming');
  });
  test('小明 => xiǎo míng', () => {
    expect(getPinyin('小明', ' ', true)).toBe('xiǎo míng');
  });
  test('小明plus => xiao ming plus', () => {
    expect(getPinyin('小明plus', ' ')).toBe('xiao ming plus');
  });
});
