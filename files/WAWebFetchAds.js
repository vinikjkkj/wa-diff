__d(
  "WAWebFetchAds",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBizGatingUtils",
    "WAWebCTWAConstants",
    "WAWebCommonAdsTypes",
    "WAWebFetchAdAccountToken",
    "WAWebFetchAdsQuery.graphql",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQplFlowWrapper",
    "WAWebRelayClient",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("qpl")._(1029390253, "3454"),
      m = { type: "error" },
      p = e !== void 0 ? e : (e = n("WAWebFetchAdsQuery.graphql")),
      _ = 90;
    function f(e) {
      return o("WAWebBizGatingUtils").adManagementEnabled()
        ? o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob("fetchAds", function () {
              return g(e);
            })
            .waitUntilCompleted()
        : (c || (c = n("Promise"))).resolve({ type: "not-enabled" });
    }
    function g(e) {
      return o("WAPromiseTimeout")
        .promiseTimeout(
          h(e),
          o("WAWebCTWAConstants").MANAGE_ADS_FETCH_TIMEOUT_MS,
        )
        .catch(function (e) {
          if (e instanceof o("WACustomError").TimeoutError)
            return (
              o("WAWebQplFlowWrapper").QPL.markerPoint(d, "fetch_ads_end"),
              o("WAWebQplFlowWrapper").QPL.markerEnd(d, 105),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchAdsWithTimeout: timeout",
                  ])),
              ),
              { type: "timeout" }
            );
          throw e;
        });
    }
    function h(e) {
      return (
        o("WAWebQplFlowWrapper").QPL.markerStart(d),
        o("WAWebQplFlowWrapper").QPL.markerPoint(d, "fetch_ads_start"),
        o("WAWebFetchAdAccountToken")
          .fetchToken()
          .then(function (t) {
            return t.type === "success"
              ? y({ token: t.token, pageId: e }).then(function (e) {
                  return (
                    o("WAWebQplFlowWrapper").QPL.markerPoint(
                      d,
                      "fetch_ads_end",
                    ),
                    e.type !== "success"
                      ? (o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3),
                        e.type === "auth-failure"
                          ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                          : e.type)
                      : (e.type, o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2)),
                    e
                  );
                })
              : (t.type, t);
          })
      );
    }
    function y(e) {
      var t = e.pageId,
        n = e.token;
      return o("WAWebRelayClient")
        .fetchQuery(
          p,
          { page_id: t, options: { from_n_days_ago: _ } },
          { environmentType: "facebook", accessToken: n },
        )
        .then(function (e) {
          if (e == null) return m;
          var t = e.ctwa,
            n = t.all_page_ads,
            r = n.edges,
            o = r.reduce(function (e, t) {
              var n = t.node,
                r = n.wrapper_renderer,
                o = r.async_request,
                a = r.boosted_component;
              return (
                [a, o].forEach(function (t) {
                  if (t != null) {
                    var n = C(t);
                    n != null && e.push(n);
                  }
                }),
                e
              );
            }, []);
          return o.length < r.length ? m : { type: "success", ads: o };
        })
        .catch(function (e) {
          var t;
          return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            ? { type: "auth-failure" }
            : ((e == null || (t = e.message) == null
                ? void 0
                : t.startsWith("Relay:")) === !0 &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchAdsWithToken: Relay parser error",
                      ])),
                  )
                  .catching(e)
                  .sendLogs("fetch-ads-relay-parser-error"),
              m);
        });
    }
    function C(e) {
      var t,
        n,
        r,
        a = e.boosting_info,
        i = e.campaign_group,
        l = e.id,
        s = e.spec,
        u = a.spent,
        c = a.thumbnail_image_url,
        d = s.adgroup_spec,
        m = s.boosting_status,
        p = u.formatted_for_lwi,
        _ = i.id,
        f = b(i),
        g = (t = f == null ? void 0 : f.reach) != null ? t : 0,
        h = (n = f == null ? void 0 : f.conversations) != null ? n : 0,
        y = {
          adId: o("WAWebCommonAdsTypes").asAdId(l),
          thumbnailUrl: c,
          boostingStatus:
            (r = o("WAWebCommonAdsTypes").BoostingStatusEnum.cast(m)) != null
              ? r
              : o("WAWebCommonAdsTypes").BoostingStatusEnum.UNKNOWN,
          budget: p,
          campaignGroupId: o("WAWebCommonAdsTypes").asAdCampaignGroupId(_),
          conversations: h,
          reach: g,
        },
        C = d[0];
      if (C != null) {
        var v = C.creative;
        if (v != null) {
          var S = v.body;
          S != null && (y.creativeText = S);
        }
      }
      return y;
    }
    function b(e) {
      var t = e.ad_insights;
      if (t != null) {
        var n = t.edges,
          r = n.reduce(function (e, t) {
            var n = t.node,
              r = n.reach,
              o = n.results;
            return (
              e.push({
                reach: r != null ? r : 0,
                conversations: o != null ? o : 0,
              }),
              e
            );
          }, []);
        if (r.length !== 0) return r[0];
      }
    }
    l.fetchAds = f;
  },
  98,
);
