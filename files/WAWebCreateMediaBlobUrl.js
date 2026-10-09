__d(
  "WAWebCreateMediaBlobUrl",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = "application/octet-stream",
      s = new Set([e, "application/pdf", "text/plain"]),
      u = /^(?:image|video|audio)\/[a-z0-9._+-]+$/;
    function c(t) {
      return r("justknobx")._("6326")
        ? window.URL.createObjectURL(t)
        : window.URL.createObjectURL(d(t.type) ? t : t.slice(0, t.size, e));
    }
    function d(e) {
      if (e.includes(",")) return !1;
      var t = e.split(";")[0].trim().toLowerCase();
      return t.endsWith("/xml") || t.endsWith("+xml")
        ? !1
        : s.has(t) || u.test(t);
    }
    l.createMediaBlobUrl = c;
  },
  98,
);
