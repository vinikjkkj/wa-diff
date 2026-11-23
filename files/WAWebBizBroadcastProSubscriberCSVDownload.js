__d(
  "WAWebBizBroadcastProSubscriberCSVDownload",
  [
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebFilenameManager",
    "err",
    "fbs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWebFileSaverTypes").AllowedFileExtensions.CSV.valueOf(),
      s = e.toLowerCase(),
      u = /^[\s.]+|[\s.]+$/g,
      c = /^(con|prn|aux|nul|conin\$|conout\$|com[0-9¹²³]|lpt[0-9¹²³])$/i,
      d = ["text/html", "application/json"],
      m = "Subscriber CSV response rejected",
      p = "Subscribed recipients",
      _ = 65535,
      f = 1024,
      g = 6e4,
      h = 3e5,
      y = o("WAWebFilenameManager").MAX_FILENAME_LENGTH - e.length;
    async function C(e, t) {
      var n = new AbortController(),
        a = window.setTimeout(function () {
          n.abort();
        }, g);
      try {
        var i = await window.fetch(e, { signal: n.signal });
        if (!i.ok)
          throw (
            v(i),
            r("err")("Subscriber CSV fetch failed with status " + i.status)
          );
        var l = i.headers.get("content-type");
        if (b(l))
          throw (v(i), r("err")("Subscriber CSV fetch returned " + String(l)));
        (window.clearTimeout(a),
          (a = window.setTimeout(function () {
            n.abort();
          }, h)));
        var s = await i.blob();
        (window.clearTimeout(a),
          await o("WAWebFileSaver").FileSaver.downloadData(
            s,
            S(t),
            o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
          ));
      } finally {
        window.clearTimeout(a);
      }
    }
    function b(e) {
      if (e == null) return !1;
      var t = e.toLowerCase();
      return d.some(function (e) {
        return t.startsWith(e);
      });
    }
    function v(e) {
      var t = e.body;
      if (t != null) {
        var n = t.cancel(m);
        n instanceof Promise && n.catch(function () {});
      }
    }
    function S(e) {
      var t, n;
      return (t = (n = R(e)) != null ? n : R(L())) != null ? t : p;
    }
    function R(e) {
      if (e == null) return null;
      var t = E(o("WAWebFilenameManager").sanitizeFileName(e));
      return t === "" || $(t) ? null : t;
    }
    function L() {
      return r("fbs")._(/*BTDS*/ "").toString();
    }
    function E(e) {
      var t = k(I(e, f));
      return k(I(t, y));
    }
    function k(e) {
      for (var t = e, n = ""; t !== n; ) ((n = t), (t = x(T(t))));
      return t;
    }
    function I(e, t) {
      if (e.length <= t) return e;
      for (var n = 0; n < t; ) {
        var r = e.codePointAt(n),
          o = r != null && r > _ ? 2 : 1;
        if (n + o > t) break;
        n += o;
      }
      return e.slice(0, n);
    }
    function T(e) {
      for (var t = e.trim(); D(t); ) t = t.slice(0, -s.length).trim();
      return t;
    }
    function D(e) {
      return e.slice(-s.length).toLowerCase() === s;
    }
    function x(e) {
      return e.replace(u, "");
    }
    function $(e) {
      return c.test(e.split(".")[0].trim());
    }
    ((l.CSV_FETCH_TIMEOUT_MS = g),
      (l.CSV_BODY_TIMEOUT_MS = h),
      (l.MAX_DOWNLOAD_NAME_LENGTH = y),
      (l.saveSubscriberCSV = C));
  },
  226,
);
