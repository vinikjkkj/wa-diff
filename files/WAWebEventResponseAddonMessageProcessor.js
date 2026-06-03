__d(
  "WAWebEventResponseAddonMessageProcessor",
  [
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebCreateEncryptedEventResponseMsgData",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebEventResponseMsgDataConversion",
    "WAWebEventsParseWebMsgInfoEventResponse",
    "WAWebMsgType",
    "WAWebPrepareEventResponsesToUpsert",
    "WAWebProcessEncryptedEventResponseMsgs",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
        "WAWebAddonCreateMsgProcessor",
      ).createAddonMsgProcessorDualEncrypted({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
          fromHistorySyncMsg: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return o(
                  "WAWebEventsParseWebMsgInfoEventResponse",
                ).parseWebMsgInfoEventResponses(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          toDualEncryptedMsgData: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return e.kind ===
                  o("WAWebMsgType").MsgKind.EventResponseEncrypted
                  ? e
                  : o(
                      "WAWebCreateEncryptedEventResponseMsgData",
                    ).createEncryptedEventResponseMsgData(e, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          toDualDecryptedMsgData: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return e.kind ===
                  o("WAWebMsgType").MsgKind.EventResponseDecrypted
                  ? e
                  : o(
                      "WAWebProcessEncryptedEventResponseMsgs",
                    ).decryptEncryptedEventResponseMsg(e, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        updateCollection: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "upsertEventResponsesModelCollection",
              { eventResponses: e.add, eventResponsesToRemove: e.remove },
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        beforeUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.parents,
                r = yield o(
                  "WAWebProcessEncryptedEventResponseMsgs",
                ).processEncryptedEventResponseMsgs(e, n),
                a = yield o(
                  "WAWebPrepareEventResponsesToUpsert",
                ).prepareEventResponsesToUpsert(r);
              return a;
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        afterUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.processMode,
                r = e.map(
                  o("WAWebEventResponseMsgDataConversion")
                    .eventResponseMsgDataToResponseData,
                );
              (yield o(
                "WAWebShouldUpdateLastAddOnPreview",
              ).filterAndUpdateChatPreviews(r),
                n !== o("WAWebAddonConstants").AddonProcessMode.HistorySync &&
                  n ===
                    o("WAWebAddonConstants").AddonProcessMode.OnlineReceive &&
                  (yield o(
                    "WAWebDBMarkFutureproofMessagesReparsed",
                  ).markFutureproofMessagesReparsed(
                    e.map(function (e) {
                      return e.id.toString();
                    }),
                  )));
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        manageNotifications: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {},
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      }),
      s = e;
    l.default = s;
  },
  98,
);
