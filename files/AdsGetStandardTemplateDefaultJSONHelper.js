__d(
  "AdsGetStandardTemplateDefaultJSONHelper",
  [
    "fbt",
    "AdsAIGenIcebreakersValidationUtils",
    "AdsGetDefaultGreetingText",
    "AdsGetDefaultIceBreakers",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONTemplateType",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLandingScreenType",
    "ClickToMessageCTMPerformanceFeatureGating",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i, l, u, c) {
      var d,
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
        L,
        E,
        k,
        I,
        T,
        D = a == null ? void 0 : a.icebreakers,
        x =
          (d = a == null ? void 0 : a.welcomeMessage) != null
            ? d
            : o("AdsGetDefaultGreetingText").getDefaultGreetingText(e, t),
        $ =
          (m = D == null ? void 0 : D.icebreakers) != null
            ? m
            : o("AdsGetDefaultIceBreakers").getDefaultIceBreakers(
                e,
                t,
                void 0,
                c,
                n,
              ),
        P = [
          ((p = {}),
          (p.title = s._(/*BTDS*/ "I'd like to learn more").toString()),
          (p.content_type = "text"),
          (p.response_type = null),
          p),
        ],
        N = r("isFalsey")(D) && r("isTruthy")(l),
        M =
          r("isFalsey")(D) &&
          o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).isEligibleForLeveragingInboxFAQsInAM(t, e, c, n);
      if (u === !0) {
        var w, A, F, O, B, W, q, U, V, H, G, z;
        return (
          (z = {}),
          (z.type = "VISUAL_EDITOR"),
          (z.version = 2),
          (z.landing_screen_type = r(
            "AdsMessengerVisualEditorLandingScreenType",
          ).WELCOME_MESSAGE),
          (z.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
          (z.text_format =
            ((A = {}),
            (A.customer_action_type = r(
              "AdsMessengerVisualEditorCustomerActionType",
            ).WHATSAPP_FLOW),
            (A.message = ((w = {}), (w.text = x), w)),
            A)),
          (z.image_format =
            ((q = {}),
            (q.customer_action_type = r(
              "AdsMessengerVisualEditorCustomerActionType",
            ).NONE),
            (q.message =
              ((W = {}),
              (W.attachment =
                ((B = {}),
                (B.type = "template"),
                (B.payload =
                  ((O = {}),
                  (O.template_type = r("AdsMessengerJSONTemplateType").GENERIC),
                  (O.elements = [
                    ((F = {}),
                    (F.title = ""),
                    (F.buttons = []),
                    (F.image_hash = ""),
                    F),
                  ]),
                  O)),
                B)),
              (W.text = ""),
              W)),
            q)),
          (z.video_format =
            ((G = {}),
            (G.customer_action_type = r(
              "AdsMessengerVisualEditorCustomerActionType",
            ).NONE),
            (G.message =
              ((H = {}),
              (H.attachment =
                ((V = {}),
                (V.type = r("AdsMessengerJSONMediaFormatType").VIDEO),
                (V.payload = ((U = {}), (U.attachment_id = ""), U)),
                V)),
              (H.text = ""),
              H)),
            G)),
          (z.user_edit = !1),
          (z.surface = "visual_editor_new"),
          (z.is_eligible_for_customized_greeting = !1),
          (z.is_user_editing = !1),
          (z.is_eligible_for_leveraging_inbox_faqs = M),
          z
        );
      }
      return (
        (T = {}),
        (T.type = "VISUAL_EDITOR"),
        (T.version = 2),
        (T.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).WELCOME_MESSAGE),
        (T.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
        (T.text_format =
          ((f = {}),
          (f.customer_action_type = r("isTruthy")(N)
            ? r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS
            : r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS),
          (f.message =
            ((_ = {}),
            (_.ice_breakers = $.map(function (e) {
              var t, n;
              return {
                title: (t = e.title) == null ? void 0 : t.toString(),
                response: (n = e.response) == null ? void 0 : n.toString(),
              };
            })),
            (_.quick_replies = []),
            (_.text = x),
            _)),
          f)),
        (T.image_format =
          ((b = {}),
          (b.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (b.message =
            ((C = {}),
            (C.attachment =
              ((y = {}),
              (y.type = "template"),
              (y.payload =
                ((h = {}),
                (h.template_type = r("AdsMessengerJSONTemplateType").GENERIC),
                (h.elements = [
                  ((g = {}),
                  (g.title = ""),
                  (g.buttons = []),
                  (g.image_hash = ""),
                  g),
                ]),
                h)),
              y)),
            (C.quick_replies = P),
            (C.text = x),
            C)),
          b)),
        (T.video_format =
          ((L = {}),
          (L.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (L.message =
            ((R = {}),
            (R.attachment =
              ((S = {}),
              (S.type = r("AdsMessengerJSONMediaFormatType").VIDEO),
              (S.payload = ((v = {}), (v.attachment_id = ""), v)),
              S)),
            (R.quick_replies = P),
            (R.text = x),
            R)),
          L)),
        (T.user_edit = !1),
        (T.surface = "visual_editor_new"),
        (T.ai_generated_icebreaker_toggle_enabled = r("isTruthy")(i)
          ? !o(
              "AdsAIGenIcebreakersValidationUtils",
            ).didIcebreakersFetchFailOrNotEligible(
              D == null ? void 0 : D.icebreakers,
            )
          : null),
        (T.ai_gen_conversation_model_version =
          D == null || (E = D.modelVersion) == null ? void 0 : E.valueOf()),
        (T.ai_gen_welcome_message_model_version =
          (k = a == null ? void 0 : a.welcomeMessageModelVersion) != null
            ? k
            : null),
        (T.ai_gen_nudge_model_version =
          (I = a == null ? void 0 : a.nudgeModelVersion) != null ? I : null),
        (T.is_eligible_for_customized_greeting = !1),
        (T.is_user_editing = !1),
        (T.is_eligible_for_leveraging_inbox_faqs = M),
        T
      );
    }
    l.default = e;
  },
  226,
);
