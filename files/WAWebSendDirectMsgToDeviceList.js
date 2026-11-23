__d(
  "WAWebSendDirectMsgToDeviceList",
  [
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMessageDistributionEnumType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n,
        a,
        i,
        l,
        s = e.ackParticipant,
        u = e.additionalBotBody,
        c = e.additionalBotShouldHaveIdentity,
        d = e.deviceList,
        m = e.groupData,
        p = e.metricReporter,
        _ = e.msgProtobuf,
        f = e.msgRecord,
        g = e.option,
        h = e.scheduledMsgMetadata,
        y = f.data,
        C = y.id,
        b = y.to,
        v = f.data.to,
        S = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
          additionalBotBody: u,
          additionalBotShouldHaveIdentity: c,
          chatId: v,
          deviceList: d,
          groupData: m,
          metricReporter: p,
          msgProtobuf: _,
          msgRecord: f,
          option: g,
          scheduledMsgMetadata: h,
        }),
        R = S.stanza;
      (await o("WAWebSignalProtocolStore")
        .getSignalProtocolStore()
        .flushBufferToDiskIfNotMemOnlyMode(),
        (t = p.sendPerfReporter) == null || t.postReadyToSendStage(),
        (n = p.sendPerfReporter) == null || n.startWrittenWireStage());
      var L = await o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndReturnAck(
          R,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: C.id,
            class: "message",
            from: b,
            participant: s,
          }),
        ),
        E = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(L);
      return E.error
        ? Promise.reject(
            r("err")(
              "[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server",
            ),
          )
        : ((a = p.sendReporter) == null ||
            a.setMessageDistributionType(
              o("WAWebWamEnumMessageDistributionEnumType")
                .MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE,
            ),
          (i = p.sendPerfReporter) == null || i.postWrittenWireStage(),
          (p.sendPerfReporter = null),
          (l = p.sendReporter) == null || l.postSuccess(),
          (p.sendReporter = null),
          E.success);
    }
    l.sendDirectMsgToDeviceList = e;
  },
  98,
);
