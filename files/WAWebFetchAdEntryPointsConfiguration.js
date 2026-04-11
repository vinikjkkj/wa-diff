__d(
  "WAWebFetchAdEntryPointsConfiguration",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebCTWAConstants",
    "WAWebCommonAdEntryPointsTypes",
    "WAWebCommonCTWAQplHelpers",
    "WAWebFetchAdAccountToken",
    "WAWebFetchAdEntryPointsConfigurationM1Query.graphql",
    "WAWebFetchAdEntryPointsConfigurationQuery.graphql",
    "WAWebNetworkStatus",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQplFlowWrapper",
    "WAWebRelayClient",
    "WAWebUserPrefsCTWA",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("qpl")._(1029386599, "3453"),
      f = { type: "error" },
      g =
        e !== void 0
          ? e
          : (e = n("WAWebFetchAdEntryPointsConfigurationQuery.graphql")),
      h =
        s !== void 0
          ? s
          : (s = n("WAWebFetchAdEntryPointsConfigurationM1Query.graphql"));
    function y(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedAdEntryPointsConfiguration",
        e,
      );
    }
    function C(e) {
      o("WAWebCommonCTWAQplHelpers").qplAnnotateGraphQLError({
        error: e,
        event: _,
        errorAnnotationName: "fetch_remote_config_error",
        errorMessageAnnotationName: "fetch_remote_config_error_message",
      });
    }
    function b(e) {
      return o("WAWebBizGatingUtils").adEntryPointsConfigurationFetchEnabled()
        ? o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "fetchAdEntryPointsConfiguration",
              function () {
                return o("WAWebBackendApi")
                  .frontendSendAndReceive("getUserLocale")
                  .then(function (t) {
                    var r =
                      o("WAWebUserPrefsCTWA").getAdEntryPointsConfiguration(t);
                    if (r != null) {
                      var a = r.configuration,
                        i = r.isExpired;
                      if (!i)
                        return (
                          o("WALogger").LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchAdEntryPointsConfiguration: using cache",
                              ])),
                          ),
                          y({ entryPoints: a, type: "success", locale: t }),
                          (p || (p = n("Promise"))).resolve({
                            type: "success",
                            entryPoints: a,
                          })
                        );
                    }
                    return v(e, t, { hasCachedConfiguration: r != null }).then(
                      function (e) {
                        if (e.type === "success")
                          return (
                            o("WALogger").LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "fetchAdEntryPointsConfiguration: success",
                                ])),
                            ),
                            y(babelHelpers.extends({}, e, { locale: t })),
                            e
                          );
                        (e.type,
                          o("WALogger").LOG(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                'fetchAdEntryPointsConfiguration: failed as "',
                                '"',
                              ])),
                            e.type,
                          ));
                        var n = babelHelpers.extends({}, e, { locale: t });
                        return (
                          (r == null ? void 0 : r.isExpired) === !0 &&
                            (n.expiredConfiguration = r.configuration),
                          y(n),
                          e
                        );
                      },
                    );
                  });
              },
            )
            .waitUntilCompleted()
        : (p || (p = n("Promise"))).resolve({ type: "not-enabled" });
    }
    function v(e, t, n) {
      return o("WAPromiseTimeout")
        .promiseTimeout(S(e, t, n), k())
        .catch(function (e) {
          if (e instanceof o("WACustomError").TimeoutError)
            return (
              o("WAWebQplFlowWrapper").QPL.markerPoint(
                _,
                "fetch_remote_config_failure",
              ),
              o("WAWebQplFlowWrapper").QPL.markerEnd(_, 105),
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchAdEntryPointsConfigurationWithTimeout: timeout",
                  ])),
              ),
              { type: "timeout" }
            );
          throw e;
        });
    }
    function S(e, t, n) {
      return (
        o("WAWebQplFlowWrapper").QPL.markerStart(_),
        o("WAWebQplFlowWrapper").QPL.markerPoint(
          _,
          "fetch_remote_config_start",
        ),
        e === "locale-change" &&
          o("WAWebQplFlowWrapper").QPL.markerAnnotate(_, {
            bool: { remote_config_locale_change: !0 },
          }),
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(_, {
          bool: { remote_config_has_expired_cache: n.hasCachedConfiguration },
        }),
        o("WAWebFetchAdAccountToken")
          .fetchToken()
          .then(function (e) {
            return e.type === "success"
              ? E(e.token).then(function (e) {
                  if (e.type !== "success")
                    (o("WAWebQplFlowWrapper").QPL.markerPoint(
                      _,
                      "fetch_remote_config_failure",
                    ),
                      o("WAWebQplFlowWrapper").QPL.markerEnd(_, 3),
                      e.type === "auth-failure"
                        ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                        : e.type);
                  else {
                    (e.type,
                      o("WAWebQplFlowWrapper").QPL.markerPoint(
                        _,
                        "fetch_remote_config_success",
                      ));
                    try {
                      (o("WAWebUserPrefsCTWA").setAdEntryPointsConfiguration(
                        t,
                        e.entryPoints,
                      ),
                        o("WAWebQplFlowWrapper").QPL.markerPoint(
                          _,
                          "cache_remote_config_success",
                        ),
                        o("WAWebQplFlowWrapper").QPL.markerEnd(_, 2));
                    } catch (e) {
                      (o("WAWebQplFlowWrapper").QPL.markerPoint(
                        _,
                        "cache_remote_config_failure",
                      ),
                        C(e),
                        o("WAWebQplFlowWrapper").QPL.markerEnd(_, 3));
                    }
                  }
                  return e;
                })
              : (e.type, e);
          })
      );
    }
    function R(e) {
      return o("WAWebRelayClient").fetchQuery(
        g,
        {},
        { environmentType: "facebook", accessToken: e },
      );
    }
    function L(e) {
      return o("WAWebRelayClient").fetchQuery(
        h,
        {},
        { environmentType: "facebook", accessToken: e },
      );
    }
    function E(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o(
            "WAWebBizGatingUtils",
          ).adEntryPointsConfigurationFetchM1Enabled()
            ? L(e)
            : R(e);
        })
        .then(function (e) {
          if (e == null) return f;
          var t = e.ctwa_client_entry_point_entitlement,
            n = t.reduce(function (e, t) {
              var n = t.content,
                r = t.entry_point_or_experience,
                a = t.should_show,
                i = t.sub_content,
                l = { shouldShow: a };
              return (
                n != null &&
                  (l.content = o(
                    "WAWebCommonAdEntryPointsTypes",
                  ).asAdEntryPointContent(n)),
                i != null &&
                  (l.subContent = o(
                    "WAWebCommonAdEntryPointsTypes",
                  ).asAdEntryPointContent(i)),
                (e[r] = l),
                e
              );
            }, {});
          return { type: "success", entryPoints: n };
        })
        .catch(function (e) {
          return (
            C(e),
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : f
          );
        });
    }
    function k() {
      return (
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
        o("WAWebCTWAConstants").AD_ENTRY_POINTS_FETCH_TIMEOUT_MS
      );
    }
    l.fetchAdEntryPointsConfiguration = b;
  },
  98,
);
