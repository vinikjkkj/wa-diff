__d(
  "AdsPEAdgroupAvailableIDStore",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsPEAdgroupSortLiveSelectors",
    "AdsPEBaseAvailableIDStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getAdLevel = function () {
            return "adgroup";
          }),
          (n.__getIDKey = function () {
            return "adgroupIDs";
          }),
          (n.__getObjectLevel = function () {
            return "ad";
          }),
          (n.__getDraftFragmentStore = function () {
            return r("AdsAdgroupDraftFragmentStore");
          }),
          (n.__getSortInfoSelector = function () {
            return o("AdsPEAdgroupSortLiveSelectors").getSortInfo;
          }),
          (n.__getCombinedErrorsForAdAccountSelector = function () {
            return null;
          }),
          (n.__handleDeletionStart = function (t) {
            t.adgroupIDs && this.__updateDeletedIDList(t.adgroupIDs);
          }),
          t
        );
      })(r("AdsPEBaseAvailableIDStore")),
      s = new e();
    l.default = s;
  },
  98,
);
