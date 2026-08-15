__d(
  "WAWebBizBroadcastsAudienceStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Untitled list").toString();
    }
    function u() {
      return s._(/*BTDS*/ "Active chats");
    }
    function c() {
      return s._(/*BTDS*/ "Contacts who messaged you in the last 30 days");
    }
    function d(e) {
      return s._(/*BTDS*/ "Messaged you in the {duration}", [
        s._param("duration", e),
      ]);
    }
    function m() {
      return s._(/*BTDS*/ "Inactive chats");
    }
    function p() {
      return s._(
        /*BTDS*/ "Contacts that haven't messaged you in the last 30 days",
      );
    }
    function _(e) {
      return s._(/*BTDS*/ "Inactive for {duration}", [s._param("duration", e)]);
    }
    function f() {
      return s._(/*BTDS*/ "Your largest list");
    }
    function g() {
      return s._(/*BTDS*/ "Contacts from your largest list");
    }
    function h() {
      return s._(/*BTDS*/ "Your WhatsApp contacts");
    }
    function y() {
      return s._(/*BTDS*/ "All contacts from your address book");
    }
    function C() {
      return s._(/*BTDS*/ "Suggested audiences");
    }
    function b(e) {
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
    function v(e, t) {
      return t != null
        ? s._(/*BTDS*/ "{count} recipients \u00b7 {duration}", [
            s._param("count", e),
            s._param("duration", t),
          ])
        : s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function S(e, t) {
      return e.trim() !== ""
        ? s._(/*BTDS*/ "No contacts match your search")
        : t
          ? s._(/*BTDS*/ "No contacts found for this time period")
          : s._(/*BTDS*/ "No contacts found");
    }
    function R() {
      return s._(/*BTDS*/ "Import audiences");
    }
    function L(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} recipients","_1":"1 recipient"}', [
        s._plural(e, "number"),
      ]);
    }
    function E(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} recipients","_1":"1 recipient"}', [
        s._plural(e, "number"),
      ]);
    }
    function k() {
      return s._(/*BTDS*/ "Audience has unresolved errors");
    }
    function I() {
      return s._(/*BTDS*/ "Customer");
    }
    function T() {
      return s._(/*BTDS*/ "Mobile No.");
    }
    function D() {
      return s._(/*BTDS*/ "Delete contact");
    }
    function x() {
      return s._(/*BTDS*/ "Saving...");
    }
    function $(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Save {number} audiences","_1":"Save 1 audience"}',
        [s._plural(e, "number")],
      );
    }
    function P() {
      return s._(/*BTDS*/ "We couldn't save all audiences. Try again.");
    }
    function N() {
      return s._(/*BTDS*/ "We couldn't save your audiences. Try again.");
    }
    ((l.getUntitledListName = e),
      (l.getActiveChatsTitle = u),
      (l.getActiveChatsDescription = c),
      (l.getActiveChatsAudienceName = d),
      (l.getInactiveChatsTitle = m),
      (l.getInactiveChatsDescription = p),
      (l.getInactiveChatsAudienceName = _),
      (l.getLargestListTitle = f),
      (l.getLargestListDescription = g),
      (l.getAllContactsTitle = h),
      (l.getAllContactsDescription = y),
      (l.getSuggestedAudiencesSectionTitle = C),
      (l.getDurationLabelForDays = b),
      (l.getSuggestedAudienceCardSubtitle = v),
      (l.getEmptyStateMessage = S),
      (l.getImportAudiencesTitle = R),
      (l.getRecipientCountNavLabel = L),
      (l.getRecipientCountHeading = E),
      (l.getUnresolvedErrorsIndicatorLabel = k),
      (l.getCustomerColumnHeader = I),
      (l.getMobileNumberColumnHeader = T),
      (l.getDeleteContactLabel = D),
      (l.getSavingLabel = x),
      (l.getSaveAudiencesButtonLabel = $),
      (l.getSaveAllAudiencesFailedError = P),
      (l.getSaveAudiencesFailedError = N));
  },
  226,
);
