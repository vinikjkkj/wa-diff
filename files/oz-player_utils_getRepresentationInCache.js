__d(
  "oz-player/utils/getRepresentationInCache",
  ["oz-player/networks/RequestParamCreator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("oz-player/networks/RequestParamCreator"))();
    function s(t, n) {
      return (
        n === void 0 && (n = null),
        t.find(function (t) {
          var r = t.getInitSegment(),
            o = r && r.getByteRange();
          return r && o && n
            ? n.hasCacheValue(
                e.createRequestParam(r.getURI(), o, "auto").uri.toString(),
              )
            : !1;
        }) || null
      );
    }
    l.default = s;
  },
  98,
);
