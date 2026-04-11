__d(
  "CometComposedTextV2Renderer.react",
  ["CometComposedTextV2NodeRenderer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.nodes,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x78zum5 xdt5ytf x3pnbk8" }), (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n ? ((a = n.map(c)), (t[1] = n), (t[2] = a)) : (a = t[2]);
      var i;
      return (
        t[3] !== a
          ? ((i = s.jsx("div", babelHelpers.extends({}, r, { children: a }))),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function c(e, t) {
      return s.jsx(r("CometComposedTextV2NodeRenderer.react"), { node: e }, t);
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
