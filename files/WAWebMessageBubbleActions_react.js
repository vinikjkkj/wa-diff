__d(
  "WAWebMessageBubbleActions.react",
  [
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebFlex.react",
    "WAWebKeyboardListHotKeys.react",
    "WAWebMiscGatingUtils",
    "WAWebUISpacing",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "useWAWebIsKeyboardUser",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "NO_DIVIDER",
        "POLL_SENDER",
        "POLL_RECEIVER",
        "EVENT_CREATION",
        "FORWARDED_NEWSLETTER",
        "ALBUM",
        "STICKER_PACK",
        "MEDIA_DOCUMENT",
      ]),
      m = {
        noDividerContainer: { borderTopStyle: "x1ejq31n", $$css: !0 },
        noDividerItem: { marginTop: "xdj266r", $$css: !0 },
        icon: {
          marginTop: "xdj266r",
          marginInlineEnd: "xf6vk7d",
          marginBottom: "xat24cr",
          marginInlineStart: "xpcyujq",
          $$css: !0,
        },
        container: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          marginInlineStart: "xsocnq2",
          marginInlineEnd: "xytepxb",
          $$css: !0,
        },
        containerPolls: {
          marginInlineStart: "xm2xy8z",
          marginInlineEnd: "x1fl596a",
          $$css: !0,
        },
        containerAlbum: {
          marginInlineStart: "xy0t4y3",
          marginInlineEnd: "xzpsbe2",
          $$css: !0,
        },
        actionsBtn: {
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1yrsyyn",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1f6kntn",
          fontWeight: "xfjzk2p",
          lineHeight: "x1fc57z9",
          color: "xo1mcw5",
          textAlign: "x2b8uid",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          width: "xh8yej3",
          paddingBottom: "xa0aww2",
          $$css: !0,
        },
        disabledActionsBtn: { color: "xhslqc4", cursor: "xt0e3qv", $$css: !0 },
        pollDisabledActionsBtnReceiver: { color: "xchv7qt", $$css: !0 },
        pollDisabledActionsBtnSender: { color: "x2kn7w9", $$css: !0 },
        notLastActionBtn: {
          paddingBottom: "x1a8lsjc",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        pollActionsContainer: { marginTop: "x1xmf6yo", $$css: !0 },
        pollActionsItem: {
          paddingTop: "x1yrsyyn",
          paddingBottom: "x10b6aqq",
          $$css: !0,
        },
        stickerPackContainer: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        channelActionsItem: { paddingBottom: "xwib8y2", $$css: !0 },
        mediaDocumentContainer: {
          marginInlineStart: "xy0t4y3",
          marginInlineEnd: "xzpsbe2",
          marginTop: "xav9cv8",
          $$css: !0,
        },
      };
    function p(e) {
      var t = e.direction,
        n = e.theme,
        r;
      e.placeholder === !0
        ? (r = u.jsx("div", {
            className:
              "x78zum5 x1iyjqo2 x6s0dn4 xl56j7k x1yrsyyn x6ikm8r x10wlt62 x1f6kntn xfjzk2p x1fc57z9 xo1mcw5 x2b8uid xlyipyv xuxw1ft xh8yej3 xa0aww2",
            children: "\u200B",
          }))
        : (r = e.items.map(function (t, n) {
            return u.createElement(
              _,
              babelHelpers.extends({}, e, { index: n, key: n }),
            );
          }));
      var a = n === d.POLL_RECEIVER || n === d.POLL_SENDER,
        i = n === d.EVENT_CREATION;
      return u.jsx(o("WAWebFlex.react").FlexContainer, {
        direction: e.direction || "horizontal",
        xstyle: [
          n === d.STICKER_PACK
            ? [m.stickerPackContainer, o("WAWebUISpacing").uiPadding.bottom4]
            : m.container,
          i
            ? [
                o("WAWebUISpacing").uiMargin.start0,
                o("WAWebUISpacing").uiMargin.end0,
                o("WAWebUISpacing").uiMargin.top5,
              ]
            : o("WAWebUISpacing").uiMargin.top10,
          a && m.pollActionsContainer,
          n === d.NO_DIVIDER && t !== "vertical" && m.noDividerContainer,
          a && m.containerPolls,
          n === d.FORWARDED_NEWSLETTER && [
            o("WAWebUISpacing").uiMargin.horiz0,
            o("WAWebUISpacing").uiMargin.top3,
          ],
          n === d.ALBUM && m.containerAlbum,
          n === d.MEDIA_DOCUMENT && m.mediaDocumentContainer,
        ],
        align: "center",
        justify: "evenly",
        children: r,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n,
        a = t.direction,
        i = t.index,
        l = t.items,
        s = t.theme,
        p = l[i],
        _ = r("useWAWebIsKeyboardUser")(),
        g = _.isKeyboardUser,
        h = c(!1),
        y = h[0],
        C = h[1],
        b = r("useWAWebStaticButtonA11y")(
          p.disabled === !0 ? void 0 : p.onClick,
          { disabled: p.disabled },
        ),
        v = b[0],
        S = b[1],
        R = "";
      p.disabled !== !0 &&
        !o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() &&
        (R = o(
          "WAWebKeyboardListHotKeys.react",
        ).LIST_FOCUSABLE_ITEM_CLASS_NAME);
      var L = function (t) {
          C(!0);
        },
        E = function (t) {
          C(!1);
        },
        k = s === d.POLL_RECEIVER || s === d.POLL_SENDER,
        I = p.Icon;
      return u.jsx(
        "button",
        babelHelpers.extends(
          {
            ref: v,
            "data-testid": void 0,
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              (e || (e = r("stylex")))(
                m.actionsBtn,
                k && m.pollActionsItem,
                s === d.FORWARDED_NEWSLETTER && m.channelActionsItem,
                p.disabled === !0 && f(s),
                a === "vertical" && i < l.length - 1 && m.notLastActionBtn,
                s === d.NO_DIVIDER &&
                  (i === 0 || a !== "vertical") &&
                  m.noDividerItem,
                p.xstyle,
              ),
              R,
            ),
            "aria-disabled": p.disabled,
          },
          S,
          {
            onFocus: L,
            onBlur: E,
            title: (n = p.title) != null ? n : p.label,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                o("WAWebUISpacing").uiMargin.all4,
                y &&
                  g &&
                  o("WDSFocusStateStyles").WDSFocusStateStyles
                    .genericFocusPersistent,
              ],
              align: "center",
              children: [I ? u.jsx(I, { xstyle: m.icon }) : null, p.label],
            }),
          },
        ),
        i,
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      if (!e) return m.disabledActionsBtn;
      switch (e) {
        case d.POLL_RECEIVER:
          return m.pollDisabledActionsBtnReceiver;
        case d.POLL_SENDER:
          return m.pollDisabledActionsBtnSender;
        default:
          return m.disabledActionsBtn;
      }
    }
    ((l.BubbleActionsTheme = d), (l.BubbleActions = p));
  },
  98,
);
