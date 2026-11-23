__d(
  "AdsCreativeFlexPushUploadEndedUtils",
  [
    "AdsCreativeFlexPushUploadEndedLoggingUtils",
    "AdsDataAtom",
    "AdsUEditorAdgroupSetPushMetadataIdsAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.flatMap(function (e) {
        return e.savedPushMetadataToClear;
      });
      if (n.length !== 0) {
        var o = Array.from(
            new Set(
              n.flatMap(function (e) {
                return e.adgroupIDs;
              }),
            ),
          ),
          a = Array.from(
            new Set(
              n.flatMap(function (e) {
                return e.pushMetadataIDs;
              }),
            ),
          );
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("AdsUEditorAdgroupSetPushMetadataIdsAction").dispatch(
            { adgroupIDs: o, hostID: null, pushMetadataIds: a, remove: !0 },
            {
              line: "44",
              module: "AdsCreativeFlexPushUploadEndedUtils.js",
              moduleID: i.id,
            },
          );
        });
      }
    }
    function u(e, t, n) {
      for (var r of e)
        o(
          "AdsCreativeFlexPushUploadEndedLoggingUtils",
        ).logPushModelUploadEndedBeforeEncoding(r, t, n);
      s(e);
    }
    ((l.clearPushMetadataSavedForEndedUploads = s),
      (l.handlePushUploadsEnded = u));
  },
  98,
);
