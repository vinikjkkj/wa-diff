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
            c = t.deviceList,
            d = t.groupData,
            m = t.metricReporter,
            p = t.msgProtobuf,
            _ = t.msgRecord,
            f = t.option,
            g = t.scheduledMsgMetadata,
            h = _.data,
            y = h.id,
            C = h.to,
            b = _.data.to,
            v = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
              {
                chatId: b,
                deviceList: c,
                groupData: d,
                metricReporter: m,
                msgProtobuf: p,
                msgRecord: _,
                option: f,
                scheduledMsgMetadata: g,
              },
            ),
            S = v.stanza;
          (yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
            (a = m.sendPerfReporter) == null || a.postReadyToSendStage(),
            (i = m.sendPerfReporter) == null || i.startWrittenWireStage());
          var R = yield o(
              "WADeprecatedSendIq",
            ).deprecatedSendStanzaAndReturnAck(
              S,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: y.id,
                class: "message",
                from: C,
                participant: null,
              }),
            ),
            L = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(R);
          return L.error
            ? (e || (e = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server",
                ),
              )
            : ((l = m.sendReporter) == null ||
                l.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE,
                ),
              (s = m.sendPerfReporter) == null || s.postWrittenWireStage(),
              (m.sendPerfReporter = null),
              (u = m.sendReporter) == null || u.postSuccess(),
              (m.sendReporter = null),
              L.success);
        })),
        u.apply(this, arguments)
      );
    }
    l.sendDirectMsgToDeviceList = s;
  },
  98,
);
