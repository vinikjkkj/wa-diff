__d(
  "WAWebPinAddonMessageProcessor",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 60 * o("WATimeUtils").DAY_SECONDS,
      u = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: function () {
          return o(
            "WAWebPinMsgGatingUtils",
          ).isPinnedMessagesM1ReceiverEnabled();
        },
        convert: {
          fromHistorySyncMsg: function (r) {
            var t = o(
                "WAWebPinMsgParseWebMsgInfoPinInChat",
              ).parseWebMsgInfoPinInChat(r.webMsgInfo, r.parsedWebMsgInfo),
              a = t.map(function (e) {
                return o(
                  "WAWebPinsDbSerialization",
                ).deserializePinInChatMsgData(
                  o("WAWebPinsDbSerialization").serializePinInChat(e),
                );
              });
            return (e || (e = n("Promise"))).resolve(a);
          },
        },
        updateCollection: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.add;
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updatePinCollection",
              { msgs: t, removeMsgs: e.remove },
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
                r = t.processMode;
              return e.filter(function (e) {
                var t,
                  a = (t = e.pinExpiryDuration) != null ? t : 0;
                if (
                  r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync
                ) {
                  var i = n.getForAddon(e);
                  if (i.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION)
                    return !0;
                }
                return a <= s;
              });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        afterUpsert: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, a) {
              var i = a.processMode;
              if (
                !(
                  i === o("WAWebAddonConstants").AddonProcessMode.HistorySync ||
                  i ===
                    o("WAWebAddonConstants").AddonProcessMode
                      .ProcessGroupHistoryBundle
                )
              ) {
                var l = o("WAArrayGroupBy").groupBy(t, function (e) {
                    return e.id.remote.toString();
                  }),
                  s = [
                    o(
                      "WAWebDBMarkFutureproofMessagesReparsed",
                    ).markFutureproofMessagesReparsed(
                      t.map(function (e) {
                        return e.id.toString();
                      }),
                    ),
                  ].concat(
                    l.map(
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t) {
                            var a = t[0],
                              i = t[1],
                              l = o("WAWebWidFactory").createWid(a),
                              s = yield (e || (e = n("Promise"))).all(
                                r("compactMap")(i, function (e) {
                                  var t = o("WAWebMsgGetters").getT(e);
                                  if (
                                    !(
                                      e.pinMessageType !==
                                        o("WAWebProtobufsE2E.pb")
                                          .Message$PinInChatMessage$Type
                                          .PIN_FOR_ALL ||
                                      t == null ||
                                      o("WAWebMsgGetters").getIsFailed(e)
                                    )
                                  )
                                    return o(
                                      "WAWebPinMessageProcessor",
                                    ).genSystemMessage(
                                      l,
                                      t,
                                      r("WANullthrows")(
                                        o("WAWebMsgGetters").getSender(e),
                                      ),
                                    );
                                }),
                              ),
                              u = yield o(
                                "WAWebBackendApi",
                              ).frontendSendAndReceive(
                                "processMultipleMessages",
                                {
                                  chatId: l,
                                  msgObjs: s,
                                  meta: { add: "after", isHistory: !1 },
                                  processMessagesOrigin: "pinMessage",
                                },
                              );
                            u &&
                              (yield o("WAWebDBProcessMessage").storeMessages(
                                s,
                                l,
                              ));
                          },
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                yield (e || (e = n("Promise"))).all(s);
              }
            },
          );
          function a(e, n) {
            return t.apply(this, arguments);
          }
          return a;
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
      c = u;
    l.default = c;
  },
  98,
);
