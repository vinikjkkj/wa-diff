__d(
  "WAWebParseProtocolAdminRevokeMessageProto",
  ["WAWebAck", "WAWebProtocolRevokeMessageUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.editAttr,
        r = e.messageProtobuf,
        a = e.msgContext,
        i = e.msgMeta;
      if (n === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE)
        return o(
          "WAWebProtocolRevokeMessageUtils",
        ).parseProtocolRevokeMessageProto({
          messageProtobuf: r,
          baseMessage: t,
          editAttr: n,
          msgContext: a,
          msgMeta: i,
        });
    }
    l.default = e;
  },
  98,
);
