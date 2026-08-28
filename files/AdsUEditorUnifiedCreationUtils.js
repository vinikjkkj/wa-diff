__d(
  "AdsUEditorUnifiedCreationUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsFakePageBackedInstagramAccount",
    "AdsFakeProfileBackedInstagramAccount",
    "AdsMessagesUnifiedCreationTypes",
    "AdsMessengerConstants",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsPageSelectorAuxData",
    "AdsPageUtils",
    "AdsReachFrequencyGKUtils",
    "AdsUEditorMessagingDestinationUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "AutomatedGreetingMessageTypes",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "Image.react",
    "Promise",
    "SearchableEntry",
    "adsMessengerDataModelGetCTWAAgmCtaType",
    "bx",
    "debounce",
    "gkx",
    "isStringNotNullAndNotWhitespaceOnly",
    "isStringNullOrEmpty",
    "isTruthy",
    "isWhatsAppOrInstagramOrComboDestination",
    "objectValues",
    "promiseDone",
    "react",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t;
      return (
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.additional_data) == null
          ? void 0
          : t.is_click_to_message) === !0
      );
    }
    function m(e) {
      var t, n;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
          r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION ||
        ((n = e.creative) == null ||
        (n = n.asset_feed_spec) == null ||
        (n = n.additional_data) == null
          ? void 0
          : n.is_click_to_message) === !0
      );
    }
    function p(e) {
      return e === r("AdCampaignDestination").MESSENGER ||
        o(
          "AdsUEditorMessagingDestinationUtils",
        ).isMultiDestinationWithMessenger(e)
        ? "MESSAGE_PAGE"
        : e === r("AdCampaignDestination").WHATSAPP ||
            o(
              "AdsUEditorMessagingDestinationUtils",
            ).isMultiDestinationWithWhatsApp(e)
          ? "WHATSAPP_MESSAGE"
          : e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
              e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT ||
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).isMultiDestinationWithInstagram(e)
            ? "INSTAGRAM_MESSAGE"
            : null;
    }
    function _(e) {
      var t;
      switch (e) {
        case r("AdCampaignDestination").MESSENGER:
          t = o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
            .MESSENGER;
          break;
        case r("AdCampaignDestination").WHATSAPP:
          t = o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
            .WHATSAPP;
          break;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          t = o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
            .INSTAGRAM_DIRECT;
          break;
        default:
          t = o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
            .MESSENGER;
          break;
      }
      return t;
    }
    function f(e) {
      var t = Object.values(e);
      return t.length > 0 ? t[0] : null;
    }
    function g(e) {
      var t = r("objectValues")(e);
      return t.length > 0 ? t[0] : null;
    }
    function h(e, t) {
      var n = r("gkx")("11094");
      return e.subtract(
        n
          ? ["destinationPageField", "tokenizedDescriptionField"]
          : [
              "destinationPageField",
              "linkDescriptionField",
              "tokenizedDescriptionField",
            ],
      );
    }
    function y(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        (t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN ||
          t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW)
      );
    }
    function C(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        t === r("AdsMessengerJSONMediaFormatType").IMAGE
      );
    }
    function b(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        t === r("AdsMessengerJSONMediaFormatType").VIDEO
      );
    }
    function v(e) {
      var t = {};
      for (var n of e) {
        var o = n[0],
          a = n[1],
          i = a.instagram_accounts;
        if (i != null) {
          var l = i.data[0];
          l != null &&
            !r("isStringNullOrEmpty")(l.id) &&
            l.is_published &&
            (t[o] = l);
        }
      }
      return t;
    }
    function S(e, t) {
      var n =
        e === r("AdsAPIObjectives").MESSAGES ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        (t === !0 &&
          (o("AdsBrandAwarenessUtils").isBrandObjective(e) ||
            e === r("AdsAPIObjectives").LINK_CLICKS));
      return n;
    }
    function R(e) {
      var t = {
        iconURI: o("AdsPageUtils").getPageIconURI(e),
        isPageAdmin: o("AdsPageUtils").isAdmin(e),
        hasPageAdvertisePermission: !0,
        hasWhatsAppBusinessNumber: e.has_whatsapp_business_number,
        hasWhatsAppNumber: e.has_whatsapp_number,
        pageToken: e.page_token,
      };
      return new (r("SearchableEntry"))({
        auxiliaryData: new (r("AdsPageSelectorAuxData"))(t),
        keywordString: e.id,
        title: o("AdsPageUtils").getPageUIName(e) || "",
        uniqueID: e.id,
        photo: o("AdsPageUtils").getPageIconURI(e),
      });
    }
    function L(e) {
      return new (r("SearchableEntry"))({
        keywordString: e.id,
        title: e.username || "",
        subtitle: E(e.id, e.tooltip),
        uniqueID: r("isTruthy")(e.id_v2) ? e.id_v2 : e.id,
        photo: e.profile_pic,
      });
    }
    function E(e, t) {
      return e === r("AdsFakePageBackedInstagramAccount").id ||
        e === r("AdsFakeProfileBackedInstagramAccount").id
        ? t
        : s._(/*BTDS*/ "ID: {IG id}", [s._param("IG id", e)]);
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t, n, a, i, l) {
      if (
        e === r("AdCampaignDestination").WHATSAPP &&
        (t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          t === r("AdsAPIObjectives").OUTCOME_SALES)
      )
        return !1;
      var s =
        e !== r("AdCampaignDestination").WHATSAPP
          ? o(
              "AdsUEditorMessagingDestinationUtils",
            ).isWhatsAppOrWhatsAppAndIGComboDestination(e)
          : r("isWhatsAppOrInstagramOrComboDestination")(e);
      if (
        (t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT && s) ||
        (t === r("AdsAPIObjectives").OUTCOME_SALES && s) ||
        (t === r("AdsAPIObjectives").OUTCOME_AWARENESS && s) ||
        (t === r("AdsAPIObjectives").LINK_CLICKS &&
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isWhatsAppOrWhatsAppAndIGComboDestination(e)) ||
        a === !0
      )
        return !0;
      var u =
        t === r("AdsAPIObjectives").OUTCOME_LEADS &&
        (e === r("AdCampaignDestination").MESSENGER ||
          e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT) &&
        l === r("AdsAPIOptimizationGoals").LEAD_GENERATION &&
        o(
          "CTXUnstructuredLeadsAdsStoreUtils",
        ).enableUnstructuredLeadsOptimization(i, t, e);
      return u ? !1 : n;
    }
    function I(e, t, n) {
      var a = !o(
        "AdsUEditorMessagingDestinationUtils",
      ).destinationIncludesMessenger(e);
      return (
        t !== r("AdsAPIObjectives").OUTCOME_SALES &&
        !a &&
        !(
          (t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
            t === r("AdsAPIObjectives").LINK_CLICKS) &&
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithMessenger(e) &&
          !n
        )
      );
    }
    function T(e, t) {
      return (
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
        t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
      );
    }
    function D(e, t, n) {
      return t === r("AdsAPIObjectives").OUTCOME_LEADS &&
        (e === r("AdCampaignDestination").MESSENGER ||
          e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT) &&
        o(
          "CTXUnstructuredLeadsAdsStoreUtils",
        ).enableUnstructuredLeadsOptimization(n, t, e)
        ? !0
        : t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
          ? !1
          : e === r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP ||
            e ===
              r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER ||
            e ===
              r("AdCampaignDestination")
                .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP ||
            e === r("AdCampaignDestination").MESSENGER ||
            e === r("AdCampaignDestination").INSTAGRAM_DIRECT;
    }
    function x(e) {
      var t =
        e === r("AdCampaignDestination").MESSENGER ||
        o(
          "AdsUEditorMessagingDestinationUtils",
        ).isMultiDestinationWithMessenger(e);
      return t;
    }
    function $(e, t, n, o) {
      return e !== r("AdCampaignDestination").WHATSAPP
        ? t ===
            r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE &&
            n !== "JSON_SETUP"
        : t ===
            r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE ||
            (o == null ? void 0 : o.welcome_message_edited) === !0;
    }
    function P(e, t) {
      var n,
        a,
        i = e == null ? void 0 : e.media_type;
      if (i === r("AdsMessengerJSONMediaFormatType").IMAGE)
        return o("AdsMessengerConstants").IMAGE_INCLUDED_PLACEHOLDER;
      if (i === r("AdsMessengerJSONMediaFormatType").VIDEO)
        return o("AdsMessengerConstants").VIDEO_INCLUDED_PLACEHOLDER;
      if (
        i === r("AdsMessengerJSONMediaFormatType").TEXT &&
        (t == null ? void 0 : t.is_enabled) === !0 &&
        ((n = t == null || (a = t.products) == null ? void 0 : a.length) != null
          ? n
          : 0) > 0
      ) {
        var l;
        return s._(
          /*BTDS*/ '_j{"*":"[{number} products included]","_1":"[1 product included]"}',
          [
            s._plural(
              t == null || (l = t.products) == null ? void 0 : l.length,
              "number",
            ),
          ],
        );
      }
      return null;
    }
    function N(e) {
      var t,
        n = e == null ? void 0 : e.media_type;
      if (n === r("AdsMessengerJSONMediaFormatType").IMAGE) {
        var o;
        return (
          (e == null || (o = e.image_format) == null || (o = o.message) == null
            ? void 0
            : o.ice_breakers) || []
        );
      } else if (n === r("AdsMessengerJSONMediaFormatType").VIDEO) {
        var a;
        return (
          (e == null || (a = e.video_format) == null || (a = a.message) == null
            ? void 0
            : a.ice_breakers) || []
        );
      }
      return (
        (e == null || (t = e.text_format) == null || (t = t.message) == null
          ? void 0
          : t.ice_breakers) || []
      );
    }
    function M(e) {
      var t = e.map(function (e) {
        return r("isStringNotNullAndNotWhitespaceOnly")(e.response);
      });
      return t.includes(!0);
    }
    function w(e, t) {
      switch (e) {
        case r("AdsMessengerVisualEditorCustomerActionType").AUTOFILL_MESSAGE:
          return o("AdsMessengerConstants").PREFILL_MESSAGE;
        case r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS:
          return t
            ? o("AdsMessengerConstants").FREQUENTLY_ASKED_QUESTIONS
            : o("AdsMessengerConstants").QUESTIONS_AND_RESPONSES;
        case r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS:
          return o("AdsMessengerConstants").QUESTIONS_AND_RESPONSES;
        case r("AdsMessengerVisualEditorCustomerActionType").QUICK_REPLIES:
          return o("AdsMessengerConstants").QUICK_REPLIES;
        case r("AdsMessengerVisualEditorCustomerActionType").BUTTONS:
          return o("AdsMessengerConstants").BUTTONS;
        default:
          return null;
      }
    }
    function A(e, t) {
      var n, o, a;
      if (t === r("AdCampaignDestination").MESSENGER) {
        var i = e.media_type;
        switch (i) {
          case r("AdsMessengerJSONMediaFormatType").IMAGE:
            return (n = e.image_format) == null
              ? void 0
              : n.customer_action_type;
          case r("AdsMessengerJSONMediaFormatType").VIDEO:
            return (o = e.video_format) == null
              ? void 0
              : o.customer_action_type;
        }
      }
      return (a = e.text_format) == null ? void 0 : a.customer_action_type;
    }
    function F(e, t) {
      var n, o, a, i, l;
      return e === r("AdsMessengerVisualEditorCustomerActionType").BUTTONS
        ? (t == null ||
          (n = t.text_format) == null ||
          (n = n.message) == null ||
          (n = n.attachment) == null ||
          (n = n.payload) == null
            ? void 0
            : n.text) ||
            (t == null ||
            (o = t.image_format) == null ||
            (o = o.message) == null
              ? void 0
              : o.text)
        : (t == null || (a = t.text_format) == null || (a = a.message) == null
            ? void 0
            : a.text) ||
            (t == null ||
            (i = t.image_format) == null ||
            (i = i.message) == null
              ? void 0
              : i.text) ||
            (t == null ||
            (l = t.video_format) == null ||
            (l = l.message) == null
              ? void 0
              : l.text) ||
            "";
    }
    function O(e) {
      var t,
        n,
        o,
        a = e == null ? void 0 : e.media_type;
      switch (a) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return (
            (e == null ||
            (t = e.image_format) == null ||
            (t = t.message) == null
              ? void 0
              : t.quick_replies) || []
          );
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return (
            (e == null ||
            (n = e.video_format) == null ||
            (n = n.message) == null
              ? void 0
              : n.quick_replies) || []
          );
        default:
          return (
            (e == null || (o = e.text_format) == null || (o = o.message) == null
              ? void 0
              : o.quick_replies) || []
          );
      }
    }
    function B(e) {
      var t,
        n,
        o,
        a = e == null ? void 0 : e.media_type;
      switch (a) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return (
            (e == null ||
            (t = e.image_format) == null ||
            (t = t.message) == null ||
            (t = t.attachment) == null ||
            (t = t.payload) == null
              ? void 0
              : t.buttons) || []
          );
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return (
            (e == null ||
            (n = e.video_format) == null ||
            (n = n.message) == null ||
            (n = n.attachment) == null ||
            (n = n.payload) == null
              ? void 0
              : n.buttons) || []
          );
        default:
          return (
            (e == null ||
            (o = e.text_format) == null ||
            (o = o.message) == null ||
            (o = o.attachment) == null ||
            (o = o.payload) == null
              ? void 0
              : o.buttons) || []
          );
      }
    }
    function W(e, t) {
      t === !0 &&
        r("setByPath")(e, ["ai_generated_welcome_message_impression"], !0);
    }
    function q(e) {
      return (
        e === r("AdsAPIOptimizationGoals").POST_ENGAGEMENT &&
        o("AdsReachFrequencyGKUtils").isPostEngagementDefaultCTAUpdateEnabled()
      );
    }
    function U(e) {
      switch (e) {
        case "NONE":
          return null;
        case "call":
          return s._(/*BTDS*/ "Call now");
        case "catalog":
          return s._(/*BTDS*/ "View catalog");
        case "url":
          return s._(/*BTDS*/ "Visit website");
        default:
      }
    }
    var V = {
      store: r("bx").getURL(r("bx")("10637")),
      phone: r("bx").getURL(r("bx")("9861")),
      shareExternal: r("bx").getURL(r("bx")("10635")),
    };
    function H(e) {
      var t = null;
      switch (e) {
        case "NONE":
          break;
        case "call":
          t = V.phone;
          break;
        case "catalog":
          t = V.store;
          break;
        case "url":
          t = V.shareExternal;
          break;
        default:
      }
      return t == null
        ? null
        : c.jsx(r("Image.react"), {
            height: 16,
            src: t,
            title: r("AutomatedGreetingMessageTypes"),
            width: 16,
          });
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G(e) {
      var t = r("adsMessengerDataModelGetCTWAAgmCtaType")(e),
        n = U(t != null ? t : ""),
        o = H(t != null ? t : "");
      return { label: n, icon: o };
    }
    var z = r("debounce")(function (e, t, n) {
        r("promiseDone")(e(t), n);
      }, 500),
      j = function (r) {
        return function (t) {
          return t === ""
            ? (e || (e = n("Promise"))).resolve([])
            : new (e || (e = n("Promise")))(function (e) {
                return z(r, t, e);
              });
        };
      },
      K = j;
    ((l.isMultiDestinationPAC = d),
      (l.isMultiDestinationMessagingFromAdSpec = m),
      (l.getMessagingCTAFromDestinationType = p),
      (l.getClickToMessageDestinationTypeFromAdCampaignDestinationType = _),
      (l.getFirstPage = f),
      (l.getFirstInstagramAccount = g),
      (l.deleteNonUnifiedCreationKeys = h),
      (l.showExistingLeadGenTemplateGuidanceCard = y),
      (l.showImageGuidanceCard = C),
      (l.showVideoGuidanceCard = b),
      (l.processIGAccounts = v),
      (l.adsUEditorCampaignMessagesUnifiedCreationWithoutLog = S),
      (l.getSearchableEntryFromPage = R),
      (l.getSearchableEntryFromInstagramAccount = L),
      (l.showSimpleConversationsMessageTemplate = k),
      (l.shouldRenderAutomatedChat = I),
      (l.shouldRenderCTDLGAutomatedChat = T),
      (l.shouldRenderLiteWeightAutomatedChat = D),
      (l.shouldShowMessengerTab = x),
      (l.shouldShowFAQPreview = $),
      (l.showMediaTypeInPreview = P),
      (l.getIcebreakersBasedOnGreetingMediaType = N),
      (l.getIcebreakerHasResponse = M),
      (l.getPreviewHeaderBasedOnCustomerActionType = w),
      (l.getSelectedCustomerActionBasedOnDestination = A),
      (l.getGreetingBasedOnCustomerActionType = F),
      (l.getQuickReplyBasedOnGreetingMediaType = O),
      (l.getButtonsBasedOnGreetingMediaType = B),
      (l.maybeUpdateWelcomeMessageWithAIgenImpressionTag = W),
      (l.shouldDefaultNoButtonAsPECTA = q),
      (l.getAutomatedGreetingMessageCTAFbt = U),
      (l.getAutomatedGreetingMessageButton = G),
      (l.getFilteredPages = K));
  },
  226,
);
