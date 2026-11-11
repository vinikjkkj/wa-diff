__d(
  "WAWebSendGroupDirectJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebMsgFanoutTypes",
    "WAWebResendGroupMsg",
    "WAWebSendDirectMsgToDeviceList",
    "asyncToGeneratorRuntime",
    "cr:10198",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ackParticipant,
            r = t.additionalBotBody,
            a = t.additionalBotShouldHaveIdentity,
            i = t.deviceList,
            l = t.groupData,
            d = t.metricReporter,
            m = t.msgProtobuf,
            p = t.msgRecord,
            _ = t.scheduledMsgMetadata,
            f = t.sessionScope,
            g = p.data.to;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendGroupDirectMsg: sending ",
                  " with group ",
                  "",
                ])),
              p.data.id,
              g.toLogString(),
            )
            .tags("messaging");
          var h = i.filter(function (e) {
              return !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e);
            }),
            y = yield o(
              "WAWebSendDirectMsgToDeviceList",
            ).sendDirectMsgToDeviceList({
              ackParticipant: n,
              additionalBotBody: r,
              additionalBotShouldHaveIdentity: a,
              deviceList: h,
              groupData: l,
              metricReporter: d,
              msgProtobuf: m,
              msgRecord: p,
              option: {
                fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                sessionScope: f,
              },
              scheduledMsgMetadata: _,
            }),
            C = y.addressingMode,
            b = y.phash;
          return (
            b != null &&
              b !== "" &&
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[encryptAndSendGroupDirectMsg] phash mismatch, server: ",
                      "",
                    ])),
                  b,
                )
                .tags("messaging"),
              o("WAWebResendGroupMsg")
                .resendPersistedGroupMsgWrapper({
                  isDirect: !0,
                  msgRecord: p,
                  msgProtobuf: m,
                  oldList: h,
                  ackTime: o("WATimeUtils").unixTime(),
                  groupData: l,
                  phash: b,
                  metricReporter: d,
                  serverAddressingMode: C,
                })
                .catch(function (e) {
                  (o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "resendGroupDirectMsg: failed to resend group msg: ",
                          ", type: ",
                          "",
                        ])),
                      p.data.id.toString(),
                      p.data.type,
                    )
                    .tags("messaging"),
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "resendGroupDirectMsg: failed to resend group msg: ",
                            "",
                          ])),
                        e,
                      )
                      .tags("messaging")
                      .sendLogs("message-resend-failed", { sampling: 0.01 }));
                })),
            y
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.encryptAndSendGroupDirectMsg = d;
  },
  98,
);
