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
          var n = t.additionalBotBody,
            r = t.additionalBotShouldHaveIdentity,
            a = t.deviceList,
            i = t.groupData,
            l = t.metricReporter,
            d = t.msgProtobuf,
            m = t.msgRecord,
            p = t.scheduledMsgMetadata,
            _ = m.data.to;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendGroupDirectMsg: sending ",
                  " with group ",
                  "",
                ])),
              m.data.id,
              _.toLogString(),
            )
            .tags("messaging");
          var f = a.filter(function (e) {
              return !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e);
            }),
            g = yield o(
              "WAWebSendDirectMsgToDeviceList",
            ).sendDirectMsgToDeviceList({
              additionalBotBody: n,
              additionalBotShouldHaveIdentity: r,
              deviceList: f,
              groupData: i,
              metricReporter: l,
              msgProtobuf: d,
              msgRecord: m,
              option: {
                fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
              },
              scheduledMsgMetadata: p,
            }),
            h = g.addressingMode,
            y = g.phash;
          return (
            y != null &&
              y !== "" &&
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[encryptAndSendGroupDirectMsg] phash mismatch, server: ",
                      "",
                    ])),
                  y,
                )
                .tags("messaging"),
              o("WAWebResendGroupMsg")
                .resendPersistedGroupMsgWrapper({
                  isDirect: !0,
                  msgRecord: m,
                  msgProtobuf: d,
                  oldList: f,
                  ackTime: o("WATimeUtils").unixTime(),
                  groupData: i,
                  phash: y,
                  metricReporter: l,
                  serverAddressingMode: h,
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
                      m.data.id.toString(),
                      m.data.type,
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
            g
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.encryptAndSendGroupDirectMsg = d;
  },
  98,
);
