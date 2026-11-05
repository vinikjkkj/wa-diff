__d(
  "WAWebConsumerFetchQuickPromotions",
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
    "WAWebCanonicalUtils",
    "WAWebCommonCTWAQplHelpers",
    "WAWebConsumerFetchQuickPromotionsQuery.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPAction.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPCreative.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPText.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilter.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilterClause.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QuickPromotion.graphql",
    "WAWebFetchQuickPromotionsCore",
    "WAWebL10NCountryCodes",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQplFlowWrapper",
    "WAWebQuickPromotionGating",
    "WAWebRelayClient",
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
        "WAWebConsumerFetchQuickPromotions",
      ),
      E = r("qpl")._(1029379849, "2322"),
      k = { type: "error" },
      I = 1,
      T = 1e3,
      D = 3e3,
      x =
        e !== void 0
          ? e
          : (e = n("WAWebConsumerFetchQuickPromotionsQuery.graphql")),
      $ =
        s !== void 0
          ? s
          : (s = n(
              "WAWebConsumerFetchQuickPromotionsQuery_QuickPromotion.graphql",
            )),
      P =
        u !== void 0
          ? u
          : (u = n(
              "WAWebConsumerFetchQuickPromotionsQuery_QPCreative.graphql",
            )),
      N =
        c !== void 0
          ? c
          : (c = n("WAWebConsumerFetchQuickPromotionsQuery_QPAction.graphql")),
      M =
        d !== void 0
          ? d
          : (d = n("WAWebConsumerFetchQuickPromotionsQuery_QPText.graphql")),
      w =
        m !== void 0
          ? m
          : (m = n(
              "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilterClause.graphql",
            )),
      A =
        p !== void 0
          ? p
          : (p = n(
              "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilter.graphql",
            ));
    function F(e) {
      o("WAWebCommonCTWAQplHelpers").qplAnnotateGraphQLError({
        error: e,
        event: E,
        errorAnnotationName: "fetch_consumer_promotions_error",
        errorMessageAnnotationName: "fetch_consumer_promotions_error_message",
      });
    }
    function O() {
      return o("WAWebMobilePlatforms").isSMB()
        ? (R || (R = n("Promise"))).resolve({ type: "not-enabled" })
        : o("WAWebCanonicalUtils").isCanonicalPresent()
          ? o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "fetchConsumerQuickPromotions",
                function () {
                  return o("WAWebBackendApi")
                    .frontendSendAndReceive("getUserLocale")
                    .then(function (e) {
                      return B(e);
                    });
                },
              )
              .waitUntilCompleted()
          : (R || (R = n("Promise"))).resolve({ type: "error" });
    }
    function B(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAPromiseTimeout")
            .promiseTimeout(
              W(e),
              o("WAWebCTWAConstants").QP_FETCH_TIMEOUT_MS * (I + 1),
            )
            .then(function (t) {
              return t.type === "success"
                ? (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchConsumerQuickPromotions: success",
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
                                    "fetchConsumerQuickPromotions: failed while saving to the DB",
                                  ])),
                              )
                              .catching(e)
                          : o("WALogger").ERROR(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "fetchConsumerQuickPromotions: failed while saving to the DB",
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
                        'fetchConsumerQuickPromotions: failed as "',
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
                        'fetchConsumerQuickPromotions: failed as "timeout"',
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
        q(e).then(function (e) {
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
              e);
        })
      );
    }
    function q(e) {
      var t = I,
        n = function (r) {
          return U(e)
            .then(function (e) {
              if (e.type === "success") r(e);
              else {
                var n = t > 0;
                (t--, n || r(e));
              }
            })
            .catch(function (e) {
              var n = t > 0;
              if ((t--, !n)) throw e;
            });
        },
        r = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "fetchConsumerQuickPromotions",
          timer: { algo: { type: "exponential", first: T }, max: D },
          code: n,
        });
      return (r.start(), r.promise());
    }
    function U(e) {
      var t,
        r = Array.from(
          o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQLConsumer(),
        );
      if (r.length === 0)
        return (R || (R = n("Promise"))).resolve({ type: "not-enabled" });
      var a =
        (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : t.user;
      if (a == null)
        return (R || (R = n("Promise"))).resolve({ type: "error" });
      var i = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(a),
        l;
      return o("WAWebRelayClient")
        .fetchQuery(
          x,
          {
            nux_ids: r,
            trigger_context: {
              wa_smb_trigger_context: {
                is_from_wa_smb: !1,
                app_version: o("WAWebBuildConstants").VERSION_BASE,
                country: i,
                locale: e,
              },
            },
          },
          {
            environmentType: "whatsapp_web",
            getInlineDataReader: function (t) {
              l = t;
            },
          },
        )
        .then(function (e) {
          if (e == null) return k;
          var t = e.quick_promotion_multiverse_batch_fetch_root,
            n = new Map(),
            a = [];
          (r.forEach(function (e) {
            var t = o("WAWebFetchQuickPromotionsCore").getSurfaceIdByNuxId(e);
            if (t == null) {
              a.length < 3 && a.push(e);
              return;
            }
            n.set(e, { id: t, promotions: [] });
          }),
            a.length > 0 &&
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchConsumerQuickPromotions] nuxIds not in map: ",
                      " => ",
                      "",
                    ])),
                  a.length,
                  a,
                )
                .sendLogs("consumer-quick-promotions-graphql-missing-surface"));
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
                var s = t.edges;
                s.forEach(function (e) {
                  if (e != null) {
                    var t = e.client_ttl_seconds,
                      n = e.is_holdout,
                      r = e.log_eligibility_waterfall,
                      i = e.node,
                      s = e.priority,
                      u = e.time_range;
                    if (i != null) {
                      var c = l($, i),
                        d = c.ab_prop_name,
                        m = c.client_side_dry_run,
                        p = c.content_attributes,
                        _ = c.contextual_filters_for_wa_do_not_use,
                        f = c.creatives,
                        g = c.encrypted_logging_data,
                        h = c.is_server_force_pass,
                        y = c.max_impressions,
                        C = c.promotion_id,
                        S = c.surface_delay_in_seconds,
                        R = c.wa_qp_content_attributes_do_not_use;
                      if (!(C == null || h == null || p == null || S == null)) {
                        var L = p.wa_banner_background_color,
                          E =
                            p.wa_eligible_duration_after_impression_in_seconds,
                          k = p.wa_primary_cta_alternative_url;
                        if (E != null) {
                          var I = f.map(function (e) {
                              return l(P, e);
                            }),
                            T = I[0],
                            D,
                            x,
                            w,
                            A,
                            F,
                            O,
                            B;
                          if (T != null) {
                            var W = T.accessibility_text_for_image,
                              q = T.content,
                              U = T.dismiss_action,
                              H = T.primary_action,
                              G = T.title,
                              z = T.wa_dark_mode_media_details,
                              j = T.wa_light_mode_media_details;
                            if (G == null || q == null) return;
                            if (
                              ((A = l(M, G).text),
                              (F = l(M, q).text),
                              H != null)
                            ) {
                              var K = l(N, H),
                                Q = K.limit,
                                X = K.title,
                                Y = K.url;
                              if (((x = Q), X != null)) {
                                var J = l(M, X);
                                J.text != null &&
                                  (D = {
                                    text: J == null ? void 0 : J.text,
                                    deepLink: Y,
                                    universalLink: k,
                                  });
                              }
                            }
                            if (
                              ((w = U == null ? void 0 : U.limit),
                              (O = T.is_dismissible),
                              W != null)
                            ) {
                              var Z;
                              try {
                                (j == null ? void 0 : j.jpeg_thumbnail) !=
                                  null &&
                                  (Z = {
                                    elementValue: new Uint8Array(
                                      o("WABase64").decodeB64(j.jpeg_thumbnail),
                                    ),
                                  });
                              } catch (e) {
                                o("WALogger").ERROR(
                                  b ||
                                    (b =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[fetchConsumerQuickPromotions] b64 decode failed: light mode",
                                      ])),
                                );
                              }
                              var ee;
                              try {
                                (z == null ? void 0 : z.jpeg_thumbnail) !=
                                  null &&
                                  (ee = {
                                    elementValue: new Uint8Array(
                                      o("WABase64").decodeB64(z.jpeg_thumbnail),
                                    ),
                                  });
                              } catch (e) {
                                o("WALogger").ERROR(
                                  v ||
                                    (v =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[fetchConsumerQuickPromotions] b64 decode failed: dark mode",
                                      ])),
                                );
                              }
                              B = { description: W, light: Z, dark: ee };
                            }
                          }
                          if (!(A == null || F == null || O == null)) {
                            var te =
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
                              ne = R.reduce(function (e, t) {
                                var n = t.name,
                                  r = t.value;
                                return (
                                  n == null ||
                                    r == null ||
                                    e.push({ key: n, value: r }),
                                  e
                                );
                              }, []),
                              re =
                                y != null || x != null || w != null
                                  ? {
                                      promotionConfig: {
                                        maxImpressions: y != null ? y : -1,
                                        maxDismisses: w != null ? w : 0,
                                        maxPrimaryClicks: x != null ? x : 0,
                                        maxSecondaryClicks: 0,
                                      },
                                      userInfo: void 0,
                                    }
                                  : void 0,
                              oe = _ != null ? V(_, l) : void 0,
                              ae =
                                g != null
                                  ? {
                                      elementValue:
                                        o("WAWebWebp").stringToUint8(g),
                                    }
                                  : void 0,
                              ie = {
                                id: C,
                                qpConfigPriority: s,
                                qpConfigDismissable: O ? "true" : "false",
                                qpConfigEligibilityDurationMs: E * 1e3,
                                qpConfigEndTimeSeconds: u.end,
                                qpConfigExperimentKey: d,
                                qpConfigExposureHoldout: n ? "true" : "false",
                                qpConfigForcePass: h ? "true" : "false",
                                qpConfigLogEligibilityWaterfall: r
                                  ? "true"
                                  : "false",
                                qpConfigStartTimeSeconds: u.start,
                                qpConfigSurfaceDelayTimeSeconds: S,
                                qpConfigTtlSeconds: t,
                                qpConfigClientSideDryRun:
                                  m === !0 ? "true" : "false",
                                titleElementValue: A,
                                textElementValue: F,
                                colors: te,
                                contentAttributes: { attribute: ne },
                                image: B,
                                primaryAction: D,
                                qpConfigPacing: re,
                                qpConfigFilterRules: oe,
                                header: void 0,
                                instanceId: void 0,
                                qpConfigDeterministic: "true",
                                qpConfigImpressionCooldown: -1,
                                qpConfigInstanceLogData: ae,
                                qpConfigMaxImpressions: y != null ? y : -1,
                                qpConfigTemplateName: "whatsapp_banner",
                                qpConfigTriggersTrigger: [],
                                secondaryAction: void 0,
                                qpConfigExposureStrategy: void 0,
                              };
                            a.promotions.push(ie);
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
                    "[fetchConsumerQuickPromotions] ",
                    " unexpected nuxIds => ",
                    "",
                  ])),
                i.length,
                i,
              ),
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
          return (F(e), k);
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
    l.fetchConsumerQuickPromotions = O;
  },
  98,
);
