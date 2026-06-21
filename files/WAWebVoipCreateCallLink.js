__d(
  "WAWebVoipCreateCallLink",
  ["WAWebVoipCreateCallLinkJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callType,
            n = e.eventStartTime,
            r = e.requireApproval,
            a = yield o("WAWebVoipCreateCallLinkJob").createCallLinkJob({
              callType: t,
              eventStartTime: n,
              requireApproval: r,
            });
          return a;
        })),
        s.apply(this, arguments)
      );
    }
    l.createCallLink = e;
  },
  98,
);
