__d(
  "WAWebBizNativeAdsResolveRelayIdentityBundle",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationConsts",
    "WAWebBizAdManagementRootQuery$Parameters",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsStoredFBIdentityStore",
    "WAWebCommonAdsTypes",
    "WAWebCreateWhatsAppAdsIdentity",
    "WAWebFetchAdAccountToken",
    "WAWebGetAccountNonce",
    "WAWebGetAdsRelayEnvironment",
    "WAWebLinkedAccountsJob",
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
            resolveAdsPage: e.resolveAdsPage,
            resolveIdentityForAccountType: e.resolveIdentityForAccountType,
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var o = t.existingBundle,
            a = t.flowID,
            i = t.options,
            l = yield (e || (e = n("Promise"))).all([d(), s.load(), u()]),
            c = l[0],
            m = c.resolveAdsPage,
            p = c.resolveIdentityForAccountType,
            _ = l[1],
            f = l[2],
            g = yield p(o.accountType);
          if (g == null)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "Failed to resolve identity for ad creation prep (account type: " +
                o.accountType +
                ")",
            );
          var h = yield m(g, o.linkedPagesInfo),
            y = h.pageId,
            C = h.pageType,
            b = f(
              {
                getEnvironment: function () {
                  return o.relayEnvironment;
                },
              },
              _,
              {
                ad_account_id: o.adAccountId,
                ad_account_type: o.accountType,
                boost_id: i == null ? void 0 : i.boostId,
                draft_id: i == null ? void 0 : i.draftId,
                flow_id: a,
                page_id: y,
              },
            );
          return babelHelpers.extends({}, o, {
            adCreationEntrypointReference: b,
            pageId: y,
            pageType: C,
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, c) {
            try {
              var m, _, g;
              ((g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                g.AdsManagementQplPoint.IDENTITY_RESOLUTION_START,
              ),
                g.adsManagementQplAddPoint(
                  g.AdsManagementQplPoint.RESOLVE_IDENTITY_START,
                ));
              var h = yield d(),
                y = h.resolveAdsPage,
                C = h.resolveIdentityForAccountType,
                b = c != null ? c : yield C(t);
              if (
                (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                  o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                    .RESOLVE_IDENTITY_END,
                ),
                b == null)
              ) {
                if (t === "WAA")
                  throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
                    "Failed to get WA access token",
                  );
                return (
                  r("FBLogger")("wa_ctwa_web").warn(
                    "resolveIdentityForAccountType returned null for non-WAA account type",
                  ),
                  null
                );
              }
              o(
                "WAWebBizNativeAdsQplHelpers",
              ).adsManagementQplAnnotateAccountType(t);
              var S;
              if (b.type === "WAA") {
                var g;
                (g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                  g.AdsManagementQplPoint.ONBOARD_WAA_START,
                );
                var R = yield f();
                ((S = yield R(a)),
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
              var L = yield (e || (e = n("Promise"))).all([
                  r("WAWebGetAdsRelayEnvironment")(b),
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
                    yield r("WAWebCreateWhatsAppAdsIdentity")(b, D);
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
                    y(b, k),
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
                      ad_account_id: S,
                      ad_account_type: t,
                      boost_id: null,
                      draft_id: null,
                      flow_id: a,
                      page_id: $,
                    },
                  )));
              }
              var F = {
                draftPageId: v(t, k),
                pageId1:
                  (m = (_ = k.fbPageId) != null ? _ : k.waPageId) != null
                    ? m
                    : "",
                pageId2:
                  k.fbPageId != null && k.waPageId != null ? k.waPageId : null,
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
                    after: null,
                    draft_page_id: F.draftPageId,
                    first: o("WAWebBizAdCreationConsts")
                      .AD_MANAGEMENT_INITIAL_LOAD_COUNT,
                    options: {},
                    page_id_1: F.pageId1,
                    page_id_2: F.pageId2,
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
                  accountType: t,
                  adAccountId: S,
                  adCreationEntrypointReference: x,
                  adManagementQueryRef: B,
                  adManagementQueryVariables: F,
                  hasLinkedFbPage: k.fbPageId != null,
                  hasWeakToken:
                    b.type === "WAA" &&
                    b.tokenStrength ===
                      o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum
                        .WEAK,
                  linkedPagesInfo: k,
                  pageId: $,
                  pageType: P,
                  relayEnvironment: E,
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
                return (
                  o(
                    "WAWebBizNativeAdsStoredFBIdentityStore",
                  ).clearStoredFBIdentity(),
                  null
                );
              throw e;
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n,
        o,
        a,
        i,
        l = e === "WAA" && r("justknobx")._("3154");
      return l
        ? (n = (o = t.waPageId) != null ? o : t.fbPageId) != null
          ? n
          : ""
        : (a = (i = t.fbPageId) != null ? i : t.waPageId) != null
          ? a
          : "";
    }
    ((l.prepareDeferredAdCreationEntrypoint = h),
      (l.resolveBizNativeAdsRelayIdentityBundle = C),
      (l.resolveDraftPageId = v));
  },
  98,
);
