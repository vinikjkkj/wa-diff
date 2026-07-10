__d(
  "WAWebGetCTWAEligibilityFromConversion",
  ["WAArrayBufferUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "FB_Ads",
      s = "3pdag",
      u = "none";
    function c(t) {
      var n,
        r = t.conversionData,
        a = t.conversionSource,
        i = t.ctwaSignals;
      if (a !== e) return null;
      var l =
          (n =
            i == null
              ? void 0
              : i.split(",").map(function (e) {
                  return e.trim().toLowerCase();
                })) != null
            ? n
            : [],
        c = l.includes(s) && !l.includes(u);
      if (r == null) return c ? { data: null, source: e, is3pdag: !0 } : null;
      try {
        var d = o("WAArrayBufferUtils").arrayBufferToString(r);
        return { data: d, source: e, is3pdag: c };
      } catch (e) {
        return null;
      }
    }
    ((l.SMB_DATA_SHARING_ALLOWED_SOURCE = e),
      (l.getCTWAEligibilityFromConversion = c));
  },
  98,
);
