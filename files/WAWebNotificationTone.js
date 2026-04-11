__d(
  "WAWebNotificationTone",
  ["Promise", "WAWebNoop", "bx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new window.Audio(r("bx").getURL(r("bx")("9561")));
    function u() {
      s.play().catch(r("WAWebNoop"));
    }
    function c(t) {
      return (e || (e = n("Promise"))).resolve(t);
    }
    ((l.playNotification = u), (l.cachePath = c));
  },
  98,
);
