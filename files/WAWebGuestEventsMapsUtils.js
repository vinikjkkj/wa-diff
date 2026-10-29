__d(
  "WAWebGuestEventsMapsUtils",
  ["WAWebGuestCoreConsts"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.address,
        r = e.lat,
        a = e.long,
        i = null;
      return (
        r != null && a != null
          ? (i = r + "," + a)
          : n != null && n !== "" && (i = encodeURIComponent(n)),
        i == null
          ? null
          : t === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP ||
              t === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER
            ? "https://maps.apple.com/?daddr=" + i + "&dirflg=d"
            : t ===
                  o("WAWebGuestCoreConsts").GuestMobilePlatform
                    .ANDROID_BROWSER ||
                t === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN
              ? "https://www.google.com/maps/dir/?api=1&destination=" + i
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })()
      );
    }
    function s(e) {
      var t = c(e);
      return t != null ? "https://maps.apple.com/?q=" + t : null;
    }
    function u(e) {
      var t = c(e);
      return t != null
        ? "https://www.google.com/maps/search/?api=1&query=" + t
        : null;
    }
    function c(e) {
      var t = e.address,
        n = e.lat,
        r = e.long;
      return n != null && r != null
        ? n + "," + r
        : t != null && t !== ""
          ? encodeURIComponent(t)
          : null;
    }
    function d(t, n) {
      var r;
      return t.eventType === "partial"
        ? t.region
        : t.lat != null && t.long != null
          ? e({ lat: t.lat, long: t.long, address: t.address }, n)
          : (r = t.address) != null
            ? r
            : t.name;
    }
    ((l.getEventMapsDirectionsUrl = e),
      (l.getAppleMapsSearchUrl = s),
      (l.getGoogleMapsSearchUrl = u),
      (l.getGuestEventCalendarLocation = d));
  },
  98,
);
