__d(
  "WebBloksErrorRoot",
  ["WebBloksErrorRenderer", "WebBloksStyle", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.error,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s.jsx("div", {
            className: c.errorText,
            children: "An error occurred. Please reload to try again.",
          })),
          (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n ? ((a = null), (t[1] = n), (t[2] = a)) : (a = t[2]);
      var i;
      return (
        t[3] !== a
          ? ((i = s.jsxs("div", { className: c.errorRoot, children: [r, a] })),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    var c = o("WebBloksStyle").createStyles({
      errorRoot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      },
      errorText: { fontWeight: "bold" },
    });
    l.default = u;
  },
  98,
);
