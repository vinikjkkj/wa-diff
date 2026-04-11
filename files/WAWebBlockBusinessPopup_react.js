__d(
  "WAWebBlockBusinessPopup.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBlockContactAction",
    "WAWebBlockContants",
    "WAWebBlocklistUtils",
    "WAWebCheckBox.react",
    "WAWebCommonCTWADataSharing",
    "WAWebComplianceUtil",
    "WAWebConfirmPopup.react",
    "WAWebContactFormsUrl",
    "WAWebConversionTupleCollection",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingUIUtils",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebRadio.react",
    "WAWebReportGatingUtils",
    "WAWebRichTextField.react",
    "WAWebSendSpamChatAction",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUseBusinessProfile.react",
    "WDSFocusStateStyles",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = {
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        deemphasizedColor: { color: "xhslqc4", $$css: !0 },
        noWrap: { whiteSpace: "xuxw1ft", $$css: !0 },
      },
      g = [
        {
          value: o("WAWebBlockContants").BizOptOutReason.NoLongerNeeded,
          getLabel: function () {
            return s._(/*BTDS*/ "No longer needed");
          },
        },
        {
          value: o("WAWebBlockContants").BizOptOutReason.NoSignUp,
          getLabel: function () {
            return s._(/*BTDS*/ "Didn't sign up");
          },
        },
        {
          value: o("WAWebBlockContants").BizOptOutReason.Spam,
          getLabel: function () {
            return s._(/*BTDS*/ "Spam");
          },
        },
        {
          value: o("WAWebBlockContants").BizOptOutReason.OffensiveMessages,
          getLabel: function () {
            return s._(/*BTDS*/ "Offensive messages");
          },
        },
        {
          value: o("WAWebBlockContants").BizOptOutReason.Other,
          getLabel: function () {
            return s._(/*BTDS*/ "Other");
          },
        },
      ];
    function h(t) {
      var a,
        i = t.blockEntryPoint,
        l = t.chat,
        u = t.onMount,
        d = t.reportId,
        h = t.withReport,
        y = l.contact,
        C = _(null),
        b = C[0],
        v = C[1],
        S = _(null),
        R = S[0],
        L = S[1],
        E = r("useWAWebToggle")(!1),
        k = E[0],
        I = E[1],
        T =
          (a = o("WAWebUseBusinessProfile.react").useBusinessProfile(y.id, [
            "isBizBot3p",
          ])) != null
            ? a
            : {},
        D = T.isBizBot3p,
        x = D === void 0 ? !1 : D,
        $ = p(
          function () {
            var e = l.senderMsgCount();
            switch (e) {
              case 0:
                return o("WAWebBlockContants").BizOptOutFirstMessage.None;
              case 1:
                return o("WAWebBlockContants").BizOptOutFirstMessage.True;
              default:
                return o("WAWebBlockContants").BizOptOutFirstMessage.False;
            }
          },
          [l],
        );
      m(
        function () {
          u != null && u();
        },
        [u],
      );
      var P = function (t) {
          var e = t.text;
          L(e);
        },
        N = function (t) {
          (L(null), v(t));
        },
        M = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        w = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            b != null &&
              (yield o("WAWebBlockContactAction").blockContact({
                contact: y,
                blockEntryPoint: i,
                bizOptOutArgs: {
                  reason: b,
                  reasonDescription: R,
                  firstMessage: $,
                  entryPoint: i,
                },
              }),
              k &&
                l &&
                (yield o("WAWebSendSpamChatAction").sendReport({
                  chat: l,
                  spamFlow: o(
                    "WAWebBlocklistUtils",
                  ).getSpamFlowFromBlockEntryPoint(i),
                })),
              o("WAWebModalManager").ModalManager.close());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        A = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getControlsWhenMessagingBusinessFaqUrl(),
          testid: void 0,
          children: s._(/*BTDS*/ "Learn more"),
        }),
        F = function () {
          return x ? s._(/*BTDS*/ "Block AI") : s._(/*BTDS*/ "Block business");
        },
        O = function (t) {
          return s._(
            /*BTDS*/ "You can send an additional report under the Australian Online Safety Act. {=m2}",
            [
              s._implicitParam(
                "=m2",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebContactFormsUrl").getReportContentAUSFormUrl(
                    t,
                    o("WAWebComplianceUtil").WA_CF_RES_OSA_ID,
                    o("WAWebComplianceUtil").WA_CF_RES_OSA,
                  ),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        },
        B = function () {
          return s._(
            /*BTDS*/ "{contact} won't be able to message or call you.",
            [s._param("contact", K)],
          );
        },
        W = function () {
          return x
            ? s._(/*BTDS*/ "Why are you blocking this AI?")
            : s._(/*BTDS*/ "Why are you blocking this business?");
        },
        q = function () {
          return s._(
            /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. {link to learn more}",
            [s._param("link to learn more", A)],
          );
        },
        U = function () {
          return s._(/*BTDS*/ "Report to WhatsApp");
        },
        V = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          xstyle: f.noWrap,
          href: o(
            "WAWebMmSignalSharingUIUtils",
          ).getMmSignalSharingLearnMoreHCAURL(),
          testid: void 0,
          children: s._(/*BTDS*/ "Learn more"),
        }),
        H = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          xstyle: f.noWrap,
          href: o(
            "WAWebBizGatingUtils",
          ).getCTWALearnMoreHyperLinkForCCICompliantUI(),
          testid: void 0,
          children: s._(/*BTDS*/ "Learn more"),
        }),
        G = function () {
          return o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled()
            ? s._(
                /*BTDS*/ "When you block a business, Meta receives limited info that you blocked them. {link to learn more}",
                [s._param("link to learn more", V)],
              )
            : s._(
                /*BTDS*/ "When you block a business with offers and announcements, Meta receives limited info to improve your experience. {link to learn more}",
                [s._param("link to learn more", V)],
              );
        },
        z = function () {
          return s._(
            /*BTDS*/ "When you block a business, Meta receives limited info that you blocked them. {link to learn more}",
            [s._param("link to learn more", H)],
          );
        },
        j = function () {
          var t = q(),
            n = U();
          return c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.top20,
            columnGap: 16,
            children: [
              c.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: [
                  o("WAWebUISpacing").uiPadding.top2,
                  o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                ],
                children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                  onChange: I,
                  checked: k,
                  id: "menu-icon-block",
                  testid: void 0,
                }),
              }),
              c.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: o("WAWebUISpacing").uiMargin.top4,
                children: [
                  c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                    htmlFor: "menu-icon-block",
                    weight: "medium",
                    children: n,
                  }),
                  c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: o("WAWebUISpacing").uiMargin.top6,
                    testid: void 0,
                    children: t,
                  }),
                ],
              }),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WAWebUISpacing").uiMargin.vert12,
                  ),
                ),
              ),
            ],
          });
        },
        K = c.jsx(o("WAWebName.react").Name, { contact: y }),
        Q = F(),
        X = W(),
        Y = B(),
        J =
          d != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled()
            ? O(d)
            : null,
        Z = h ? j() : null,
        ee =
          r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(l) !=
            null &&
          o("WAWebBizGatingUtils").isCTWATosFilteringEnabled() &&
          o("WAWebBizGatingUtils").showCTWACCICompliantUI(),
        te =
          (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ||
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens()) &&
          o(
            "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
          ).isMmSignalSharingUserDisclosedInCollectionWindow(
            l.mmSignalSharingExpirationWindow,
          ),
        ne = (function () {
          if (!ee && !te) return null;
          if (ee && te) {
            var e,
              t,
              n,
              o,
              a =
                (e =
                  (t = r("WAWebConversionTupleCollection").get(l.id)) == null
                    ? void 0
                    : t.timestamp) != null
                  ? e
                  : 0,
              i = l.mmSignalSharingExpirationWindow,
              s =
                (n =
                  i == null || (o = i[i.length - 1]) == null
                    ? void 0
                    : o.unixTime.server) != null
                  ? n
                  : 0;
            return a > s ? z() : G();
          }
          return ee ? z() : G();
        })();
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "block-business",
          viewName: "block-business",
        },
        okDisabled: b == null,
        onOK: w,
        okText: r("WAWebFbtCommon")("Block"),
        onCancel: M,
        title: Q,
        testid: void 0,
        children: [
          J != null &&
            c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
              xstyle: o("WAWebUISpacing").uiMargin.bottom20,
              children: J,
            }),
          c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom20,
            children: Y,
          }),
          c.jsx(o("WAWebFlex.react").FlexRow, {
            className: (e || (e = r("stylex")))(
              o("WAWebUISpacing").uiPadding.bottom6,
              f.border,
            ),
            children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              color: "muted",
              children: X,
            }),
          }),
          g.map(function (e) {
            var t = e.getLabel,
              n = e.value;
            return c.jsxs(
              o("WAWebFlex.react").FlexColumn,
              {
                align: "stretch",
                children: [
                  c.jsx(o("WAWebFlex.react").FlexRow, {
                    xstyle: f.border,
                    children: c.jsx(o("WAWebRadio.react").RadioWithLabel, {
                      testid: void 0,
                      name: "block-reason-radio",
                      value: String(n),
                      label: t(),
                      checked: b === n,
                      onChange: function () {
                        return N(n);
                      },
                    }),
                  }),
                  b != null &&
                    n === o("WAWebBlockContants").BizOptOutReason.Other &&
                    b === o("WAWebBlockContants").BizOptOutReason.Other &&
                    c.jsx(o("WAWebRichTextField.react").RichTextField, {
                      testid: void 0,
                      focusOnMount: !0,
                      hideFloatingLabel: !0,
                      showRemaining: !0,
                      value: R,
                      maxLength: 30,
                      onChange: P,
                      placeholder: s._(/*BTDS*/ "Reason (optional)"),
                    }),
                ],
              },
              n,
            );
          }),
          Z,
          ne != null &&
            c.jsxs(o("WAWebText_DONOTUSE.react").TextParagraph, {
              xstyle: [o("WAWebUISpacing").uiMargin.top20, f.deemphasizedColor],
              children: [
                c.jsx(
                  o("WAWebSingleChevronInCircleIcon.react")
                    .SingleChevronInCircleIcon,
                  {
                    viewBox: { x: 1.67, y: -1, width: 22, height: 22 },
                    xstyle: f.deemphasizedColor,
                    displayInline: !0,
                  },
                ),
                ne,
              ],
            }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
