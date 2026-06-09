__d(
  "WAWebPttOocPlayer",
  [
    "WANullthrows",
    "WAWebAudioFileIcon.react",
    "WAWebAudioStatusIcon.react",
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
    "WAWebPttCalculateAudioProgress",
    "WAWebPttCloseButton.react",
    "WAWebPttDailyUtils",
    "WAWebPttOocMarquee",
    "WAWebPttPlayPauseButton.react",
    "WAWebPttPrefs",
    "WAWebPttStatusIconStyleable.react",
    "WAWebPttUseMsgAudioPlaybackController",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useWAWebAnimationFrames",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebModelValues",
    "useWAWebMsgValues",
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
        outOfChatBg: { fill: "xph03yc", $$css: !0 },
        outOfChatIcon: { color: "xll8lwp", $$css: !0 },
        forwardedBg: { fill: "xzp0ayt", $$css: !0 },
        forwardedIcon: { color: "x17t9dm2", $$css: !0 },
      };
    function S() {
      var e = o("react-compiler-runtime").c(7),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = ["outOfChatPlayerMessage"]), (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebModelValues").useModelValues(
          o("WAWebPttPrefs").PttPrefs,
          t,
        ),
        r = n.outOfChatPlayerMessage,
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
        u = R,
        c;
      return (
        e[4] !== r || e[5] !== l
          ? ((c =
              r && l
                ? s.jsx(L, { msg: r, playbackController: l, onPlayNext: u })
                : null),
            (e[4] = r),
            (e[5] = l),
            (e[6] = c))
          : (c = e[6]),
        c
      );
    }
    function R(e) {
      o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage = e;
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(51),
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
        y = $(n),
        C = _(!g.paused),
        v = C[0],
        S = C[1],
        R = p(!1),
        L;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            return (R.current = !1);
          }),
          (t[3] = L))
        : (L = t[3]);
      var I = L,
        T;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            I();
          }),
          (t[4] = T))
        : (T = t[4]);
      var D;
      (t[5] !== n ? ((D = [n]), (t[5] = n), (t[6] = D)) : (D = t[6]), m(T, D));
      var P;
      t[7] !== g.paused
        ? ((P = function () {
            return S(!g.paused);
          }),
          (t[7] = g.paused),
          (t[8] = P))
        : (P = t[8]);
      var N = P,
        M;
      (t[9] !== N
        ? ((M = function () {
            N();
          }),
          (t[9] = N),
          (t[10] = M))
        : (M = t[10]),
        o("useWAWebListener").useListener(g, "playing", M));
      var w;
      (t[11] !== f || t[12] !== h || t[13] !== y || t[14] !== N
        ? ((w = function () {
            (N(),
              y &&
                (h.markAsPlayedInOoc(),
                R.current ||
                  ((R.current = !0),
                  o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.OOC_PLAYBACK,
                    r("WANullthrows")(o("WAWebFrontendChatGetters").getKind(f)),
                  ))));
          }),
          (t[11] = f),
          (t[12] = h),
          (t[13] = y),
          (t[14] = N),
          (t[15] = w))
        : (w = t[15]),
        o("useWAWebListener").useListener(g, "timeupdate", w),
        o("useWAWebListener").useListener(g, "pause", N));
      var A;
      (t[16] !== y || t[17] !== N
        ? ((A = function () {
            (N(), y && I());
          }),
          (t[16] = y),
          (t[17] = N),
          (t[18] = A))
        : (A = t[18]),
        o("useWAWebListener").useListener(g, "ended", A));
      var F;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = [
            "status_viewer_open",
            "status_posting_flow",
            "open_lock_screen_modal",
          ]),
          (t[19] = F))
        : (F = t[19]);
      var O;
      (t[20] !== g
        ? ((O = function () {
            g.pause();
          }),
          (t[20] = g),
          (t[21] = O))
        : (O = t[21]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, F, O));
      var B;
      (t[22] !== g
        ? ((B = function () {
            (g.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
          }),
          (t[22] = g),
          (t[23] = B))
        : (B = t[23]),
        o("useWAWebListener").useListener(f, "remove", B));
      var W, q;
      (t[24] !== u || t[25] !== g || t[26] !== c
        ? ((W = function () {
            (u || c) &&
              (g.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
          }),
          (q = [u, c, g]),
          (t[24] = u),
          (t[25] = g),
          (t[26] = c),
          (t[27] = W),
          (t[28] = q))
        : ((W = t[27]), (q = t[28])),
        m(W, q));
      var U;
      t[29] !== g || t[30] !== v || t[31] !== h
        ? ((U = function (t) {
            (v ? (g.pause(), h.increaseOocPauseCount()) : g.play(),
              t.preventDefault());
          }),
          (t[29] = g),
          (t[30] = v),
          (t[31] = h),
          (t[32] = U))
        : (U = t[32]);
      var V = U,
        H;
      t[33] !== g || t[34] !== h
        ? ((H = function (t) {
            (g.pause(),
              o("WAWebPttPrefs").PttPrefs.closeOocPlayer(),
              o("WAWebPttPrefs").PttPrefs.setPlayingMessage(null),
              h.markAsOocClosedByUser(),
              h.commit(!0),
              t.preventDefault());
          }),
          (t[33] = g),
          (t[34] = h),
          (t[35] = H))
        : (H = t[35]);
      var G = H,
        z;
      t[36] !== f || t[37] !== n.id || t[38] !== h
        ? ((z = function (t) {
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
          (t[36] = f),
          (t[37] = n.id),
          (t[38] = h),
          (t[39] = z))
        : (z = t[39]);
      var j = z,
        K = y && !u && !c,
        Q;
      t[40] !== g ||
      t[41] !== f ||
      t[42] !== G ||
      t[43] !== j ||
      t[44] !== V ||
      t[45] !== v ||
      t[46] !== n ||
      t[47] !== K
        ? ((Q = K
            ? s.jsxs("div", {
                className:
                  "x10l6tqk x12xzxwr x78zum5 xh8yej3 x1x0gksc x1xrx4lg xnj6ddq",
                children: [
                  s.jsx("div", {
                    className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                    children: s.jsx(r("WAWebPttPlayPauseButton.react"), {
                      onConfirm: V,
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
                      onClick: j,
                      children: [
                        s.jsx(k, { msg: n }),
                        s.jsx(E, { author: n.senderObj, chat: f }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                    children: s.jsx(r("WAWebPttCloseButton.react"), {
                      onConfirm: G,
                      tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                      theme: "out-of-chat-playback",
                    }),
                  }),
                  s.jsx(x, { audio: g, isPlaying: v }),
                ],
              })
            : null),
          (t[40] = g),
          (t[41] = f),
          (t[42] = G),
          (t[43] = j),
          (t[44] = V),
          (t[45] = v),
          (t[46] = n),
          (t[47] = K),
          (t[48] = Q))
        : (Q = t[48]);
      var X;
      return (
        t[49] !== Q
          ? ((X = s.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "ptt-out-of-chat",
              children: Q,
            })),
            (t[49] = Q),
            (t[50] = X))
          : (X = t[50]),
        X
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.author,
        a = e.chat,
        i = r("useWAWebMeasure")(),
        l = i[0],
        u = i[1],
        c = u.width,
        d = r("useWAWebMeasure")(),
        m = d[0],
        p = d[1],
        _ = p.width,
        f;
      t[0] !== a
        ? ((f = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(a)),
          (t[0] = a),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      if (o("WAWebChatGetters").getIsGroup(a)) {
        var y;
        (t[2] !== n || t[3] !== a
          ? ((y = s.jsx(o("WAWebName.react").ContactAndGroupName, {
              contact: n,
              chat: a,
              elevatedPushNamesEnabled: !0,
              xstyle: b.senderName,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = y))
          : (y = t[4]),
          (h = y));
      } else if (o("WAWebChatGetters").getIsNewsletter(a)) {
        var C;
        (t[5] !== a || t[6] !== g
          ? ((C = s.jsx(o("WAWebNewsletterName.react").NewsletterName, {
              chat: a,
              elevatedPushNamesEnabled: g,
              xstyle: b.senderName,
            })),
            (t[5] = a),
            (t[6] = g),
            (t[7] = C))
          : (C = t[7]),
          (h = C));
      } else {
        var v;
        (t[8] !== n || t[9] !== g
          ? ((v = s.jsx(o("WAWebName.react").Name, {
              contact: n,
              useShortName: !0,
              xstyle: b.senderName,
              elevatedPushNamesEnabled: g,
            })),
            (t[8] = n),
            (t[9] = g),
            (t[10] = v))
          : (v = t[10]),
          (h = v));
      }
      var S = _ > c,
        R;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "xoiwuju x5yr21d x6ikm8r x10wlt62 x10l6tqk" }),
          (t[11] = R))
        : (R = t[11]);
      var L;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "xlshs6z x10l6tqk xomak03 xx7j5b9" }), (t[12] = L))
        : (L = t[12]);
      var E;
      t[13] !== m || t[14] !== h
        ? ((E = s.jsx(
            "div",
            babelHelpers.extends({ ref: m }, L, { children: h }),
          )),
          (t[13] = m),
          (t[14] = h),
          (t[15] = E))
        : (E = t[15]);
      var k;
      t[16] !== l || t[17] !== E
        ? ((k = s.jsx(
            "div",
            babelHelpers.extends({ ref: l }, R, { children: E }),
          )),
          (t[16] = l),
          (t[17] = E),
          (t[18] = k))
        : (k = t[18]);
      var I;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "xuxw1ft xbrixnn x6ikm8r x10wlt62 x193iq5w x5yr21d x78zum5 x6s0dn4",
          }),
          (t[19] = I))
        : (I = t[19]);
      var T;
      t[20] !== h || t[21] !== S
        ? ((T = s.jsx(
            "div",
            babelHelpers.extends({}, I, {
              children: S ? s.jsx(r("WAWebPttOocMarquee"), { children: h }) : h,
            }),
          )),
          (t[20] = h),
          (t[21] = S),
          (t[22] = T))
        : (T = t[22]);
      var D;
      return (
        t[23] !== k || t[24] !== T
          ? ((D = s.jsxs(s.Fragment, { children: [k, T] })),
            (t[23] = k),
            (t[24] = T),
            (t[25] = D))
          : (D = t[25]),
        D
      );
    }
    function k(e) {
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
            ? ((u = s.jsx(I, { msg: n })), (t[1] = n), (t[2] = u))
            : (u = t[2]),
          u
        );
      }
      if (n.isForwarded) {
        var c;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(T, {})), (t[3] = c))
            : (c = t[3]),
          c
        );
      }
      var d;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s.jsx(D, {})), (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebFrontendMsgGetters").getMsgSenderId,
            o("WAWebFrontendMsgGetters").getAsPttLike,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0],
        l = a[1],
        u =
          n.type === "ptt" || l
            ? o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable
            : o("WAWebAudioStatusIcon.react").AudioStatusIcon,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6",
          }),
          (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== i
        ? ((d = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: i,
            size: y,
          })),
          (t[2] = i),
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
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { background: v.outOfChatBg, primary: v.outOfChatIcon }),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== u
        ? ((_ = s.jsx(
            "span",
            babelHelpers.extends({}, m, {
              children: s.jsx(u, { width: h, height: h, innerStyles: p }),
            }),
          )),
          (t[6] = u),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== d || t[9] !== _
          ? ((f = s.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [d, _] }),
            )),
            (t[8] = d),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    function T() {
      return s.jsx("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62 x1aqdfop",
        children: s.jsx(
          o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable,
          {
            width: 20,
            height: 20,
            innerStyles: {
              background: v.forwardedBg,
              primary: v.forwardedIcon,
            },
          },
        ),
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s.jsx("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62",
        children: s.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {
          width: y,
          height: y,
        }),
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
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
    function $(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["isOocPlayerClosedByUser"]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebModelValues").useModelValues(
          o("WAWebPttPrefs").PttPrefs,
          n,
        ),
        a = r.isOocPlayerClosedByUser,
        i;
      t[1] !== e
        ? ((i = o("WAWebFrontendMsgGetters").getChat(e.unsafe())),
          (t[1] = e),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["active"]), (t[3] = s))
        : (s = t[3]);
      var u = o("useWAWebModelValues").useModelValues(l, s),
        c = u.active;
      return !a && !c;
    }
    l.default = S;
  },
  98,
);
