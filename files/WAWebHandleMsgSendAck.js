__d(
  "WAWebHandleMsgSendAck",
  [
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebCreateNackFromStanza",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r) {
      o("WADeprecatedSendIq").deprecatedCastStanza(
        o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(e),
          class: "message",
          from: o("WAWebCommsWapMd").DEVICE_JID(
            o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
          ),
          to: t ? o("WAWebCommsWapMd").JID(t) : o("WAWap").DROP_ATTR,
          participant: r
            ? o("WAWebCommsWapMd").DEVICE_JID(r)
            : o("WAWap").DROP_ATTR,
          type: n != null ? n : o("WAWap").DROP_ATTR,
        }),
      );
    }
    function u(t, n, r, a, i, l) {
      var s = null;
      (i === o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf &&
        (l != null
          ? (s = o("WAWap").wap("meta", { failure_reason: o("WAWap").INT(l) }))
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
              class: "message",
              from: o("WAWebCommsWapMd").DEVICE_JID(
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              ),
              to: n ? o("WAWebCommsWapMd").JID(n) : o("WAWap").DROP_ATTR,
              participant: a
                ? o("WAWebCommsWapMd").DEVICE_JID(a)
                : o("WAWap").DROP_ATTR,
              type: r != null ? r : o("WAWap").DROP_ATTR,
              error: o("WAWap").INT(i),
            },
            s,
          ),
        ));
    }
    ((l.sendAck = s), (l.sendNack = u));
  },
  98,
);
