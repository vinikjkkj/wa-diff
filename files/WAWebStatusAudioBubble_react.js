__d(
  "WAWebStatusAudioBubble.react",
  [
    "cx",
    "WAPttComposerScaleWaveform",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebDetailImage.react",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebPttComposerWaveform.react",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPttStatusIcon.react",
    "WAWebStatusEventHandlersMap",
    "react",
    "useWAWebAnimationFrames",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = 15,
      f = 72,
      g = 27,
      h = 280,
      y = "_aj-p",
      C = "x18re5ia-B",
      b = 0.15,
      v = 0.25,
      S = function (t) {
        var e = o("WAWebMsgGetters").getStatusCanvasColor(t);
        return e == null ? null : { fill: e, stroke: e };
      };
    function R(e) {
      var t = e.duration,
        n = e.playbackController,
        r = p(n.currentTime),
        a = r[0],
        i = r[1];
      return (
        d(function () {
          var e = function (t) {
            i(t);
          };
          return (
            n.addListeners({ onTimeUpdate: e }),
            function () {
              n.removeListener(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnTimeUpdate,
                e,
              );
            }
          );
        }, []),
        u.jsx("div", {
          className:
            "xseo6mj x1hm9lzh x1i47q4g x1f6kntn xo1l8bm x10h3iyq x1gnnpzl x78zum5 x6s0dn4 xf4yft xqcmdr3 x1q3qbx4 x4hg4is",
          children: o("WAWebClock").Clock.durationStr(t - a),
        })
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.duration,
        n = e.playbackController,
        a = e.waveformData,
        i = o("WAWebPttComposerWaveform.react").WaveformLocation.STATUS_MESSAGE,
        l = o("WAWebPttComposerWaveform.react").getWaveformBarDimensions(i),
        s = l.barSpacing,
        c = l.barWidth,
        d = Math.round(h / (c + s)),
        _ = p(n.isPlaying),
        f = _[0],
        g = _[1],
        y = function () {
          g(n.isPlaying);
        };
      r("useWAWebAnimationFrames")(y, { active: !0 });
      var C = m(
          function () {
            var e = a != null ? a : new Uint8Array(64),
              n = t / b,
              o = n * (d * v) + d,
              i = r("WAPttComposerScaleWaveform")(
                Array.from(e).map(function (e) {
                  return e / 100;
                }),
                o,
              );
            return i;
          },
          [t, d, a],
        ),
        S = m(
          function () {
            return u.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
              getSamples: function () {
                return C;
              },
              getCurrentTime: function () {
                return n.currentTime;
              },
              getDuration: function () {
                return t + 1;
              },
              sampleRate: d,
              mode: o("WAWebPttComposerWaveform.react").WaveformMode
                .VOICE_STATUS,
              onSeekEnd: r("WAWebNoop"),
              location: i,
              live: f,
              heightJitterFactor: 0.2,
              jitterValuesCount: 20,
            });
          },
          [n, i, d, t, C, f],
        );
      return u.jsx("div", {
        className:
          "xcxhlts x1hm9lzh x1dz1jew xy75621 x78zum5 xqcmdr3 x1q3qbx4 x4hg4is",
        children: S,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.isPreview,
        n = e.msg,
        r = e.playbackController,
        a = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "waveform",
          "duration",
        ]),
        i = Number.isNaN(r.duration)
          ? o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(a)
          : r.duration / 1e3,
        l = S(n),
        s = t
          ? null
          : u.jsx(L, {
              duration: i,
              playbackController: r,
              waveformData: a.waveform,
            }),
        c = t ? null : u.jsx(R, { duration: i, playbackController: r });
      return u.jsxs("div", {
        className:
          "x1czfd9k xwc1p85 x1nh4oco xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x17t9dm2",
        children: [
          u.jsxs("div", {
            className:
              "xni59qk xy75621 x187xtus xcxhlts xx6jrq6 x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6",
            children: [
              u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: n.senderObj.id,
                size: f,
              }),
              u.jsx("span", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  "x11uqc5h x10l6tqk x18vhi92 x1coevs8",
                  y,
                ),
                style: l,
                children: u.jsx(o("WAWebPttStatusIcon.react").PttStatusIcon, {
                  width: g,
                  height: g,
                }),
              }),
            ],
          }),
          s,
          c,
        ],
      });
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  98,
);
