__d(
  "WAWebParseAiMediaCollectionMetadata",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.botMetadata) == null ||
          (t = t.aiMediaCollectionMetadata) == null
            ? void 0
            : t.collectionId;
      if (r != null) {
        var o =
          e == null ||
          (n = e.botMetadata) == null ||
          (n = n.aiMediaCollectionMetadata) == null
            ? void 0
            : n.uploadOrderIndex;
        return { collectionId: r, uploadOrderIndex: o != null ? o : void 0 };
      }
    }
    i.parseAiMediaCollectionMetadata = e;
  },
  66,
);
