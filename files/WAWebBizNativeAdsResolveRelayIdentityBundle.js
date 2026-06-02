__d(
  "WAWebBizNativeAdsResolveRelayIdentityBundle",
  [
    "FBLogger",
    "JSResourceForInteraction",
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
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("WAWebBizAdCreationRoot.entrypoint").__setRef(
      "WAWebBizNativeAdsResolveRelayIdentityBundle",
    );
    async function s() {
      var e = await r("JSResourceForInteraction")("CometRelay")
        .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
        .load();
      return e.loadEntryPoint;
    }
    async function u() {
      var e = await r("JSResourceForInteraction")(
        "WAWebResolveAccountTypeAndAdPage",
      )
        .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
        .load();
      return {
        resolveAdsPage: e.resolveAdsPage,
        resolveIdentityForAccountType: e.resolveIdentityForAccountType,
      };
    }
    async function c() {
      var e = await r("JSResourceForInteraction")("CometRelay")
        .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
        .load();
      return e.loadQuery;
    }
    async function d() {
      var e = await r("JSResourceForInteraction")("WAWebWAAOnboarding")
        .__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle")
        .load();
      return e;
    }
    async function m(t) {
      var n = t.existingBundle,
        o = t.flowID,
        a = t.options,
        i = await Promise.all([u(), e.load(), s()]),
        l = i[0],
        c = l.resolveAdsPage,
        d = l.resolveIdentityForAccountType,
        m = i[1],
        p = i[2],
        _ = await d(n.accountType);
      if (_ == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "Failed to resolve identity for ad creation prep (account type: " +
            n.accountType +
            ")",
        );
      var f = await c(_, n.linkedPagesInfo),
        g = f.pageId,
        h = f.pageType,
        y = p(
          {
            getEnvironment: function () {
              return n.relayEnvironment;
            },
          },
          m,
          {
            ad_account_id: n.adAccountId,
            ad_account_type: n.accountType,
            boost_id: a == null ? void 0 : a.boostId,
            draft_id: a == null ? void 0 : a.draftId,
            flow_id: o,
            page_id: g,
          },
        );
      return babelHelpers.extends({}, n, {
        adCreationEntrypointReference: y,
        pageId: g,
        pageType: h,
      });
    }
    async function p(t, n, a, i, l) {
      try {
        var m, p, _, f, g;
        ((g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
          g.AdsManagementQplPoint.IDENTITY_RESOLUTION_START,
        ),
          g.adsManagementQplAddPoint(
            g.AdsManagementQplPoint.RESOLVE_IDENTITY_START,
          ));
        var h = await u(),
          y = h.resolveAdsPage,
          C = h.resolveIdentityForAccountType,
          b = l != null ? l : await C(t);
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
        o("WAWebBizNativeAdsQplHelpers").adsManagementQplAnnotateAccountType(t);
        var v;
        if (b.type === "WAA") {
          var g;
          (g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
            g.AdsManagementQplPoint.ONBOARD_WAA_START,
          );
          var S = await d();
          ((v = await S(n)),
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
        var R = await Promise.all([
            r("WAWebGetAdsRelayEnvironment")(b),
            a != null ? a : o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
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
        var k = t === "FB" && E.waPageId != null;
        if (k)
          try {
            var I = await o("WAWebFetchAdAccountToken").fetchToken();
            if (I.token != null) {
              var T = await r("WAWebGetAccountNonce")(I.token);
              await r("WAWebCreateWhatsAppAdsIdentity")(b, T);
            }
          } catch (e) {
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .warn(
                "Failed to ensure admin permissions on WA ads identity page",
              );
          }
        var D = null,
          x = null,
          $ = null;
        if (i === !0) {
          var P = await Promise.all([e.load(), s(), y(b, E)]),
            N = P[0],
            M = P[1],
            w = P[2];
          ((x = w.pageId),
            ($ = w.pageType),
            (D = M(
              {
                getEnvironment: function () {
                  return L;
                },
              },
              N,
              {
                ad_account_id: v,
                ad_account_type: t,
                boost_id: null,
                draft_id: null,
                flow_id: n,
                page_id: x,
              },
            )));
        }
        var A = {
          draftPageId:
            (m = (p = E.fbPageId) != null ? p : E.waPageId) != null ? m : "",
          pageId1:
            (_ = (f = E.fbPageId) != null ? f : E.waPageId) != null ? _ : "",
          pageId2: E.fbPageId != null && E.waPageId != null ? E.waPageId : null,
        };
        o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
          o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
            .PRELOAD_AD_MGMT_QUERY_START,
        );
        var F = await c(),
          O = F(
            L,
            r("WAWebBizAdManagementRootQuery$Parameters"),
            {
              after: null,
              draft_page_id: A.draftPageId,
              first: o("WAWebBizAdCreationConsts")
                .AD_MANAGEMENT_INITIAL_LOAD_COUNT,
              options: {},
              page_id_1: A.pageId1,
              page_id_2: A.pageId2,
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
            adAccountId: v,
            adCreationEntrypointReference: D,
            adManagementQueryRef: O,
            adManagementQueryVariables: A,
            hasLinkedFbPage: E.fbPageId != null,
            hasWeakToken:
              b.type === "WAA" &&
              b.tokenStrength ===
                o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK,
            linkedPagesInfo: E,
            pageId: x,
            pageType: $,
            relayEnvironment: L,
          }
        );
      } catch (e) {
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplFail(
          "identity_resolution_error",
        );
        var B = r("getErrorSafe")(e);
        if (
          (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(B)
            ? r("FBLogger")("wa_ctwa_web").warn(
                "Token invalid/expired during identity resolution for account type: " +
                  t,
              )
            : r("FBLogger")("wa_ctwa_web")
                .catching(B)
                .mustfix(
                  "Unexpected error during identity resolution for account type: " +
                    t,
                ),
          t === "FB")
        )
          return (
            o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(),
            null
          );
        throw e;
      }
    }
    ((l.prepareDeferredAdCreationEntrypoint = m),
      (l.resolveBizNativeAdsRelayIdentityBundle = p));
  },
  98,
);
