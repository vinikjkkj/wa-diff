__d(
  "WABizAIGDriveDocumentIcons",
  ["bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        "application/pdf": "pdf",
        "application/msword": "doc",
        "application/vnd.google-apps.document": "doc",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          "doc",
        "application/vnd.ms-excel": "xls",
        "application/vnd.google-apps.spreadsheet": "xls",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          "xls",
        "application/vnd.ms-powerpoint": "ppt",
        "application/vnd.google-apps.presentation": "ppt",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          "ppt",
      },
      u = {
        doc: { src: (e = r("bx")).getURL(e("88791")), label: null },
        pdf: { src: e.getURL(e("88794")), label: "PDF" },
        ppt: { src: e.getURL(e("88793")), label: null },
        xls: { src: e.getURL(e("88795")), label: null },
        other: { src: e.getURL(e("88792")), label: null },
      };
    function c(e) {
      var t = e.lastIndexOf(".");
      return t === -1 || t === e.length - 1
        ? null
        : e.slice(t + 1, t + 4).toUpperCase();
    }
    function d(e, t) {
      var n = s[e];
      if (n != null) {
        var r = u[n];
        return { src: r.src, label: r.label };
      }
      return { src: u.other.src, label: c(t) };
    }
    l.getDocumentIcon = d;
  },
  98,
);
