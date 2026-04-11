__d(
  "WAWebDesktopUpsellAnimationDataV2",
  [
    "WAWebDesktopUpsellAnimationDataV2LaptopLayers",
    "WAWebDesktopUpsellAnimationDataV2PhoneLayer",
    "WAWebDesktopUpsellAnimationDataV2UILayer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        v: "5.12.1",
        fr: 60,
        ip: 180,
        op: 301,
        w: 156,
        h: 132,
        nm: "2025_10_CPX_Web_Empty_State",
        ddd: 0,
        assets: [],
        layers: [
          r("WAWebDesktopUpsellAnimationDataV2PhoneLayer")(),
          r("WAWebDesktopUpsellAnimationDataV2UILayer")(),
          o(
            "WAWebDesktopUpsellAnimationDataV2LaptopLayers",
          ).createLaptopLayer(),
          o(
            "WAWebDesktopUpsellAnimationDataV2LaptopLayers",
          ).createLaptopTopLayer(),
        ],
        markers: [],
        props: {},
      };
    }
    l.default = e;
  },
  98,
);
