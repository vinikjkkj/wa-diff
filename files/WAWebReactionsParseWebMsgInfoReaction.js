__d(
  "WAWebReactionsParseWebMsgInfoReaction",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebE2EProtoUtils",
    "WAWebProtobufsWeb.pb",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      var a = [];
      try {
        var i;
        if (t == null || n == null) return a;
        var l = [];
        if (((i = t.messageAddOns) == null ? void 0 : i.length) > 0) {
          for (var c of t.messageAddOns)
            if (
              c.messageAddOnType ===
              o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.REACTION
            ) {
              var d,
                m = (d = c.messageAddOn) == null ? void 0 : d.reactionMessage;
              m != null &&
                l.push({
                  key: r("WANullthrows")(c.messageAddOnKey),
                  senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
                    r("WANullthrows")(m.senderTimestampMs),
                  ),
                  text: m.text,
                  unread:
                    c.status !==
                    o("WAWebProtobufsWeb.pb").WebMessageInfo$Status.READ,
                });
            }
        } else
          t.reactions != null &&
            n.reactions != null &&
            l.push.apply(l, n.reactions);
        var p = 0,
          _ = 0;
        (l.forEach(function (e) {
          var t = e.key,
            i = e.senderTimestampMs,
            l = e.text,
            s = e.unread,
            u = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              l != null ? l : "",
            ),
            c = r("WANullthrows")(
              o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey(t),
            ),
            d = c.msgKey,
            m = c.sender;
          m == null || !(m instanceof r("WAWebWid"))
            ? p++
            : u == null
              ? _++
              : a.push({
                  id: d,
                  reactionTimestamp: i,
                  reactionText: u,
                  reactionParentKey: n.id,
                  sender: o("WAWebWidFactory").createWid(m.toString()),
                  unread: d.fromMe ? !1 : s === !0,
                });
        }),
          p > 0 &&
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[parseWebMsgInfoReaction] invalid sender cnt=",
                  "",
                ])),
              p,
            ),
          _ > 0 &&
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[parseWebMsgInfoReaction] null text cnt=",
                  "",
                ])),
              _,
            ));
      } catch (e) {
        var f = r("getErrorSafe")(e);
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[parseWebMsgInfoReaction] failed err=",
              " stack=",
              "",
            ])),
          f == null ? void 0 : f.name,
          f == null ? void 0 : f.stack,
        );
      }
      return a;
    }
    l.parseWebMsgInfoReaction = c;
  },
  98,
);
