__d(
  "WAWebEnforcementPolicyDetailsModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSettingsBlockedIcon.react",
    "WAWebWamEnumInteractionSurface",
    "WDSIconIcShield.react",
    "WDSText.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        textCenter: { textAlign: "x2b8uid", $$css: !0 },
        bulletRow: {
          alignItems: "x1cy8zhl",
          boxSizing: "x9f619",
          width: "xh8yej3",
          $$css: !0,
        },
        bulletIcon: { width: "x1useyqa", $$css: !0 },
        iconColor: { color: "xhslqc4", $$css: !0 },
      };
    function m() {
      (r("WAWebEnforcementActionLogging").logChannelGuidelinesClick(),
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
        ));
    }
    function p(e) {
      var t = e.policyInformation;
      return (
        c(function () {
          r("WAWebEnforcementActionLogging").setSurface(
            o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
              .ENFORCEMENT_POLICY_DETAILS_BOTTOM_SHEET,
          );
        }, []),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          function () {
            r("WAWebEnforcementActionLogging").logDismissModalClick();
          },
        ),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okText: r("WAWebFbtCommon")("Close"),
          onOK: o("WAWebModalManager").closeModalManager,
          cancelText: s._(/*BTDS*/ "See Channels Guidelines"),
          onCancel: m,
          testid: void 0,
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              padding: 24,
              testid: void 0,
              children: u.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                textAlign: "center",
                children: t.headline,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                xstyle: d.textCenter,
                children: t.subtitle,
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "start",
              paddingTop: 16,
              children: [
                u.jsx(_, {
                  icon: u.jsx(
                    o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
                    { height: 24, width: 24 },
                  ),
                  text: t.explanation,
                  testid: void 0,
                }),
                u.jsx(_, {
                  icon: u.jsx(r("WDSIconIcShield.react"), {
                    height: 24,
                    width: 24,
                  }),
                  text: t.adminDisclaimer,
                  testid: void 0,
                }),
              ],
            }),
          ],
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.icon,
        n = e.testid,
        a = e.text;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: d.bulletRow,
        marginBottom: 8,
        paddingBottom: 4,
        paddingStart: 8,
        paddingTop: 4,
        testid: void 0,
        children: [
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            shrink: 0,
            xstyle: [d.bulletIcon, d.iconColor],
            children: t,
          }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children: a,
            }),
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
