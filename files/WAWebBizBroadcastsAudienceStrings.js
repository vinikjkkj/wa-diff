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
    function b() {
      return s._(
        /*BTDS*/ "Quick-start your broadcast with these ready-to-use audiences",
      );
    }
    function v(e) {
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
    function S(e, t) {
      return t != null
        ? s._(/*BTDS*/ "{count} recipients \u00b7 {duration}", [
            s._param("count", e),
            s._param("duration", t),
          ])
        : s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
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
      (l.getSuggestedAudiencesSectionSubtitle = b),
      (l.getDurationLabelForDays = v),
      (l.getSuggestedAudienceCardSubtitle = S));
  },
  226,
);
