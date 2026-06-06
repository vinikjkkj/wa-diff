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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = [],
            s = [];
          t.forEach(function (e) {
            (l.push(e.id), s.push(String(e.rowId)));
          });
          var u = yield r(
              "WAWebDeleteMessageForMeSync",
            ).getDeleteForMeMutations(t, a),
            c = l.map(function (e) {
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
              u,
              function () {
                return o("WAWebDBMessageDelete").removeMessagesFromHistory(c, {
                  deleteAssociatedMsgs: !1,
                });
              },
            )
            .then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return (
                      c.length > 0 &&
                        (yield o("WAWebBackendApi").frontendSendAndReceive(
                          "deleteModelsForLastAddOnPreview",
                          { messagesIds: c },
                        ),
                        yield o("WAWebPersistedJobManagerWorkerCompatible")
                          .getJobManager()
                          .waitUntilPersisted(
                            o(
                              "WAWebPersistedJobDefinitions",
                            ).jobSerializers.deleteAddOns(i.toString(), c),
                          )),
                      e
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )
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
        })),
        u.apply(this, arguments)
      );
    }
    l.sendDeleteMsgs = s;
  },
  98,
);
