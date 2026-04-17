__d(
  "CometLineBreakTransform",
  ["baseTextTransformAllStrings", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t) {
        var e = 0;
        return r("baseTextTransformAllStrings")(t, function (t, n) {
          return t.split("\n").reduce(function (t, r, a) {
            return a === 0
              ? [].concat(t, [r])
              : [].concat(t, [
                  s.jsx(o("react-strict-dom").html.br, {}, n + "-" + e++),
                  r,
                ]);
          }, []);
        });
      };
    l.default = u;
  },
  98,
);
