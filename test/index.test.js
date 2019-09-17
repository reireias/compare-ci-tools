const times = require('../src/index')

describe('times', () => {
  it('returns x * y', () => {
    expect(times(2, 3)).toBe(6)
  })
})
