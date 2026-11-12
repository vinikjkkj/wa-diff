__d(
  "WAWebBizAdCreationDownloadDraftMedia",
  [
    "FBLogger",
    "Promise",
    "WAWebBizAdCreationFetchMediaFile",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = [].concat(t).sort(function (e, t) {
              var n, r;
              return (
                ((n = e.index) != null ? n : 0) -
                ((r = t.index) != null ? r : 0)
              );
            }),
            o = yield (e || (e = n("Promise"))).all(r.map(c)),
            a = [];
          for (var i of o) i != null && a.push(i);
          return { files: a, missingCount: r.length - a.length };
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      var a,
        i,
        l,
        s = (a = t.media) == null ? void 0 : a.url;
      if (s == null) return (e || (e = n("Promise"))).resolve(null);
      var u =
        ((i = t.media) == null ? void 0 : i.type) === "video" ? "mp4" : "jpg";
      return o("WAWebBizAdCreationFetchMediaFile")
        .fetchMediaFile(
          s,
          "draft-media-" + ((l = t.index) != null ? l : 0) + "." + u,
          "Draft media restore",
        )
        .catch(function (e) {
          return (
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .info("Draft media restore: card download failed"),
            null
          );
        });
    }
    l.downloadDraftMedia = s;
  },
  98,
);
