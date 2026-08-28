__d(
  "ZenonNodeIdNotificationHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = JSON.parse(e.message),
        r = new Map();
      for (var o of Object.entries(n.nodeIdToUserIdMap)) {
        var a = o[0],
          i = o[1];
        r.set(parseInt(a, 10), String(i));
      }
      t.updateFromNodeIdToUserIdMap(r);
      for (var l of Object.entries(n.nodeIdToServiceTypeMap)) {
        var s = l[0],
          u = l[1];
        t.registerDataMessageService(String(u), parseInt(s, 10));
      }
    }
    i.handleNodeIdNotificationMessage = e;
  },
  66,
);
