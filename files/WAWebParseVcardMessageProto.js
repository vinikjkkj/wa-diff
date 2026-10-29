__d(
  "WAWebParseVcardMessageProto",
  ["WALogger", "WAWebMsgType", "WAWebParseBusinessInteractionPills"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.contactMessage;
      if (r != null) {
        var a = r.contextInfo,
          i = r.displayName,
          l = r.vcard,
          s = u(a),
          c = babelHelpers.extends(
            {},
            t,
            {
              type: o("WAWebMsgType").MSG_TYPE.VCARD,
              kind: o("WAWebMsgType").MsgKind.Vcard,
              body: l,
              vcardFormattedName: i,
            },
            s != null ? { businessInteractionPills: s } : null,
          );
        return { msgData: c, contextInfo: a };
      }
    }
    function u(t) {
      var n = t == null ? void 0 : t.businessInteractionPills;
      if (n == null) return null;
      try {
        return o(
          "WAWebParseBusinessInteractionPills",
        ).parseBusinessInteractionPills(n);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseVcardMessageProto: failed to parse business interaction pills",
                ])),
            )
            .sendLogs("parse-business-interaction-pills-failed"),
          null
        );
      }
    }
    l.default = s;
  },
  98,
);
