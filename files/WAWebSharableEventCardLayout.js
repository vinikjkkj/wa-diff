__d(
  "WAWebSharableEventCardLayout",
  [
    "WAWebSharableEventPeople",
    "WAWebSharableEventStrings",
    "WAWebSharableEventViewerState",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = 12,
      u = 56,
      c = 68,
      d = 16,
      m = 24,
      p = 20;
    function _(e) {
      return {
        hasHostLine: g(e.creatorLid),
        hasPlaceLine:
          o("WAWebSharableEventStrings").getSharableEventPlaceLine({
            callLinkMediaType: e.callLinkMediaType,
            callLinkToken: e.callLinkToken,
            locationName: e.locationName,
          }) != null,
      };
    }
    function f(t, n) {
      n === void 0 && (n = !1);
      var r =
          (n ? d : 0) +
          m +
          p +
          (t.hasHostLine ? p : 0) +
          (t.hasPlaceLine ? p : 0),
        o = n ? s : e,
        a = n ? c : u;
      return o + Math.max(a, r) + o;
    }
    function g(e) {
      return (
        e != null &&
        !o("WAWebSharableEventViewerState").isSharableEventHostedByViewer(e) &&
        o("WAWebSharableEventPeople").getSharableEventPersonName(e, null, !1) !=
          null
      );
    }
    ((l.getSharableEventCardContent = _), (l.getSharableEventCardHeight = f));
  },
  98,
);
