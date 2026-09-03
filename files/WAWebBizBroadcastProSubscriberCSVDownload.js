__d(
  "WAWebBizBroadcastProSubscriberCSVDownload",
  [
    "Promise",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebFilenameManager",
    "asyncToGeneratorRuntime",
    "err",
    "fbs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WAWebFileSaverTypes").AllowedFileExtensions.CSV.valueOf(),
      u = s.toLowerCase(),
      c = /^[\s.]+|[\s.]+$/g,
      d = /^(con|prn|aux|nul|conin\$|conout\$|com[0-9¹²³]|lpt[0-9¹²³])$/i,
      m = ["text/html", "application/json"],
      p = "Subscriber CSV response rejected",
      _ = "Subscribed recipients",
      f = 65535,
      g = 1024,
      h = 6e4,
      y = 3e5,
      C = o("WAWebFilenameManager").MAX_FILENAME_LENGTH - s.length;
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new AbortController(),
            a = window.setTimeout(function () {
              n.abort();
            }, h);
          try {
            var i = yield window.fetch(e, { signal: n.signal });
            if (!i.ok)
              throw (
                R(i),
                r("err")("Subscriber CSV fetch failed with status " + i.status)
              );
            var l = i.headers.get("content-type");
            if (S(l))
              throw (
                R(i),
                r("err")("Subscriber CSV fetch returned " + String(l))
              );
            (window.clearTimeout(a),
              (a = window.setTimeout(function () {
                n.abort();
              }, y)));
            var s = yield i.blob();
            (window.clearTimeout(a),
              yield o("WAWebFileSaver").FileSaver.downloadData(
                s,
                L(t),
                o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
              ));
          } finally {
            window.clearTimeout(a);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      if (e == null) return !1;
      var t = e.toLowerCase();
      return m.some(function (e) {
        return t.startsWith(e);
      });
    }
    function R(t) {
      var r = t.body;
      if (r != null) {
        var o = r.cancel(p);
        o instanceof (e || (e = n("Promise"))) && o.catch(function () {});
      }
    }
    function L(e) {
      var t, n;
      return (t = (n = E(e)) != null ? n : E(k())) != null ? t : _;
    }
    function E(e) {
      if (e == null) return null;
      var t = I(o("WAWebFilenameManager").sanitizeFileName(e));
      return t === "" || N(t) ? null : t;
    }
    function k() {
      return r("fbs")._(/*BTDS*/ "Subscribed recipients").toString();
    }
    function I(e) {
      var t = T(D(e, g));
      return T(D(t, C));
    }
    function T(e) {
      for (var t = e, n = ""; t !== n; ) ((n = t), (t = P(x(t))));
      return t;
    }
    function D(e, t) {
      if (e.length <= t) return e;
      for (var n = 0; n < t; ) {
        var r = e.codePointAt(n),
          o = r != null && r > f ? 2 : 1;
        if (n + o > t) break;
        n += o;
      }
      return e.slice(0, n);
    }
    function x(e) {
      for (var t = e.trim(); $(t); ) t = t.slice(0, -u.length).trim();
      return t;
    }
    function $(e) {
      return e.slice(-u.length).toLowerCase() === u;
    }
    function P(e) {
      return e.replace(c, "");
    }
    function N(e) {
      return d.test(e.split(".")[0].trim());
    }
    ((l.CSV_FETCH_TIMEOUT_MS = h),
      (l.CSV_BODY_TIMEOUT_MS = y),
      (l.MAX_DOWNLOAD_NAME_LENGTH = C),
      (l.saveSubscriberCSV = b));
  },
  226,
);
