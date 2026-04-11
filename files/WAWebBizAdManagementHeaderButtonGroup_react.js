__d(
  "WAWebBizAdManagementHeaderButtonGroup.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery.graphql",
    "WAWebBizAdManagementIdentityButton.react",
    "WAWebBizAdManagementLogger",
    "WAWebBizAdManagementMenu.react",
    "WAWebBizEnterFlowClickLogger",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconIcMoreVert.react",
    "XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationIdentityContext",
    "useWAWebBizAdManagementOpenAdPaymentModal",
    "useWAWebNativeAdsFlowIDContext",
    "useWAWebUnmountSignal",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useRef,
      _ =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery.graphql",
            ));
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t = o("CometRelay").useLazyLoadQuery(_, {}),
        n;
      return (
        e[0] !== t.me
          ? ((n = c.jsx(r("WAWebBizAdManagementIdentityButton.react"), {
              facebookProfileRef: t.me,
            })),
            (e[0] = t.me),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = c.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
            diameter: 40,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(r("CometPlaceholder.react"), {
              fallback: t,
              name: i.id,
              children: c.jsx(f, {}),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.accountType,
        a = e.createAdDisabled,
        i = e.flow,
        l = e.relayEnvironment,
        u = p(null),
        d = r("useWAWebUnmountSignal")(),
        m = r("useWAWebBizAdCreationIdentityContext")(),
        _ = r("useWAWebNativeAdsFlowIDContext")(),
        f = r("useWAWebBizAdManagementOpenAdPaymentModal")(l),
        h;
      t[0] !== n || t[1] !== f
        ? ((h = function () {
            if (n === "WAA") f();
            else {
              var e,
                t,
                a =
                  (e =
                    (t = r(
                      "XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
                    ).buildUri({ placement: "whatsapp_ads_web" })) == null ||
                    (t = t.setProtocol("https")) == null ||
                    (t = t.setDomain("www.facebook.com")) == null
                      ? void 0
                      : t.toString()) != null
                    ? e
                    : "";
              o("WAWebExternalLink.react").openExternalLink(a);
            }
          }),
          (t[0] = n),
          (t[1] = f),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C = m == null ? void 0 : m.loginWithFacebook,
        b = m == null ? void 0 : m.pageId,
        v;
      t[3] !== n ||
      t[4] !== _.manageAdsFlowID ||
      t[5] !== y ||
      t[6] !== C ||
      t[7] !== b ||
      t[8] !== d
        ? ((v = {
            targetRef: u,
            menu: c.jsx(r("WAWebBizAdManagementMenu.react"), {
              accountType: n,
              loginWithFacebook: C,
              manageAdsFlowID: _.manageAdsFlowID,
              openAdPaymentAction: y,
              pageId: b,
              unmountSignal: d,
            }),
            dismissable: !0,
            enableUIM: !1,
          }),
          (t[3] = n),
          (t[4] = _.manageAdsFlowID),
          (t[5] = y),
          (t[6] = C),
          (t[7] = b),
          (t[8] = d),
          (t[9] = v))
        : (v = t[9]);
      var S = r("useWDSMenu")(v),
        R = S.closeMenu,
        L = S.isMenuOpen,
        E = S.menuPortal,
        k = S.openMenu,
        I;
      t[10] !== R || t[11] !== L || t[12] !== k
        ? ((I = function () {
            L ? R() : k();
          }),
          (t[10] = R),
          (t[11] = L),
          (t[12] = k),
          (t[13] = I))
        : (I = t[13]);
      var T = I,
        D;
      (t[14] !== i ||
      t[15] !== _.adCreationFlowID ||
      t[16] !== _.manageAdsFlowID ||
      t[17] !== (m == null ? void 0 : m.pageId)
        ? ((D = function () {
            var e = m == null ? void 0 : m.pageId;
            (o("WAWebBizAdManagementLogger").logManageAdsScreenAction(
              o("WAWebBizAdManagementLogger").LWI_SCREEN_REFERENCE
                .LWI_SCREEN_PERFORMANCE,
              o("WAWebBizAdManagementLogger").LWI_SCREEN_ACTION
                .LWI_ACTION_CREATE_AD_TAPPED,
              o("WAWebBizAdManagementLogger").LWI_ADS_IDENTITY_TYPE.PAGE,
              _.manageAdsFlowID,
              null,
              JSON.stringify({
                pageId: e,
                ad_creation_flow_id: _.adCreationFlowID,
              }),
            ),
              o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
                entryPoint: "whatsapp_smb_web_manage_ads_native",
                flowID: _.adCreationFlowID,
                pageID: e,
              }),
              i.push(
                o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                  .AdCreation,
              ));
          }),
          (t[14] = i),
          (t[15] = _.adCreationFlowID),
          (t[16] = _.manageAdsFlowID),
          (t[17] = m == null ? void 0 : m.pageId),
          (t[18] = D))
        : (D = t[18]),
        m == null || m.pageId);
      var x = D,
        $;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Create ad")), (t[19] = $))
        : ($ = t[19]);
      var P;
      t[20] !== a || t[21] !== x
        ? ((P = c.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcAdd.react"),
            label: $,
            variant: "filled",
            size: "medium",
            type: "default",
            disabled: a,
            onPress: x,
          })),
          (t[20] = a),
          (t[21] = x),
          (t[22] = P))
        : (P = t[22]);
      var N;
      t[23] !== n || t[24] !== l
        ? ((N = l != null && n === "FB" && c.jsx(g, {})),
          (t[23] = n),
          (t[24] = l),
          (t[25] = N))
        : (N = t[25]);
      var M;
      t[26] !== T
        ? ((M = c.jsx(r("WDSButton.react"), {
            ref: u,
            Icon: r("WDSIconIcMoreVert.react"),
            variant: "borderless",
            size: "medium",
            type: "default",
            onPress: T,
          })),
          (t[26] = T),
          (t[27] = M))
        : (M = t[27]);
      var w;
      return (
        t[28] !== E || t[29] !== M || t[30] !== P || t[31] !== N
          ? ((w = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 8,
              children: [P, N, M, E],
            })),
            (t[28] = E),
            (t[29] = M),
            (t[30] = P),
            (t[31] = N),
            (t[32] = w))
          : (w = t[32]),
        w
      );
    }
    l.default = h;
  },
  226,
);
