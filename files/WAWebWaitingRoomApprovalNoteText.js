__d(
  "WAWebWaitingRoomApprovalNoteText",
  ["fbt", "WAWebVoipGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(
        /*BTDS*/ "People who don't have WhatsApp will always need approval to join.",
      );
    }
    function u(e) {
      return o("WAWebVoipGatingUtils").isCallLinkGuestEligible(e) ? m() : d();
    }
    function c() {
      return o("WAWebVoipGatingUtils").canCreateGuestCallLinks() ? m() : d();
    }
    function d() {
      return s._(
        /*BTDS*/ "Anyone with WhatsApp can use this link to join this call. Only share it with people you trust.",
      );
    }
    function m() {
      return s._(
        /*BTDS*/ "Anyone can use this link to join this call, even if they're not on WhatsApp. Only share it with people you trust.",
      );
    }
    ((l.getWaitingRoomApprovalNoteText = e),
      (l.getCallLinkSharePanelDescriptionText = u),
      (l.getCreateCallLinkDescriptionText = c));
  },
  226,
);
