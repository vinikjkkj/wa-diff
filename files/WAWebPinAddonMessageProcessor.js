__d(
  "WAWebPinAddonMessageProcessor",
  [
    "WAArrayGroupBy",
    "WANullthrows",
    "WATimeUtils",
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBackendApi",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBProcessMessage",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPinMessageProcessor",
    "WAWebPinMsgGatingUtils",
    "WAWebPinMsgParseWebMsgInfoPinInChat",
    "WAWebPinsDbSerialization",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 60 * o("WATimeUtils").DAY_SECONDS,
      s = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: function () {
          return o(
            "WAWebPinMsgGatingUtils",
          ).isPinnedMessagesM1ReceiverEnabled();
        },
        convert: {
          fromHistorySyncMsg: function (t) {
            var e = o(
                "WAWebPinMsgParseWebMsgInfoPinInChat",
              ).parseWebMsgInfoPinInChat(t.webMsgInfo, t.parsedWebMsgInfo),
              n = e.map(function (e) {
                return o(
                  "WAWebPinsDbSerialization",
                ).deserializePinInChatMsgData(
                  o("WAWebPinsDbSerialization").serializePinInChat(e),
                );
              });
            return Promise.resolve(n);
          },
        },
        updateCollection: async function (t) {
          var e = t.add;
          await o("WAWebBackendApi").frontendSendAndReceive(
            "updatePinCollection",
            { msgs: e, removeMsgs: t.remove },
          );
        },
        beforeUpsert: async function (n, r) {
          var t = r.parents,
            a = r.processMode;
          return n.filter(function (n) {
            var r,
              i = (r = n.pinExpiryDuration) != null ? r : 0;
            if (a !== o("WAWebAddonConstants").AddonProcessMode.HistorySync) {
              var l = t.getForAddon(n);
              if (l.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION)
                return !0;
            }
            return i <= e;
          });
        },
        afterUpsert: async function (t, n) {
          var e = n.processMode;
          if (
            !(
              e === o("WAWebAddonConstants").AddonProcessMode.HistorySync ||
              e ===
                o("WAWebAddonConstants").AddonProcessMode
                  .ProcessGroupHistoryBundle
            )
          ) {
            var a = o("WAArrayGroupBy").groupBy(t, function (e) {
                return e.id.remote.toString();
              }),
              i = [
                o(
                  "WAWebDBMarkFutureproofMessagesReparsed",
                ).markFutureproofMessagesReparsed(
                  t.map(function (e) {
                    return e.id.toString();
                  }),
                ),
              ].concat(
                a.map(async function (e) {
                  var t = e[0],
                    n = e[1],
                    a = o("WAWebWidFactory").createWid(t),
                    i = await Promise.all(
                      r("compactMap")(n, function (e) {
                        var t = o("WAWebMsgGetters").getT(e);
                        if (
                          !(
                            e.pinMessageType !==
                              o("WAWebProtobufsE2E.pb")
                                .Message$PinInChatMessage$Type.PIN_FOR_ALL ||
                            t == null ||
                            o("WAWebMsgGetters").getIsFailed(e)
                          )
                        )
                          return o("WAWebPinMessageProcessor").genSystemMessage(
                            a,
                            t,
                            r("WANullthrows")(
                              o("WAWebMsgGetters").getSender(e),
                            ),
                          );
                      }),
                    ),
                    l = await o("WAWebBackendApi").frontendSendAndReceive(
                      "processMultipleMessages",
                      {
                        chatId: a,
                        msgObjs: i,
                        meta: { add: "after", isHistory: !1 },
                        processMessagesOrigin: "pinMessage",
                      },
                    );
                  l && (await o("WAWebDBProcessMessage").storeMessages(i, a));
                }),
              );
            await Promise.all(i);
          }
        },
        manageNotifications: async function () {},
      }),
      u = s;
    l.default = u;
  },
  98,
);
