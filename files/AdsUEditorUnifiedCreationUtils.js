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
    "ODS",
    "Promise",
    "Random",
    "SearchableEntry",
    "adsMessengerDataModelGetCTWAAgmCtaType",
    "adsObserveRuntimeType",
    "bx",
    "debounce",
    "gkx",
    "isStringNotNullAndNotWhitespaceOnly",
    "isTruthy",
    "isWhatsAppOrInstagramOrComboDestination",
    "justknobx",
    "objectValues",
    "performanceNow",
    "promiseDone",
    "react",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
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
    function _(e) {
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
    function f(e) {
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
    function g(e) {
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
    function h(e) {
      var t = Object.values(e);
      return t.length > 0 ? t[0] : null;
    }
    function y(e) {
      var t = r("objectValues")(e);
      return t.length > 0 ? t[0] : null;
    }
    function C(e, t) {
      var n = r("gkx")("11094");
      return e.subtract(
        n
          ? ["tokenizedDescriptionField"]
          : ["linkDescriptionField", "tokenizedDescriptionField"],
      );
    }
    function b(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        (t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN ||
          t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW)
      );
    }
    function v(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        t === r("AdsMessengerJSONMediaFormatType").IMAGE
      );
    }
    function S(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        t === r("AdsMessengerJSONMediaFormatType").VIDEO
      );
    }
    function R(e, t) {
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
    function L(e) {
      var t = {
        iconURI: o("AdsPageUtils").getPageIconURI(e),
        isPageAdmin: o("AdsPageUtils").isAdmin(e),
        hasPageAdvertisePermission: !0,
        hasWhatsAppBusinessNumber: e.has_whatsapp_business_number,
        hasWhatsAppNumber: e.has_whatsapp_number,
        pageToken: e.page_token,
      };
      return new (r("SearchableEntry"))({
        auxiliaryData: o("AdsPageSelectorAuxData").makeAdsPageSelectorAuxData(
          t,
        ),
        keywordString: e.id,
        title: o("AdsPageUtils").getPageUIName(e) || "",
        uniqueID: e.id,
        photo: o("AdsPageUtils").getPageIconURI(e),
      });
    }
    function E(e) {
      return new (r("SearchableEntry"))({
        keywordString: e.id,
        title: e.username || "",
        subtitle: k(e.id, e.tooltip),
        uniqueID: r("isTruthy")(e.id_v2) ? e.id_v2 : e.id,
        photo: e.profile_pic,
      });
    }
    function k(e, t) {
      return e === r("AdsFakePageBackedInstagramAccount").id ||
        e === r("AdsFakeProfileBackedInstagramAccount").id
        ? t
        : s._(/*BTDS*/ "", [s._param("IG id", e)]);
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e, t, n, a, i, l) {
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
    function T(e, t, n) {
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
    function D(e, t) {
      return (
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
        t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
      );
    }
    function x(e, t, n) {
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
    function $(e) {
      var t =
        e === r("AdCampaignDestination").MESSENGER ||
        o(
          "AdsUEditorMessagingDestinationUtils",
        ).isMultiDestinationWithMessenger(e);
      return t;
    }
    function P(e, t, n, o) {
      return e !== r("AdCampaignDestination").WHATSAPP
        ? t ===
            r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE &&
            n !== "JSON_SETUP"
        : t ===
            r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE ||
            (o == null ? void 0 : o.welcome_message_edited) === !0;
    }
    function N(e, t) {
      var n, a;
      o("adsObserveRuntimeType").adsObserveRuntimeType(
        "any_type:unified_creation_message_json",
        "?AdsMessengerJSONType",
        e,
      );
      var i = e == null ? void 0 : e.media_type;
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
        return s._(/*BTDS*/ "", [
          s._plural(
            t == null || (l = t.products) == null ? void 0 : l.length,
            "number",
          ),
        ]);
      }
      return null;
    }
    function M(e) {
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
    function w(e) {
      return e.some(function (e) {
        return r("isStringNotNullAndNotWhitespaceOnly")(e.response);
      });
    }
    function A(e, t) {
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
    function F(e, t) {
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
    function O(e, t) {
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
    function W(e) {
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
    function q(e, t) {
      t === !0 &&
        r("setByPath")(e, ["ai_generated_welcome_message_impression"], !0);
    }
    function U(e) {
      return (
        e === r("AdsAPIOptimizationGoals").POST_ENGAGEMENT &&
        o("AdsReachFrequencyGKUtils").isPostEngagementDefaultCTAUpdateEnabled()
      );
    }
    function V(e) {
      switch (e) {
        case "NONE":
          return null;
        case "call":
          return s._(/*BTDS*/ "");
        case "catalog":
          return s._(/*BTDS*/ "");
        case "url":
          return s._(/*BTDS*/ "");
        default:
      }
    }
    var H = {
      store: r("bx").getURL(r("bx")("10637")),
      phone: r("bx").getURL(r("bx")("9861")),
      shareExternal: r("bx").getURL(r("bx")("10635")),
    };
    function G(e) {
      var t = null;
      switch (e) {
        case "NONE":
          break;
        case "call":
          t = H.phone;
          break;
        case "catalog":
          t = H.store;
          break;
        case "url":
          t = H.shareExternal;
          break;
        default:
      }
      return t == null
        ? null
        : m.jsx(r("Image.react"), {
            height: 16,
            src: t,
            title: r("AutomatedGreetingMessageTypes"),
            width: 16,
          });
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z(e) {
      var t = r("adsMessengerDataModelGetCTWAAgmCtaType")(e),
        n = V(t != null ? t : ""),
        o = G(t != null ? t : "");
      return { label: n, icon: o };
    }
    var j = r("debounce")(function (e, t, n) {
        r("promiseDone")(e(t), n);
      }, 500),
      K = function (t) {
        return function (e) {
          return e === ""
            ? (c || (c = n("Promise"))).resolve([])
            : new (c || (c = n("Promise")))(function (n) {
                return j(t, e, n);
              });
        };
      },
      Q = K,
      X = 8,
      Y = 1e4,
      J = 256,
      Z = 16;
    function ee(e, t) {
      var n;
      try {
        n = t();
      } catch (e) {
        n = null;
      }
      return n == null || !Number.isFinite(n) || n < 0
        ? ((e.readyWindow = null),
          (e.fallbackWindow = null),
          (e.lastTime = null),
          null)
        : (e.lastTime != null &&
            n < e.lastTime &&
            ((e.readyWindow = null), (e.fallbackWindow = null)),
          (e.lastTime = n),
          n);
    }
    function te(e, t) {
      try {
        return e(t);
      } catch (e) {
        return !1;
      }
    }
    function ne(e, t) {
      return e.promotedPageID == null || t === "" || t !== e.promotedPageID
        ? ((e.fallbackWindow = null), !1)
        : !e.fallbackEmitted;
    }
    function re(e, t) {
      return e.sampled
        ? t
          ? !e.readyEmitted
          : ((e.readyWindow = null), !1)
        : !1;
    }
    function oe(e) {
      var t = e.enabled,
        n = e.increment,
        r = e.now,
        o = e.samplingDenominator,
        a = e.shouldSample;
      if (!t || !Number.isInteger(o) || o < 1)
        return {
          recordEditorRender: function () {},
          recordPageFallback: function () {},
        };
      var i = new Map();
      function l(e) {
        try {
          n(e);
        } catch (e) {
          return;
        }
      }
      function s(e, t, n) {
        return e == null || t - e.startedAt >= Y
          ? { count: 1, startedAt: t }
          : ((e.count = Math.min(e.count + 1, n)), e);
      }
      function u(e, t, n) {
        if (!(e == null || e === "")) {
          var u = i.get(e);
          if (u == null) {
            if (i.size >= X) return;
            var c = te(a, o);
            ((u = {
              sampled: c,
              promotedPageID: t != null ? t : null,
              lastTime: null,
              readyWindow: null,
              fallbackWindow: null,
              readyEmitted: !1,
              fallbackEmitted: !1,
            }),
              i.set(e, u),
              c && l("eligible_editor"));
          }
          var d = t != null ? t : null;
          if (
            (u.promotedPageID !== d &&
              ((u.promotedPageID = d), (u.fallbackWindow = null)),
            !!re(u, n))
          ) {
            var m = ee(u, r);
            if (m != null) {
              var p = s(u.readyWindow, m, J);
              ((u.readyWindow = p),
                p.count === J &&
                  ((u.readyEmitted = !0),
                  (u.readyWindow = null),
                  l("ready_render_burst_256_in_10s")));
            }
          }
        }
      }
      function c(e, t) {
        if (!(e == null || e === "")) {
          var n = i.get(e);
          if (!(n == null || !n.sampled) && ne(n, t)) {
            var o = ee(n, r);
            if (o != null) {
              var a = s(n.fallbackWindow, o, Z);
              ((n.fallbackWindow = a),
                a.count === Z &&
                  ((n.fallbackEmitted = !0),
                  (n.fallbackWindow = null),
                  l("same_page_fallback_burst_16_in_10s")));
            }
          }
        }
      }
      return { recordEditorRender: u, recordPageFallback: c };
    }
    var ae = null;
    function ie() {
      try {
        if (!r("justknobx")._("6422")) return null;
      } catch (e) {
        return null;
      }
      return (
        ae == null &&
          (ae = oe({
            enabled: !0,
            samplingDenominator: 100,
            shouldSample: function (t) {
              return r("Random").coinflip(t);
            },
            now: e || (e = r("performanceNow")),
            increment: function (t) {
              (u || (u = o("ODS"))).bumpEntityKey(
                1967,
                "ctwa_l2_loop_diagnostic",
                t,
              );
            },
          })),
        ae
      );
    }
    function le(e, t, n) {
      var r;
      (r = ie()) == null || r.recordEditorRender(e, t, n);
    }
    function se(e, t) {
      var n;
      (n = ie()) == null || n.recordPageFallback(e, t);
    }
    ((l.isMultiDestinationPAC = p),
      (l.isMultiDestinationMessagingFromAdSpec = _),
      (l.getMessagingCTAFromDestinationType = f),
      (l.getClickToMessageDestinationTypeFromAdCampaignDestinationType = g),
      (l.getFirstPage = h),
      (l.getFirstInstagramAccount = y),
      (l.deleteNonUnifiedCreationKeys = C),
      (l.showExistingLeadGenTemplateGuidanceCard = b),
      (l.showImageGuidanceCard = v),
      (l.showVideoGuidanceCard = S),
      (l.adsUEditorCampaignMessagesUnifiedCreationWithoutLog = R),
      (l.getSearchableEntryFromPage = L),
      (l.getSearchableEntryFromInstagramAccount = E),
      (l.showSimpleConversationsMessageTemplate = I),
      (l.shouldRenderAutomatedChat = T),
      (l.shouldRenderCTDLGAutomatedChat = D),
      (l.shouldRenderLiteWeightAutomatedChat = x),
      (l.shouldShowMessengerTab = $),
      (l.shouldShowFAQPreview = P),
      (l.showMediaTypeInPreview = N),
      (l.getIcebreakersBasedOnGreetingMediaType = M),
      (l.getIcebreakerHasResponse = w),
      (l.getPreviewHeaderBasedOnCustomerActionType = A),
      (l.getSelectedCustomerActionBasedOnDestination = F),
      (l.getGreetingBasedOnCustomerActionType = O),
      (l.getQuickReplyBasedOnGreetingMediaType = B),
      (l.getButtonsBasedOnGreetingMediaType = W),
      (l.maybeUpdateWelcomeMessageWithAIgenImpressionTag = q),
      (l.shouldDefaultNoButtonAsPECTA = U),
      (l.getAutomatedGreetingMessageCTAFbt = V),
      (l.getAutomatedGreetingMessageButton = z),
      (l.getFilteredPages = Q),
      (l.createCTWAL2LoopTelemetry = oe),
      (l.recordCTWAL2EditorRenderTelemetry = le),
      (l.recordCTWAL2PageFallbackTelemetry = se));
  },
  226,
);
