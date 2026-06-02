__d(
  "WAWebWaveformUtils",
  ["WAPttComposerScaleWaveform", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 64;
    async function s(t) {
      if (!o("WAWebNewsletterGatingUtils").isAudioFileWaveformSenderEnabled())
        return null;
      var n = await t.arrayBuffer(),
        r = new AudioContext({ sampleRate: 8e3 });
      try {
        var a = await r.decodeAudioData(n),
          i = u(a, e);
        return new Uint8Array(i);
      } finally {
        r.close();
      }
    }
    function u(e, t) {
      var n = e.getChannelData(0);
      return d(c(n, t));
    }
    function c(e, t) {
      return r("WAPttComposerScaleWaveform")(Array.from(e, Math.abs), t);
    }
    function d(e) {
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
