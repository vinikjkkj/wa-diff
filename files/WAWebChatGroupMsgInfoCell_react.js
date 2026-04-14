__d(
  "WAWebChatGroupMsgInfoCell.react",
  [
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebChatContactUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "react",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("useWAWebModelValues").useModelValues(e.msgInfoParticipant, [
          "t",
        ]),
        n = o("useWAWebContactValues").useContactValues(e.contact.id, [
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getName,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebContactGetters").getNotifyName,
        ]),
        a = n[0],
        i = n[1],
        l = n[2],
        u = n[3],
        c = r("useWAWebContactFormattedUsernameOrPhoneByChat")(
          e.chat,
          e.contact,
        ),
        d = c.formattedUsernameOrPhone,
        m = c.isPhoneNumberForceMasked,
        p = e.contact,
        _ = e.elevatedPushNamesEnabled,
        f = _ === void 0 ? !1 : _,
        g = e.image,
        h = { cursor: "auto" },
        y = o("WAWebClock").Clock.relativeDateAndTimeStr(t.t),
        C = s.jsx("span", { title: y, children: y }),
        b;
      !i &&
        (l === d || m === !0) &&
        u &&
        (b = f
          ? s.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: d,
            })
          : s.jsx(o("WAWebEmojiText.react").EmojiText, {
              className: "xxayilr",
              direction: "auto",
              text: u,
            }));
      var v, S;
      return (
        o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(p) && f
          ? ((v = o("WAWebChatContactUtils").getFormattedNotifyName(u)),
            (S = o("WAWebChatContactUtils").getAccessibleNotifyName(u)))
          : (v = l),
        s.jsx(r("WAWebChatCell.react"), {
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          image:
            g != null
              ? g
              : s.jsx(o("WAWebDetailImage.react").DetailImage, { id: a }),
          primary: s.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: v,
            ariaLabel: S,
            titlify: !0,
            ellipsify: !0,
          }),
          secondary: C,
          secondaryDetail: b,
          style: h,
          theme: e.theme,
          idle: !0,
        })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
