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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.entryPoint,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = "x1ypdohk xuxw1ft"), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== r
        ? ((i = function () {
            return _(r);
          }),
          (t[1] = r),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n || t[4] !== i
          ? ((l = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
              className: a,
              id: "data-sharing-learn-more-link",
              selectable: !0,
              onClick: i,
              children: n,
            })),
            (t[3] = n),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.accountLids,
        a = e.children,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "x1ypdohk xuxw1ft"), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = function () {
            return o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
                accountLids: n,
              }),
            );
          }),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== a || t[4] !== l
          ? ((s = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
              className: i,
              id: "per-customer-data-sharing-settings-link",
              selectable: !0,
              onClick: l,
              children: a,
            })),
            (t[3] = a),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.checkboxValue,
        r = e.entryPoint,
        a = e.onCheckboxToggle,
        i = e.theme,
        l;
      t[0] !== r || t[1] !== i
        ? ((l =
            i === "labels-opt-out"
              ? s._(/*BTDS*/ "Share this label update with Meta. {=m1}", [
                  s._implicitParam(
                    "=m1",
                    u.jsx(f, {
                      entryPoint: r,
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ])
              : s._(/*BTDS*/ "Share this order status with Meta. {=m1}", [
                  s._implicitParam(
                    "=m1",
                    u.jsx(f, {
                      entryPoint: r,
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ])),
          (t[0] = r),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] !== n || t[4] !== a
        ? ((d = u.jsx(o("WAWebCheckBox.react").CheckBox, {
            checked: n,
            onChange: a,
          })),
          (t[3] = n),
          (t[4] = a),
          (t[5] = d))
        : (d = t[5]);
      var m;
      t[6] !== c
        ? ((m = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "secondary",
            xstyle: o("WAWebUISpacing").uiMargin.start16,
            children: c,
          })),
          (t[6] = c),
          (t[7] = m))
        : (m = t[7]);
      var p;
      return (
        t[8] !== d || t[9] !== m
          ? ((p = u.jsxs(u.Fragment, { children: [d, m] })),
            (t[8] = d),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.entryPoint,
        r;
      return (
        t[0] !== n
          ? ((r = u.jsx(o("WAWebText.react").WAWebTextSmall, {
              color: "secondary",
              children: s._(
                /*BTDS*/ "Enabling Ads Data Sharing can help you reach the right audience on Facebook and Instagram. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(f, {
                      entryPoint: n,
                      children: s._(/*BTDS*/ "Go to settings"),
                    }),
                  ),
                ],
              ),
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.accountLids,
        r;
      return (
        t[0] !== n
          ? ((r = u.jsx(o("WAWebText.react").WAWebTextSmall, {
              color: "secondary",
              children: s._(
                /*BTDS*/ "Enabling Data Sharing for this customer can help you reach the right audience on Facebook and Instagram. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(g, {
                      accountLids: n,
                      children: s._(/*BTDS*/ "Go to settings"),
                    }),
                  ),
                ],
              ),
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.chats,
        a = e.checkboxValue,
        i = e.onCheckboxToggle,
        l = e.theme,
        s = r("useWAWebUnmountSignal")(),
        c = m(null),
        _ = c[0],
        f = c[1],
        g,
        b;
      (t[0] !== s.aborted
        ? ((g = function () {
            return (
              o("WAWebSMBDataSharingSettingAction")
                .getSMBDataSharingSettingAction()
                .then(function (e) {
                  s.aborted ||
                    (f(e),
                    o(
                      "WAWebCTWADataSharingModel",
                    ).CTWADataSharingModel.subscribeForUpdates(f));
                }),
              function () {
                o(
                  "WAWebCTWADataSharingModel",
                ).CTWADataSharingModel.unsubscribeFromUpdates(f);
              }
            );
          }),
          (b = [s.aborted]),
          (t[0] = s.aborted),
          (t[1] = g),
          (t[2] = b))
        : ((g = t[1]), (b = t[2])),
        d(g, b));
      var v;
      t[3] !== n
        ? ((v = function () {
            var e = [];
            return (
              (n != null ? n : []).forEach(function (t) {
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
          }),
          (t[3] = n),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R = m(S),
        L = R[0],
        E = R[1],
        k = m(n),
        I = k[0],
        T = k[1];
      n !== I &&
        (n == null ||
          I == null ||
          n.length !== I.length ||
          n.some(function (e, t) {
            return e !== I[t];
          })) &&
        (T(n), E(S()));
      var D;
      t[5] !== S
        ? ((D = function () {
            return E(S());
          }),
          (t[5] = S),
          (t[6] = D))
        : (D = t[6]);
      var x = D;
      if (
        (o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "add",
          x,
        ),
        o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "change",
          x,
        ),
        o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "remove",
          x,
        ),
        _ == null ||
          _ === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset)
      )
        return null;
      var $;
      if (l === "order-create") {
        var P;
        (t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = [
              p.themeOrderCreate,
              o("WAWebUISpacing").uiPadding.start16,
              o("WAWebUISpacing").uiPadding.top16,
              o("WAWebUISpacing").uiPadding.bottom32,
            ]),
            (t[7] = P))
          : (P = t[7]),
          ($ = P));
      } else if (l === "order-update") {
        var N;
        (t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = [
              o("WAWebUISpacing").uiPadding.start28,
              o("WAWebUISpacing").uiPadding.top48,
              o("WAWebUISpacing").uiPadding.bottom16,
            ]),
            (t[8] = N))
          : (N = t[8]),
          ($ = N));
      } else if (l === "labels-opt-out") {
        var M;
        (t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = [
              p.themeLabelsOptOut,
              o("WAWebUISpacing").uiMargin.top24,
              o("WAWebUISpacing").uiPadding.top12,
              o("WAWebUISpacing").uiPadding.start30,
            ]),
            (t[9] = M))
          : (M = t[9]),
          ($ = M));
      }
      var w;
      t[10] !== _
        ? ((w =
            _ === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !o(
              "WAWebBizGatingUtils",
            ).isPerCustomerDataSharingControlsEnabled()),
          (t[10] = _),
          (t[11] = w))
        : (w = t[11]);
      var A = w,
        F;
      t[12] !== _
        ? ((F =
            _ === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
            r("WAWebDataSharingUpsellModel").isUpsellEnabled()),
          (t[12] = _),
          (t[13] = F))
        : (F = t[13]);
      var O = F,
        B;
      t[14] !== L || t[15] !== _
        ? ((B =
            _ === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            L.length > 0 &&
            r("WAWebDataSharingUpsellModel").isUpsellEnabled() &&
            o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled()),
          (t[14] = L),
          (t[15] = _),
          (t[16] = B))
        : (B = t[16]);
      var W = B;
      if (!A && !O && !W) return null;
      var q;
      l === "labels-opt-out"
        ? (q = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
            .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT)
        : (q = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
            .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER);
      var U;
      t[17] !== q || t[18] !== O
        ? ((U = O ? u.jsx(y, { entryPoint: q }) : null),
          (t[17] = q),
          (t[18] = O),
          (t[19] = U))
        : (U = t[19]);
      var V;
      t[20] !== L || t[21] !== W
        ? ((V = W ? u.jsx(C, { accountLids: L }) : null),
          (t[20] = L),
          (t[21] = W),
          (t[22] = V))
        : (V = t[22]);
      var H;
      t[23] !== a || t[24] !== q || t[25] !== i || t[26] !== A || t[27] !== l
        ? ((H = A
            ? u.jsx(h, {
                theme: l,
                entryPoint: q,
                checkboxValue: a,
                onCheckboxToggle: i,
              })
            : null),
          (t[23] = a),
          (t[24] = q),
          (t[25] = i),
          (t[26] = A),
          (t[27] = l),
          (t[28] = H))
        : (H = t[28]);
      var G;
      return (
        t[29] !== $ || t[30] !== H || t[31] !== U || t[32] !== V
          ? ((G = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: $,
              children: [U, V, H],
            })),
            (t[29] = $),
            (t[30] = H),
            (t[31] = U),
            (t[32] = V),
            (t[33] = G))
          : (G = t[33]),
        G
      );
    }
    ((l.OptOutText = h),
      (l.UpsellText = y),
      (l.PerCustomerUpsellText = C),
      (l.DataSharingOptOutOrUpsell = b));
  },
  226,
);
