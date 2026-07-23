__d(
  "normalizeCometRouterUrl",
  [
    "CometUrlTransformsConfig",
    "absoluteToRelative",
    "isCometRouterUrl",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      var e = r("CometUrlTransformsConfig").should_remove_trailing_slash;
      return e ? [r("absoluteToRelative"), s, u] : [r("absoluteToRelative"), u];
    })();
    function s(e) {
      return e[e.length - 1] === "/" ? e.substring(0, e.length - 1) : e;
    }
    function u(e) {
      return e[0] !== "/" ? "/" + e : e;
    }
    var c = r("memoizeStringOnly")(function (t) {
      return r("isCometRouterUrl")(t)
        ? e.reduce(function (e, t) {
            return t(e);
          }, t)
        : t;
    });
    l.default = c;
  },
  98,
);
