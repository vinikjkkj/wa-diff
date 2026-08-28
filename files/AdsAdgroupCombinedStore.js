__d(
  "AdsAdgroupCombinedStore",
  [
    "AdsAPIAdgroupRecord",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupFieldSetMap",
    "AdsAdgroupLiveStoreDataFields.experimental",
    "AdsDataAtom",
    "AdsInsightsQueryFieldUtil",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPEBaseFieldGranularCombinedTableStore",
    "L1LiveReverseInteropStore",
    "adsCreateStoreThunkSelector",
    "adsUEditorSlowSelectorsLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = o("AdsInsightsQueryFieldUtil")).normalizeFields(
        s.toAPIFieldsMap(Object.keys(r("AdsAdgroupFieldSetMap").all_cheap)),
      ),
      c = s.normalizeFields(
        s.toAPIFieldsMap(
          r("AdsAdgroupLiveStoreDataFields.experimental").cheapFields,
          !0,
        ),
      ),
      d = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.get.bind(babelHelpers.assertThisInitialized(t)),
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getByFields = function (n, a, i) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").ADGROUP,
                "AdsAdgroupCombinedStore",
              ),
              e.prototype.getByFields.call(this, n, a, i)
            );
          }),
          (n.getCachedByFields = function (n, a) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").ADGROUP,
                "AdsAdgroupCombinedStore",
              ),
              e.prototype.getCachedByFields.call(this, n, a)
            );
          }),
          (n.getSingleField = function (n, a) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").ADGROUP,
                "AdsAdgroupCombinedStore",
              ),
              e.prototype.getSingleField.call(this, n, a)
            );
          }),
          (n.getCachedSingleField = function (n, a) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").ADGROUP,
                "AdsAdgroupCombinedStore",
              ),
              e.prototype.getCachedSingleField.call(this, n, a)
            );
          }),
          (n.getAllByFields = function (n, r, a) {
            return o(
              "adsUEditorSlowSelectorsLogging",
            ).checkAndLogAdgroupStoreOverfetching(
              e.prototype.getAllByFields.call(this, n, r, a),
            );
          }),
          (n.__getStores = function () {
            return [
              r("AdsAdgroupDraftFragmentStore"),
              this.__getLiveTableStore(),
            ];
          }),
          (n.__getDraftFragmentStore = function () {
            return r("AdsAdgroupDraftFragmentStore");
          }),
          (n.__getLiveTableStore = function () {
            return r("L1LiveReverseInteropStore");
          }),
          (n.__createRecord = function (t) {
            return new (r("AdsAPIAdgroupRecord"))(t);
          }),
          (n.__getAllFields = function () {
            return u;
          }),
          (n.__getAllLiveFields = function () {
            return c;
          }),
          (n.__getLevel = function () {
            return "adgroup";
          }),
          t
        );
      })(r("AdsPEBaseFieldGranularCombinedTableStore"));
    d.__moduleID = i.id;
    var m = new d(e || (e = r("AdsDataAtom")));
    l.default = m;
  },
  98,
);
