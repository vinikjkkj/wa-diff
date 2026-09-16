__d(
  "WAWebMediaLocalAvailability",
  ["WAWebMediaInMemoryBlobCache", "WAWebMediaOpaqueData"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.mediaData == null) return !1;
      var t = e.mediaData,
        n = t.filehash,
        a = t.mediaBlob;
      return a instanceof r("WAWebMediaOpaqueData")
        ? !0
        : n == null
          ? !1
          : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(n) !=
            null;
    }
    l.isMsgMediaAvailableLocally = e;
  },
  98,
);
