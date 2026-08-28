__d(
  "processNewMediaAttachments",
  [
    "FBLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "cometIsMimeTypeForMedia",
    "cometUniqueID",
    "extractMediaLocationData",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return (e != null ? e : [])
        .map(function (e) {
          if (e == null) return null;
          var n = e.uploadID,
            r = n != null && t != null ? t[n] : void 0;
          return u(e, r);
        })
        .filter(Boolean);
    }
    function u(e, t) {
      var n,
        a = (n = e.uploadID) != null ? n : r("cometUniqueID")();
      e.uploadID = a;
      var i = URL.createObjectURL(e);
      if (o("cometIsMimeTypeForMedia").isMimeTypeForPhoto(e.type)) {
        var l =
          (t == null ? void 0 : t.type) === "PHOTO"
            ? t == null
              ? void 0
              : t.data
            : void 0;
        return babelHelpers.extends(
          {
            data: { id: a },
            file: e,
            fileObjectURL: i,
            fileType: "PHOTO",
            state: "NEW",
          },
          l,
        );
      } else if (o("cometIsMimeTypeForMedia").isMimeTypeForVideo(e.type)) {
        var s =
          (t == null ? void 0 : t.type) === "VIDEO"
            ? t == null
              ? void 0
              : t.data
            : void 0;
        return babelHelpers.extends(
          {
            data: { id: a },
            file: e,
            fileMimeType: e.type,
            fileObjectURL: i,
            fileType: "VIDEO",
            state: "NEW",
          },
          s,
        );
      } else
        return {
          data: { id: a },
          file: e,
          fileObjectURL: i,
          fileType: "UNKNOWN",
          state: "NEW",
        };
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = new Map(),
            i = t.filter(function (e) {
              return o("cometIsMimeTypeForMedia").isMimeTypeForPhoto(e.type);
            });
          if (i.length === 0) return a;
          var l = 3,
            s = i.slice(0, l),
            u = s.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var t = yield o(
                          "extractMediaLocationData",
                        ).extractMediaLocationData(e),
                        n = e.uploadID;
                      t != null && n != null && a.set(n, t);
                    } catch (e) {
                      var i = r("getErrorSafe")(e);
                      r("FBLogger")("comet_composer")
                        .catching(i)
                        .warn(
                          "Failed to extract GPS location data from photo during batch processing",
                        );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return (yield (e || (e = n("Promise"))).all(u), a);
        })),
        d.apply(this, arguments)
      );
    }
    ((l.processNewMediaAttachments = s),
      (l.getNewMediaAttachment = u),
      (l.extractLocationDataForPhotos = c));
  },
  98,
);
