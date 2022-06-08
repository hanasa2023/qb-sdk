# qb-sdk

基于 QQ 官方 node sdk 的改版

## ✨：新增特性

### 增加群消息订阅

```typescript
ws.on(AvailableIntentsEventsEnum.GROUP_AND_C2C_EVENT, (data) => {
  console.log(`[GROUP_AND_C2C_EVENT] 事件接收: ${data}`)
})
```

### 单/群聊发送/删除消息

- 单聊

```typescript
client.v2MessageApi.postC2CMessage(openID, {
  content: 'hello world',
  msg_type: 0, // 0.文本 1.图文混排 2.markdown 3.ark 4.embed 7.media
})
```

```typescript
client.v2MessageApi.deleteC2CMessage(openID, messageID)
```

- 群聊

```typescript
client.v2MessageApi.postGroupMessage(openID, {
  content: 'hello world',
  msg_type: 0, // 0.文本 1.图文混排 2.markdown 3.ark 4.embed 7.media
})
```

```typescript
client.v2MessageApi.deleteGroupMessgae(openID, messageID)
```

### 发送富媒体消息

- 单聊

```typescript
client.v2MessageApi.postC2CMediaMessage(openID, {
  file_type: 1, //媒体类型：1 图片，2 视频，3 语音，4 文件（暂不开放）
  url: 'https://www.example.com/example.png',
  srv_send_msg: false, //设置 true 会直接发送消息到目标端，且会占用主动消息频次
})
```

- 群聊

```typescript
client.v2MessageApi.postGroupMediaMessage(openID, {
  file_type: 1, //媒体类型：1 图片，2 视频，3 语音，4 文件（暂不开放）
  url: 'https://www.example.com/example.png',
  srv_send_msg: false, //设置 true 会直接发送消息到目标端，且会占用主动消息频次
})
```

## 本地开发

```shell
# clone repo
git clone https://github.com/tencent-connect/bot-node-sdk.git

# cd repo
cd bot-node-sdk

# run
npm run dev

# run example
npm run linkdev
npm run example
```

## 参与共建 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- 👏 如果您有针对 SDK 的错误修复，请以分支`fix/xxx`向`main`分支发 PR
- 👏 如果您有新的内容贡献，请以分支`feature/xxx`向`main`分支发起 PR
- 👏 如果您有相关的建议或意见，请提[issues](https://github.com/tencent-connect/bot-node-sdk/issues)
