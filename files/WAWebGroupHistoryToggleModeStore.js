__d(
  "WAWebGroupHistoryToggleModeStore",
  ["WAPromiseQueue", "WAWebDBGroupsGroupMetadata"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAPromiseQueue").PromiseQueueMap)();
    function s(t, n) {
      return e.enqueue(t.toString(), async function () {
        var e = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
        return (e == null ? void 0 : e.shouldDefaultGroupHistoryShareOn) === n
          ? !1
          : (await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t, {
              shouldDefaultGroupHistoryShareOn: n,
            }),
            !0);
      });
    }
    l.setGroupHistoryToggleMode = s;
  },
  98,
);
