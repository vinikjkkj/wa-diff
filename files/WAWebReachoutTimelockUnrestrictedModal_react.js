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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(35),
        a = e.enforcementType,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
          )),
          (n[0] = i))
        : (i = n[0]);
      var l = i,
        c =
          (t = a != null ? a : l == null ? void 0 : l.enforcement_type) != null
            ? t
            : o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.DEFAULT,
        d,
        m,
        f,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k;
      if (n[1] !== c) {
        var I = o("WAWebReachoutTimelockUtils").isCPVEnforcement(c),
          T = p(I),
          D = _(I);
        ((m = o("WAWebConfirmPopup.react").ConfirmPopup),
          n[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = {
                surface: "unknown",
                viewName: "reachout-timelock-unrestricted",
              }),
              (n[15] = S))
            : (S = n[15]),
          (R = o("WAWebModal.react").ModalTheme.ReachoutTimelock),
          n[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = s._(/*BTDS*/ "Close")), (n[16] = L))
            : (L = n[16]),
          (E = "secondary"),
          (k = o("WAWebModalManager").closeModalManager),
          n[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = u.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                paddingBottom: 24,
                children: u.jsx(
                  o("WAWebWdsPictoUserCheckFeedbackPositiveIcon.react")
                    .WdsPictoUserCheckFeedbackPositiveIcon,
                  {},
                ),
              })),
              (n[17] = f))
            : (f = n[17]),
          n[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = u.jsx(o("WAWebFlex.react").FlexRow, {
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
                  children: s._(
                    /*BTDS*/ "Your account is no longer restricted",
                  ),
                }),
              })),
              (n[18] = h))
            : (h = n[18]),
          (y =
            D != null &&
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
                children: D,
              }),
            })),
          (d = o("WAWebFlex.react").FlexColumn),
          (C = "start"),
          (b = "start"),
          (v = T.map(g)),
          (n[1] = c),
          (n[2] = d),
          (n[3] = m),
          (n[4] = f),
          (n[5] = h),
          (n[6] = y),
          (n[7] = C),
          (n[8] = b),
          (n[9] = v),
          (n[10] = S),
          (n[11] = R),
          (n[12] = L),
          (n[13] = E),
          (n[14] = k));
      } else
        ((d = n[2]),
          (m = n[3]),
          (f = n[4]),
          (h = n[5]),
          (y = n[6]),
          (C = n[7]),
          (b = n[8]),
          (v = n[9]),
          (S = n[10]),
          (R = n[11]),
          (L = n[12]),
          (E = n[13]),
          (k = n[14]));
      var x;
      n[19] !== d || n[20] !== C || n[21] !== b || n[22] !== v
        ? ((x = u.jsx(d, { align: C, justify: b, children: v })),
          (n[19] = d),
          (n[20] = C),
          (n[21] = b),
          (n[22] = v),
          (n[23] = x))
        : (x = n[23]);
      var $;
      return (
        n[24] !== m ||
        n[25] !== f ||
        n[26] !== h ||
        n[27] !== y ||
        n[28] !== x ||
        n[29] !== S ||
        n[30] !== R ||
        n[31] !== L ||
        n[32] !== E ||
        n[33] !== k
          ? (($ = u.jsxs(m, {
              tsNavigationData: S,
              type: R,
              okText: L,
              okButtonType: E,
              onOK: k,
              children: [f, h, y, x],
            })),
            (n[24] = m),
            (n[25] = f),
            (n[26] = h),
            (n[27] = y),
            (n[28] = x),
            (n[29] = S),
            (n[30] = R),
            (n[31] = L),
            (n[32] = E),
            (n[33] = k),
            (n[34] = $))
          : ($ = n[34]),
        $
      );
    }
    function g(e) {
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
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.ReachoutTimelockUnrestrictedModal = f));
  },
  226,
);
