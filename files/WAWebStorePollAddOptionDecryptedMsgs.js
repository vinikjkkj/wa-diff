__d(
  "WAWebStorePollAddOptionDecryptedMsgs",
  [
    "Promise",
    "WAWebApplyPollAddOptionToParent",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebSchemaMessage",
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
            var r = new Set(
                yield o(
                  "WAWebApplyPollAddOptionToParent",
                ).applyPollAddOptionsToParent(t),
              ),
              a = t.filter(function (e) {
                return !r.has(e);
              }),
              i = new Map();
            for (var l of a) {
              var s = l.parentMsg.id.remote.toString(),
                u = i.get(s);
              u != null ? u.push(l) : i.set(s, [l]);
            }
            (yield (e || (e = n("Promise"))).all(
              Array.from(i.entries()).map(
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
            ),
              yield o(
                "WAWebApplyPollAddOptionToParent",
              ).removePollAddOptionMsgs(yield c(a)));
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = Array.from(
              new Set(
                e.map(function (e) {
                  var t = e.parentMsg;
                  return t.id.toString();
                }),
              ),
            ),
            n = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(t),
            r = new Map();
          return (
            t.forEach(function (e, t) {
              var a = n[t];
              if (a != null) {
                var i;
                r.set(
                  e,
                  new Set(
                    (i = o("WAWebDBMessageSerialization").messageFromDbRow(
                      a,
                    ).pollOptions) == null
                      ? void 0
                      : i.map(function (e) {
                          return e.addOptionMsgKey;
                        }),
                  ),
                );
              }
            }),
            e.flatMap(function (e) {
              var t = e.decryptedAddOption,
                n = e.parentMsg,
                o = r.get(n.id.toString()),
                a = t.id.toString();
              return o != null && !o.has(a) ? [a] : [];
            })
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.storePollAddOptionDecryptedMsgs = s;
  },
  98,
);
