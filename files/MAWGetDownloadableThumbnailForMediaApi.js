__d(
  "MAWGetDownloadableThumbnailForMediaApi",
  ["MAWOptimisticUploadManager", "WALogger", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = async function (n) {
        var t,
          r = o("MAWOptimisticUploadManager")
            .getOptimisticUploadManager()
            .get(n);
        if (r == null) return null;
        var a = r.previewPlaintextHash;
        if (a == null) return null;
        var i = o("MAWOptimisticUploadManager")
          .getOptimisticUploadManager()
          .get(a);
        if (i == null) return null;
        var l = await ((t = i.optimisticUploadPromise) == null
          ? void 0
          : t.catch(function (t) {
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "GetDownloadableThumbnail - previewEntry optimistedPromise rejected with ",
                      "",
                    ])),
                  t,
                ),
                o("WAResultOrError").makeError("runtime-error")
              );
            }));
        if (l == null || l.success !== !0) return null;
        var s = l.value,
          u = s.directPath,
          c = s.fileEncSha256,
          d = s.fileSha256,
          m = s.mediaKey,
          p = s.mediaKeyTimestamp,
          _ = s.objectId;
        return {
          directPath: u,
          fileEncSha256: c,
          fileSha256: d,
          mediaKey: m,
          mediaKeyTimestamp: p,
          objectId: _,
        };
      };
    l.getDownloadableThumbnailForMedia = s;
  },
  98,
);
