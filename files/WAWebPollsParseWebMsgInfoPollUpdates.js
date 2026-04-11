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
                senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                  r("WANullthrows")(e.senderTimestampMs),
                ),
                serverTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                  r("WANullthrows")(e.serverTimestampMs),
                ),
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
          var n = t.isFromCag,
            a = t.parsedWebMsgInfo,
            i = t.webMsgInfo;
          try {
            var l;
            if (i == null || i.pollUpdates == null) return [];
            if (
              a == null ||
              a.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION
            )
              return [];
            var c = a,
              d = yield o(
                "WAWebPollsCreateOptionLocalIdMap",
              ).createOptionLocalIdMap(c.pollOptions),
              m = (l = u(i.messageAddOns)) != null ? l : i.pollUpdates;
            return r("compactMap")(m, function (t) {
              try {
                var a,
                  i = (a = r("WANullthrows"))(t.pollUpdateMessageKey),
                  l = a(t.vote),
                  s = a(o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey(i, n)),
                  u = s.msgKey,
                  m = s.sender;
                return o("WAWebPollsProtobufConversion").voteFromProtobuf({
                  voteProtobuf: l,
                  pollVoteMsgKey: u,
                  parentMsgKey: c.id,
                  sender: m,
                  senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                    a(t.senderTimestampMs),
                  ),
                  t: o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(
                    t.serverTimestampMs,
                  ),
                  optionLocalIdMap: d,
                  ack: null,
                  read: t.unread !== !0,
                });
              } catch (t) {
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Failed to parse pollUpdate with error ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("parseWebMsgInfoPollUpdates-vote-parse-error"),
                  null
                );
              }
            });
          } catch (e) {
            var p = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] parseWebMsgInfoPollUpdates failed: ",
                      " ",
                      "",
                    ])),
                  p == null ? void 0 : p.name,
                  p == null ? void 0 : p.stack,
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
