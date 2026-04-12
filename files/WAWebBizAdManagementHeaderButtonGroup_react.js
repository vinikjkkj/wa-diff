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
      var e = o("CometRelay").useLazyLoadQuery(_, {});
      return c.jsx(r("WAWebBizAdManagementIdentityButton.react"), {
        facebookProfileRef: e.me,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return c.jsx(r("CometPlaceholder.react"), {
        fallback: c.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
          diameter: 40,
        }),
        name: i.id,
        children: c.jsx(f, {}),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.accountType,
        n = e.createAdDisabled,
        a = e.flow,
        i = e.relayEnvironment,
        l = p(null),
        u = r("useWAWebUnmountSignal")(),
        d = r("useWAWebBizAdCreationIdentityContext")(),
        _ = r("useWAWebNativeAdsFlowIDContext")(),
        f = r("useWAWebBizAdManagementOpenAdPaymentModal")(i),
        h = m(
          function () {
            if (t === "WAA") f();
            else {
              var e,
                n,
                a =
                  (e =
                    (n = r(
                      "XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
                    ).buildUri({ placement: "whatsapp_ads_web" })) == null ||
                    (n = n.setProtocol("https")) == null ||
                    (n = n.setDomain("www.facebook.com")) == null
                      ? void 0
                      : n.toString()) != null
                    ? e
                    : "";
              o("WAWebExternalLink.react").openExternalLink(a);
            }
          },
          [t, f],
        ),
        y = r("useWDSMenu")({
          targetRef: l,
          menu: c.jsx(r("WAWebBizAdManagementMenu.react"), {
            accountType: t,
            loginWithFacebook: d == null ? void 0 : d.loginWithFacebook,
            manageAdsFlowID: _.manageAdsFlowID,
            openAdPaymentAction: h,
            pageId: d == null ? void 0 : d.pageId,
            unmountSignal: u,
          }),
          dismissable: !0,
          enableUIM: !1,
        }),
        C = y.closeMenu,
        b = y.isMenuOpen,
        v = y.menuPortal,
        S = y.openMenu,
        R = m(
          function () {
            b ? C() : S();
          },
          [b, C, S],
        ),
        L = m(
          function () {
            var e = d == null ? void 0 : d.pageId;
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
              a.push(
                o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                  .AdCreation,
              ));
          },
          [
            a,
            _.adCreationFlowID,
            _.manageAdsFlowID,
            d == null ? void 0 : d.pageId,
          ],
        );
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 8,
        children: [
          c.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcAdd.react"),
            label: s._(/*BTDS*/ "Create ad"),
            variant: "filled",
            size: "medium",
            type: "default",
            disabled: n,
            onPress: L,
          }),
          i != null && t === "FB" && c.jsx(g, {}),
          c.jsx(r("WDSButton.react"), {
            ref: l,
            Icon: r("WDSIconIcMoreVert.react"),
            variant: "borderless",
            size: "medium",
            type: "default",
            onPress: R,
          }),
          v,
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
