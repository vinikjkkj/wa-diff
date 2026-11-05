__d(
  "WAWebFetchQuickPromotions",
  [
    "Promise",
    "WABase64",
    "WACustomError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAPromiseTimeout",
    "WAWebAuthAgentFeatureControlGateKeeper",
    "WAWebBackendApi",
    "WAWebBuildConstants",
    "WAWebCTWAConstants",
    "WAWebCommonCTWAQplHelpers",
    "WAWebFetchAdAccountToken",
    "WAWebFetchQuickPromotionsCore",
    "WAWebFetchQuickPromotionsQuery.graphql",
    "WAWebFetchQuickPromotionsQuery_QPAction.graphql",
    "WAWebFetchQuickPromotionsQuery_QPCreative.graphql",
    "WAWebFetchQuickPromotionsQuery_QPText.graphql",
    "WAWebFetchQuickPromotionsQuery_QPWAFilter.graphql",
    "WAWebFetchQuickPromotionsQuery_QPWAFilterClause.graphql",
    "WAWebFetchQuickPromotionsQuery_QuickPromotion.graphql",
    "WAWebL10NCountryCodes",
    "WAWebNetworkStatus",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQplFlowWrapper",
    "WAWebQuickPromotionGating",
    "WAWebRelayClient",
    "WAWebSmbQpCallHealthLogger",
    "WAWebUserPrefsMeUser",
    "WAWebWebp",
    "qpl",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = r("requireDeferred")("WAWebJobUpdateQPSurfaces").__setRef(
        "WAWebFetchQuickPromotions",
      ),
      E = r("qpl")._(1029379849, "2322"),
      k = { type: "error" },
      I = 1,
      T = 1e3,
      D = 3e3,
      x = e !== void 0 ? e : (e = n("WAWebFetchQuickPromotionsQuery.graphql")),
      $ =
        s !== void 0
          ? s
          : (s = n("WAWebFetchQuickPromotionsQuery_QuickPromotion.graphql")),
      P =
        u !== void 0
          ? u
          : (u = n("WAWebFetchQuickPromotionsQuery_QPCreative.graphql")),
      N =
        c !== void 0
          ? c
          : (c = n("WAWebFetchQuickPromotionsQuery_QPAction.graphql")),
      M =
        d !== void 0
          ? d
          : (d = n("WAWebFetchQuickPromotionsQuery_QPText.graphql")),
      w =
        m !== void 0
          ? m
          : (m = n("WAWebFetchQuickPromotionsQuery_QPWAFilterClause.graphql")),
      A =
        p !== void 0
          ? p
          : (p = n("WAWebFetchQuickPromotionsQuery_QPWAFilter.graphql"));
    function F(e) {
      o("WAWebCommonCTWAQplHelpers").qplAnnotateGraphQLError({
        error: e,
        event: E,
        errorAnnotationName: "fetch_promotions_error",
        errorMessageAnnotationName: "fetch_promotions_error_message",
      });
    }
    function O() {
      return o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled(
        "QP_BANNERS",
      )
        ? (R || (R = n("Promise"))).resolve({ type: "not-enabled" })
        : o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB()
          ? o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob("fetchQuickPromotions", function () {
                return o("WAWebBackendApi")
                  .frontendSendAndReceive("getUserLocale")
                  .then(function (e) {
                    return B(e);
                  });
              })
              .waitUntilCompleted()
          : (R || (R = n("Promise"))).resolve({ type: "not-enabled" });
    }
    function B(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAPromiseTimeout")
            .promiseTimeout(W(e), G())
            .then(function (t) {
              return t.type === "success"
                ? (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchQuickPromotions: success",
                      ])),
                  ),
                  L.load()
                    .then(function (n) {
                      var r = n.updateQPSurfacesFromGraphQLFetch;
                      return r(t.quickPromotions, e);
                    })
                    .then(function () {
                      return (o("WAWebQplFlowWrapper").QPL.markerEnd(E, 2), t);
                    })
                    .catch(function (e) {
                      return (
                        e instanceof Error
                          ? o("WALogger")
                              .ERROR(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "fetchQuickPromotions: failed while saving to the DB",
                                  ])),
                              )
                              .catching(e)
                          : o("WALogger").ERROR(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "fetchQuickPromotions: failed while saving to the DB",
                                ])),
                            ),
                        F(e),
                        o("WAWebQplFlowWrapper").QPL.markerEnd(E, 3),
                        { type: "error" }
                      );
                    }))
                : (t.type,
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        'fetchQuickPromotions: failed as "',
                        '"',
                      ])),
                    t.type,
                  ),
                  t);
            })
            .catch(function (e) {
              if (e instanceof o("WACustomError").TimeoutError)
                return (
                  o("WAWebQplFlowWrapper").QPL.markerPoint(
                    E,
                    "fetch_promotions_end",
                  ),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(E, 105),
                  o("WALogger").WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        'fetchQuickPromotions: failed as "timeout"',
                      ])),
                  ),
                  { type: "timeout" }
                );
              throw e;
            });
        });
    }
    function W(e) {
      return (
        o("WAWebQplFlowWrapper").QPL.markerStart(E),
        o("WAWebQplFlowWrapper").QPL.markerPoint(E, "fetch_promotions_start"),
        o("WAWebFetchAdAccountToken")
          .fetchToken()
          .then(function (t) {
            return t.type === "success"
              ? q(t.token, e).then(function (e) {
                  return e.type === "success"
                    ? (o("WAWebQplFlowWrapper").QPL.markerPoint(
                        E,
                        "fetch_promotions_end",
                      ),
                      e)
                    : (o("WAWebQplFlowWrapper").QPL.markerPoint(
                        E,
                        "fetch_promotions_end",
                      ),
                      o("WAWebQplFlowWrapper").QPL.markerEnd(E, 3),
                      e.type === "auth-failure"
                        ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                        : e.type,
                      e);
                })
              : (t.type, t);
          })
      );
    }
    function q(e, t) {
      var n = I,
        r = function (o) {
          return U(e, t)
            .then(function (e) {
              if (e.type === "success") o(e);
              else {
                var t = n > 0;
                (n--, t || o(e));
              }
            })
            .catch(function (e) {
              var t = n > 0;
              if ((n--, !t)) throw e;
            });
        },
        a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "fetchQuickPromotions",
          timer: { algo: { type: "exponential", first: T }, max: D },
          code: r,
        });
      return (a.start(), a.promise());
    }
    function U(e, t) {
      var r,
        a = Array.from(
          o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQLSMB(),
        );
      if (a.length === 0)
        return (R || (R = n("Promise"))).resolve({ type: "not-enabled" });
      var i =
        (r = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : r.user;
      if (i == null)
        return (R || (R = n("Promise"))).resolve({ type: "error" });
      var l = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(i),
        s;
      return o("WAWebRelayClient")
        .fetchQuery(
          x,
          {
            nux_ids: a,
            trigger_context: {
              wa_smb_trigger_context: {
                is_from_wa_smb: !0,
                app_version: o("WAWebBuildConstants").VERSION_BASE,
                country: l,
                locale: t,
              },
            },
          },
          {
            environmentType: "facebook",
            accessToken: e,
            getInlineDataReader: function (t) {
              s = t;
            },
          },
        )
        .then(function (e) {
          if (e == null)
            return (
              o("WAWebSmbQpCallHealthLogger").logSmbQpCallHealth(
                "exception",
                "null response",
              ),
              k
            );
          var t = e.quick_promotion_batch_fetch_root,
            n = new Map(),
            r = [];
          (a.forEach(function (e) {
            var t = o("WAWebFetchQuickPromotionsCore").getSurfaceIdByNuxId(e);
            if (t == null) {
              r.length < 3 && r.push(e);
              return;
            }
            n.set(e, { id: t, promotions: [] });
          }),
            r.length > 0 &&
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchQuickPromotions] nuxIds not in map: ",
                      " => ",
                      "",
                    ])),
                  r.length,
                  r,
                )
                .sendLogs("quick-promotions-graphql-missing-surface"));
          var i = [];
          return (
            t.forEach(function (e) {
              var t = e.eligible_promotions,
                r = e.surface_nux_id;
              if (!(r == null || t == null)) {
                var a = n.get(r);
                if (a == null) {
                  i.length < 3 && i.push(r);
                  return;
                }
                var l = t.edges;
                l.forEach(function (e) {
                  if (e != null) {
                    var t = e.client_ttl_seconds,
                      n = e.is_holdout,
                      r = e.log_eligibility_waterfall,
                      i = e.node,
                      l = e.priority,
                      u = e.time_range;
                    if (i != null) {
                      var c = s($, i),
                        d = c.ab_prop_name,
                        m = c.client_side_dry_run,
                        p = c.content_attributes,
                        _ = c.contextual_filters_for_wa_do_not_use,
                        f = c.creatives,
                        g = c.encrypted_logging_data,
                        h = c.is_server_force_pass,
                        y = c.promotion_id,
                        C = c.surface_delay_in_seconds,
                        S = c.user_interaction_info,
                        R = c.wa_qp_content_attributes_do_not_use;
                      if (!(y == null || h == null || p == null || C == null)) {
                        var L = p.wa_banner_background_color,
                          E =
                            p.wa_eligible_duration_after_impression_in_seconds,
                          k = p.wa_primary_cta_alternative_url;
                        if (E != null) {
                          var I = f.map(function (e) {
                              return s(P, e);
                            }),
                            T = I[0],
                            D,
                            x,
                            w,
                            A,
                            F;
                          if (T != null) {
                            var O = T.accessibility_text_for_image,
                              B = T.content,
                              W = T.primary_action,
                              q = T.title,
                              U = T.wa_dark_mode_media_details,
                              H = T.wa_light_mode_media_details;
                            if (q == null || B == null) return;
                            if (
                              ((x = s(M, q).text),
                              (w = s(M, B).text),
                              W != null)
                            ) {
                              var G = s(N, W),
                                z = G.title,
                                j = G.url;
                              if (z != null) {
                                var K = s(M, z);
                                K.text != null &&
                                  (D = {
                                    text: K == null ? void 0 : K.text,
                                    deepLink: j,
                                    universalLink: k,
                                  });
                              }
                            }
                            A = T.is_dismissible;
                            {
                              var Q;
                              try {
                                (H == null ? void 0 : H.jpeg_thumbnail) !=
                                  null &&
                                  (Q = {
                                    elementValue: new Uint8Array(
                                      o("WABase64").decodeB64(H.jpeg_thumbnail),
                                    ),
                                  });
                              } catch (e) {
                                o("WALogger").ERROR(
                                  b ||
                                    (b =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[fetchQuickPromotions] b64 decode failed: light mode",
                                      ])),
                                );
                              }
                              var X;
                              try {
                                (U == null ? void 0 : U.jpeg_thumbnail) !=
                                  null &&
                                  (X = {
                                    elementValue: new Uint8Array(
                                      o("WABase64").decodeB64(U.jpeg_thumbnail),
                                    ),
                                  });
                              } catch (e) {
                                o("WALogger").ERROR(
                                  v ||
                                    (v =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[fetchQuickPromotions] b64 decode failed: dark mode",
                                      ])),
                                );
                              }
                              (Q != null || X != null) &&
                                (F = {
                                  description: O != null ? O : "",
                                  light: Q,
                                  dark: X,
                                });
                            }
                          }
                          if (!(x == null || w == null || A == null)) {
                            var Y =
                                L != null
                                  ? {
                                      lightHighlight:
                                        L.light_mode_highlight_color,
                                      lightBackground:
                                        L.light_mode_background_color,
                                      darkHighlight:
                                        L.dark_mode_highlight_color,
                                      darkBackground:
                                        L.dark_mode_background_color,
                                    }
                                  : void 0,
                              J = R.reduce(function (e, t) {
                                var n = t.name,
                                  r = t.value;
                                return (
                                  n == null ||
                                    r == null ||
                                    e.push({ key: n, value: r }),
                                  e
                                );
                              }, []),
                              Z;
                            if (S != null) {
                              var ee = S.dismiss_click_count_for_user,
                                te = S.dismiss_max_instances,
                                ne = S.impression_count_for_user,
                                re = S.impression_max_instances,
                                oe = S.primary_click_count_for_user,
                                ae = S.primary_click_max_instances,
                                ie = S.secondary_click_count_for_user;
                              if (
                                ne == null ||
                                oe == null ||
                                ie == null ||
                                ee == null ||
                                re == null ||
                                ae == null ||
                                te == null
                              )
                                return;
                              Z = {
                                promotionConfig: {
                                  maxImpressions: re,
                                  maxDismisses: te,
                                  maxPrimaryClicks: ae,
                                  maxSecondaryClicks: 0,
                                },
                                userInfo: {
                                  impressionCount: ne,
                                  primaryClickCount: oe,
                                  secondaryClickCount: ie,
                                  dismissClickCount: ee,
                                },
                              };
                            }
                            var le = _ != null ? V(_, s) : void 0,
                              se =
                                g != null
                                  ? {
                                      elementValue:
                                        o("WAWebWebp").stringToUint8(g),
                                    }
                                  : void 0,
                              ue = {
                                id: y,
                                qpConfigPriority: l,
                                qpConfigDismissable: A ? "true" : "false",
                                qpConfigEligibilityDurationMs: E * 1e3,
                                qpConfigEndTimeSeconds: u.end,
                                qpConfigExperimentKey: d,
                                qpConfigExposureHoldout: n ? "true" : "false",
                                qpConfigForcePass: h ? "true" : "false",
                                qpConfigLogEligibilityWaterfall: r
                                  ? "true"
                                  : "false",
                                qpConfigStartTimeSeconds: u.start,
                                qpConfigSurfaceDelayTimeSeconds: C,
                                qpConfigTtlSeconds: t,
                                qpConfigClientSideDryRun:
                                  m === !0 ? "true" : "false",
                                titleElementValue: x,
                                textElementValue: w,
                                colors: Y,
                                contentAttributes: { attribute: J },
                                image: F,
                                primaryAction: D,
                                qpConfigPacing: Z,
                                qpConfigFilterRules: le,
                                header: void 0,
                                instanceId: void 0,
                                qpConfigDeterministic: "true",
                                qpConfigImpressionCooldown: -1,
                                qpConfigInstanceLogData: se,
                                qpConfigMaxImpressions: -1,
                                qpConfigTemplateName: "whatsapp_banner",
                                qpConfigTriggersTrigger: [],
                                secondaryAction: void 0,
                                qpConfigExposureStrategy: void 0,
                              };
                            a.promotions.push(ue);
                          }
                        }
                      }
                    }
                  }
                });
              }
            }),
            i.length > 0 &&
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchQuickPromotions: received ",
                    " unexpected nux IDs => ",
                    "",
                  ])),
                i.length,
                i,
              ),
            o("WAWebSmbQpCallHealthLogger").logSmbQpCallHealth("success"),
            {
              type: "success",
              quickPromotions: Array.from(n.values(), function (e) {
                var t = e.id,
                  n = e.promotions;
                return { id: t, promotions: [].concat(n) };
              }),
            }
          );
        })
        .catch(function (e) {
          return (
            F(e),
            o("WAWebSmbQpCallHealthLogger").logSmbQpCallHealth(
              "exception",
              e instanceof Error ? e.message : String(e),
            ),
            e instanceof Error &&
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : k
          );
        });
    }
    function V(e, t) {
      var n = t(w, e),
        r = n.clause_type,
        a = n.filters;
      return o("WAWebFetchQuickPromotionsCore").parseFilterClause(
        { clause_type: r, filters: a },
        e.clauses,
        function (e) {
          return V(e, t);
        },
        function (e) {
          return H(e, t);
        },
      );
    }
    function H(e, t) {
      var n = t(A, e),
        r = n.filter_name,
        a = n.filter_result,
        i = n.parameters,
        l = n.passes_if_client_not_supported;
      return o("WAWebFetchQuickPromotionsCore").parseFilter({
        filter_name: r,
        filter_result: a,
        parameters: i.map(function (e) {
          var t = e.key,
            n = e.value;
          return { key: t, value: n };
        }),
        passes_if_client_not_supported: l,
      });
    }
    function G() {
      return (
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
        o("WAWebCTWAConstants").QP_FETCH_TIMEOUT_MS * (I + 1)
      );
    }
    l.fetchQuickPromotions = O;
  },
  98,
);
