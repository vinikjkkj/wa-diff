__d(
  "WAWebGenerateEventCallLink",
  ["WAWebVoipCreateCallLink"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      try {
        var r = await o("WAWebVoipCreateCallLink").createCallLink({
          callType: t === "voice" ? "audio" : "video",
          eventStartTime: e,
          requireApproval: n,
        });
        return r;
      } catch (e) {
        return;
      }
    }
    l.createEventCallLink = e;
  },
  98,
);
