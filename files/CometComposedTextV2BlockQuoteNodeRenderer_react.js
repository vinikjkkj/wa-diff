__d(
  "CometComposedTextV2BlockQuoteNodeRenderer.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className:
              "x1q5d7hi x1t7ytsu x56jcm7 xxdcdb7 x1yztbdb xw7yly9 xmzvs34",
          }),
          (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = s.jsx(
              "blockquote",
              babelHelpers.extends({}, r, { children: n }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = u;
  },
  98,
);
