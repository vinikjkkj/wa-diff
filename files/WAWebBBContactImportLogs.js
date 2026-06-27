__d(
  "WAWebBBContactImportLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BUSINESS_HOME_PAGE,
      });
    }
    function s(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BUSINESS_HOME_PAGE,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BB,
      });
    }
    function u(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_PROMPT,
      });
    }
    function c(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_PROMPT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_TEMPLATE,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_PROMPT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_PROMPT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.UPLOAD_FILE,
      });
    }
    function p(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_PROMPT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.OPEN_FILE,
      });
    }
    function _(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    function f(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    function g(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
      });
    }
    function h(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_CONTACT,
      });
    }
    function y(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_ERROR_CONTACT,
      });
    }
    function C(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_ALL_ERROR_CONTACTS,
      });
    }
    function b(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EDIT_ERROR_CONTACT,
      });
    }
    function v(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.ENTER,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORTED_CONTACT_LIST_NAME,
      });
    }
    function S(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SAVE,
      });
    }
    function R(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function L(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
      });
    }
    function E(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.ENTER,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTACT_NAME,
      });
    }
    function k(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.ENTER,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PHONE_NUMBER,
      });
    }
    function I(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTINUE,
      });
    }
    function T(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function D(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_SUCCESS,
      });
    }
    function x(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_SUCCESS,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function $(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface:
          o("WAWebBBLoggerTypes").SURFACE_TYPE.CONFIRM_DELETE_ALL_ERROR_CONTACT,
      });
    }
    function P(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface:
          o("WAWebBBLoggerTypes").SURFACE_TYPE.CONFIRM_DELETE_ALL_ERROR_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTINUE,
      });
    }
    function N(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface:
          o("WAWebBBLoggerTypes").SURFACE_TYPE.CONFIRM_DELETE_ALL_ERROR_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function M(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
      });
    }
    function w(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_TEMPLATE,
      });
    }
    function A(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function F(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTINUE,
      });
    }
    function O(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.SAVING_IMPORTED_CONTACT,
      });
    }
    function B(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.SAVING_IMPORTED_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function W(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: r,
        extraAttributes: { contact_count: t, num_error_contacts: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    function q(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: n,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    ((l.importAudienceViewed = e),
      (l.importAudienceClicked = s),
      (l.contactImportPromptViewed = u),
      (l.templateSaveClicked = c),
      (l.contactImportCancelClicked = d),
      (l.fileUploadClicked = m),
      (l.fileOpenClicked = p),
      (l.importAudienceProcessingStarted = _),
      (l.importAudienceProcessingResult = f),
      (l.importedContactWizardViewed = g),
      (l.contactDeleteClicked = h),
      (l.errorContactDeleteClicked = y),
      (l.allErrorContactsDeleteClicked = C),
      (l.errorContactEditClicked = b),
      (l.importedContactListNameEntered = v),
      (l.importedContactsSaveClicked = S),
      (l.importedContactWizardCancelClicked = R),
      (l.editContactViewed = L),
      (l.contactNameEntered = E),
      (l.phoneNumberEntered = k),
      (l.editContactConfirmClicked = I),
      (l.editContactCancelClicked = T),
      (l.contactImportSuccessViewed = D),
      (l.contactImportSuccessCancelClicked = x),
      (l.confirmDeleteAllErrorContactViewed = $),
      (l.deleteAllErrorContactsConfirmClicked = P),
      (l.deleteAllErrorContactsCancelClicked = N),
      (l.reviewFileErrorsPromptViewed = M),
      (l.reviewFileErrorsPromptTemplateSaveClicked = w),
      (l.reviewFileErrorsPromptCancelClicked = A),
      (l.reviewFileErrorsPromptContinueClicked = F),
      (l.saveImportedContactViewed = O),
      (l.saveImportedContactClosed = B),
      (l.importAudienceSuccess = W),
      (l.importAudienceError = q));
  },
  98,
);
