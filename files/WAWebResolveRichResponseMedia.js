__d(
  "WAWebResolveRichResponseMedia",
  ["Promise", "WAWebUnifiedResponseUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = new Map();
          if (t == null || r == null || r.length === 0) return a;
          var i = new Map();
          for (var l of r) i.set(l.id, l);
          var s = yield (e || (e = n("Promise"))).all(
            o("WAWebUnifiedResponseUtils")
              .getImaginePrimitives(t)
              .map(function (e) {
                return c(e, i);
              }),
          );
          for (var u of s) u != null && a.set(u.mediaUrl, u.download);
          return a;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = e.media.url;
          if (
            a == null ||
            a === "" ||
            o("WAWebUnifiedResponseUtils").isAnimateImagineType(e.imagine_type)
          )
            return null;
          var i = yield o(
              "WAWebUnifiedResponseUtils",
            ).computeRichResponseMediaId(a),
            l = (n = t.get(i)) == null ? void 0 : n.previewMedia;
          return l == null
            ? null
            : {
                mediaUrl: a,
                download: {
                  directPath: l.directPath,
                  mediaKey: l.mediaKey,
                  encFilehash: l.fileEncSha256,
                  filehash: l.fileSha256,
                  mimetype: (r = l.mimetype) != null ? r : e.media.mime_type,
                  mediaKeyTimestamp: l.mediaKeyTimestamp,
                },
              };
        })),
        d.apply(this, arguments)
      );
    }
    l.resolveRichResponseMediaDescriptors = s;
  },
  98,
);
