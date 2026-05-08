__d(
  "WAWebSendDirectMsgToDeviceList",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WAWebCommsAckParser",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMessageDistributionEnumType",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r, o, a, i) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s, u, c) {
            var d,
              m,
              p,
              _,
              f,
              g = t.data,
              h = g.id,
              y = g.to,
              C = t.data.to,
              b = yield o(
                "WAWebSendMsgCreateFanoutStanza",
              ).createFanoutMsgStanza(t, a, i, l, u, C, s, c),
              v = b.stanza;
            (yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
              (d = u.sendPerfReporter) == null || d.postReadyToSendStage(),
              (m = u.sendPerfReporter) == null || m.startWrittenWireStage());
            var S = yield o(
                "WADeprecatedSendIq",
              ).deprecatedSendStanzaAndReturnAck(
                v,
                o("WAWebCommsAckParser").toCoreAckTemplate({
                  id: h.id,
                  class: "message",
                  from: y,
                  participant: null,
                }),
              ),
              R = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(S);
            return R.error
              ? (e || (e = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server",
                  ),
                )
              : ((p = u.sendReporter) == null ||
                  p.setMessageDistributionType(
                    o("WAWebWamEnumMessageDistributionEnumType")
                      .MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE,
                  ),
                (_ = u.sendPerfReporter) == null || _.postWrittenWireStage(),
                (u.sendPerfReporter = null),
                (f = u.sendReporter) == null || f.postSuccess(),
                (u.sendReporter = null),
                R.success);
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.sendDirectMsgToDeviceList = s;
  },
  98,
);
