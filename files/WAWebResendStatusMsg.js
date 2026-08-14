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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = t.msgRecord,
            a = t.sessionScope,
            i = t.to,
            l = yield p(t),
            s = l.authorId,
            u = l.participantList,
            c = l.skDistribList,
            d = r.data.id,
            m = yield o("WAWebEncryptAndSendStatusMsg").genMessageBody(
              i,
              s,
              c,
              u,
              n,
              a,
            ),
            _ = m[0],
            f = m[1],
            g = m[2],
            h = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              r.data,
              n,
            ),
            y = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(d.id),
                to: o("WAWebCommsWapMd").CHAT_JID(i),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  n,
                  r.data.subtype,
                ),
              },
              _,
              f,
              g,
              h,
            ),
            C = o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(y);
          return (
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: built retry stanza for msgId ",
                    "",
                  ])),
                d.id,
              )
              .tags("messaging"),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            { stanza: y, stanzaClass: C }
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceMsgType,
            n = e.msgRecord,
            a = e.participant,
            i = e.sessionScope,
            l = f(a);
          l == null &&
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[prepareStatusRetryRecipients] no LID for PN, using PN",
                ])),
            );
          var d = l != null ? l : a;
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope: i,
            wids: [d],
          });
          var m = n.data.id,
            p = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "prepareStatusRetryRecipients: id ",
                  " to ",
                  ", count: ",
                  "",
                ])),
              m.id,
              d.toLogString(),
              t.retryCount,
            )
            .tags("messaging");
          var _ = yield r("WAWebUserPrefsStatus").getStatusSkDistribList([d], {
              isFullAudience: !1,
            }),
            g = _.participantList,
            h = _.skDistribList;
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[prepareStatusRetryRecipients] skDistrib=",
                  " participants=",
                  "",
                ])),
              h.length,
              g.length,
            ),
            { authorId: p, participantList: g, skDistribList: h }
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    l.createStatusDeviceMsgStanza = d;
  },
  98,
);
