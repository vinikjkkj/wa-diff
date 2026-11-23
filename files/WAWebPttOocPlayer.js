__d(
  "WAWebPttOocPlayer",
  [
    "WAAbortError",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebNewsletterName.react",
    "WAWebNoop",
    "WAWebPttAudioFilePlaceholder.react",
    "WAWebPttAudioStatusBadge.react",
    "WAWebPttCalculateAudioProgress",
    "WAWebPttCloseButton.react",
    "WAWebPttDailyUtils",
    "WAWebPttOocMarquee",
    "WAWebPttPlayPauseButton.react",
    "WAWebPttPrefs",
    "WAWebPttPrefsGetters",
    "WAWebPttUseMsgAudioPlaybackController",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSIconIcHeadphonesFilled.react",
    "WDSIconIcKeyboardVoiceFilled.react",
    "nullthrows",
    "react",
    "useWAWebAnimationFrames",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebMsgValues",
    "useWAWebPttPrefsValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useRef,
      _ = u.useState,
      f = 62,
      g = 3,
      h = 26,
      y = 40,
      C = 18,
      b = {
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
      v = {
        outOfChatAudioBadge: {
          backgroundColor: "xnj6ddq",
          height: "xd7y6wv",
          width: "x23j0i4",
          $$css: !0,
        },
        outOfChatIcon: { color: "xll8lwp", $$css: !0 },
        forwardedIcon: { color: "x17t9dm2", $$css: !0 },
      };
    function S() {
      var e = o("useWAWebPttPrefsValues").usePttPrefsValues([
          o("WAWebPttPrefsGetters").getOutOfChatPlayerMessage,
        ]),
        t = e[0];
      m(
        function () {
          t && o("WAWebMsgCollection").MsgCollection.gadd(t);
        },
        [t],
      );
      var n = o(
        "WAWebPttUseMsgAudioPlaybackController",
      ).useMsgAudioPlaybackController(t);
      return t && n ? s.jsx(R, { msg: t, playbackController: n }) : null;
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t,
        n = e.msg,
        a = e.playbackController,
        i = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebFrontendMsgGetters").getAsRevoked,
          o("WAWebFrontendMsgGetters").getPendingDeleteForMe,
        ]),
        l = i[0],
        u = i[1],
        c = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
        d = a.audio,
        f = a.pttPlaybackLogger,
        g = x(n),
        h = _(!d.paused),
        y = h[0],
        C = h[1],
        v = p(null),
        S = function () {
          return C(!d.paused);
        };
      ((t = o("useWAWebListener")).useListener(d, "playing", function () {
        S();
      }),
        t.useListener(d, "timeupdate", function () {
          (S(),
            g &&
              (f.markAsPlayedInOoc(),
              v.current !== n &&
                ((v.current = n),
                o("WAWebPttDailyUtils").incrementPttDailyCount(
                  o("WAWebPttDailyUtils").PttDailyCountKind.OOC_PLAYBACK,
                  r("nullthrows")(o("WAWebFrontendChatGetters").getKind(c)),
                ))));
        }),
        t.useListener(d, "pause", S),
        t.useListener(d, "ended", function () {
          (S(), g && (v.current = null));
        }),
        t.useListener(
          o("WAWebCmd").Cmd,
          [
            "status_viewer_open",
            "status_posting_flow",
            "open_lock_screen_modal",
          ],
          function () {
            d.pause();
          },
        ),
        t.useListener(c, "remove", function () {
          (d.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
        }),
        m(
          function () {
            (l || u) &&
              (d.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
          },
          [l, u, d],
        ));
      var R = function (t) {
          (y
            ? (d.pause(), f.increaseOocPauseCount())
            : d.play().catch(o("WAAbortError").catchAbort(r("WAWebNoop"))),
            t.preventDefault());
        },
        k = function (t) {
          (d.pause(),
            o("WAWebPttPrefs").PttPrefs.closeOocPlayer(),
            o("WAWebPttPrefs").PttPrefs.setPlayingMessage(null),
            f.markAsOocClosedByUser(),
            f.commit(!0),
            t.preventDefault());
        },
        I = function (t) {
          t.defaultPrevented ||
            (o("WAWebCmd").Cmd.openChatAt({
              chat: c,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .PttOocPlayer,
              msgContext: o("WAWebChatMessageSearch").getSearchContext({
                chat: c,
                msgKey: n.id,
              }),
            }),
            f.increaseOocClickToChatCount());
        },
        T = g && !l && !u;
      return s.jsx(r("WAWebVelocityTransitionGroup"), {
        transitionName: "ptt-out-of-chat",
        children: T
          ? s.jsxs("div", {
              className:
                "x10l6tqk x12xzxwr x78zum5 xh8yej3 x1x0gksc x1xrx4lg xnj6ddq",
              children: [
                s.jsx("div", {
                  className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                  children: s.jsx(r("WAWebPttPlayPauseButton.react"), {
                    onConfirm: R,
                    paused: !y,
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                    theme: "out-of-chat-playback",
                  }),
                }),
                s.jsx("div", {
                  className:
                    "xh8yej3 x5yr21d x6ikm8r x10wlt62 x78zum5 xl56j7k x6s0dn4 x1n2onr6",
                  children: s.jsxs(r("WAWebUnstyledButton.react"), {
                    dataTab: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                    xstyle: b.senderButton,
                    onClick: I,
                    children: [
                      s.jsx(E, { msg: n }),
                      s.jsx(L, { author: n.senderObj, chatId: c.id }),
                    ],
                  }),
                }),
                s.jsx("div", {
                  className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                  children: s.jsx(r("WAWebPttCloseButton.react"), {
                    onConfirm: k,
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                    theme: "out-of-chat-playback",
                  }),
                }),
                s.jsx(D, { audio: d, isPlaying: y }),
              ],
            })
          : null,
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.author,
        n = e.chatId,
        a = r("useWAWebMeasure")(),
        i = a[0],
        l = a[1].width,
        u = r("useWAWebMeasure")(),
        c = u[0],
        d = u[1].width,
        m = o("useWAWebChatValues").useChatValues(n, [
          o("WAWebChatGetters").getIsGroup,
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebFrontendChatGetters").getIsCAG,
          o("WAWebFrontendChatGetters").getGroupMetadata,
        ]),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabledFor({
          isCAG: f,
          isGroup: p,
          participantCount: (g == null ? void 0 : g.participants.length) || 1,
        }),
        y;
      p
        ? (y = s.jsx(o("WAWebName.react").ContactAndGroupName, {
            showOrgIcon: !1,
            contact: t,
            chatId: n,
            xstyle: b.senderName,
          }))
        : _
          ? (y = s.jsx(o("WAWebNewsletterName.react").NewsletterName, {
              chatId: n,
              elevatedPushNamesEnabled: h,
              xstyle: b.senderName,
            }))
          : (y = s.jsx(o("WAWebName.react").Name, {
              showOrgIcon: !1,
              contact: t,
              useShortName: !0,
              xstyle: b.senderName,
              elevatedPushNamesEnabled: h,
            }));
      var C = d > l;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("div", {
            ref: i,
            className: "xoiwuju x5yr21d x6ikm8r x10wlt62 x10l6tqk",
            children: s.jsx("div", {
              ref: c,
              className: "xlshs6z x10l6tqk xomak03 xx7j5b9",
              children: y,
            }),
          }),
          s.jsx("div", {
            className:
              "xuxw1ft xbrixnn x6ikm8r x10wlt62 x193iq5w x5yr21d x78zum5 x6s0dn4",
            children: C ? s.jsx(r("WAWebPttOocMarquee"), { children: y }) : y,
          }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getAsPttLike,
          o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
        ]),
        r = n[0],
        a = n[1];
      return r || a
        ? s.jsx(k, { msg: t })
        : t.isForwarded
          ? s.jsx(I, {})
          : s.jsx(T, {});
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getMsgSenderId,
          o("WAWebFrontendMsgGetters").getAsPttLike,
        ]),
        a = n[0],
        i = n[1];
      return s.jsxs("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6",
        children: [
          s.jsx(o("WAWebDetailImage.react").DetailImage, { id: a, size: y }),
          s.jsx("span", {
            className:
              "x11uqc5h x10l6tqk xuivejd xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9hgfsb",
            children:
              t.type === "ptt" || i
                ? s.jsx(r("WAWebPttAudioStatusBadge.react"), {
                    Icon: r("WDSIconIcKeyboardVoiceFilled.react"),
                    iconSize: 20,
                    iconXstyle: v.outOfChatIcon,
                    testid: "ptt-status",
                    xstyle: v.outOfChatAudioBadge,
                  })
                : s.jsx(r("WAWebPttAudioStatusBadge.react"), {
                    Icon: r("WDSIconIcHeadphonesFilled.react"),
                    iconSize: 20,
                    iconXstyle: v.outOfChatIcon,
                    testid: "audio-status",
                    xstyle: v.outOfChatAudioBadge,
                  }),
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s.jsx("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62 x1aqdfop",
        children: s.jsx(r("WDSIconIcKeyboardVoiceFilled.react"), {
          height: 20,
          iconXstyle: v.forwardedIcon,
          testid: "ptt-status",
          width: 20,
        }),
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s.jsx("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62",
        children: s.jsx(r("WAWebPttAudioFilePlaceholder.react"), {
          iconSize: 20,
        }),
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.audio,
        n = e.isPlaying,
        a = _(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(t)),
        i = a[0],
        l = a[1],
        u = c(
          function () {
            l(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(t));
          },
          [t],
        );
      (r("useWAWebAnimationFrames")(u, { active: n }),
        o("useWAWebListener").useListener(t, "timeupdate", u),
        o("useWAWebListener").useListener(t, "ended", function () {
          return l(0);
        }));
      var m = d(o("WAWebThemeContext").ThemeContext),
        p = m.theme;
      return s.jsx("div", {
        className: "xh8yej3 x10l6tqk xef1mmm xuoj239",
        children: s.jsx("div", {
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
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = o("useWAWebPttPrefsValues").usePttPrefsValues([
          o("WAWebPttPrefsGetters").getIsOocPlayerClosedByUser,
        ]),
        n = t[0],
        r = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
        a = o("useWAWebChatValues").useChatValues(r.id, [
          o("WAWebFrontendChatGetters").getActive,
        ]),
        i = a[0];
      return !n && !i;
    }
    l.default = S;
  },
  98,
);
