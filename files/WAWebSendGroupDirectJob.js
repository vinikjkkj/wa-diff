__d(
  "WAWebSendGroupDirectJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebMsgFanoutTypes",
    "WAWebResendGroupMsg",
    "WAWebSendDirectMsgToDeviceList",
    "asyncToGeneratorRuntime",
    "cr:10198",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r, o) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = t.data.to;
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupDirectMsg: sending ",
                    " with group ",
                    "",
                  ])),
                t.data.id,
                l.toLogString(),
              )
              .tags("messaging");
            var d = yield o(
                "WAWebSendDirectMsgToDeviceList",
              ).sendDirectMsgToDeviceList(
                t,
                n,
                r,
                {
                  fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                },
                a,
                i,
              ),
              m = d.addressingMode,
              p = d.phash;
            return (
              p &&
                (o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[encryptAndSendGroupDirectMsg] phash mismatch, server: ",
                        "",
                      ])),
                    p,
                  )
                  .tags("messaging"),
                o("WAWebResendGroupMsg")
                  .resendPersistedGroupMsgWrapper({
                    isDirect: !0,
                    msgRecord: t,
                    msgProtobuf: n,
                    oldList: r,
                    ackTime: o("WATimeUtils").unixTime(),
                    groupData: a,
                    phash: p,
                    metricReporter: i,
                    serverAddressingMode: m,
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
                        t.data.id.toString(),
                        t.data.type,
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
              d
            );
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.encryptAndSendGroupDirectMsg = d;
  },
  98,
);
