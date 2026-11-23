__d(
  "WAWebRotateLabyrinthEpochJob",
  [
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "WAWebRotateLabyrinthEpochJobMutation.graphql",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebRotateLabyrinthEpochJobMutation.graphql"));
    async function u(e) {
      var t = { input: e },
        n = await o("WAWebRelayClient").commitMutation(s, t, {
          environmentType: "whatsapp_web",
        });
      if (n == null)
        throw r("err")(
          "Native Labyrinth rotate-epoch GraphQL response was empty",
        );
      e: {
        var a = n.wa_labyrinth_rotate_epoch;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.__typename === "WALabyrinthRotateEpochData"
        ) {
          var i = a,
            l = i.new_epoch_id;
          return babelHelpers.extends({}, n, {
            wa_labyrinth_rotate_epoch: babelHelpers.extends({}, i, {
              new_epoch_id:
                l == null ? l : o("WAWebLabyrinthOpaqueTypes").makeEpochId(l),
            }),
          });
        }
        {
          var u = a;
          return babelHelpers.extends({}, n, { wa_labyrinth_rotate_epoch: u });
        }
      }
    }
    l.rotateLabyrinthEpoch = u;
  },
  98,
);
