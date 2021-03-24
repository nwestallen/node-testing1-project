const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: ' . foo ', bar: 'bar ', baz: ' baz'}
    const control = { foo: ' . foo ', bar: 'bar ', baz: ' baz'}
    // ✨ test away
    utils.trimProperties(input)
    expect(input).toEqual(control)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
    const input = [-2, 4, 8, 1, 0]
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(8)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // ✨ test away
    counter.countDown()
    expect(counter).toEqual(3)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // ✨ test away
    counter.countDown()
    counter.countDown()
    expect(counter).toEqual(2)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    // ✨ test away
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    seasons.next()
    expect(seasons).toEqual("summer")
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    expect(seasons).toEqual("fall")
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons).toEqual("winter")
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    [...Array(4).keys()].forEach(num => seasons.next())
    expect(seasons).toEqual("spring")
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    [...Array(5).keys()].forEach(num => seasons.next())
    expect(seasons).toEqual("summer")
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    [...Array(40).keys()].forEach(num => seasons.next())
    expect(seasons).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
