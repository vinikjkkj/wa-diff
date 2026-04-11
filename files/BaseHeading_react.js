__d(
  "BaseHeading.react",
  [
    "BaseHeadingContext",
    "BaseTextContext",
    "FBLogger",
    "XPlatReactUserAgent",
    "gkx",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m =
        r("XPlatReactUserAgent").isBrowser("Chrome < 83") ||
        r("XPlatReactUserAgent").isBrowser("Safari < 14.1") ||
        r("XPlatReactUserAgent").isBrowser("Firefox < 69"),
      p = {
        oldBrowsers: { boxShadow: "x1gnnqk1 x59fq91", $$css: !0 },
        root: {
          color: "x1heor9g",
          fontSize: "x1qlqyl8",
          fontWeight: "x1pd3egz",
          outline: "x1a2a7pz",
          $$css: !0,
        },
        rootGated: { boxShadow: "x1gnnqk1 xpx8ijz xq7l91r", $$css: !0 },
      },
      _ = {
        1: o("react-strict-dom").html.h1,
        2: o("react-strict-dom").html.h2,
        3: o("react-strict-dom").html.h3,
        4: o("react-strict-dom").html.h4,
        5: o("react-strict-dom").html.h5,
        6: o("react-strict-dom").html.h6,
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.id,
        i = e.isPrimaryHeading,
        l = e.ref,
        u = e.suppressHydrationWarning,
        d = e.testid,
        f = e.xstyle,
        g = i === void 0 ? !1 : i,
        h = c(r("BaseHeadingContext")),
        y;
      e: {
        if (g) {
          y = o("react-strict-dom").html.h1;
          break e;
        }
        var C = Math.max(Math.min(h, 6), 2);
        y = _["" + C];
      }
      var b = y;
      if (b == null)
        throw r("FBLogger")("comet_ui").mustfixThrow(
          "Failed to retrieve a heading tag, this should not be possible",
        );
      var v = o("BaseTextContext").useBaseTextContext(),
        S = (v == null ? void 0 : v.nested) === !0,
        R;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = r("gkx")("8029") ? [p.rootGated, m && p.oldBrowsers] : []),
          (t[0] = R))
        : (R = t[0]);
      var L = R,
        E = S ? void 0 : "auto",
        k;
      t[1] !== f
        ? ((k = [p.root].concat(L, [[f]])), (t[1] = f), (t[2] = k))
        : (k = t[2]);
      var I;
      return (
        t[3] !== b ||
        t[4] !== n ||
        t[5] !== a ||
        t[6] !== l ||
        t[7] !== u ||
        t[8] !== E ||
        t[9] !== k ||
        t[10] !== d
          ? ((I = s.jsx(b, {
              "data-testid": void 0,
              dir: E,
              id: a,
              ref: l,
              style: k,
              suppressHydrationWarning: u,
              children: n,
            })),
            (t[3] = b),
            (t[4] = n),
            (t[5] = a),
            (t[6] = l),
            (t[7] = u),
            (t[8] = E),
            (t[9] = k),
            (t[10] = d),
            (t[11] = I))
          : (I = t[11]),
        I
      );
    }
    l.default = f;
  },
  98,
);
