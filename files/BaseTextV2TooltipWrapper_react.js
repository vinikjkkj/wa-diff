__d(
  "BaseTextV2TooltipWrapper.react",
  [
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState,
      m = r("JSResourceForInteraction")("BaseTooltip.react").__setRef(
        "BaseTextV2TooltipWrapper.react",
      ),
      p = r("lazyLoadComponent")(m);
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.truncationTooltip,
        i = c(null),
        l = d(!1),
        u = l[0],
        _ = l[1],
        f = d(),
        g = f[0],
        h = f[1],
        y;
      t[0] !== u || t[1] !== a
        ? ((y = function () {
            var e = i.current;
            if (!(e == null || a.tooltipImpl == null)) {
              var t =
                e.offsetWidth < e.scrollWidth ||
                e.offsetHeight < e.scrollHeight;
              (t !== u && _(t),
                t &&
                  (m.preload(),
                  r("promiseDone")(a.tooltipImpl.load(), function (e) {
                    h(function (t) {
                      return e;
                    });
                  })));
            }
          }),
          (t[0] = u),
          (t[1] = a),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            var e,
              n =
                t == null || (e = t.children[0]) == null
                  ? void 0
                  : e.children[0];
            if (n == null) return null;
            i.current = {
              offsetHeight: n.offsetHeight,
              offsetWidth: n.offsetWidth,
              scrollHeight: n.scrollHeight,
              scrollWidth: n.scrollWidth,
            };
          }),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] !== n || t[5] !== u || t[6] !== g || t[7] !== a
        ? ((S =
            u && g != null
              ? s.jsx(
                  p,
                  babelHelpers.extends({ tooltipImpl: g }, a.tooltipProps, {
                    children: n,
                  }),
                )
              : n),
          (t[4] = n),
          (t[5] = u),
          (t[6] = g),
          (t[7] = a),
          (t[8] = S))
        : (S = t[8]);
      var R;
      return (
        t[9] !== C || t[10] !== S
          ? ((R = s.jsx(o("react-strict-dom").html.span, {
              onMouseEnter: C,
              ref: v,
              children: S,
            })),
            (t[9] = C),
            (t[10] = S),
            (t[11] = R))
          : (R = t[11]),
        R
      );
    }
    l.default = _;
  },
  98,
);
