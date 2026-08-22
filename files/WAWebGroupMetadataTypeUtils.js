__d(
  "WAWebGroupMetadataTypeUtils",
  [
    "WAWebGroupMetadataGetters",
    "WAWebUnjoinedSubgroupMetadataGetters",
    "WAWebUnjoinedSubgroupMetadataModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e != null
        ? o("WAWebGroupMetadataGetters").getGroupType(e)
        : void 0;
    }
    function s(e) {
      return e instanceof r("WAWebUnjoinedSubgroupMetadataModel")
        ? o("WAWebUnjoinedSubgroupMetadataGetters").getGroupType(e)
        : o("WAWebGroupMetadataGetters").getGroupType(e);
    }
    ((l.getMaybeGroupType = e), (l.getGroupTypeForMetadata = s));
  },
  98,
);
