__d(
  "WAWebWaitingRoomApprovalNoteText",
  [
    "fbt",
    "WAWebFaqUrl",
    "WAWebVoipGatingUtils",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(
        /*BTDS*/ "People who don't have WhatsApp will always need approval to join.",
      );
    }
    function d(e) {
      return e ? _() : p();
    }
    function m() {
      return o("WAWebVoipGatingUtils").canCreateGuestCallLinks() ? _() : p();
    }
    function p() {
      return s._(
        /*BTDS*/ "Anyone with WhatsApp can use this link to join this call. Only share it with people you trust.",
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "Anyone can use this link to join this call, even if they're not on WhatsApp. Only share it with people you trust. {learn_more_link}",
        [
          s._param(
            "learn_more_link",
            u.jsx(r("WDSTextualLink.react"), {
              href: o("WAWebFaqUrl").getCallLinksFaqUrl(),
              testid: "voip_call_link_description_learn_more",
              children: s._(/*BTDS*/ "Learn more"),
            }),
          ),
        ],
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.getWaitingRoomApprovalNoteText = c),
      (l.getCallLinkSharePanelDescriptionText = d),
      (l.getCreateCallLinkDescriptionText = m));
  },
  226,
);
