__d(
  "useWAWebBizAdCreationOpenTargetingModal",
  [
    "CometRelay",
    "LWICometDefaultTargetingSpec",
    "LWICometTargetingUtils",
    "WAWebBizAdCreationAudienceUtils",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "deferredLoadComponent",
    "err",
    "jsonParseSafe",
    "react",
    "requireDeferred",
    "useWAWebBizAdCreationOpenTargetingModalDSAQuery.graphql",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "useWAWebBizAdsCreationOpenModal",
    "waWebBizAdCreationAudienceReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var c = s || (s = o("react")),
      d = s,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useMemo,
      f = r("deferredLoadComponent")(
        r("requireDeferred")("WAWebBizAdCreationTargetingModal.react").__setRef(
          "useWAWebBizAdCreationOpenTargetingModal",
        ),
      ),
      g =
        e !== void 0
          ? e
          : (e = n("useWAWebBizAdCreationOpenTargetingModalDSAQuery.graphql"));
    function h(e) {
      var t = e.adAccountID,
        n = e.audienceData,
        a = e.currency,
        i = e.dailyBudget,
        l = e.legacyAccountID,
        s = e.legacyAdAccountID,
        d = e.mode,
        h = e.selectedPublisherPlatforms,
        y = e.templateTargetSpecString,
        C = o("CometRelay").useRelayEnvironment(),
        b = p(r("WAWebBizAdCreationLoggerContext")),
        v = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("waWebBizAdCreationAudienceReducer"),
        ]),
        S = m(
          function (e) {
            var a = babelHelpers.extends({}, (u(e), e)),
              i = a.audienceName,
              s = a.callback,
              c = a.onError,
              m = a.targetingSpec;
            if (d === "create")
              (l == null && r("err")("legacyAccountID is null"),
                o("WAWebBizAdCreationAudienceUtils").createSavedAudience(
                  t,
                  l,
                  m,
                  i,
                  C,
                  function (e) {
                    (v({
                      audienceData: e,
                      type: "audience_reducer.select_audience",
                    }),
                      s());
                  },
                  function (e) {
                    (b != null &&
                      r("WAWebBizAdLogger").log({
                        event: "save_audience_error",
                        loggerContext: b,
                        adAccountID: t,
                        extra: {
                          error_message: e.message,
                          operation: "create",
                        },
                      }),
                      c == null || c());
                  },
                ));
            else {
              if (n == null)
                throw r("err")("audienceData or option should not be empty");
              var p = n.audienceOption,
                _ = function (t) {
                  (v({
                    editedAudience: n,
                    targetingSpec: m,
                    type: "audience_reducer.set_lwi_audience_targeting_spec",
                  }),
                    v({
                      editedAudience: n,
                      name: i,
                      type: "audience_reducer.set_lwi_audience_name",
                    }),
                    t != null &&
                      v({
                        subjectToDSA: t.subjectToDSA,
                        type: "audience_reducer.set_lwi_audience_subject_to_dsa",
                      }),
                    s());
                };
              p === "SAVED_AUDIENCE"
                ? o("WAWebBizAdCreationAudienceUtils").editAudience({
                    audienceName: i,
                    savedAudienceID: n.audienceID,
                    targetingSpec: m,
                    callback: _,
                    onError: function (o) {
                      if (b != null) {
                        var e;
                        r("WAWebBizAdLogger").log({
                          event: "save_audience_error",
                          loggerContext: b,
                          adAccountID: t,
                          extra: {
                            error_message:
                              (e = o == null ? void 0 : o.message) != null
                                ? e
                                : "Unknown error",
                            operation: "edit",
                            audience_id: n.audienceID,
                          },
                        });
                      }
                      c == null || c();
                    },
                    relayEnvironment: C,
                  })
                : (_(),
                  o("CometRelay")
                    .fetchQuery(C, g, {
                      adAccountID: t,
                      targetSpecString: JSON.stringify(m),
                    })
                    .subscribe({
                      error: function (n) {
                        b != null &&
                          r("WAWebBizAdLogger").log({
                            event: "save_audience_error",
                            loggerContext: b,
                            adAccountID: t,
                            extra: {
                              error_message: n.message,
                              operation: "fetch_subject_to_dsa",
                            },
                          });
                      },
                      next: function (t) {
                        var e;
                        v({
                          subjectToDSA: !!(
                            !(t == null || (e = t.lwi) == null) &&
                            e.target_spec_subject_to_dsa
                          ),
                          type: "audience_reducer.set_lwi_audience_subject_to_dsa",
                        });
                      },
                    }));
            }
          },
          [d, l, t, C, v, n, b],
        ),
        R = _(
          function () {
            if (d === "create") {
              var e = y,
                t =
                  e != null
                    ? r("jsonParseSafe")(
                        String(e),
                        o("LWICometDefaultTargetingSpec")
                          .DEFAULT_TARGETING_SPEC,
                      )
                    : o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC;
              return {
                adAccountID: l,
                audienceOption: "SAVED_AUDIENCE",
                dailyBudget: i,
                currency: a,
                environment: C,
                initialAudienceName: o(
                  "LWICometTargetingUtils",
                ).DEFAULT_AUDIENCE_NAME.toJSON(),
                legacyAdAccountID: s,
                onSaveAudience: S,
                selectedPublisherPlatforms: h,
                targetingSpec: t,
                mode: d,
              };
            }
            if (n == null || n.targetSpec == null)
              throw r("err")(
                "audienceData or targetingSpec should not be empty",
              );
            return {
              adAccountID: l,
              audienceID: n.audienceID,
              audienceOption: n.audienceOption,
              dailyBudget: i,
              currency: a,
              environment: C,
              initialAudienceName: n.name,
              legacyAdAccountID: s,
              onSaveAudience: S,
              selectedPublisherPlatforms: h,
              targetingSpec: n.targetSpec,
              mode: d,
            };
          },
          [n, i, a, C, l, s, d, S, h, y],
        ),
        L = r("useWAWebBizAdsCreationOpenModal")();
      return function () {
        L(c.jsx(f, babelHelpers.extends({}, R)));
      };
    }
    l.default = h;
  },
  98,
);
