import { defineStore } from 'pinia'
import { PiniaStorage } from 'pinia-storage/pinia-storage'

/**
 * user's scheme
 * 请注意anyOf和oneOf会一定程度影响性能
 * $id:注意这个，建议一定要加上
 */
const userScheme = {
  $id: window.crypto.randomUUID(),
  title: 'user',
  type: 'object',
  properties: {
    userId: {
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'number'
        }
      ]
    },
    username: {
      type: 'string'
    },
    age: {
      type: 'number'
    }
  }
}
const storage = new PiniaStorage()

export const indexStore = defineStore('index', {
  state: () => {
    return {
      id: 456,
      user: storage.init(
        'index',
        'user',
        {
          userId: '1658ppo90',
          username: 'pinia-storage',
          age: 16
        },
        userScheme
      ),
      test: storage.persist('index', 'test', 56, {
        $id: window.crypto.randomUUID(),
        title: 'test',
        type: 'number'
      })
    }
  }
})
