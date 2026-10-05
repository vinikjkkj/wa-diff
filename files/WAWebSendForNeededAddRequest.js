__d(
  "WAWebSendForNeededAddRequest",
  ["WAWebCmd", "WAWebContactCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.groupAddResponse,
        n = e.groupDesc,
        r = e.onFinish,
        a = e.subject;
      if (t.participants) {
        var i = t.gid,
          l = [];
        (t.participants.forEach(function (e) {
          if (e.code === "403") {
            var t = o("WAWebContactCollection").ContactCollection.gadd(
              e.userWid,
              { silent: !0 },
            );
            l.push(babelHelpers.extends({}, e, { contact: t }));
          }
        }),
          l.length > 0 &&
            i &&
            o("WAWebCmd").Cmd.openGroupsV4InviteRequestFlow(l, i, a, n, r));
      }
    }
    l.sendForNeededAddRequest = e;
  },
  98,
);
