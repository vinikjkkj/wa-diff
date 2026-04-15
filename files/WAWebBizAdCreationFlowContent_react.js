__d(
  "WAWebBizAdCreationFlowContent.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationFooterPortalContext.react",
    "WAWebBizAdDetailsDrawer.react",
    "WAWebBizAdDraftSaveCallbackContext",
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
      m = c.useContext,
      p = c.useRef,
      _ = c.useState,
      f = {
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
    function g(e) {
      var t = o("react-compiler-runtime").c(139),
        a = e.flow,
        l = e.showExitConfirmation,
        c = e.step,
        d = r("useWAWebBizAdCreationIdentityContext")(),
        g = r("useWAWebNativeAdsFlowIDContext")(),
        h = d == null ? void 0 : d.relayEnvironment,
        y = d == null ? void 0 : d.adCreationEntrypointReference,
        C = d == null ? void 0 : d.adManagementQueryVariables,
        b;
      t[0] !== a || t[1] !== g || t[2] !== d
        ? ((b = function () {
            var e = g.regenerateAdCreationFlowID();
            (d == null || d.reloadPreloadedQueries(e), a.pop());
          }),
          (t[0] = a),
          (t[1] = g),
          (t[2] = d),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S = m(r("WAWebBizAdDraftSaveCallbackContext")),
        R = S.existingDraftIDRef,
        L;
      t[4] !== R
        ? ((L = function (t) {
            R.current = t;
          }),
          (t[4] = R),
          (t[5] = L))
        : (L = t[5]);
      var E = L,
        k = _(null),
        I = k[0],
        T = k[1],
        D;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function (t) {
            T(t);
          }),
          (t[6] = D))
        : (D = t[6]);
      var x = D,
        $;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            T(null);
          }),
          (t[7] = $))
        : ($ = t[7]);
      var P = $,
        N = d == null ? void 0 : d.reloadPreloadedQueries,
        M = g.regenerateAdCreationFlowID,
        w;
      (t[8] !== a ||
      t[9] !== g.manageAdsFlowID ||
      t[10] !== (d == null ? void 0 : d.pageId) ||
      t[11] !== M ||
      t[12] !== N
        ? ((w = function (t, n, r) {
            if (N != null) {
              T(null);
              var e = M();
              (o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                n,
                e,
                g.manageAdsFlowID,
                o("WAWebBizAdManagementLogger").WEB_FLOW_TYPE.NATIVE_WEB,
              ),
                o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
                  entryPoint: r,
                  flowID: e,
                  pageID: d == null ? void 0 : d.pageId,
                  recreateBoostId: t,
                }),
                N(e, { boostId: t }),
                a.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          }),
          (t[8] = a),
          (t[9] = g.manageAdsFlowID),
          (t[10] = d == null ? void 0 : d.pageId),
          (t[11] = M),
          (t[12] = N),
          (t[13] = w))
        : (w = t[13]),
        d == null || d.pageId);
      var A = w,
        F;
      t[14] !== a || t[15] !== g || t[16] !== M || t[17] !== N
        ? ((F = function (t, n) {
            if (N != null) {
              T(null);
              var e;
              (n != null ? (g.setAdCreationFlowID(n), (e = n)) : (e = M()),
                o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                  o("WAWebBizAdManagementLogger").LWI_ENTRY_POINT
                    .SMB_ADVERTISE_FROM_MANAGE_ADS_DRAFT_LIST,
                  e,
                  g.manageAdsFlowID,
                  o("WAWebBizAdManagementLogger").WEB_FLOW_TYPE.NATIVE_WEB,
                ),
                N(e, { draftId: t }),
                a.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          }),
          (t[14] = a),
          (t[15] = g),
          (t[16] = M),
          (t[17] = N),
          (t[18] = F))
        : (F = t[18]);
      var O = F,
        B;
      (t[19] !== g.adCreationFlowID ||
      t[20] !== g.manageAdsFlowID ||
      t[21] !== (d == null ? void 0 : d.pageId) ||
      t[22] !== c
        ? ((B = function (t) {
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
                ).logAdCreationEnterFlowError(t, e, g.adCreationFlowID);
            } else
              o(
                "WAWebBizNativeAdsEnterFlowErrorLogger",
              ).logManageAdsGenericError(
                t,
                g.manageAdsFlowID,
                d == null ? void 0 : d.pageId,
              );
          }),
          (t[19] = g.adCreationFlowID),
          (t[20] = g.manageAdsFlowID),
          (t[21] = d == null ? void 0 : d.pageId),
          (t[22] = c),
          (t[23] = B))
        : (B = t[23]),
        d == null || d.pageId);
      var W = B,
        q = p(null);
      if (c == null) {
        r("FBLogger")("wa_ctwa_web").mustfix(
          "AdCreationFlowContent rendered with null step",
        );
        var U;
        return (
          t[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement,
                }),
              })),
              (t[24] = U))
            : (U = t[24]),
          U
        );
      }
      if ((d == null ? void 0 : d.identityError) != null) {
        var V;
        return (
          t[25] !== c
            ? ((V = u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: c,
                }),
              })),
              (t[25] = c),
              (t[26] = V))
            : (V = t[26]),
          V
        );
      }
      var H, G, z, j, K, Q, X, Y, J, Z, ee, te, ne, re, oe, ae, ie;
      if (
        t[27] !== y ||
        t[28] !== C ||
        t[29] !== a ||
        t[30] !== g.manageAdsFlowID ||
        t[31] !== W ||
        t[32] !== A ||
        t[33] !== O ||
        t[34] !== (d == null ? void 0 : d.accountType) ||
        t[35] !== (d == null ? void 0 : d.adManagementQueryRef) ||
        t[36] !== (d == null ? void 0 : d.isSwitching) ||
        t[37] !== (d == null ? void 0 : d.isWAAEligible) ||
        t[38] !== (d == null ? void 0 : d.loginWithFacebook) ||
        t[39] !== (d == null ? void 0 : d.pageId) ||
        t[40] !== v ||
        t[41] !== h ||
        t[42] !== (I == null ? void 0 : I.nodeId) ||
        t[43] !== l ||
        t[44] !== c ||
        t[45] !== E
      ) {
        X = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(c);
        e: {
          if (
            c ===
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
          ) {
            var le;
            (t[63] !== v || t[64] !== l
              ? ((le = function () {
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield l();
                    e && v();
                  })();
                }),
                (t[63] = v),
                (t[64] = l),
                (t[65] = le))
              : (le = t[65]),
              (Y = le));
            var se;
            (t[66] !== y || t[67] !== v || t[68] !== h
              ? ((se =
                  h != null && y != null
                    ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                        environment: h,
                        children: u.jsx(o("CometRelay").EntryPointContainer, {
                          entryPointReference: y,
                          props: { onNavigateToManageAds: v },
                        }),
                      })
                    : null),
                (t[66] = y),
                (t[67] = v),
                (t[68] = h),
                (t[69] = se))
              : (se = t[69]),
              (Q = se));
            break e;
          }
          if (
            c ===
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement
          ) {
            var ue;
            (t[70] !== a ||
            t[71] !== (d == null ? void 0 : d.accountType) ||
            t[72] !== h
              ? ((ue =
                  h != null
                    ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                        environment: h,
                        children: u.jsx(
                          r("WAWebBizAdManagementHeaderButtonGroup.react"),
                          {
                            accountType: d == null ? void 0 : d.accountType,
                            flow: a,
                            relayEnvironment: h,
                          },
                        ),
                      })
                    : u.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
                        accountType: d == null ? void 0 : d.accountType,
                        createAdDisabled: !0,
                        flow: a,
                        relayEnvironment: h,
                      })),
                (t[70] = a),
                (t[71] = d == null ? void 0 : d.accountType),
                (t[72] = h),
                (t[73] = ue))
              : (ue = t[73]),
              (J = ue));
            var ce;
            (t[74] !== C ||
            t[75] !== A ||
            t[76] !== O ||
            t[77] !== (d == null ? void 0 : d.accountType) ||
            t[78] !== (d == null ? void 0 : d.adManagementQueryRef) ||
            t[79] !== (d == null ? void 0 : d.loginWithFacebook) ||
            t[80] !== h ||
            t[81] !== (I == null ? void 0 : I.nodeId) ||
            t[82] !== E
              ? ((ce =
                  h != null && C != null
                    ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                        environment: h,
                        children: u.jsx(r("WAWebBizAdManagementRoot.react"), {
                          onExistingDraftIDChange: E,
                          onLoginToFacebook:
                            (d == null ? void 0 : d.accountType) !== "FB"
                              ? d == null
                                ? void 0
                                : d.loginWithFacebook
                              : void 0,
                          pageId1: C.pageId1,
                          pageId2: C.pageId2,
                          queryRef: d == null ? void 0 : d.adManagementQueryRef,
                          onAdSelect: x,
                          onRecreateAd: A,
                          onResumeDraft: O,
                          selectedKey: I == null ? void 0 : I.nodeId,
                        }),
                      })
                    : null),
                (t[74] = C),
                (t[75] = A),
                (t[76] = O),
                (t[77] = d == null ? void 0 : d.accountType),
                (t[78] = d == null ? void 0 : d.adManagementQueryRef),
                (t[79] = d == null ? void 0 : d.loginWithFacebook),
                (t[80] = h),
                (t[81] = I == null ? void 0 : I.nodeId),
                (t[82] = E),
                (t[83] = ce))
              : (ce = t[83]),
              (Q = ce));
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              c,
          );
        }
        if (!(d != null && d.isWAAEligible) && !h) {
          var de,
            me = (de = d == null ? void 0 : d.pageId) != null ? de : "",
            pe;
          t[84] !== g.manageAdsFlowID || t[85] !== me
            ? ((pe = u.jsx(r("WAWebBizAdManagementNullView.react"), {
                manageAdsFlowID: g.manageAdsFlowID,
                pageId: me,
              })),
              (t[84] = g.manageAdsFlowID),
              (t[85] = me),
              (t[86] = pe))
            : (pe = t[86]);
          var _e;
          t[87] === Symbol.for("react.memo_cache_sentinel")
            ? ((_e = s._(/*BTDS*/ "Continue with Facebook")), (t[87] = _e))
            : (_e = t[87]);
          var fe = d == null ? void 0 : d.loginWithFacebook,
            ge;
          t[88] !== fe
            ? ((ge = u.jsx(r("WDSButton.react"), {
                label: _e,
                variant: "filled",
                size: "medium",
                onPress: fe,
              })),
              (t[88] = fe),
              (t[89] = ge))
            : (ge = t[89]);
          var he;
          (t[90] !== pe || t[91] !== ge
            ? ((he = u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                xstyle: f.identityFallbackContainer,
                children: [pe, ge],
              })),
              (t[90] = pe),
              (t[91] = ge),
              (t[92] = he))
            : (he = t[92]),
            (Q = he));
        }
        (Q == null &&
          !(d != null && d.isSwitching) &&
          (r("FBLogger")("wa_ctwa_web").warn(
            "bodyContent is null in AdCreationFlowContent for step " +
              String(c) +
              ": relayEnvironment=" +
              String(h != null) +
              " adCreationEntrypointRef=" +
              String(y != null) +
              " adManagementQueryVars=" +
              String(C != null) +
              " isWAAEligible=" +
              String(d == null ? void 0 : d.isWAAEligible),
          ),
          (Q = X.loadingFallback)),
          (K = r("WAWebBizAdsErrorBoundary.react")),
          (ne = "WAWebNativeAdsFlow"),
          t[93] !== c
            ? ((re = u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: c,
                }),
              })),
              (t[93] = c),
              (t[94] = re))
            : (re = t[94]),
          (oe = W),
          (j = r("WAWebDrawer.react")),
          (ee = X.drawerTheme),
          t[95] === Symbol.for("react.memo_cache_sentinel")
            ? ((te = { surface: "unknown", viewName: "biz-native-ads" }),
              (t[95] = te))
            : (te = t[95]),
          (z = o("WAWebFlex.react").FlexRow),
          (Z = f.fullscreenRoot),
          (G = o("WAWebFlexBox.react").FlexColumn),
          (ie = f.mainContentWithHeader),
          (H = o("WAWebDrawerHeader.react").DrawerHeader),
          (ae = X.title()),
          (t[27] = y),
          (t[28] = C),
          (t[29] = a),
          (t[30] = g.manageAdsFlowID),
          (t[31] = W),
          (t[32] = A),
          (t[33] = O),
          (t[34] = d == null ? void 0 : d.accountType),
          (t[35] = d == null ? void 0 : d.adManagementQueryRef),
          (t[36] = d == null ? void 0 : d.isSwitching),
          (t[37] = d == null ? void 0 : d.isWAAEligible),
          (t[38] = d == null ? void 0 : d.loginWithFacebook),
          (t[39] = d == null ? void 0 : d.pageId),
          (t[40] = v),
          (t[41] = h),
          (t[42] = I == null ? void 0 : I.nodeId),
          (t[43] = l),
          (t[44] = c),
          (t[45] = E),
          (t[46] = H),
          (t[47] = G),
          (t[48] = z),
          (t[49] = j),
          (t[50] = K),
          (t[51] = Q),
          (t[52] = X),
          (t[53] = Y),
          (t[54] = J),
          (t[55] = Z),
          (t[56] = ee),
          (t[57] = te),
          (t[58] = ne),
          (t[59] = re),
          (t[60] = oe),
          (t[61] = ae),
          (t[62] = ie));
      } else
        ((H = t[46]),
          (G = t[47]),
          (z = t[48]),
          (j = t[49]),
          (K = t[50]),
          (Q = t[51]),
          (X = t[52]),
          (Y = t[53]),
          (J = t[54]),
          (Z = t[55]),
          (ee = t[56]),
          (te = t[57]),
          (ne = t[58]),
          (re = t[59]),
          (oe = t[60]),
          (ae = t[61]),
          (ie = t[62]));
      var ye;
      t[96] !== H ||
      t[97] !== X.headerType ||
      t[98] !== Y ||
      t[99] !== J ||
      t[100] !== ae
        ? ((ye = u.jsx(H, {
            title: ae,
            type: X.headerType,
            onBack: Y,
            rightActionElement: J,
          })),
          (t[96] = H),
          (t[97] = X.headerType),
          (t[98] = Y),
          (t[99] = J),
          (t[100] = ae),
          (t[101] = ye))
        : (ye = t[101]);
      var Ce = d != null && d.isSwitching ? X.loadingFallback : Q,
        be;
      t[102] !== Ce
        ? ((be = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(
              o("WAWebBizAdCreationFooterPortalContext.react")
                .FooterPortalProvider,
              { containerRef: q, children: Ce },
            ),
          })),
          (t[102] = Ce),
          (t[103] = be))
        : (be = t[103]);
      var ve;
      t[104] !== c
        ? ((ve =
            c ===
              o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                .AdCreation &&
            u.jsx("div", { ref: q, className: "xh8yej3 x2lah0s" })),
          (t[104] = c),
          (t[105] = ve))
        : (ve = t[105]);
      var Se;
      t[106] !== X.loadingFallback || t[107] !== be || t[108] !== ve
        ? ((Se = u.jsxs(r("CometPlaceholder.react"), {
            fallback: X.loadingFallback,
            name: i.id,
            children: [be, ve],
          })),
          (t[106] = X.loadingFallback),
          (t[107] = be),
          (t[108] = ve),
          (t[109] = Se))
        : (Se = t[109]);
      var Re;
      t[110] !== G || t[111] !== ye || t[112] !== Se || t[113] !== ie
        ? ((Re = u.jsxs(G, { xstyle: ie, children: [ye, Se] })),
          (t[110] = G),
          (t[111] = ye),
          (t[112] = Se),
          (t[113] = ie),
          (t[114] = Re))
        : (Re = t[114]);
      var Le = I != null ? f.rightDrawerOpen : f.rightDrawerClosed,
        Ee;
      t[115] !== Le
        ? ((Ee = [f.rightDrawerWrapper, Le]), (t[115] = Le), (t[116] = Ee))
        : (Ee = t[116]);
      var ke;
      t[117] !== h || t[118] !== I
        ? ((ke =
            I != null && h != null
              ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: h,
                  children: u.jsx(r("WAWebBizAdDetailsDrawer.react"), {
                    item: I,
                    onClose: P,
                  }),
                })
              : null),
          (t[117] = h),
          (t[118] = I),
          (t[119] = ke))
        : (ke = t[119]);
      var Ie;
      t[120] !== Ee || t[121] !== ke
        ? ((Ie = u.jsx(r("WAWebVelocityTransitionGroup"), {
            xstyle: Ee,
            transitionName: "slide-left",
            children: ke,
          })),
          (t[120] = Ee),
          (t[121] = ke),
          (t[122] = Ie))
        : (Ie = t[122]);
      var Te;
      t[123] !== z || t[124] !== Z || t[125] !== Re || t[126] !== Ie
        ? ((Te = u.jsxs(z, { xstyle: Z, children: [Re, Ie] })),
          (t[123] = z),
          (t[124] = Z),
          (t[125] = Re),
          (t[126] = Ie),
          (t[127] = Te))
        : (Te = t[127]);
      var De;
      t[128] !== j || t[129] !== ee || t[130] !== te || t[131] !== Te
        ? ((De = u.jsx(j, { theme: ee, tsNavigationData: te, children: Te })),
          (t[128] = j),
          (t[129] = ee),
          (t[130] = te),
          (t[131] = Te),
          (t[132] = De))
        : (De = t[132]);
      var xe;
      return (
        t[133] !== K ||
        t[134] !== ne ||
        t[135] !== re ||
        t[136] !== oe ||
        t[137] !== De
          ? ((xe = u.jsx(K, {
              name: ne,
              fallback: re,
              onError: oe,
              children: De,
            })),
            (t[133] = K),
            (t[134] = ne),
            (t[135] = re),
            (t[136] = oe),
            (t[137] = De),
            (t[138] = xe))
          : (xe = t[138]),
        xe
      );
    }
    l.default = g;
  },
  226,
);
