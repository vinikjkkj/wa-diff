__d(
  "WAWebHandleMsgSendAck",
  [
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebCreateNackFromStanza",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.externalId,
        n = e.from,
        r = e.participant,
        a = e.stanzaClass,
        i = e.type;
      o("WADeprecatedSendIq").deprecatedCastStanza(
        o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(t),
          class: o("WAWap").CUSTOM_STRING(a != null ? a : "message"),
          to: n ? o("WAWebCommsWapMd").JID(n) : o("WAWap").DROP_ATTR,
          participant: r
            ? o("WAWebCommsWapMd").DEVICE_JID(r)
            : o("WAWap").DROP_ATTR,
          type: i != null ? i : o("WAWap").DROP_ATTR,
        }),
      );
    }
    function u(t, n, r, a, i, l, s) {
      var u = null;
      (i === o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf &&
        (l != null
          ? (u = o("WAWap").wap("meta", { failure_reason: o("WAWap").INT(l) }))
          : o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendNack: InvalidProtobuf error is missing e2eFailureReason",
                  ])),
              )
              .sendLogs("invalid-protobuf-nack-missing-failure-reason")),
        o("WADeprecatedSendIq").deprecatedCastStanza(
          o("WAWap").wap(
            "ack",
            {
              id: o("WAWap").CUSTOM_STRING(t),
              class: o("WAWap").CUSTOM_STRING(s != null ? s : "message"),
              to: n ? o("WAWebCommsWapMd").JID(n) : o("WAWap").DROP_ATTR,
              participant: a
                ? o("WAWebCommsWapMd").DEVICE_JID(a)
                : o("WAWap").DROP_ATTR,
              type: r != null ? r : o("WAWap").DROP_ATTR,
              error: o("WAWap").INT(i),
            },
            u,
          ),
        ));
    }
    ((l.sendAck = s), (l.sendNack = u));
  },
  98,
);
