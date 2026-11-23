__d(
  "WebBloksIconSpinner",
  ["WebBloksStyle", "WebBloksTheme", "WebBloksUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.color,
        n = "20",
        r = o("WebBloksTheme").useTheme().getTheme(),
        a = t
          ? o("WebBloksUtils").getRGBColorWithTheme(t, r)
          : o("WebBloksTheme").WebBloksThemeVars["fig-blue-tint-10"];
      return s.jsx("div", {
        className: m.loader,
        "data-visualcompletion": "loading-state",
        children: s.jsxs("svg", {
          className: o("WebBloksStyle").classNames(
            m.iconSpinnerCircular,
            m.iconSpinnerRotating,
            m.iconSpinnerStroke,
          ),
          viewBox: "25 25 50 50",
          children: [
            s.jsx("title", { children: "Spinner" }),
            s.jsx("circle", {
              cx: "50",
              cy: "50",
              r: n,
              fill: "none",
              stroke: o("WebBloksTheme").WebBloksThemeVars["fig-blue-tint-90"],
            }),
            s.jsx("circle", {
              className: o("WebBloksStyle").classNames(
                m.iconSpinnerPath,
                m.iconSpinnerStroke,
              ),
              cx: "50",
              cy: "50",
              r: n,
              fill: "none",
              stroke: a,
            }),
          ],
        }),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
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
