__d(
  "WAWebWamGroupMetadataMetricUtils",
  ["WAWebDBGroupsGroupMetadata", "WAWebGroupType", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e != null && e.isGroup()) {
            var t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if (t != null)
              return o("WAWebGroupType").groupTypeToWamEnum(
                o("WAWebGroupType").getGroupTypeFromGroupMetadata(t),
              );
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return t == null ? null : d(t);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return (
        o("WAWebGroupType").getGroupTypeFromGroupMetadata(e) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    ((l.getGroupTypeFromChatWid = e),
      (l.isCagFromChatWid = u),
      (l.isCagFromGroupMetadata = d));
  },
  98,
);
