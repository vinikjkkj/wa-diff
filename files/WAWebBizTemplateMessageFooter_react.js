__d(
  "WAWebBizTemplateMessageFooter.react",
  [
    "WAWebEmojiText.react",
    "WAWebFormatHeaderFooter",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.dir,
        n = e.footer,
        a = e.isShown,
        i = e.msg,
        l = e.rtl,
        u = e.trusted,
        c = e.type,
        d = l !== r("WAWebL10N").isRTL();
      if (a && n != null) {
        var m = i.isDynamicReplyButtonsMsg
            ? o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(
                o("WAWebMsgLinks").getFooterLinks(i),
                u === !0,
              )
            : {},
          p = m.formatters,
          _ = m.selectable;
        return s.jsx(r("WAWebMessageSpacerText.react"), {
          className: {
            0: "x9f619 x1yrsyyn xyri2b x1120s5i x1c1uobl x1nxh6w3 xuy8w9f xhslqc4",
            2: "x9f619 x1nxh6w3 xuy8w9f xhslqc4 x4p5aij x11lfxj5 x10b6aqq x25sj25",
            1: "x9f619 x1yrsyyn xyri2b x1c1uobl x1nxh6w3 xuy8w9f xhslqc4 x1i2zvha",
            3: "x9f619 x1nxh6w3 xuy8w9f xhslqc4 x4p5aij x11lfxj5 x25sj25 x1i2zvha",
          }[((c !== o("WAWebMsgType").MSG_TYPE.CHAT) << 1) | (!!d << 0)],
          spacer: !l,
          msg: i,
          children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: n,
            direction: t,
            dirMismatch: d,
            selectable: _,
            formatters: p,
          }),
        });
      }
      return null;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
