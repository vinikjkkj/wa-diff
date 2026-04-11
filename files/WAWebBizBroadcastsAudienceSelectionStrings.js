__d(
  "WAWebBizBroadcastsAudienceSelectionStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Create audience");
    }
    function u() {
      return s._(/*BTDS*/ "Edit audience");
    }
    function c() {
      return s._(/*BTDS*/ "Select who you want to reach with your broadcast.");
    }
    function d() {
      return s._(/*BTDS*/ "Save audience");
    }
    function m() {
      return s._(/*BTDS*/ "Send broadcast");
    }
    function p() {
      return s._(/*BTDS*/ "Choose recipients");
    }
    function _(e, t) {
      return s._(/*BTDS*/ "{selected_count} of {max_count} selected", [
        s._param("selected_count", e),
        s._param("max_count", t),
      ]);
    }
    function f(e, t) {
      return s._(/*BTDS*/ "{count} of {max_count}", [
        s._param("count", e),
        s._param("max_count", t),
      ]);
    }
    function g() {
      return s._(/*BTDS*/ "Search name or number");
    }
    function h() {
      return s._(/*BTDS*/ "Optional");
    }
    function y() {
      return s._(/*BTDS*/ "Audience name");
    }
    function C() {
      return s._(/*BTDS*/ "Audience name");
    }
    function b() {
      return s._(/*BTDS*/ "Recipients");
    }
    function v(e) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"{number_of_recipients} recipients weren\'t imported"},"_1":{"_1":"1 recipient wasn\'t imported"}}',
        [s._plural(e, "number_of_recipients"), s._plural(e)],
      );
    }
    function S() {
      return s._(
        /*BTDS*/ "Update recipient errors before saving your audience.",
      );
    }
    function R() {
      return s._(/*BTDS*/ "Delete all errors");
    }
    function L(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number_of_recipients} recipients removed","_1":"1 recipient removed"}',
        [s._plural(e, "number_of_recipients")],
      );
    }
    function E(e) {
      return s._(/*BTDS*/ "{contact_name} deleted", [
        s._param("contact_name", e),
      ]);
    }
    function k(e) {
      return s._(/*BTDS*/ "{contact_name} updated", [
        s._param("contact_name", e),
      ]);
    }
    ((l.getNewAudienceTitle = e),
      (l.getEditAudienceTitle = u),
      (l.getNewAudienceSubtitle = c),
      (l.getSaveAudienceButtonLabel = d),
      (l.getSendBroadcastButtonLabel = m),
      (l.getChooseRecipientsHeader = p),
      (l.getSelectedCountText = _),
      (l.getRecipientCountOfLimitText = f),
      (l.getSearchPlaceholder = g),
      (l.getOptionalSubtitleLabel = h),
      (l.getAudienceNameHeader = y),
      (l.getAudienceNameInputLabel = C),
      (l.getRecipientsHeader = b),
      (l.getRecipientsNotImportedLabel = v),
      (l.getUpdateRecipientErrorsLabel = S),
      (l.getDeleteAllErrorsLabel = R),
      (l.getDeleteAllErrorsSuccessToastLabel = L),
      (l.getDeleteErrorSuccessToastLabel = E),
      (l.getEditErrorSuccessToastLabel = k));
  },
  226,
);
