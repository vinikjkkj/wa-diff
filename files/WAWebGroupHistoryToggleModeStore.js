__d(
  "WAWebGroupHistoryToggleModeStore",
  ["WAWebDBGroupsGroupMetadata", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return (n == null ? void 0 : n.shouldDefaultGroupHistoryShareOn) === t
            ? !1
            : (yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
                shouldDefaultGroupHistoryShareOn: t,
              }),
              !0);
        })),
        s.apply(this, arguments)
      );
    }
    l.setGroupHistoryToggleMode = e;
  },
  98,
);
