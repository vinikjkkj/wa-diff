__d(
  "WAWebPttMessageWaveform.react",
  ["WAWebPttComposerWaveform.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.currentTime,
        r = e.disabled,
        a = e.duration,
        i = e.onSeek,
        l = e.onSeekEnd,
        u = e.outgoing,
        c = e.played,
        p = e.skipThumb,
        _ = e.waveform,
        f;
      t[0] !== n
        ? ((f = function () {
            return n != null ? n : 0;
          }),
          (t[0] = n),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      t[2] !== _
        ? ((h = function () {
            return Array.from(_).map(d);
          }),
          (t[2] = _),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C;
      t[4] !== a
        ? ((C = function () {
            return a;
          }),
          (t[4] = a),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x78zum5 xxk0z11" }), (t[6] = v))
        : (v = t[6]);
      var S;
      t[7] !== u || t[8] !== c
        ? ((S = m(u, c)), (t[7] = u), (t[8] = c), (t[9] = S))
        : (S = t[9]);
      var R;
      return (
        t[10] !== r ||
        t[11] !== b ||
        t[12] !== g ||
        t[13] !== y ||
        t[14] !== i ||
        t[15] !== l ||
        t[16] !== p ||
        t[17] !== S
          ? ((R = s.jsx(
              "div",
              babelHelpers.extends({}, v, {
                children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
                  location: S,
                  sampleRate: 6,
                  getSamples: y,
                  getCurrentTime: g,
                  getDuration: b,
                  live: !1,
                  mode: o("WAWebPttComposerWaveform.react").WaveformMode
                    .PREVIEW,
                  onSeek: i,
                  onSeekEnd: l,
                  disabled: r,
                  skipThumb: p,
                }),
              }),
            )),
            (t[10] = r),
            (t[11] = b),
            (t[12] = g),
            (t[13] = y),
            (t[14] = i),
            (t[15] = l),
            (t[16] = p),
            (t[17] = S),
            (t[18] = R))
          : (R = t[18]),
        R
      );
    }
    function d(e) {
      return e / 100;
    }
    function m(e, t) {
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
