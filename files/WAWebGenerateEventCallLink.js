__d(
  "WAWebGenerateEventCallLink",
  ["WAWebVoipCreateCallLink", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var r = yield o("WAWebVoipCreateCallLink").createCallLink({
              callType: t === "voice" ? "audio" : "video",
              eventStartTime: e,
              requireApproval: n,
            });
            return r;
          } catch (e) {
            return;
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.createEventCallLink = e;
  },
  98,
);
