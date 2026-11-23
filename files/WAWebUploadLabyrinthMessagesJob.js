__d(
  "WAWebUploadLabyrinthMessagesJob",
  [
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "WAWebUploadLabyrinthMessagesJobMutation.graphql",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebUploadLabyrinthMessagesJobMutation.graphql"));
    async function u(e) {
      var t = { input: e },
        n = await o("WAWebRelayClient").commitMutation(s, t, {
          environmentType: "whatsapp_web",
        });
      if (n == null)
        throw r("err")(
          "Native Labyrinth upload-messages GraphQL response was empty",
        );
      e: {
        var a = n.wa_labyrinth_upload_messages;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.__typename === "WALabyrinthUploadMessagesData"
        ) {
          var i = a;
          return babelHelpers.extends({}, n, {
            wa_labyrinth_upload_messages: babelHelpers.extends({}, i, {
              results: i.results.map(function (e) {
                var t = e.offline_threading_id;
                return babelHelpers.extends({}, e, {
                  offline_threading_id:
                    t == null
                      ? t
                      : o("WAWebLabyrinthOpaqueTypes").makeOfflineThreadingId(
                          t,
                        ),
                });
              }),
            }),
          });
        }
        {
          var l = a;
          return babelHelpers.extends({}, n, {
            wa_labyrinth_upload_messages: l,
          });
        }
      }
    }
    l.uploadLabyrinthMessages = u;
  },
  98,
);
