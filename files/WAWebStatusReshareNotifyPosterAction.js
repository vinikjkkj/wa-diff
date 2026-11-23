__d(
  "WAWebStatusReshareNotifyPosterAction",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBackendRuntime",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBDeviceListFanout",
    "WAWebDBProcessMessage",
    "WAWebE2EProtoUtils",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebHandleMsgError",
    "WAWebLidMigrationUtils",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageStoreService",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgTypes",
    "WAWebSendUserMsgJob",
    "WAWebStatusGatingUtils",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsStatus",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 32;
    async function u(t, n) {
      try {
        var a = c(t);
        if (a != null && (await d(a))) {
          var i = h(t.id, n.id);
          await (o(
            "WAWebStatusGatingUtils",
          ).isStatusNotifyBroadcastAddressingEnabled()
            ? p(a, i)
            : m(a, i));
        }
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[StatusReshare] could not tell the poster their status was reshared",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("status-reshare-notify-poster-failed");
      }
    }
    function c(e) {
      var t = e.author;
      return t == null || o("WAWebMsgGetters").getIsNewsletterStatus(e)
        ? null
        : o("WAWebLidMigrationUtils").toUserLid(t);
    }
    async function d(e) {
      var t = await o("WAWebUserPrefsStatus").getStatusList(),
        n = t.list;
      return n.some(function (t) {
        var n;
        return (
          ((n = o("WAWebLidMigrationUtils").toUserLid(t)) == null
            ? void 0
            : n.equals(e)) === !0
        );
      });
    }
    async function m(e, t) {
      var n = f(
          new (r("WAWebMsgKey"))({
            id: await r("WAWebMsgKey").newId(),
            remote: e,
            fromMe: !0,
          }),
          { from: o("WAWebUserUtils").getMeUserOrThrow(), to: e },
        ),
        a = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
          n,
          o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        );
      await _(a, async function () {
        var r = await o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
          chatId: e,
          msgRecord: {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
            data: n,
          },
          msgProtobuf: t,
          metricReporter: a,
        });
        if (r.error != null)
          throw new (o("WAWebHandleMsgError").MessageSentAckError)(r.error);
      });
    }
    async function p(e, t) {
      var n = o("WAWebUserUtils").getMeLidUserOrThrow(),
        a = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
        i = g(
          new (r("WAWebMsgKey"))({
            id: await r("WAWebMsgKey").newId(),
            remote: a,
            fromMe: !0,
            participant: n,
          }),
          {
            ack: o("WAWebAck").ACK.CLOCK,
            author: n,
            from: n,
            futureproofBuffer: o("WAWebSendMsgCommonApi")
              .encodeAndPad(t)
              .slice().buffer,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .StatusNotificationMessage,
            to: a,
          },
        );
      await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebMessageStoreService").MessageStoreService,
            ).storeMessages
          : o("WAWebDBProcessMessage").storeMessages
      )([i], a);
      var l = new (o("WAWebMsgModel").Msg)(i),
        s = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
          l,
          o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        ),
        u = await o("WAWebDBDeviceListFanout").getFanOutList({
          wids: [e, n],
          shouldMergeAltDevices: !0,
        });
      await _(s, async function () {
        var e = await o(
          "WAWebEncryptAndSendStatusMsg",
        ).encryptAndSendStatusDirectMsg({
          deviceList: u,
          metricsReporter: s,
          msgProtobuf: t,
          sendMsgRecord: {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
            data: l,
          },
          sessionScope: o(
            "WAWebStatusSessionGatingUtils",
          ).getStatusSessionScope(),
        });
        if (e != null)
          throw new (o("WAWebHandleMsgError").MessageSentAckError)(e);
      });
    }
    async function _(e, t) {
      var n = e.createSendReporter();
      try {
        await t();
      } catch (e) {
        throw (
          n.postFailure({
            result: o("WAWebWamEnumMessageSendResultType")
              .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
            isTerminal: !0,
          }),
          e
        );
      }
      n.postSuccess();
    }
    function f(e, t) {
      return new (o("WAWebMsgModel").Msg)(g(e, t));
    }
    function g(e, t) {
      return babelHelpers.extends({}, t, {
        id: e,
        t: o("WATimeUtils").unixTime(),
        type: o("WAWebMsgType").MSG_TYPE.STATUS_NOTIFICATION,
        kind: o("WAWebMsgType").MsgKind.Unknown,
        local: !0,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        isNewMsg: !0,
      });
    }
    function h(e, t) {
      return {
        associatedChildMessage: {
          message: {
            statusNotificationMessage: {
              originalMessageKey: o("WAWebE2EProtoUtils").encodeKey(e),
              responseMessageKey: o("WAWebE2EProtoUtils").encodeKey(t),
              type: o("WAWebProtobufsE2E.pb")
                .Message$StatusNotificationMessage$StatusNotificationType
                .STATUS_RESHARE,
            },
          },
        },
        messageContextInfo: {
          messageSecret: self.crypto.getRandomValues(new Uint8Array(s)),
          messageAssociation: {
            associationType: o("WAWebProtobufsE2E.pb")
              .MessageAssociation$AssociationType.STATUS_NOTIFICATION,
            parentMessageKey: o("WAWebE2EProtoUtils").encodeKey(t),
          },
        },
      };
    }
    l.notifyPosterOfReshare = u;
  },
  98,
);
