__d(
  "WAWebSharableEventCardLayout",
  [
    "WAWebSharableEventPeople",
    "WAWebSharableEventStrings",
    "WAWebSharableEventViewerState",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = 56,
      u = 16,
      c = 24,
      d = 20;
    function m(e) {
      return {
        hasHostLine: _(e.creatorLid),
        hasPlaceLine:
          o("WAWebSharableEventStrings").getSharableEventPlaceLine({
            callLinkMediaType: e.callLinkMediaType,
            callLinkToken: e.callLinkToken,
            locationName: e.locationName,
          }) != null,
      };
    }
    function p(t, n) {
      n === void 0 && (n = !1);
      var r =
        (n ? u : 0) +
        c +
        d +
        (t.hasHostLine ? d : 0) +
        (t.hasPlaceLine ? d : 0);
      return e + Math.max(s, r) + e;
    }
    function _(e) {
      return (
        e != null &&
        !o("WAWebSharableEventViewerState").isSharableEventHostedByViewer(e) &&
        o("WAWebSharableEventPeople").getSharableEventPersonName(e, null, !1) !=
          null
      );
    }
    ((l.getSharableEventCardContent = m), (l.getSharableEventCardHeight = p));
  },
  98,
);
