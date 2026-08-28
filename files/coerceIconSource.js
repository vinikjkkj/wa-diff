__d(
  "coerceIconSource",
  [
    "CometRelay",
    "IconSource",
    "SVGIconSource",
    "TintableIconSource",
    "coerceIconSource_image.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, i, l) {
      l === void 0 && (l = !1);
      var s = o("CometRelay").readInlineData(
        e !== void 0 ? e : (e = n("coerceIconSource_image.graphql")),
        t,
      );
      if (s != null) {
        if (s.mime_type === "image/svg+xml" && s.uri != null)
          return new (r("SVGIconSource"))(s.uri);
        var u = {
          height: (s.height || 0) / (s.scale == null ? 1 : s.scale),
          sprited: 0,
          uri: s.uri,
          width: (s.width || 0) / (s.scale == null ? 1 : s.scale),
        };
        return l
          ? new (r("TintableIconSource"))(a, u, i)
          : new (r("IconSource"))(a, u, i);
      }
    }
    l.default = s;
  },
  98,
);
