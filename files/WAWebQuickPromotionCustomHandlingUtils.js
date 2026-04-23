__d(
  "WAWebQuickPromotionCustomHandlingUtils",
  [
    "WAWebActiveAccountInfoContext.react",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebBannerEventWamEvent",
    "WAWebBizNativeAdsEntryPointUtils",
    "WAWebBizNativeAdsWamLogger",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCTWAConstants",
    "WAWebExecApiCmd",
    "WAWebExternalLink.react",
    "WAWebWamEnumBannerOperations",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    function s(e) {
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
    function u(e) {
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
    function c(e) {
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
                  f(
                    n,
                    i.data.campaignId,
                    o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
                  ));
              },
              onImpression: function () {
                f(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN,
                );
              },
              onDismiss: function () {
                f(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS,
                );
              },
            };
        }
      }
    }
    function d(e) {
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
                  f(
                    n,
                    i.data.campaignId,
                    o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
                  ));
              },
              onImpression: function () {
                f(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN,
                );
              },
              onDismiss: function () {
                f(
                  n,
                  i.data.campaignId,
                  o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS,
                );
              },
            };
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
    function p(e) {
      var t,
        n = e.surfaceId;
      if (n === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
        var a = (t = e.data.primaryAction) == null ? void 0 : t.deepLink;
        if (a != null) {
          var i = o("WAWebApiParse").parseAPICmd(a);
          if (i.resultType === "BIZ_BROADCAST_HOME")
            return {
              type: "bizBroadcastHome",
              onPrimaryClick: function () {
                r("WAWebExecApiCmd")({ cmdData: i, isExternal: !1 });
              },
              onImpression: function () {
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.qpBannerViewed();
              },
              onDismiss: function () {
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.qpBannerDismissed();
              },
            };
        }
      }
    }
    function _(t) {
      var n = [],
        r = e(t);
      r && n.push(r);
      var o = s(t);
      o && n.push(o);
      var a = u(t);
      a && n.push(a);
      var i = c(t);
      i && n.push(i);
      var l = d(t);
      l && n.push(l);
      var _ = m(t);
      _ && n.push(_);
      var f = p(t);
      return (f && n.push(f), n);
    }
    function f(e, t, n) {
      new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
        bannerType: o(
          "WAWebBizNativeAdsEntryPointUtils",
        ).getBannerTypeFromSurfaceId(e),
        bannerOperation: n,
        bannerId: t,
      }).commit();
    }
    function g(e, t) {
      var n = _(e);
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
    l.maybeExecuteQuickPromotionCustomHandlingSpec = g;
  },
  98,
);
