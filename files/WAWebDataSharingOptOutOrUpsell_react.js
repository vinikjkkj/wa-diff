__d(
  "WAWebDataSharingOptOutOrUpsell.react",
  [
    "fbt",
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebCTWADataSharingModel",
    "WAWebCheckBox.react",
    "WAWebCommonCTWADataSharing",
    "WAWebCopyPasteSelectable.react",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDataSharingUpsellModel",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSMBDataSharingSettingAction",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebSmbPerCustomerDataSharingOptInModal",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "react",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        themeOrderCreate: { backgroundColor: "x1h3rtpe", $$css: !0 },
        themeLabelsOptOut: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xog00wb",
          $$css: !0,
        },
      },
      _ = function (t) {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              r("WAWebSmbDataSharingOptInModalDialog")
                .SmbDataSharingOptInModalDialog,
              { entrypoint: t, callback: r("WAWebNoop"), chat: null },
            ),
          ));
      };
    function f(e) {
      var t = e.children,
        n = e.entryPoint;
      return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
        className: "x1ypdohk xuxw1ft",
        id: "data-sharing-learn-more-link",
        selectable: !0,
        onClick: function () {
          return _(n);
        },
        children: t,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.accountLids,
        n = e.children;
      return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
        className: "x1ypdohk xuxw1ft",
        id: "per-customer-data-sharing-settings-link",
        selectable: !0,
        onClick: function () {
          return o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
              accountLids: t,
            }),
          );
        },
        children: n,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.checkboxValue,
        n = e.entryPoint,
        r = e.onCheckboxToggle,
        a = e.theme,
        i =
          a === "labels-opt-out"
            ? s._(/*BTDS*/ "Share this label update with Meta. {=m1}", [
                s._implicitParam(
                  "=m1",
                  u.jsx(f, {
                    entryPoint: n,
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ])
            : s._(/*BTDS*/ "Share this order status with Meta. {=m1}", [
                s._implicitParam(
                  "=m1",
                  u.jsx(f, {
                    entryPoint: n,
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ]);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebCheckBox.react").CheckBox, { checked: t, onChange: r }),
          u.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "secondary",
            xstyle: o("WAWebUISpacing").uiMargin.start16,
            children: i,
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.entryPoint;
      return u.jsx(o("WAWebText.react").WAWebTextSmall, {
        color: "secondary",
        children: s._(
          /*BTDS*/ "Enabling Ads Data Sharing can help you reach the right audience on Facebook and Instagram. {=m1}",
          [
            s._implicitParam(
              "=m1",
              u.jsx(f, {
                entryPoint: t,
                children: s._(/*BTDS*/ "Go to settings"),
              }),
            ),
          ],
        ),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.accountLids;
      return u.jsx(o("WAWebText.react").WAWebTextSmall, {
        color: "secondary",
        children: s._(
          /*BTDS*/ "Enabling Data Sharing for this customer can help you reach the right audience on Facebook and Instagram. {=m1}",
          [
            s._implicitParam(
              "=m1",
              u.jsx(g, {
                accountLids: t,
                children: s._(/*BTDS*/ "Go to settings"),
              }),
            ),
          ],
        ),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.chats,
        n = e.checkboxValue,
        a = e.onCheckboxToggle,
        i = e.theme,
        l = r("useWAWebUnmountSignal")(),
        s = m(null),
        c = s[0],
        _ = s[1];
      d(
        function () {
          return (
            o("WAWebSMBDataSharingSettingAction")
              .getSMBDataSharingSettingAction()
              .then(function (e) {
                l.aborted ||
                  (_(e),
                  o(
                    "WAWebCTWADataSharingModel",
                  ).CTWADataSharingModel.subscribeForUpdates(_));
              }),
            function () {
              o(
                "WAWebCTWADataSharingModel",
              ).CTWADataSharingModel.unsubscribeFromUpdates(_);
            }
          );
        },
        [l.aborted],
      );
      var f = function () {
          var e = [];
          return (
            (t != null ? t : []).forEach(function (t) {
              var n,
                a = (n = t.accountLid) == null ? void 0 : n.toString();
              r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t) !=
                null &&
                a != null &&
                !o(
                  "WAWebDataSharing3pdLidCollection",
                ).DataSharing3pdLidCollection.isDataSharingEnabled(a) &&
                e.push(a);
            }),
            e
          );
        },
        g = m(f),
        b = g[0],
        v = g[1],
        S = m(t),
        R = S[0],
        L = S[1];
      t !== R &&
        (t == null ||
          R == null ||
          t.length !== R.length ||
          t.some(function (e, t) {
            return e !== R[t];
          })) &&
        (L(t), v(f()));
      var E = function () {
        return v(f());
      };
      if (
        (o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "add",
          E,
        ),
        o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "change",
          E,
        ),
        o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "remove",
          E,
        ),
        c == null ||
          c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset)
      )
        return null;
      var k;
      i === "order-create"
        ? (k = [
            p.themeOrderCreate,
            o("WAWebUISpacing").uiPadding.start16,
            o("WAWebUISpacing").uiPadding.top16,
            o("WAWebUISpacing").uiPadding.bottom32,
          ])
        : i === "order-update"
          ? (k = [
              o("WAWebUISpacing").uiPadding.start28,
              o("WAWebUISpacing").uiPadding.top48,
              o("WAWebUISpacing").uiPadding.bottom16,
            ])
          : i === "labels-opt-out" &&
            (k = [
              p.themeLabelsOptOut,
              o("WAWebUISpacing").uiMargin.top24,
              o("WAWebUISpacing").uiPadding.top12,
              o("WAWebUISpacing").uiPadding.start30,
            ]);
      var I =
          c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
          !o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled(),
        T =
          c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
          r("WAWebDataSharingUpsellModel").isUpsellEnabled(),
        D =
          c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
          b.length > 0 &&
          r("WAWebDataSharingUpsellModel").isUpsellEnabled() &&
          o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled();
      if (!I && !T && !D) return null;
      var x;
      return (
        i === "labels-opt-out"
          ? (x = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT)
          : (x = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER),
        u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: k,
          children: [
            T ? u.jsx(y, { entryPoint: x }) : null,
            D ? u.jsx(C, { accountLids: b }) : null,
            I
              ? u.jsx(h, {
                  theme: i,
                  entryPoint: x,
                  checkboxValue: n,
                  onCheckboxToggle: a,
                })
              : null,
          ],
        })
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.OptOutText = h),
      (l.UpsellText = y),
      (l.PerCustomerUpsellText = C),
      (l.DataSharingOptOutOrUpsell = b));
  },
  226,
);
