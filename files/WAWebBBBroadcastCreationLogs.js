__d(
  "WAWebBBBroadcastCreationLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function s(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENTS_IMAGE_VIDEOS_DROPDOWN,
      });
    }
    function u(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_CAMERA_DROPDOWN,
      });
    }
    function c(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_CATALOG_DROPDOWN,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENTS_DOCUMENT_DROPDOWN,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_ATTACHMENT_BUTTON,
      });
    }
    function p(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_SELECTION_PREVIEW,
      });
    }
    function _(e, t, n, r) {
      var a = {};
      (n != null && (a.attachmentExt = n),
        r != null && (a.attachmentFileSize = r),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: t,
          extraAttributes: a,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget:
            o("WAWebBBLoggerTypes").UserActionTarget
              .ATTACHMENT_PREVIEW_SAVE_BUTTON,
        }));
    }
    function f(e, t, n, r, a) {
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
    function g(e, t, n, r, a) {
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
    function h(e, t, n) {
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
    function y(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENT_SECTION_ERROR_RENDER,
      });
    }
    function C(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .DOCUMENT_PREVIEW_MESSAGE_BUBBLE_ERROR_RENDER,
      });
    }
    function b(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_AUDIENCE_BUTTON,
      });
    }
    function v(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_CTA_BUTTON,
      });
    }
    function S(e, t, n, r, a, i) {
      var l = { contact_count: t, save_result: n };
      (a != null && (l.errorType = a),
        i != null && (l.campaign_sent_error_type = i),
        r != null && (l.attachmentExt = r),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
          extraAttributes: l,
          surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
          userActionTarget:
            o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
        }));
    }
    function R(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_REVIEW,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SEND_CAMPAIGN_ACK,
      });
    }
    function L(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t != null ? { suggested_audience_card_id: t } : void 0,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CHOOSE_AUDIENCE_BUTTON,
      });
    }
    function E(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: { has_existing_audiences: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.MENU,
      });
    }
    function k(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CREATE_AUDIENCE_BUTTON,
      });
    }
    function I(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    function T(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_BUTTON,
      });
    }
    function D(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BACK_BUTTON,
      });
    }
    function x(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: r,
        extraAttributes: { audience_id: t.join(","), recipient_count: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
      });
    }
    function $(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: {
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
    function P(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .EXIT_CONFIRMATION_DISMISS_BUTTON,
      });
    }
    function N(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .EXIT_CONFIRMATION_CONTINUE_BUTTON,
      });
    }
    function M(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_MODAL,
      });
    }
    function w(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: { total_selected_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_MODAL,
      });
    }
    ((l.createBroadcastViewed = e),
      (l.attachmentsImageVideoDropdownClicked = s),
      (l.attachmentsCameraDropdownClicked = u),
      (l.attachmentsCatalogDropdownClicked = c),
      (l.attachmentsDocumentDropdownClicked = d),
      (l.addAttachmentButtonClicked = m),
      (l.attachmentFileSelected = p),
      (l.attachmentPreviewSaveButtonClicked = _),
      (l.attachmentPreviewButtonClicked = f),
      (l.attachmentRemoveButtonClicked = g),
      (l.attachmentUpload = h),
      (l.attachmentSectionErrorRender = y),
      (l.documentPreviewMessageBubbleErrorRender = C),
      (l.addAudienceButtonClicked = b),
      (l.addCTAButtonClicked = v),
      (l.sendBroadcastResult = S),
      (l.sendCampaignAck = R),
      (l.createBroadcastChooseAudienceClicked = L),
      (l.createBroadcastAudienceMenuViewed = E),
      (l.createAudienceButtonClicked = k),
      (l.importAudienceButtonClicked = I),
      (l.createBroadcastAudienceMenuExistingAudiencesClicked = T),
      (l.createBroadcastBackClicked = D),
      (l.createBroadcastSendClicked = x),
      (l.sendBroadcastButtonViewed = $),
      (l.createBroadcastExitConfirmationDismissed = P),
      (l.createBroadcastExitConfirmationConfirmed = N),
      (l.existingAudiencesModalViewed = M),
      (l.existingAudiencesModalSaved = w));
  },
  98,
);
