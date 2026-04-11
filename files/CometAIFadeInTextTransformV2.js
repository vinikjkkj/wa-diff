__d(
  "CometAIFadeInTextTransformV2",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "x18re5ia-B";
    function c(e, t) {
      return (
        t === void 0 && (t = !1),
        function (n) {
          return e == null || e === "OVERALL_DONE" || t
            ? n
            : s.jsx(s.Fragment, {
                children:
                  typeof n == "string"
                    ? n.split(" ").map(function (e, t) {
                        return s.jsxs(
                          "span",
                          {
                            className: "xs4xyr0 xqcmdr3 xn0cd8s",
                            children: [t > 0 ? " " : null, e],
                          },
                          e + "_" + t,
                        );
                      })
                    : s.jsx("span", {
                        className: "xs4xyr0 xqcmdr3 xn0cd8s",
                        children: n,
                      }),
              });
        }
      );
    }
    l.default = c;
  },
  98,
);
