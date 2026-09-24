__d(
  "WAWebGroupHistoryShareToggleDefaultAction",
  [
    "Promise",
    "WAWebGroupHistoryGating",
    "WAWebGroupMetadataCollection",
    "WAWebPersistAndSyncGroupHistoryToggle",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (yield o(
            "WAWebPersistAndSyncGroupHistoryToggle",
          ).persistAndSyncGroupHistoryToggle(e, t),
            (n = r("WAWebGroupMetadataCollection").get(e)) == null ||
              n.set({ shouldDefaultGroupHistoryShareOn: t }));
        })),
        u.apply(this, arguments)
      );
    }
    function c(t, r, a) {
      return a && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(t)
        ? s(t, r)
        : (e || (e = n("Promise"))).resolve();
    }
    ((l.setGroupHistoryShareToggleDefault = s),
      (l.persistGroupHistoryShareToggleDefaultOnAdd = c));
  },
  98,
);
