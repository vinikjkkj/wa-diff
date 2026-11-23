__d(
  "WAWebCatchUpSharableEventInviteBubbleAction",
  [
    "WAWebMsgCollection",
    "WAWebSharableEventInviteMessageRefreshJob",
    "WAWebSharableEventInviteMsg",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set();
    function s(t, n) {
      n === "" ||
        e.has(t) ||
        (e.add(t),
        o(
          "WAWebSharableEventInviteMessageRefreshJob",
        ).catchUpSharableEventInviteMessage(t, n));
    }
    var u = new Set();
    async function c(e, t, n) {
      var r,
        a = e + ":" + n;
      if (!(t === "" || u.has(a))) {
        u.add(a);
        var i = await o(
          "WAWebSharableEventInviteMessageRefreshJob",
        ).getSharableEventInviteCoverToThumbnail(e, t);
        if (i.kind === "event-not-stored") {
          u.delete(a);
          return;
        }
        if (i.kind === "cover") {
          var l = await o(
            "WAWebSharableEventInviteMsg",
          ).makeSharableEventCoverThumbnail(i.url);
          l != null &&
            (await o(
              "WAWebSharableEventInviteMessageRefreshJob",
            ).saveSharableEventInviteThumbnail(e, l),
            (r = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
              r.set({ sharableEventInviteJpegThumbnail: l }));
        }
      }
    }
    ((l.catchUpSharableEventInviteBubble = s),
      (l.fillSharableEventInviteThumbnail = c));
  },
  98,
);
