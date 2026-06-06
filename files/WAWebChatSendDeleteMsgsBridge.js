__d(
  "WAWebChatSendDeleteMsgsBridge",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageDelete",
    "WAWebDeleteMessageForMeSync",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebSyncdCoreApi",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, a) {
      var i = [],
        l = [];
      t.forEach(function (e) {
        (i.push(e.id), l.push(String(e.rowId)));
      });
      var s = await r("WAWebDeleteMessageForMeSync").getDeleteForMeMutations(
          t,
          n,
        ),
        u = i.map(function (e) {
          return e.toString();
        });
      return o("WAWebSyncdCoreApi")
        .lockForSync(
          [
            "message",
            "label-association",
            "chat",
            "reporting-info",
            "message-association",
          ],
          s,
          function () {
            return o("WAWebDBMessageDelete").removeMessagesFromHistory(u, {
              deleteAssociatedMsgs: !1,
            });
          },
        )
        .then(async function (e) {
          return (
            u.length > 0 &&
              (await o("WAWebBackendApi").frontendSendAndReceive(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: u },
              ),
              await o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .waitUntilPersisted(
                  o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                    a.toString(),
                    u,
                  ),
                )),
            e
          );
        })
        .catch(function (t) {
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "remove messages from history failed",
                  ])),
              )
              .verbose()
              .sendLogs(
                "remove messages from history failed when send delete messages",
              ),
            r("err")("remove messages from history failed")
          );
        });
    }
    l.sendDeleteMsgs = s;
  },
  98,
);
