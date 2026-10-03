__d(
  "MAWMiActOnActThreadReady",
  [
    "MAWMIC",
    "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
    "MAWMiActOnActThreadReadyWithoutValidator",
    "MWInteractionTracing",
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
    function s(e, t, a, i, l, s) {
      return r("MWInteractionTracing").trace(
        s,
        "MAWMiActOnActThreadReady.onActThreadReady",
        void 0,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var r = yield o(
              "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
            ).getThreadLifecycleStateByThreadKey(e, t, a),
            s = r.type,
            u = (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (r, o) {
                  return (
                    n("cr:7542") &&
                      (yield n("cr:7542")
                        .load()
                        .then(function (n) {
                          var r = n.validateActThreadReady;
                          return r({
                            chatJid: o,
                            description: a,
                            initialMappingStateType: s,
                            tables: e,
                            threadKey: t,
                          });
                        })),
                    i == null ? void 0 : i(r, o)
                  );
                },
              );
              return function (t, n) {
                return r.apply(this, arguments);
              };
            })();
          return o(
            "MAWMiActOnActThreadReadyWithoutValidator",
          ).onActThreadReadyWithoutValidator(e, t, a, u, l, r);
        }),
      );
    }
    function u(t, a, i, l) {
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
    ((l.onActThreadReady = s), (l.waitForACTThreadReady = u));
  },
  98,
);
