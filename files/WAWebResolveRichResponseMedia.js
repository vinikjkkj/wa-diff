__d(
  "WAWebResolveRichResponseMedia",
  ["WAWebUnifiedResponseUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = new Map();
      if (e == null || t == null || t.length === 0) return n;
      var r = new Map();
      for (var a of t) r.set(a.id, a);
      var i = await Promise.all(
        o("WAWebUnifiedResponseUtils")
          .getImaginePrimitives(e)
          .map(function (e) {
            return s(e, r);
          }),
      );
      for (var l of i) l != null && n.set(l.mediaUrl, l.download);
      return n;
    }
    async function s(e, t) {
      var n,
        r,
        a = e.media.url;
      if (
        a == null ||
        a === "" ||
        o("WAWebUnifiedResponseUtils").isAnimateImagineType(e.imagine_type)
      )
        return null;
      var i = await o("WAWebUnifiedResponseUtils").computeRichResponseMediaId(
          a,
        ),
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
    }
    l.resolveRichResponseMediaDescriptors = e;
  },
  98,
);
