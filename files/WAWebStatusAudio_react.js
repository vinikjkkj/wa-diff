__d(
  "WAWebStatusAudio.react",
  [
    "fbt",
    "WAWebEnvironment",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebPttAudioTag.react",
    "WAWebStatusAudioBubble.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "useWAWebModelValues",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = function (t) {
        return t.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .STATUS_V3,
          isUserInitiated: !0,
        });
      };
    function _(e) {
      var t = e.markRead,
        n = e.msg,
        a = e.pause,
        i = e.play,
        l = e.playbackController,
        c = e.status,
        _ = m(null),
        f = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaStage",
        ]);
      (d(function () {
        f.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED && p(n);
      }, []),
        r("useWAWebOnUnmount")(function () {
          a();
        }));
      var g = r("useWAWebStableCallback")(function (e) {
        ((_.current = e.current), l.setMedia(_.current));
      });
      d(
        function () {
          (i(),
            f.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
              t(c, n));
        },
        [t, f.mediaStage, n, i, c],
      );
      var h =
        r("WAWebEnvironment").isWindows === !0
          ? s._(/*BTDS*/ "Audio playback is not supported on this device.")
          : s._(/*BTDS*/ "Your browser doesn't support audio playback.");
      return u.jsx("div", {
        className: "x10l6tqk x78zum5 x13vifvy x1o0tod xh8yej3 x5yr21d",
        onMouseDown: e.onMouseDown,
        onMouseUp: e.onMouseUp,
        children: u.jsx(r("WAWebMediaUrlProvider"), {
          mediaData: f,
          placeholderRenderer: function () {
            return u.jsx("div", {
              className:
                "x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x1lwm3bp x11t971q xvc5jky x47corl xmz0i5r x1sbjjv6",
              children: u.jsx(r("WAWebStatusAudioBubble.react"), {
                msg: n,
                mediaData: f,
                status: c,
                playbackController: l,
                isPreview: !0,
              }),
            });
          },
          downloadMedia: function () {
            return p(n);
          },
          children: function (t) {
            return u.jsxs(u.Fragment, {
              children: [
                u.jsx("div", {
                  className:
                    "x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x1lwm3bp x11t971q xvc5jky x47corl xmz0i5r",
                  children: u.jsx(r("WAWebStatusAudioBubble.react"), {
                    msg: n,
                    mediaData: f,
                    status: c,
                    playbackController: l,
                    isPreview: !1,
                  }),
                }),
                u.jsx(r("WAWebPttAudioTag.react"), {
                  url: t,
                  autoPlay: !0,
                  msg: n,
                  controls: !1,
                  refAudio: g,
                  children: h,
                }),
              ],
            });
          },
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
