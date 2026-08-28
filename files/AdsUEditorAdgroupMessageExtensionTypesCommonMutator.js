__d(
  "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
  [
    "AdsAPIAdAssetFeedMessageExtensionsFields",
    "AdsAdgroupRecordAccessors",
    "AdsClientAdAssetFeedSpecFields",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("adsConvertAdObjectRecordToPlainJS")(e),
        o = (t = n.creative) == null ? void 0 : t.asset_feed_spec;
      return o == null || r("isEmptyObject")(o)
        ? !1
        : (o == null ? void 0 : o.message_extensions) != null
          ? r("AdsClientAdAssetFeedSpecFields").every(function (e) {
              var t,
                o =
                  (t = n.creative) == null || (t = t.asset_feed_spec) == null
                    ? void 0
                    : t[e];
              return e === "message_extensions"
                ? !0
                : o instanceof Array
                  ? o.length === 0
                  : o instanceof Object && r("isEmptyObject")(o)
                    ? !0
                    : o == null;
            })
          : !1;
    }
    function s(e, t) {
      var n = Array.isArray(t) ? t : [t];
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.message_extensions.set(
        r("immutable").List(
          n.map(function (e) {
            var t;
            return r("immutable").Map(
              ((t = {}),
              (t[r("AdsAPIAdAssetFeedMessageExtensionsFields").TYPE] = e),
              t),
            );
          }),
        ),
        e,
      );
    }
    function u(t) {
      var n = r("adsConvertAdObjectRecordToPlainJS")(t);
      return e(n)
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(t)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.message_extensions.delete(t);
    }
    ((l.setMessageExtensionTypeCommon = s),
      (l.cleanMessageExtensionFieldsCommon = u));
  },
  98,
);
