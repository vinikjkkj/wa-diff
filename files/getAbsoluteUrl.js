__d(
  "getAbsoluteUrl",
  ["ConstUriUtils", "FBLogger", "isBlobUrl", "isDataUrl", "isMailToUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (
        e == null ||
        e.trim() === "#" ||
        r("isMailToUrl")(e) ||
        r("isDataUrl")(e) ||
        r("isBlobUrl")(e)
      )
        return e;
      var n =
        (t = o("ConstUriUtils").getUri(e)) == null ||
        (t = t.getQualifiedUri()) == null
          ? void 0
          : t.toString();
      return (
        n == null &&
          r("FBLogger")("comet_infra")
            .blameToPreviousFrame()
            .mustfix("must pass a valid href to getAbsoluteUrl"),
        n
      );
    }
    l.default = e;
  },
  98,
);
