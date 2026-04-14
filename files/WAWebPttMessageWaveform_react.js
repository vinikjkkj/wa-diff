__d(
  "WAWebPttMessageWaveform.react",
  ["WAWebPttComposerWaveform.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.currentTime,
        n = e.disabled,
        r = e.duration,
        a = e.onSeek,
        i = e.onSeekEnd,
        l = e.outgoing,
        c = e.played,
        m = e.skipThumb,
        p = e.waveform,
        _ = u(
          function () {
            return t != null ? t : 0;
          },
          [t],
        ),
        f = u(
          function () {
            return Array.from(p).map(function (e) {
              return e / 100;
            });
          },
          [p],
        ),
        g = u(
          function () {
            return r;
          },
          [r],
        );
      return s.jsx("div", {
        className: "x78zum5 xxk0z11",
        children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
          location: d(l, c),
          sampleRate: 6,
          getSamples: f,
          getCurrentTime: _,
          getDuration: g,
          live: !1,
          mode: o("WAWebPttComposerWaveform.react").WaveformMode.PREVIEW,
          onSeek: a,
          onSeekEnd: i,
          disabled: n,
          skipThumb: m,
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
      switch (e) {
        case !0:
          return t
            ? o("WAWebPttComposerWaveform.react").WaveformLocation
                .OUTGOING_PLAYED_MESSAGE
            : o("WAWebPttComposerWaveform.react").WaveformLocation
                .OUTGOING_UNPLAYED_MESSAGE;
        case !1:
          return t
            ? o("WAWebPttComposerWaveform.react").WaveformLocation
                .INCOMING_PLAYED_MESSAGE
            : o("WAWebPttComposerWaveform.react").WaveformLocation
                .INCOMING_UNPLAYED_MESSAGE;
      }
    }
    l.default = c;
  },
  98,
);
