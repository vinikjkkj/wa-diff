__d(
  "XMDSMiniToastProvider.react",
  [
    "BasePortal.react",
    "CDSMiniToastContext",
    "CDSMiniToastIDContext",
    "CometPlaceholder.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = m(1),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {}), (t[0] = l))
        : (l = t[0]);
      var u = p(l),
        c = u[0],
        d = u[1],
        _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function (t) {
            a.current = a.current + 1;
            var e = "minitoast-" + a.current;
            return (
              d(function (n) {
                var r;
                return babelHelpers.extends({}, n, ((r = {}), (r[e] = t), r));
              }),
              e
            );
          }),
          (t[1] = _))
        : (_ = t[1]);
      var g = _,
        h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            d(function (e) {
              var n = babelHelpers.extends({}, e);
              return (delete n[t], n);
            });
          }),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== c
        ? ((C = { activeToasts: c, add: g, remove: y }), (t[3] = c), (t[4] = C))
        : (C = t[4]);
      var b = C,
        v;
      t[5] !== c
        ? ((v =
            Object.keys(c).length > 0 &&
            s.jsx(r("BasePortal.react"), {
              hidden: Object.keys(c).length === 0,
              target: document.body,
              xstyle: f.root,
              children: Object.keys(c).map(function (e) {
                return s.jsx(
                  r("CometPlaceholder.react"),
                  {
                    fallback: null,
                    name: i.id,
                    children: s.jsx(r("CDSMiniToastIDContext").Provider, {
                      value: e,
                      children: c[e],
                    }),
                  },
                  e,
                );
              }),
            })),
          (t[5] = c),
          (t[6] = v))
        : (v = t[6]);
      var S;
      return (
        t[7] !== n || t[8] !== b || t[9] !== v
          ? ((S = s.jsxs(r("CDSMiniToastContext").Provider, {
              value: b,
              children: [n, v],
            })),
            (t[7] = n),
            (t[8] = b),
            (t[9] = v),
            (t[10] = S))
          : (S = t[10]),
        S
      );
    }
    var f = {
      root: {
        alignItems: "x6s0dn4",
        bottom: "x1ey2m1c",
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        insetInlineEnd: "xtijo5x",
        insetInlineStart: "x1o0tod",
        left: null,
        right: null,
        justifyContent: "xl56j7k",
        pointerEvents: "x47corl",
        position: "xixxii4",
        top: "x13vifvy",
        zIndex: "x1ladpmw",
        $$css: !0,
      },
    };
    l.default = _;
  },
  98,
);
