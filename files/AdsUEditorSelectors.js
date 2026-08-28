__d(
  "AdsUEditorSelectors",
  [
    "codedError",
    "AdsBulkValueUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorSelectorUtils",
    "Result",
    "adsCreateSelector",
    "adsEnforcePureGetStores",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupSelectedChildAttachmentIndexSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUEditorSelectedAdgroupsSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignGroupsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "adsUEditorSelectedCampaignsSelector",
    "memoizeByReference",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e = r("memoizeByReference"))(function (e, t) {
        return r("adsEnforcePureGetStores")(
          r("adsCreateSelector")(
            [r("adsUEditorSelectedCampaignGroupsSelector")],
            o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (t) {
              return t.map(e);
            }, t),
            i.id,
          ),
        );
      }),
      c = function (t, n) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              return t(e);
            });
          }, n),
          { name: i.id },
        );
      },
      d = e(c),
      m = e(function (e) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupsSelector")],
          function (n) {
            return n.map(e);
          },
          { name: i.id },
        );
      }),
      p = e(function (e, t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (t) {
            return t.map(e);
          }, t),
          { name: i.id },
        );
      }),
      _ = function (t, n) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              return t(e);
            });
          }, n),
          { name: i.id },
        );
      },
      f = e(_),
      g = e(function (e) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          function (n) {
            return n.map(e);
          },
          { name: i.id },
        );
      }),
      h = e(function (e, t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedAdgroupsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (t) {
            return t.map(e);
          }, t),
          { name: i.id },
        );
      }),
      y = function (t, n) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              return t(e);
            });
          }, n),
          { name: i.id },
        );
      },
      C = e(y),
      b = e(function (e, t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (t) {
            return t.map(function (t) {
              return e(
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(t),
                t.adgroup,
              );
            });
          }, t),
          { name: i.id },
        );
      }),
      v = e(function (e) {
        return r("adsCreateSelector")(
          [
            r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
            r("adsUEditorAdgroupSelectedChildAttachmentIndexSelector"),
          ],
          function (n, r) {
            var t = [];
            for (var a of n) {
              var i = o(
                "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
              ).getAdgroupSpecPathPlugin(a);
              if (!e.isSupported(i, a.adgroup, r))
                return o("Result").withError(
                  s._(
                    2016062,
                    function (e) {
                      return e._(
                        /*BTDS*/ "One or more selected ads have incompatible carousel cards.",
                      );
                    },
                    function (e, t) {
                      return e._(
                        /*BTDS*/ "Field {field} on card index {cardIndex} is not supported by selected ads.",
                        [
                          e._param("field", t.field),
                          e._param("cardIndex", t.cardIndex),
                        ],
                      );
                    },
                    { field: e.name, cardIndex: r },
                  ),
                );
              t.push(e.get(i, a.adgroup, r));
            }
            return o("Result").withSuccess(o("AdsBulkValueUtils").aggregate(t));
          },
          { name: i.id },
        );
      }),
      S = e(function (e) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedAdgroupsSelector")],
          function (n) {
            return n.map(e);
          },
          { name: i.id },
        );
      }),
      R = e(function (e) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
          function (n) {
            return n.map(e);
          },
          { name: i.id },
        );
      }),
      L = { bulkByAccessor: u, bulkByAccessorToJS: d, valuesByAccessor: m },
      E = { bulkByAccessor: p, bulkByAccessorToJS: f, valuesByAccessor: g },
      k = {
        bulkByAccessor: h,
        bulkByAccessorToJS: C,
        bulkBySemanticField: b,
        bulkByChildAttachmentField: v,
        valuesByAccessor: S,
        valuesByAccessorToJS: R,
      };
    ((l.campaignGroup = L), (l.campaign = E), (l.adgroup = k));
  },
  226,
);
