import pinyinUtil from '../src';

describe('单个拼音转汉字', () => {
  test('diu => 丟丢銩铥', () => {
    expect(pinyinUtil.getHanzi('diu')).toBe('丟丢銩铥');
  });
});
