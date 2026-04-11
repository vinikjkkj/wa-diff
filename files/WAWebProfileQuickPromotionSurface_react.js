__d(
  "WAWebProfileQuickPromotionSurface.react",
  [
    "WAWebCTWAConstants",
    "WAWebDrawerSection.react",
    "WAWebPrivacyTipBanner.react",
    "WAWebQuickPromotionGating",
    "WAWebUserPrefsGeneral",
    "react",
    "react-compiler-runtime",
    "useWAWebPrivacyTipQuickPromotion",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(9),
        t,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_PROFILE }),
          (n = [o("WAWebUserPrefsGeneral").getLastProfilePicThumbUpdate()]),
          (e[0] = t),
          (e[1] = n))
        : ((t = e[0]), (n = e[1]));
      var a = o("useWAWebPrivacyTipQuickPromotion").usePrivacyTipQuickPromotion(
        t,
        n,
      );
      if (
        !(
          a == null ||
          !o("WAWebQuickPromotionGating").profilePrivacyTipsEnabled()
        )
      ) {
        var i = a.dismiss,
          l = a.image,
          u = a.primaryActionClick,
          c = a.promotion,
          d = a.sanitizedText,
          m = a.settingStep,
          p = c.promotion.data.primaryAction,
          _ = p == null ? void 0 : p.text,
          f;
        return (
          e[2] !== i ||
          e[3] !== l ||
          e[4] !== u ||
          e[5] !== d ||
          e[6] !== m ||
          e[7] !== _
            ? ((f = s.jsx(r("WAWebDrawerSection.react"), {
                theme: "padding-no-vertical",
                children: s.jsx(r("WAWebPrivacyTipBanner.react"), {
                  text: d,
                  image: l,
                  actionText: _,
                  onDismiss: i,
                  onAction: u,
                  settingStep: m,
                }),
              })),
              (e[2] = i),
              (e[3] = l),
              (e[4] = u),
              (e[5] = d),
              (e[6] = m),
              (e[7] = _),
              (e[8] = f))
            : (f = e[8]),
          f
        );
      }
    }
    l.default = u;
  },
  98,
);
