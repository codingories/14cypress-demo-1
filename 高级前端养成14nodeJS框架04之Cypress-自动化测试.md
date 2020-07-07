---
title: 高级前端养成14nodeJS框架04之Cypress 自动化测试
date: 2020-07-06 20:45:19
tags: 高级前端
---

1. Cypress 介绍

- v1.0.0 - 2017 年 10 月，基于 Electron (Chromium + Node.js), 多平台支持，但不支持 IE
- v2.0.0 - 2018 年 2 月，升级至 Chromium 59
- v3.0.0 - 2018 年 5 月，支持 Node 任务，可以用来连接数据库，读文件等
- v4.0.0 - 2020 年 2 月，支持 Firefox 和基于 Chromium 的 Edge 浏览器

2. Cypress 优点

- 界面美观友好
- 支持模拟手机
- 每一步操作截图
- 全程录屏
- 支持 debug,随时暂停
- 自动等待 UI 更新，减少异步代码

3. 使用 Cypress

- 步骤
  - 创建目录 cypress-demo-1
  - 使用 VSCode 或 WS 打开目录
  - 局部安装 cypress，方法请看安装方法 2
  - 输入./node_modules/.bin/cypress open
  - 如果你是局部安装，就输入./node_modules/.bin/cypress open
  - 然后你就看到了 Cypress 界面
  - 同时 Cypress 会提示你是否要安装案例，选择是
  - 示例文件可随时删除，不用心疼
  - 同时 Cypress 会创建
- 安装方式一

  - 可以用浏览器[下载](https://www.cypress.io/)，解压，然后双击 exe 运行
  - 最好解压的时候就选好安装目录，否则移动目录很耗时
  - 但是这个解压过程比较考验 cpu 硬盘性能，且耗时长
  - 这种方式不支持局部安装，只能把目录拖到界面里使用

- 安装方式二
  - 用 npm 或 yarn 安装
  - 安装命令: yarn add --dev cypress 或 npm i -D cypress
  - 但这样也不安装成功，因为有墙
  - 破墙办法 1，使用神奇教程,将\*.cypress.io 加入白名单，然后运行安装命令
  - 破墙办法 2，下载 cypress.zip,然后在安装命令前面加上 CYPRESS_INSTALL_BINARY=/绝对路径/cypress.zip
  - 比如我的命令就是
    ```
    CYPRESS_INSTALL_BINARY=/Users/ories/Desktop/cypress.zip yarn add --dev cypress
    ```

4. 运行 example

- 界面
  - 直接在 GUI 界面单机 acions.spec.js
  - 然后你就会看到自动化测试过程
- 命令
  - cypress run --spec "cypress/integration/examples/actions.spec.js"
  - 在上面命令后面加上 --headed 有惊喜
- 用 WebStorm 更惊喜
  - 先安装 cypress 插件(装完后会提示你安装 reporter)
  - 然后打开 cypress-demo-1,找到 actions.spec.js,按照视频操作

5. 不运行 examples

- 方法一
  - 直接删掉 examples 目录
- 方法二
  - 将 example/从 integration/目录移走即可
- 方法三
  - 在 cypress.json 里面加上"ignoreTestFiles":["*.hot-update.js","**/examples/*.*"]
- 这样就不会运行 examples 里
  - ./node_modules/.bin/cypress run

6. 开始写自己的测试

- ./node_modules/.bin/cypress open
- 如果 open 比较麻烦可以./node_modules/.bin/cypress run

7. 只测试重要的页面

- 比如登录，加入购物车，下单
- 不要测样式，只测功能

8. 如何写测试api
- webstorm 自动提示和看文档
