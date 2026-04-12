__d(
  "WAWebGroupMemberUpdatePastParticipantRow.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFrontendContactGetters",
    "WAWebLeaveReasonType",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClick,
        n = e.participant,
        a = n.contact,
        i = o("useWAWebContactValues").useContactValues(a.id, [
          o("WAWebContactGetters").getId,
        ]),
        l = i[0],
        s = o("WAWebFrontendContactGetters").getFormattedName(a),
        c = d(n, s),
        m = o("WAWebClock").Clock.pastParticipantOnDateAtTime(n.leaveTs, "");
      return u.jsx(r("WAWebCellFrame.react"), {
        image: u.jsx(o("WAWebDetailImage.react").DetailImage, { id: l }),
        primary: c,
        secondary: m,
        onClick: t,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
      var n = o("WAWebUserPrefsMeUser").isMeAccount(e.id);
      return e.leaveReason === o("WAWebLeaveReasonType").LeaveReason.Left
        ? n
          ? s._(/*BTDS*/ "You left the group")
          : s._(/*BTDS*/ "{name} left the group", [s._param("name", t)])
        : n
          ? s._(/*BTDS*/ "You were removed")
          : s._(/*BTDS*/ "{name} was removed", [s._param("name", t)]);
    }
    l.default = c;
  },
  226,
);
