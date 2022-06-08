import {
  Config,
  OpenAPIRequest,
  V2IMessageRes,
  V2MediaMessageToCreate,
  V2MediaMessageRes,
  V2MessageAPI,
  V2MessageToCreate,
} from '@src/types'
import { RestyResponse } from 'resty-client'
import { getURL } from './resource'

export default class V2Message implements V2MessageAPI {
  public request: OpenAPIRequest
  public config: Config
  constructor(request: OpenAPIRequest, config: Config) {
    this.request = request
    this.config = config
  }

  public deleteC2CMessage(openID: string, messageID: string): Promise<RestyResponse<any>> {
    const options = {
      method: 'DELETE' as const,
      url: getURL('deleteC2CMessageURI'),
      rest: {
        openID,
        messageID,
      },
    }
    return this.request(options)
  }

  public deleteGroupMessage(groupOpenID: string, messageID: string): Promise<RestyResponse<any>> {
    const options = {
      method: 'DELETE' as const,
      url: getURL('deleteGroupMessageURI'),
      rest: {
        groupOpenID,
        messageID,
      },
    }
    return this.request(options)
  }

  public postC2CMessage(openID: string, message: V2MessageToCreate): Promise<RestyResponse<V2IMessageRes>> {
    const options = {
      method: 'POST' as const,
      url: getURL('c2cMessageURI'),
      rest: {
        openID,
      },
      data: message,
    }
    return this.request<V2IMessageRes>(options)
  }

  public postGroupMessage(groupOpenID: string, message: V2MessageToCreate): Promise<RestyResponse<V2IMessageRes>> {
    const options = {
      method: 'POST' as const,
      url: getURL('groupMessageURI'),
      rest: {
        groupOpenID,
      },
      data: message,
    }
    return this.request<V2IMessageRes>(options)
  }

  public postC2CMediaMessage(
    openID: string,
    message: V2MediaMessageToCreate,
  ): Promise<RestyResponse<V2MediaMessageRes>> {
    const options = {
      method: 'POST' as const,
      url: getURL('c2cMediaMessageURI'),
      rest: {
        openID,
      },
      data: message,
    }
    return this.request<V2MediaMessageRes>(options)
  }

  public postGroupMediaMessage(
    groupOpenID: string,
    message: V2MediaMessageToCreate,
  ): Promise<RestyResponse<V2MediaMessageRes>> {
    const options = {
      method: 'POST' as const,
      url: getURL('groupMediaMessageURI'),
      rest: {
        groupOpenID,
      },
      data: message,
    }
    return this.request<V2MediaMessageRes>(options)
  }
}
