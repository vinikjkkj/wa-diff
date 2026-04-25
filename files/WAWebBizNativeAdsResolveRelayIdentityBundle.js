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
    "WAWebCreateWhatsAppAdsIdentity",
    "WAWebFetchAdAccountToken",
    "WAWebGetAccountNonce",
    "WAWebGetAdsRelayEnvironment",
    "WAWebLinkedAccountsJob",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o, a) {
          var i = yield (e || (e = n("Promise"))).all([d(), s.load(), u()]),
            l = i[0],
            c = l.resolveAdsPage,
            m = l.resolveIdentityForAccountType,
            p = i[1],
            _ = i[2],
            f = yield m(t.accountType);
          if (f == null)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "Failed to resolve identity for ad creation prep (account type: " +
                t.accountType +
                ")",
            );
          var g = yield c(f, t.linkedPagesInfo),
            h = g.pageId,
            y = g.pageType,
            C = _(
              {
                getEnvironment: function () {
                  return t.relayEnvironment;
                },
              },
              p,
              {
                page_id: h,
                flow_id: o,
                ad_account_type: t.accountType,
                ad_account_id: t.adAccountId,
                boost_id: a == null ? void 0 : a.boostId,
                draft_id: a == null ? void 0 : a.draftId,
              },
            );
          return babelHelpers.extends({}, t, {
            adCreationEntrypointReference: C,
            pageId: h,
            pageType: y,
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          try {
            var l, s, u, c, m;
            ((m = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
              m.AdsManagementQplPoint.IDENTITY_RESOLUTION_START,
            ),
              m.adsManagementQplAddPoint(
                m.AdsManagementQplPoint.RESOLVE_IDENTITY_START,
              ));
            var _ = yield d(),
              g = _.resolveIdentityForAccountType,
              h = yield g(t);
            if (
              (m.adsManagementQplAddPoint(
                m.AdsManagementQplPoint.RESOLVE_IDENTITY_END,
              ),
              h == null)
            ) {
              if (t === "WAA")
                throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
                  "Failed to get WA access token",
                );
              return null;
            }
            o(
              "WAWebBizNativeAdsQplHelpers",
            ).adsManagementQplAnnotateAccountType(t);
            var y;
            if (h.type === "WAA") {
              var m;
              (m = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                m.AdsManagementQplPoint.ONBOARD_WAA_START,
              );
              var C = yield f();
              ((y = yield C(a)),
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
            var b = yield (e || (e = n("Promise"))).all([
                r("WAWebGetAdsRelayEnvironment")(h),
                i != null
                  ? i
                  : o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
              ]),
              v = b[0],
              S = b[1];
            (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .GET_RELAY_ENV_END,
            ),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .QUERY_LINKED_PAGES_END,
              ));
            var R = t === "FB" && S.waPageId != null;
            if (R)
              try {
                var L = yield o("WAWebFetchAdAccountToken").fetchToken();
                if (L.token != null) {
                  var E = yield r("WAWebGetAccountNonce")(L.token);
                  yield r("WAWebCreateWhatsAppAdsIdentity")(h, E);
                }
              } catch (e) {
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .warn(
                    "Failed to ensure admin permissions on WA ads identity page",
                  );
              }
            var k = null,
              I = {
                pageId1:
                  (l = (s = S.fbPageId) != null ? s : S.waPageId) != null
                    ? l
                    : "",
                pageId2:
                  S.fbPageId != null && S.waPageId != null ? S.waPageId : null,
                draftPageId:
                  (u = (c = S.fbPageId) != null ? c : S.waPageId) != null
                    ? u
                    : "",
              };
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .PRELOAD_AD_MGMT_QUERY_START,
            );
            var T = yield p(),
              D = T(
                v,
                r("WAWebBizAdManagementRootQuery$Parameters"),
                {
                  page_id_1: I.pageId1,
                  page_id_2: I.pageId2,
                  draft_page_id: I.draftPageId,
                  options: {},
                  first: o("WAWebBizAdCreationConsts")
                    .AD_MANAGEMENT_INITIAL_LOAD_COUNT,
                  after: null,
                },
                { fetchPolicy: "network-only" },
              );
            return (
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .PRELOAD_AD_MGMT_QUERY_END,
              ),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .IDENTITY_RESOLUTION_END,
              ),
              o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(t),
              {
                relayEnvironment: v,
                adCreationEntrypointReference: k,
                adManagementQueryVariables: I,
                adManagementQueryRef: D,
                accountType: t,
                hasLinkedFbPage: S.fbPageId != null,
                linkedPagesInfo: S,
                pageId: null,
                pageType: null,
                hasWeakToken:
                  h.type === "WAA" &&
                  h.tokenStrength ===
                    o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK,
                adAccountId: y,
              }
            );
          } catch (e) {
            o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplFail(
              "identity_resolution_error",
            );
            var x = r("getErrorSafe")(e);
            if (
              (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(x)
                ? r("FBLogger")("wa_ctwa_web").warn(
                    "Token invalid/expired during identity resolution for account type: " +
                      t,
                  )
                : r("FBLogger")("wa_ctwa_web")
                    .catching(x)
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
        b.apply(this, arguments)
      );
    }
    ((l.prepareDeferredAdCreationEntrypoint = h),
      (l.resolveBizNativeAdsRelayIdentityBundle = C));
  },
  98,
);
