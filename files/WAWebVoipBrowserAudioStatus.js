__d(
  "WAWebVoipBrowserAudioStatus",
  ["WAGetMediaDevicesSupportedConstraints", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null;
    function c(e) {
      u = e;
    }
    function d() {
      return u;
    }
    function m() {
      if (u == null) {
        var t = o(
            "WAGetMediaDevicesSupportedConstraints",
          ).getMediaDevicesSupportedConstraints(),
          n = (t == null ? void 0 : t.echoCancellation) === !0,
          r = (t == null ? void 0 : t.noiseSuppression) === !0,
          a = (t == null ? void 0 : t.autoGainControl) === !0;
        n || r || a
          ? ((u = {
              echoCancellation: n,
              noiseSuppression: r,
              autoGainControl: a,
            }),
            o("WALogger").LOG(
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
            ))
          : o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[preDetectBrowserAudioCapabilities] no AEC/NS/AGC support",
                ])),
            );
      }
    }
    ((l.setBrowserAudioProcessingApplied = c),
      (l.getBrowserAudioProcessingApplied = d),
      (l.preDetectBrowserAudioCapabilities = m));
  },
  98,
);
