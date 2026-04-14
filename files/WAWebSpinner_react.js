__d(
  "WAWebSpinner.react",
  ["VisualCompletionAttributes", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = "xnrop4s-B",
      m = "xoslcoy-B",
      p = {
        accent: { stroke: "x94ds6z", $$css: !0 },
        container: {
          animationName: "x1e112to",
          animationDuration: "x1c74tu6",
          animationTimingFunction: "x1esw782",
          animationIterationCount: "xa4qsjk",
          zIndex: "xhtitgo",
          $$css: !0,
        },
        default: { stroke: "xsg6dc1", $$css: !0 },
        wdsSecondaryLighter: { stroke: "xsg6dc1", $$css: !0 },
        highlight: { stroke: "x94ds6z", $$css: !0 },
        progress: { stroke: "x9ss0fe", $$css: !0 },
        in: { stroke: "x1yzj2yw", $$css: !0 },
        noop: { visibility: "xnpuxes", $$css: !0 },
        out: { stroke: "x14t83b7", $$css: !0 },
        rounded: { strokeLinecap: "x1owpc8m", $$css: !0 },
        square: { strokeLinecap: "x37uqsb", $$css: !0 },
        path: {
          animationName: "xu41xpa",
          animationDuration: "xmg6eyc",
          animationTimingFunction: "x4hg4is",
          animationIterationCount: "xa4qsjk",
          strokeDasharray: "xbla1kb",
          strokeDashoffset: "x1b0o3cz",
          $$css: !0,
        },
        solidwhite: { stroke: "xaccaqi", $$css: !0 },
        white: { stroke: "x12iiw5v", $$css: !0 },
        rotate: {
          transform: "x9tu13d",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        transparent: { stroke: "xmy28x3", $$css: !0 },
        incoming: { stroke: "x1xg270d", $$css: !0 },
        outgoing: { stroke: "xxcrxs2", $$css: !0 },
      },
      _ = 20;
    function f(e) {
      if (e == null) return null;
      var t = Math.ceil(2 * _ * Math.PI);
      return {
        strokeDasharray: t + " " + t,
        strokeDashoffset: t - (e / 100) * t,
      };
    }
    function g(e, t) {
      if (e == null) return null;
      var n = Math.max(Math.min(e, t), 0);
      return (n * 100) / t;
    }
    function h(e) {
      var t = e.color,
        n = e.outgoingMsg,
        o = e.progress,
        a = e.stroke,
        i = e.strokeLinecap,
        l = i === void 0 ? "round" : i,
        u = e.viewBoxSide;
      return c.jsx("circle", {
        style: f(o),
        className: (s || (s = r("stylex")))(
          l === "round" && p.rounded,
          l === "square" && p.square,
          o == null && p.path,
          typeof t != "string" ? t : p[t],
          n === !1 && p.in,
          n === !0 && p.out,
        ),
        cx: u / 2,
        cy: u / 2,
        r: _,
        fill: "none",
        strokeWidth: a,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.color,
        i = a === void 0 ? "default" : a,
        l = o.max,
        u = l === void 0 ? 100 : l,
        d = o.outgoingMsg,
        m = o.progressContainerColor,
        f = m === void 0 ? "default" : m,
        y = o.size,
        C = y === void 0 ? 65 : y,
        b = o.stroke,
        v = b === void 0 ? 4 : b,
        S = o.strokeLinecap,
        R = S === void 0 ? "round" : S,
        L = o.testid,
        E = L === void 0 ? "loading-spinner" : L,
        k = o.value,
        I = o.xstyle,
        T = g(k, u),
        D = 2 * _ + v,
        x = "0 0 " + D + " " + D;
      return c.jsx(
        "span",
        babelHelpers.extends(
          { ref: n, "data-testid": void 0 },
          r("VisualCompletionAttributes").LOADING_STATE,
          {
            children: c.jsxs(
              "svg",
              babelHelpers.extends(
                {},
                (s || (s = r("stylex"))).props(
                  (T == null && p.container) || p.rotate,
                  I,
                ),
                {
                  width: C,
                  height: C,
                  viewBox: x,
                  role: "status",
                  children: [
                    T != null
                      ? c.jsx(h, {
                          viewBoxSide: D,
                          stroke: v,
                          strokeLinecap: R,
                          outgoingMsg: d,
                          color: f,
                          progress: 100,
                        })
                      : null,
                    c.jsx(h, {
                      progress: T,
                      viewBoxSide: D,
                      stroke: v,
                      strokeLinecap: R,
                      outgoingMsg: d,
                      color: i,
                    }),
                  ],
                },
              ),
            ),
          },
        ),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.RADIUS = _),
      (l.Spinner = y));
  },
  98,
);
