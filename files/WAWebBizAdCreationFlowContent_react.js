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
      var t = e.flow,
        a = e.showExitConfirmation,
        l = e.step,
        c = r("useWAWebBizAdCreationIdentityContext")(),
        f = r("useWAWebNativeAdsFlowIDContext")(),
        g = c == null ? void 0 : c.relayEnvironment,
        h = c == null ? void 0 : c.adCreationEntrypointReference,
        y = c == null ? void 0 : c.adManagementQueryVariables,
        C = d(
          function () {
            var e = f.regenerateAdCreationFlowID();
            (c == null || c.reloadPreloadedQueries(e), t.pop());
          },
          [t, f, c],
        ),
        b = p(null),
        v = b[0],
        S = b[1],
        R = d(function (e) {
          S(e);
        }, []),
        L = d(function () {
          S(null);
        }, []),
        E = c == null ? void 0 : c.reloadPreloadedQueries,
        k = f.regenerateAdCreationFlowID,
        I = d(
          function (e, n, r) {
            if (E != null) {
              S(null);
              var a = k();
              (o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                n,
                a,
                f.manageAdsFlowID,
              ),
                o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
                  entryPoint: r,
                  flowID: a,
                  pageID: c == null ? void 0 : c.pageId,
                  recreateBoostId: e,
                }),
                E(a, { boostId: e }),
                t.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          },
          [t, f.manageAdsFlowID, c == null ? void 0 : c.pageId, E, k],
        ),
        T = d(
          function (e, n) {
            if (E != null) {
              S(null);
              var r;
              (n != null ? (f.setAdCreationFlowID(n), (r = n)) : (r = k()),
                o("WAWebBizAdManagementLogger").logAdCreationEntryTap(
                  o("WAWebBizAdManagementLogger").LWI_ENTRY_POINT
                    .SMB_ADVERTISE_FROM_MANAGE_ADS_DRAFT_LIST,
                  r,
                  f.manageAdsFlowID,
                ),
                E(r, { draftId: e }),
                t.push(
                  o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation,
                ));
            }
          },
          [t, f, E, k],
        ),
        D = d(
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
                ).logAdCreationEnterFlowError(e, t, f.adCreationFlowID);
            } else
              o(
                "WAWebBizNativeAdsEnterFlowErrorLogger",
              ).logManageAdsGenericError(
                e,
                f.manageAdsFlowID,
                c == null ? void 0 : c.pageId,
              );
          },
          [
            f.adCreationFlowID,
            f.manageAdsFlowID,
            c == null ? void 0 : c.pageId,
            l,
          ],
        ),
        x = m(null);
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
      var $ = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(l),
        P,
        N,
        M;
      e: {
        if (
          l === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
        ) {
          ((N = function () {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield a();
              e && C();
            })();
          }),
            (P =
              g != null && h != null
                ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                    environment: g,
                    children: u.jsx(o("CometRelay").EntryPointContainer, {
                      entryPointReference: h,
                      props: { onNavigateToManageAds: C },
                    }),
                  })
                : null));
          break e;
        }
        if (
          l ===
          o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement
        ) {
          ((M =
            g != null
              ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: g,
                  children: u.jsx(
                    r("WAWebBizAdManagementHeaderButtonGroup.react"),
                    {
                      accountType: c == null ? void 0 : c.accountType,
                      flow: t,
                      relayEnvironment: g,
                    },
                  ),
                })
              : u.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
                  accountType: c == null ? void 0 : c.accountType,
                  createAdDisabled: !0,
                  flow: t,
                  relayEnvironment: g,
                })),
            (P =
              g != null && y != null
                ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                    environment: g,
                    children: u.jsx(r("WAWebBizAdManagementRoot.react"), {
                      onLoginToFacebook:
                        (c == null ? void 0 : c.accountType) !== "FB"
                          ? c == null
                            ? void 0
                            : c.loginWithFacebook
                          : void 0,
                      pageId1: y.pageId1,
                      pageId2: y.pageId2,
                      queryRef: c == null ? void 0 : c.adManagementQueryRef,
                      onAdSelect: R,
                      onRecreateAd: I,
                      onResumeDraft: T,
                      selectedKey: v == null ? void 0 : v.nodeId,
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
      if (!(c != null && c.isWAAEligible) && !g) {
        var w,
          A = (w = c == null ? void 0 : c.pageId) != null ? w : "";
        P = u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
          xstyle: _.identityFallbackContainer,
          children: [
            u.jsx(r("WAWebBizAdManagementNullView.react"), {
              manageAdsFlowID: f.manageAdsFlowID,
              pageId: A,
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
        P == null &&
          !(c != null && c.isSwitching) &&
          (r("FBLogger")("wa_ctwa_web").warn(
            "bodyContent is null in AdCreationFlowContent for step " +
              String(l) +
              ": relayEnvironment=" +
              String(g != null) +
              " adCreationEntrypointRef=" +
              String(h != null) +
              " adManagementQueryVars=" +
              String(y != null) +
              " isWAAEligible=" +
              String(c == null ? void 0 : c.isWAAEligible),
          ),
          (P = $.loadingFallback)),
        u.jsx(r("WAWebBizAdsErrorBoundary.react"), {
          name: "WAWebNativeAdsFlow",
          fallback: u.jsx(r("WAWebBizAdsErrorPopup.react"), {
            fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
              step: l,
            }),
          }),
          onError: D,
          children: u.jsx(r("WAWebDrawer.react"), {
            theme: $.drawerTheme,
            tsNavigationData: {
              surface: "unknown",
              viewName: "biz-native-ads",
            },
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: _.fullscreenRoot,
              children: [
                u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                  xstyle: _.mainContentWithHeader,
                  children: [
                    u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                      title: $.title(),
                      type: $.headerType,
                      onBack: N,
                      rightActionElement: M,
                    }),
                    u.jsxs(r("CometPlaceholder.react"), {
                      fallback: $.loadingFallback,
                      name: i.id,
                      children: [
                        u.jsx(r("WAWebDrawerBody.react"), {
                          children: u.jsx(
                            o("WAWebBizAdCreationFooterPortalContext.react")
                              .FooterPortalProvider,
                            {
                              containerRef: x,
                              children:
                                c != null && c.isSwitching
                                  ? $.loadingFallback
                                  : P,
                            },
                          ),
                        }),
                        l ===
                          o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                            .AdCreation &&
                          u.jsx("div", {
                            ref: x,
                            className: "xh8yej3 x2lah0s",
                          }),
                      ],
                    }),
                  ],
                }),
                u.jsx(r("WAWebVelocityTransitionGroup"), {
                  xstyle: [
                    _.rightDrawerWrapper,
                    v != null ? _.rightDrawerOpen : _.rightDrawerClosed,
                  ],
                  transitionName: "slide-left",
                  children:
                    v != null && g != null
                      ? u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                          environment: g,
                          children: u.jsx(r("WAWebBizAdDetailsDrawer.react"), {
                            item: v,
                            onClose: L,
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
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
