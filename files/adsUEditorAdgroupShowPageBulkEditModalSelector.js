__d(
  "adsUEditorAdgroupShowPageBulkEditModalSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative.branded_content.ui_version
                .get,
            ),
            null,
          ),
        ],
        function (t) {
          var e = t !== 1;
          return e;
        },
        { name: i.id },
      ),
      s = e;
    l.default = s;
  },
  98,
);
