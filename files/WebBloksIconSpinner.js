__d(
  "WebBloksIconSpinner",
  [
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.color,
        r = o("WebBloksTheme").useTheme(),
        a;
      if (t[0] !== n || t[1] !== r) {
        var i = r.getTheme();
        ((a = n
          ? o("WebBloksUtils").getRGBColorWithTheme(n, i)
          : o("WebBloksTheme").WebBloksThemeVars["fig-blue-tint-10"]),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a));
      } else a = t[2];
      var l = a,
        u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o("WebBloksStyle").classNames(
            m.iconSpinnerCircular,
            m.iconSpinnerRotating,
            m.iconSpinnerStroke,
          )),
          (t[3] = u))
        : (u = t[3]);
      var c, d, p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx("title", { children: "Spinner" })),
          (d = s.jsx("circle", {
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: o("WebBloksTheme").WebBloksThemeVars["fig-blue-tint-90"],
          })),
          (p = o("WebBloksStyle").classNames(
            m.iconSpinnerPath,
            m.iconSpinnerStroke,
          )),
          (t[4] = c),
          (t[5] = d),
          (t[6] = p))
        : ((c = t[4]), (d = t[5]), (p = t[6]));
      var _;
      return (
        t[7] !== l
          ? ((_ = s.jsx("div", {
              className: m.loader,
              "data-visualcompletion": "loading-state",
              children: s.jsxs("svg", {
                className: u,
                viewBox: "25 25 50 50",
                children: [
                  c,
                  d,
                  s.jsx("circle", {
                    className: p,
                    cx: "50",
                    cy: "50",
                    r: "20",
                    fill: "none",
                    stroke: l,
                  }),
                ],
              }),
            })),
            (t[7] = l),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    var c = o("WebBloksStyle").keyframes({
        "100%": { transform: "rotate(360deg)" },
      }),
      d = o("WebBloksStyle").keyframes({
        "0%": { strokeDasharray: "1, 200", strokeDashoffset: "0" },
        "50%": { strokeDasharray: "200, 200", strokeDashoffset: "0px" },
        "75%,100%": { strokeDasharray: "89, 200", strokeDashoffset: "-125px" },
      }),
      m = o("WebBloksStyle").createStyles({
        loader: function (t) {
          var e;
          return (
            (e = {}),
            (e[t] = { margin: 0, position: "relative", width: 65 }),
            (e[t + "::before"] = {
              content: "''",
              display: "block",
              paddingTop: "100%",
            }),
            e
          );
        },
        iconSpinnerCircular: {
          bottom: 0,
          height: "100%",
          left: 0,
          margin: "auto",
          position: "absolute",
          right: 0,
          top: 0,
          transformOrigin: "center center",
          width: "100%",
        },
        iconSpinnerRotating: { animation: c + " 3s linear infinite" },
        iconSpinnerPath: {
          animation: d + " 2s ease-in-out infinite",
          strokeDasharray: "1, 200",
          strokeDashoffset: "0",
          strokeLinecap: "round",
        },
        iconSpinnerStroke: { strokeMiterlimit: "10", strokeWidth: "1.5" },
      });
    l.default = u;
  },
  98,
);
