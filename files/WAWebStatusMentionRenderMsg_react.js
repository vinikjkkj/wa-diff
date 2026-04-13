__d(
  "WAWebStatusMentionRenderMsg.react",
  [
    "fbt",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebStatusMentionFormatMsgText",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebStatusThumbnail",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.displayAuthor,
        a = e.msg,
        i = a.safe(),
        l = i.id.fromMe,
        c = i.subtype === "status_group_mention_message",
        d = t.formattedTitle,
        m = l
          ? s._(/*BTDS*/ "Your status")
          : s._(/*BTDS*/ "{name}'s status", [s._param("name", d)]),
        p = r("WAWebStatusMentionFormatMsgText")({ msg: a, options: {} }),
        _;
      l
        ? (_ = o("WAWebUserPrefsMeUser").getMeUser())
        : c
          ? (_ = i.id.participant)
          : (_ = t.id);
      var f = a.quotedStanzaID,
        g = r("useWAWebStatusThumbnail")(_, f);
      return u.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: i,
        displayAuthor: n,
        children: [
          u.jsxs("div", {
            className:
              "x78zum5 x1q0g3np x6s0dn4 xbrszos xea3l6g x18isctg x2q3nzr x1bu39yj x6ikm8r x10wlt62 x1198e8h x1aorv3j x13m54ha xw01apr",
            children: [
              u.jsxs("div", {
                className:
                  "x78zum5 xdt5ytf x1iyjqo2 x123j3cw xde1mab x1ykpatu x12w63v0 xeuugli x6ikm8r x10wlt62",
                children: [
                  u.jsx("div", {
                    className:
                      "x1nxh6w3 x1s688f x14ug900 x17fgdl5 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                    children: m,
                  }),
                  u.jsx("span", {
                    className:
                      "x190qgfh xhslqc4 x1xxsxie x6ikm8r x10wlt62 xlyipyv x104kibb x1h7i4cw x1ua5tub",
                    children: p,
                  }),
                ],
              }),
              g != null &&
                u.jsx("div", {
                  className:
                    "x2lah0s x1fxk84t x1dnml7z x6ikm8r x10wlt62 xea3l6g x18isctg",
                  children: u.jsx("div", {
                    className: "xh8yej3 x5yr21d xl1xv1r x18d0r48 x1xsqp64",
                    style: { backgroundImage: "url(" + g.url + ")" },
                  }),
                }),
            ],
          }),
          u.jsx(r("WAWebMessageSpacerText.react"), { msg: a }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
