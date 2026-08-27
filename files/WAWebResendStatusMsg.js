__d(
  "WAWebResendStatusMsg",
  [
    "WALogger",
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = t.msgRecord,
            a = t.participant,
            i = t.sessionScope,
            l = t.to,
            u = C(a);
          u == null &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: no LID for PN, using PN",
                  ])),
              )
              .sendLogs("status-retry-participant-without-lid-legacy");
          var c = yield h(t, u != null ? u : a),
            d = c.authorId,
            m = c.participantList,
            p = c.skDistribList,
            _ = r.data.id,
            f = yield o("WAWebEncryptAndSendStatusMsg").genMessageBody(
              l,
              d,
              p,
              m,
              n,
              i,
            ),
            g = f[0],
            y = f[1],
            b = f[2],
            v = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              r.data,
              n,
            ),
            S = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(_.id),
                to: o("WAWebCommsWapMd").CHAT_JID(l),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  n,
                  r.data.subtype,
                ),
              },
              g,
              y,
              b,
              o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
                sessionScope: i,
              }),
              v,
            ),
            R = o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(S);
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: built retry stanza for msgId ",
                    "",
                  ])),
                _.id,
              )
              .tags("messaging"),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            { stanza: S, stanzaClass: R }
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = e.msgRecord,
            a = e.participant,
            i = e.sessionScope,
            l = e.to,
            s = C(a);
          if (s == null)
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "sendStatusRetryMsgViaSmax: dropping the retry, the requesting device has no LID",
                    ])),
                )
                .sendLogs("status-retry-participant-without-lid"),
              r("err")(
                "sendStatusRetryMsgViaSmax: retry participant has no LID",
              )
            );
          var d = yield h(e, s),
            m = d.authorId,
            p = d.participantList,
            _ = d.skDistribList,
            f = n.data.id,
            g = yield o(
              "WAWebEncryptAndSendStatusMsg",
            ).genStatusBroadcastPublishRequest({
              authorId: m,
              msgProtobuf: t,
              participantList: p,
              sendMsgRecord: n,
              sessionScope: i,
              skDistribList: _,
              statusSetting: null,
              to: l,
            });
          return (
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "sendStatusRetryMsgViaSmax: sending ",
                    " to ",
                    "",
                  ])),
                f.id,
                l.toString(),
              )
              .tags("messaging"),
            o("WAWebEncryptAndSendStatusMsg").sendStatusPublishOrThrow(g)
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.deviceMsgType,
            a = e.msgRecord,
            i = e.sessionScope;
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope: i,
            wids: [t],
          });
          var l = a.data.id,
            s = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "prepareStatusRetryRecipients: id ",
                  " to ",
                  ", count: ",
                  "",
                ])),
              l.id,
              t.toLogString(),
              n.retryCount,
            )
            .tags("messaging");
          var u = yield r("WAWebUserPrefsStatus").getStatusSkDistribList([t], {
              isFullAudience: !1,
            }),
            c = u.participantList,
            p = u.skDistribList;
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[prepareStatusRetryRecipients] skDistrib=",
                  " participants=",
                  "",
                ])),
              p.length,
              c.length,
            ),
            { authorId: s, participantList: c, skDistribList: p }
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t;
      if (e.isLid()) return e;
      var n = o("WAWebLidMigrationUtils").toLid(
        o("WAWebWidFactory").asUserWidOrThrow(e),
      );
      return n != null
        ? o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
            n.user,
            n.server,
            (t = e.device) != null ? t : 0,
          )
        : null;
    }
    ((l.createStatusDeviceMsgStanza = p), (l.sendStatusRetryMsgViaSmax = f));
  },
  98,
);
