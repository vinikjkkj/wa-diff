__d(
  "WAWebTextStatusParseUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = 0;
    function l(t) {
      var n = t.textStatusString;
      t.textStatusString === "" && (n = null);
      var r = t.textStatusEphemeralDuration;
      (r == null && (r = e),
        n == null && t.textStatusEmoji == null && r !== e && (r = e));
      var o;
      return (
        t.textStatusEmoji != null && (o = { content: t.textStatusEmoji }),
        { text: n, emoji: o, ephemeral_duration_sec: r }
      );
    }
    i.createTextStatusObjectForUpdateRequest = l;
  },
  66,
);
