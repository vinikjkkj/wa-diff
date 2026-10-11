__d(
  "WAWebVoipAudioCaptureImplementationFactory",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebUA",
    "WAWebVoipAudioCaptureScriptProcessor",
    "WAWebVoipAudioCaptureSharedBufferWorklet",
    "WAWebVoipAudioCaptureWorklet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      });
    function u() {
      var t,
        n = o("WAWebABProps").getABPropConfigValue(
          "web_voip_audio_capture_impl",
        ),
        r = (t = s.cast(n)) != null ? t : s.DEFAULT;
      o("WAWebUA").UA.isFirefox && (r = s.SCRIPT_PROCESSOR);
      var a =
        r === s.SCRIPT_PROCESSOR
          ? new (o(
              "WAWebVoipAudioCaptureScriptProcessor",
            ).WAWebVoipAudioCaptureScriptProcessor)()
          : r === s.AUDIO_WORKLET
            ? new (o(
                "WAWebVoipAudioCaptureWorklet",
              ).WAWebVoipAudioCaptureWorklet)()
            : r === s.SHARED_BUFFER_WORKLET
              ? new (o(
                  "WAWebVoipAudioCaptureSharedBufferWorklet",
                ).WAWebVoipAudioCaptureSharedBufferWorklet)()
              : new (o(
                  "WAWebVoipAudioCaptureSharedBufferWorklet",
                ).WAWebVoipAudioCaptureSharedBufferWorklet)();
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:AudioCapture] using implementation: ",
              "",
            ])),
          o("WAWebUA").UA.isFirefox
            ? "script-processor (Firefox override)"
            : n != null
              ? n
              : "default",
        ),
        a
      );
    }
    l.createAudioCaptureImplementation = u;
  },
  98,
);
