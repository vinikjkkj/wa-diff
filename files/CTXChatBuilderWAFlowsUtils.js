__d(
  "CTXChatBuilderWAFlowsUtils",
  [
    "fbt",
    "AdsAdvantageAudienceUtils",
    "AdsGetStandardTemplateDefaultJSONForWhatsAppFlows",
    "AdsInterfacesLogger",
    "AdsMessengerPageWelcomeMessageDataManager",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMessengerVisualEditorUtils",
    "AdsUEditorHostIDs",
    "AdsUniformValue",
    "CTWAAdsOptimizationStoreUtils",
    "CTWAFlowsDiagnostics",
    "CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation.graphql",
    "ClickToWhatsAppFeatureGating",
    "GeoToast.react",
    "WAMFlowsHSMEditorUtils",
    "XFBWAFlowsTemplateUtils.facebook",
    "adsMessengerDataModelGetWelcomeMessage",
    "adsMessengerDataModelSetInThreadCarouselIsEnabled",
    "adsMessengerDataModelSetInThreadCarouselProducts",
    "adsMessengerDataModelSetLandingScreenType",
    "adsMessengerDataModelSetWelcomeMessage",
    "nullthrows",
    "react",
    "setByPath",
    "tryParseJSONMixed",
    "useGeoToaster",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(
      e,
      t,
      n,
      a,
      i,
      l,
      u,
      m,
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
      L,
      E,
      k,
      I,
    ) {
      var T = r("useGeoToaster")(),
        D = T.add,
        x = d(
          function (e) {
            (k == null || k(),
              D(
                c.jsx(r("GeoToast.react"), {
                  description: e != null ? e : s._(/*BTDS*/ ""),
                  heading: s._(/*BTDS*/ ""),
                  status: "error",
                }),
              ));
          },
          [D, k],
        );
      return d(
        function (s, c, d, T, D, $, P, N, M) {
          var w, A, F;
          if ((I == null ? void 0 : I()) === !1) {
            k == null || k();
            return;
          }
          var O;
          ((w = e.text_format) == null ||
          (w = w.message) == null ||
          (w = w.automated_greeting_message_cta) == null ||
          (w = w.wa_flow) == null
            ? void 0
            : w.flow_data) != null
            ? (O = e)
            : (O = r("adsMessengerDataModelSetLandingScreenType")(
                r("AdsGetStandardTemplateDefaultJSONForWhatsAppFlows")(
                  t,
                  n,
                  a,
                  i,
                  l,
                  u,
                  R,
                  L,
                ),
                r("AdsMessengerVisualEditorLandingScreenType").CTWA_FLOWS,
              ));
          var B =
            (A = O.text_format) == null ||
            (A = A.message) == null ||
            (A = A.automated_greeting_message_cta) == null ||
            (A = A.wa_flow) == null ||
            (A = A.flow_data) == null
              ? void 0
              : A.flow_id;
          E == null && m(B);
          var W = s !== _;
          if (t == null && L == null) {
            k == null || k();
            return;
          }
          if (n == null) {
            k == null || k();
            return;
          }
          if ((W || f === !0) && s != null && c != null) {
            var q = babelHelpers.extends({}, O);
            if (g) {
              var U = o(
                  "CTWAAdsOptimizationStoreUtils",
                ).getIsWhatsAppNumberCloudAPI(a, t),
                V = o(
                  "ClickToWhatsAppFeatureGating",
                ).enableCTWAFlowsAutomatedResponse(U);
              q = p(q, T, d, s, y, V ? P : null, V ? N : null);
            }
            (E == null && h(q),
              r(
                "AdsMessengerPageWelcomeMessageDataManager",
              ).createCustomTemplate(
                C,
                String(a),
                JSON.stringify(q),
                d != null ? d : S,
                r("AdsUEditorHostIDs").EDITING,
                b,
                !1,
                v,
                void 0,
                void 0,
                void 0,
                void 0,
                E == null
                  ? void 0
                  : function (e) {
                      var t,
                        n = o(
                          "AdsMessengerVisualEditorUtils",
                        ).parseWelcomeMessage(a, e, i, l);
                      return ((t = n.text_format) == null ||
                      (t = t.message) == null ||
                      (t = t.automated_greeting_message_cta) == null ||
                      (t = t.wa_flow) == null ||
                      (t = t.flow_data) == null
                        ? void 0
                        : t.flow_id) === s
                        ? E(e, M)
                        : (x(), !1);
                    },
                E == null ? void 0 : x,
              ));
            return;
          } else if (
            ((F = O.text_format.message.automated_greeting_message_cta) ==
              null || (F = F.wa_flow) == null
              ? void 0
              : F.flow_data) != null
          ) {
            var H = babelHelpers.extends({}, O);
            if (g && _ != null) {
              var G = o(
                  "CTWAAdsOptimizationStoreUtils",
                ).getIsWhatsAppNumberCloudAPI(a, t),
                z = o(
                  "ClickToWhatsAppFeatureGating",
                ).enableCTWAFlowsAutomatedResponse(G);
              H = p(H, T, d != null ? d : S, _, y, z ? P : null, z ? N : null);
            }
            if ((E == null ? void 0 : E(JSON.stringify(H), M)) === !1) {
              k == null || k();
              return;
            }
            h(H);
            return;
          }
          k == null || k();
        },
        [b, C, i, g, f, v, l, _, h, k, E, u, n, a, t, m, I, x, S, y, e, R, L],
      );
    }
    function p(e, t, n, o, a, i, l) {
      var s,
        u =
          e == null ||
          (s = e.text_format) == null ||
          (s = s.message) == null ||
          (s = s.automated_greeting_message_cta) == null ||
          (s = s.wa_flow) == null
            ? void 0
            : s.automated_response_data,
        c = u === null;
      return (
        r("setByPath")(
          e,
          [
            "text_format",
            "message",
            "automated_greeting_message_cta",
            "wa_flow",
          ],
          babelHelpers.extends(
            {
              cta: t,
              flow_data: {
                flow_id: o,
                last_update_time: Date.now(),
                waba_id: a,
              },
              title: n,
            },
            c
              ? { automated_response_data: null }
              : i != null
                ? {
                    automated_response_data: {
                      text: i,
                      cta_info: l != null ? l : null,
                    },
                  }
                : {},
          ),
        ),
        r("setByPath")(
          e,
          ["text_format", "message", "automated_greeting_message_cta", "type"],
          "flow",
        ),
        e
      );
    }
    function _(e) {
      var t, n;
      return (t =
        (n = e.text_format) == null ||
        (n = n.message.automated_greeting_message_cta) == null ||
        (n = n.wa_flow) == null ||
        (n = n.flow_data) == null
          ? void 0
          : n.last_update_time) != null
        ? t
        : 0;
    }
    function f(e, t, n) {
      return d(
        function (a) {
          var i = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t),
            l = r("adsMessengerDataModelGetWelcomeMessage")(i);
          l !== a &&
            (r("setByPath")(i, ["user_edit"], !0),
            r("setByPath")(i, ["welcome_message_edited"], !0),
            r("setByPath")(i, ["has_ai_generated_welcome_message"], !1),
            n(
              r("adsMessengerDataModelSetWelcomeMessage")(
                i,
                new (r("AdsUniformValue"))(a),
              ),
            ));
        },
        [n, e, t],
      );
    }
    function g(e, t, n) {
      return d(
        function (a) {
          var i,
            l,
            s = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t),
            u =
              (i = s.text_format) == null ||
              (i = i.message) == null ||
              (i = i.automated_greeting_message_cta) == null ||
              (i = i.wa_flow) == null
                ? void 0
                : i.automated_response_data;
          (u == null ? void 0 : u.text) !== a &&
            (r("setByPath")(
              s,
              [
                "text_format",
                "message",
                "automated_greeting_message_cta",
                "wa_flow",
                "automated_response_data",
              ],
              {
                text: a,
                cta_info:
                  (l = u == null ? void 0 : u.cta_info) != null ? l : null,
              },
            ),
            n(s));
        },
        [n, e, t],
      );
    }
    function h(e, t, n) {
      return d(
        function (a) {
          var i,
            l,
            s = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t),
            u =
              (i = s.text_format) == null ||
              (i = i.message) == null ||
              (i = i.automated_greeting_message_cta) == null ||
              (i = i.wa_flow) == null
                ? void 0
                : i.automated_response_data;
          (r("setByPath")(
            s,
            [
              "text_format",
              "message",
              "automated_greeting_message_cta",
              "wa_flow",
              "automated_response_data",
            ],
            {
              text: (l = u == null ? void 0 : u.text) != null ? l : null,
              cta_info: a != null ? a : null,
            },
          ),
            n(s));
        },
        [n, e, t],
      );
    }
    function y(e, t, n, a, i) {
      return d(
        function (l) {
          var s = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(e, t);
          (r("setByPath")(
            s,
            [
              "text_format",
              "message",
              "automated_greeting_message_cta",
              "wa_flow",
              "automated_response_data",
            ],
            l ? { text: a, cta_info: i != null ? i : null } : null,
          ),
            n(s));
        },
        [n, e, t, a, i],
      );
    }
    function C(e) {
      return d(
        function (t, n) {
          var o = t,
            a = r("adsMessengerDataModelSetInThreadCarouselIsEnabled")(o, n);
          (n ||
            (a = r("adsMessengerDataModelSetInThreadCarouselProducts")(a, [])),
            e(a));
        },
        [e],
      );
    }
    function b(e, t) {
      return d(
        function () {
          var n = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(
            e,
            t != null ? t : "",
          );
          return r("adsMessengerDataModelGetWelcomeMessage")(n);
        },
        [e, t],
      );
    }
    function v(e) {
      if (e == null) return !1;
      var t = r("tryParseJSONMixed")(e);
      if (t == null || typeof t != "object") return !1;
      var n = t.screens;
      if (!Array.isArray(n)) return !1;
      for (var o of n)
        if (!(o == null || typeof o != "object")) {
          var a = o.layout;
          if (!(a == null || typeof a != "object")) {
            var i = a.children;
            if (Array.isArray(i)) {
              var l = i[0];
              if (!(l == null || typeof l != "object")) {
                var s = l.children;
                if (Array.isArray(s)) {
                  for (var u of s)
                    if (u != null && typeof u == "object" && u.required === !0)
                      return !0;
                }
              }
            }
          }
        }
      return !1;
    }
    function S() {
      return e !== void 0
        ? e
        : (e = n(
            "CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation.graphql",
          ));
    }
    function R(e, t, n, a, l, u, m, p, _, f, g, h, y, C, b, S, R, L, E) {
      S === void 0 && (S = !1);
      var k = r("useGeoToaster")(),
        I = k.add;
      return d(
        function () {
          var d,
            k = function (n) {
              o("CTWAFlowsDiagnostics").logCTWAFlowsSaveStage(
                n,
                g,
                e != null,
                S,
                E,
              );
            };
          if ((k("attempt"), a == null || t == null)) {
            k(a == null ? "missing_flow_json" : "missing_waba");
            return;
          }
          if (
            (r("AdsInterfacesLogger").log({
              data: y,
              eventName: "ctwa_flows_am_save_flow_click",
            }),
            !v(a))
          ) {
            (k("validation_failed"),
              I(
                c.jsx(r("GeoToast.react"), {
                  description: s._(/*BTDS*/ ""),
                  heading: s._(/*BTDS*/ ""),
                  status: "error",
                }),
              ),
              r("AdsInterfacesLogger").log({
                data: y,
                eventName: "ctwa_flows_am_save_flow_validation_error",
              }));
            return;
          }
          if ((R == null ? void 0 : R()) === !1) {
            k("save_rejected");
            return;
          }
          var T =
            (d = u == null ? void 0 : u.title) != null
              ? d
              : s._(/*BTDS*/ "").toString();
          (k("mutation_started"),
            m({
              onCompleted: function (t, n) {
                if (n != null && n.length > 0) {
                  k("mutation_failed");
                  for (var e of n)
                    I(
                      c.jsx(r("GeoToast.react"), {
                        description: e.message,
                        heading: s._(/*BTDS*/ ""),
                        status: "error",
                      }),
                    );
                  (r("AdsInterfacesLogger").log({
                    data: babelHelpers.extends({}, y, {
                      message: n
                        .map(function (e) {
                          return e.message;
                        })
                        .join("; "),
                    }),
                    eventName: "ctwa_flows_am_save_flow_error",
                  }),
                    L == null || L());
                  return;
                }
                k("mutation_completed");
                var o = function () {
                  r("AdsInterfacesLogger").log({
                    data: y,
                    eventName: "ctwa_flows_am_save_flow_success",
                  });
                };
                (p == null && k("no_attachment_callback"),
                  S
                    ? p == null ||
                      p(
                        t.xfb_wa_flows_hsm_save_flow.id,
                        a,
                        l,
                        T,
                        "NAVIGATE",
                        _,
                        C,
                        b,
                        function () {
                          (k("attachment_acknowledged"), o());
                        },
                      )
                    : (p == null ||
                        p(
                          t.xfb_wa_flows_hsm_save_flow.id,
                          a,
                          l,
                          T,
                          "NAVIGATE",
                          _,
                          C,
                          b,
                        ),
                      p != null && k("local_callback_returned"),
                      o(),
                      f("transition")));
              },
              onError: function (t) {
                var e, n, o;
                (k("mutation_failed"),
                  L == null || L(),
                  r("AdsInterfacesLogger").log({
                    data: babelHelpers.extends({}, y, {
                      message:
                        ((e = t.name) != null ? e : "Error") +
                        ": " +
                        t.message +
                        " | description: " +
                        ((n = t.description) != null ? n : "") +
                        " | stack: " +
                        ((o = t.stack) != null ? o : ""),
                    }),
                    eventName: "ctwa_flows_am_save_flow_error",
                  }),
                  I(
                    c.jsx(r("GeoToast.react"), {
                      description: t.description,
                      heading: s._(/*BTDS*/ ""),
                      status: "error",
                    }),
                  ));
              },
              variables: {
                input: {
                  ad_account_id: n,
                  ad_objective: o(
                    "AdsAdvantageAudienceUtils",
                  ).convertObjectiveForGraphQL(h),
                  creation_source: "ADS_MANAGER_CTWA",
                  flow_id: g ? null : e,
                  flow_json: o("WAMFlowsHSMEditorUtils").formatFlowjForDisplay(
                    a,
                  ),
                  flow_template_name: r("nullthrows")(
                    o("XFBWAFlowsTemplateUtils.facebook").fromJSEnum(
                      "Custom form",
                    ),
                    "Unexpected null value [" + i.id + "][#1]",
                  ),
                  template_category: "MARKETING",
                  template_name: l,
                  waba_id: t,
                },
              },
            }));
        },
        [
          a,
          y,
          u == null ? void 0 : u.title,
          m,
          h,
          g,
          e,
          l,
          t,
          p,
          _,
          f,
          I,
          C,
          b,
          n,
          S,
          E,
          L,
          R,
        ],
      );
    }
    ((l.useOnSaveSuccessCallback = m),
      (l.getFetchKeyFlowData = _),
      (l.useOnGreetingTextChangeCallback = f),
      (l.useOnAutomatedResponseTextChangeCallback = g),
      (l.useOnAutomatedResponseCTAChangeCallback = h),
      (l.useOnCompletionMessageToggleCallback = y),
      (l.useGetOnAdsMessagingDestinationInThreadCarouselChangeCallback = C),
      (l.useGetGreetingTextCallback = b),
      (l.flowHasRequiredField = v),
      (l.getSaveFlowMutation = S),
      (l.useGetCommitFlowMutationCallback = R));
  },
  226,
);
