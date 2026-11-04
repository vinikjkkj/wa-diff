__d(
  "WAWebMediaHevcSupport",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l() {
      if (e == null) {
        var t = document.createElement("video"),
          n = [
            'video/mp4; codecs="hvc1.1.6.L93.B0"',
            'video/mp4; codecs="hev1.1.6.L93.B0"',
            'video/mp4; codecs="hvc1"',
            'video/mp4; codecs="hev1"',
          ];
        e = n.some(function (e) {
          return t.canPlayType(e) === "probably";
        });
      }
      return e;
    }
    i.browserSupportsHEVC = l;
  },
  66,
);
