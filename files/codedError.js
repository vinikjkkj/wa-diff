__d(
  "codedError",
  ["fbt", "invariant", "err"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      u(0, 2095);
    }
    ((e.withParams = function (e, t) {
      u(0, 2095);
    }),
      (e._ = function (t, n, o, a) {
        var e = n(s),
          i = o(s, a),
          l = e + ": " + i,
          u = r("err")(l);
        return (
          Object.assign(u, {
            framesToPop: 1,
            code: t,
            description: i,
            summary: e,
          }),
          u
        );
      }));
    var c = e;
    l.default = c;
  },
  98,
);
