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
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
        "WAWebAddonCreateMsgProcessor",
      ).createAddonMsgProcessorDualEncrypted({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
          fromHistorySyncMsg: async function (t) {
            return o(
              "WAWebEventsParseWebMsgInfoEventResponse",
            ).parseWebMsgInfoEventResponses(t);
          },
          toDualEncryptedMsgData: async function (t, n) {
            return t.kind === o("WAWebMsgType").MsgKind.EventResponseEncrypted
              ? t
              : o(
                  "WAWebCreateEncryptedEventResponseMsgData",
                ).createEncryptedEventResponseMsgData(t, n);
          },
          toDualDecryptedMsgData: async function (t, n) {
            return t.kind === o("WAWebMsgType").MsgKind.EventResponseDecrypted
              ? t
              : o(
                  "WAWebProcessEncryptedEventResponseMsgs",
                ).decryptEncryptedEventResponseMsg(t, n);
          },
        },
        updateCollection: async function (t) {
          await o("WAWebBackendApi").frontendSendAndReceive(
            "upsertEventResponsesModelCollection",
            { eventResponses: t.add, eventResponsesToRemove: t.remove },
          );
        },
        beforeUpsert: async function (t, n) {
          var e = n.parents,
            r = await o(
              "WAWebProcessEncryptedEventResponseMsgs",
            ).processEncryptedEventResponseMsgs(t, e),
            a = await o(
              "WAWebPrepareEventResponsesToUpsert",
            ).prepareEventResponsesToUpsert(r);
          return a;
        },
        afterUpsert: async function (t, n) {
          var e = n.processMode,
            r = t.map(
              o("WAWebEventResponseMsgDataConversion")
                .eventResponseMsgDataToResponseData,
            );
          (await o(
            "WAWebShouldUpdateLastAddOnPreview",
          ).filterAndUpdateChatPreviews(r),
            e !== o("WAWebAddonConstants").AddonProcessMode.HistorySync &&
              e === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive &&
              (await o(
                "WAWebDBMarkFutureproofMessagesReparsed",
              ).markFutureproofMessagesReparsed(
                t.map(function (e) {
                  return e.id.toString();
                }),
              )));
        },
        manageNotifications: async function () {},
      }),
      s = e;
    l.default = s;
  },
  98,
);
