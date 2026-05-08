__d(
  "WAWebLogSystemMessageClick",
  ["WAWebSystemMessageClickWamEvent", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isAGroup,
            n = e.isANewThread,
            r = e.systemMessageCategory,
            a = e.systemMessageType;
          new (o("WAWebSystemMessageClickWamEvent").SystemMessageClickWamEvent)(
            {
              isAGroup: t,
              isANewThread: n,
              systemMessageCategory: r,
              systemMessageType: a,
            },
          ).commit();
        })),
        s.apply(this, arguments)
      );
    }
    l.logSystemMessageClick = e;
  },
  98,
);
