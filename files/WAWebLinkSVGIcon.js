__d(
  "WAWebLinkSVGIcon",
  [
    "WAWebGcalLogoIcon.react",
    "WAWebGdriveLogoIcon.react",
    "WAWebGformsLogoIcon.react",
    "WAWebGmeetLogoIcon.react",
    "WAWebGphotosLogoIcon.react",
    "WAWebJiraLogoIcon.react",
    "WAWebLinkIconUtils",
    "WAWebOnedriveLogoIcon.react",
    "WAWebSlackLogoIcon.react",
    "WAWebWorkplaceLogoIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        "docs.google.com": {
          forms: s.jsx(o("WAWebGformsLogoIcon.react").GformsLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "calendar.google.com": {
          default: s.jsx(o("WAWebGcalLogoIcon.react").GcalLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "drive.google.com": {
          default: s.jsx(o("WAWebGdriveLogoIcon.react").GdriveLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "forms.google.com": {
          default: s.jsx(o("WAWebGformsLogoIcon.react").GformsLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "forms.gle": {
          default: s.jsx(o("WAWebGformsLogoIcon.react").GformsLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "meet.google.com": {
          default: s.jsx(o("WAWebGmeetLogoIcon.react").GmeetLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "photos.google.com": {
          default: s.jsx(o("WAWebGphotosLogoIcon.react").GphotosLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "atlassian.net": {
          default: s.jsx(o("WAWebJiraLogoIcon.react").JiraLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "onedrive.com": {
          default: s.jsx(o("WAWebOnedriveLogoIcon.react").OnedriveLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "onedrive.live.com": {
          default: s.jsx(o("WAWebOnedriveLogoIcon.react").OnedriveLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "workplace.com": {
          default: s.jsx(o("WAWebWorkplaceLogoIcon.react").WorkplaceLogoIcon, {
            height: 20,
            width: 20,
          }),
        },
        "slack.com": {
          default: s.jsx(o("WAWebSlackLogoIcon.react").SlackLogoIcon, {
            viewBox: { width: 127, height: 127, x: 0, y: 0 },
            height: 20,
            width: 20,
          }),
        },
      };
    function c(e, t) {
      return o("WAWebLinkIconUtils").getIconFromHostnameMap(e, t, u);
    }
    function d(e) {
      return e == null ? null : c(e.domain, e.path);
    }
    ((l.HOSTNAME_FAVICON_MAP_SVG = u), (l.getSupportedFaviconSvg = d));
  },
  98,
);
