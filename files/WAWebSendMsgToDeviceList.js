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
    function e(e, t, n, r, o, a) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s, u, c, d, m;
            (s = i.sendPerfReporter) == null || s.startReadyToSendStage();
            var p = e.data,
              _ = p.id,
              f = p.to,
              g = yield o(
                "WAWebSendMsgCreateFanoutStanza",
              ).createFanoutMsgStanza(e, t, n, a, i, l),
              h = g.stanza;
            ((u = i.sendPerfReporter) == null || u.postReadyToSendStage(),
              (c = i.sendPerfReporter) == null || c.startWrittenWireStage());
            var y = yield o(
                "WADeprecatedSendIq",
              ).deprecatedSendStanzaAndReturnAck(
                h,
                o("WAWebCommsAckParser").toCoreAckTemplate({
                  id: _.id,
                  class: "message",
                  from: f,
                  participant: null,
                }),
              ),
              C = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(y);
            if (C.error)
              throw r("err")(
                "[messaging] sendMsgToDeviceList: Invalid ack from server",
              );
            return (
              (d = i.sendPerfReporter) == null || d.postWrittenWireStage(),
              (i.sendPerfReporter = null),
              (m = i.sendReporter) == null || m.postSuccess(),
              (i.sendReporter = null),
              C.success
            );
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.sendMsgToDeviceList = e;
  },
  98,
);
