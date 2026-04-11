__d(
  "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = /^([A-Z_]+:)|([A-Z_]+\s+\(0x[0-9A-Fa-f]+\))/.exec(e),
        o = (
          (t =
            (n = r == null ? void 0 : r[1]) != null
              ? n
              : r == null
                ? void 0
                : r[2]) != null
            ? t
            : ""
        )
          .replace(/\s+/, "_")
          .replace(/[^A-Za-z0-9_]/g, "");
      return o !== "" ? o : null;
    }
    i.default = e;
  },
  66,
);
