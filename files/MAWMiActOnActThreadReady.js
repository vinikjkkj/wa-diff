__d(
  "MAWMiActOnActThreadReady",
  [
    "MAWMIC",
    "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
    "MAWMiActOnActThreadReadyWithoutValidator",
    "MWInteractionTracing",
    "cr:7542",
    "err",
    "promiseDone",
    "sendToSentQPLLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, a, i, l, s) {
      return r("MWInteractionTracing").trace(
        s,
        "MAWMiActOnActThreadReady.onActThreadReady",
        void 0,
        async function () {
          var r = await o(
              "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
            ).getThreadLifecycleStateByThreadKey(e, t, a),
            s = r.type,
            u = async function (o, l) {
              return (
                n("cr:7542") &&
                  (await n("cr:7542")
                    .load()
                    .then(function (n) {
                      var r = n.validateActThreadReady;
                      return r({
                        chatJid: l,
                        description: a,
                        initialMappingStateType: s,
                        tables: e,
                        threadKey: t,
                      });
                    })),
                i == null ? void 0 : i(o, l)
              );
            };
          return o(
            "MAWMiActOnActThreadReadyWithoutValidator",
          ).onActThreadReadyWithoutValidator(e, t, a, u, l, r);
        },
      );
    }
    function s(t, n, a, i) {
      return new Promise(function (l, s) {
        e(
          t,
          n,
          a,
          function (e, t) {
            return (l({ chatJid: t, serverThreadKey: e }), Promise.resolve());
          },
          function (e) {
            (s(
              r("err")(
                "Timed out waiting for ACT thread to be ready in %s. Thread state: %s",
                a,
                e,
              ),
            ),
              r("promiseDone")(
                o("MAWMIC")
                  .getState()
                  .then(function (e) {
                    i != null &&
                      o("sendToSentQPLLogger").addSendToSentAnnotations(i, {
                        string: { mic_state: e },
                      });
                  }),
              ));
          },
        ).catch(function () {
          return s();
        });
      });
    }
    ((l.onActThreadReady = e), (l.waitForACTThreadReady = s));
  },
  98,
);
