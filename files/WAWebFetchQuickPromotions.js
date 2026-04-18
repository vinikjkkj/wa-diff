__d(
  "WAWebFetchQuickPromotions",
  [
    "Promise",
    "WABase64",
    "WACustomError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAPromiseTimeout",
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
    "WAWebJobUpdateQPSurfaces",
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
      L = r("qpl")._(1029379849, "2322"),
      E = { type: "error" },
      k = 1,
      I = 1e3,
      T = 3e3,
      D = e !== void 0 ? e : (e = n("WAWebFetchQuickPromotionsQuery.graphql")),
      x =
        s !== void 0
          ? s
          : (s = n("WAWebFetchQuickPromotionsQuery_QuickPromotion.graphql")),
      $ =
        u !== void 0
          ? u
          : (u = n("WAWebFetchQuickPromotionsQuery_QPCreative.graphql")),
      P =
        c !== void 0
          ? c
          : (c = n("WAWebFetchQuickPromotionsQuery_QPAction.graphql")),
      N =
        d !== void 0
          ? d
          : (d = n("WAWebFetchQuickPromotionsQuery_QPText.graphql")),
      M =
        m !== void 0
          ? m
          : (m = n("WAWebFetchQuickPromotionsQuery_QPWAFilterClause.graphql")),
      w =
        p !== void 0
          ? p
          : (p = n("WAWebFetchQuickPromotionsQuery_QPWAFilter.graphql"));
    function A(e) {
      o("WAWebCommonCTWAQplHelpers").qplAnnotateGraphQLError({
        error: e,
        event: L,
        errorAnnotationName: "fetch_promotions_error",
        errorMessageAnnotationName: "fetch_promotions_error_message",
      });
    }
    function F() {
      return o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB()
        ? o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob("fetchQuickPromotions", function () {
              return o("WAWebBackendApi")
                .frontendSendAndReceive("getUserLocale")
                .then(function (e) {
                  return O(e);
                });
            })
            .waitUntilCompleted()
        : (R || (R = n("Promise"))).resolve({ type: "not-enabled" });
    }
    function O(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAPromiseTimeout")
            .promiseTimeout(B(e), H())
            .then(function (t) {
              return t.type === "success"
                ? (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchQuickPromotions: success",
                      ])),
                  ),
                  o("WAWebJobUpdateQPSurfaces")
                    .updateQPSurfacesFromGraphQLFetch(t.quickPromotions, e)
                    .then(function () {
                      return (o("WAWebQplFlowWrapper").QPL.markerEnd(L, 2), t);
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
                        A(e),
                        o("WAWebQplFlowWrapper").QPL.markerEnd(L, 3),
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
                    L,
                    "fetch_promotions_end",
                  ),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(L, 105),
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
    function B(e) {
      return (
        o("WAWebQplFlowWrapper").QPL.markerStart(L),
        o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_start"),
        o("WAWebFetchAdAccountToken")
          .fetchToken()
          .then(function (t) {
            return t.type === "success"
              ? W(t.token, e).then(function (e) {
                  return e.type === "success"
                    ? (o("WAWebQplFlowWrapper").QPL.markerPoint(
                        L,
                        "fetch_promotions_end",
                      ),
                      e)
                    : (o("WAWebQplFlowWrapper").QPL.markerPoint(
                        L,
                        "fetch_promotions_end",
                      ),
                      o("WAWebQplFlowWrapper").QPL.markerEnd(L, 3),
                      e.type === "auth-failure"
                        ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                        : e.type,
                      e);
                })
              : (t.type, t);
          })
      );
    }
    function W(e, t) {
      var n = k,
        r = function (o) {
          return q(e, t)
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
          timer: { algo: { type: "exponential", first: I }, max: T },
          code: r,
        });
      return (a.start(), a.promise());
    }
    function q(e, t) {
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
          D,
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
              E
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
                      var c = s(x, i),
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
                              return s($, e);
                            }),
                            T = I[0],
                            D,
                            M,
                            w,
                            A,
                            F;
                          if (T != null) {
                            var O = T.accessibility_text_for_image,
                              B = T.content,
                              W = T.primary_action,
                              q = T.title,
                              V = T.wa_dark_mode_media_details,
                              H = T.wa_light_mode_media_details;
                            if (q == null || B == null) return;
                            if (
                              ((M = s(N, q).text),
                              (w = s(N, B).text),
                              W != null)
                            ) {
                              var G = s(P, W),
                                z = G.title,
                                j = G.url;
                              if (z != null) {
                                var K = s(N, z);
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
                                (V == null ? void 0 : V.jpeg_thumbnail) !=
                                  null &&
                                  (X = {
                                    elementValue: new Uint8Array(
                                      o("WABase64").decodeB64(V.jpeg_thumbnail),
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
                          if (!(M == null || w == null || A == null)) {
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
                            var le = _ != null ? U(_, s) : void 0,
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
                                titleElementValue: M,
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
            A(e),
            o("WAWebSmbQpCallHealthLogger").logSmbQpCallHealth(
              "exception",
              e instanceof Error ? e.message : String(e),
            ),
            e instanceof Error &&
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : E
          );
        });
    }
    function U(e, t) {
      var n = t(M, e),
        r = n.clause_type,
        a = n.filters;
      return o("WAWebFetchQuickPromotionsCore").parseFilterClause(
        { clause_type: r, filters: a },
        e.clauses,
        function (e) {
          return U(e, t);
        },
        function (e) {
          return V(e, t);
        },
      );
    }
    function V(e, t) {
      var n = t(w, e),
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
    function H() {
      return (
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
        o("WAWebCTWAConstants").QP_FETCH_TIMEOUT_MS * (k + 1)
      );
    }
    l.fetchQuickPromotions = F;
  },
  98,
);
