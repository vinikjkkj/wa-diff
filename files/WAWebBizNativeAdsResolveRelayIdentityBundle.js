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
            var l, c, m, _, g;
            ((g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
              g.AdsManagementQplPoint.IDENTITY_RESOLUTION_START,
            ),
              g.adsManagementQplAddPoint(
                g.AdsManagementQplPoint.RESOLVE_IDENTITY_START,
              ));
            var h = yield d(),
              y = h.resolveAdsPage,
              C = h.resolveIdentityForAccountType,
              b = yield C(t);
            if (
              (g.adsManagementQplAddPoint(
                g.AdsManagementQplPoint.RESOLVE_IDENTITY_END,
              ),
              b == null)
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
            var v;
            if (b.type === "WAA") {
              var g;
              (g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                g.AdsManagementQplPoint.ONBOARD_WAA_START,
              );
              var S = yield f();
              ((v = yield S(a)),
                g.adsManagementQplAddPoint(
                  g.AdsManagementQplPoint.ONBOARD_WAA_END,
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
            var R = yield (e || (e = n("Promise"))).all([
                r("WAWebGetAdsRelayEnvironment")(b),
                i != null
                  ? i
                  : o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
              ]),
              L = R[0],
              E = R[1];
            (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .GET_RELAY_ENV_END,
            ),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .QUERY_LINKED_PAGES_END,
              ));
            var k = r("justknobx")._("580"),
              I = t === "FB" && E.waPageId != null;
            if (k && I)
              try {
                var T = yield o("WAWebFetchAdAccountToken").fetchToken();
                if (T.token != null) {
                  var D = yield r("WAWebGetAccountNonce")(T.token);
                  yield r("WAWebCreateWhatsAppAdsIdentity")(b, D);
                }
              } catch (e) {
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .warn(
                    "Failed to ensure admin permissions on WA ads identity page",
                  );
              }
            var x = r("justknobx")._("1263"),
              $ = null,
              P = null,
              N = null;
            if (!x) {
              var M = r("justknobx")._("5175");
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .RESOLVE_ADS_PAGE_START,
              );
              var w = yield y(b, M ? E : void 0);
              (($ = w.pageId),
                (P = w.pageType),
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                  o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                    .RESOLVE_ADS_PAGE_END,
                ),
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                  o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                    .LOAD_ENTRYPOINT_START,
                ));
              var A = yield (e || (e = n("Promise"))).all([s.load(), u()]),
                F = A[0],
                O = A[1];
              (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .LOAD_ENTRYPOINT_END,
              ),
                (N = O(
                  {
                    getEnvironment: function () {
                      return L;
                    },
                  },
                  F,
                  {
                    page_id: $,
                    flow_id: a,
                    ad_account_type: t,
                    ad_account_id: v,
                  },
                )));
            }
            var B = {
                pageId1:
                  (l = (c = E.fbPageId) != null ? c : E.waPageId) != null
                    ? l
                    : "",
                pageId2:
                  E.fbPageId != null && E.waPageId != null ? E.waPageId : null,
                draftPageId:
                  (m =
                    (_ = $ != null ? $ : E.fbPageId) != null
                      ? _
                      : E.waPageId) != null
                    ? m
                    : "",
              },
              W = null;
            if (r("justknobx")._("2130")) {
              var g;
              (g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                g.AdsManagementQplPoint.PRELOAD_AD_MGMT_QUERY_START,
              );
              var q = yield p();
              ((W = q(
                L,
                r("WAWebBizAdManagementRootQuery$Parameters"),
                {
                  page_id_1: B.pageId1,
                  page_id_2: B.pageId2,
                  draft_page_id: B.draftPageId,
                  options: {},
                  first: o("WAWebBizAdCreationConsts")
                    .AD_MANAGEMENT_INITIAL_LOAD_COUNT,
                  after: null,
                },
                { fetchPolicy: "network-only" },
              )),
                g.adsManagementQplAddPoint(
                  g.AdsManagementQplPoint.PRELOAD_AD_MGMT_QUERY_END,
                ));
            }
            return (
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .IDENTITY_RESOLUTION_END,
              ),
              o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(t),
              {
                relayEnvironment: L,
                adCreationEntrypointReference: N,
                adManagementQueryVariables: B,
                adManagementQueryRef: W,
                accountType: t,
                hasLinkedFbPage: E.fbPageId != null,
                linkedPagesInfo: E,
                pageId: $,
                pageType: P,
                hasWeakToken:
                  b.type === "WAA" &&
                  b.tokenStrength ===
                    o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK,
                adAccountId: v,
              }
            );
          } catch (e) {
            o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplFail(
              "identity_resolution_error",
            );
            var U = r("getErrorSafe")(e);
            if (
              (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(U)
                ? r("FBLogger")("wa_ctwa_web").warn(
                    "Token invalid/expired during identity resolution for account type: " +
                      t,
                  )
                : r("FBLogger")("wa_ctwa_web")
                    .catching(U)
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
