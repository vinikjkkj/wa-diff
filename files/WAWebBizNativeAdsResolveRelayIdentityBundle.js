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
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            try {
              var c, m, _, g, h;
              ((h = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                h.AdsManagementQplPoint.IDENTITY_RESOLUTION_START,
              ),
                h.adsManagementQplAddPoint(
                  h.AdsManagementQplPoint.RESOLVE_IDENTITY_START,
                ));
              var y = yield d(),
                C = y.resolveAdsPage,
                b = y.resolveIdentityForAccountType,
                v = yield b(t);
              if (
                (h.adsManagementQplAddPoint(
                  h.AdsManagementQplPoint.RESOLVE_IDENTITY_END,
                ),
                v == null)
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
              var S;
              if (v.type === "WAA") {
                var h;
                (h = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                  h.AdsManagementQplPoint.ONBOARD_WAA_START,
                );
                var R = yield f();
                ((S = yield R(a)),
                  h.adsManagementQplAddPoint(
                    h.AdsManagementQplPoint.ONBOARD_WAA_END,
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
              var L = yield (e || (e = n("Promise"))).all([
                  r("WAWebGetAdsRelayEnvironment")(v),
                  i != null
                    ? i
                    : o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
                ]),
                E = L[0],
                k = L[1];
              (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .GET_RELAY_ENV_END,
              ),
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                  o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                    .QUERY_LINKED_PAGES_END,
                ));
              var I = t === "FB" && k.waPageId != null;
              if (I)
                try {
                  var T = yield o("WAWebFetchAdAccountToken").fetchToken();
                  if (T.token != null) {
                    var D = yield r("WAWebGetAccountNonce")(T.token);
                    yield r("WAWebCreateWhatsAppAdsIdentity")(v, D);
                  }
                } catch (e) {
                  r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(e))
                    .warn(
                      "Failed to ensure admin permissions on WA ads identity page",
                    );
                }
              var x = null,
                $ = null,
                P = null;
              if (l === !0) {
                var N = yield (e || (e = n("Promise"))).all([
                    s.load(),
                    u(),
                    C(v, k),
                  ]),
                  M = N[0],
                  w = N[1],
                  A = N[2];
                (($ = A.pageId),
                  (P = A.pageType),
                  (x = w(
                    {
                      getEnvironment: function () {
                        return E;
                      },
                    },
                    M,
                    {
                      page_id: $,
                      flow_id: a,
                      ad_account_type: t,
                      ad_account_id: S,
                      boost_id: null,
                      draft_id: null,
                    },
                  )));
              }
              var F = {
                pageId1:
                  (c = (m = k.fbPageId) != null ? m : k.waPageId) != null
                    ? c
                    : "",
                pageId2:
                  k.fbPageId != null && k.waPageId != null ? k.waPageId : null,
                draftPageId:
                  (_ = (g = k.fbPageId) != null ? g : k.waPageId) != null
                    ? _
                    : "",
              };
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .PRELOAD_AD_MGMT_QUERY_START,
              );
              var O = yield p(),
                B = O(
                  E,
                  r("WAWebBizAdManagementRootQuery$Parameters"),
                  {
                    page_id_1: F.pageId1,
                    page_id_2: F.pageId2,
                    draft_page_id: F.draftPageId,
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
                  relayEnvironment: E,
                  adCreationEntrypointReference: x,
                  adManagementQueryVariables: F,
                  adManagementQueryRef: B,
                  accountType: t,
                  hasLinkedFbPage: k.fbPageId != null,
                  linkedPagesInfo: k,
                  pageId: $,
                  pageType: P,
                  hasWeakToken:
                    v.type === "WAA" &&
                    v.tokenStrength ===
                      o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum
                        .WEAK,
                  adAccountId: S,
                }
              );
            } catch (e) {
              o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplFail(
                "identity_resolution_error",
              );
              var W = r("getErrorSafe")(e);
              if (
                (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(W)
                  ? r("FBLogger")("wa_ctwa_web").warn(
                      "Token invalid/expired during identity resolution for account type: " +
                        t,
                    )
                  : r("FBLogger")("wa_ctwa_web")
                      .catching(W)
                      .mustfix(
                        "Unexpected error during identity resolution for account type: " +
                          t,
                      ),
                t === "FB")
              )
                return (o("WAWebUserPrefsCTWA").clearFBIdentity(), null);
              throw e;
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    ((l.prepareDeferredAdCreationEntrypoint = h),
      (l.resolveBizNativeAdsRelayIdentityBundle = C));
  },
  98,
);
