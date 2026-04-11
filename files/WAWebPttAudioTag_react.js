__d(
  "WAWebPttAudioTag.react",
  [
    "WANullthrows",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebDebounce",
    "WAWebDomVideoDisposeMediaPlayer",
    "WAWebGetDisplayType",
    "WAWebMsgGetters",
    "WAWebPttAudioChannels",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "react",
    "useWAWebInterval",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = r("WAWebDebounce")(function (e, t) {
        o("WAWebUserPrefsGeneral").setMediaVolumeSettings(e, t);
      }, 500);
    function p(e) {
      var t = e.autoPlay,
        n = e.onError,
        a = e.playbackRate,
        i = e.refAudio,
        l = e.url,
        u = d(0),
        p = d(null),
        _ = d(null),
        f = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        g = f[0],
        h = function () {
          var e = p.current;
          (_.current == null || _.current(),
            (_.current =
              e == null
                ? null
                : o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(
                    e,
                  )));
        },
        y = function (t) {
          (L(), n == null || n(t.target.src));
        },
        C = function () {
          L();
        },
        b = function () {
          if (
            o("WAWebSocketModel").Socket.state ===
            o("WAWebSocketConstants").SOCKET_STATE.CONNECTED
          ) {
            if ((u.current++, u.current > 40)) {
              y({
                target: {
                  src: l,
                  error: { code: window.MediaError.MEDIA_ERR_NETWORK },
                },
              });
              return;
            }
            var e = r("WANullthrows")(p.current),
              t = e.buffered;
            t.length && t.end(0) > 0 && C();
          }
        },
        v = r("useWAWebInterval")(b, 250),
        S = v[0],
        R = v[1];
      function L() {
        (R(), (u.current = 0));
      }
      var E = function () {
          ((u.current = 0), S());
        },
        k = function () {
          var e = p.current;
          e &&
            (e.defaultPlaybackRate !== a || e.playbackRate !== a) &&
            (e.defaultPlaybackRate = e.playbackRate = a != null ? a : 1);
        };
      (c(
        function () {
          (h(), k(), i == null || i(p));
        },
        void 0,
      ),
        o("useWAWebListener").useListener(p.current, "error", y, {
          capture: !0,
        }),
        o("useWAWebListener").useListener(p.current, "playing", C),
        c(function () {
          var e = function () {
            var e = p.current;
            if (e) {
              var t = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
                n = t.muted,
                r = t.volume;
              (r != null && (e.volume = r), (e.muted = n));
            }
          };
          (e(), h(), i == null || i(p));
          var n = p.current;
          return (
            (o("WAWebUA").UA.isGecko || o("WAWebUA").UA.isSafari) && t && E(),
            function () {
              (_.current == null || _.current(),
                m.flush(),
                o("WAWebUA").UA.isBlink &&
                  n &&
                  r("WAWebDomVideoDisposeMediaPlayer")(n));
            }
          );
        }, []));
      var I = function () {
        var e = p.current;
        e && m(e.volume, e.muted);
      };
      o("useWAWebListener").useListener(
        (o("WAWebUA").UA.isGecko || o("WAWebUA").UA.isSafari) && !t
          ? p.current
          : null,
        "play",
        E,
      );
      var T = o("WAWebGetDisplayType").getDisplayType(e.msg);
      return s.jsxs("div", {
        className: e.className,
        "data-testid": void 0,
        children: [
          s.jsx("audio", {
            ref: p,
            className: "xh8yej3",
            src: e.url,
            onClick: e.onClick,
            controls: e.controls,
            preload: e.preload,
            onVolumeChange: I,
            autoPlay: e.autoPlay,
            children: e.children,
          }),
          s.jsx(r("WAWebAddOnBubblesContainer.react"), {
            isOutgoingMsg: g,
            displayType: T,
            bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER,
            parentIds: [e.msg.id.toString()],
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
