__d(
  "WAWebRotateLabyrinthEpochJob",
  [
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "WAWebRotateLabyrinthEpochJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebRotateLabyrinthEpochJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { input: e },
            n = yield o("WAWebRelayClient").commitMutation(s, t, {
              environmentType: "whatsapp_web",
            });
          if (n == null)
            throw r("err")(
              "Native Labyrinth rotate-epoch GraphQL response was empty",
            );
          e: {
            var a = n.wa_labyrinth_rotate_epoch;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.__typename === "WALabyrinthRotateEpochData"
            ) {
              var i = a,
                l = i.new_epoch_id;
              return babelHelpers.extends({}, n, {
                wa_labyrinth_rotate_epoch: babelHelpers.extends({}, i, {
                  new_epoch_id:
                    l == null
                      ? l
                      : o("WAWebLabyrinthOpaqueTypes").makeEpochId(l),
                }),
              });
            }
            {
              var u = a;
              return babelHelpers.extends({}, n, {
                wa_labyrinth_rotate_epoch: u,
              });
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.rotateLabyrinthEpoch = u;
  },
  98,
);
