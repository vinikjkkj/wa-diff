__d(
  "WAWebSendMsgToDeviceList",
  [
    "WADeprecatedSendIq",
    "WAWebCommsAckParser",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, a, i, l, s) {
      var u, c, d, m, p;
      (u = i.sendPerfReporter) == null || u.startReadyToSendStage();
      var _ = e.data,
        f = _.id,
        g = _.to,
        h = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
          e,
          t,
          n,
          a,
          i,
          l,
          void 0,
          s,
        ),
        y = h.stanza;
      ((c = i.sendPerfReporter) == null || c.postReadyToSendStage(),
        (d = i.sendPerfReporter) == null || d.startWrittenWireStage());
      var C = await o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
          y,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: f.id,
            class: "message",
            from: g,
            participant: null,
          }),
        ),
        b = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(C);
      if (b.error)
        throw r("err")(
          "[messaging] sendMsgToDeviceList: Invalid ack from server",
        );
      return (
        (m = i.sendPerfReporter) == null || m.postWrittenWireStage(),
        (i.sendPerfReporter = null),
        (p = i.sendReporter) == null || p.postSuccess(),
        (i.sendReporter = null),
        b.success
      );
    }
    l.sendMsgToDeviceList = e;
  },
  98,
);
