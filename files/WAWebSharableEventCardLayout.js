__d(
  "WAWebSharableEventCardLayout",
  [
    "WAWebSharableEventPeople",
    "WAWebSharableEventStrings",
    "WAWebSharableEventViewerState",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = 24,
      u = 20,
      c = 16 / 9;
    function d(e) {
      return {
        hasCover: e.coverImageUrl != null && e.coverImageUrl !== "",
        hasHostLine: _(e.creatorLid),
        hasPlaceLine:
          o("WAWebSharableEventStrings").getSharableEventPlaceLine({
            callLinkMediaType: e.callLinkMediaType,
            callLinkToken: e.callLinkToken,
            locationName: e.locationName,
          }) != null,
      };
    }
    function m(e) {
      return Math.round(Math.max(0, e) / c);
    }
    function p(t, n) {
      var r = s + u + (t.hasHostLine ? u : 0) + (t.hasPlaceLine ? u : 0);
      return (t.hasCover ? n : 0) + 2 * e + r;
    }
    function _(e) {
      return (
        e != null &&
        !o("WAWebSharableEventViewerState").isSharableEventHostedByViewer(e) &&
        o("WAWebSharableEventPeople").getSharableEventPersonName(e, null, !1) !=
          null
      );
    }
    ((l.getSharableEventCardContent = d),
      (l.getSharableEventCardCoverHeight = m),
      (l.getSharableEventCardHeight = p));
  },
  98,
);
