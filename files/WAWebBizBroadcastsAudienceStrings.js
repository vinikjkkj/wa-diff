__d(
  "WAWebBizBroadcastsAudienceStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Untitled list").toString();
    }
    function u() {
      return s._(/*BTDS*/ "Rename audience");
    }
    function c() {
      return s._(/*BTDS*/ "Save");
    }
    function d() {
      return s._(/*BTDS*/ "Active chats");
    }
    function m() {
      return s._(/*BTDS*/ "Contacts who messaged you in the last 30 days");
    }
    function p(e) {
      return s._(/*BTDS*/ "Messaged you in the {duration}", [
        s._param("duration", e),
      ]);
    }
    function _() {
      return s._(/*BTDS*/ "Inactive chats");
    }
    function f() {
      return s._(
        /*BTDS*/ "Contacts that haven't messaged you in the last 30 days",
      );
    }
    function g(e) {
      return s._(/*BTDS*/ "Inactive for {duration}", [s._param("duration", e)]);
    }
    function h() {
      return s._(/*BTDS*/ "Your largest list");
    }
    function y() {
      return s._(/*BTDS*/ "Contacts from your largest list");
    }
    function C() {
      return s._(/*BTDS*/ "Your WhatsApp contacts");
    }
    function b() {
      return s._(/*BTDS*/ "All contacts from your address book");
    }
    function v() {
      return s._(/*BTDS*/ "Suggested audiences");
    }
    function S(e) {
      return e <= 7
        ? s._(/*BTDS*/ "last 7 days")
        : e <= 14
          ? s._(/*BTDS*/ "last 14 days")
          : e <= 30
            ? s._(/*BTDS*/ "last 30 days")
            : e <= 90
              ? s._(/*BTDS*/ "last 3 months")
              : e <= 180
                ? s._(/*BTDS*/ "last 6 months")
                : s._(/*BTDS*/ "last year");
    }
    function R(e, t) {
      return t != null
        ? s._(/*BTDS*/ "{count} recipients \u00b7 {duration}", [
            s._param("count", e),
            s._param("duration", t),
          ])
        : s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function L(e, t) {
      return e.trim() !== ""
        ? s._(/*BTDS*/ "No contacts match your search")
        : t
          ? s._(/*BTDS*/ "No contacts found for this time period")
          : s._(/*BTDS*/ "No contacts found");
    }
    function E() {
      return s._(/*BTDS*/ "Import audiences");
    }
    function k(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} recipients","_1":"1 recipient"}', [
        s._plural(e, "number"),
      ]);
    }
    function I(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} recipients","_1":"1 recipient"}', [
        s._plural(e, "number"),
      ]);
    }
    function T() {
      return s._(/*BTDS*/ "Audience has unresolved errors");
    }
    function D() {
      return s._(/*BTDS*/ "Customer");
    }
    function x() {
      return s._(/*BTDS*/ "Mobile No.");
    }
    function $() {
      return s._(/*BTDS*/ "Delete contact");
    }
    function P() {
      return s._(/*BTDS*/ "Saving...");
    }
    function N(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Save {number} audiences","_1":"Save 1 audience"}',
        [s._plural(e, "number")],
      );
    }
    function M() {
      return s._(/*BTDS*/ "We couldn't save all audiences. Try again.");
    }
    function w() {
      return s._(/*BTDS*/ "We couldn't save your audiences. Try again.");
    }
    ((l.getUntitledListName = e),
      (l.getRenameAudienceModalTitle = u),
      (l.getSaveButtonLabel = c),
      (l.getActiveChatsTitle = d),
      (l.getActiveChatsDescription = m),
      (l.getActiveChatsAudienceName = p),
      (l.getInactiveChatsTitle = _),
      (l.getInactiveChatsDescription = f),
      (l.getInactiveChatsAudienceName = g),
      (l.getLargestListTitle = h),
      (l.getLargestListDescription = y),
      (l.getAllContactsTitle = C),
      (l.getAllContactsDescription = b),
      (l.getSuggestedAudiencesSectionTitle = v),
      (l.getDurationLabelForDays = S),
      (l.getSuggestedAudienceCardSubtitle = R),
      (l.getEmptyStateMessage = L),
      (l.getImportAudiencesTitle = E),
      (l.getRecipientCountNavLabel = k),
      (l.getRecipientCountHeading = I),
      (l.getUnresolvedErrorsIndicatorLabel = T),
      (l.getCustomerColumnHeader = D),
      (l.getMobileNumberColumnHeader = x),
      (l.getDeleteContactLabel = $),
      (l.getSavingLabel = P),
      (l.getSaveAudiencesButtonLabel = N),
      (l.getSaveAllAudiencesFailedError = M),
      (l.getSaveAudiencesFailedError = w));
  },
  226,
);
