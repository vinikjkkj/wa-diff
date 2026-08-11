__d(
  "WAWebVoipBrowserAudioStatus",
  ["WAGetMediaDevicesSupportedConstraints", "WALogger", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = -1,
      c = 7,
      d = null,
      m = null,
      p = !0;
    function _(e, t) {
      (t === void 0 && (t = !0), (d = e), (p = t));
    }
    function f() {
      var e = d != null ? d : m;
      return e == null || p || m == null
        ? e
        : babelHelpers.extends({}, e, { autoGainControl: m.autoGainControl });
    }
    function g() {
      var e = f();
      return e == null
        ? u
        : o("WAWebUA").UA.isSafari && e.echoCancellation
          ? c
          : y(e);
    }
    function h() {
      if (m == null) {
        var t = o(
            "WAGetMediaDevicesSupportedConstraints",
          ).getMediaDevicesSupportedConstraints(),
          n = (t == null ? void 0 : t.echoCancellation) === !0,
          r = (t == null ? void 0 : t.noiseSuppression) === !0,
          a = (t == null ? void 0 : t.autoGainControl) === !0;
        ((m = { echoCancellation: n, noiseSuppression: r, autoGainControl: a }),
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
    function y(e) {
      return (
        (e.echoCancellation ? 1 : 0) +
        (e.noiseSuppression ? 2 : 0) +
        (e.autoGainControl ? 4 : 0)
      );
    }
    ((l.BROWSER_AUDIO_PROCESSING_STATUS_UNKNOWN = u),
      (l.BROWSER_AUDIO_PROCESSING_STATUS_ALL = c),
      (l.setBrowserAudioProcessingApplied = _),
      (l.getBrowserAudioProcessingStatusForVoipStack = g),
      (l.preDetectBrowserAudioCapabilities = h));
  },
  98,
);
