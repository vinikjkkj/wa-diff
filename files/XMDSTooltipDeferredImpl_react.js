__d(
  "XMDSTooltipDeferredImpl.react",
  [
    "BaseTooltipImpl.react",
    "CDSTooltipStyles",
    "XMDSShadow.react",
    "XMDSSpinner.react",
    "XMDSTextPairing.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["headline", "tooltip"],
      s,
      u = s || (s = o("react")),
      c = {
        shadow: {
          borderStartStartRadius: "xyjepno",
          borderStartEndRadius: "x15s83fx",
          borderEndEndRadius: "xdgutz0",
          borderEndStartRadius: "x1wjlvx0",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(11),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.headline),
          (l = t.tooltip),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(r("XMDSSpinner.react"), {
            color: "primary-button",
            size: 24,
          })),
          (n[4] = s))
        : (s = n[4]);
      var d = s,
        m;
      n[5] !== a || n[6] !== l
        ? ((m =
            l != null
              ? u.jsxs(u.Fragment, {
                  children: [
                    u.jsx(r("XMDSShadow.react"), { xstyle: c.shadow }),
                    u.jsx(r("XMDSTextPairing.react"), {
                      contentColor: "secondaryTextOnMedia",
                      contentText: l,
                      headlineColor: "secondaryTextOnMedia",
                      headlineText: a,
                      textPairingStyle: "headline3Meta",
                    }),
                  ],
                })
              : null),
          (n[5] = a),
          (n[6] = l),
          (n[7] = m))
        : (m = n[7]);
      var p = m,
        _;
      return (
        n[8] !== i || n[9] !== p
          ? ((_ = u.jsx(
              r("BaseTooltipImpl.react"),
              babelHelpers.extends({}, i, {
                loadingState: d,
                tooltip: p,
                xstyle: o("CDSTooltipStyles").CDSTooltipStyles.container,
              }),
            )),
            (n[8] = i),
            (n[9] = p),
            (n[10] = _))
          : (_ = n[10]),
        _
      );
    }
    l.default = d;
  },
  98,
);
