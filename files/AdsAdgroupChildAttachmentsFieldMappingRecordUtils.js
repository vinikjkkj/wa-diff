__d(
  "AdsAdgroupChildAttachmentsFieldMappingRecordUtils",
  ["AdsAdgroupChildAttachmentsFieldMappingRecord", "whitelistObjectKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return new (r("AdsAdgroupChildAttachmentsFieldMappingRecord"))(
        r("whitelistObjectKeys")(
          e.toJS(),
          t.map(function (e) {
            return e.name;
          }),
        ),
      );
    }
    l.selectFields = e;
  },
  98,
);
