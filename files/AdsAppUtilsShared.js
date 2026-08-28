__d(
  "AdsAppUtilsShared",
  [
    "AdsAPIObjectives",
    "PHPQuerySerializer",
    "URI",
    "URIBase",
    "isCanvasAppURI",
    "isFacebookURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        isAppInstall: function (t) {
          return (
            t === r("AdsAPIObjectives").APP_INSTALLS ||
            t === r("AdsAPIObjectives").MOBILE_APP_INSTALLS ||
            t === r("AdsAPIObjectives").CANVAS_APP_INSTALLS
          );
        },
        isCanvasLink: function (t) {
          if (t == null) return !1;
          var e = c.safeParseURI(t);
          return !!e && r("isCanvasAppURI")(e);
        },
        isGameroomURL: function (t) {
          if (t == null) return !1;
          var e = c.safeParseURI(t);
          return (
            !!e &&
            r("isFacebookURI")(e) &&
            e.getPath() === "/gameroom_ad_target"
          );
        },
        isFacebookDesktopURL: function (t) {
          return t == null ? !1 : c.isCanvasLink(t) || c.isGameroomURL(t);
        },
        safeParseURI: function (t) {
          return typeof t == "string" ? c.tryParseURI(t) : t;
        },
        tryParseURI: function (n) {
          var t = (e || (e = r("URIBase"))).tryParse(
            n,
            s || (s = r("PHPQuerySerializer")),
          );
          return t ? new (u || (u = r("URI")))(t) : null;
        },
      };
    i.exports = c;
  },
  34,
);
