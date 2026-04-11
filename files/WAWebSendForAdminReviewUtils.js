__d(
  "WAWebSendForAdminReviewUtils",
  ["WAWebDBGroupsGroupMetadata"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebDBGroupsGroupMetadata")
        .persistGroupMetadata(e.id, { lastReportToAdminTimestamp: null })
        .then(function () {
          var t;
          (t = e.groupMetadata) == null ||
            t.set("lastReportToAdminTimestamp", null);
        });
    }
    l.clearLastReportTimestamp = e;
  },
  98,
);
