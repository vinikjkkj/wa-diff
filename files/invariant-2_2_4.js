__d(
  "invariant-2.2.4",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      var e = "production",
        t = function (t, n, r, o, a, i, l, s) {
          if (e !== "production" && n === void 0)
            throw new Error("invariant requires an error message argument");
          if (!t) {
            var u;
            if (n === void 0)
              u = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
              );
            else {
              var c = [r, o, a, i, l, s],
                d = 0;
              ((u = new Error(
                n.replace(/%s/g, function () {
                  return c[d++];
                }),
              )),
                (u.name = "Invariant Violation"));
            }
            throw ((u.framesToPop = 1), u);
          }
        };
      l.exports = t;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
