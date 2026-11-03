__d(
  "WAWebCatchUpSharableEventInviteBubbleAction",
  [
    "WAWebMsgCollection",
    "WAWebSharableEventInviteMessageRefreshJob",
    "WAWebSharableEventInviteMsg",
    "asyncToGeneratorRuntime",
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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = e + ":" + n;
          if (!(t === "" || u.has(a))) {
            u.add(a);
            var i = yield o(
                "WAWebSharableEventInviteMessageRefreshJob",
              ).getSharableEventInviteCoverToThumbnail(e, t),
              l =
                i == null
                  ? null
                  : yield o(
                      "WAWebSharableEventInviteMsg",
                    ).makeSharableEventCoverThumbnail(i);
            l != null &&
              (yield o(
                "WAWebSharableEventInviteMessageRefreshJob",
              ).saveSharableEventInviteThumbnail(e, l),
              (r = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
                r.set({ sharableEventInviteJpegThumbnail: l }));
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.catchUpSharableEventInviteBubble = s),
      (l.fillSharableEventInviteThumbnail = c));
  },
  98,
);
