__d(
  "WAWebSendMsgToDeviceList",
  [
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
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
        C = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
          aeaBaseline: s,
          chatId: u,
          deviceList: c,
          metricReporter: d,
          msgProtobuf: m,
          msgRecord: p,
          option: _,
          scheduledMsgMetadata: f,
        }),
        b = C.stanza;
      ((n = d.sendPerfReporter) == null || n.postReadyToSendStage(),
        (a = d.sendPerfReporter) == null || a.startWrittenWireStage());
      var v = await o(
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
    }
    l.sendMsgToDeviceList = e;
  },
  98,
);
