import pinyinUtil from '../src';

const { getCityPinyin } = pinyinUtil;

describe('获取城市拼音【城市多音字已处理】', () => {
  test('重庆市 => chongqingshi', () => {
    expect(getCityPinyin('重庆市')).toBe('chongqingshi');
  });
  test('重庆市 => chong qing shi', () => {
    expect(getCityPinyin('重庆市', ' ')).toBe('chong qing shi');
  });
  test('西藏 => xī zhàng', () => {
    expect(getCityPinyin('西藏', ' ', true)).toBe('xī zhàng');
  });
});
