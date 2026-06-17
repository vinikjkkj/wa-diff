__d(
  "WAWebEventsParseWebMsgInfoEventResponse",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebEventResponseMsgDataConversion",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return e.length === 0
        ? null
        : e
            .filter(function (e) {
              return (
                e.messageAddOnType ===
                o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType
                  .EVENT_RESPONSE
              );
            })
            .map(function (e) {
              var t;
              return {
                timestampMs: e.serverTimestampMs,
                eventResponseMessageKey: e.messageAddOnKey,
                eventResponseMessage:
                  (t = e.legacyMessage) == null
                    ? void 0
                    : t.eventResponseMessage,
                unread:
                  e.status !==
                  o("WAWebProtobufsWeb.pb").WebMessageInfo$Status.READ,
              };
            });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.parsedWebMsgInfo,
            a = t.webMsgInfo;
          try {
            var i;
            if (
              !(a != null && a.eventResponses) ||
              !n ||
              n.type !== o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            )
              return [];
            var l = n,
              c = (i = u(a.messageAddOns)) != null ? i : a.eventResponses;
            return r("compactMap")(c, function (t) {
              try {
                var n,
                  a = (n = r("WANullthrows"))(
                    t.eventResponseMessageKey,
                    "eventResponseMessageKey",
                  ),
                  i = n(t.eventResponseMessage, "eventResponseMessage"),
                  s = n(
                    o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({ key: a }),
                  ),
                  u = s.msgKey;
                return o(
                  "WAWebEventResponseMsgDataConversion",
                ).protobufToEventResponseMsgData({
                  responseProtobuf: i,
                  id: u,
                  parentMsgKey: l.id,
                  senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                    n(i.timestampMs, "senderTimestampMs"),
                  ),
                  t: o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(
                    t.timestampMs,
                  ),
                  ack: null,
                  read: t.unread !== !0,
                });
              } catch (t) {
                var c = r("getErrorSafe")(t);
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Failed to parse eventResponse",
                        ])),
                    )
                    .catching(c)
                    .sendLogs(
                      "parseWebMsgInfoEventResponses-responses-parse-error",
                    ),
                  null
                );
              }
            });
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] parseWebMsgInfoEventResponses",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("parseWebMsgInfoEventResponses-error"),
              []
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.parseWebMsgInfoEventResponses = c;
  },
  98,
);
