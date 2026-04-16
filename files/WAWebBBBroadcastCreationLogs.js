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
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENTS_DOCUMENT_DROPDOWN,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_ATTACHMENT_BUTTON,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_SELECTION_PREVIEW,
      });
    }
    function p(e, t, n, r) {
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
    function _(e, t, n, r, a) {
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
    function g(e, t, n) {
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
    function h(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .ATTACHMENT_SECTION_ERROR_RENDER,
      });
    }
    function y(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .DOCUMENT_PREVIEW_MESSAGE_BUBBLE_ERROR_RENDER,
      });
    }
    function C(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_AUDIENCE_BUTTON,
      });
    }
    function b(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_CTA_BUTTON,
      });
    }
    function v(e, t, n, r, a, i) {
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
    function S(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_REVIEW,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SEND_CAMPAIGN_ACK,
      });
    }
    function R(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t != null ? { suggested_audience_card_id: t } : void 0,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CHOOSE_AUDIENCE_BUTTON,
      });
    }
    function L(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: { has_existing_audiences: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.MENU,
      });
    }
    function E(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CREATE_AUDIENCE_BUTTON,
      });
    }
    function k(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    function I(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_BUTTON,
      });
    }
    function T(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BACK_BUTTON,
      });
    }
    function D(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: r,
        extraAttributes: { audience_id: t.join(","), recipient_count: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON,
      });
    }
    function x(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .EXIT_CONFIRMATION_DISMISS_BUTTON,
      });
    }
    function $(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .EXIT_CONFIRMATION_CONTINUE_BUTTON,
      });
    }
    function P(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_MODAL,
      });
    }
    function N(e, t, n) {
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
      (l.attachmentsDocumentDropdownClicked = c),
      (l.addAttachmentButtonClicked = d),
      (l.attachmentFileSelected = m),
      (l.attachmentPreviewSaveButtonClicked = p),
      (l.attachmentPreviewButtonClicked = _),
      (l.attachmentRemoveButtonClicked = f),
      (l.attachmentUpload = g),
      (l.attachmentSectionErrorRender = h),
      (l.documentPreviewMessageBubbleErrorRender = y),
      (l.addAudienceButtonClicked = C),
      (l.addCTAButtonClicked = b),
      (l.sendBroadcastResult = v),
      (l.sendCampaignAck = S),
      (l.createBroadcastChooseAudienceClicked = R),
      (l.createBroadcastAudienceMenuViewed = L),
      (l.createAudienceButtonClicked = E),
      (l.importAudienceButtonClicked = k),
      (l.createBroadcastAudienceMenuExistingAudiencesClicked = I),
      (l.createBroadcastBackClicked = T),
      (l.createBroadcastSendClicked = D),
      (l.createBroadcastExitConfirmationDismissed = x),
      (l.createBroadcastExitConfirmationConfirmed = $),
      (l.existingAudiencesModalViewed = P),
      (l.existingAudiencesModalSaved = N));
  },
  98,
);
