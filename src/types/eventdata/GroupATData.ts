// 群聊at消息的响应数据结构
export interface GroupATData {
  eventType: string
  eventId: string
  msg: GroupMsgData
}

interface GroupMsgData {
  attachments: AttachmentData[]
  author: AuthorData
  content: string
  group_id: string
  group_openid: string
  id: string
  timestamp: string
}

interface AttachmentData {
  content_type: string
  filename: string
  height: string
  width: string
  size: string
  url: string
}

interface AuthorData {
  id: string
  member_openid: string
}
