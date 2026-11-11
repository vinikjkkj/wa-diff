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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(7),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [o("WAWebPttPrefsGetters").getOutOfChatPlayerMessage]),
          (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebPttPrefsValues").usePttPrefsValues(t),
        r = n[0],
        a,
        i;
      (e[1] !== r
        ? ((a = function () {
            r && o("WAWebMsgCollection").MsgCollection.gadd(r);
          }),
          (i = [r]),
          (e[1] = r),
          (e[2] = a),
          (e[3] = i))
        : ((a = e[2]), (i = e[3])),
        m(a, i));
      var l = o(
          "WAWebPttUseMsgAudioPlaybackController",
        ).useMsgAudioPlaybackController(r),
        u;
      return (
        e[4] !== r || e[5] !== l
          ? ((u = r && l ? s.jsx(R, { msg: r, playbackController: l }) : null),
            (e[4] = r),
            (e[5] = l),
            (e[6] = u))
          : (u = e[6]),
        u
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.msg,
        a = e.playbackController,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebFrontendMsgGetters").getAsRevoked,
            o("WAWebFrontendMsgGetters").getPendingDeleteForMe,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(n.id, i),
        u = l[0],
        c = l[1],
        d;
      t[1] !== n
        ? ((d = o("WAWebFrontendMsgGetters").getChat(n.unsafe())),
          (t[1] = n),
          (t[2] = d))
        : (d = t[2]);
      var f = d,
        g = a.audio,
        h = a.pttPlaybackLogger,
        y = x(n),
        C = _(!g.paused),
        v = C[0],
        S = C[1],
        R = p(null),
        k;
      t[3] !== g.paused
        ? ((k = function () {
            return S(!g.paused);
          }),
          (t[3] = g.paused),
          (t[4] = k))
        : (k = t[4]);
      var I = k,
        T;
      (t[5] !== I
        ? ((T = function () {
            I();
          }),
          (t[5] = I),
          (t[6] = T))
        : (T = t[6]),
        o("useWAWebListener").useListener(g, "playing", T));
      var $;
      (t[7] !== f || t[8] !== n || t[9] !== h || t[10] !== y || t[11] !== I
        ? (($ = function () {
            (I(),
              y &&
                (h.markAsPlayedInOoc(),
                R.current !== n &&
                  ((R.current = n),
                  o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.OOC_PLAYBACK,
                    r("nullthrows")(o("WAWebFrontendChatGetters").getKind(f)),
                  ))));
          }),
          (t[7] = f),
          (t[8] = n),
          (t[9] = h),
          (t[10] = y),
          (t[11] = I),
          (t[12] = $))
        : ($ = t[12]),
        o("useWAWebListener").useListener(g, "timeupdate", $),
        o("useWAWebListener").useListener(g, "pause", I));
      var P;
      (t[13] !== y || t[14] !== I
        ? ((P = function () {
            (I(), y && (R.current = null));
          }),
          (t[13] = y),
          (t[14] = I),
          (t[15] = P))
        : (P = t[15]),
        o("useWAWebListener").useListener(g, "ended", P));
      var N;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = [
            "status_viewer_open",
            "status_posting_flow",
            "open_lock_screen_modal",
          ]),
          (t[16] = N))
        : (N = t[16]);
      var M;
      (t[17] !== g
        ? ((M = function () {
            g.pause();
          }),
          (t[17] = g),
          (t[18] = M))
        : (M = t[18]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, N, M));
      var w;
      (t[19] !== g
        ? ((w = function () {
            (g.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
          }),
          (t[19] = g),
          (t[20] = w))
        : (w = t[20]),
        o("useWAWebListener").useListener(f, "remove", w));
      var A, F;
      (t[21] !== u || t[22] !== g || t[23] !== c
        ? ((A = function () {
            (u || c) &&
              (g.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
          }),
          (F = [u, c, g]),
          (t[21] = u),
          (t[22] = g),
          (t[23] = c),
          (t[24] = A),
          (t[25] = F))
        : ((A = t[24]), (F = t[25])),
        m(A, F));
      var O;
      t[26] !== g || t[27] !== v || t[28] !== h
        ? ((O = function (t) {
            (v
              ? (g.pause(), h.increaseOocPauseCount())
              : g.play().catch(o("WAAbortError").catchAbort(r("WAWebNoop"))),
              t.preventDefault());
          }),
          (t[26] = g),
          (t[27] = v),
          (t[28] = h),
          (t[29] = O))
        : (O = t[29]);
      var B = O,
        W;
      t[30] !== g || t[31] !== h
        ? ((W = function (t) {
            (g.pause(),
              o("WAWebPttPrefs").PttPrefs.closeOocPlayer(),
              o("WAWebPttPrefs").PttPrefs.setPlayingMessage(null),
              h.markAsOocClosedByUser(),
              h.commit(!0),
              t.preventDefault());
          }),
          (t[30] = g),
          (t[31] = h),
          (t[32] = W))
        : (W = t[32]);
      var q = W,
        U;
      t[33] !== f || t[34] !== n.id || t[35] !== h
        ? ((U = function (t) {
            t.defaultPrevented ||
              (o("WAWebCmd").Cmd.openChatAt({
                chat: f,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .PttOocPlayer,
                msgContext: o("WAWebChatMessageSearch").getSearchContext({
                  chat: f,
                  msgKey: n.id,
                }),
              }),
              h.increaseOocClickToChatCount());
          }),
          (t[33] = f),
          (t[34] = n.id),
          (t[35] = h),
          (t[36] = U))
        : (U = t[36]);
      var V = U,
        H = y && !u && !c,
        G;
      t[37] !== g ||
      t[38] !== f ||
      t[39] !== q ||
      t[40] !== V ||
      t[41] !== B ||
      t[42] !== v ||
      t[43] !== n ||
      t[44] !== H
        ? ((G = H
            ? s.jsxs("div", {
                className:
                  "x10l6tqk x12xzxwr x78zum5 xh8yej3 x1x0gksc x1xrx4lg xnj6ddq",
                children: [
                  s.jsx("div", {
                    className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                    children: s.jsx(r("WAWebPttPlayPauseButton.react"), {
                      onConfirm: B,
                      paused: !v,
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
                      onClick: V,
                      children: [
                        s.jsx(E, { msg: n }),
                        s.jsx(L, { author: n.senderObj, chatId: f.id }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                    children: s.jsx(r("WAWebPttCloseButton.react"), {
                      onConfirm: q,
                      tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                      theme: "out-of-chat-playback",
                    }),
                  }),
                  s.jsx(D, { audio: g, isPlaying: v }),
                ],
              })
            : null),
          (t[37] = g),
          (t[38] = f),
          (t[39] = q),
          (t[40] = V),
          (t[41] = B),
          (t[42] = v),
          (t[43] = n),
          (t[44] = H),
          (t[45] = G))
        : (G = t[45]);
      var z;
      return (
        t[46] !== G
          ? ((z = s.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "ptt-out-of-chat",
              children: G,
            })),
            (t[46] = G),
            (t[47] = z))
          : (z = t[47]),
        z
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.author,
        a = e.chatId,
        i = r("useWAWebMeasure")(),
        l = i[0],
        u = i[1],
        c = u.width,
        d = r("useWAWebMeasure")(),
        m = d[0],
        p = d[1],
        _ = p.width,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [
            o("WAWebChatGetters").getIsGroup,
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getIsCAG,
            o("WAWebFrontendChatGetters").getGroupMetadata,
          ]),
          (t[0] = f))
        : (f = t[0]);
      var g = o("useWAWebChatValues").useChatValues(a, f),
        h = g[0],
        y = g[1],
        C = g[2],
        v = g[3],
        S = (v == null ? void 0 : v.participants.length) || 1,
        R;
      t[1] !== C || t[2] !== h || t[3] !== S
        ? ((R = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabledFor({
            isCAG: C,
            isGroup: h,
            participantCount: S,
          })),
          (t[1] = C),
          (t[2] = h),
          (t[3] = S),
          (t[4] = R))
        : (R = t[4]);
      var L = R,
        E;
      if (h) {
        var k;
        (t[5] !== n || t[6] !== a
          ? ((k = s.jsx(o("WAWebName.react").ContactAndGroupName, {
              contact: n,
              chatId: a,
              xstyle: b.senderName,
            })),
            (t[5] = n),
            (t[6] = a),
            (t[7] = k))
          : (k = t[7]),
          (E = k));
      } else if (y) {
        var I;
        (t[8] !== a || t[9] !== L
          ? ((I = s.jsx(o("WAWebNewsletterName.react").NewsletterName, {
              chatId: a,
              elevatedPushNamesEnabled: L,
              xstyle: b.senderName,
            })),
            (t[8] = a),
            (t[9] = L),
            (t[10] = I))
          : (I = t[10]),
          (E = I));
      } else {
        var T;
        (t[11] !== n || t[12] !== L
          ? ((T = s.jsx(o("WAWebName.react").Name, {
              contact: n,
              useShortName: !0,
              xstyle: b.senderName,
              elevatedPushNamesEnabled: L,
            })),
            (t[11] = n),
            (t[12] = L),
            (t[13] = T))
          : (T = t[13]),
          (E = T));
      }
      var D = _ > c,
        x;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { className: "xoiwuju x5yr21d x6ikm8r x10wlt62 x10l6tqk" }),
          (t[14] = x))
        : (x = t[14]);
      var $;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { className: "xlshs6z x10l6tqk xomak03 xx7j5b9" }), (t[15] = $))
        : ($ = t[15]);
      var P;
      t[16] !== m || t[17] !== E
        ? ((P = s.jsx(
            "div",
            babelHelpers.extends({ ref: m }, $, { children: E }),
          )),
          (t[16] = m),
          (t[17] = E),
          (t[18] = P))
        : (P = t[18]);
      var N;
      t[19] !== l || t[20] !== P
        ? ((N = s.jsx(
            "div",
            babelHelpers.extends({ ref: l }, x, { children: P }),
          )),
          (t[19] = l),
          (t[20] = P),
          (t[21] = N))
        : (N = t[21]);
      var M;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = {
            className:
              "xuxw1ft xbrixnn x6ikm8r x10wlt62 x193iq5w x5yr21d x78zum5 x6s0dn4",
          }),
          (t[22] = M))
        : (M = t[22]);
      var w;
      t[23] !== E || t[24] !== D
        ? ((w = s.jsx(
            "div",
            babelHelpers.extends({}, M, {
              children: D ? s.jsx(r("WAWebPttOocMarquee"), { children: E }) : E,
            }),
          )),
          (t[23] = E),
          (t[24] = D),
          (t[25] = w))
        : (w = t[25]);
      var A;
      return (
        t[26] !== w || t[27] !== N
          ? ((A = s.jsxs(s.Fragment, { children: [N, w] })),
            (t[26] = w),
            (t[27] = N),
            (t[28] = A))
          : (A = t[28]),
        A
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0],
        l = a[1];
      if (i || l) {
        var u;
        return (
          t[1] !== n
            ? ((u = s.jsx(k, { msg: n })), (t[1] = n), (t[2] = u))
            : (u = t[2]),
          u
        );
      }
      if (n.isForwarded) {
        var c;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(I, {})), (t[3] = c))
            : (c = t[3]),
          c
        );
      }
      var d;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s.jsx(T, {})), (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebFrontendMsgGetters").getMsgSenderId,
            o("WAWebFrontendMsgGetters").getAsPttLike,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        u = i[1],
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6",
          }),
          (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== l
        ? ((d = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: l,
            size: y,
          })),
          (t[2] = l),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = {
            className:
              "x11uqc5h x10l6tqk xuivejd xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9hgfsb",
          }),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== u || t[6] !== n.type
        ? ((p = s.jsx(
            "span",
            babelHelpers.extends({}, m, {
              children:
                n.type === "ptt" || u
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
          )),
          (t[5] = u),
          (t[6] = n.type),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== d || t[9] !== p
          ? ((_ = s.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [d, p] }),
            )),
            (t[8] = d),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
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
      var t = o("react-compiler-runtime").c(15),
        n = e.audio,
        a = e.isPlaying,
        i;
      t[0] !== n
        ? ((i = o("WAWebPttCalculateAudioProgress").calculateAudioProgress(n)),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = _(i),
        u = l[0],
        c = l[1],
        m;
      t[2] !== n
        ? ((m = function () {
            c(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(n));
          }),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        f;
      (t[4] !== a ? ((f = { active: a }), (t[4] = a), (t[5] = f)) : (f = t[5]),
        r("useWAWebAnimationFrames")(p, f),
        o("useWAWebListener").useListener(n, "timeupdate", p));
      var g;
      (t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            return c(0);
          }),
          (t[6] = g))
        : (g = t[6]),
        o("useWAWebListener").useListener(n, "ended", g));
      var h = d(o("WAWebThemeContext").ThemeContext),
        y = h.theme,
        C;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "xh8yej3 x10l6tqk xef1mmm xuoj239" }), (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] !== y
        ? ((b = {
            0: "xh8yej3 x5yr21d",
            2: "xh8yej3 x5yr21d x1r1mewj xwq05k6",
            1: "xh8yej3 x5yr21d x1liytr5 xyd83as",
            3: "xh8yej3 x5yr21d x1liytr5 xyd83as",
          }[((y === "light") << 1) | ((y === "dark") << 0)]),
          (t[8] = y),
          (t[9] = b))
        : (b = t[9]);
      var v = "translateX(" + (u * 100 - 100) + "%)",
        S;
      t[10] !== v
        ? ((S = { transform: v }), (t[10] = v), (t[11] = S))
        : (S = t[11]);
      var R;
      return (
        t[12] !== b || t[13] !== S
          ? ((R = s.jsx(
              "div",
              babelHelpers.extends({}, C, {
                children: s.jsx("div", { className: b, style: S }),
              }),
            )),
            (t[12] = b),
            (t[13] = S),
            (t[14] = R))
          : (R = t[14]),
        R
      );
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebPttPrefsGetters").getIsOocPlayerClosedByUser]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebPttPrefsValues").usePttPrefsValues(n),
        a = r[0],
        i;
      t[1] !== e
        ? ((i = o("WAWebFrontendMsgGetters").getChat(e.unsafe())),
          (t[1] = e),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = [o("WAWebFrontendChatGetters").getActive]), (t[3] = s))
        : (s = t[3]);
      var u = o("useWAWebChatValues").useChatValues(l.id, s),
        c = u[0];
      return !a && !c;
    }
    l.default = S;
  },
  98,
);
