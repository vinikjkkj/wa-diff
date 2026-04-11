__d(
  "WAWebPinMsgParseWebMsgInfoPinInChat",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return e ===
        o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL
        ? o("WAWebProtobufsWeb.pb").PinInChat$Type.PIN_FOR_ALL
        : e ===
            o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
              .UNPIN_FOR_ALL
          ? o("WAWebProtobufsWeb.pb").PinInChat$Type.UNPIN_FOR_ALL
          : e ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .UNKNOWN_TYPE
            ? o("WAWebProtobufsWeb.pb").PinInChat$Type.UNKNOWN_TYPE
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function c(t, n) {
      var a = [];
      try {
        var i;
        if (t == null || n == null) return a;
        var l = [];
        if (t.pinInChat != null && n.pinInChat != null) l.push(n.pinInChat);
        else if (((i = t.messageAddOns) == null ? void 0 : i.length) > 0) {
          for (var c of t.messageAddOns)
            if (
              c.messageAddOnType ===
              o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType
                .PIN_IN_CHAT
            ) {
              var d,
                m = (d = c.messageAddOn) == null ? void 0 : d.pinInChatMessage;
              m != null &&
                l.push({
                  key: m.key,
                  type: u(r("WANullthrows")(m.type)),
                  senderTimestampMs: c.senderTimestampMs,
                  serverTimestampMs: c.serverTimestampMs,
                  messageAddOnContextInfo: c.addOnContextInfo,
                });
            }
        }
        for (var p of l) {
          var _ = p.key,
            f = p.messageAddOnContextInfo,
            g = p.senderTimestampMs,
            h = p.serverTimestampMs,
            y = p.type,
            C = r("WANullthrows")(
              o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey(
                r("WANullthrows")(_),
              ),
            ),
            b = C.msgKey,
            v = C.sender;
          if (v == null)
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseWebMsgInfoPinInChat: pinInChat sender should be a wid.",
                ])),
            );
          else {
            var S;
            a.push({
              msgKey: b,
              parentMsgKey: n.id,
              chatId: o("WAWebWidFactory").asChatWid(b.remote),
              senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                r("WANullthrows")(g),
              ),
              t:
                (S = o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(
                  h,
                )) != null
                  ? S
                  : void 0,
              pinType: r("WANullthrows")(y),
              sender: v,
              pinExpiryDuration:
                f == null ? void 0 : f.messageAddOnDurationInSecs,
            });
          }
        }
      } catch (e) {
        var R = r("getErrorSafe")(e);
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] parseWebMsgInfoPinInChat err=",
              " stack=",
              "",
            ])),
          R == null ? void 0 : R.name,
          R == null ? void 0 : R.stack,
        );
      }
      return a;
    }
    l.parseWebMsgInfoPinInChat = c;
  },
  98,
);
