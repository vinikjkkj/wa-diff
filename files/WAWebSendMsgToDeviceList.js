__d(
  "WAWebSendMsgToDeviceList",
  [
    "WADeprecatedSendIq",
    "WAWebCommsAckParser",
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
            s = e.chatId,
            u = e.deviceWids,
            c = e.metricReporter,
            d = e.msgProtobuf,
            m = e.msgRecord,
            p = e.option,
            _ = e.scheduledMsgMetadata;
          (t = c.sendPerfReporter) == null || t.startReadyToSendStage();
          var f = m.data,
            g = f.id,
            h = f.to,
            y = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
              {
                chatId: s,
                deviceList: u,
                metricReporter: c,
                msgProtobuf: d,
                msgRecord: m,
                option: p,
                scheduledMsgMetadata: _,
              },
            ),
            C = y.stanza;
          ((n = c.sendPerfReporter) == null || n.postReadyToSendStage(),
            (a = c.sendPerfReporter) == null || a.startWrittenWireStage());
          var b = yield o(
              "WADeprecatedSendIq",
            ).deprecatedSendStanzaAndReturnAck(
              C,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: g.id,
                class: "message",
                from: h,
                participant: null,
              }),
            ),
            v = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(b);
          if (v.error)
            throw r("err")(
              "[messaging] sendMsgToDeviceList: Invalid ack from server",
            );
          return (
            (i = c.sendPerfReporter) == null || i.postWrittenWireStage(),
            (c.sendPerfReporter = null),
            (l = c.sendReporter) == null || l.postSuccess(),
            (c.sendReporter = null),
            v.success
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendMsgToDeviceList = e;
  },
  98,
);
