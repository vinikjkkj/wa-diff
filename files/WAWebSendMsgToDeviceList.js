__d(
  "WAWebSendMsgToDeviceList",
  [
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            s = e.aeaBaseline,
            u = e.chatId,
            c = e.deviceWids,
            d = e.metricReporter,
            m = e.msgProtobuf,
            p = e.msgRecord,
            _ = e.option,
            f = e.scheduledMsgMetadata;
          (t = d.sendPerfReporter) == null || t.startReadyToSendStage();
          var g = p.data,
            h = g.id,
            y = g.to,
            C = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
              {
                aeaBaseline: s,
                chatId: u,
                deviceList: c,
                metricReporter: d,
                msgProtobuf: m,
                msgRecord: p,
                option: _,
                scheduledMsgMetadata: f,
              },
            ),
            b = C.stanza;
          ((n = d.sendPerfReporter) == null || n.postReadyToSendStage(),
            (a = d.sendPerfReporter) == null || a.startWrittenWireStage());
          var v = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              b,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: h.id,
                class: "message",
                from: y,
                participant: null,
              }),
            ),
            S = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(v);
          if (S.error)
            throw r("err")(
              "[messaging] sendMsgToDeviceList: Invalid ack from server",
            );
          return (
            (i = d.sendPerfReporter) == null || i.postWrittenWireStage(),
            (d.sendPerfReporter = null),
            (l = d.sendReporter) == null || l.postSuccess(),
            (d.sendReporter = null),
            S.success
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendMsgToDeviceList = e;
  },
  98,
);
