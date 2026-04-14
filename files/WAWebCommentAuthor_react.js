__d(
  "WAWebCommentAuthor.react",
  [
    "WAWebChatParticipantColor",
    "WAWebName.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "react",
    "stylex",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = t.chat,
        i = t.contact,
        l = o(
          "useWAWebDefaultProfileColors",
        ).isDefaultProfileColorsEnabledForWid(i.id)
          ? 1
          : o("WAWebChatParticipantColor").getAssignedColor(
              a,
              i.id,
              "WAWebCommentAuthor-" +
                ((n = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                  a.id,
                )) != null
                  ? n
                  : ""),
            ),
        s = o("useWAWebGroupColors").useGroupsColorStyle(l, "color"),
        c = o("useWAWebDefaultProfileColors").useDefaultProfileColors(i.id),
        d = c.foreground;
      return u.jsx(
        "span",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(d != null ? d : s),
          {
            children: u.jsx(o("WAWebName.react").Name, {
              contact: i,
              elevatedPushNamesEnabled: !0,
              titlify: !0,
              ellipsify: !0,
              you: !0,
              showNotifyName: !0,
            }),
          },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
