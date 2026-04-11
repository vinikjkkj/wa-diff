__d(
  "WAWebLinkPngIcon",
  ["WAWebLinkIconUtils", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        "docs.google.com": {
          document: (e = r("bx"))("76917"),
          spreadsheets: e("77674"),
          presentation: e("77675"),
          forms: null,
          default: e("76917"),
        },
        "calendar.google.com": { default: null },
        "drive.google.com": { default: null },
        "forms.google.com": { default: null },
        "meet.google.com": { default: null },
        "photos.google.com": { default: null },
        "slides.google.com": { default: e("77675") },
        "sheets.google.com": { default: e("77674") },
        "google.com": { default: e("77673") },
        "notion.com": { default: e("77676") },
        "notion.so": { default: e("77676") },
        "notion.site": { default: e("77676") },
        "office.com": { default: e("77677") },
        "sharepoint.com": { default: e("77678") },
        "teams.live.com": { default: e("77679") },
        "teams.microsoft.com": { default: e("77679") },
      };
    function u(e, t) {
      return o("WAWebLinkIconUtils").getIconFromHostnameMap(e, t, s);
    }
    function c(e) {
      if (e == null) return null;
      var t = u(e.domain, e.path);
      return t != null ? r("bx").getURL(t) : null;
    }
    ((l.HOSTNAME_FAVICON_MAP = s), (l.getSupportedFavicon = c));
  },
  98,
);
