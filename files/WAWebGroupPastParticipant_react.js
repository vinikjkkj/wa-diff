__d(
  "WAWebGroupPastParticipant.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebCellFrame.react",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebLeaveReasonType",
    "WAWebName.react",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.elevatedPushNamesEnabled,
        n = t === void 0 ? !1 : t,
        a = e.onClick,
        i = e.participant,
        l = i.contact,
        s = o("useWAWebContactValues").useContactValues(l.id, [
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getPushname,
          o("WAWebContactGetters").getNotifyName,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
        ]),
        c = s[0],
        m = s[1],
        p = s[2],
        _ = s[3],
        f = s[4],
        g = s[5],
        h = s[6],
        y = u.jsx(o("WAWebName.react").Name, {
          contact: l,
          showBusinessCheckmark: m,
          showLabelIcon: o("WAWebBizGatingUtils").canDisplayLabel(),
          titlify: !0,
          ellipsify: !0,
          you: !0,
          showNotifyName: n,
          elevatedPushNamesEnabled: n,
        }),
        C = o("WAWebClock").Clock.pastParticipantOnDateAtTime(i.leaveTs, d(i)),
        b =
          o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(l) && n ? h : null;
      return u.jsx(r("WAWebCellFrame.react"), {
        image: u.jsx(o("WAWebDetailImage.react").DetailImage, { id: c }),
        primary: y,
        secondary: C,
        secondaryDetail: b,
        onClick: a,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = o("WAWebUserPrefsMeUser").isMeAccount(e.id);
      return e.leaveReason === o("WAWebLeaveReasonType").LeaveReason.Left
        ? t
          ? s._(/*BTDS*/ "Left")
          : s._(/*BTDS*/ "Left")
        : t
          ? s._(/*BTDS*/ "Removed")
          : s._(/*BTDS*/ "Removed");
    }
    l.default = c;
  },
  226,
);
