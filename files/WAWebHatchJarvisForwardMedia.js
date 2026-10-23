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
      u = 1e3;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var o = yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                return m(e, r != null ? r : []);
              }),
            ),
            a = new Map();
          for (var i of t.entries()) {
            var l = i[0],
              s = i[1],
              u = o[l];
            if (u == null) return null;
            a.set(s.url, u);
          }
          return a;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebUnifiedResponseUtils").computeRichResponseMediaId(
              e.url,
            ),
            a = t.filter(function (e) {
              return e.id === r;
            }),
            i = a.length === 1 ? a[0].previewMedia : null;
          return i == null ||
            !_(i) ||
            o("WAWebHatchJarvisForwardPolicy").hatchJarvisMediaFamily(
              i.mimetype,
            ) !== e.family ||
            !f(e.envelopeFilehash, i.fileSha256)
            ? null
            : {
                directPath: i.directPath,
                encFilehash: i.fileEncSha256,
                filehash: i.fileSha256,
                mediaKey: i.mediaKey,
                mediaKeyTimestamp: Math.floor(
                  ((n = i.mediaKeyTimestamp) != null ? n : 0) / u,
                ),
                mediaType: e.family,
                mimetype: i.mimetype,
              };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t;
      return (
        g(e.mediaKey) != null &&
        g(e.fileSha256) != null &&
        g(e.fileEncSha256) != null &&
        e.directPath.startsWith("/") &&
        ((t = e.mediaKeyTimestamp) != null ? t : 0) > 0
      );
    }
    function f(e, t) {
      if (e == null) return !0;
      var n = g(e),
        r = g(t);
      return (
        n != null &&
        r != null &&
        n.every(function (e, t) {
          return e === r[t];
        })
      );
    }
    function g(e) {
      var t;
      try {
        t = new Uint8Array(o("WABase64").decodeB64(e));
      } catch (e) {
        return null;
      }
      return t.length === s ? t : null;
    }
    l.resolveHatchJarvisForwardMedia = c;
  },
  98,
);
