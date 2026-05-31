__d(
  "WAWebVoipBrowserAudioStatus",
  ["WAGetMediaDevicesSupportedConstraints", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = -1,
      c = 7,
      d = null;
    function m(e) {
      d = e;
    }
    function p() {
      return d;
    }
    function _() {
      var e = p();
      return e == null ? u : g(e);
    }
    function f() {
      if (d == null) {
        var t = o(
            "WAGetMediaDevicesSupportedConstraints",
          ).getMediaDevicesSupportedConstraints(),
          n = (t == null ? void 0 : t.echoCancellation) === !0,
          r = (t == null ? void 0 : t.noiseSuppression) === !0,
          a = (t == null ? void 0 : t.autoGainControl) === !0;
        ((d = { echoCancellation: n, noiseSuppression: r, autoGainControl: a }),
          n || r || a
            ? o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[preDetectBrowserAudioCapabilities] EC=",
                    " NS=",
                    " AGC=",
                    "",
                  ])),
                String(n),
                String(r),
                String(a),
              )
            : o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[preDetectBrowserAudioCapabilities] no AEC/NS/AGC support",
                  ])),
              ));
      }
    }
    function g(e) {
      return (
        (e.echoCancellation ? 1 : 0) +
        (e.noiseSuppression ? 2 : 0) +
        (e.autoGainControl ? 4 : 0)
      );
    }
    ((l.BROWSER_AUDIO_PROCESSING_STATUS_UNKNOWN = u),
      (l.BROWSER_AUDIO_PROCESSING_STATUS_ALL = c),
      (l.setBrowserAudioProcessingApplied = m),
      (l.getBrowserAudioProcessingApplied = p),
      (l.getBrowserAudioProcessingStatusForVoipStack = _),
      (l.preDetectBrowserAudioCapabilities = f));
  },
  98,
);
