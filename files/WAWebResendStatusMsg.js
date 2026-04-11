__d(
  "WAWebResendStatusMsg",
  [
    "WALogger",
    "WANullthrows",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.deviceMsgType,
            a = t.msgProtobuf,
            i = t.msgRecord,
            l = t.participant,
            d = t.sessionScope,
            m = t.to,
            p = l;
          if (!l.isLid()) {
            var _ = o("WAWebLidMigrationUtils").toLid(
              o("WAWebWidFactory").asUserWidOrThrow(l),
            );
            if (_ != null) {
              var f;
              p = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                _.user,
                _.server,
                (f = l.device) != null ? f : 0,
              );
            } else
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[createStatusDeviceMsgStanza] no LID for PN, using PN",
                  ])),
              );
          }
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions([p], !1, d);
          var g = i.data.id,
            h = r("WANullthrows")(
              o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
            );
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "createStatusDeviceMsgStanza: id ",
                  " to ",
                  ", count: ",
                  "",
                ])),
              g.id,
              p.toString(),
              n.retryCount,
            )
            .tags("messaging");
          var y = yield r("WAWebUserPrefsStatus").getStatusSkDistribList([p]),
            C = y.participantList,
            b = y.skDistribList;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[createStatusDeviceMsgStanza] skDistrib=",
                " participants=",
                "",
              ])),
            b.length,
            C.length,
          );
          var v = yield o("WAWebEncryptAndSendStatusMsg").genMessageBody(
              m,
              h,
              b,
              C,
              a,
              d,
            ),
            S = v[0],
            R = v[1],
            L = v[2],
            E = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              i.data,
              a,
            ),
            k = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(g.id),
                to: o("WAWebCommsWapMd").CHAT_JID(m),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(a),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  a,
                  i.data.subtype,
                ),
              },
              S,
              R,
              L,
              E,
            );
          return (
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: built retry stanza for msgId ",
                    "",
                  ])),
                g.id,
              )
              .tags("messaging"),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            k
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.createStatusDeviceMsgStanza = d;
  },
  98,
);
