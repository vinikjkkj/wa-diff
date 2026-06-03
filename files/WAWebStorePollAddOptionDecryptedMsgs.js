__d(
  "WAWebStorePollAddOptionDecryptedMsgs",
  [
    "Promise",
    "WAWebApplyPollAddOptionToParent",
    "WAWebBackendApi",
    "WAWebStoreMsgs",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0) {
            yield o(
              "WAWebApplyPollAddOptionToParent",
            ).applyPollAddOptionsToParent(t);
            var r = new Map();
            for (var a of t) {
              var i = a.parentMsg.id.remote.toString(),
                l = r.get(i);
              l != null ? l.push(a) : r.set(i, [a]);
            }
            yield (e || (e = n("Promise"))).all(
              Array.from(r.entries()).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        r = o("WAWebWidFactory").createWid(t),
                        a = n.map(function (e) {
                          return e.decryptedAddOption;
                        });
                      (yield o("WAWebBackendApi").frontendSendAndReceive(
                        "processMultipleMessages",
                        {
                          chatId: r,
                          msgObjs: a,
                          meta: { add: "after", isHistory: !1 },
                          processMessagesOrigin: "pollAddOptionMessage",
                        },
                      ),
                        yield o("WAWebStoreMsgs").storeMsgs(a));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.storePollAddOptionDecryptedMsgs = s;
  },
  98,
);
