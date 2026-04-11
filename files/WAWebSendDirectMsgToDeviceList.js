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
    function s(e, t, n, r, o, a) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s, u) {
            var c,
              d,
              m,
              p,
              _,
              f = t.data,
              g = f.id,
              h = f.to,
              y = t.data.to,
              C = yield o(
                "WAWebSendMsgCreateFanoutStanza",
              ).createFanoutMsgStanza(t, a, i, l, u, y, s),
              b = C.stanza;
            (yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
              (c = u.sendPerfReporter) == null || c.postReadyToSendStage(),
              (d = u.sendPerfReporter) == null || d.startWrittenWireStage());
            var v = yield o(
                "WADeprecatedSendIq",
              ).deprecatedSendStanzaAndReturnAck(
                b,
                o("WAWebCommsAckParser").toCoreAckTemplate({
                  id: g.id,
                  class: "message",
                  from: h,
                  participant: null,
                }),
              ),
              S = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(v);
            return S.error
              ? (e || (e = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server",
                  ),
                )
              : ((m = u.sendReporter) == null ||
                  m.setMessageDistributionType(
                    o("WAWebWamEnumMessageDistributionEnumType")
                      .MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE,
                  ),
                (p = u.sendPerfReporter) == null || p.postWrittenWireStage(),
                (u.sendPerfReporter = null),
                (_ = u.sendReporter) == null || _.postSuccess(),
                (u.sendReporter = null),
                S.success);
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.sendDirectMsgToDeviceList = s;
  },
  98,
);
