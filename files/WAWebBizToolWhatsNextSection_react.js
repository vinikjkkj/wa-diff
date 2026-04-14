__d(
  "WAWebBizToolWhatsNextSection.react",
  [
    "fbt",
    "WAWebBizToolsDrawerBodySection.react",
    "WAWebBizToolsTopCard.react",
    "WAWebCTWAConstants",
    "react",
    "useWAWebBestQuickPromotionForSurface",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o(
        "useWAWebBestQuickPromotionForSurface",
      ).useBestQuickPromotionForSurface(
        {
          surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD,
        },
        { fireImpression: !0 },
      );
      return e == null
        ? null
        : u.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
            hideDivider: !0,
            headerText: s._(/*BTDS*/ "What's next?"),
            children: u.jsx(r("WAWebBizToolsTopCard.react"), { promotion: e }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
