__d(
  "WAWebLogSystemMessageClick",
  ["WAWebSystemMessageClickWamEvent"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.isAGroup,
        n = e.isANewThread,
        r = e.systemMessageCategory,
        a = e.systemMessageType;
      new (o("WAWebSystemMessageClickWamEvent").SystemMessageClickWamEvent)({
        isAGroup: t,
        isANewThread: n,
        systemMessageCategory: r,
        systemMessageType: a,
      }).commit();
    }
    l.logSystemMessageClick = e;
  },
  98,
);
