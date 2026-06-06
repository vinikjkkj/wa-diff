__d(
  "WAWebSendGroupDirectJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebMsgFanoutTypes",
    "WAWebResendGroupMsg",
    "WAWebSendDirectMsgToDeviceList",
    "cr:10198",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n, r, a, i, l) {
      var d = t.data.to;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendGroupDirectMsg: sending ",
              " with group ",
              "",
            ])),
          t.data.id,
          d.toLogString(),
        )
        .tags("messaging");
      var m = await o(
          "WAWebSendDirectMsgToDeviceList",
        ).sendDirectMsgToDeviceList({
          deviceList: r,
          groupData: a,
          metricReporter: i,
          msgProtobuf: n,
          msgRecord: t,
          option: {
            fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
          },
          scheduledMsgMetadata: l,
        }),
        p = m.addressingMode,
        _ = m.phash;
      return (
        _ &&
          (o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[encryptAndSendGroupDirectMsg] phash mismatch, server: ",
                  "",
                ])),
              _,
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
              phash: _,
              metricReporter: i,
              serverAddressingMode: p,
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
        m
      );
    }
    l.encryptAndSendGroupDirectMsg = d;
  },
  98,
);
