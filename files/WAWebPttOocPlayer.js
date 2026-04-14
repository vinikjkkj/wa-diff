__d(
  "WAWebPttOocPlayer",
  [
    "cx",
    "WANullthrows",
    "WAWebAudioFileIcon.react",
    "WAWebAudioStatusIcon.react",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebNewsletterName.react",
    "WAWebPttCalculateAudioProgress",
    "WAWebPttCloseButton.react",
    "WAWebPttDailyUtils",
    "WAWebPttOocMarquee",
    "WAWebPttPlayPauseButton.react",
    "WAWebPttPrefs",
    "WAWebPttStatusIcon.react",
    "WAWebPttUseMsgAudioPlaybackController",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "useWAWebAnimationFrames",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = c.useState,
      g = 62,
      h = 3,
      y = 26,
      C = 40,
      b = 18,
      v = {
        senderButton: {
          maxWidth: "x193iq5w",
          height: "x5yr21d",
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          ":hover_opacity": "x5z6fxw",
          $$css: !0,
        },
        senderName: { color: "xmzmlnv", fontSize: "x1jchvi3", $$css: !0 },
      },
      S = "_ak99",
      R = "_ak9a";
    function L() {
      var e = o("useWAWebModelValues").useModelValues(
          o("WAWebPttPrefs").PttPrefs,
          ["outOfChatPlayerMessage"],
        ),
        t = e.outOfChatPlayerMessage;
      p(
        function () {
          t && o("WAWebMsgCollection").MsgCollection.gadd(t);
        },
        [t],
      );
      var n = o(
          "WAWebPttUseMsgAudioPlaybackController",
        ).useMsgAudioPlaybackController(t),
        r = function (t) {
          o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage = t;
        };
      return t && n
        ? u.jsx(E, { msg: t, playbackController: n, onPlayNext: r })
        : null;
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t,
        n = e.msg,
        a = e.onPlayNext,
        i = e.playbackController,
        l = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebFrontendMsgGetters").getAsRevoked,
          o("WAWebFrontendMsgGetters").getPendingDeleteForMe,
        ]),
        s = l[0],
        c = l[1],
        d = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
        m = i.audio,
        g = i.pttPlaybackLogger,
        h = P(n),
        y = f(!m.paused),
        C = y[0],
        b = y[1],
        S = _(!1),
        R = function () {
          return (S.current = !1);
        };
      p(
        function () {
          R();
        },
        [n],
      );
      var L = function () {
        return b(!m.paused);
      };
      ((t = o("useWAWebListener")).useListener(m, "playing", function () {
        L();
      }),
        t.useListener(m, "timeupdate", function () {
          (L(),
            h &&
              (g.markAsPlayedInOoc(),
              S.current ||
                ((S.current = !0),
                o("WAWebPttDailyUtils").incrementPttDailyCount(
                  o("WAWebPttDailyUtils").PttDailyCountKind.OOC_PLAYBACK,
                  r("WANullthrows")(o("WAWebFrontendChatGetters").getKind(d)),
                ))));
        }),
        t.useListener(m, "pause", L),
        t.useListener(m, "ended", function () {
          (L(), h && R());
        }),
        t.useListener(
          o("WAWebCmd").Cmd,
          [
            "status_viewer_open",
            "status_posting_flow",
            "open_lock_screen_modal",
          ],
          function () {
            m.pause();
          },
        ),
        t.useListener(d, "remove", function () {
          (m.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
        }),
        p(
          function () {
            (s || c) &&
              (m.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
          },
          [s, c, m],
        ));
      var E = function (t) {
          (C ? (m.pause(), g.increaseOocPauseCount()) : m.play(),
            t.preventDefault());
        },
        T = function (t) {
          (m.pause(),
            o("WAWebPttPrefs").PttPrefs.closeOocPlayer(),
            o("WAWebPttPrefs").PttPrefs.setPlayingMessage(null),
            g.markAsOocClosedByUser(),
            g.commit(!0),
            t.preventDefault());
        },
        D = function (t) {
          t.defaultPrevented ||
            (o("WAWebCmd").Cmd.openChatAt({
              chat: d,
              msgContext: o("WAWebChatMessageSearch").getSearchContext({
                chat: d,
                msgKey: n.id,
              }),
            }),
            g.increaseOocClickToChatCount());
        },
        x = h && !s && !c;
      return u.jsx(r("WAWebVelocityTransitionGroup"), {
        transitionName: "ptt-out-of-chat",
        children: x
          ? u.jsxs("div", {
              className:
                "x10l6tqk x12xzxwr x78zum5 xh8yej3 x1x0gksc x1xrx4lg xnj6ddq",
              children: [
                u.jsx("div", {
                  className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                  children: u.jsx(r("WAWebPttPlayPauseButton.react"), {
                    onConfirm: E,
                    paused: !C,
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                    theme: "out-of-chat-playback",
                  }),
                }),
                u.jsx("div", {
                  className:
                    "xh8yej3 x5yr21d x6ikm8r x10wlt62 x78zum5 xl56j7k x6s0dn4 x1n2onr6",
                  children: u.jsxs(r("WAWebUnstyledButton.react"), {
                    dataTab: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                    xstyle: v.senderButton,
                    onClick: D,
                    children: [
                      u.jsx(I, { msg: n }),
                      u.jsx(k, { author: n.senderObj, chat: d }),
                    ],
                  }),
                }),
                u.jsx("div", {
                  className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                  children: u.jsx(r("WAWebPttCloseButton.react"), {
                    onConfirm: T,
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                    theme: "out-of-chat-playback",
                  }),
                }),
                u.jsx($, { audio: m, isPlaying: C }),
              ],
            })
          : null,
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.author,
        n = e.chat,
        a = r("useWAWebMeasure")(),
        i = a[0],
        l = a[1].width,
        s = r("useWAWebMeasure")(),
        c = s[0],
        d = s[1].width,
        m = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n),
        p;
      o("WAWebChatGetters").getIsGroup(n)
        ? (p = u.jsx(o("WAWebName.react").ContactAndGroupName, {
            contact: t,
            chat: n,
            elevatedPushNamesEnabled: !0,
            xstyle: v.senderName,
          }))
        : o("WAWebChatGetters").getIsNewsletter(n)
          ? (p = u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
              chat: n,
              elevatedPushNamesEnabled: m,
              xstyle: v.senderName,
            }))
          : (p = u.jsx(o("WAWebName.react").Name, {
              contact: t,
              useShortName: !0,
              xstyle: v.senderName,
              elevatedPushNamesEnabled: m,
            }));
      var _ = d > l;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            ref: i,
            className: "xoiwuju x5yr21d x6ikm8r x10wlt62 x10l6tqk",
            children: u.jsx("div", {
              ref: c,
              className: "xlshs6z x10l6tqk xomak03 xx7j5b9",
              children: p,
            }),
          }),
          u.jsx("div", {
            className:
              "xuxw1ft xbrixnn x6ikm8r x10wlt62 x193iq5w x5yr21d x78zum5 x6s0dn4",
            children: _ ? u.jsx(r("WAWebPttOocMarquee"), { children: p }) : p,
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getAsPttLike,
          o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
        ]),
        r = n[0],
        a = n[1];
      return r || a
        ? u.jsx(T, { msg: t })
        : t.isForwarded
          ? u.jsx(D, {})
          : u.jsx(x, {});
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getMsgSenderId,
          o("WAWebFrontendMsgGetters").getAsPttLike,
        ]),
        r = n[0],
        a = n[1],
        i =
          t.type === "ptt" || a
            ? o("WAWebPttStatusIcon.react").PttStatusIcon
            : o("WAWebAudioStatusIcon.react").AudioStatusIcon;
      return u.jsxs("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6",
        children: [
          u.jsx(o("WAWebDetailImage.react").DetailImage, { id: r, size: C }),
          u.jsx("span", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "x11uqc5h x10l6tqk xuivejd xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9hgfsb",
              S,
            ),
            children: u.jsx(i, { width: y, height: y }),
          }),
        ],
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return u.jsx("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62 x1aqdfop",
        children: u.jsx(o("WAWebPttStatusIcon.react").PttStatusIcon, {
          width: 20,
          height: 20,
          className_DONOTUSE: R,
        }),
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return u.jsx("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62",
        children: u.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {
          width: C,
          height: C,
        }),
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      var t = e.audio,
        n = e.isPlaying,
        a = f(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(t)),
        i = a[0],
        l = a[1],
        s = d(
          function () {
            l(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(t));
          },
          [t],
        );
      (r("useWAWebAnimationFrames")(s, { active: n }),
        o("useWAWebListener").useListener(t, "timeupdate", s),
        o("useWAWebListener").useListener(t, "ended", function () {
          return l(0);
        }));
      var c = m(o("WAWebThemeContext").ThemeContext),
        p = c.theme;
      return u.jsx("div", {
        className: "xh8yej3 x10l6tqk xef1mmm xuoj239",
        children: u.jsx("div", {
          className: {
            0: "xh8yej3 x5yr21d",
            2: "xh8yej3 x5yr21d x1r1mewj xwq05k6",
            1: "xh8yej3 x5yr21d x1liytr5 xyd83as",
            3: "xh8yej3 x5yr21d x1liytr5 xyd83as",
          }[((p === "light") << 1) | ((p === "dark") << 0)],
          style: { transform: "translateX(" + (i * 100 - 100) + "%)" },
        }),
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = o("useWAWebModelValues").useModelValues(
          o("WAWebPttPrefs").PttPrefs,
          ["isOocPlayerClosedByUser"],
        ),
        n = t.isOocPlayerClosedByUser,
        r = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
        a = o("useWAWebModelValues").useModelValues(r, ["active"]),
        i = a.active;
      return !n && !i;
    }
    l.default = L;
  },
  98,
);
