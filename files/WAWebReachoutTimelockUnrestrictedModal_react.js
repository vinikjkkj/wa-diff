__d(
  "WAWebReachoutTimelockUnrestrictedModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebIcBusinessCenterIcon.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebReachoutTimelockUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WAWebWdsPictoUserCheckFeedbackPositiveIcon.react",
    "WDSIconIcMood.react",
    "WDSIconWdsIcChat.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        bulletIcon: { color: "xhslqc4", $$css: !0 },
        bulletIconContainer: { width: "xvy4d1p", $$css: !0 },
      };
    function d() {
      return [
        {
          icon: u.jsx(r("WDSIconIcMood.react"), { xstyle: c.bulletIcon }),
          text: function () {
            return s._(
              /*BTDS*/ "You can avoid further restrictions or bans by following our {=m2}.",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                    children: s._(
                      /*BTDS*/ "WhatsApp Business Messaging Policy",
                    ),
                  }),
                ),
              ],
            );
          },
          testid: "reachout-timelock-unrestricted-cpv-modal-bullet-1",
        },
        {
          icon: u.jsx(r("WDSIconWdsIcChat.react"), {
            iconXstyle: c.bulletIcon,
          }),
          text: function () {
            return s._(
              /*BTDS*/ "There are ways you can improve your messaging quality. {=m2}.",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getMessagingBestPracticeUrl(),
                    children: s._(/*BTDS*/ "See our messaging best practices"),
                  }),
                ),
              ],
            );
          },
          testid: "reachout-timelock-unrestricted-cpv-modal-bullet-2",
        },
      ];
    }
    function m() {
      return [
        {
          icon: u.jsx(r("WDSIconIcMood.react"), { xstyle: c.bulletIcon }),
          text: function () {
            return s._(/*BTDS*/ "Don't send unwanted or bulk messages. {=m2}", [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getMessagingBestPracticeUrl(),
                  children: s._(/*BTDS*/ "See our messaging best practices"),
                }),
              ),
            ]);
          },
          testid: "reachout-timelock-unrestricted-modal-bullet-1",
        },
        {
          icon: u.jsx(
            o("WAWebIcBusinessCenterIcon.react").IcBusinessCenterIcon,
            { width: 24, height: 24, xstyle: c.bulletIcon },
          ),
          text: function () {
            return s._(
              /*BTDS*/ "Are you a business trying to reach your customers? {=m2}",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl(),
                    children: s._(/*BTDS*/ "Try WhatsApp Business"),
                  }),
                ),
              ],
            );
          },
          testid: "reachout-timelock-unrestricted-modal-bullet-2",
        },
      ];
    }
    function p(e) {
      return e ? d() : m();
    }
    function _(e) {
      return e
        ? null
        : s._(
            /*BTDS*/ "You can avoid account restrictions or bans by following our guidelines on spam, automated and bulk messaging.",
          );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n = e.enforcementType,
        a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
        ),
        i =
          (t = n != null ? n : a == null ? void 0 : a.enforcement_type) != null
            ? t
            : o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.DEFAULT,
        l = o("WAWebReachoutTimelockUtils").isCPVEnforcement(i),
        d = p(l),
        m = _(l);
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "reachout-timelock-unrestricted",
        },
        type: o("WAWebModal.react").ModalTheme.ReachoutTimelock,
        okText: s._(/*BTDS*/ "Close"),
        okButtonType: "secondary",
        onOK: o("WAWebModalManager").closeModalManager,
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            paddingBottom: 24,
            children: u.jsx(
              o("WAWebWdsPictoUserCheckFeedbackPositiveIcon.react")
                .WdsPictoUserCheckFeedbackPositiveIcon,
              {},
            ),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            paddingBottom: 16,
            paddingStart: 24,
            paddingEnd: 24,
            children: u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              textAlign: "center",
              testid: void 0,
              children: s._(/*BTDS*/ "Your account is no longer restricted"),
            }),
          }),
          m != null &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              paddingBottom: 16,
              paddingStart: 24,
              paddingEnd: 24,
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                textAlign: "center",
                testid: void 0,
                children: m,
              }),
            }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            justify: "start",
            children: d.map(function (e) {
              var t = e.icon,
                n = e.testid,
                a = e.text;
              return u.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  testid: void 0,
                  paddingStart: 8,
                  paddingTop: 4,
                  paddingBottom: 4,
                  marginBottom: 8,
                  columnGap: 24,
                  align: "center",
                  children: [
                    u.jsx(o("WAWebFlex.react").FlexColumn, {
                      justify: "center",
                      align: "center",
                      shrink: 0,
                      xstyle: c.bulletIconContainer,
                      children: t,
                    }),
                    u.jsx(o("WAWebFlex.react").FlexColumn, {
                      align: "center",
                      alignSelf: "center",
                      children: u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: a(),
                      }),
                    }),
                  ],
                },
                n,
              );
            }),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.ReachoutTimelockUnrestrictedModal = f));
  },
  226,
);
