__d(
  "WAWebChatDbUpdatesApi",
  ["WALogger", "WAWebBackendApi", "WAWebSchemaChat", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "setArchive: bulk update chat",
          ])),
      );
      try {
        var n = await o("WAWebSchemaChat")
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
      await o("WAWebSchemaChat").getChatTable().bulkMergeOnly(t);
      var a = t.map(function (e) {
        return { id: o("WAWebWidFactory").createWid(e.id), archive: e.archive };
      });
      o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
        updates: a,
      });
    }
    l.setArchive = c;
  },
  98,
);
