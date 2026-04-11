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
          var n = t.isFromCag,
            a = t.parsedWebMsgInfo,
            i = t.webMsgInfo;
          try {
            var l;
            if (
              !(i != null && i.eventResponses) ||
              !a ||
              a.type !== o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            )
              return [];
            var c = a,
              d = (l = u(i.messageAddOns)) != null ? l : i.eventResponses;
            return r("compactMap")(d, function (t) {
              try {
                var a,
                  i = (a = r("WANullthrows"))(
                    t.eventResponseMessageKey,
                    "eventResponseMessageKey",
                  ),
                  l = a(t.eventResponseMessage, "eventResponseMessage"),
                  s = a(o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey(i, n)),
                  u = s.msgKey;
                return o(
                  "WAWebEventResponseMsgDataConversion",
                ).protobufToEventResponseMsgData({
                  responseProtobuf: l,
                  id: u,
                  parentMsgKey: c.id,
                  senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                    a(l.timestampMs, "senderTimestampMs"),
                  ),
                  t: o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(
                    t.timestampMs,
                  ),
                  ack: null,
                  read: t.unread !== !0,
                });
              } catch (t) {
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Failed to parse eventResponse",
                        ])),
                    )
                    .catching(t)
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
                .catching(e)
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
