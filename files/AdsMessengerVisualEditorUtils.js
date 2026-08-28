__d(
  "AdsMessengerVisualEditorUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsFetaStatusData",
    "AdsGetDefaultGreetingText",
    "AdsGetDefaultIceBreakers",
    "AdsGetStandardTemplateDefaultJSONHelper",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsMessengerConstants",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONTemplateType",
    "AdsMessengerPartialAutomatedCreationTypes",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsPageStore",
    "AsyncRequest",
    "ClickToMessageCTMPerformanceFeatureGating",
    "DateTime",
    "GeoButton.react",
    "GeoGuidanceCard.react",
    "GeoGuidanceCardContent.react",
    "GeoGuidanceCardHeader.react",
    "GeoLink.react",
    "GeoModal.react",
    "GeoModalFooter.react",
    "GeoModalHeader.react",
    "GeoSection.react",
    "GeoText.react",
    "XInstagramSendJSONControllerRouteBuilder",
    "XMessengerSendJSONControllerRouteBuilder",
    "adsMessengerValidationIsL1MessengerAd",
    "getByPath",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, n, a, i, l) {
      var s = o(
        "ClickToMessageCTMPerformanceFeatureGating",
      ).isEligibleForLeveragingInboxFAQsInAM(t, e, i, l);
      return r("AdsGetStandardTemplateDefaultJSONHelper")(
        e,
        t,
        i === "messenger" ? l : null,
        n,
        a,
        s,
        void 0,
        i,
      );
    }
    function d(e, t) {
      var n,
        a,
        i,
        l,
        u = o("AdsGetDefaultGreetingText").getDefaultGreetingText(e, t),
        c = [
          ((n = {}),
          (n.title = s._(/*BTDS*/ "Get started")),
          (n.content_type = "text"),
          n),
        ];
      return (
        (l = {}),
        (l.type = "VISUAL_EDITOR"),
        (l.version = 2),
        (l.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).GET_STARTED),
        (l.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
        (l.text_format =
          ((i = {}),
          (i.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (i.message = ((a = {}), (a.quick_replies = c), (a.text = u), a)),
          i)),
        (l.is_eligible_for_customized_greeting = !1),
        (l.user_edit = !1),
        (l.surface = "visual_editor_new"),
        l
      );
    }
    function m(e, t, n) {
      var o = t
          ? n === !0
            ? s._(
                /*BTDS*/ "In-line previews are not currently supported for this JSON format.",
              )
            : s._(
                /*BTDS*/ "In-line previews are not currently supported for this JSON format. To see a preview of your message, you can send a test version to yourself in Messenger.",
              )
          : s._(
              /*BTDS*/ "In-line previews are not currently supported with JSON creation. To see a preview of your message, you can send a test version to yourself in Messenger.",
            ),
        a = s._(/*BTDS*/ "Preview in Messenger");
      return u.jsx("div", {
        className: "x14vqqas xbmvrgn xat24cr x1diwwjn",
        children: u.jsx(r("GeoGuidanceCard.react"), {
          header: u.jsx(r("GeoGuidanceCardHeader.react"), { heading: "" }),
          status: "active-feedback",
          children: u.jsxs(r("GeoGuidanceCardContent.react"), {
            children: [
              u.jsx(r("GeoText.react"), { children: o }),
              u.jsx(r("GeoLink.react"), {
                onClick: e,
                children: n === !0 ? "" : a,
              }),
            ],
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return (
        s._(/*BTDS*/ "Start conversations").toString() +
        " " +
        r("DateTime").localNow().format("m/d/y")
      );
    }
    function _() {
      return (
        s._(/*BTDS*/ "JSON").toString() +
        " " +
        r("DateTime").localNow().format("m/d/y")
      );
    }
    function f(e) {
      return r("getByPath")(e, ["type"]) === "VISUAL_EDITOR";
    }
    function g(e) {
      return !f(e);
    }
    function h(e, t, n) {
      if (!e) return null;
      var o = s._(/*BTDS*/ "Preview In Messenger"),
        a = s._(
          /*BTDS*/ "A message has been sent to you from {page name}. Open Messenger on your phone to preview what your experience will look like to customers.",
          [
            s._param(
              "page name",
              r("isStringNullOrEmpty")(t) ? "your page" : t,
            ),
          ],
        );
      return u.jsx(r("GeoModal.react"), {
        "data-testid": void 0,
        footer: u.jsx(r("GeoModalFooter.react"), {
          "data-testid": void 0,
          logging: { surface: "ads_messenger_visual_editor_utils_dfdb" },
          primaryButton: u.jsx(r("GeoButton.react"), {
            "data-testid": void 0,
            label: s._(/*BTDS*/ "OK"),
            logging: { surface: "ads_messenger_visual_editor_utils_9efb" },
            onClick: n,
            variant: "primary",
          }),
        }),
        header: u.jsx(r("GeoModalHeader.react"), { heading: o }),
        logging: { surface: "ads_messenger_visual_editor_utils_45a8" },
        onHide: n,
        children: u.jsx(r("GeoSection.react"), {
          children: u.jsx(r("GeoText.react"), { children: a }),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var n = s._(/*BTDS*/ "Preview in Messenger error");
      return u.jsx(r("GeoModal.react"), {
        "data-testid": void 0,
        footer: u.jsx(r("GeoModalFooter.react"), {
          "data-testid": void 0,
          logging: { surface: "ads_messenger_visual_editor_utils_446e" },
          primaryButton: u.jsx(r("GeoButton.react"), {
            "data-testid": void 0,
            label: s._(/*BTDS*/ "OK"),
            logging: { surface: "ads_messenger_visual_editor_utils_c4f9" },
            onClick: t,
            variant: "primary",
          }),
        }),
        header: u.jsx(r("GeoModalHeader.react"), { heading: n }),
        logging: { surface: "ads_messenger_visual_editor_utils_7fbf" },
        onHide: t,
        children: u.jsx(r("GeoSection.react"), { children: e }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var n = s._(/*BTDS*/ "Preview in Instagram error");
      return u.jsx(r("GeoModal.react"), {
        "data-testid": void 0,
        footer: u.jsx(r("GeoModalFooter.react"), {
          "data-testid": void 0,
          logging: {
            surface: "ads_messenger_visual_editor_utils_ig_error_footer",
          },
          primaryButton: u.jsx(r("GeoButton.react"), {
            "data-testid": void 0,
            label: s._(/*BTDS*/ "OK"),
            logging: {
              surface: "ads_messenger_visual_editor_utils_ig_error_btn",
            },
            onClick: t,
            variant: "primary",
          }),
        }),
        header: u.jsx(r("GeoModalHeader.react"), { heading: n }),
        logging: { surface: "ads_messenger_visual_editor_utils_ig_error" },
        onHide: t,
        children: u.jsx(r("GeoSection.react"), { children: e }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t, n) {
      if (!e) return null;
      var a = r("AdsFetaStatusData").is_feta_account
          ? "your profile"
          : "your account",
        i = s._(
          /*BTDS*/ "A message has been sent to you from {ig account name}. Open Instagram on your phone to preview what your experience will look like to customers.",
          [s._param("ig account name", r("isStringNullOrEmpty")(t) ? a : t)],
        );
      return u.jsx(r("GeoModal.react"), {
        "data-testid": void 0,
        footer: u.jsx(r("GeoModalFooter.react"), {
          "data-testid": void 0,
          logging: { surface: "ads_messenger_visual_editor_utils_ff0e" },
          primaryButton: u.jsx(r("GeoButton.react"), {
            "data-testid": void 0,
            label: s._(/*BTDS*/ "OK"),
            logging: { surface: "ads_messenger_visual_editor_utils_74b6" },
            onClick: n,
            variant: "primary",
          }),
        }),
        header: u.jsx(r("GeoModalHeader.react"), {
          heading: o("AdsMessengerConstants").PREVIEW_IG,
        }),
        logging: { surface: "ads_messenger_visual_editor_utils_1838" },
        onHide: n,
        children: u.jsx(r("GeoSection.react"), { children: i }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t, n, o, a) {
      if (t)
        try {
          return JSON.parse(t);
        } catch (t) {
          return r("AdsGetStandardTemplateDefaultJSONWithDestination")(
            e,
            n,
            o,
            null,
            null,
            a,
          );
        }
      else
        return r("AdsGetStandardTemplateDefaultJSONWithDestination")(
          e,
          n,
          o,
          null,
          null,
          a,
        );
    }
    function S(e, t) {
      var n = v(e, t);
      return x(n) !== "VISUAL_EDITOR";
    }
    function R(e, t, n, a, i) {
      return e ===
        r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW ||
        e ===
          r("AdsMessengerVisualEditorLandingScreenType")
            .LITE_WEIGHT_AUTOMATED_CHAT
        ? i === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
          i === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
          ? o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.CTD_LEAD_GEN
          : o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.CTM_LEAD_GEN
        : e ===
            r("AdsMessengerVisualEditorLandingScreenType").MARKETING_MESSAGES
          ? o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.MARKETING_MESSAGES
          : (n != null && n !== "") || S(t, a)
            ? o("AdsMessengerPartialAutomatedCreationTypes")
                .CreateNewSelectorValue.JSON
            : e === r("AdsMessengerVisualEditorLandingScreenType").CALL_PROMPT
              ? o("AdsMessengerPartialAutomatedCreationTypes")
                  .CreateNewSelectorValue.CALL_PROMPT
              : e === r("AdsMessengerVisualEditorLandingScreenType").CTWA_FLOWS
                ? o("AdsMessengerPartialAutomatedCreationTypes")
                    .CreateNewSelectorValue.CTWA_FLOWS
                : o("AdsMessengerPartialAutomatedCreationTypes")
                    .CreateNewSelectorValue.CREATE_NEW;
    }
    function L(e, t, n, o) {
      return (
        n === void 0 && (n = r("AdsMessengerJSONMediaFormatType").IMAGE),
        o === void 0 && (o = r("AdCampaignDestination").MESSENGER),
        k(e, t, n, o)
      );
    }
    function E(e) {
      if (e == null) {
        var t = s._(/*BTDS*/ "I'd like to learn more");
        return [{ title: t, content_type: "text" }];
      }
      return e.map(function (e) {
        return { title: e, content_type: "text" };
      });
    }
    function k(e, t, n, a) {
      var i, l, s, u, c, d, m, p, _, f, g, h, y, C, b;
      n === void 0 && (n = r("AdsMessengerJSONMediaFormatType").IMAGE);
      var v = I(e),
        S = o("AdsGetDefaultIceBreakers").getDefaultIceBreakers(e, a),
        R = o("AdsGetDefaultGreetingText").getDefaultGreetingText(e, a),
        L = E(v),
        k =
          a === r("AdCampaignDestination").WHATSAPP
            ? ((s = {}),
              (s.text_format =
                ((l = {}),
                (l.customer_action_type = r(
                  "AdsMessengerVisualEditorCustomerActionType",
                ).ICE_BREAKERS),
                (l.message = ((i = {}), (i.ice_breakers = S), (i.text = R), i)),
                l)),
              s)
            : ((C = {}),
              (C.image_format =
                ((p = {}),
                (p.customer_action_type = r(
                  "AdsMessengerVisualEditorCustomerActionType",
                ).QUICK_REPLIES),
                (p.message =
                  ((m = {}),
                  (m.attachment =
                    ((d = {}),
                    (d.type = "template"),
                    (d.payload =
                      ((c = {}),
                      (c.template_type = r(
                        "AdsMessengerJSONTemplateType",
                      ).GENERIC),
                      (c.elements = [
                        ((u = {}), (u.title = ""), (u.buttons = []), u),
                      ]),
                      c)),
                    d)),
                  (m.quick_replies = L),
                  (m.text = R),
                  m)),
                p)),
              (C.text_format =
                ((f = {}),
                (f.customer_action_type = r(
                  "AdsMessengerVisualEditorCustomerActionType",
                ).QUICK_REPLIES),
                (f.message =
                  ((_ = {}), (_.quick_replies = L), (_.text = R), _)),
                f)),
              (C.video_format =
                ((y = {}),
                (y.customer_action_type = r(
                  "AdsMessengerVisualEditorCustomerActionType",
                ).QUICK_REPLIES),
                (y.message =
                  ((h = {}),
                  (h.attachment =
                    ((g = {}),
                    (g.type = r("AdsMessengerJSONMediaFormatType").VIDEO),
                    (g.payload = {}),
                    g)),
                  (h.quick_replies = L),
                  (h.text = R),
                  h)),
                y)),
              (C.is_eligible_for_customized_greeting = !1),
              C);
      return babelHelpers.extends(
        ((b = {}),
        (b.type = "VISUAL_EDITOR"),
        (b.version = 2),
        (b.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).WELCOME_MESSAGE),
        (b.media_type = n),
        (b.user_edit = !1),
        (b.surface = t),
        b),
        k,
      );
    }
    function I(e) {
      var t = r("isStringNullOrEmpty")(e)
        ? null
        : r("AdsPageStore").getLoadObject(e).getValue();
      return t ? t.messenger_ads_default_quick_replies : null;
    }
    function T() {
      return {
        message: {
          attachment: {
            type: "template",
            payload: {
              template_type: "button",
              text: "Hi! Please let us know how we can help you",
              buttons: [
                {
                  title: "Show me the product!",
                  type: "web_url",
                  url: "http://www.example.com/",
                },
                {
                  title: "Tell me more",
                  type: "postback",
                  payload: "USER_DEFINED_PAYLOAD",
                },
              ],
            },
          },
        },
      };
    }
    function D(e) {
      var t,
        n,
        a,
        i,
        l = o("AdsGetDefaultGreetingText").getDefaultGreetingText(
          e,
          r("AdCampaignDestination").MESSENGER,
        );
      return (
        (i = {}),
        (i.type = "VISUAL_EDITOR"),
        (i.version = 2),
        (i.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).CALL_PROMPT),
        (i.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
        (i.text_format =
          ((a = {}),
          (a.message =
            ((n = {}),
            (n.text = l),
            (n.call_prompt_data =
              ((t = {}),
              (t.call_prompt_message = String(
                o("AdsMessengerConstants").DEFAULT_CALL_PROMPT_MESSAGE,
              )),
              t)),
            n)),
          a)),
        (i.user_edit = !1),
        i
      );
    }
    function x(e) {
      return e === null ||
        typeof e != "object" ||
        e instanceof Array ||
        (e.type !== "VISUAL_EDITOR" && e.type !== "JSON_SETUP")
        ? "LEGACY_DATA"
        : e.type;
    }
    function $(e) {
      if (e == null) return null;
      var t = JSON.parse(e);
      return r("getByPath")(t, ["type"]);
    }
    function P(e) {
      if (e == null) return r("AdsMessengerJSONMediaFormatType").TEXT;
      var t = JSON.parse(e),
        n = r("getByPath")(t, [
          "image_format",
          "message",
          "attachment",
          "payload",
          "elements",
        ]),
        o = n ? r("getByPath")(n[0], ["image_hash"]) : null;
      if (!r("isStringNullOrEmpty")(o))
        return r("AdsMessengerJSONMediaFormatType").IMAGE;
      var a = r("getByPath")(t, [
        "video_format",
        "message",
        "attachment",
        "payload",
        "attachment_id",
      ]);
      return r("isStringNullOrEmpty")(a)
        ? r("AdsMessengerJSONMediaFormatType").TEXT
        : r("AdsMessengerJSONMediaFormatType").VIDEO;
    }
    function N(e) {
      return r("isStringNullOrEmpty")(e)
        ? o("AdsMessengerConstants").WELCOME_MESSAGE
        : o("AdsMessengerConstants").JSON_BLOB;
    }
    function M(e) {
      var t,
        n = r("isStringNullOrEmpty")(e)
          ? null
          : r("AdsPageStore").getLoadObject(e).getValue();
      return (t = n == null ? void 0 : n.messaging_apps_info) != null ? t : [];
    }
    function w(e) {
      var t,
        n = r("isStringNullOrEmpty")(e)
          ? null
          : r("AdsPageStore").getLoadObject(e).getValue();
      return (t = n == null ? void 0 : n.whatsapp_messaging_apps_info) != null
        ? t
        : [];
    }
    function A(e, t, n, o, a, i, l, u) {
      n();
      var c = null;
      u === r("AdCampaignDestination").INSTAGRAM_DIRECT
        ? (c = r("XInstagramSendJSONControllerRouteBuilder").buildURL({
            json: JSON.stringify(e || T()),
            page_id: t,
          }))
        : (c = r("XMessengerSendJSONControllerRouteBuilder").buildURL({
            json: JSON.stringify(e || T()),
            page_id: t,
            object_story_id: i != null ? i : "",
            ad_id: l != null ? l : "",
          }));
      var d = s._(/*BTDS*/ "Invalid parameter");
      new (r("AsyncRequest"))()
        .setURI(c)
        .setMethod("POST")
        .setHandler(function (e) {
          e.payload
            ? e.payload.error
              ? a(e.payload.error)
              : e.payload.result === "success"
                ? o(e.payload.result)
                : e.payload.result === "failure" && a(d)
            : a(d);
        })
        .send();
    }
    function F(e) {
      return e.some(function (e) {
        return r("adsMessengerValidationIsL1MessengerAd")(e);
      });
    }
    ((l.getStandardTemplateDefaultJSON = c),
      (l.getStandardGetStartedTemplateDefaultJSON = d),
      (l.getPreviewDisabledNotice = m),
      (l.getDefaultStartConversationsTemplateName = p),
      (l.getDefaultJSONTemplateName = _),
      (l.isVisualEditorData = f),
      (l.isJSONData = g),
      (l.showMessengerPreviewSuccessDialog = h),
      (l.showMessengerPreviewErrorDialog = y),
      (l.showInstagramPreviewErrorDialog = C),
      (l.showInstagramPreviewSuccessDialog = b),
      (l.parseWelcomeMessage = v),
      (l.isJSONCreateNewType = S),
      (l.getCreateNewSelectorType = R),
      (l.getVisualEditorDefaultJSON = L),
      (l.getVisualEditorDefaultJSONHelper = k),
      (l.getDefaultQuickReplies = I),
      (l.getDefaultJSON = T),
      (l.getDefaultCallPromptJSON = D),
      (l.getWelcomeMessageDataType = x),
      (l.getTemplateType = $),
      (l.getGreetingType = P),
      (l.getMessageTypeFromMessage = N),
      (l.getMessagingApps = M),
      (l.getAppsSubscribedToWABAByWhatsAppPhoneNumber = w),
      (l.getJSONSend = A),
      (l.isMessagesInlineVisualEditorDisabled = F));
  },
  226,
);
