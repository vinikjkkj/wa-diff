__d(
  "WAWebGetCTWAEligibilityFromConversion",
  ["WAArrayBufferUtils", "WAWebCTWAGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "FB_Ads",
      s = "3pdag",
      u = "none";
    function c(t) {
      var n = t.conversionData,
        r = t.conversionSource,
        a = t.ctwaSignals;
      if (r !== e) return null;
      if (o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
        var i,
          l =
            (i =
              a == null
                ? void 0
                : a.split(",").map(function (e) {
                    return e.trim().toLowerCase();
                  })) != null
              ? i
              : [],
          c = l.includes(s) && !l.includes(u);
        return c ? { data: null, source: e, is3pdag: !0 } : null;
      }
      if (n == null) return null;
      try {
        var d = o("WAArrayBufferUtils").arrayBufferToString(n);
        return { data: d, source: e, is3pdag: !1 };
      } catch (e) {
        return null;
      }
    }
    ((l.SMB_DATA_SHARING_ALLOWED_SOURCE = e),
      (l.getCTWAEligibilityFromConversion = c));
  },
  98,
);
