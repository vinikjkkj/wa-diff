__d(
  "WAWebSharableEventCardLayout",
  [
    "WAWebSharableEventPeople",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventStrings",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 8,
      u = 24,
      c = 20,
      d = 9 / 16;
    function m(e) {
      return {
        hasCover: e.coverImageUrl != null && e.coverImageUrl !== "",
        hasHostLine: f(e.creatorLid),
        hasPlaceLine:
          e.status ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
              .Suspended ||
          o("WAWebSharableEventStrings").getSharableEventPlaceLine({
            callLinkMediaType: e.callLinkMediaType,
            callLinkToken: e.callLinkToken,
            locationName: e.locationName,
          }) != null,
      };
    }
    function p(t, n) {
      var r = t.hasCover ? Math.round(n * d) : 0,
        o = u + (t.hasHostLine ? c : 0) + c + (t.hasPlaceLine ? c : 0);
      return e + r + s + o + s;
    }
    function _(e) {
      return e != null && o("WAWebUserPrefsMeUser").isMeAccount(e);
    }
    function f(e) {
      return (
        e != null &&
        !_(e) &&
        o("WAWebSharableEventPeople").getSharableEventPersonName(e, null, !1) !=
          null
      );
    }
    ((l.getSharableEventCardContent = m),
      (l.getSharableEventCardHeight = p),
      (l.isSharableEventHostedByViewer = _));
  },
  98,
);
