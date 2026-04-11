__d(
  "MediaPlaybackCompoundEventUtils",
  ["CometProductAttribution"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e != null && e.v2 && (e == null ? void 0 : e.v2.length) > 0) {
        var t = e == null ? void 0 : e.v2,
          n = t[t.length - 1];
        return [n.class, n.module]
          .map(o("CometProductAttribution").filterEntryValue)
          .join(":");
      }
      return "";
    }
    function s(e) {
      var t = 0;
      switch (e) {
        case "autoplay_initiated":
          t = 1;
          break;
        case "loop_initiated":
          t = 7;
          break;
        case "product_initiated":
          t = 8;
          break;
        case "user_initiated":
          t = 2;
          break;
        default:
          break;
      }
      return t;
    }
    function u(e) {
      var t = "unknown";
      switch (e) {
        case "EXCELLENT":
          t = "excellent";
          break;
        case "GOOD":
          t = "good";
          break;
        case "MODERATE":
          t = "moderate";
          break;
        case "POOR":
          t = "poor";
          break;
        default:
          break;
      }
      return t;
    }
    function c(e) {
      return e ? "on" : "off";
    }
    function d(e) {
      if (typeof e == "string") return e;
      if (typeof e == "number") return e.toString();
    }
    function m(t) {
      return t.productAttribution != null ? e(t.productAttribution) : void 0;
    }
    function p(e) {
      return e.productAttribution != null
        ? o("CometProductAttribution").minifyProductAttributionV2(
            e.productAttribution,
          )
        : void 0;
    }
    ((l.minifyProductAttributionV2Root = e),
      (l.getMediaPlaybackPlayReason = s),
      (l.getMediaPlaybackDataConnectionQuality = u),
      (l.getMediaPlaybackCaptionState = c),
      (l.stringifyMediaPlaybackMetadata = d),
      (l.getMediaPlaybackAttributionIDV2Root = m),
      (l.getMediaPlaybackAttributionIDV2 = p));
  },
  98,
);
