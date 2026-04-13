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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(38),
        n = e.adAccountID,
        a = e.audienceData,
        i = e.currency,
        l = e.dailyBudget,
        s = e.legacyAccountID,
        d = e.legacyAdAccountID,
        m = e.mode,
        _ = e.selectedPublisherPlatforms,
        h = e.templateTargetSpecString,
        y = o("CometRelay").useRelayEnvironment(),
        C = p(r("WAWebBizAdCreationLoggerContext")),
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [r("waWebBizAdCreationAudienceReducer")]), (t[0] = b))
        : (b = t[0]);
      var v = r("useWAWebBizAdCreationSpecDispatcherContext")(b),
        S;
      t[1] !== n ||
      t[2] !== a ||
      t[3] !== v ||
      t[4] !== y ||
      t[5] !== s ||
      t[6] !== C ||
      t[7] !== m
        ? ((S = function (t) {
            var e = babelHelpers.extends({}, (u(t), t)),
              i = e.audienceName,
              l = e.callback,
              c = e.onError,
              d = e.targetingSpec;
            if (m === "create")
              (s == null && r("err")("legacyAccountID is null"),
                o("WAWebBizAdCreationAudienceUtils").createSavedAudience(
                  n,
                  s,
                  d,
                  i,
                  y,
                  function (e) {
                    (v({
                      audienceData: e,
                      type: "audience_reducer.select_audience",
                    }),
                      l());
                  },
                  function (e) {
                    (C != null &&
                      r("WAWebBizAdLogger").log({
                        event: "save_audience_error",
                        loggerContext: C,
                        adAccountID: n,
                        extra: {
                          error_message: e.message,
                          operation: "create",
                        },
                      }),
                      c == null || c());
                  },
                ));
            else {
              if (a == null)
                throw r("err")("audienceData or option should not be empty");
              var p = a.audienceOption,
                _ = function (t) {
                  (v({
                    editedAudience: a,
                    targetingSpec: d,
                    type: "audience_reducer.set_lwi_audience_targeting_spec",
                  }),
                    v({
                      editedAudience: a,
                      name: i,
                      type: "audience_reducer.set_lwi_audience_name",
                    }),
                    t != null &&
                      v({
                        subjectToDSA: t.subjectToDSA,
                        type: "audience_reducer.set_lwi_audience_subject_to_dsa",
                      }),
                    l());
                };
              p === "SAVED_AUDIENCE"
                ? o("WAWebBizAdCreationAudienceUtils").editAudience({
                    audienceName: i,
                    savedAudienceID: a.audienceID,
                    targetingSpec: d,
                    callback: _,
                    onError: function (t) {
                      if (C != null) {
                        var e;
                        r("WAWebBizAdLogger").log({
                          event: "save_audience_error",
                          loggerContext: C,
                          adAccountID: n,
                          extra: {
                            error_message:
                              (e = t == null ? void 0 : t.message) != null
                                ? e
                                : "Unknown error",
                            operation: "edit",
                            audience_id: a.audienceID,
                          },
                        });
                      }
                      c == null || c();
                    },
                    relayEnvironment: y,
                  })
                : (_(),
                  o("CometRelay")
                    .fetchQuery(y, g, {
                      adAccountID: n,
                      targetSpecString: JSON.stringify(d),
                    })
                    .subscribe({
                      error: function (t) {
                        C != null &&
                          r("WAWebBizAdLogger").log({
                            event: "save_audience_error",
                            loggerContext: C,
                            adAccountID: n,
                            extra: {
                              error_message: t.message,
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
          }),
          (t[1] = n),
          (t[2] = a),
          (t[3] = v),
          (t[4] = y),
          (t[5] = s),
          (t[6] = C),
          (t[7] = m),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      e: {
        if (m === "create") {
          var E = h,
            k;
          t[9] !== E
            ? ((k =
                E != null
                  ? r("jsonParseSafe")(
                      String(E),
                      o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC,
                    )
                  : o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC),
              (t[9] = E),
              (t[10] = k))
            : (k = t[10]);
          var I = k,
            T;
          t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = o("LWICometTargetingUtils").DEFAULT_AUDIENCE_NAME.toJSON()),
              (t[11] = T))
            : (T = t[11]);
          var D;
          (t[12] !== i ||
          t[13] !== l ||
          t[14] !== I ||
          t[15] !== y ||
          t[16] !== s ||
          t[17] !== d ||
          t[18] !== m ||
          t[19] !== R ||
          t[20] !== _
            ? ((D = {
                adAccountID: s,
                audienceOption: "SAVED_AUDIENCE",
                dailyBudget: l,
                currency: i,
                environment: y,
                initialAudienceName: T,
                legacyAdAccountID: d,
                onSaveAudience: R,
                selectedPublisherPlatforms: _,
                targetingSpec: I,
                mode: m,
              }),
              (t[12] = i),
              (t[13] = l),
              (t[14] = I),
              (t[15] = y),
              (t[16] = s),
              (t[17] = d),
              (t[18] = m),
              (t[19] = R),
              (t[20] = _),
              (t[21] = D))
            : (D = t[21]),
            (L = D));
          break e;
        }
        if (a == null || a.targetSpec == null)
          throw r("err")("audienceData or targetingSpec should not be empty");
        var x;
        (t[22] !== a.audienceID ||
        t[23] !== a.audienceOption ||
        t[24] !== a.name ||
        t[25] !== a.targetSpec ||
        t[26] !== i ||
        t[27] !== l ||
        t[28] !== y ||
        t[29] !== s ||
        t[30] !== d ||
        t[31] !== m ||
        t[32] !== R ||
        t[33] !== _
          ? ((x = {
              adAccountID: s,
              audienceID: a.audienceID,
              audienceOption: a.audienceOption,
              dailyBudget: l,
              currency: i,
              environment: y,
              initialAudienceName: a.name,
              legacyAdAccountID: d,
              onSaveAudience: R,
              selectedPublisherPlatforms: _,
              targetingSpec: a.targetSpec,
              mode: m,
            }),
            (t[22] = a.audienceID),
            (t[23] = a.audienceOption),
            (t[24] = a.name),
            (t[25] = a.targetSpec),
            (t[26] = i),
            (t[27] = l),
            (t[28] = y),
            (t[29] = s),
            (t[30] = d),
            (t[31] = m),
            (t[32] = R),
            (t[33] = _),
            (t[34] = x))
          : (x = t[34]),
          (L = x));
      }
      var $ = L,
        P = r("useWAWebBizAdsCreationOpenModal")(),
        N;
      return (
        t[35] !== $ || t[36] !== P
          ? ((N = function () {
              P(c.jsx(f, babelHelpers.extends({}, $)));
            }),
            (t[35] = $),
            (t[36] = P),
            (t[37] = N))
          : (N = t[37]),
        N
      );
    }
    l.default = h;
  },
  98,
);
