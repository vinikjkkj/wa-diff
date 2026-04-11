__d(
  "WAWebMentionMutatorComponentBase.react",
  [
    "WABidi",
    "WAWebABProps",
    "WAWebCopyPasteSelectable.react",
    "WAWebDisplayType",
    "WAWebEmojiFormatMutator",
    "WAWebFormat",
    "WAWebGroupMetadataContext",
    "WAWebJsxSerializer.react",
    "WAWebMentionDisplayUtils",
    "WAWebMentionMessageContext",
    "WAWebMentionPill.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWrapperDisplayTypeContext",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.use,
      d = {
        gallery: { color: "x1heor9g", $$css: !0 },
        matchedMention: { cursor: "x1ypdohk", color: "x1ph7ams", $$css: !0 },
        lastMessage: { fontWeight: "xk50ysn", $$css: !0 },
        matchedMentionRefresh: {
          color: "xo1mcw5",
          fontWeight: "x1xlr1w8",
          textDecoration: "x1hl2dhg",
          ":hover_textDecoration": "xt0b8zv",
          ":focus-visible_textDecoration": "xbvygy2",
          ":focus-visible_color": "x17f7hit",
          ":focus-visible_backgroundColor": "xp30eni",
          ":focus-visible_textUnderlineOffset": "xhmieyt",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a,
        i,
        l = c(r("WAWebWrapperDisplayTypeContext")),
        s = c(r("WAWebGroupMetadataContext")),
        m = c(r("WAWebMentionMessageContext")),
        p = m.isOutgoing,
        _ = m.isRead,
        f = t.ariaLabel,
        g = t.jid,
        h = t.lastMessage,
        y = t.onClick,
        C = t.selectable,
        b = t.text,
        v = t.theme,
        S = b != null ? b : "",
        R = S.startsWith("@") ? S.slice(1) : S,
        L = o("WABidi").dir(R) || "auto",
        E = (n = v == null ? void 0 : v.quoted) != null ? n : !1,
        k = r("WAWebFormat")(
          R,
          [[[r("WAWebEmojiFormatMutator"), { selectable: C }]]],
          r("WAWebJsxSerializer.react"),
          void 0,
          1 / 0,
        ),
        I = y && !E,
        T = l === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
        D =
          (a = s == null || (i = s.participants) == null ? void 0 : i.length) !=
          null
            ? a
            : 0,
        x = o("WAWebABProps").getABPropConfigValue(
          "wa_web_highlight_me_mention",
        ),
        $ =
          g != null &&
          ((r("WAWebWid").isUser(g) &&
            o("WAWebUserPrefsMeUser").isSerializedWidMe(g)) ||
            g === "@all") &&
          x &&
          D >
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_highlight_me_mention_groupsize_threshold",
            ),
        P = [
          I === !0 && d.matchedMention,
          h === !0 && d.lastMessage,
          I === !0 && h !== !0 && d.matchedMentionRefresh,
          T && d.gallery,
        ];
      return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
        dir: "auto",
        "data-jid": g,
        "data-display": R,
        className: (e || (e = r("stylex")))(P),
        onClick: x ? void 0 : y,
        plainText: o("WAWebMentionDisplayUtils").addAtPrefixForMention(R),
        selectable: C,
        "aria-label": f,
        selectAll: !0,
        tabIndex: x ? -1 : void 0,
        appTextTemplate: "\u200B" + g + "\u200B",
        children: x
          ? u.jsx(r("WAWebMentionPill.react"), {
              isMe: $,
              isOutgoing: p,
              isQuoted: E,
              isRead: _,
              onClick: y,
              children: u.jsx("span", { dir: L, children: k }),
            })
          : u.jsxs(u.Fragment, {
              children: ["@", u.jsx("span", { dir: L, children: k })],
            }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
