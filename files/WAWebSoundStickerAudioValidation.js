__d(
  "WAWebSoundStickerAudioValidation",
  [
    "WAWebABProps",
    "WAWebKaleidoscopeWasmFeatureSupport",
    "WAWebMediaWorkerProxy",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 80,
      s = new Set(["audio/ogg"]),
      u = new Set(["audio/m4a", "audio/x-m4a"]),
      c = new Set();
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.downloadQpl,
            a = t.input,
            i = t.mimetype;
          if (
            !(yield o(
              "WAWebKaleidoscopeWasmFeatureSupport",
            ).checkKaleidoscopeWasmFeatureSupport())
          )
            throw r("err")("kaleidoscope unavailable");
          var l = o("WAWebABProps").getABPropConfigValue(
              "ks_ogg_opus_strict_validation_enabled",
            ),
            u = yield o("WAWebMediaWorkerProxy").kaleidoscopeClassifyInWorker({
              mediaType: "sound-sticker-audio",
              rawMimeType: i != null ? i : "application/octet-stream",
              input: a,
              eventFlow: n,
            }),
            c = u.result,
            d = u.transferredBuffer;
          if (!c.success)
            throw r("err")("kaleidoscope failed: " + c.error.errorName);
          var m = c.value,
            _ = m.mimetype,
            f = m.score;
          if (f >= e) throw r("err")("scored " + f + " as " + _);
          if (!p(i).has(_))
            throw r("err")(
              "declared " + (i != null ? i : "nothing") + " but detected " + _,
            );
          if (s.has(_) && !l) throw r("err")("ogg not validated as opus");
          return d;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e === "audio/ogg; codecs=opus"
        ? s
        : e === "audio/mp4" || e === "audio/m4a" || e === "audio/x-m4a"
          ? u
          : c;
    }
    l.checkSoundStickerAudio = d;
  },
  98,
);
