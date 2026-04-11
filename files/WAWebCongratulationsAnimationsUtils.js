__d(
  "WAWebCongratulationsAnimationsUtils",
  ["$InternalEnum", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["DEFAULT"]),
      s = "https://static.whatsapp.net/wa/static/test";
    function u(t) {
      var n = null;
      if (t === e.DEFAULT) {
        var o = { cat: "test", id: "confetti-falling", test: "1" };
        n = r("WAWebURLUtils").build(s, o);
      }
      return n;
    }
    ((l.CelebrationAnimationType = e), (l.getCongratulationsAnimationPath = u));
  },
  98,
);
