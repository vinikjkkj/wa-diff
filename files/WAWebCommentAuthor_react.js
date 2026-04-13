__d(
  "WAWebCommentAuthor.react",
  [
    "WAWebChatParticipantColor",
    "WAWebName.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.chat,
        i = t.contact,
        l;
      if (n[0] !== a || n[1] !== i.id) {
        var s;
        ((l = o(
          "useWAWebDefaultProfileColors",
        ).isDefaultProfileColorsEnabledForWid(i.id)
          ? 1
          : o("WAWebChatParticipantColor").getAssignedColor(
              a,
              i.id,
              "WAWebCommentAuthor-" +
                ((s = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                  a.id,
                )) != null
                  ? s
                  : ""),
            )),
          (n[0] = a),
          (n[1] = i.id),
          (n[2] = l));
      } else l = n[2];
      var c = l,
        d = o("useWAWebGroupColors").useGroupsColorStyle(c, "color"),
        m = o("useWAWebDefaultProfileColors").useDefaultProfileColors(i.id),
        p = m.foreground,
        _;
      n[3] !== d || n[4] !== p
        ? ((_ = (e || (e = r("stylex"))).props(p != null ? p : d)),
          (n[3] = d),
          (n[4] = p),
          (n[5] = _))
        : (_ = n[5]);
      var f;
      n[6] !== i
        ? ((f = u.jsx(o("WAWebName.react").Name, {
            contact: i,
            elevatedPushNamesEnabled: !0,
            titlify: !0,
            ellipsify: !0,
            you: !0,
            showNotifyName: !0,
          })),
          (n[6] = i),
          (n[7] = f))
        : (f = n[7]);
      var g;
      return (
        n[8] !== _ || n[9] !== f
          ? ((g = u.jsx("span", babelHelpers.extends({}, _, { children: f }))),
            (n[8] = _),
            (n[9] = f),
            (n[10] = g))
          : (g = n[10]),
        g
      );
    }
    l.default = c;
  },
  98,
);
