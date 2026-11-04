__d(
  "WAWebSharableEventLinkPreview",
  ["WAWebSharableEventCollection", "WAWebSharableEventInviteeCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.creatorPushName,
        r = e.event,
        a = e.invitees,
        i = e.region;
      (o("WAWebSharableEventCollection").SharableEventCollection.addLinkPreview(
        r,
        { linkToken: t, region: i, linkCreatorPushName: n },
      ),
        o(
          "WAWebSharableEventInviteeCollection",
        ).SharableEventInviteeCollection.replaceEventRows(r.eventId, a));
    }
    function s(e) {
      var t;
      return (t = o("WAWebSharableEventCollection").SharableEventCollection.get(
        e,
      )) == null
        ? void 0
        : t.linkToken;
    }
    function u(e) {
      s(e) != null &&
        (o(
          "WAWebSharableEventInviteeCollection",
        ).SharableEventInviteeCollection.removeEvents([e]),
        o("WAWebSharableEventCollection").SharableEventCollection.remove(e));
    }
    function c(e) {
      var t;
      (t = o("WAWebSharableEventCollection").SharableEventCollection.get(e)) ==
        null || t.set({ linkToken: null });
    }
    ((l.showSharableEventLinkPreview = e),
      (l.getSharableEventLinkToken = s),
      (l.dropSharableEventLinkPreview = u),
      (l.endSharableEventLinkPreview = c));
  },
  98,
);
