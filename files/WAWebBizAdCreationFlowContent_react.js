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
      var t = e.flow,
        a = e.showExitConfirmation,
        l = e.step,
        c = r("useWAWebBizAdCreationIdentityContext")(),
        g = r("useWAWebNativeAdsFlowIDContext")(),
        h = c == null ? void 0 : c.relayEnvironment,
        y = c == null ? void 0 : c.adCreationEntrypointReference,
        C = c == null ? void 0 : c.adManagementQueryVariables,
        b = d(
          function () {
            var e = g.regenerateAdCreationFlowID();
            (c == null || c.reloadPreloadedQueries(e), t.pop());
          },
          [t, g, c],
        ),
        v = m(r("WAWebBizAdDraftSaveCallbackContext")),
        S = v.existingDraftIDRef,
        R = d(
          function (e) {
            S.current = e;
          },
          [S],
        ),
        L = _(null),
        E = L[0],
        k = L[1],
        I = d(function (e) {
          k(e);
        }, []),
        T = d(function () {
          k(null);
        }, []),
        D = c == null ? void 0 : c.reloadPreloadedQueries,
        x = g.regenerateAdCreationFlowID,
        $ = d(
          function (e, n, r) {
            if (D != null) {
              k(null);
              var a = x();
              (o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                n,
                a,
                g.manageAdsFlowID,
              ),
                o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
                  entryPoint: r,
                  flowID: a,
                  pageID: c == null ? void 0 : c.pageId,
                  recreateBoostId: e,
                }),
                D(a, { boostId: e }),
                t.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          },
          [t, g.manageAdsFlowID, c == null ? void 0 : c.pageId, D, x],
        ),
        P = d(
          function (e, n) {
            if (D != null) {
              k(null);
              var r;
              (n != null ? (g.setAdCreationFlowID(n), (r = n)) : (r = x()),
                o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                  o("WAWebBizAdManagementLogger").LWI_ENTRY_POINT
                    .SMB_ADVERTISE_FROM_MANAGE_ADS_DRAFT_LIST,
                  r,
                  g.manageAdsFlowID,
                ),
                D(r, { draftId: e }),
                t.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          },
          [t, g, D, x],
        ),
        N = d(
          function (e) {
            if (
              (r("FBLogger")("wa_ctwa_web").mustfix(
                "Native ads enter flow error: " + e.message,
              ),
              l ===
                o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                  .AdCreation)
            ) {
              var t = c == null ? void 0 : c.pageId;
              t != null &&
                o(
                  "WAWebBizNativeAdsEnterFlowErrorLogger",
                ).logAdCreationEnterFlowError(e, t, g.adCreationFlowID);
            } else
              o(
                "WAWebBizNativeAdsEnterFlowErrorLogger",
              ).logManageAdsGenericError(
                e,
                g.manageAdsFlowID,
                c == null ? void 0 : c.pageId,
              );
          },
          [
            g.adCreationFlowID,
            g.manageAdsFlowID,
            c == null ? void 0 : c.pageId,
            l,
          ],
        ),
        M = p(null);
      if (l == null)
        return (
          r("FBLogger")("wa_ctwa_web").mustfix(
            "AdCreationFlowContent rendered with null step",
          ),
          u.jsx(r("WAWebBizAdsErrorPopup.react"), {
            fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
              step: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                .AdManagement,
            }),
          })
        );
      if ((c == null ? void 0 : c.identityError) != null)
        return u.jsx(r("WAWebBizAdsErrorPopup.react"), {
          fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
            step: l,
          }),
        });
      var w = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(l),
        A,
        F,
        O;
      e: {
        if (
          l === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
        ) {
          ((F = function () {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield a();
              e && b();
            })();
          }),
            (A =
              h != null && y != null
                ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                    environment: h,
                    children: u.jsx(o("CometRelay").EntryPointContainer, {
                      entryPointReference: y,
                      props: { onNavigateToManageAds: b },
                    }),
                  })
                : null));
          break e;
        }
        if (
          l ===
          o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement
        ) {
          ((O =
            h != null
              ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: h,
                  children: u.jsx(
                    r("WAWebBizAdManagementHeaderButtonGroup.react"),
                    {
                      accountType: c == null ? void 0 : c.accountType,
                      flow: t,
                      relayEnvironment: h,
                    },
                  ),
                })
              : u.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
                  accountType: c == null ? void 0 : c.accountType,
                  createAdDisabled: !0,
                  flow: t,
                  relayEnvironment: h,
                })),
            (A =
              h != null && C != null
                ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                    environment: h,
                    children: u.jsx(r("WAWebBizAdManagementRoot.react"), {
                      onExistingDraftIDChange: R,
                      onLoginToFacebook:
                        (c == null ? void 0 : c.accountType) !== "FB"
                          ? c == null
                            ? void 0
                            : c.loginWithFacebook
                          : void 0,
                      pageId1: C.pageId1,
                      pageId2: C.pageId2,
                      queryRef: c == null ? void 0 : c.adManagementQueryRef,
                      onAdSelect: I,
                      onRecreateAd: $,
                      onResumeDraft: P,
                      selectedKey: E == null ? void 0 : E.nodeId,
                    }),
                  })
                : null));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            l,
        );
      }
      if (!(c != null && c.isWAAEligible) && !h) {
        var B,
          W = (B = c == null ? void 0 : c.pageId) != null ? B : "";
        A = u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
          xstyle: f.identityFallbackContainer,
          children: [
            u.jsx(r("WAWebBizAdManagementNullView.react"), {
              manageAdsFlowID: g.manageAdsFlowID,
              pageId: W,
            }),
            u.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Continue with Facebook"),
              variant: "filled",
              size: "medium",
              onPress: c == null ? void 0 : c.loginWithFacebook,
            }),
          ],
        });
      }
      return (
        A == null &&
          !(c != null && c.isSwitching) &&
          (r("FBLogger")("wa_ctwa_web").warn(
            "bodyContent is null in AdCreationFlowContent for step " +
              String(l) +
              ": relayEnvironment=" +
              String(h != null) +
              " adCreationEntrypointRef=" +
              String(y != null) +
              " adManagementQueryVars=" +
              String(C != null) +
              " isWAAEligible=" +
              String(c == null ? void 0 : c.isWAAEligible),
          ),
          (A = w.loadingFallback)),
        u.jsx(r("WAWebBizAdsErrorBoundary.react"), {
          name: "WAWebNativeAdsFlow",
          fallback: u.jsx(r("WAWebBizAdsErrorPopup.react"), {
            fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
              step: l,
            }),
          }),
          onError: N,
          children: u.jsx(r("WAWebDrawer.react"), {
            theme: w.drawerTheme,
            tsNavigationData: {
              surface: "unknown",
              viewName: "biz-native-ads",
            },
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: f.fullscreenRoot,
              children: [
                u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                  xstyle: f.mainContentWithHeader,
                  children: [
                    u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                      title: w.title(),
                      type: w.headerType,
                      onBack: F,
                      rightActionElement: O,
                    }),
                    u.jsxs(r("CometPlaceholder.react"), {
                      fallback: w.loadingFallback,
                      name: i.id,
                      children: [
                        u.jsx(r("WAWebDrawerBody.react"), {
                          children: u.jsx(
                            o("WAWebBizAdCreationFooterPortalContext.react")
                              .FooterPortalProvider,
                            {
                              containerRef: M,
                              children:
                                c != null && c.isSwitching
                                  ? w.loadingFallback
                                  : A,
                            },
                          ),
                        }),
                        l ===
                          o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                            .AdCreation &&
                          u.jsx("div", {
                            ref: M,
                            className: "xh8yej3 x2lah0s",
                          }),
                      ],
                    }),
                  ],
                }),
                u.jsx(r("WAWebVelocityTransitionGroup"), {
                  xstyle: [
                    f.rightDrawerWrapper,
                    E != null ? f.rightDrawerOpen : f.rightDrawerClosed,
                  ],
                  transitionName: "slide-left",
                  children:
                    E != null && h != null
                      ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                          environment: h,
                          children: u.jsx(r("WAWebBizAdDetailsDrawer.react"), {
                            item: E,
                            onClose: T,
                          }),
                        })
                      : null,
                }),
              ],
            }),
          }),
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
