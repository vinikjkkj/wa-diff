__d(
  "WAWebReportedMsg.react",
  [
    "WANullthrows",
    "WAWebChevronIcon.react",
    "WAWebClock",
    "WAWebDetailImage.react",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendContactGetters",
    "WAWebGalleryMsg.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMessagePosition",
    "WAWebMessageWrapper.react",
    "WAWebReportedMsgSubtitle.react",
    "WAWebStylesEnv",
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
        author: { marginInlineEnd: "x1p8j9ns", $$css: !0 },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
      };
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.activeSelection,
        l = a.currSelection,
        s = a.msg,
        c = a.onClickMsg,
        f = a.onMsgFooterClick,
        g = a.testid,
        h = m(null),
        y = m(null),
        C = p(!1),
        b = C[0],
        v = C[1],
        S = p(function () {
          return l ? l.value === s : !1;
        }),
        R = S[0],
        L = S[1],
        E = p(function () {
          return i ? i.value === s : !1;
        }),
        k = E[0],
        I = E[1],
        T = p(!1),
        D = T[0],
        x = T[1],
        $ = function (t, n) {
          var e = t === "focus";
          if (e) {
            var a = y.current;
            a &&
              (r("WAWebFocusTracer").focus(a),
              n && o("WAWebDomScroll").scrollIntoViewIfNeeded(a));
          }
          L(e);
        },
        P = function (t, n) {
          if (t === "focus") {
            var e = y.current;
            e &&
              (r("WAWebFocusTracer").focus(e),
              n && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
          }
          I(!!t);
        };
      (o("useWAWebListener").useListener(l, s.id.toString(), $),
        o("useWAWebListener").useListener(i, s.id.toString(), P));
      var N = function () {
          b || v(!0);
        },
        M = function () {
          b || v(!0);
        },
        w = function () {
          b && v(!1);
        },
        A = function (t) {
          (t.stopPropagation(), t.preventDefault(), c == null || c(s));
        },
        F = function () {
          var e;
          (e = h.current) == null || e.openContextMenu();
        },
        O = function (t) {
          x(!0);
        },
        B = function (t) {
          x(!1);
        },
        W = function () {
          return h.current;
        },
        q = function () {
          return r("WANullthrows")(y.current);
        };
      d(n, function () {
        return { getElement: q, getWrapperRef: W };
      });
      var U = o("WAWebFrontendContactGetters").getFormattedName(s.senderObj),
        V = u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className: "x78zum5 x6s0dn4 xwoyzhm x1f6kntn x1fcty0u x9307sf",
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
                      children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: s.senderObj.id,
                        size: 26,
                      }),
                    }),
                    u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      xstyle: _.author,
                      text: U,
                      direction: "auto",
                      titlify: !0,
                    }),
                  ],
                }),
                u.jsx("div", {
                  className:
                    "x1iyjqo2 x2lah0s xdzw4kq x1pg5gke x1qb5hxa xhslqc4 xp4054r x11njtxf",
                  dir: "auto",
                  children: o("WAWebClock").Clock.relativeStr(s.t),
                }),
                u.jsx("div", {
                  className: "x1okw0bk x1y332i5 xdzw4kq xeu7kla",
                  children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    directional: !0,
                    height: 21,
                  }),
                }),
              ],
            },
          ),
        ),
        H = { enter: A };
      H[r("WAWebL10N").LR("right", "left")] = F;
      var G = u.jsx(r("WAWebReportedMsgSubtitle.react"), {
        msg: s,
        onMsgFooterClick: f,
      });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        xstyle: _.marginBottom8,
        ref: y,
        handlers: H,
        onFocus: O,
        onBlur: B,
        children: u.jsxs(
          r("WAWebGalleryMsg.react"),
          {
            hover: b,
            current: R && D,
            active: k,
            onClick: function () {
              return a.onClickMsg && a.onClickMsg(s);
            },
            onMouseEnter: M,
            onMouseOver: N,
            onMouseLeave: w,
            testid: void 0,
            footer: G,
            children: [
              V,
              u.jsx(
                r("WAWebMessageWrapper.react"),
                {
                  msg: s,
                  ref: h,
                  current: R && D,
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG,
                  isMsgVisible: a.isMsgVisible,
                  selectable: a.selectable,
                  position: o("WAWebMessagePosition").MsgPosition.END,
                  tailOverride: "left",
                  onMessageClick: a.onMessageClick,
                  errorBoundaryName: "reported-msg",
                },
                s.id.toString(),
              ),
            ],
          },
          "rta-gallery-msg-" + s.id.toString(),
        ),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
