__d(
  "WAWebStatusJidUtils",
  ["WAJids", "WAWebChatModel", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      return (
        e != null ||
          (e = new (o("WAWebChatModel").Chat)({
            id: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
          })),
        e
      );
    }
    l.getStatusChat = s;
  },
  98,
);
