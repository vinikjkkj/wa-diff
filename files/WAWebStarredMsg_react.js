__d(
  "WAWebStarredMsg.react",
  [
    "WANullthrows",
    "WAWebChatGetters",
    "WAWebChevronIcon.react",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGalleryMsg.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMessageKeptBySubtitle.react",
    "WAWebMessagePosition",
    "WAWebMessageWrapper.react",
    "WAWebStylesEnv",
    "WAWebWidFormat",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = c.useState,
      _ = {
        chat: {
          marginInlineStart: "x7phf20",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        author: { marginInlineEnd: "x1p8j9ns", $$css: !0 },
      };
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.activeSelection,
        l = a.currSelection,
        s = a.displayType,
        c = a.msg,
        f = a.onClickMsg,
        g = a.selectedMessages,
        h = a.testid,
        y = m(null),
        C = m(null),
        b = p(!1),
        v = b[0],
        S = b[1],
        R = p(function () {
          return l ? l.value === c : !1;
        }),
        L = R[0],
        E = R[1],
        k = p(function () {
          return i ? i.value === c : !1;
        }),
        I = k[0],
        T = k[1],
        D = p(!1),
        x = D[0],
        $ = D[1],
        P = function (t, n) {
          var e = t === "focus";
          if (e) {
            var a = C.current;
            a &&
              (r("WAWebFocusTracer").focus(a),
              n && o("WAWebDomScroll").scrollIntoViewIfNeeded(a));
          }
          E(e);
        },
        N = function (t, n) {
          if (t === "focus") {
            var e = C.current;
            e &&
              (r("WAWebFocusTracer").focus(e),
              n && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
          }
          T(!!t);
        };
      (o("useWAWebListener").useListener(l, c.id.toString(), P),
        o("useWAWebListener").useListener(i, c.id.toString(), N));
      var M = function () {
          v || S(!0);
        },
        w = function () {
          v || S(!0);
        },
        A = function () {
          v && S(!1);
        },
        F = function (t) {
          (t.stopPropagation(), t.preventDefault(), f == null || f(c));
        },
        O = function () {
          var e;
          (e = y.current) == null || e.openContextMenu();
        },
        B = function (t) {
          $(!0);
        },
        W = function (t) {
          $(!1);
        },
        q = function (t, n, r, o) {
          a.onMessageSelect == null || a.onMessageSelect(t, n, o);
        },
        U = function () {
          return y.current;
        },
        V = function () {
          return r("WANullthrows")(C.current);
        };
      d(n, function () {
        return { getElement: V, getWrapperRef: U };
      });
      var H = o("WAWebFrontendContactGetters").getFormattedName(c.senderObj),
        G = o("WAWebChatGetters").getIsUser(
          o("WAWebFrontendMsgGetters").getChat(c),
        )
          ? o("WAWebFrontendContactGetters").getFormattedName(
              o("WAWebContactCollection").ContactCollection.assertGet(c.to),
            )
            ? o("WAWebFrontendContactGetters").getFormattedName(
                o("WAWebContactCollection").ContactCollection.assertGet(c.to),
              )
            : o("WAWebWidFormat").widToFormattedUser(c.to)
          : o("WAWebFrontendMsgGetters").getChat(c).title(),
        z =
          s === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY
            ? null
            : u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x78zum5 x6s0dn4 xwoyzhm x1f6kntn x1fcty0u x9307sf",
                    },
                    1: {
                      className:
                        "x78zum5 x6s0dn4 xwoyzhm x1f6kntn x1fcty0u x9307sf xwgq4w4",
                    },
                  }[!!o("WAWebStylesEnv").hasEmoji << 0],
                  {
                    children: [
                      u.jsxs("div", {
                        className:
                          "x78zum5 x1c4vz4f x1nhvcw1 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                        children: [
                          u.jsx("div", {
                            className: "x1okw0bk xbelrpt",
                            children: u.jsx(
                              o("WAWebDetailImage.react").DetailImage,
                              { id: c.senderObj.id, size: 26 },
                            ),
                          }),
                          u.jsx(o("WAWebEmojiText.react").EmojiText, {
                            xstyle: _.author,
                            text: H,
                            direction: "auto",
                            titlify: !0,
                          }),
                          u.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              {
                                0: {
                                  className:
                                    "x1n2onr6 x1okw0bk x1xc55vz x1hmns74 x1y3wzot x1682cnc x1rmj1tg xszcg87 x13na15d xaawtem x13oecoc xbbkvkc",
                                },
                                1: {
                                  className:
                                    "x1n2onr6 x1okw0bk x1xc55vz x1hmns74 x1y3wzot x1682cnc x1rmj1tg xszcg87 x13na15d xaawtem x13oecoc xbbkvkc xpk2tj9",
                                },
                              }[!!r("WAWebL10N").isRTL() << 0],
                            ),
                          ),
                          u.jsx(o("WAWebEmojiText.react").EmojiText, {
                            xstyle: _.chat,
                            text: G,
                            direction: "auto",
                            titlify: !0,
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className:
                          "x1iyjqo2 x2lah0s xdzw4kq x1pg5gke x1qb5hxa xhslqc4 xp4054r x11njtxf",
                        dir: "auto",
                        children: o("WAWebClock").Clock.relativeStr(c.t),
                      }),
                      u.jsx("div", {
                        className: "x1okw0bk x1y332i5 xdzw4kq xeu7kla",
                        children: u.jsx(
                          o("WAWebChevronIcon.react").ChevronIcon,
                          { directional: !0, height: 21 },
                        ),
                      }),
                    ],
                  },
                ),
              ),
        j = { enter: F };
      j[r("WAWebL10N").LR("right", "left")] = O;
      var K =
          a.selectable === !0 ||
          (v &&
            (s === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ||
              s === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY_LINKS)),
        Q;
      return (
        s === o("WAWebDisplayType").DISPLAY_TYPE.KEPT_MSGS &&
          (Q = u.jsx(r("WAWebMessageKeptBySubtitle.react"), { msg: c })),
        u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: C,
          handlers: j,
          onFocus: B,
          onBlur: W,
          children: u.jsxs(r("WAWebGalleryMsg.react"), {
            hover: v,
            current: L && x,
            active: I,
            onClick: function () {
              return a.onClickMsg && a.onClickMsg(c, g && !g.isSelected(c));
            },
            onMouseEnter: v ? null : w,
            onMouseOver: v ? null : M,
            onMouseLeave: v ? A : null,
            testid: void 0,
            children: [
              z,
              u.jsx(
                r("WAWebMessageWrapper.react"),
                {
                  msg: c,
                  ref: y,
                  current: L && x,
                  displayType:
                    s || o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS,
                  isMsgVisible: a.isMsgVisible,
                  selectable: K,
                  selectedMessages: g,
                  onMessageSelect: q,
                  position: o("WAWebMessagePosition").MsgPosition.END,
                  tailOverride: "left",
                  onProductClick: a.onProductClick,
                  onMessageClick: a.onMessageClick,
                  showProfilePicture: !1,
                  errorBoundaryName: "starred-msg",
                },
                c.id.toString(),
              ),
              Q,
            ],
          }),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
