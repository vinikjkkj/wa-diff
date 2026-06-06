__d(
  "WAWebChatDbUpdatesApi",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "setArchive: bulk update chat",
              ])),
          );
          try {
            var n = yield o("WAWebSchemaChat")
                .getChatTable()
                .bulkGet(
                  t.map(function (e) {
                    return e.id;
                  }),
                ),
              r = t[n.indexOf(null)];
            r &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "setArchive: some chats to archive do not exist. first: ",
                      "",
                    ])),
                  o("WAWebWidFactory").createWid(r.id).toLogString(),
                )
                .tags("missing-lid");
          } catch (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "setArchive: failed to log missing chats",
                ])),
            );
          }
          yield o("WAWebSchemaChat").getChatTable().bulkMergeOnly(t);
          var a = t.map(function (e) {
            return {
              id: o("WAWebWidFactory").createWid(e.id),
              archive: e.archive,
            };
          });
          o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
            updates: a,
          });
        })),
        d.apply(this, arguments)
      );
    }
    l.setArchive = c;
  },
  98,
);
