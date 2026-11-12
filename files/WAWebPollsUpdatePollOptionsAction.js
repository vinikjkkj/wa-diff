__d(
  "WAWebPollsUpdatePollOptionsAction",
  ["Promise", "WAWebMsgCollection", "WAWebNoop", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (e || (e = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t,
                      n,
                      a = e.parentMsgKey,
                      i = e.pollOptions;
                    (yield (t =
                      o("WAWebMsgCollection").MsgCollection.pendingAdd[
                        a.remote
                      ]) == null
                      ? void 0
                      : t.catch(r("WAWebNoop")),
                      (n = o("WAWebMsgCollection").MsgCollection.get(a)) ==
                        null || n.set({ pollOptions: i }));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.updatePollOptions = s;
  },
  98,
);
