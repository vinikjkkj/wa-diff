__d(
  "WAWebEventParticipantCell.react",
  [
    "fbt",
    "WAWebCellV2.react",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFormatEventDateString",
    "WAWebName.react",
    "WAWebTag.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.chat,
        a = e.eventCreator,
        i = e.isInteractive,
        l = e.onParticipantClick,
        d = e.sender,
        m = e.senderTimestampMs,
        p;
      t[0] !== d
        ? ((p = o("WAWebContactCollection").ContactCollection.assertGet(d)),
          (t[0] = d),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f = r("useWAWebContactFormattedUsernameOrPhoneByChat")(n, _),
        g = f.formattedUsernameOrPhone,
        h = c(null),
        y;
      t[2] !== _
        ? ((y = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(_)),
          (t[2] = _),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== _.id || t[5] !== l
        ? ((b = function () {
            l(_.id);
          }),
          (t[4] = _.id),
          (t[5] = l),
          (t[6] = b))
        : (b = t[6]);
      var v = b,
        S;
      t[7] !== _ || t[8] !== C
        ? ((S = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: u.jsx(o("WAWebName.react").Name, {
              contact: _,
              showLabelIcon: !1,
              titlify: !0,
              ellipsify: !0,
              you: !0,
              elevatedPushNamesEnabled: C,
              showNotifyName: !0,
            }),
          })),
          (t[7] = _),
          (t[8] = C),
          (t[9] = S))
        : (S = t[9]);
      var R = S,
        L;
      t[10] !== a
        ? ((L = a
            ? u.jsx(o("WAWebTag.react").Tag, {
                theme: o("WAWebTag.react").TagTheme.Primary,
                testid: void 0,
                children: s._(/*BTDS*/ "Event creator"),
              })
            : null),
          (t[10] = a),
          (t[11] = L))
        : (L = t[11]);
      var E = L,
        k;
      t[12] !== m
        ? ((k =
            m != null
              ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: o(
                    "WAWebFormatEventDateString",
                  ).getEventDateStringFor(m / 1e3),
                })
              : null),
          (t[12] = m),
          (t[13] = k))
        : (k = t[13]);
      var I = k,
        T;
      t[14] !== g || t[15] !== C
        ? ((T = C
            ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  text: g,
                }),
              })
            : null),
          (t[14] = g),
          (t[15] = C),
          (t[16] = T))
        : (T = t[16]);
      var D = T,
        x;
      t[17] !== _.id
        ? ((x = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: _.id,
            size: 40,
            waitIdle: !0,
          })),
          (t[17] = _.id),
          (t[18] = x))
        : (x = t[18]);
      var $ = x,
        P;
      return (
        t[19] !== $ ||
        t[20] !== v ||
        t[21] !== i ||
        t[22] !== R ||
        t[23] !== E ||
        t[24] !== I ||
        t[25] !== D
          ? ((P = u.jsx(r("WAWebCellV2.react"), {
              ref: h,
              primary: R,
              primaryRight: E,
              secondary: I,
              secondaryRight: D,
              detailLeft: $,
              alignPrimary: "start",
              size: "medium",
              onClick: v,
              interactive: i,
            })),
            (t[19] = $),
            (t[20] = v),
            (t[21] = i),
            (t[22] = R),
            (t[23] = E),
            (t[24] = I),
            (t[25] = D),
            (t[26] = P))
          : (P = t[26]),
        P
      );
    }
    l.default = d;
  },
  226,
);
