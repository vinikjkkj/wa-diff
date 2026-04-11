__d(
  "FDSDialogLoadingStateHeader.react",
  [
    "fbt",
    "BaseDialogLabelIDProvider",
    "BaseDivider.react",
    "FBNucleusCrossFilled24Icon.react",
    "FDSCircleButton.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        headerContainer: { width: "xh8yej3", $$css: !0 },
        headerRow: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          justifyContent: "x13a6bvl",
          marginInlineStart: "xyqm7xq",
          marginInlineEnd: "x1ys307a",
          marginLeft: null,
          marginRight: null,
          minHeight: "x879a55",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onClose,
        a = e.withCloseButton,
        i = a === void 0 ? !0 : a,
        l = o("BaseDialogLabelIDProvider").useDialogHeaderID(),
        d;
      t[0] !== n || t[1] !== i
        ? ((d = i
            ? u.jsx(r("FDSCircleButton.react"), {
                "aria-label": s._(/*BTDS*/ "Close"),
                icon: r("FBNucleusCrossFilled24Icon.react"),
                onPress: n,
                size: 36,
                testid: void 0,
              })
            : null),
          (t[0] = n),
          (t[1] = i),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== l || t[4] !== d
        ? ((m = u.jsx(o("react-strict-dom").html.div, {
            id: l,
            style: c.headerRow,
            children: d,
          })),
          (t[3] = l),
          (t[4] = d),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("BaseDivider.react"), {})), (t[6] = p))
        : (p = t[6]);
      var _;
      return (
        t[7] !== m
          ? ((_ = u.jsxs(o("react-strict-dom").html.div, {
              style: c.headerContainer,
              children: [m, p],
            })),
            (t[7] = m),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    l.default = d;
  },
  226,
);
