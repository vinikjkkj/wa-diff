__d(
  "WAWebLogSystemMessageClick",
  ["WAWebSystemMessageClickWamEvent", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            new (o(
              "WAWebSystemMessageClickWamEvent",
            ).SystemMessageClickWamEvent)({
              isAGroup: n,
              isANewThread: r,
              systemMessageCategory: e,
              systemMessageType: t,
            }).commit();
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.logSystemMessageClick = e;
  },
  98,
);
