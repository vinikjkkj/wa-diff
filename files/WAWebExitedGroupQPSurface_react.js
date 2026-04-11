__d(
  "WAWebExitedGroupQPSurface.react",
  [
    "WAWebCTWAConstants",
    "WAWebFlex.react",
    "WAWebPrivacyTipBanner.react",
    "WAWebQuickPromotionGating",
    "react",
    "react-compiler-runtime",
    "useWAWebPrivacyTipQuickPromotion",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.group,
        a;
      t[0] !== n
        ? ((a = {
            surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_EXITED_GROUP,
            group: n,
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = o("useWAWebPrivacyTipQuickPromotion").usePrivacyTipQuickPromotion(
        a,
      );
      if (
        !(
          i == null ||
          !o("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled()
        )
      ) {
        var l = i.dismiss,
          u = i.image,
          c = i.primaryActionClick,
          d = i.promotion,
          m = i.sanitizedText,
          p = i.settingStep,
          _ = d.promotion.data.primaryAction,
          f = _ == null ? void 0 : _.text,
          g;
        return (
          t[2] !== l ||
          t[3] !== u ||
          t[4] !== c ||
          t[5] !== m ||
          t[6] !== p ||
          t[7] !== f
            ? ((g = s.jsx(o("WAWebFlex.react").FlexRow, {
                paddingTop: 8,
                children: s.jsx(r("WAWebPrivacyTipBanner.react"), {
                  text: m,
                  image: u,
                  actionText: f,
                  onDismiss: l,
                  onAction: c,
                  settingStep: p,
                }),
              })),
              (t[2] = l),
              (t[3] = u),
              (t[4] = c),
              (t[5] = m),
              (t[6] = p),
              (t[7] = f),
              (t[8] = g))
            : (g = t[8]),
          g
        );
      }
    }
    l.default = u;
  },
  98,
);
