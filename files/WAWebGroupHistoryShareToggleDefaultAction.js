__d(
  "WAWebGroupHistoryShareToggleDefaultAction",
  [
    "Promise",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupHistoryGating",
    "WAWebGroupMetadataCollection",
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
          (yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
            shouldDefaultGroupHistoryShareOn: t,
          }),
            (n = r("WAWebGroupMetadataCollection").get(e)) == null ||
              n.set({ shouldDefaultGroupHistoryShareOn: t }));
        })),
        u.apply(this, arguments)
      );
    }
    function c(t, r) {
      return o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(t)
        ? s(t, r)
        : (e || (e = n("Promise"))).resolve();
    }
    ((l.setGroupHistoryShareToggleDefault = s),
      (l.persistGroupHistoryShareToggleDefaultOnAdd = c));
  },
  98,
);
