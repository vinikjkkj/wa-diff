__d(
  "CometComposedTextV2ParagraphNodeRenderer.react",
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
        ? ((r = { className: "xdj266r x14z9mp xat24cr x1lziwak" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = s.jsx("p", babelHelpers.extends({}, r, { children: n }))),
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
