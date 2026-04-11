__d(
  "WAWebGetCTWAEligibilityFromConversion",
  ["WAArrayBufferUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "FB_Ads";
    function s(t) {
      var n = t.conversionData,
        r = t.conversionSource;
      if (n == null || r !== e) return null;
      try {
        var a = o("WAArrayBufferUtils").arrayBufferToString(n);
        return { data: a, source: e };
      } catch (e) {
        return null;
      }
    }
    ((l.SMB_DATA_SHARING_ALLOWED_SOURCE = e),
      (l.getCTWAEligibilityFromConversion = s));
  },
  98,
);
