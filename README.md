> pinyin-util

## Introduction

汉字拼音转换工具

字符范围：Unicode字符中`4E00(19968)-9FA5(40869)`共计`20902`

## Installation

Install with npm:

```bash
npm install --save-dev pinyin-util
```

Install with yarn:

```bash
yarn add pinyin-util --dev
```

## Usage

ES6 module:

```js
import pinyinUtil from 'pinyin-util';

pinyinUtil.getPinyin('小明'); // xiaoming
```

script:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>pinyin</title>
  <script src="pinyin.min.js"></script>
</head>
<body>
  <script type="text/javascript">
    pinyinUtil.getPinyin('小明'); // xiaoming
  </script>
</body>
</html>
```

## API

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
