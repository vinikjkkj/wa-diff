__d(
  "WAWebBizAdCreationErrorModal.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          rowGap: "x1j3ira4",
          $$css: !0,
        },
        headerText: { textAlign: "x2b8uid", alignSelf: "xkh2ocl", $$css: !0 },
      };
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(r("WDSButton.react"), {
              testid: void 0,
              label: s._(/*BTDS*/ "Try again"),
              variant: "filled",
              size: "medium",
              onPress: o("WAWebModalManager").closeModalManager,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.errorMessage,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Something went wrong")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] !== n
        ? ((l =
            n != null
              ? n
              : s._(/*BTDS*/ "We couldn't create your ad. Please try again.")),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var m = l,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(d, {})), (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            xstyle: c.headerText,
            children: i,
          })),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== m
          ? ((f = u.jsx(o("WAWebModal.react").Modal, {
              actions: p,
              type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: c.container,
                children: [
                  _,
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    textAlign: "center",
                    children: m,
                  }),
                ],
              }),
            })),
            (t[5] = m),
            (t[6] = f))
          : (f = t[6]),
        f
      );
    }
    l.default = m;
  },
  226,
);
