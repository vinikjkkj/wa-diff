__d(
  "WebBloksErrorRenderer",
  ["WebBloksTheme", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.error;
      return s.jsxs("div", {
        style: {
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
        },
        children: [
          s.jsxs("div", {
            style: {
              color: "white",
              fontWeight: "bolder",
              justifyContent: "center",
            },
            children: [
              "[fb-only] WebBloks Render error ",
              t.name,
              ": ",
              t.message,
            ],
          }),
          s.jsx("div", {
            style: {
              color: "white",
              fontWeight: "bolder",
              justifyContent: "center",
              fontSize: "75%",
            },
            children: "this will throw in production",
          }),
          s.jsx("pre", {
            style: {
              backgroundColor:
                o("WebBloksTheme").WebBloksThemeVars["primary-bg"],
              borderRadius: 4,
              flexGrow: 1,
              fontFamily: "monospace",
              marginTop: 16,
              overflow: "scroll",
              padding: 16,
              whiteSpace: "pre-wrap",
              lineBreak: "anywhere",
            },
            children: t.stack,
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
