__d(
  "MAWMiActOnActThreadReady",
  [
    "MAWMIC",
    "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
    "MAWMiActOnActThreadReadyWithoutValidator",
    "Promise",
    "asyncToGeneratorRuntime",
    "cr:7542",
    "err",
    "promiseDone",
    "sendToSentQPLLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            var l = yield o(
                "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
              ).getThreadLifecycleStateByThreadKey(e, t, r),
              s = l.type,
              u = (function () {
                var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (o, i) {
                    return (
                      n("cr:7542") &&
                        (yield n("cr:7542")
                          .load()
                          .then(function (n) {
                            var o = n.validateActThreadReady;
                            return o({
                              chatJid: i,
                              description: r,
                              initialMappingStateType: s,
                              tables: e,
                              threadKey: t,
                            });
                          })),
                      a == null ? void 0 : a(o, i)
                    );
                  },
                );
                return function (t, n) {
                  return o.apply(this, arguments);
                };
              })();
            return o(
              "MAWMiActOnActThreadReadyWithoutValidator",
            ).onActThreadReadyWithoutValidator(e, t, r, u, i, l);
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(t, a, i, l) {
      return new (e || (e = n("Promise")))(function (u, c) {
        s(
          t,
          a,
          i,
          function (t, r) {
            return (
              u({ chatJid: r, serverThreadKey: t }),
              (e || (e = n("Promise"))).resolve()
            );
          },
          function (e) {
            (c(
              r("err")(
                "Timed out waiting for ACT thread to be ready in %s. Thread state: %s",
                i,
                e,
              ),
            ),
              r("promiseDone")(
                o("MAWMIC")
                  .getState()
                  .then(function (e) {
                    l != null &&
                      o("sendToSentQPLLogger").addSendToSentAnnotations(l, {
                        string: { mic_state: e },
                      });
                  }),
              ));
          },
        ).catch(function () {
          return c();
        });
      });
    }
    ((l.onActThreadReady = s), (l.waitForACTThreadReady = c));
  },
  98,
);
