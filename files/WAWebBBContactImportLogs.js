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
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
      });
    }
    function f(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_CONTACT,
      });
    }
    function g(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_ERROR_CONTACT,
      });
    }
    function h(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_ALL_ERROR_CONTACTS,
      });
    }
    function y(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EDIT_ERROR_CONTACT,
      });
    }
    function C(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.ENTER,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORTED_CONTACT_LIST_NAME,
      });
    }
    function b(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SAVE,
      });
    }
    function v(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function S(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
      });
    }
    function R(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.ENTER,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTACT_NAME,
      });
    }
    function L(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.ENTER,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PHONE_NUMBER,
      });
    }
    function E(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTINUE,
      });
    }
    function k(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.EDIT_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function I(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_SUCCESS,
      });
    }
    function T(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.CONTACT_IMPORT_SUCCESS,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function D(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface:
          o("WAWebBBLoggerTypes").SURFACE_TYPE.CONFIRM_DELETE_ALL_ERROR_CONTACT,
      });
    }
    function x(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface:
          o("WAWebBBLoggerTypes").SURFACE_TYPE.CONFIRM_DELETE_ALL_ERROR_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTINUE,
      });
    }
    function $(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface:
          o("WAWebBBLoggerTypes").SURFACE_TYPE.CONFIRM_DELETE_ALL_ERROR_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function P(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
      });
    }
    function N(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_TEMPLATE,
      });
    }
    function M(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function w(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.REVIEW_FILE_ERRORS_PROMPT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONTINUE,
      });
    }
    function A(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.SAVING_IMPORTED_CONTACT,
      });
    }
    function F(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.SAVING_IMPORTED_CONTACT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function O(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: r,
        extraAttributes: { contact_count: t, num_error_contacts: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON,
      });
    }
    function B(e, t, n) {
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
      (l.importedContactWizardViewed = _),
      (l.contactDeleteClicked = f),
      (l.errorContactDeleteClicked = g),
      (l.allErrorContactsDeleteClicked = h),
      (l.errorContactEditClicked = y),
      (l.importedContactListNameEntered = C),
      (l.importedContactsSaveClicked = b),
      (l.importedContactWizardCancelClicked = v),
      (l.editContactViewed = S),
      (l.contactNameEntered = R),
      (l.phoneNumberEntered = L),
      (l.editContactConfirmClicked = E),
      (l.editContactCancelClicked = k),
      (l.contactImportSuccessViewed = I),
      (l.contactImportSuccessCancelClicked = T),
      (l.confirmDeleteAllErrorContactViewed = D),
      (l.deleteAllErrorContactsConfirmClicked = x),
      (l.deleteAllErrorContactsCancelClicked = $),
      (l.reviewFileErrorsPromptViewed = P),
      (l.reviewFileErrorsPromptTemplateSaveClicked = N),
      (l.reviewFileErrorsPromptCancelClicked = M),
      (l.reviewFileErrorsPromptContinueClicked = w),
      (l.saveImportedContactViewed = A),
      (l.saveImportedContactClosed = F),
      (l.importAudienceSuccess = O),
      (l.importAudienceError = B));
  },
  98,
);
