__d(
  "adsCreateStructuredSelector",
  ["adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = Object.keys(e),
        o = Object.keys(e).map(function (t) {
          return e[t];
        });
      return r("adsCreateSelector")(
        o,
        function () {
          for (var e = {}, t = 0; t < arguments.length; t++)
            e[n[t]] = t < 0 || arguments.length <= t ? void 0 : arguments[t];
          return e;
        },
        { name: t },
      );
    }
    l.default = e;
  },
  98,
);
