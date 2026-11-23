__d(
  "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
  [
    "AdsAPIAdAssetFeedMessageExtensionsFields",
    "AdsAdgroupRecordAccessors",
    "AdsClientAdAssetFeedSpecFields",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "isEmptyObject",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e instanceof r("immutable").Iterable
        ? e.isEmpty()
        : e instanceof Array
          ? e.length === 0
          : e instanceof Object
            ? r("isEmptyObject")(e)
            : e == null;
    }
    function s(t) {
      var n,
        o = (n = t.creative) == null ? void 0 : n.asset_feed_spec;
      return o == null || e(o) || o.message_extensions == null
        ? !1
        : r("AdsClientAdAssetFeedSpecFields").every(function (t) {
            return t === "message_extensions" || e(o[t]);
          });
    }
    function u(e, t) {
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
    function c(e) {
      var t = r("qex")._("3278") === !0;
      return s(t ? e : r("adsConvertAdObjectRecordToPlainJS")(e))
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.message_extensions.delete(e);
    }
    ((l.setMessageExtensionTypeCommon = u),
      (l.cleanMessageExtensionFieldsCommon = c));
  },
  98,
);
