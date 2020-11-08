describe("Start Donut Maker", () => {
  let sut

  beforeEach(() => {
    sut = new DonutMaker()
    donutClick = 0
  })

  describe("donutClicked", () => {
    it("should add a donut when clicked", () => {
      sut.donutClicked()
      expect(sut.donutClick).toBe(1)
    })

    it("should return amount of donuts", () => {
      sut.donutClicked()
      expect(sut.getDonutCount()).toBe(1)
    })
  })

  describe("Auto Clicker", () => {
    describe("addToAutoClicker", () => {
      it("afford an auto clicker", () => {
        sut.donutClick = 100
        sut.addAutoClicker()
        expect(sut.donutCount).toBe(1)
      })

      it("subtract from donutCount", () => {
        sut.donutClick = 100
        sut.addAutoClicker()
        expect(sut.donutClick).toBe(0)
      })

      it("increase the auto clicker cost by 10%", () => {
        sut.donutClick = 100
        sut.addAutoClicker()
        expect(sut.autoClickerCost).toBe(110)
      })

      it("increase future auto clicker costs by 10%", () => {
        sut.donutClick = 100
        sut.increaseAutoClickerCost()
        expect(sut.autoClickerCost).toBe(110)
      })

      it("Ensuring there are enough clicks to buy auto clicker", () => {
        sut.donutCount = 90
        sut.addAutoClicker()
        expect(sut.autoClickerCount).toBe(0)
      })

      it("returns a companion you bought", () => {
        sut.donutClick = 100
        sut.addAutoClicker()
        expect(sut.getAutoClickerCount()).toBe(1)
      })
    })
  })

  describe("Donut Multiplier", () => {
    describe("purchase a donut multiplier", () => {
      it("purchase donut multiplier for 10 clicks", () => {
        sut.donutClick = 10
        sut.addMultiplier()
        expect(sut.donutClick).toBe(0)
      })
    })

    it("donut multiplier cost increases by 10%", () => {
      sut.donutClick = 10
      sut.addMultiplier()
      expect(sut.multiplierCost).toBe(11)
    })

    it("cannot buy multiplier without 10 clicks", () => {
      sut.donutClick = 9
      sut.addMultiplier()
      expect(sut.multiplierCount).toBe(0)
    })

    it("increase the click value by 20%", () => {
      sut.increaseDonutCountPercentage()
      expect(sut.donutCount).toBe(1.2)
    })

    it("should add 20% after multiplier is added", () => {
      sut.donutClick = 10
      sut.addMultiplier()
      sut.donutClicked()
      expect(sut.donutClick).toBe(1.2)
    })
  })
})
