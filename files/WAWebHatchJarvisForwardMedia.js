__d(
  "WAWebHatchJarvisForwardMedia",
  [
    "Promise",
    "WABase64",
    "WAWebHatchJarvisForwardPolicy",
    "WAWebUnifiedResponseUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32,
      u = 1e3,
      c = new Map();
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          yield (e || (e = n("Promise"))).all(
            t.map(function (e) {
              return _(e.url);
            }),
          );
          var o = p(t, r);
          return o === "pending" ? null : o;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = new Map();
      for (var r of e) {
        var o = c.get(r.url);
        if (o == null) return "pending";
        var a = g(r, o, t != null ? t : []);
        if (a == null) return null;
        n.set(r.url, a);
      }
      return n;
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = c.get(e);
          if (t != null) return t;
          var n = yield o(
            "WAWebUnifiedResponseUtils",
          ).computeRichResponseMediaId(e);
          return (c.set(e, n), n);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      var r,
        a = n.filter(function (e) {
          return e.id === t;
        }),
        i = a.length === 1 ? a[0].previewMedia : null;
      return i == null ||
        !h(i) ||
        o("WAWebHatchJarvisForwardPolicy").hatchJarvisMediaFamily(
          i.mimetype,
        ) !== e.family ||
        !y(e.envelopeFilehash, i.fileSha256)
        ? null
        : {
            directPath: i.directPath,
            encFilehash: i.fileEncSha256,
            filehash: i.fileSha256,
            mediaKey: i.mediaKey,
            mediaKeyTimestamp: Math.floor(
              ((r = i.mediaKeyTimestamp) != null ? r : 0) / u,
            ),
            mediaType: e.family,
            mimetype: i.mimetype,
          };
    }
    function h(e) {
      var t;
      return (
        C(e.mediaKey) != null &&
        C(e.fileSha256) != null &&
        C(e.fileEncSha256) != null &&
        e.directPath.startsWith("/") &&
        ((t = e.mediaKeyTimestamp) != null ? t : 0) > 0
      );
    }
    function y(e, t) {
      if (e == null) return !0;
      var n = C(e),
        r = C(t);
      return (
        n != null &&
        r != null &&
        n.every(function (e, t) {
          return e === r[t];
        })
      );
    }
    function C(e) {
      var t;
      try {
        t = new Uint8Array(o("WABase64").decodeB64(e));
      } catch (e) {
        return null;
      }
      return t.length === s ? t : null;
    }
    ((l.resolveHatchJarvisForwardMedia = d),
      (l.resolveHatchJarvisForwardMediaSync = p),
      (l.decodeHash = C));
  },
  98,
);
