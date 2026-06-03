__d(
  "WAWebUpdateCommunityLastSeenTimestampAction",
  ["WATimeUtils", "WAWebDBGroupsGroupMetadata", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime();
          (yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e.id, {
            lastSeenActivityTimestamp: t,
          }),
            (e.lastSeenActivityTimestamp = t));
        })),
        s.apply(this, arguments)
      );
    }
    l.updateLastSeenTimestamp = e;
  },
  98,
);
