__d(
  "WAWebSetTextStatusJob",
  ["WAWebDefinePersistedJob", "WAWebUpdateTextStatusJob"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("sendMex", async function (e) {
        var t = e.emoji,
          n = e.ephemeralDurationSeconds,
          r = e.text,
          a = await o("WAWebUpdateTextStatusJob").updateTextStatus(r, t, n);
        return a;
      })
      .end();
    l.setTextStatus = e;
  },
  98,
);
