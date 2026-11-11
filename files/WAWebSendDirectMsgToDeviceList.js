__d(
  "WAWebSendDirectMsgToDeviceList",
  [
    "Promise",
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMessageDistributionEnumType",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l,
            s,
            u,
            c = t.ackParticipant,
            d = t.additionalBotBody,
            m = t.additionalBotShouldHaveIdentity,
            p = t.deviceList,
            _ = t.groupData,
            f = t.metricReporter,
            g = t.msgProtobuf,
            h = t.msgRecord,
            y = t.option,
            C = t.scheduledMsgMetadata,
            b = h.data,
            v = b.id,
            S = b.to,
            R = h.data.to,
            L = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
              {
                additionalBotBody: d,
                additionalBotShouldHaveIdentity: m,
                chatId: R,
                deviceList: p,
                groupData: _,
                metricReporter: f,
                msgProtobuf: g,
                msgRecord: h,
                option: y,
                scheduledMsgMetadata: C,
              },
            ),
            E = L.stanza;
          (yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
            (a = f.sendPerfReporter) == null || a.postReadyToSendStage(),
            (i = f.sendPerfReporter) == null || i.startWrittenWireStage());
          var k = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              E,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: v.id,
                class: "message",
                from: S,
                participant: c,
              }),
            ),
            I = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(k);
          return I.error
            ? (e || (e = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server",
                ),
              )
            : ((l = f.sendReporter) == null ||
                l.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE,
                ),
              (s = f.sendPerfReporter) == null || s.postWrittenWireStage(),
              (f.sendPerfReporter = null),
              (u = f.sendReporter) == null || u.postSuccess(),
              (f.sendReporter = null),
              I.success);
        })),
        u.apply(this, arguments)
      );
    }
    l.sendDirectMsgToDeviceList = s;
  },
  98,
);
