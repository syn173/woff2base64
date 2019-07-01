# woff2base64
woff转成base64生成iconfont.wxss

### 依赖
node>=8.5.0

### 起源
小程序项目引入阿里的iconfont,但woff2在小程序ios低版本上存在兼容问题

### 安装
```bash
npm install wofftobase64 -g
```
### 使用
```bash
woff2base64 path # path 为下载iconfont的文件夹目录，若为空则默认是当前路径下
```
