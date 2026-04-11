__d(
  "WAWebUpdateLastCommunityPollTimestamp",
  ["WATimeUtils", "WAWebDBGroupsGroupMetadata", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e != null) {
            var t = o("WATimeUtils").unixTime();
            (yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e.id, {
              lastCommunityPollTimestamp: t,
            }),
              (e.lastCommunityPollTimestamp = t));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.updateLastCommunityPollTimestamp = e;
  },
  98,
);
