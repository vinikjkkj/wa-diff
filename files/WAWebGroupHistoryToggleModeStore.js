__d(
  "WAWebGroupHistoryToggleModeStore",
  ["WAPromiseQueue", "WAWebDBGroupsGroupMetadata", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAPromiseQueue").PromiseQueueMap)();
    function s(t, r) {
      return e.enqueue(
        t.toString(),
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
          return (e == null ? void 0 : e.shouldDefaultGroupHistoryShareOn) === r
            ? !1
            : (yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t, {
                shouldDefaultGroupHistoryShareOn: r,
              }),
              !0);
        }),
      );
    }
    l.setGroupHistoryToggleMode = s;
  },
  98,
);
