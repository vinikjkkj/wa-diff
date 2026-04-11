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
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.onClick,
        a = e.participant,
        i = a.contact,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebContactGetters").getId]), (t[0] = l))
        : (l = t[0]);
      var s = o("useWAWebContactValues").useContactValues(i.id, l),
        c = s[0],
        m;
      if (t[1] !== i || t[2] !== a) {
        var p = o("WAWebFrontendContactGetters").getFormattedName(i);
        ((m = d(a, p)), (t[1] = i), (t[2] = a), (t[3] = m));
      } else m = t[3];
      var _ = m,
        f;
      t[4] !== a.leaveTs
        ? ((f = o("WAWebClock").Clock.pastParticipantOnDateAtTime(
            a.leaveTs,
            "",
          )),
          (t[4] = a.leaveTs),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] !== c
        ? ((h = u.jsx(o("WAWebDetailImage.react").DetailImage, { id: c })),
          (t[6] = c),
          (t[7] = h))
        : (h = t[7]);
      var y;
      return (
        t[8] !== n || t[9] !== _ || t[10] !== g || t[11] !== h
          ? ((y = u.jsx(r("WAWebCellFrame.react"), {
              image: h,
              primary: _,
              secondary: g,
              onClick: n,
            })),
            (t[8] = n),
            (t[9] = _),
            (t[10] = g),
            (t[11] = h),
            (t[12] = y))
          : (y = t[12]),
        y
      );
    }
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
