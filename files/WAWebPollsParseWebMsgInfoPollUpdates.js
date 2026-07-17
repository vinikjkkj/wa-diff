__d(
  "WAWebPollsParseWebMsgInfoPollUpdates",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebMsgType",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsProtobufConversion",
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
                  .POLL_UPDATE
              );
            })
            .map(function (e) {
              var t;
              return {
                senderTimestampMs: e.senderTimestampMs,
                serverTimestampMs: e.serverTimestampMs,
                pollUpdateMessageKey: e.messageAddOnKey,
                vote: (t = e.legacyMessage) == null ? void 0 : t.pollVote,
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
            if (a == null || a.pollUpdates == null) return [];
            if (
              n == null ||
              n.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION
            )
              return [];
            var l = n,
              c = yield o(
                "WAWebPollsCreateOptionLocalIdMap",
              ).createOptionLocalIdMap(l.pollOptions),
              d = (i = u(a.messageAddOns)) != null ? i : a.pollUpdates;
            return r("compactMap")(d, function (t) {
              try {
                var n,
                  a = (n = r("WANullthrows"))(t.pollUpdateMessageKey),
                  i = n(t.vote),
                  s = n(
                    o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({ key: a }),
                  ),
                  u = s.msgKey,
                  d = s.sender;
                return o("WAWebPollsProtobufConversion").voteFromProtobuf({
                  voteProtobuf: i,
                  pollVoteMsgKey: u,
                  parentMsgKey: l.id,
                  sender: d,
                  senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                    n(t.senderTimestampMs),
                  ),
                  t: o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(
                    t.serverTimestampMs,
                  ),
                  optionLocalIdMap: c,
                  ack: null,
                  read: t.unread !== !0,
                });
              } catch (t) {
                var m = r("getErrorSafe")(t);
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Failed to parse pollUpdate with error ",
                          "",
                        ])),
                      m,
                    )
                    .sendLogs("parseWebMsgInfoPollUpdates-vote-parse-error"),
                  null
                );
              }
            });
          } catch (e) {
            var m = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] parseWebMsgInfoPollUpdates failed: ",
                      " ",
                      "",
                    ])),
                  m == null ? void 0 : m.name,
                  m == null ? void 0 : m.stack,
                )
                .sendLogs("parseWebMsgInfoPollUpdates-error"),
              []
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.parseWebMsgInfoPollUpdates = c;
  },
  98,
);
