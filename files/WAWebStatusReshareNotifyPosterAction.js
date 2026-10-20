__d(
  "WAWebStatusReshareNotifyPosterAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebLidMigrationUtils",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgTypes",
    "WAWebSendUserMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 32;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = d(t);
            a != null && (yield m(a)) && (yield _(a, C(t.id, n.id)));
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = e.author;
      return t == null || o("WAWebMsgGetters").getIsNewsletterStatus(e)
        ? null
        : o("WAWebLidMigrationUtils").toUserLid(t);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebUserPrefsStatus").getStatusList(),
            n = t.list;
          return n.some(function (t) {
            var n;
            return (
              ((n = o("WAWebLidMigrationUtils").toUserLid(t)) == null
                ? void 0
                : n.equals(e)) === !0
            );
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = y(
              new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: e,
                fromMe: !0,
              }),
              { from: o("WAWebUserPrefsMeUser").getMeUserOrThrow(), to: e },
            ),
            i = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
              a,
              o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            );
          yield g(
            i,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
                chatId: e,
                msgRecord: {
                  type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                  data: a,
                },
                msgProtobuf: t,
                metricReporter: i,
              });
              if (n.error != null)
                throw new (o("WAWebHandleMsgError").MessageSentAckError)(
                  n.error,
                );
            }),
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.createSendReporter();
          try {
            yield t();
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return new (o("WAWebMsgModel").Msg)(
        babelHelpers.extends({}, t, {
          id: e,
          t: o("WATimeUtils").unixTime(),
          type: o("WAWebMsgType").MSG_TYPE.STATUS_NOTIFICATION,
          kind: o("WAWebMsgType").MsgKind.Unknown,
          local: !0,
          viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
          isNewMsg: !0,
        }),
      );
    }
    function C(e, t) {
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
