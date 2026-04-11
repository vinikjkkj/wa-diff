__d(
  "WAWebFetchNativeAdsMvpEligibility",
  [
    "FBLogger",
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebFetchAdAccountToken",
    "WAWebFetchNativeAdsMvpEligibilityQuery.graphql",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRelayClient",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsMeUser",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebFetchNativeAdsMvpEligibilityQuery.graphql")),
      d = { type: "error" };
    function m() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob("fetchNativeAdsMvpEligibility", function () {
              var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
              if (e == null)
                return (
                  r("FBLogger")("wa_ctwa_web").mustfix(
                    "fetchNativeAdsMvpEligibility: no me user available",
                  ),
                  (u || (u = n("Promise"))).resolve(d)
                );
              var t = e.user;
              return o("WAWebFetchAdAccountToken")
                .fetchToken()
                .then(function (e) {
                  return e.type !== "success"
                    ? (r("FBLogger")("wa_ctwa_web").mustfix(
                        "fetchNativeAdsMvpEligibility: token fetch failed as " +
                          e.type,
                      ),
                      o("WAWebBackendApi").frontendFireAndForget(
                        "loadedNativeAdsMvpEligibility",
                        d,
                      ),
                      d)
                    : r("WAWebNetworkStatus")
                        .waitIfOffline()
                        .then(function () {
                          return o("WAWebRelayClient").fetchQuery(
                            c,
                            { phone_number: t },
                            {
                              environmentType: "facebook",
                              accessToken: e.token,
                            },
                          );
                        })
                        .then(function (e) {
                          if (e == null || e.wa_smb_native_ads_web_info == null)
                            return (
                              o("WAWebBackendApi").frontendFireAndForget(
                                "loadedNativeAdsMvpEligibility",
                                d,
                              ),
                              d
                            );
                          var t = e.wa_smb_native_ads_web_info,
                            n = t.is_page_asset_linked,
                            a = t.is_pageless_asset_linked,
                            i = t.lifetime_native_ctwa_advertiser,
                            l = t.webclient_l90_ad_creator,
                            u = {
                              lifetime_native_ctwa_advertiser:
                                i != null ? i : !1,
                              webclient_l90_ad_creator: l != null ? l : !1,
                              is_page_asset_linked: n != null ? n : !1,
                              is_pageless_asset_linked: a != null ? a : !1,
                            },
                            c = { type: "success", data: u };
                          return (
                            o("WALogger").LOG(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "fetchNativeAdsMvpEligibility: success",
                                ])),
                            ),
                            r("justknobx")._("4235") &&
                              o(
                                "WAWebUserPrefsCTWA",
                              ).setNativeAdsMvpEligibility(u),
                            o("WAWebBackendApi").frontendFireAndForget(
                              "loadedNativeAdsMvpEligibility",
                              c,
                            ),
                            c
                          );
                        })
                        .catch(function (e) {
                          return (
                            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(
                              e,
                            ) &&
                              o(
                                "WAWebFetchAdAccountToken",
                              ).markTokenAsInvalid(),
                            r("FBLogger")("wa_ctwa_web")
                              .catching(e)
                              .mustfix("fetchNativeAdsMvpEligibility: error"),
                            o("WAWebBackendApi").frontendFireAndForget(
                              "loadedNativeAdsMvpEligibility",
                              d,
                            ),
                            d
                          );
                        });
                });
            })
            .waitUntilCompleted()
        : (o("WAWebBackendApi").frontendFireAndForget(
            "loadedNativeAdsMvpEligibility",
            d,
          ),
          (u || (u = n("Promise"))).resolve(d));
    }
    l.fetchNativeAdsMvpEligibility = m;
  },
  98,
);
