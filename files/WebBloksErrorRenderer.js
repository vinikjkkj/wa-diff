__d(
  "WebBloksErrorRenderer",
  ["WebBloksTheme", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.error,
        r,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            backgroundColor:
              o("WebBloksTheme").WebBloksThemeVars["error-or-destructive"],
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            margin: 16,
            overflow: "hidden",
            padding: 16,
            width: "100%",
            minHeight: 400,
            minWidth: 200,
            boxSizing: "border-box",
          }),
          (a = {
            color: "white",
            fontWeight: "bolder",
            justifyContent: "center",
          }),
          (t[0] = r),
          (t[1] = a))
        : ((r = t[0]), (a = t[1]));
      var i;
      t[2] !== n.message || t[3] !== n.name
        ? ((i = s.jsxs("div", {
            style: a,
            children: [
              "[fb-only] WebBloks Render error ",
              n.name,
              ": ",
              n.message,
            ],
          })),
          (t[2] = n.message),
          (t[3] = n.name),
          (t[4] = i))
        : (i = t[4]);
      var l, u;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s.jsx("div", {
            style: {
              color: "white",
              fontWeight: "bolder",
              justifyContent: "center",
              fontSize: "75%",
            },
            children: "this will throw in production",
          })),
          (u = {
            backgroundColor: o("WebBloksTheme").WebBloksThemeVars["primary-bg"],
            borderRadius: 4,
            flexGrow: 1,
            fontFamily: "monospace",
            marginTop: 16,
            overflow: "scroll",
            padding: 16,
            whiteSpace: "pre-wrap",
            lineBreak: "anywhere",
          }),
          (t[5] = l),
          (t[6] = u))
        : ((l = t[5]), (u = t[6]));
      var c;
      t[7] !== n.stack
        ? ((c = s.jsx("pre", { style: u, children: n.stack })),
          (t[7] = n.stack),
          (t[8] = c))
        : (c = t[8]);
      var d;
      return (
        t[9] !== i || t[10] !== c
          ? ((d = s.jsxs("div", { style: r, children: [i, l, c] })),
            (t[9] = i),
            (t[10] = c),
            (t[11] = d))
          : (d = t[11]),
        d
      );
    }
    l.default = u;
  },
  98,
);
