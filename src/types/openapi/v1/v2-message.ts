import { RestyResponse } from 'resty-client'
import { Ark, MessageKeyboard } from './message'

/**
 * =============  v2 Message 消息接口  =============
 */
export interface V2MessageAPI {
  deleteC2CMessage: (openID: string, messageID: string) => Promise<RestyResponse<any>>
  deleteGroupMessage: (groupOpenID: string, messageID: string) => Promise<RestyResponse<any>>
  postC2CMessage: (openID: string, message: V2MessageToCreate) => Promise<RestyResponse<V2IMessageRes>>
  postGroupMessage: (groupOpenID: string, message: V2MessageToCreate) => Promise<RestyResponse<V2IMessageRes>>
  postC2CMediaMessage: (openID: string, message: V2MediaMessageToCreate) => Promise<RestyResponse<V2MediaMessageRes>>
  postGroupMediaMessage: (
    groupOpenID: string,
    message: V2MediaMessageToCreate,
  ) => Promise<RestyResponse<V2MediaMessageRes>>
}

// Media 响应体
export interface V2MediaMessageRes {
  file_uuid: string
  file_info: string
  ttl: number
  id: string
}

// Media 富文本消息
export interface V2Media {
  file_info: string
}

// markdown消息模板
export interface Markdown {
  content?: string
  custom_template_id?: string
  params: MarkdownKV[]
}

// Markdown 键值对
export interface MarkdownKV {
  key: string
  value: string[]
}

// 消息对象
export interface V2IMessage {
  id: string
  timestamp: number
}

// 接口返回多套一层message
export interface V2IMessageRes {
  message: V2IMessage
}

// 消息体结构
export interface V2MessageToCreate {
  content?: string
  msg_type: number // 0.文本 1.图文混排 2.markdown 3.ark 4.embed 7.media
  markdown?: Markdown
  keyboard?: MessageKeyboard
  ark?: Ark
  media?: V2Media
  event_id?: string
  msg_id?: string
  msg_seq?: number
}

export interface V2MediaMessageToCreate {
  file_type: number // 媒体类型：1 图片，2 视频，3 语音，4 文件（暂不开放）
  url: string
  srv_send_msg: boolean
}
