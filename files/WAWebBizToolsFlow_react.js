__d(
  "WAWebBizToolsFlow.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdCreationLogger",
    "WAWebAdsManagementDrawer.react",
    "WAWebAdsStackIcon.react",
    "WAWebBackendErrors",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastsBizToolsUploadDrawerButton.react",
    "WAWebBizBroadcastsToolsEntryStrings",
    "WAWebBizGatingUtils",
    "WAWebBizLabelFlow.react",
    "WAWebBizOrderManagementFlow.react",
    "WAWebBizPaymentsHomeManagementFlow.react",
    "WAWebBizQuickRepliesDrawer.react",
    "WAWebBizRefreshedProfileDrawerLoadable",
    "WAWebBizToolWhatsNextSection.react",
    "WAWebBizToolsDrawerBodySection.react",
    "WAWebBizToolsFlowSteps",
    "WAWebBizToolsUtils",
    "WAWebBoltIcon.react",
    "WAWebBusinessAdvertiseOutlineIcon.react",
    "WAWebBusinessBroadcastHomeFlow.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCatalogCollection",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebChatlistUtils",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactUtils",
    "WAWebDrawer.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFetchSubscriptionEntryPoints",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebLabelOutlineIcon.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebManageAdsUtils",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMetaVerifiedListItem.react",
    "WAWebNativeAdsGatingUtils",
    "WAWebNoop",
    "WAWebNux",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebProductCatalogSession",
    "WAWebProfileDrawer.react",
    "WAWebProfilePicThumbCollection",
    "WAWebReceiptIcon.react",
    "WAWebStorefrontIcon.react",
    "WAWebTextStatusCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsSubscription",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumBusinessToolsItemType",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumManageAdsEntryPoint",
    "WAWebXWASubscriptionEntryPointTypeUtils",
    "WDSIconIcGridOn.react",
    "WDSIconIcHelp.react",
    "WDSIconWdsIcBroadcastMessage.react",
    "WDSIconWdsIcCurrencyReal.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "react",
    "useWAWebAudienceImportIsFeatureSupported",
    "useWAWebFlow",
    "useWAWebFocusOnMount",
    "useWAWebNativeAdsMvpEligibility",
    "useWAWebNux",
    "useWAWebServerGatedAdEntryPoint",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c = ["ref"],
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useMemo,
      g = p.useState,
      h = function () {
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getFaqUrl(),
        );
      },
      y = { icon: { color: "xrllbb6", $$css: !0 } },
      C = { surface: "tools-tab" },
      b = r("gkx")("26258")
        ? s._(/*BTDS*/ "Quick replies")
        : s._(/*BTDS*/ "Quick replies"),
      v = r("gkx")("26258")
        ? s._(/*BTDS*/ "Business tools")
        : s._(/*BTDS*/ "Tools"),
      S = r("gkx")("26258")
        ? s._(/*BTDS*/ "Business tools")
        : s._(/*BTDS*/ "Business tools"),
      R = function (t, n, a) {
        return m.jsx(r("WAWebProfileDrawer.react"), {
          status: t,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
          profilePicThumb: n,
          contact: a,
          conn: o("WAWebConnModel").Conn,
          isInitialStep: !1,
        });
      },
      L = function (t, n) {
        if (o("WAWebBizGatingUtils").adManagementEnabled()) {
          n(o("WAWebBizToolsFlowSteps").BizToolsSteps.ManageAds);
          return;
        }
        o("WAWebManageAdsUtils").openManageAdsInLwi(
          t,
          "whatsapp_smb_web_manage_ads_business_tools_list_item",
          o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
            .SMB_BUSINESS_TOOLS_MANAGE_AD,
        );
      };
    function E(e) {
      switch (e) {
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile:
          return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
            .PROFILE;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.ManageAds:
          return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
            .MANAGE_ADS;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog:
          return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
            .CATALOG;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Orders:
          return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
            .ORDERS;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.PaymentsHome:
          return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
            .PAYMENTS_HOME;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.QuickReplies:
          return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
            .QUICK_REPLIES;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Labels:
          return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
            .LABELS;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools:
          return;
      }
    }
    function k(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        a = n.initialStep,
        i = a === void 0 ? o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools : a,
        l = n.adsAccountInfo,
        s = n.entryPoint,
        c = g(!1),
        d = c[0],
        p = c[1],
        h = g(null),
        y = h[0],
        C = h[1],
        b = o("useWAWebFlow").useFlow(i, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        v = b[0],
        S = b[1],
        L = r("useWAWebFocusOnMount")(),
        k = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      (_(function () {
        o("WAWebCatalogCollection")
          .CatalogCollection.find(k)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              r("WAWebNoop"),
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").CatalogUnknownError,
              r("WAWebNoop"),
            ),
          )
          .then(C)
          .finally(function () {
            p(!0);
          });
      }, []),
        f(
          function () {
            var e,
              t = o("WAWebProductCatalogContext").buildProductCatalogContext(
                new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(
                  k.toString(),
                ),
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_SETTINGS,
              );
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            )) == null || e.updateContext(t);
          },
          [k],
        ),
        _(
          function () {
            o("WAWebBizToolsUtils").logBizToolsEntry(s);
          },
          [s],
        ));
      var I = S.step;
      if (I == null) return null;
      var T = function (t) {
          var e = E(t);
          e != null && o("WAWebBizToolsUtils").logBizToolsClick(s, e);
          var n = o("WAWebBizGatingUtils").businessProfileRefreshEnabled();
          t === o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog
            ? o(
                "WAWebCatalogManagementFlowLoadable",
              ).createCatalogManagementFlowObject(function (e, n, r) {
                r === !0 && !n
                  ? o(
                      "WAWebCatalogManagementFlowLoadable",
                    ).showSelfCatalogLoadErrorToast()
                  : S.push(t);
              })
            : t === o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile &&
                n
              ? o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                  m.jsx(
                    o("WAWebBizRefreshedProfileDrawerLoadable")
                      .WAWebBizRefreshedProfileDrawerLoadable,
                    {
                      entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                        .BUSINESS_HOME,
                      onClose: function () {
                        return o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerMid();
                      },
                    },
                  ),
                )
              : S.push(t);
        },
        x = function () {
          S.pop();
        },
        $ = function (n) {
          if (!(n == null || n === "not-linked"))
            return m.jsx(
              o("WAWebAdsManagementDrawer.react").AdsManagementDrawer,
              { onBack: x, activeAccountInfo: n, isInitialStep: !1, ref: t },
            );
        },
        P = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(k),
        N = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.assertGet(k),
        M = o("WAWebContactCollection").ContactCollection.assertGet(k),
        w = P != null && N != null && M != null,
        A;
      switch (I) {
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools:
          A = m.jsx(D, {
            isBizProfileVisible: w,
            isCatalogVisible:
              d &&
              !o(
                "WAWebProductCatalogMetaLinkingGatingUtils",
              ).shouldDisableCatalogDueToMetaLinkingForSelf(),
            onBack: S.end,
            onSelect: T,
            entryPoint: s,
            catalog: y,
          });
          break;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile:
          A = R(P, N, M);
          break;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.ManageAds:
          A = $(l);
          break;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog:
          A = m.jsx(
            o("WAWebCatalogManagementFlowLoadable")
              .CatalogManagementFlowLoadable,
            { catalogId: k, product: null, isInitialStep: !1 },
          );
          break;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Orders:
          A = m.jsx(r("WAWebBizOrderManagementFlow.react"), {
            isInitialStep: !1,
          });
          break;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.PaymentsHome:
          A = m.jsx(r("WAWebBizPaymentsHomeManagementFlow.react"), {
            isInitialStep: !1,
          });
          break;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.QuickReplies:
          A = m.jsx(r("WAWebBizQuickRepliesDrawer.react"), {
            onBack: x,
            isInitialStep: !1,
          });
          break;
        case o("WAWebBizToolsFlowSteps").BizToolsSteps.Labels:
          A = m.jsx(r("WAWebBizLabelFlow.react"), { isInitialStep: !1 });
          break;
      }
      return m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        tabIndex: 0,
        ref: L,
        children: m.jsx(v, { ref: t, flow: S, children: A }),
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.adsAccountInfo,
        n = e.ctaText,
        r = e.entryPoint,
        a = e.refreshedIcon,
        i = a === void 0 ? !1 : a,
        l = e.supplementaryCtaText,
        u = function () {
          (o("WAWebBizToolsUtils").logBizToolsClick(
            r,
            o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE
              .ADVERTISE_LIST_ITEM,
          ),
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: {
                activeAccountInfo: t,
                sourceAdCreation: "whatsapp_smb_web_business_tools_list_item",
              },
              lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                .SMB_BUSINESS_TOOLS_ADVERTISE_LIST_ITEM,
            }));
        };
      _(
        function () {
          o("WAWebAdCreationLogger").logAdCreationImpression(
            o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
              .SMB_BUSINESS_TOOLS_ADVERTISE_LIST_ITEM,
            t !== "not-linked" && t.hasFacebookPage,
          );
        },
        [t],
      );
      var c = n != null ? n : s._(/*BTDS*/ "Advertise"),
        d = l != null ? l : s._(/*BTDS*/ "Create ads that lead to WhatsApp");
      return m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        testid: void 0,
        theme: "biz-tools",
        divider: !1,
        secondaryChildren: d,
        icon: i
          ? m.jsx(
              o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
              { directional: !0, iconXstyle: y.icon },
            )
          : m.jsx(
              o("WAWebBusinessAdvertiseOutlineIcon.react")
                .BusinessAdvertiseOutlineIcon,
              { width: 26, height: 26, iconXstyle: y.icon },
            ),
        active: !1,
        onClick: u,
        children: c,
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.adsAccountInfo,
        n = e.onClick;
      return (
        _(
          function () {
            o("WAWebAdCreationLogger").logManageAdsEntryPointImpression(
              o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT
                .SMB_BUSINESS_TOOLS_MANAGE_ADS_LIST_ITEM,
            );
          },
          [t],
        ),
        t === "not-linked" || t.hasCreatedAd !== !0
          ? null
          : m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              theme: "biz-tools",
              divider: !1,
              secondaryChildren: s._(/*BTDS*/ "See all your ads in one place"),
              icon: m.jsx(o("WAWebAdsStackIcon.react").AdsStackIcon, {
                width: 24,
                height: 24,
              }),
              active: !1,
              onClick: function () {
                return L(t, n);
              },
              children: s._(/*BTDS*/ "Manage ads"),
            })
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(t) {
      var a = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, c),
        u = l.entryPoint,
        d = l.isBizProfileVisible,
        p = l.isCatalogVisible,
        f = l.onSelect,
        R = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        L = o("useWAWebNativeAdsMvpEligibility").useNativeAdsMvpEligibility(),
        E = L.hasAdvertisedViaLWI,
        k = L.isQE2Eligible;
      _(
        function () {
          o("WAWebBizToolsUtils").logBizToolsImpression(u);
        },
        [u],
      );
      var D = g(!1),
        $ = D[0],
        P = D[1],
        N = o(
          "useWAWebAudienceImportIsFeatureSupported",
        ).useWAWebAudienceImportIsFeatureSupported(),
        M = o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).isBizBroadcastEnabledAndDeviceSupported(),
        w = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_HOME_UPSELL),
        A = w[0],
        F = w[1];
      (_(
        function () {
          M &&
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.toolsEntryPointViewed();
        },
        [M],
      ),
        _(function () {
          var t = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (o("WAWebBizGatingUtils").isMetaVerifiedEnabled())
                try {
                  var t = yield o(
                    "WAWebFetchSubscriptionEntryPoints",
                  ).fetchSubscriptionEntryPoints();
                  if (t.type === "success") {
                    var n,
                      a,
                      i =
                        (n = t.subscriptionEntrypoints) == null
                          ? void 0
                          : n.find(function (e) {
                              return (
                                e.subscriptionType ===
                                o("WAWebXWASubscriptionEntryPointTypeUtils")
                                  .SubscriptionEntryPointType.META_VERIFIED
                              );
                            }),
                      l = !!(i != null && i.webEntryPointEligibility);
                    (o(
                      "WAWebUserPrefsSubscription",
                    ).setShouldShowMetaVerifiedEntryPoint(l),
                      P(l),
                      o(
                        "WAWebUserPrefsSubscription",
                      ).setMetaVerifiedEntryPointRedirectionUri(
                        (a =
                          i == null ? void 0 : i.webEntryPointRedirectionUri) !=
                          null
                          ? a
                          : "",
                      ));
                  }
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "fetchSubscriptionEntryPoints promise error",
                        ])),
                    )
                    .sendLogs(r("getErrorSafe")(t).message);
                }
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          t();
        }, []));
      var O = o("useWAWebServerGatedAdEntryPoint").useServerGatedAdEntryPoint(
          "whatsapp_smb_web_business_tools_list_item",
          R,
        ),
        B = O[0],
        W = O[1],
        q =
          R != null &&
          !B &&
          (R !== "not-linked" ||
            o("WAWebNativeAdsGatingUtils").isNativeAdsMvpEntrypointEligible(k)),
        U =
          R != null &&
          R !== "not-linked" &&
          R.hasCreatedAd &&
          !o("WAWebNativeAdsGatingUtils").shouldUseNativeAdsMvpExperience({
            hasAdvertisedViaLWI: E,
            isQE2Eligible: k,
            logExposure: !1,
          }),
        V = q || U || M,
        H;
      V &&
        (H = m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
          headerText: s._(/*BTDS*/ "Reach more customers"),
          children: [
            $ ? m.jsx(r("WAWebMetaVerifiedListItem.react"), {}) : null,
            q && R != null
              ? m.jsx(I, {
                  adsAccountInfo: R,
                  entryPoint: u,
                  ctaText: W == null ? void 0 : W.content,
                  supplementaryCtaText: W == null ? void 0 : W.subContent,
                  refreshedIcon: !0,
                })
              : null,
            U && R != null ? m.jsx(T, { adsAccountInfo: R, onClick: f }) : null,
            M &&
              m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                theme: "biz-tools",
                divider: !1,
                secondaryChildren: o(
                  "WAWebBizBroadcastsToolsEntryStrings",
                ).getBizBroadcastsToolsEntrySecondaryText(),
                icon: m.jsx(r("WDSIconWdsIcBroadcastMessage.react"), {
                  iconXstyle: y.icon,
                }),
                detail: A
                  ? m.jsx("div", {
                      className:
                        "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz",
                    })
                  : null,
                active: !1,
                onClick: function () {
                  (A && F(),
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.toolsEntryPointClicked(),
                    x());
                },
                children: o(
                  "WAWebBizBroadcastsToolsEntryStrings",
                ).getBizBroadcastsToolsEntryPrimaryText(),
              }),
          ],
        }));
      var G =
          u ===
          o("WAWebWamEnumBusinessToolsEntryPointType")
            .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_SETTINGS
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
            : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
        z = o(
          "WAWebProductCatalogMetaLinkingGatingUtils",
        ).shouldShowMetaLinkedDisabledCatalogTooltipForSelf(),
        j = z
          ? o(
              "WAWebProductCatalogMetaLinkingGatingUtils",
            ).getDisabledMetaLinkedCatalogTooltipText()
          : null,
        K = s._(/*BTDS*/ "Catalog"),
        Q = o("WAWebListsGatingUtils").isListsEnabled(),
        X = Q ? s._(/*BTDS*/ "Lists") : s._(/*BTDS*/ "Labels"),
        Y = Q
          ? s._(/*BTDS*/ "Manage people and groups")
          : s._(/*BTDS*/ "Organise chats and customers"),
        J = Q
          ? m.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {
              iconXstyle: y.icon,
            })
          : m.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
              width: 24,
              height: 24,
              iconXstyle: y.icon,
            });
      function Z() {
        return o("WAWebBizGatingUtils").paymentsHomeEnabled()
          ? s._(/*BTDS*/ "View your charges")
          : o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Manage charges and payments")
            : s._(/*BTDS*/ "Manage orders and payments");
      }
      return (
        (Z.displayName = Z.name + " [from " + i.id + "]"),
        m.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          theme: "biz-tools-drawer",
          testid: void 0,
          tsNavigationData: C,
          children: [
            m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: v,
              type: G,
              onBack: l.onBack,
            }),
            o("WAWebBizGatingUtils").isBizToolsTopCardEnabled()
              ? m.jsx(r("WAWebBizToolWhatsNextSection.react"), {})
              : null,
            m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
              headerText: S,
              children: [
                d
                  ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                      testid: void 0,
                      theme: "biz-tools",
                      divider: !1,
                      icon: m.jsx(
                        o("WAWebStorefrontIcon.react").StorefrontIcon,
                        { iconXstyle: y.icon },
                      ),
                      active: !1,
                      secondaryChildren: s._(
                        /*BTDS*/ "Manage address, hours and website",
                      ),
                      onClick: function () {
                        return f(
                          o("WAWebBizToolsFlowSteps").BizToolsSteps
                            .BusinessProfile,
                        );
                      },
                      children: s._(/*BTDS*/ "Business profile"),
                    })
                  : null,
                p
                  ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                      testid: void 0,
                      theme: "biz-tools",
                      divider: !1,
                      icon: m.jsx(r("WDSIconIcGridOn.react"), {
                        iconXstyle: y.icon,
                      }),
                      active: !1,
                      disabled: z,
                      tooltip: j,
                      ariaLabel: j != null ? j : K,
                      secondaryChildren: s._(
                        /*BTDS*/ "Show products and services",
                      ),
                      onClick: z
                        ? r("WAWebNoop")
                        : function () {
                            return f(
                              o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog,
                            );
                          },
                      children: K,
                    })
                  : null,
                o("WAWebBizGatingUtils").orderManagementEnabled()
                  ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                      testid: void 0,
                      theme: "biz-tools",
                      divider: !1,
                      secondaryChildren: Z(),
                      icon: m.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
                        width: 24,
                        height: 24,
                        iconXstyle: y.icon,
                      }),
                      active: !1,
                      onClick: function () {
                        return f(
                          o("WAWebBizToolsFlowSteps").BizToolsSteps.Orders,
                        );
                      },
                      children: o(
                        "WAWebBizGatingUtils",
                      ).isOrderContentOptimizationEnabled()
                        ? s._(/*BTDS*/ "Charges")
                        : s._(/*BTDS*/ "Orders"),
                    })
                  : null,
                o("WAWebBizGatingUtils").paymentsHomeEnabled()
                  ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                      testid: void 0,
                      theme: "biz-tools",
                      divider: !1,
                      secondaryChildren: s._(
                        /*BTDS*/ "Manage your payment info",
                      ),
                      icon: m.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
                        width: 24,
                        height: 24,
                        iconXstyle: y.icon,
                      }),
                      active: !1,
                      onClick: function () {
                        return f(
                          o("WAWebBizToolsFlowSteps").BizToolsSteps
                            .PaymentsHome,
                        );
                      },
                      children: s._(/*BTDS*/ "Payments"),
                    })
                  : null,
              ],
            }),
            H,
            m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
              headerText: s._(/*BTDS*/ "Messaging"),
              children: [
                m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  testid: void 0,
                  theme: "biz-tools",
                  divider: !1,
                  secondaryChildren: s._(/*BTDS*/ "Reuse frequent messages"),
                  icon: m.jsx(o("WAWebBoltIcon.react").BoltIcon, {
                    iconXstyle: y.icon,
                  }),
                  active: !1,
                  onClick: function () {
                    return f(
                      o("WAWebBizToolsFlowSteps").BizToolsSteps.QuickReplies,
                    );
                  },
                  children: b,
                }),
                m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  testid: void 0,
                  theme: "biz-tools",
                  divider: !1,
                  secondaryChildren: Y,
                  icon: J,
                  active: !1,
                  onClick: function () {
                    return f(o("WAWebBizToolsFlowSteps").BizToolsSteps.Labels);
                  },
                  children: X,
                }),
              ],
            }),
            m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
              hideDivider: !0,
              children: [
                N === !0 &&
                  m.jsx(
                    r("WAWebBizBroadcastsBizToolsUploadDrawerButton.react"),
                    {},
                  ),
                m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  testid: void 0,
                  theme: "biz-tools",
                  divider: !1,
                  secondaryChildren: s._(/*BTDS*/ "Get help, contact us"),
                  icon: m.jsx(r("WDSIconIcHelp.react"), { iconXstyle: y.icon }),
                  active: !1,
                  onClick: h,
                  children: s._(/*BTDS*/ "Business help center"),
                }),
              ],
            }),
          ],
        })
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        m.jsx(r("WAWebBusinessBroadcastHomeFlow.react"), {
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
          onClose: function () {
            return o(
              "WAWebDrawerManager",
            ).DrawerManager.closeDrawerFullscreen();
          },
        }),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    l.default = k;
  },
  226,
);
