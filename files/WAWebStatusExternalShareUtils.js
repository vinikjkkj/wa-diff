__d(
  "WAWebStatusExternalShareUtils",
  [
    "fbt",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebStatusGatingUtils",
    "WDSIconWdsIcLogoAppleMusic.react",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSIconWdsIcLogoGooglePhotos.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSIconWdsIcLogoMessenger.react",
    "WDSIconWdsIcLogoPinterest.react",
    "WDSIconWdsIcLogoSpotify.react",
    "WDSIconWdsIcLogoThreads.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 14;
    function d(e) {
      switch (e) {
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.INSTAGRAM:
          return u.jsx(r("WDSIconWdsIcLogoInstagram.react"), {
            width: c,
            height: c,
          });
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.FACEBOOK:
          return u.jsx(r("WDSIconWdsIcLogoFacebook.react"), {
            width: c,
            height: c,
          });
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.MESSENGER:
          return u.jsx(r("WDSIconWdsIcLogoMessenger.react"), {
            width: c,
            height: c,
          });
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.SPOTIFY:
          return u.jsx(r("WDSIconWdsIcLogoSpotify.react"), {
            width: c,
            height: c,
          });
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.PINTEREST:
          return u.jsx(r("WDSIconWdsIcLogoPinterest.react"), {
            width: c,
            height: c,
          });
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.THREADS:
          return u.jsx(r("WDSIconWdsIcLogoThreads.react"), {
            width: c,
            height: c,
          });
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.APPLE_MUSIC:
          return u.jsx(r("WDSIconWdsIcLogoAppleMusic.react"), {
            width: c,
            height: c,
          });
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.GOOGLE_PHOTOS:
          return u.jsx(r("WDSIconWdsIcLogoGooglePhotos.react"), {
            width: c,
            height: c,
          });
        default:
          return null;
      }
    }
    function m(e) {
      var t = Math.floor(e / 60),
        n = e % 60;
      return t + ":" + n.toString().padStart(2, "0");
    }
    function p(e) {
      switch (e) {
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.INSTAGRAM:
          return s._(/*BTDS*/ "View on Instagram");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.FACEBOOK:
          return s._(/*BTDS*/ "View on Facebook");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.MESSENGER:
          return s._(/*BTDS*/ "View in Messenger");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.SPOTIFY:
          return s._(/*BTDS*/ "Open on Spotify");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.APPLE_MUSIC:
          return s._(/*BTDS*/ "Open on Apple Music");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.PINTEREST:
          return s._(/*BTDS*/ "View on Pinterest");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.THREADS:
          return s._(/*BTDS*/ "View on Threads");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.SHARECHAT:
          return s._(/*BTDS*/ "View on ShareChat");
        case o("WAWebProtobufsStatusAttributions.pb")
          .StatusAttribution$ExternalShare$Source.GOOGLE_PHOTOS:
          return s._(/*BTDS*/ "View on Google Photos");
        default:
          return null;
      }
    }
    function _(e) {
      if (
        !o("WAWebStatusGatingUtils").isStatusCrosspostingAttributionsEnabled()
      )
        return null;
      var t = e.statusAttributions;
      if (t == null) return null;
      for (var n of t) {
        var r = n.externalShare;
        if (r != null) {
          var a,
            i = r.source;
          if (i == null) continue;
          var l = p(i);
          if (l == null) continue;
          var s = (a = r.actionUrl) != null ? a : n.actionUrl;
          if (s != null && s.length > 0)
            return {
              url: s,
              displayText: l,
              source: i,
              durationInSeconds: r.duration,
            };
        }
      }
      return null;
    }
    ((l.getExternalShareIcon = d),
      (l.formatDuration = m),
      (l.getExternalShareInfo = _));
  },
  226,
);
