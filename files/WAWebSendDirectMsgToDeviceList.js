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
            c = t.additionalBotBody,
            d = t.additionalBotShouldHaveIdentity,
            m = t.deviceList,
            p = t.groupData,
            _ = t.metricReporter,
            f = t.msgProtobuf,
            g = t.msgRecord,
            h = t.option,
            y = t.scheduledMsgMetadata,
            C = g.data,
            b = C.id,
            v = C.to,
            S = g.data.to,
            R = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
              {
                additionalBotBody: c,
                additionalBotShouldHaveIdentity: d,
                chatId: S,
                deviceList: m,
                groupData: p,
                metricReporter: _,
                msgProtobuf: f,
                msgRecord: g,
                option: h,
                scheduledMsgMetadata: y,
              },
            ),
            L = R.stanza;
          (yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
            (a = _.sendPerfReporter) == null || a.postReadyToSendStage(),
            (i = _.sendPerfReporter) == null || i.startWrittenWireStage());
          var E = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              L,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: b.id,
                class: "message",
                from: v,
                participant: null,
              }),
            ),
            k = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(E);
          return k.error
            ? (e || (e = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server",
                ),
              )
            : ((l = _.sendReporter) == null ||
                l.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE,
                ),
              (s = _.sendPerfReporter) == null || s.postWrittenWireStage(),
              (_.sendPerfReporter = null),
              (u = _.sendReporter) == null || u.postSuccess(),
              (_.sendReporter = null),
              k.success);
        })),
        u.apply(this, arguments)
      );
    }
    l.sendDirectMsgToDeviceList = s;
  },
  98,
);
