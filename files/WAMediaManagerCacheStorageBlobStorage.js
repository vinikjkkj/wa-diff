__d(
  "WAMediaManagerCacheStorageBlobStorage",
  ["CacheBlobStorageApi", "MAWHMACPlaintextHash", "MAWIndexedDbMetadata"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("MAWHMACPlaintextHash").genHMACPlaintextHash(e);
    }
    var s = new Map();
    function u(e) {
      var t = s.get(e);
      return (
        t == null &&
          ((t = o("CacheBlobStorageApi").createCacheBlobStorageApi(
            o("MAWIndexedDbMetadata").mediaStorageCacheName(e),
          )),
          s.set(e, t)),
        t
      );
    }
    function c(t) {
      var n = u(t);
      return {
        deleteBlobByPlaintextHash: function (r) {
          return n.delete(e(r));
        },
        getBlobByPlaintextHash: function (r) {
          return n.read(e(r));
        },
        writeBlobByPlaintextHash: function (r, o) {
          return n.write(e(r), o, "fullsize");
        },
        writePreviewBlobByPlaintextHash: function (r, o) {
          return n.writeIfNotExist(e(r), o, "progressive-preview");
        },
      };
    }
    function d(t, n) {
      return u(t)
        .readKind(e(n))
        .catch(function () {
          return null;
        });
    }
    ((l.createCacheStorageMediaBlobStorage = c), (l.getStoredMediaKind = d));
  },
  98,
);
