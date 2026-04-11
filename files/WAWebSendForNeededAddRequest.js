__d(
  "WAWebSendForNeededAddRequest",
  ["WAWebCmd", "WAWebContactCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      if (e.participants) {
        var a = e.gid,
          i = [];
        (e.participants.forEach(function (e) {
          if (e.code === "403") {
            var t = o("WAWebContactCollection").ContactCollection.gadd(
              e.userWid,
              { silent: !0 },
            );
            i.push(babelHelpers.extends({}, e, { contact: t }));
          }
        }),
          i.length > 0 &&
            a &&
            o("WAWebCmd").Cmd.openGroupsV4InviteRequestFlow(i, a, t, n, r));
      }
    }
    l.sendForNeededAddRequest = e;
  },
  98,
);
