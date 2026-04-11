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
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.elevatedPushNamesEnabled,
        a = e.onClick,
        i = e.participant,
        l = n === void 0 ? !1 : n,
        s = i.contact,
        c;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var m;
        ((c = [
          (m = o("WAWebContactGetters")).getId,
          m.getShowBusinessCheckmarkAsPrimary,
          m.getName,
          m.getPushname,
          m.getNotifyName,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
        ]),
          (t[0] = c));
      } else c = t[0];
      var p = o("useWAWebContactValues").useContactValues(s.id, c),
        _ = p[0],
        f = p[1],
        g = p[6],
        h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o("WAWebBizGatingUtils").canDisplayLabel()), (t[1] = h))
        : (h = t[1]);
      var y;
      t[2] !== s || t[3] !== l || t[4] !== f
        ? ((y = u.jsx(o("WAWebName.react").Name, {
            contact: s,
            showBusinessCheckmark: f,
            showLabelIcon: h,
            titlify: !0,
            ellipsify: !0,
            you: !0,
            showNotifyName: l,
            elevatedPushNamesEnabled: l,
          })),
          (t[2] = s),
          (t[3] = l),
          (t[4] = f),
          (t[5] = y))
        : (y = t[5]);
      var C = y,
        b;
      t[6] !== i
        ? ((b = o("WAWebClock").Clock.pastParticipantOnDateAtTime(
            i.leaveTs,
            d(i),
          )),
          (t[6] = i),
          (t[7] = b))
        : (b = t[7]);
      var v = b,
        S;
      t[8] !== s || t[9] !== l || t[10] !== g
        ? ((S =
            o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(s) && l
              ? g
              : null),
          (t[8] = s),
          (t[9] = l),
          (t[10] = g),
          (t[11] = S))
        : (S = t[11]);
      var R = S,
        L;
      t[12] !== _
        ? ((L = u.jsx(o("WAWebDetailImage.react").DetailImage, { id: _ })),
          (t[12] = _),
          (t[13] = L))
        : (L = t[13]);
      var E;
      return (
        t[14] !== a || t[15] !== C || t[16] !== v || t[17] !== R || t[18] !== L
          ? ((E = u.jsx(r("WAWebCellFrame.react"), {
              image: L,
              primary: C,
              secondary: v,
              secondaryDetail: R,
              onClick: a,
            })),
            (t[14] = a),
            (t[15] = C),
            (t[16] = v),
            (t[17] = R),
            (t[18] = L),
            (t[19] = E))
          : (E = t[19]),
        E
      );
    }
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
