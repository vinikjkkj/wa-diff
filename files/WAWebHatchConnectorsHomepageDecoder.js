__d(
  "WAWebHatchConnectorsHomepageDecoder",
  ["WAWebHatchConnectorsListDecoder", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = o("WAWebHatchJsonReaders").readArray(e, "categories");
      if (r == null) return null;
      var a = [];
      for (var i of r) {
        var l = s(i);
        l != null && a.push(l);
      }
      return {
        customCount: Math.max(
          (t = o("WAWebHatchJsonReaders").readInteger(e, "custom_count")) !=
            null
            ? t
            : 0,
          0,
        ),
        featured: o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorRows(
          (n = o("WAWebHatchJsonReaders").readArray(e, "featured")) != null
            ? n
            : [],
        ),
        categories: a,
      };
    }
    function s(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readTrimmedString(e, "id"),
        r = o("WAWebHatchJsonReaders").readTrimmedString(e, "title");
      return o("WAWebHatchJsonReaders").isBlankText(n) ||
        o("WAWebHatchJsonReaders").isBlankText(r)
        ? null
        : {
            id: n,
            title: r,
            connectors: o(
              "WAWebHatchConnectorsListDecoder",
            ).decodeHatchConnectorRows(
              (t = o("WAWebHatchJsonReaders").readArray(e, "connectors")) !=
                null
                ? t
                : [],
            ),
          };
    }
    l.decodeHatchConnectorsHomepage = e;
  },
  98,
);
