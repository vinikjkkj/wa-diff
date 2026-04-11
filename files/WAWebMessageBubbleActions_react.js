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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(22),
        n = e.direction,
        r = e.theme,
        a;
      if (e.placeholder === !0) {
        var i;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = u.jsx("div", {
              className:
                "x78zum5 x1iyjqo2 x6s0dn4 xl56j7k x1yrsyyn x6ikm8r x10wlt62 x1f6kntn xfjzk2p x1fc57z9 xo1mcw5 x2b8uid xlyipyv xuxw1ft xh8yej3 xa0aww2",
              children: "\u200B",
            })),
            (t[0] = i))
          : (i = t[0]),
          (a = i));
      } else {
        var l;
        (t[1] !== e
          ? ((l = e.items.map(function (t, n) {
              return u.createElement(
                _,
                babelHelpers.extends({}, e, { index: n, key: n }),
              );
            })),
            (t[1] = e),
            (t[2] = l))
          : (l = t[2]),
          (a = l));
      }
      var s = r === d.POLL_RECEIVER || r === d.POLL_SENDER,
        c = r === d.EVENT_CREATION,
        p = e.direction || "horizontal",
        f;
      t[3] !== r
        ? ((f =
            r === d.STICKER_PACK
              ? [m.stickerPackContainer, o("WAWebUISpacing").uiPadding.bottom4]
              : m.container),
          (t[3] = r),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== c
        ? ((g = c
            ? [
                o("WAWebUISpacing").uiMargin.start0,
                o("WAWebUISpacing").uiMargin.end0,
                o("WAWebUISpacing").uiMargin.top5,
              ]
            : o("WAWebUISpacing").uiMargin.top10),
          (t[5] = c),
          (t[6] = g))
        : (g = t[6]);
      var h = s && m.pollActionsContainer,
        y = r === d.NO_DIVIDER && n !== "vertical" && m.noDividerContainer,
        C = s && m.containerPolls,
        b;
      t[7] !== r
        ? ((b = r === d.FORWARDED_NEWSLETTER && [
            o("WAWebUISpacing").uiMargin.horiz0,
            o("WAWebUISpacing").uiMargin.top3,
          ]),
          (t[7] = r),
          (t[8] = b))
        : (b = t[8]);
      var v = r === d.ALBUM && m.containerAlbum,
        S = r === d.MEDIA_DOCUMENT && m.mediaDocumentContainer,
        R;
      t[9] !== f ||
      t[10] !== g ||
      t[11] !== h ||
      t[12] !== y ||
      t[13] !== C ||
      t[14] !== b ||
      t[15] !== v ||
      t[16] !== S
        ? ((R = [f, g, h, y, C, b, v, S]),
          (t[9] = f),
          (t[10] = g),
          (t[11] = h),
          (t[12] = y),
          (t[13] = C),
          (t[14] = b),
          (t[15] = v),
          (t[16] = S),
          (t[17] = R))
        : (R = t[17]);
      var L;
      return (
        t[18] !== a || t[19] !== p || t[20] !== R
          ? ((L = u.jsx(o("WAWebFlex.react").FlexContainer, {
              direction: p,
              xstyle: R,
              align: "center",
              justify: "evenly",
              children: a,
            })),
            (t[18] = a),
            (t[19] = p),
            (t[20] = R),
            (t[21] = L))
          : (L = t[21]),
        L
      );
    }
    function _(t) {
      var n,
        a = o("react-compiler-runtime").c(30),
        i = t.direction,
        l = t.index,
        s = t.items,
        p = t.theme,
        _ = s[l],
        g = r("useWAWebIsKeyboardUser")(),
        h = g.isKeyboardUser,
        y = c(!1),
        C = y[0],
        b = y[1],
        v;
      a[0] !== _.disabled
        ? ((v = { disabled: _.disabled }), (a[0] = _.disabled), (a[1] = v))
        : (v = a[1]);
      var S = r("useWAWebStaticButtonA11y")(
          _.disabled === !0 ? void 0 : _.onClick,
          v,
        ),
        R = S[0],
        L = S[1],
        E = "";
      _.disabled !== !0 &&
        !o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() &&
        (E = o(
          "WAWebKeyboardListHotKeys.react",
        ).LIST_FOCUSABLE_ITEM_CLASS_NAME);
      var k;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t) {
            b(!0);
          }),
          (a[2] = k))
        : (k = a[2]);
      var I = k,
        T;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            b(!1);
          }),
          (a[3] = T))
        : (T = a[3]);
      var D = T,
        x = p === d.POLL_RECEIVER || p === d.POLL_SENDER,
        $ = _.Icon,
        P = _.testid,
        N;
      a[4] !== i ||
      a[5] !== l ||
      a[6] !== x ||
      a[7] !== _.disabled ||
      a[8] !== _.xstyle ||
      a[9] !== s.length ||
      a[10] !== E ||
      a[11] !== p
        ? ((N = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (e || (e = r("stylex")))(
              m.actionsBtn,
              x && m.pollActionsItem,
              p === d.FORWARDED_NEWSLETTER && m.channelActionsItem,
              _.disabled === !0 && f(p),
              i === "vertical" && l < s.length - 1 && m.notLastActionBtn,
              p === d.NO_DIVIDER &&
                (l === 0 || i !== "vertical") &&
                m.noDividerItem,
              _.xstyle,
            ),
            E,
          )),
          (a[4] = i),
          (a[5] = l),
          (a[6] = x),
          (a[7] = _.disabled),
          (a[8] = _.xstyle),
          (a[9] = s.length),
          (a[10] = E),
          (a[11] = p),
          (a[12] = N))
        : (N = a[12]);
      var M = (n = _.title) != null ? n : _.label,
        w =
          C &&
          h &&
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
        A;
      a[13] !== w
        ? ((A = [o("WAWebUISpacing").uiMargin.all4, w]),
          (a[13] = w),
          (a[14] = A))
        : (A = a[14]);
      var F;
      a[15] !== $
        ? ((F = $ ? u.jsx($, { xstyle: m.icon }) : null),
          (a[15] = $),
          (a[16] = F))
        : (F = a[16]);
      var O;
      a[17] !== _.label || a[18] !== A || a[19] !== F
        ? ((O = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: A,
            align: "center",
            children: [F, _.label],
          })),
          (a[17] = _.label),
          (a[18] = A),
          (a[19] = F),
          (a[20] = O))
        : (O = a[20]);
      var B;
      return (
        a[21] !== L ||
        a[22] !== R ||
        a[23] !== l ||
        a[24] !== _.disabled ||
        a[25] !== _.testid ||
        a[26] !== N ||
        a[27] !== M ||
        a[28] !== O
          ? ((B = u.jsx(
              "button",
              babelHelpers.extends(
                {
                  ref: R,
                  "data-testid": void 0,
                  className: N,
                  "aria-disabled": _.disabled,
                },
                L,
                { onFocus: I, onBlur: D, title: M, children: O },
              ),
              l,
            )),
            (a[21] = L),
            (a[22] = R),
            (a[23] = l),
            (a[24] = _.disabled),
            (a[25] = _.testid),
            (a[26] = N),
            (a[27] = M),
            (a[28] = O),
            (a[29] = B))
          : (B = a[29]),
        B
      );
    }
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
