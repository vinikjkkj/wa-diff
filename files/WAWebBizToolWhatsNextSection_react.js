__d(
  "WAWebBizToolWhatsNextSection.react",
  [
    "fbt",
    "WAWebBizToolsDrawerBodySection.react",
    "WAWebBizToolsTopCard.react",
    "WAWebCTWAConstants",
    "react",
    "react-compiler-runtime",
    "useWAWebBestQuickPromotionForSurface",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            surfaceId:
              o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD,
          }),
          (n = { fireImpression: !0 }),
          (e[0] = t),
          (e[1] = n))
        : ((t = e[0]), (n = e[1]));
      var a = o(
        "useWAWebBestQuickPromotionForSurface",
      ).useBestQuickPromotionForSurface(t, n);
      if (a == null) return null;
      var i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "What's next?")), (e[2] = i))
        : (i = e[2]);
      var l;
      return (
        e[3] !== a
          ? ((l = u.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
              hideDivider: !0,
              headerText: i,
              children: u.jsx(r("WAWebBizToolsTopCard.react"), {
                promotion: a,
              }),
            })),
            (e[3] = a),
            (e[4] = l))
          : (l = e[4]),
        l
      );
    }
    l.default = c;
  },
  226,
);
