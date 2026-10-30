__d(
  "WAWebBBBroadcastCreationLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: babelHelpers.extends(
          {},
          t === "failure" ? { error_category: "unknown" } : {},
          { phase: n, save_result: t },
        ),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: "create_campaign",
      });
    }
    function s(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: n,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function u(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
        entryPoint: t,
        extraAttributes: { validation_error_type: r, validation_succeeded: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.MAX_BID_INPUT,
      });
    }
    function c(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
        entryPoint: t,
        extraAttributes: { validation_succeeded: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CAMPAIGN_BUDGET_INPUT,
      });
    }
    function d(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: {
          has_invalid_audience: t.hasInvalidAudience,
          has_no_bid: t.hasNoBid,
          has_no_budget: t.hasNoBudget,
          has_no_content: t.hasNoContent,
          has_required_action: t.hasRequiredAction,
          has_unsupported_attachment: t.hasUnsupportedAttachment,
          is_creating_campaign: t.isCreatingCampaign,
          is_disabled: t.isDisabled,
          is_max_bid_valid: t.isMaxBidValid,
          scheduled_send_enabled: t.scheduledSendEnabled,
        },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
      });
    }
    function m(e, t, n, r, a, i) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: babelHelpers.extends({}, i, {
          attachment_type: a != null ? a : void 0,
          recipient_count: n != null ? n : void 0,
          scheduled: r,
        }),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: r
          ? o("WAWebBBLoggerTypes").UserActionTarget.SCHEDULE_BROADCAST_BUTTON
          : o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
      });
    }
    function p(e, t, n, r, a, i, l, s, u, c) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: babelHelpers.extends({}, c, {
          attachment_type: i != null ? i : void 0,
          error_codes: u,
          error_type: l,
          failure_stage: s,
          recipient_count: n != null ? n : void 0,
          save_result: a,
          scheduled: r,
        }),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: r
          ? o("WAWebBBLoggerTypes").UserActionTarget.SCHEDULE_BROADCAST_BUTTON
          : o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
      });
    }
    function _(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENTS_IMAGE_VIDEOS_DROPDOWN,
      });
    }
    function f(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_CAMERA_DROPDOWN,
      });
    }
    function g(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_CATALOG_DROPDOWN,
      });
    }
    function h(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENTS_DOCUMENT_DROPDOWN,
      });
    }
    function y(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_ATTACHMENT_BUTTON,
      });
    }
    function C(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_SELECTION_PREVIEW,
      });
    }
    function b(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: n,
      });
    }
    function v(e) {
      var t = e.entryPoint,
        n = e.fileExt,
        r = e.fileSize,
        a = e.log,
        i = {};
      (n != null && (i.attachmentExt = n),
        r != null && (i.attachmentFileSize = r),
        a({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: t,
          extraAttributes: i,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget:
            o("WAWebBBLoggerTypes").UserActionTarget
              .ATTACHMENT_PREVIEW_SAVE_BUTTON,
        }));
    }
    function S(e) {
      var t = e.entryPoint,
        n = e.fileExt,
        r = e.fileSize,
        a = e.log,
        i = e.userActionTarget,
        l = {};
      (n != null && (l.attachmentExt = n),
        r != null && (l.attachmentFileSize = r),
        a({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: t,
          extraAttributes: l,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget: i,
        }));
    }
    function R(e, t, n, r, a) {
      var i = {};
      (r != null && (i.attachmentExt = r),
        a != null && (i.attachmentFileSize = a),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: t,
          extraAttributes: i,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget: n,
        }));
    }
    function L(e, t, n) {
      var r = {};
      (n != null && (r.errorType = n),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
          entryPoint: t,
          extraAttributes: r,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget:
            o("WAWebBBLoggerTypes").UserActionTarget.ADD_ATTACHMENT_BUTTON,
        }));
    }
    function E(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENT_SECTION_ERROR_RENDER,
      });
    }
    function k(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .DOCUMENT_PREVIEW_MESSAGE_BUBBLE_ERROR_RENDER,
      });
    }
    function I(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_AUDIENCE_BUTTON,
      });
    }
    function T(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_CTA_BUTTON,
      });
    }
    function D(e, t, n, r, a, i, l, s, u, c, d, m, p) {
      var _ = { contact_count: t, save_result: n };
      (s != null && ((_.audience_count = s), (_.is_multi_audience = s > 1)),
        a != null && (_.errorType = a),
        i != null && (_.campaign_sent_error_type = i),
        r != null && (_.attachmentExt = r),
        l != null && (_.attachment_type = l),
        c === !0 && (_.is_duplicate_bb = !0),
        d != null && (_.created_from_client_campaign_id = d),
        m != null && (_.ai_assisted_text = m),
        p != null && (_.ai_assisted_text_edited = p),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
          entryPoint: u,
          extraAttributes: _,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget:
            o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
        }));
    }
    function x(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_REVIEW,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SEND_CAMPAIGN_ACK,
      });
    }
    function $(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t != null ? { suggested_audience_card_id: t } : void 0,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CHOOSE_AUDIENCE_BUTTON,
      });
    }
    function P(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: { has_existing_audiences: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.MENU,
      });
    }
    function N(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CREATE_AUDIENCE_BUTTON,
      });
    }
    function M(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    function w(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_BUTTON,
      });
    }
    function A(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BACK_BUTTON,
      });
    }
    function F(e, t, n, r, a, i, l, s, u, c) {
      var d = t.length,
        m = {
          audience_count: d,
          audience_id: t.join(","),
          is_multi_audience: d > 1,
          recipient_count: n,
        };
      (i != null && i > 0 && (m.overlapping_recipient_count = i),
        a != null && (m.attachment_type = a),
        l === !0 && (m.is_duplicate_bb = !0),
        s != null && (m.created_from_client_campaign_id = s),
        u != null && (m.ai_assisted_text = u),
        c != null && (m.ai_assisted_text_edited = c),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: r,
          extraAttributes: m,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget:
            o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
        }));
    }
    function O(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: {
          ai_assisted_text: t.aiAssistedText,
          ai_assisted_text_edited: t.aiAssistedTextEdited,
          checkout_failed: t.checkoutFailed,
          is_creating_campaign: t.isCreatingCampaign,
          is_disabled: t.isDisabled,
          is_loading_business_info: t.isLoadingBusinessInfo,
          is_message_empty: t.isMessageEmpty,
          missing_business_info: t.missingBusinessInfo,
          no_broadcast_jid: t.noBroadcastJid,
          pending_billing_action: t.pendingBillingAction,
          recipient_count: t.recipientCount,
          selected_chat_count: t.selectedChatCount,
          too_few_recipients: t.tooFewRecipients,
          too_many_recipients: t.tooManyRecipients,
        },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
      });
    }
    function B(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .EXIT_CONFIRMATION_DISMISS_BUTTON,
      });
    }
    function W(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .EXIT_CONFIRMATION_CONTINUE_BUTTON,
      });
    }
    function q(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_MODAL,
      });
    }
    function U(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: { total_selected_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_MODAL,
      });
    }
    ((l.campaignCreationResult = e),
      (l.createBroadcastViewed = s),
      (l.proMaxBidValidated = u),
      (l.proCampaignBudgetValidated = c),
      (l.proSendButtonViewed = d),
      (l.proSendClicked = m),
      (l.proSendResult = p),
      (l.attachmentsImageVideoDropdownClicked = _),
      (l.attachmentsCameraDropdownClicked = f),
      (l.attachmentsCatalogDropdownClicked = g),
      (l.attachmentsDocumentDropdownClicked = h),
      (l.addAttachmentButtonClicked = y),
      (l.attachmentFileSelected = C),
      (l.catalogAttachmentSelected = b),
      (l.attachmentPreviewSaveButtonClicked = v),
      (l.attachmentPreviewButtonClicked = S),
      (l.attachmentRemoveButtonClicked = R),
      (l.attachmentUpload = L),
      (l.attachmentSectionErrorRender = E),
      (l.documentPreviewMessageBubbleErrorRender = k),
      (l.addAudienceButtonClicked = I),
      (l.addCTAButtonClicked = T),
      (l.sendBroadcastResult = D),
      (l.sendCampaignAck = x),
      (l.createBroadcastChooseAudienceClicked = $),
      (l.createBroadcastAudienceMenuViewed = P),
      (l.createAudienceButtonClicked = N),
      (l.importAudienceButtonClicked = M),
      (l.createBroadcastAudienceMenuExistingAudiencesClicked = w),
      (l.createBroadcastBackClicked = A),
      (l.createBroadcastSendClicked = F),
      (l.sendBroadcastButtonViewed = O),
      (l.createBroadcastExitConfirmationDismissed = B),
      (l.createBroadcastExitConfirmationConfirmed = W),
      (l.existingAudiencesModalViewed = q),
      (l.existingAudiencesModalSaved = U));
  },
  98,
);
