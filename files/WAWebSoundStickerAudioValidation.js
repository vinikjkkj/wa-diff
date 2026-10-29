__d(
  "WAWebSoundStickerAudioValidation",
  [
    "WAWebKaleidoscopeWasmFeatureSupport",
    "WAWebMediaWorkerProxy",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 80,
      s = "audio/ogg; codecs=opus",
      u = "audio/mp4",
      c = new Set(["audio/ogg"]),
      d = new Set(["audio/m4a", "audio/x-m4a"]),
      m = new Set();
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.downloadQpl,
            a = t.input,
            i = t.mimetype;
          if (
            !(yield o(
              "WAWebKaleidoscopeWasmFeatureSupport",
            ).checkKaleidoscopeWasmFeatureSupport())
          )
            throw r("err")("kaleidoscope unavailable");
          var l = yield o("WAWebMediaWorkerProxy").kaleidoscopeClassifyInWorker(
              {
                mediaType: "sound-sticker-audio",
                rawMimeType: i != null ? i : "application/octet-stream",
                input: a,
                eventFlow: n,
              },
            ),
            d = l.result,
            m = l.transferredBuffer;
          if (!d.success)
            throw r("err")("kaleidoscope failed: " + d.error.errorName);
          var p = d.value,
            _ = p.mimetype,
            g = p.score;
          if (g >= e) throw r("err")("scored " + g + " as " + _);
          if (!f(i == null ? void 0 : i.toLowerCase()).has(_))
            throw r("err")(
              "declared " + (i != null ? i : "nothing") + " but detected " + _,
            );
          return { audio: m, mimetype: c.has(_) ? s : u };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return e === "audio/ogg; codecs=opus"
        ? c
        : e === "audio/mp4" || e === "audio/m4a" || e === "audio/x-m4a"
          ? d
          : m;
    }
    l.checkSoundStickerAudio = p;
  },
  98,
);
