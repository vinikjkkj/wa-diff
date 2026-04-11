__d(
  "WAWebMetaAiRingAssetResolver",
  [
    "WAWebABProps",
    "WDSIconWdsIcMetaAiRing.react",
    "WDSIconWdsIcMetaAiRingV2.react",
    "bx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("ai_genai_straw_hat") === !0
      );
    }
    function s() {
      return e()
        ? r("WDSIconWdsIcMetaAiRingV2.react")
        : r("WDSIconWdsIcMetaAiRing.react");
    }
    function u() {
      return e()
        ? r("bx").getURL(r("bx")("88729"))
        : r("bx").getURL(r("bx")("14943"));
    }
    function c() {
      return e()
        ? r("bx").getURL(r("bx")("88730"))
        : r("bx").getURL(r("bx")("10591"));
    }
    function d() {
      return e()
        ? r("bx").getURL(r("bx")("88730"))
        : r("bx").getURL(r("bx")("88083"));
    }
    ((l.isAssetReplacementEnabled = e),
      (l.getMetaAiRingIcon = s),
      (l.getBotAssistantIconURL = u),
      (l.getBotAssistantURL = c),
      (l.getMetaAiProfileURL = d));
  },
  98,
);
