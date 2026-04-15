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
    "react-compiler-runtime",
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
        p(a, i));
      var l = o(
          "WAWebPttUseMsgAudioPlaybackController",
        ).useMsgAudioPlaybackController(r),
        s = E,
        c;
      return (
        e[4] !== r || e[5] !== l
          ? ((c =
              r && l
                ? u.jsx(k, { msg: r, playbackController: l, onPlayNext: s })
                : null),
            (e[4] = r),
            (e[5] = l),
            (e[6] = c))
          : (c = e[6]),
        c
      );
    }
    function E(e) {
      o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage = e;
    }
    function k(e) {
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
        s = l[0],
        c = l[1],
        d;
      t[1] !== n
        ? ((d = o("WAWebFrontendMsgGetters").getChat(n.unsafe())),
          (t[1] = n),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        g = a.audio,
        h = a.pttPlaybackLogger,
        y = N(n),
        C = f(!g.paused),
        b = C[0],
        S = C[1],
        R = _(!1),
        L;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            return (R.current = !1);
          }),
          (t[3] = L))
        : (L = t[3]);
      var E = L,
        k;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            E();
          }),
          (t[4] = k))
        : (k = t[4]);
      var D;
      (t[5] !== n ? ((D = [n]), (t[5] = n), (t[6] = D)) : (D = t[6]), p(k, D));
      var x;
      t[7] !== g.paused
        ? ((x = function () {
            return S(!g.paused);
          }),
          (t[7] = g.paused),
          (t[8] = x))
        : (x = t[8]);
      var $ = x,
        M;
      (t[9] !== $
        ? ((M = function () {
            $();
          }),
          (t[9] = $),
          (t[10] = M))
        : (M = t[10]),
        o("useWAWebListener").useListener(g, "playing", M));
      var w;
      (t[11] !== m || t[12] !== h || t[13] !== y || t[14] !== $
        ? ((w = function () {
            ($(),
              y &&
                (h.markAsPlayedInOoc(),
                R.current ||
                  ((R.current = !0),
                  o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.OOC_PLAYBACK,
                    r("WANullthrows")(o("WAWebFrontendChatGetters").getKind(m)),
                  ))));
          }),
          (t[11] = m),
          (t[12] = h),
          (t[13] = y),
          (t[14] = $),
          (t[15] = w))
        : (w = t[15]),
        o("useWAWebListener").useListener(g, "timeupdate", w),
        o("useWAWebListener").useListener(g, "pause", $));
      var A;
      (t[16] !== y || t[17] !== $
        ? ((A = function () {
            ($(), y && E());
          }),
          (t[16] = y),
          (t[17] = $),
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
        o("useWAWebListener").useListener(m, "remove", B));
      var W, q;
      (t[24] !== s || t[25] !== g || t[26] !== c
        ? ((W = function () {
            (s || c) &&
              (g.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
          }),
          (q = [s, c, g]),
          (t[24] = s),
          (t[25] = g),
          (t[26] = c),
          (t[27] = W),
          (t[28] = q))
        : ((W = t[27]), (q = t[28])),
        p(W, q));
      var U;
      t[29] !== g || t[30] !== b || t[31] !== h
        ? ((U = function (t) {
            (b ? (g.pause(), h.increaseOocPauseCount()) : g.play(),
              t.preventDefault());
          }),
          (t[29] = g),
          (t[30] = b),
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
      t[36] !== m || t[37] !== n.id || t[38] !== h
        ? ((z = function (t) {
            t.defaultPrevented ||
              (o("WAWebCmd").Cmd.openChatAt({
                chat: m,
                msgContext: o("WAWebChatMessageSearch").getSearchContext({
                  chat: m,
                  msgKey: n.id,
                }),
              }),
              h.increaseOocClickToChatCount());
          }),
          (t[36] = m),
          (t[37] = n.id),
          (t[38] = h),
          (t[39] = z))
        : (z = t[39]);
      var j = z,
        K = y && !s && !c,
        Q;
      t[40] !== g ||
      t[41] !== m ||
      t[42] !== G ||
      t[43] !== j ||
      t[44] !== V ||
      t[45] !== b ||
      t[46] !== n ||
      t[47] !== K
        ? ((Q = K
            ? u.jsxs("div", {
                className:
                  "x10l6tqk x12xzxwr x78zum5 xh8yej3 x1x0gksc x1xrx4lg xnj6ddq",
                children: [
                  u.jsx("div", {
                    className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                    children: u.jsx(r("WAWebPttPlayPauseButton.react"), {
                      onConfirm: V,
                      paused: !b,
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
                      onClick: j,
                      children: [
                        u.jsx(T, { msg: n }),
                        u.jsx(I, { author: n.senderObj, chat: m }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
                    children: u.jsx(r("WAWebPttCloseButton.react"), {
                      onConfirm: G,
                      tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
                      theme: "out-of-chat-playback",
                    }),
                  }),
                  u.jsx(P, { audio: g, isPlaying: b }),
                ],
              })
            : null),
          (t[40] = g),
          (t[41] = m),
          (t[42] = G),
          (t[43] = j),
          (t[44] = V),
          (t[45] = b),
          (t[46] = n),
          (t[47] = K),
          (t[48] = Q))
        : (Q = t[48]);
      var X;
      return (
        t[49] !== Q
          ? ((X = u.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "ptt-out-of-chat",
              children: Q,
            })),
            (t[49] = Q),
            (t[50] = X))
          : (X = t[50]),
        X
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.author,
        a = e.chat,
        i = r("useWAWebMeasure")(),
        l = i[0],
        s = i[1],
        c = s.width,
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
          ? ((y = u.jsx(o("WAWebName.react").ContactAndGroupName, {
              contact: n,
              chat: a,
              elevatedPushNamesEnabled: !0,
              xstyle: v.senderName,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = y))
          : (y = t[4]),
          (h = y));
      } else if (o("WAWebChatGetters").getIsNewsletter(a)) {
        var C;
        (t[5] !== a || t[6] !== g
          ? ((C = u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
              chat: a,
              elevatedPushNamesEnabled: g,
              xstyle: v.senderName,
            })),
            (t[5] = a),
            (t[6] = g),
            (t[7] = C))
          : (C = t[7]),
          (h = C));
      } else {
        var b;
        (t[8] !== n || t[9] !== g
          ? ((b = u.jsx(o("WAWebName.react").Name, {
              contact: n,
              useShortName: !0,
              xstyle: v.senderName,
              elevatedPushNamesEnabled: g,
            })),
            (t[8] = n),
            (t[9] = g),
            (t[10] = b))
          : (b = t[10]),
          (h = b));
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
        ? ((E = u.jsx(
            "div",
            babelHelpers.extends({ ref: m }, L, { children: h }),
          )),
          (t[13] = m),
          (t[14] = h),
          (t[15] = E))
        : (E = t[15]);
      var k;
      t[16] !== l || t[17] !== E
        ? ((k = u.jsx(
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
        ? ((T = u.jsx(
            "div",
            babelHelpers.extends({}, I, {
              children: S ? u.jsx(r("WAWebPttOocMarquee"), { children: h }) : h,
            }),
          )),
          (t[20] = h),
          (t[21] = S),
          (t[22] = T))
        : (T = t[22]);
      var D;
      return (
        t[23] !== k || t[24] !== T
          ? ((D = u.jsxs(u.Fragment, { children: [k, T] })),
            (t[23] = k),
            (t[24] = T),
            (t[25] = D))
          : (D = t[25]),
        D
      );
    }
    function T(e) {
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
        var s;
        return (
          t[1] !== n
            ? ((s = u.jsx(D, { msg: n })), (t[1] = n), (t[2] = s))
            : (s = t[2]),
          s
        );
      }
      if (n.isForwarded) {
        var c;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = u.jsx(x, {})), (t[3] = c))
            : (c = t[3]),
          c
        );
      }
      var d;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = u.jsx($, {})), (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(10),
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
        s =
          n.type === "ptt" || l
            ? o("WAWebPttStatusIcon.react").PttStatusIcon
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
        ? ((d = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: i,
            size: C,
          })),
          (t[2] = i),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x11uqc5h x10l6tqk xuivejd xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9hgfsb",
            S,
          )),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== s
        ? ((p = u.jsx("span", {
            className: m,
            children: u.jsx(s, { width: y, height: y }),
          })),
          (t[5] = s),
          (t[6] = p))
        : (p = t[6]);
      var _;
      return (
        t[7] !== d || t[8] !== p
          ? ((_ = u.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [d, p] }),
            )),
            (t[7] = d),
            (t[8] = p),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    function x() {
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
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return u.jsx("div", {
        className:
          "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62",
        children: u.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {
          width: C,
          height: C,
        }),
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.audio,
        a = e.isPlaying,
        i;
      t[0] !== n
        ? ((i = o("WAWebPttCalculateAudioProgress").calculateAudioProgress(n)),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = f(i),
        s = l[0],
        c = l[1],
        d;
      t[2] !== n
        ? ((d = function () {
            c(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(n));
          }),
          (t[2] = n),
          (t[3] = d))
        : (d = t[3]);
      var p = d,
        _;
      (t[4] !== a ? ((_ = { active: a }), (t[4] = a), (t[5] = _)) : (_ = t[5]),
        r("useWAWebAnimationFrames")(p, _),
        o("useWAWebListener").useListener(n, "timeupdate", p));
      var g;
      (t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            return c(0);
          }),
          (t[6] = g))
        : (g = t[6]),
        o("useWAWebListener").useListener(n, "ended", g));
      var h = m(o("WAWebThemeContext").ThemeContext),
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
      var v = "translateX(" + (s * 100 - 100) + "%)",
        S;
      t[10] !== v
        ? ((S = { transform: v }), (t[10] = v), (t[11] = S))
        : (S = t[11]);
      var R;
      return (
        t[12] !== b || t[13] !== S
          ? ((R = u.jsx(
              "div",
              babelHelpers.extends({}, C, {
                children: u.jsx("div", { className: b, style: S }),
              }),
            )),
            (t[12] = b),
            (t[13] = S),
            (t[14] = R))
          : (R = t[14]),
        R
      );
    }
    function N(e) {
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
    l.default = L;
  },
  98,
);
