__d(
  "WAWebProfileQuickPromotionSurface.react",
  [
    "WAWebCTWAConstants",
    "WAWebDrawerSection.react",
    "WAWebPrivacyTipBanner.react",
    "WAWebQuickPromotionGating",
    "WAWebUserPrefsGeneral",
    "react",
    "useWAWebPrivacyTipQuickPromotion",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("useWAWebPrivacyTipQuickPromotion").usePrivacyTipQuickPromotion(
        { surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_PROFILE },
        [o("WAWebUserPrefsGeneral").getLastProfilePicThumbUpdate()],
      );
      if (
        !(
          e == null ||
          !o("WAWebQuickPromotionGating").profilePrivacyTipsEnabled()
        )
      ) {
        var t = e.dismiss,
          n = e.image,
          a = e.primaryActionClick,
          i = e.promotion,
          l = e.sanitizedText,
          u = e.settingStep,
          c = i.promotion.data.primaryAction;
        return s.jsx(r("WAWebDrawerSection.react"), {
          theme: "padding-no-vertical",
          children: s.jsx(r("WAWebPrivacyTipBanner.react"), {
            text: l,
            image: n,
            actionText: c == null ? void 0 : c.text,
            onDismiss: t,
            onAction: a,
            settingStep: u,
          }),
        });
      }
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
