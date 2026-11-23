__d(
  "WAWebVoipCreateCallLink",
  ["WAWebVoipCreateCallLinkJob"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.callType,
        n = e.eventStartTime,
        r = e.requireApproval,
        a = await o("WAWebVoipCreateCallLinkJob").createCallLinkJob({
          callType: t,
          eventStartTime: n,
          requireApproval: r,
        });
      return a;
    }
    l.createCallLink = e;
  },
  98,
);
