__d(
  "WAWebLinkIconBackground",
  ["WAWebLinkIconUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        washPlain: { backgroundColor: "x1c7u0tx", $$css: !0 },
        doc: { backgroundColor: "xym4luz", $$css: !0 },
        sheets: { backgroundColor: "xqg95i3", $$css: !0 },
        presentation: { backgroundColor: "x4d3jff", $$css: !0 },
        forms: { backgroundColor: "x1s5fmi9", $$css: !0 },
        office: { backgroundColor: "xym4luz", $$css: !0 },
        sharepoint: { backgroundColor: "x1rgooag", $$css: !0 },
        teams: { backgroundColor: "x1s5fmi9", $$css: !0 },
        jira: { backgroundColor: "xym4luz", $$css: !0 },
        oneDrive: { backgroundColor: "x19e70r4", $$css: !0 },
      },
      s = {
        "docs.google.com": {
          document: e.doc,
          spreadsheets: e.sheets,
          presentation: e.presentation,
          forms: e.forms,
        },
        "calendar.google.com": { default: e.washPlain },
        "slack.com": { default: e.washPlain },
        "drive.google.com": { default: e.washPlain },
        "forms.google.com": { default: e.forms },
        "forms.gle": { default: e.forms },
        "meet.google.com": { default: e.washPlain },
        "photos.google.com": { default: e.washPlain },
        "slides.google.com": { default: e.presentation },
        "sheets.google.com": { default: e.sheets },
        "google.com": { default: e.washPlain },
        "notion.com": { default: e.washPlain },
        "notion.so": { default: e.washPlain },
        "notion.site": { default: e.washPlain },
        "office.com": { default: e.office },
        "sharepoint.com": { default: e.sharepoint },
        "teams.live.com": { default: e.teams },
        "teams.microsoft.com": { default: e.teams },
        "atlassian.net": { default: e.jira },
        "onedrive.com": { default: e.oneDrive },
        "onedrive.live.com": { default: e.oneDrive },
        "workplace.com": { default: e.washPlain },
      };
    function u(e, t) {
      return o("WAWebLinkIconUtils").getIconFromHostnameMap(e, t, s);
    }
    function c(e) {
      return e == null ? null : u(e.domain, e.path);
    }
    l.getSupportedFaviconBackgroundColor = c;
  },
  98,
);
