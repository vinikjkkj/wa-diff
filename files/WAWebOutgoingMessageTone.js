__d(
  "WAWebOutgoingMessageTone",
  ["WAWebNoop", "WAWebUserPrefsNotifications", "bx"],
  function (t, n, r, o, a, i, l) {
    var e = new window.Audio(r("bx").getURL(r("bx")("9562")));
    function s() {
      o("WAWebUserPrefsNotifications").getOutgoingMessageSound() &&
        e.play().catch(r("WAWebNoop"));
    }
    l.playOutgoingMessageTone = s;
  },
  98,
);
