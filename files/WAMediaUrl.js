__d(
  "WAMediaUrl",
  ["WABase64", "WAGlobals", "WAHttpUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1;
    function s(t, n, r, a, i, l, s) {
      var u = o("WAGlobals").getDependencies().mediaUploadRoot(),
        c = o("WABase64").encodeB64UrlSafe(r),
        d = o("WABase64").encodeB64UrlSafe(n),
        m = { auth: i, token: d };
      return (
        l && (m.resume = e),
        s != null && s > 0 && (m.bytestart = s),
        o("WAHttpUtils").buildUrl("https://" + a, u + "/" + t + "/" + c, m)
      );
    }
    function u(e, t, n, r, a, i, l) {
      var s = o("WABase64").encodeB64UrlSafe(t),
        u = { hash: s, mode: r };
      return (
        a != null && (u._nc_cat = a),
        i != null && i >= 0 && (u.bytestart = i),
        l != null && l > 0 && (u.byteend = l),
        o("WAHttpUtils").buildUrl("https://" + n, e, u)
      );
    }
    ((l.RESUME_PARAM = e), (l.buildUploadUrl = s), (l.buildDownloadUrl = u));
  },
  98,
);
