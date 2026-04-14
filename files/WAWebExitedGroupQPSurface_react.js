__d(
  "WAWebExitedGroupQPSurface.react",
  [
    "WAWebCTWAConstants",
    "WAWebFlex.react",
    "WAWebPrivacyTipBanner.react",
    "WAWebQuickPromotionGating",
    "react",
    "useWAWebPrivacyTipQuickPromotion",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.group,
        n = o("useWAWebPrivacyTipQuickPromotion").usePrivacyTipQuickPromotion({
          surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_EXITED_GROUP,
          group: t,
        });
      if (
        !(
          n == null ||
          !o("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled()
        )
      ) {
        var a = n.dismiss,
          i = n.image,
          l = n.primaryActionClick,
          u = n.promotion,
          c = n.sanitizedText,
          d = n.settingStep,
          m = u.promotion.data.primaryAction;
        return s.jsx(o("WAWebFlex.react").FlexRow, {
          paddingTop: 8,
          children: s.jsx(r("WAWebPrivacyTipBanner.react"), {
            text: c,
            image: i,
            actionText: m == null ? void 0 : m.text,
            onDismiss: a,
            onAction: l,
            settingStep: d,
          }),
        });
      }
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
