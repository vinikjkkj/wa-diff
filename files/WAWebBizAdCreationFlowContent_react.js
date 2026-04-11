__d(
  "WAWebBizAdCreationFlowContent.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationFooterPortalContext.react",
    "WAWebBizAdDetailsDrawer.react",
    "WAWebBizAdManagementHeaderButtonGroup.react",
    "WAWebBizAdManagementLogger",
    "WAWebBizAdManagementNullView.react",
    "WAWebBizAdManagementRoot.react",
    "WAWebBizAdsErrorBoundary.react",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizEnterFlowClickLogger",
    "WAWebBizNativeAdsDrawerConfig",
    "WAWebBizNativeAdsEnterFlowErrorLogger",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebVelocityTransitionGroup",
    "WDSButton.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationIdentityContext",
    "useWAWebNativeAdsFlowIDContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        identityFallbackContainer: {
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          rowGap: "x1j3ira4",
          columnGap: "xrdqr27",
          $$css: !0,
        },
        rightDrawerWrapper: {
          height: "x5yr21d",
          width: "xh8yej3",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        rightDrawerOpen: {
          flexGrow: "x1ikap7u",
          minWidth: "xjqbwj4",
          maxWidth: "xfp77mx",
          borderInlineStartWidth: "xpilrb4",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        rightDrawerClosed: { width: "xnalus7", $$css: !0 },
        fullscreenRoot: { height: "x5yr21d", $$css: !0 },
        mainContentWithHeader: {
          height: "x5yr21d",
          minWidth: "xeuugli",
          flexGrow: "xlxc79v",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(135),
        a = e.flow,
        l = e.showExitConfirmation,
        c = e.step,
        d = r("useWAWebBizAdCreationIdentityContext")(),
        f = r("useWAWebNativeAdsFlowIDContext")(),
        g = d == null ? void 0 : d.relayEnvironment,
        h = d == null ? void 0 : d.adCreationEntrypointReference,
        y = d == null ? void 0 : d.adManagementQueryVariables,
        C;
      t[0] !== a || t[1] !== f || t[2] !== d
        ? ((C = function () {
            var e = f.regenerateAdCreationFlowID();
            (d == null || d.reloadPreloadedQueries(e), a.pop());
          }),
          (t[0] = a),
          (t[1] = f),
          (t[2] = d),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v = p(null),
        S = v[0],
        R = v[1],
        L;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            R(t);
          }),
          (t[4] = L))
        : (L = t[4]);
      var E = L,
        k;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            R(null);
          }),
          (t[5] = k))
        : (k = t[5]);
      var I = k,
        T = d == null ? void 0 : d.reloadPreloadedQueries,
        D = f.regenerateAdCreationFlowID,
        x;
      (t[6] !== a ||
      t[7] !== f.manageAdsFlowID ||
      t[8] !== (d == null ? void 0 : d.pageId) ||
      t[9] !== D ||
      t[10] !== T
        ? ((x = function (t, n, r) {
            if (T != null) {
              R(null);
              var e = D();
              (o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                n,
                e,
                f.manageAdsFlowID,
              ),
                o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
                  entryPoint: r,
                  flowID: e,
                  pageID: d == null ? void 0 : d.pageId,
                  recreateBoostId: t,
                }),
                T(e, { boostId: t }),
                a.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          }),
          (t[6] = a),
          (t[7] = f.manageAdsFlowID),
          (t[8] = d == null ? void 0 : d.pageId),
          (t[9] = D),
          (t[10] = T),
          (t[11] = x))
        : (x = t[11]),
        d == null || d.pageId);
      var $ = x,
        P;
      t[12] !== a || t[13] !== f || t[14] !== D || t[15] !== T
        ? ((P = function (t, n) {
            if (T != null) {
              R(null);
              var e;
              (n != null ? (f.setAdCreationFlowID(n), (e = n)) : (e = D()),
                o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                  o("WAWebBizAdManagementLogger").LWI_ENTRY_POINT
                    .SMB_ADVERTISE_FROM_MANAGE_ADS_DRAFT_LIST,
                  e,
                  f.manageAdsFlowID,
                ),
                T(e, { draftId: t }),
                a.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          }),
          (t[12] = a),
          (t[13] = f),
          (t[14] = D),
          (t[15] = T),
          (t[16] = P))
        : (P = t[16]);
      var N = P,
        M;
      (t[17] !== f.adCreationFlowID ||
      t[18] !== f.manageAdsFlowID ||
      t[19] !== (d == null ? void 0 : d.pageId) ||
      t[20] !== c
        ? ((M = function (t) {
            if (
              (r("FBLogger")("wa_ctwa_web").mustfix(
                "Native ads enter flow error: " + t.message,
              ),
              c ===
                o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                  .AdCreation)
            ) {
              var e = d == null ? void 0 : d.pageId;
              e != null &&
                o(
                  "WAWebBizNativeAdsEnterFlowErrorLogger",
                ).logAdCreationEnterFlowError(t, e, f.adCreationFlowID);
            } else
              o(
                "WAWebBizNativeAdsEnterFlowErrorLogger",
              ).logManageAdsGenericError(
                t,
                f.manageAdsFlowID,
                d == null ? void 0 : d.pageId,
              );
          }),
          (t[17] = f.adCreationFlowID),
          (t[18] = f.manageAdsFlowID),
          (t[19] = d == null ? void 0 : d.pageId),
          (t[20] = c),
          (t[21] = M))
        : (M = t[21]),
        d == null || d.pageId);
      var w = M,
        A = m(null);
      if (c == null) {
        r("FBLogger")("wa_ctwa_web").mustfix(
          "AdCreationFlowContent rendered with null step",
        );
        var F;
        return (
          t[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement,
                }),
              })),
              (t[22] = F))
            : (F = t[22]),
          F
        );
      }
      if ((d == null ? void 0 : d.identityError) != null) {
        var O;
        return (
          t[23] !== c
            ? ((O = u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: c,
                }),
              })),
              (t[23] = c),
              (t[24] = O))
            : (O = t[24]),
          O
        );
      }
      var B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee, te;
      if (
        t[25] !== h ||
        t[26] !== y ||
        t[27] !== a ||
        t[28] !== f.manageAdsFlowID ||
        t[29] !== w ||
        t[30] !== $ ||
        t[31] !== N ||
        t[32] !== (d == null ? void 0 : d.accountType) ||
        t[33] !== (d == null ? void 0 : d.adManagementQueryRef) ||
        t[34] !== (d == null ? void 0 : d.isSwitching) ||
        t[35] !== (d == null ? void 0 : d.isWAAEligible) ||
        t[36] !== (d == null ? void 0 : d.loginWithFacebook) ||
        t[37] !== (d == null ? void 0 : d.pageId) ||
        t[38] !== b ||
        t[39] !== g ||
        t[40] !== (S == null ? void 0 : S.nodeId) ||
        t[41] !== l ||
        t[42] !== c
      ) {
        G = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(c);
        e: {
          if (
            c ===
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
          ) {
            var ne;
            (t[60] !== b || t[61] !== l
              ? ((ne = function () {
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield l();
                    e && b();
                  })();
                }),
                (t[60] = b),
                (t[61] = l),
                (t[62] = ne))
              : (ne = t[62]),
              (z = ne));
            var re;
            (t[63] !== h || t[64] !== b || t[65] !== g
              ? ((re =
                  g != null && h != null
                    ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                        environment: g,
                        children: u.jsx(o("CometRelay").EntryPointContainer, {
                          entryPointReference: h,
                          props: { onNavigateToManageAds: b },
                        }),
                      })
                    : null),
                (t[63] = h),
                (t[64] = b),
                (t[65] = g),
                (t[66] = re))
              : (re = t[66]),
              (H = re));
            break e;
          }
          if (
            c ===
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement
          ) {
            var oe;
            (t[67] !== a ||
            t[68] !== (d == null ? void 0 : d.accountType) ||
            t[69] !== g
              ? ((oe =
                  g != null
                    ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                        environment: g,
                        children: u.jsx(
                          r("WAWebBizAdManagementHeaderButtonGroup.react"),
                          {
                            accountType: d == null ? void 0 : d.accountType,
                            flow: a,
                            relayEnvironment: g,
                          },
                        ),
                      })
                    : u.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
                        accountType: d == null ? void 0 : d.accountType,
                        createAdDisabled: !0,
                        flow: a,
                        relayEnvironment: g,
                      })),
                (t[67] = a),
                (t[68] = d == null ? void 0 : d.accountType),
                (t[69] = g),
                (t[70] = oe))
              : (oe = t[70]),
              (j = oe));
            var ae;
            (t[71] !== y ||
            t[72] !== $ ||
            t[73] !== N ||
            t[74] !== (d == null ? void 0 : d.accountType) ||
            t[75] !== (d == null ? void 0 : d.adManagementQueryRef) ||
            t[76] !== (d == null ? void 0 : d.loginWithFacebook) ||
            t[77] !== g ||
            t[78] !== (S == null ? void 0 : S.nodeId)
              ? ((ae =
                  g != null && y != null
                    ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                        environment: g,
                        children: u.jsx(r("WAWebBizAdManagementRoot.react"), {
                          onLoginToFacebook:
                            (d == null ? void 0 : d.accountType) !== "FB"
                              ? d == null
                                ? void 0
                                : d.loginWithFacebook
                              : void 0,
                          pageId1: y.pageId1,
                          pageId2: y.pageId2,
                          queryRef: d == null ? void 0 : d.adManagementQueryRef,
                          onAdSelect: E,
                          onRecreateAd: $,
                          onResumeDraft: N,
                          selectedKey: S == null ? void 0 : S.nodeId,
                        }),
                      })
                    : null),
                (t[71] = y),
                (t[72] = $),
                (t[73] = N),
                (t[74] = d == null ? void 0 : d.accountType),
                (t[75] = d == null ? void 0 : d.adManagementQueryRef),
                (t[76] = d == null ? void 0 : d.loginWithFacebook),
                (t[77] = g),
                (t[78] = S == null ? void 0 : S.nodeId),
                (t[79] = ae))
              : (ae = t[79]),
              (H = ae));
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              c,
          );
        }
        if (!(d != null && d.isWAAEligible) && !g) {
          var ie,
            le = (ie = d == null ? void 0 : d.pageId) != null ? ie : "",
            se;
          t[80] !== f.manageAdsFlowID || t[81] !== le
            ? ((se = u.jsx(r("WAWebBizAdManagementNullView.react"), {
                manageAdsFlowID: f.manageAdsFlowID,
                pageId: le,
              })),
              (t[80] = f.manageAdsFlowID),
              (t[81] = le),
              (t[82] = se))
            : (se = t[82]);
          var ue;
          t[83] === Symbol.for("react.memo_cache_sentinel")
            ? ((ue = s._(/*BTDS*/ "Continue with Facebook")), (t[83] = ue))
            : (ue = t[83]);
          var ce = d == null ? void 0 : d.loginWithFacebook,
            de;
          t[84] !== ce
            ? ((de = u.jsx(r("WDSButton.react"), {
                label: ue,
                variant: "filled",
                size: "medium",
                onPress: ce,
              })),
              (t[84] = ce),
              (t[85] = de))
            : (de = t[85]);
          var me;
          (t[86] !== se || t[87] !== de
            ? ((me = u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                xstyle: _.identityFallbackContainer,
                children: [se, de],
              })),
              (t[86] = se),
              (t[87] = de),
              (t[88] = me))
            : (me = t[88]),
            (H = me));
        }
        (H == null &&
          !(d != null && d.isSwitching) &&
          (r("FBLogger")("wa_ctwa_web").warn(
            "bodyContent is null in AdCreationFlowContent for step " +
              String(c) +
              ": relayEnvironment=" +
              String(g != null) +
              " adCreationEntrypointRef=" +
              String(h != null) +
              " adManagementQueryVars=" +
              String(y != null) +
              " isWAAEligible=" +
              String(d == null ? void 0 : d.isWAAEligible),
          ),
          (H = G.loadingFallback)),
          (V = r("WAWebBizAdsErrorBoundary.react")),
          (X = "WAWebNativeAdsFlow"),
          t[89] !== c
            ? ((Y = u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: c,
                }),
              })),
              (t[89] = c),
              (t[90] = Y))
            : (Y = t[90]),
          (J = w),
          (U = r("WAWebDrawer.react")),
          (K = G.drawerTheme),
          t[91] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = { surface: "unknown", viewName: "biz-native-ads" }),
              (t[91] = Q))
            : (Q = t[91]),
          (q = o("WAWebFlex.react").FlexRow),
          (te = _.fullscreenRoot),
          (W = o("WAWebFlexBox.react").FlexColumn),
          (ee = _.mainContentWithHeader),
          (B = o("WAWebDrawerHeader.react").DrawerHeader),
          (Z = G.title()),
          (t[25] = h),
          (t[26] = y),
          (t[27] = a),
          (t[28] = f.manageAdsFlowID),
          (t[29] = w),
          (t[30] = $),
          (t[31] = N),
          (t[32] = d == null ? void 0 : d.accountType),
          (t[33] = d == null ? void 0 : d.adManagementQueryRef),
          (t[34] = d == null ? void 0 : d.isSwitching),
          (t[35] = d == null ? void 0 : d.isWAAEligible),
          (t[36] = d == null ? void 0 : d.loginWithFacebook),
          (t[37] = d == null ? void 0 : d.pageId),
          (t[38] = b),
          (t[39] = g),
          (t[40] = S == null ? void 0 : S.nodeId),
          (t[41] = l),
          (t[42] = c),
          (t[43] = B),
          (t[44] = W),
          (t[45] = q),
          (t[46] = U),
          (t[47] = V),
          (t[48] = H),
          (t[49] = G),
          (t[50] = z),
          (t[51] = j),
          (t[52] = K),
          (t[53] = Q),
          (t[54] = X),
          (t[55] = Y),
          (t[56] = J),
          (t[57] = Z),
          (t[58] = ee),
          (t[59] = te));
      } else
        ((B = t[43]),
          (W = t[44]),
          (q = t[45]),
          (U = t[46]),
          (V = t[47]),
          (H = t[48]),
          (G = t[49]),
          (z = t[50]),
          (j = t[51]),
          (K = t[52]),
          (Q = t[53]),
          (X = t[54]),
          (Y = t[55]),
          (J = t[56]),
          (Z = t[57]),
          (ee = t[58]),
          (te = t[59]));
      var pe;
      t[92] !== B ||
      t[93] !== G.headerType ||
      t[94] !== z ||
      t[95] !== j ||
      t[96] !== Z
        ? ((pe = u.jsx(B, {
            title: Z,
            type: G.headerType,
            onBack: z,
            rightActionElement: j,
          })),
          (t[92] = B),
          (t[93] = G.headerType),
          (t[94] = z),
          (t[95] = j),
          (t[96] = Z),
          (t[97] = pe))
        : (pe = t[97]);
      var _e = d != null && d.isSwitching ? G.loadingFallback : H,
        fe;
      t[98] !== _e
        ? ((fe = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(
              o("WAWebBizAdCreationFooterPortalContext.react")
                .FooterPortalProvider,
              { containerRef: A, children: _e },
            ),
          })),
          (t[98] = _e),
          (t[99] = fe))
        : (fe = t[99]);
      var ge;
      t[100] !== c
        ? ((ge =
            c ===
              o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                .AdCreation &&
            u.jsx("div", { ref: A, className: "xh8yej3 x2lah0s" })),
          (t[100] = c),
          (t[101] = ge))
        : (ge = t[101]);
      var he;
      t[102] !== G.loadingFallback || t[103] !== fe || t[104] !== ge
        ? ((he = u.jsxs(r("CometPlaceholder.react"), {
            fallback: G.loadingFallback,
            name: i.id,
            children: [fe, ge],
          })),
          (t[102] = G.loadingFallback),
          (t[103] = fe),
          (t[104] = ge),
          (t[105] = he))
        : (he = t[105]);
      var ye;
      t[106] !== W || t[107] !== pe || t[108] !== he || t[109] !== ee
        ? ((ye = u.jsxs(W, { xstyle: ee, children: [pe, he] })),
          (t[106] = W),
          (t[107] = pe),
          (t[108] = he),
          (t[109] = ee),
          (t[110] = ye))
        : (ye = t[110]);
      var Ce = S != null ? _.rightDrawerOpen : _.rightDrawerClosed,
        be;
      t[111] !== Ce
        ? ((be = [_.rightDrawerWrapper, Ce]), (t[111] = Ce), (t[112] = be))
        : (be = t[112]);
      var ve;
      t[113] !== g || t[114] !== S
        ? ((ve =
            S != null && g != null
              ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: g,
                  children: u.jsx(r("WAWebBizAdDetailsDrawer.react"), {
                    item: S,
                    onClose: I,
                  }),
                })
              : null),
          (t[113] = g),
          (t[114] = S),
          (t[115] = ve))
        : (ve = t[115]);
      var Se;
      t[116] !== be || t[117] !== ve
        ? ((Se = u.jsx(r("WAWebVelocityTransitionGroup"), {
            xstyle: be,
            transitionName: "slide-left",
            children: ve,
          })),
          (t[116] = be),
          (t[117] = ve),
          (t[118] = Se))
        : (Se = t[118]);
      var Re;
      t[119] !== q || t[120] !== ye || t[121] !== Se || t[122] !== te
        ? ((Re = u.jsxs(q, { xstyle: te, children: [ye, Se] })),
          (t[119] = q),
          (t[120] = ye),
          (t[121] = Se),
          (t[122] = te),
          (t[123] = Re))
        : (Re = t[123]);
      var Le;
      t[124] !== U || t[125] !== K || t[126] !== Q || t[127] !== Re
        ? ((Le = u.jsx(U, { theme: K, tsNavigationData: Q, children: Re })),
          (t[124] = U),
          (t[125] = K),
          (t[126] = Q),
          (t[127] = Re),
          (t[128] = Le))
        : (Le = t[128]);
      var Ee;
      return (
        t[129] !== V ||
        t[130] !== X ||
        t[131] !== Y ||
        t[132] !== J ||
        t[133] !== Le
          ? ((Ee = u.jsx(V, {
              name: X,
              fallback: Y,
              onError: J,
              children: Le,
            })),
            (t[129] = V),
            (t[130] = X),
            (t[131] = Y),
            (t[132] = J),
            (t[133] = Le),
            (t[134] = Ee))
          : (Ee = t[134]),
        Ee
      );
    }
    l.default = f;
  },
  226,
);
