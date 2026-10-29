__d(
  "WAWebVoipCallControls.story",
  [
    "WAWebBoolFunc",
    "WAWebFlex.react",
    "WAWebShowroomStory.react",
    "WAWebVoipCallControls.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCheckbox",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useLayoutEffect,
      m = c.useState,
      p = {
        controlsContainer: {
          backgroundColor: "x1c7u0tx",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "xyamay9",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "x1l90r2v",
          paddingInlineStart: "xf7dkkf",
          minWidth: "x13o0s5z",
          $$css: !0,
        },
      };
    function _(e, t) {
      return {
        addEventListener: function () {},
        dispatchEvent: o("WAWebBoolFunc").returnTrue,
        name: t,
        onchange: null,
        removeEventListener: function () {},
        state: e,
      };
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        r = e === void 0 ? "granted" : e,
        a,
        i;
      (t[0] !== r
        ? ((a = function () {
            var e = navigator.permissions;
            if (!(e == null || typeof e.query != "function")) {
              var t = e.query.bind(e);
              return (
                (e.query = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return e.name === "microphone" || e.name === "camera"
                        ? _(r, e.name)
                        : t(e);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                function () {
                  e.query = t;
                }
              );
            }
          }),
          (i = [r]),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        d(a, i));
    }
    var g = {
      storyName: "WAWebVoipCallControls",
      section: o("WAWebShowroomStory.react").StorySectionType.OTHER,
      component: r("WAWebVoipCallControls.react"),
      description:
        "VoIP call control buttons for mute, end call, video toggle, accept/reject calls. Use this to test the mini-player call controls UI.",
      examples: [
        {
          example: y,
          title: "Incoming Audio Call Controls (accept, reject, mute)",
        },
        {
          example: C,
          title: "Incoming Video Call Controls (accept, reject, mute)",
        },
        {
          example: b,
          title: "Active Audio Call Controls (mute audio, end call)",
        },
        {
          example: v,
          title: "Active Video Call Controls (mute, video toggle, end call)",
        },
      ],
    };
    function h(t) {
      var n = o("react-compiler-runtime").c(30),
        a = t.hasCameraAvailable,
        i = t.isCallActive,
        l = t.isCallRinging,
        s = t.isSelfScreenSharing,
        c = t.isVideoCall,
        d = t.testid,
        _ = a === void 0 ? !0 : a,
        g = s === void 0 ? !1 : s;
      f();
      var h = o("useWAWebCheckbox").useCheckBox("Audio Muted", !1),
        y = h[0],
        C = h[1],
        b = h[2],
        v = o("useWAWebCheckbox").useCheckBox("Video Muted", !1),
        S = v[0],
        R = v[1],
        L = v[2],
        E = m("None"),
        k = E[0],
        I = E[1],
        T;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            I("Accept call clicked");
          }),
          (n[0] = T))
        : (T = n[0]);
      var D = T,
        x;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            I("Reject call clicked");
          }),
          (n[1] = x))
        : (x = n[1]);
      var $ = x,
        P;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            I("End call clicked");
          }),
          (n[2] = P))
        : (P = n[2]);
      var N = P,
        M;
      n[3] !== y || n[4] !== b
        ? ((M = function () {
            (b(!y), I("Mute toggled " + (y ? "on" : "off")));
          }),
          (n[3] = y),
          (n[4] = b),
          (n[5] = M))
        : (M = n[5]);
      var w = M,
        A;
      n[6] !== S || n[7] !== L
        ? ((A = function () {
            (L(!S), I("Video toggled " + (S ? "on" : "off")));
          }),
          (n[6] = S),
          (n[7] = L),
          (n[8] = A))
        : (A = n[8]);
      var F = A,
        O;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            I("Send message clicked");
          }),
          (n[9] = O))
        : (O = n[9]);
      var B = O,
        W;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = (e || (e = r("stylex"))).props(
            p.controlsContainer,
            o("WDSThemes").WDSDarkTheme,
          )),
          (n[10] = W))
        : (W = n[10]);
      var q;
      n[11] !== w ||
      n[12] !== F ||
      n[13] !== _ ||
      n[14] !== y ||
      n[15] !== i ||
      n[16] !== l ||
      n[17] !== g ||
      n[18] !== c ||
      n[19] !== S
        ? ((q = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(
              "div",
              babelHelpers.extends({}, W, {
                children: u.jsx(r("WAWebVoipCallControls.react"), {
                  chat: null,
                  hasCameraAvailable: _,
                  isAnyPeerScreenSharing: !1,
                  isCallActive: i,
                  isCallRinging: l,
                  isMuted: y,
                  isSelfScreenSharing: g,
                  isVideoCall: c,
                  isVideoMuted: S,
                  onAccept: D,
                  onEnd: N,
                  onMuteToggle: w,
                  onReject: $,
                  onSendMessage: B,
                  onVideoMuteToggle: F,
                  showSendMessage: !0,
                }),
              }),
            ),
          })),
          (n[11] = w),
          (n[12] = F),
          (n[13] = _),
          (n[14] = y),
          (n[15] = i),
          (n[16] = l),
          (n[17] = g),
          (n[18] = c),
          (n[19] = S),
          (n[20] = q))
        : (q = n[20]);
      var U = c && R,
        V;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { className: "xhslqc4 x1pg5gke x1xmf6yo" }), (n[21] = V))
        : (V = n[21]);
      var H;
      n[22] !== k
        ? ((H = u.jsxs(
            "div",
            babelHelpers.extends({}, V, {
              "data-testid": "last-action",
              children: ["Last action: ", k],
            }),
          )),
          (n[22] = k),
          (n[23] = H))
        : (H = n[23]);
      var G;
      return (
        n[24] !== C || n[25] !== q || n[26] !== U || n[27] !== H || n[28] !== d
          ? ((G = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 16,
              testid: d,
              children: [q, C, U, H],
            })),
            (n[24] = C),
            (n[25] = q),
            (n[26] = U),
            (n[27] = H),
            (n[28] = d),
            (n[29] = G))
          : (G = n[29]),
        G
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(h, {
              testid: "voip-incoming-call-controls-container",
              isCallActive: !1,
              isCallRinging: !0,
              isVideoCall: !1,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function C() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(h, {
              testid: "voip-incoming-video-call-controls-container",
              isCallActive: !1,
              isCallRinging: !0,
              isVideoCall: !0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function b() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(h, {
              testid: "voip-active-audio-call-controls-container",
              hasCameraAvailable: !1,
              isCallActive: !0,
              isCallRinging: !1,
              isVideoCall: !1,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function v() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(h, {
              testid: "voip-active-video-call-controls-container",
              hasCameraAvailable: !0,
              isCallActive: !0,
              isCallRinging: !1,
              isVideoCall: !0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = g;
  },
  98,
);
