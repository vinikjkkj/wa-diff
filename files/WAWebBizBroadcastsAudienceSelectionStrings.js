__d(
  "WAWebBizBroadcastsAudienceSelectionStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      return s._(/*BTDS*/ "");
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    function _(e, t) {
      return s._(/*BTDS*/ "", [
        s._param("selected_count", e),
        s._param("max_count", t),
      ]);
    }
    function f(e, t) {
      return s._(/*BTDS*/ "", [s._param("count", e), s._param("max_count", t)]);
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y(e) {
      return s._(/*BTDS*/ "", [
        s._plural(e, "number_of_recipients"),
        s._plural(e),
      ]);
    }
    function C() {
      return s._(/*BTDS*/ "");
    }
    function b(e) {
      return s._(/*BTDS*/ "", [s._plural(e)]);
    }
    function v(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number_of_recipients")]);
    }
    function S(e) {
      return s._(/*BTDS*/ "", [s._param("contact_name", e)]);
    }
    function R(e) {
      return s._(/*BTDS*/ "", [s._param("contact_name", e)]);
    }
    ((l.getNewAudienceTitle = e),
      (l.getEditAudienceTitle = u),
      (l.getNewAudienceSubtitle = c),
      (l.getSaveAudienceButtonLabel = d),
      (l.getSendBroadcastButtonLabel = m),
      (l.getChooseRecipientsHeader = p),
      (l.getSelectedCountText = _),
      (l.getRecipientCountOfLimitText = f),
      (l.getAudienceNameInputLabel = g),
      (l.getRecipientsHeader = h),
      (l.getRecipientsNotImportedLabel = y),
      (l.getUpdateRecipientErrorsLabel = C),
      (l.getRemoveRecipientsWithErrorsLabel = b),
      (l.getDeleteAllErrorsSuccessToastLabel = v),
      (l.getDeleteErrorSuccessToastLabel = S),
      (l.getEditErrorSuccessToastLabel = R));
  },
  226,
);
