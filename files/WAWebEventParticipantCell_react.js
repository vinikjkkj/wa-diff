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
    "useWAWebContactFormattedUsernameOrPhoneByChat",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = e.chat,
        n = e.eventCreator,
        a = e.isInteractive,
        i = e.onParticipantClick,
        l = e.sender,
        d = e.senderTimestampMs,
        m = o("WAWebContactCollection").ContactCollection.assertGet(l),
        p = r("useWAWebContactFormattedUsernameOrPhoneByChat")(t, m),
        _ = p.formattedUsernameOrPhone,
        f = c(null),
        g = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(m);
      function h() {
        i(m.id);
      }
      var y = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          children: u.jsx(o("WAWebName.react").Name, {
            contact: m,
            showLabelIcon: !1,
            titlify: !0,
            ellipsify: !0,
            you: !0,
            elevatedPushNamesEnabled: g,
            showNotifyName: !0,
          }),
        }),
        C = n
          ? u.jsx(o("WAWebTag.react").Tag, {
              theme: o("WAWebTag.react").TagTheme.Primary,
              testid: void 0,
              children: s._(/*BTDS*/ "Event creator"),
            })
          : null,
        b =
          d != null
            ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: o("WAWebFormatEventDateString").getEventDateStringFor(
                  d / 1e3,
                ),
              })
            : null,
        v = g
          ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: _,
              }),
            })
          : null,
        S = u.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: m.id,
          size: 40,
          waitIdle: !0,
        });
      return u.jsx(r("WAWebCellV2.react"), {
        ref: f,
        primary: y,
        primaryRight: C,
        secondary: b,
        secondaryRight: v,
        detailLeft: S,
        alignPrimary: "start",
        size: "medium",
        onClick: h,
        interactive: a,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
