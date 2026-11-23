__d(
  "AdsAutoMediaDownload",
  ["getSafeHref"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 150;
    function s(e, t) {
      var n = (e != null ? e : "")
          .trim()
          .replace(/[^\w-]+/g, "_")
          .replace(/^_+|_+$/g, ""),
        r = n !== "" ? n : "creative";
      return t === "video" ? r + ".mp4" : r + ".jpg";
    }
    function u(e, t) {
      var n = document,
        o = n.body;
      if (!(o == null || e == null || e === "")) {
        var a = document.createElement("a");
        ((a.href = r("getSafeHref")(e)),
          (a.download = t != null ? t : ""),
          (a.rel = "noopener"),
          o.appendChild(a));
        try {
          a.click();
        } finally {
          a.remove();
        }
      }
    }
    function c(t, n) {
      t.forEach(function (t, r) {
        window.setTimeout(function () {
          return u(t, n == null ? void 0 : n[r]);
        }, r * e);
      });
    }
    ((l.creativeDownloadFilename = s),
      (l.downloadUrl = u),
      (l.downloadUrls = c));
  },
  98,
);
