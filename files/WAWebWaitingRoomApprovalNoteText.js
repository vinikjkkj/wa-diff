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
      return s._(/*BTDS*/ "");
    }
    function d(e) {
      return e ? _() : p();
    }
    function m() {
      return o("WAWebVoipGatingUtils").canCreateGuestCallLinks() ? _() : p();
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    function _() {
      return s._(/*BTDS*/ "", [
        s._param(
          "learn_more_link",
          u.jsx(r("WDSTextualLink.react"), {
            href: o("WAWebFaqUrl").getCallLinksFaqUrl(),
            testid: "voip_call_link_description_learn_more",
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.getWaitingRoomApprovalNoteText = c),
      (l.getCallLinkSharePanelDescriptionText = d),
      (l.getCreateCallLinkDescriptionText = m));
  },
  226,
);
