__d(
  "WAWebQuickPromotionCustomHandlingUtils",
  [
    "WALogger",
    "WAWebActiveAccountInfoContext.react",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebBannerEventWamEvent",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizNativeAdsEntryPointUtils",
    "WAWebBizNativeAdsWamLogger",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCTWAConstants",
    "WAWebDrawerManager",
    "WAWebExecApiCmd",
    "WAWebExternalLink.react",
    "WAWebKeyboardTabUtils",
    "WAWebMobilePlatforms",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t,
        n,
        r = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
      if (r != null && r.startsWith("https://"))
        return {
          type: "universalLink",
          onPrimaryClick: function () {
            o("WAWebExternalLink.react").openExternalLink(r);
          },
        };
      if (r == null) {
        var a = (n = e.data.primaryAction) == null ? void 0 : n.universalLink;
        if (a != null)
          return {
            type: "universalLink",
            onPrimaryClick: function () {
              o("WAWebExternalLink.react").openExternalLink(a);
            },
          };
      }
    }
    function d(e) {
      var t,
        n = e.surfaceId;
      if (
        !(
          n !== o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP &&
          n !== o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD
        )
      ) {
        var a = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
        if (a != null) {
          var i = o("WAWebApiParse").parseAPICmd(a);
          if (i.resultType === "ADVERTISE") {
            var l = function (t) {
              new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                bannerType: o(
                  "WAWebBizNativeAdsEntryPointUtils",
                ).getBannerTypeFromSurfaceId(n),
                bannerOperation: t,
                bannerId: i.data.campaignId,
              }).commit();
            };
            return {
              type: "adCreateBanner",
              onPrimaryClick: function () {
                (i.resultType,
                  r("WAWebExecApiCmd")({ cmdData: i, isExternal: !1 }),
                  l(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK));
              },
              onImpression: function () {
                var e = o(
                  "WAWebActiveAccountInfoContext.react",
                ).getActiveAccountInfo();
                (e != null &&
                  o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(
                    o(
                      "WAWebBizNativeAdsEntryPointUtils",
                    ).getLwiEntryPointFromSurfaceId(n),
                    e !== "not-linked" && e.hasFacebookPage,
                  ),
                  l(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN));
              },
              onDismiss: function () {
                l(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS);
              },
            };
          }
        }
      }
    }
    function m(e) {
      var t,
        n = e.surfaceId;
      if (n === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
        var a = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
        if (a != null) {
          var i = o("WAWebApiParse").parseAPICmd(a);
          if ((i.resultType, i.resultType === "MANAGE_ADS"))
            return {
              type: "manageAdsBanner",
              onPrimaryClick: function () {
                r("WAWebExecApiCmd")({ cmdData: i, isExternal: !1 });
              },
            };
        }
      }
    }
    function p(e) {
      var t,
        n = e.surfaceId;
      if (n === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
        var a = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
        if (a != null) {
          var i = o("WAWebApiParse").parseAPICmd(a);
          if ((i.resultType, i.resultType === "OPEN_CATALOG"))
            return {
              type: "openCatalogBanner",
              onPrimaryClick: function () {
                (r("WAWebExecApiCmd")({ cmdData: i, isExternal: !1 }),
                  b(
                    n,
                    i.data.campaignId,
                    o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
                  ));
              },
              onImpression: function () {
                b(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN,
                );
              },
              onDismiss: function () {
                b(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS,
                );
              },
            };
        }
      }
    }
    function _(e) {
      var t,
        n = e.surfaceId;
      if (n === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
        var a = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
        if (a != null) {
          var i = o("WAWebApiParse").parseAPICmd(a);
          if (i.resultType === "BRAZIL_PAYMENTS")
            return {
              type: "paymentsBanner",
              onPrimaryClick: function () {
                (i.data.subType ===
                o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING
                  ? r("WAWebExecApiCmd")({ cmdData: i, isExternal: !1 })
                  : o("WAWebExternalLink.react").openExternalLink(a),
                  b(
                    n,
                    i.data.campaignId,
                    o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
                  ));
              },
              onImpression: function () {
                b(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN,
                );
              },
              onDismiss: function () {
                b(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS,
                );
              },
            };
        }
      }
    }
    function f(e) {
      var t,
        n = e.surfaceId;
      if (n === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
        var a = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
        if (a != null) {
          var i = o("WAWebApiParse").parseAPICmd(a);
          if (i.resultType === "BIZ_BROADCAST_AUDIENCE_MODAL")
            return {
              type: "bizBroadcastAudienceModal",
              onPrimaryClick: function () {
                r("WAWebExecApiCmd")({ cmdData: i, isExternal: !1 });
              },
            };
        }
      }
    }
    function g(e) {
      var t,
        n = e.surfaceId;
      if (
        !(
          n !== o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP &&
          n !== o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME
        )
      ) {
        var a = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
        if (a != null) {
          var i = o("WAWebApiParse").parseAPICmd(a);
          if (i.resultType === "BIZ_BROADCAST_HOME")
            return {
              type: "bizBroadcastHome",
              onPrimaryClick: function () {
                (r("WAWebExecApiCmd")({ cmdData: i, isExternal: !1 }),
                  n === o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME &&
                    b(
                      n,
                      e.id,
                      o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
                    ));
              },
              onImpression: function () {
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.qpBannerViewed(),
                  n === o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME &&
                    b(
                      n,
                      e.id,
                      o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN,
                    ));
              },
              onDismiss: function () {
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.qpBannerDismissed(),
                  n === o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME &&
                    b(
                      n,
                      e.id,
                      o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
                        .DISMISS,
                    ));
              },
            };
        }
      }
    }
    var h = /^whatsapp-smb:\/\/biz-broadcast-create\/?(?:\?.*)?$/i;
    function y(t) {
      var n;
      if (
        o("WAWebMobilePlatforms").isSMB() &&
        o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).isBizBroadcastEnabledAndDeviceSupported(!1)
      ) {
        var r = t.surfaceId;
        if (r === o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD) {
          var a = (n = t.data.primaryAction) == null ? void 0 : n.deepLink;
          if (!(a == null || !a.match(h))) {
            var i = new URL(a),
              l = i.searchParams.get("source");
            return (
              l == null &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[QP] biz-broadcast-create: missing source ",
                        "",
                      ])),
                    a,
                  )
                  .sendLogs("qp-biz-broadcast-create-missing-source"),
              {
                type: "bizBroadcastCreate",
                onPrimaryClick: function () {
                  (l != null &&
                    o(
                      "WAWebSMBUserJourneyLogger",
                    ).SMBUserJourneyLogger.setEntryPointDetails(
                      l,
                      o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
                        .BUSINESS_BROADCAST,
                    ),
                    o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                      u.jsx(
                        o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                          .WAWebBizBroadcastNewBroadcastFlowLoadable,
                        {
                          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                            .BUSINESS_TOOLS,
                          onBack: function () {
                            return o(
                              "WAWebDrawerManager",
                            ).DrawerManager.closeDrawerFullscreen();
                          },
                        },
                      ),
                      {
                        focusType: o("WAWebKeyboardTabUtils").FocusType
                          .TABBABLE,
                      },
                    ));
                },
              }
            );
          }
        }
      }
    }
    function C(e) {
      var t = [],
        n = c(e);
      n && t.push(n);
      var r = d(e);
      r && t.push(r);
      var o = m(e);
      o && t.push(o);
      var a = p(e);
      a && t.push(a);
      var i = _(e);
      i && t.push(i);
      var l = f(e);
      l && t.push(l);
      var s = g(e);
      s && t.push(s);
      var u = y(e);
      return (u && t.push(u), t);
    }
    function b(e, t, n) {
      new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
        bannerType: o(
          "WAWebBizNativeAdsEntryPointUtils",
        ).getBannerTypeFromSurfaceId(e),
        bannerOperation: n,
        bannerId: t,
      }).commit();
    }
    function v(e, t) {
      var n = C(e);
      n.forEach(function (e) {
        switch (t) {
          case "primaryActionClick":
            e.onPrimaryClick != null && e.onPrimaryClick();
            break;
          case "dismiss":
            e.onDismiss != null && e.onDismiss();
            break;
          default:
            e.onImpression != null && e.onImpression();
        }
      });
    }
    l.maybeExecuteQuickPromotionCustomHandlingSpec = v;
  },
  98,
);
