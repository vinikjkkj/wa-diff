__d(
  "WAWebBizNativeAdsResolveRelayIdentityBundle",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationConsts",
    "WAWebBizAdManagementRootQuery$Parameters",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebCommonAdsTypes",
    "WAWebFetchAdAccountToken",
    "WAWebGetAdsRelayEnvironment",
    "WAWebLinkedAccountsJob",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebBizAdCreationRoot.entrypoint").__setRef(
        "WAWebBizNativeAdsResolveRelayIdentityBundle",
      );
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("CometRelay")
            .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
            .load();
          return e.loadEntryPoint;
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebResolveAccountTypeAndAdPage",
          )
            .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
            .load();
          return {
            resolveIdentityForAccountType: e.resolveIdentityForAccountType,
            resolveAdsPage: e.resolveAdsPage,
          };
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("CometRelay")
            .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
            .load();
          return e.loadQuery;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebWAAOnboarding")
            .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
            .load();
          return e;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          try {
            var l, c, m;
            ((m = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
              m.AdsManagementQplPoint.IDENTITY_RESOLUTION_START,
            ),
              m.adsManagementQplAddPoint(
                m.AdsManagementQplPoint.RESOLVE_IDENTITY_START,
              ));
            var _ = yield d(),
              g = _.resolveAdsPage,
              h = _.resolveIdentityForAccountType,
              y = yield h(t);
            if (
              (m.adsManagementQplAddPoint(
                m.AdsManagementQplPoint.RESOLVE_IDENTITY_END,
              ),
              y == null)
            ) {
              if (t === "WAA") throw r("err")("Failed to get WA access token");
              return null;
            }
            o(
              "WAWebBizNativeAdsQplHelpers",
            ).adsManagementQplAnnotateAccountType(t);
            var C;
            if (y.type === "WAA") {
              var m;
              (m = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                m.AdsManagementQplPoint.ONBOARD_WAA_START,
              );
              var b = yield f();
              ((C = yield b(a)),
                m.adsManagementQplAddPoint(
                  m.AdsManagementQplPoint.ONBOARD_WAA_END,
                ));
            }
            (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .GET_RELAY_ENV_START,
            ),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .QUERY_LINKED_PAGES_START,
              ));
            var v = yield (e || (e = n("Promise"))).all([
                r("WAWebGetAdsRelayEnvironment")(y),
                i != null
                  ? i
                  : o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
              ]),
              S = v[0],
              R = v[1];
            (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .GET_RELAY_ENV_END,
            ),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .QUERY_LINKED_PAGES_END,
              ));
            var L = r("justknobx")._("5175");
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .RESOLVE_ADS_PAGE_START,
            );
            var E = yield g(y, L ? R : void 0);
            (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .RESOLVE_ADS_PAGE_END,
            ),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .LOAD_ENTRYPOINT_START,
              ));
            var k = yield e.all([s.load(), u()]),
              I = k[0],
              T = k[1];
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .LOAD_ENTRYPOINT_END,
            );
            var D = T(
                {
                  getEnvironment: function () {
                    return S;
                  },
                },
                I,
                {
                  page_id: E,
                  flow_id: a,
                  ad_account_type: t,
                  ad_account_id: C,
                },
              ),
              x = {
                pageId1:
                  (l = (c = R.fbPageId) != null ? c : R.waPageId) != null
                    ? l
                    : "",
                pageId2:
                  R.fbPageId != null && R.waPageId != null ? R.waPageId : null,
              },
              $ = null;
            if (r("justknobx")._("2130")) {
              var m;
              (m = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                m.AdsManagementQplPoint.PRELOAD_AD_MGMT_QUERY_START,
              );
              var P = yield p();
              (($ = P(
                S,
                r("WAWebBizAdManagementRootQuery$Parameters"),
                {
                  page_id_1: x.pageId1,
                  page_id_2: x.pageId2,
                  options: {},
                  first: o("WAWebBizAdCreationConsts")
                    .AD_MANAGEMENT_INITIAL_LOAD_COUNT,
                  after: null,
                },
                { fetchPolicy: "network-only" },
              )),
                m.adsManagementQplAddPoint(
                  m.AdsManagementQplPoint.PRELOAD_AD_MGMT_QUERY_END,
                ));
            }
            return (
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .IDENTITY_RESOLUTION_END,
              ),
              o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(t),
              {
                relayEnvironment: S,
                adCreationEntrypointReference: D,
                adManagementQueryVariables: x,
                adManagementQueryRef: $,
                accountType: t,
                hasLinkedFbPage: R.fbPageId != null,
                linkedPagesInfo: R,
                pageId: E,
                hasWeakToken:
                  y.type === "WAA" &&
                  y.tokenStrength ===
                    o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK,
                adAccountId: C,
              }
            );
          } catch (e) {
            o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplFail(
              "identity_resolution_error",
            );
            var N = r("getErrorSafe")(e);
            if (
              (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(N)
                ? r("FBLogger")("wa_ctwa_web").warn(
                    "Token invalid/expired during identity resolution for account type: " +
                      t,
                  )
                : r("FBLogger")("wa_ctwa_web")
                    .catching(N)
                    .mustfix(
                      "Unexpected error during identity resolution for account type: " +
                        t,
                    ),
              t === "FB")
            )
              return (o("WAWebUserPrefsCTWA").clearFBIdentity(), null);
            throw e;
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.resolveBizNativeAdsRelayIdentityBundle = h;
  },
  98,
);
