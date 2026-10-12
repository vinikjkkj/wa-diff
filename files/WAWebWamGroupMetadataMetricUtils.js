__d(
  "WAWebWamGroupMetadataMetricUtils",
  [
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e != null && e.isGroup()) {
            var t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if (t != null) return u(t);
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return o("WAWebGroupType").groupTypeToWamEnum(
        o("WAWebGroupMetadataGetters").getGroupType(e),
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return t == null ? null : m(t);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return (
        o("WAWebGroupMetadataGetters").getGroupType(e) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    ((l.getGroupTypeFromChatWid = e),
      (l.getGroupTypeFromGroupMetadata = u),
      (l.isCagFromChatWid = c),
      (l.isCagFromGroupMetadata = m));
  },
  98,
);
