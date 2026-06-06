__d(
  "WAWebWaveformUtils",
  [
    "WAPttComposerScaleWaveform",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 64;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o("WAWebNewsletterGatingUtils").isAudioFileWaveformSenderEnabled()
          )
            return null;
          var n = yield t.arrayBuffer(),
            r = new AudioContext({ sampleRate: 8e3 });
          try {
            var a = yield r.decodeAudioData(n),
              i = c(a, e);
            return new Uint8Array(i);
          } finally {
            r.close();
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      var n = e.getChannelData(0);
      return m(d(n, t));
    }
    function d(e, t) {
      return r("WAPttComposerScaleWaveform")(Array.from(e, Math.abs), t);
    }
    function m(e) {
      var t = Math.pow(Math.max.apply(Math, e), -1),
        n = e.map(function (e) {
          return e * t;
        });
      return n.map(function (e) {
        return e * 100;
      });
    }
    l.computeWaveform = s;
  },
  98,
);
