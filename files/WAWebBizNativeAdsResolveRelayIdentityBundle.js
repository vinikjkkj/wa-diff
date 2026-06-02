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
              var m, _, g, h, y;
              ((y = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                y.AdsManagementQplPoint.IDENTITY_RESOLUTION_START,
              ),
                y.adsManagementQplAddPoint(
                  y.AdsManagementQplPoint.RESOLVE_IDENTITY_START,
                ));
              var C = yield d(),
                b = C.resolveAdsPage,
                v = C.resolveIdentityForAccountType,
                S = c != null ? c : yield v(t);
              if (
                (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                  o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                    .RESOLVE_IDENTITY_END,
                ),
                S == null)
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
              var R;
              if (S.type === "WAA") {
                var y;
                (y = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                  y.AdsManagementQplPoint.ONBOARD_WAA_START,
                );
                var L = yield f();
                ((R = yield L(a)),
                  y.adsManagementQplAddPoint(
                    y.AdsManagementQplPoint.ONBOARD_WAA_END,
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
              var E = yield (e || (e = n("Promise"))).all([
                  r("WAWebGetAdsRelayEnvironment")(S),
                  i != null
                    ? i
                    : o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
                ]),
                k = E[0],
                I = E[1];
              (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .GET_RELAY_ENV_END,
              ),
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                  o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                    .QUERY_LINKED_PAGES_END,
                ));
              var T = t === "FB" && I.waPageId != null;
              if (T)
                try {
                  var D = yield o("WAWebFetchAdAccountToken").fetchToken();
                  if (D.token != null) {
                    var x = yield r("WAWebGetAccountNonce")(D.token);
                    yield r("WAWebCreateWhatsAppAdsIdentity")(S, x);
                  }
                } catch (e) {
                  r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(e))
                    .warn(
                      "Failed to ensure admin permissions on WA ads identity page",
                    );
                }
              var $ = null,
                P = null,
                N = null;
              if (l === !0) {
                var M = yield (e || (e = n("Promise"))).all([
                    s.load(),
                    u(),
                    b(S, I),
                  ]),
                  w = M[0],
                  A = M[1],
                  F = M[2];
                ((P = F.pageId),
                  (N = F.pageType),
                  ($ = A(
                    {
                      getEnvironment: function () {
                        return k;
                      },
                    },
                    w,
                    {
                      ad_account_id: R,
                      ad_account_type: t,
                      boost_id: null,
                      draft_id: null,
                      flow_id: a,
                      page_id: P,
                    },
                  )));
              }
              var O = {
                draftPageId:
                  (m = (_ = I.fbPageId) != null ? _ : I.waPageId) != null
                    ? m
                    : "",
                pageId1:
                  (g = (h = I.fbPageId) != null ? h : I.waPageId) != null
                    ? g
                    : "",
                pageId2:
                  I.fbPageId != null && I.waPageId != null ? I.waPageId : null,
              };
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .PRELOAD_AD_MGMT_QUERY_START,
              );
              var B = yield p(),
                W = B(
                  k,
                  r("WAWebBizAdManagementRootQuery$Parameters"),
                  {
                    after: null,
                    draft_page_id: O.draftPageId,
                    first: o("WAWebBizAdCreationConsts")
                      .AD_MANAGEMENT_INITIAL_LOAD_COUNT,
                    options: {},
                    page_id_1: O.pageId1,
                    page_id_2: O.pageId2,
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
                  adAccountId: R,
                  adCreationEntrypointReference: $,
                  adManagementQueryRef: W,
                  adManagementQueryVariables: O,
                  hasLinkedFbPage: I.fbPageId != null,
                  hasWeakToken:
                    S.type === "WAA" &&
                    S.tokenStrength ===
                      o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum
                        .WEAK,
                  linkedPagesInfo: I,
                  pageId: P,
                  pageType: N,
                  relayEnvironment: k,
                }
              );
            } catch (e) {
              o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplFail(
                "identity_resolution_error",
              );
              var q = r("getErrorSafe")(e);
              if (
                (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(q)
                  ? r("FBLogger")("wa_ctwa_web").warn(
                      "Token invalid/expired during identity resolution for account type: " +
                        t,
                    )
                  : r("FBLogger")("wa_ctwa_web")
                      .catching(q)
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
    ((l.prepareDeferredAdCreationEntrypoint = h),
      (l.resolveBizNativeAdsRelayIdentityBundle = C));
  },
  98,
);
