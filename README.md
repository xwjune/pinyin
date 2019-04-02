> pinyin-util

[git地址](https://github.com/xwjune/pinyin.git)

## 使用

```bash
## Install globally or locally
$ npm i pinyin-util -S
```

## 汉字与拼音互转

字符范围：Unicode字符中`4E00(19968)-9FA5(40869)`共计`20902`

```js
import pinyinUtil from 'pinyin-util';
```

### getPinyin(chinese, [splitter=''], [withtone=false])
根据汉字获取拼音

```js
pinyinUtil.getPinyin('小明', ' '); // xiao ming

pinyinUtil.getPinyin('小明', ' ', true); // xiǎo míng

pinyinUtil.getPinyin('小明plus', ' '); // xiao ming plus
```

### getCityPinyin(city, [splitter=''], [withtone=false])
获取城市拼音【城市多音字已处理】

```js
pinyinUtil.getCityPinyin('重庆市'); // chongqingshi

pinyinUtil.getCityPinyin('西藏', ' ', true); // xī zhàng
```

## getHanzi(pinyin)
单个拼音转汉字

```js
pinyinUtil.getHanzi('diu'); // 丟丢銩铥颩
```
