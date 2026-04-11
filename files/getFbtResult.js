__d(
  "getFbtResult",
  [
    "FBLogger",
    "FbtResult",
    "FbtResultGK",
    "InlineFbtResult",
    "getUnwrappedFbt",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    r("gkx")("20935") &&
      r("FbtResultGK").inlineMode === "TRANSLATION" &&
      r("FBLogger")("internationalization").mustfix(
        "TransAppInlineMode=TRANSLATION should not happen on Comet yet. [inlineMode=%s][runtime_site_is_comet=%s]",
        r("FbtResultGK").inlineMode != null ? r("FbtResultGK").inlineMode : "",
        String(r("gkx")("20935")),
      );
    function e(e) {
      var t = r("getUnwrappedFbt")(e);
      if (t != null) return t;
      var n = e.contents,
        o = e.patternHash,
        a = e.patternString;
      return r("FbtResultGK").inlineMode != null &&
        r("FbtResultGK").inlineMode !== "NO_INLINE"
        ? new (r("InlineFbtResult"))(n, r("FbtResultGK").inlineMode, a, o)
        : r("FbtResult").get(e);
    }
    l.default = e;
  },
  98,
);
