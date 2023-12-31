import { CacheStore } from "@/data/protocols/cache"
import { LocalSavePurchases } from "@/data/usecases"

class CacheStoreSpy implements CacheStore {
  deleteCallsCount = 0
  key: string = ''

  delete (key:string): void {
    this.deleteCallsCount++
    this.key = key
  }
}

type SutTypes = {
  sut: LocalSavePurchases
  cacheStore: CacheStoreSpy
}

const makeSut = (): SutTypes => {
  const cacheStore = new CacheStoreSpy()
  const sut = new LocalSavePurchases(cacheStore)
  return {
    sut,
    cacheStore
  }
}

describe('LocalSavePurchases', () => {
  test('Should not delete cache on sut.ini', () => {
    const {cacheStore} = makeSut()
    new LocalSavePurchases(cacheStore)
    expect(cacheStore.deleteCallsCount).toBe(0)
  })

  test('Should delete cache on save', async () =>  {
    const {sut, cacheStore} = makeSut()
    await sut.save()
    expect(cacheStore.deleteCallsCount).toBe(1)
    expect(cacheStore.key).toBe('purchases')
  })

})
