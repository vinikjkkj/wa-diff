__d(
  "WAWebNewsletterSendStatusAction",
  [
    "invariant",
    "WALogger",
    "WAWebAck",
    "WAWebDBProcessMessage",
    "WAWebLogStatusPosterActions",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgModel",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterSendStatusJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebSendMsgResultAction",
    "WAWebSendStatusMsgAction",
    "WAWebStatusCollection",
    "WAWebStatusLoggingUtils",
    "WAWebStatusMsgDataUtils",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumStatusContentType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "https://a.whatsapp.net";
    function c(e, t) {
      var n = o("WAWebStatusCollection").StatusCollection.get(e);
      n
        ? n.set({
            totalCount: n.totalCount + 1,
            unreadCount: n.unreadCount + 1,
            t: t,
          })
        : o("WAWebStatusCollection").StatusCollection.add({
            id: e,
            t: t,
            totalCount: 1,
            unreadCount: 1,
          });
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(
              r("WAWebNewsletterMetadataCollection").get(e),
            )
          )
            throw r("err")(
              "[newsletter][status] Newsletter status posting not allowed: capability missing or not admin",
            );
          var a = o("WAWebWidToJid").widToNewsletterJid(e),
            i = yield o("WAWebStatusMsgDataUtils").createTextStatusMsgData(
              t,
              e,
            );
          i != null || s(0, 143976);
          var l = babelHelpers.extends({}, i, {
              isNewsletterStatus: !0,
              author: e,
              statusAttributions: [
                {
                  type: o("WAWebProtobufsStatusAttributions.pb")
                    .StatusAttribution$Type.NEWSLETTER_STATUS,
                },
              ],
              canBeReshared: !0,
            }),
            u = new (o("WAWebMsgModel").Msg)(l);
          ((u.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(u, {
            frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
              .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
          })),
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              e,
              [u],
            ),
            c(e, l.t),
            yield o("WAWebDBProcessMessage").storeMessages([l], e));
          var d = new (o(
            "WAWebLogStatusPosterActions",
          ).StatusPosterActionsLogger)(n == null ? void 0 : n.sessionId, e);
          d.logPostStatusRequest(
            o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT,
            0,
            n == null ? void 0 : n.entryPoint,
          );
          try {
            var m = yield o(
                "WAWebNewsletterSendStatusJob",
              ).sendNewsletterStatus({
                type: "text",
                msg: u,
                newsletterJid: a,
              }),
              p = h(u, m);
            return (
              yield f(
                p,
                m,
                u,
                d,
                o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT,
                n,
              ),
              p
            );
          } catch (e) {
            var _, g;
            throw (
              u.updateAck(o("WAWebAck").ACK.FAILED),
              (_ = u.wamMessageSendReporter) == null ||
                _.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !0,
                }),
              d.logPostStatusFailure({
                contentType: o("WAWebWamEnumStatusContentType")
                  .STATUS_CONTENT_TYPE.TEXT,
                entryPoint: n == null ? void 0 : n.entryPoint,
                failureReason:
                  (g = r("getErrorSafe")(e)) == null ? void 0 : g.message,
                retryCount: 0,
              }),
              e
            );
          } finally {
            u.wamMessageSendReporter = null;
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebWidFactory").asNewsletterWidOrThrow(e.id.remote);
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(
              r("WAWebNewsletterMetadataCollection").get(a),
            )
          )
            throw r("err")(
              "[newsletter][status] Newsletter status posting not allowed: capability missing or not admin",
            );
          var i = o("WAWebWidToJid").widToNewsletterJid(a),
            l = babelHelpers.extends({}, e, {
              isNewsletterStatus: !0,
              author: a,
              statusAttributions: [
                {
                  type: o("WAWebProtobufsStatusAttributions.pb")
                    .StatusAttribution$Type.NEWSLETTER_STATUS,
                },
              ],
              canBeReshared: !0,
            }),
            d = new (o("WAWebMsgModel").Msg)(l);
          ((d.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(d, {
            frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
              .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
          })),
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              a,
              [d],
            ),
            c(a, l.t),
            yield o("WAWebDBProcessMessage").storeMessages([l], a));
          try {
            yield t(d);
          } catch (e) {
            var m;
            return (
              d.updateAck(o("WAWebAck").ACK.FAILED),
              (m = d.wamMessageSendReporter) == null ||
                m.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
                  isTerminal: !0,
                }),
              (d.wamMessageSendReporter = null),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UPLOAD,
              }
            );
          }
          d.deprecatedMms3Url = u;
          var p = d.mediaHandle;
          p != null || s(0, 144005);
          var _ = o("WAWebSendStatusMsgAction").getContentTypeForLogging(
              d.type,
            ),
            g = new (o(
              "WAWebLogStatusPosterActions",
            ).StatusPosterActionsLogger)(n == null ? void 0 : n.sessionId, a);
          g.logPostStatusRequest(_, 0, n == null ? void 0 : n.entryPoint);
          try {
            var y = yield o(
                "WAWebNewsletterSendStatusJob",
              ).sendNewsletterStatus({
                type: "media",
                msg: d,
                newsletterJid: i,
                mediaHandle: p,
              }),
              C = h(d, y);
            return (yield f(C, y, d, g, _, n), C);
          } catch (e) {
            var b, v;
            throw (
              d.updateAck(o("WAWebAck").ACK.FAILED),
              (b = d.wamMessageSendReporter) == null ||
                b.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !0,
                }),
              g.logPostStatusFailure({
                contentType: _,
                entryPoint: n == null ? void 0 : n.entryPoint,
                failureReason:
                  (v = r("getErrorSafe")(e)) == null ? void 0 : v.message,
                retryCount: 0,
              }),
              e
            );
          } finally {
            d.wamMessageSendReporter = null;
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, o, a) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            if (
              e.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            ) {
              var l = yield o("WAWebStatusLoggingUtils").statusIdForLogging(n);
              r.logPostStatusSuccess(a, l, i == null ? void 0 : i.entryPoint);
              return;
            }
            var s = t.success ? void 0 : t.ack.error;
            r.logPostStatusFailure({
              contentType: a,
              entryPoint: i == null ? void 0 : i.entryPoint,
              failureReason: s,
              retryCount: 0,
            });
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(t, n) {
      var r;
      if (n.success) {
        var a;
        return (
          (t.serverId = n.serverId),
          (t.t = n.ack.t),
          t.updateAck(o("WAWebAck").ACK.SENT),
          (a = t.wamMessageSendReporter) == null || a.postSuccess(),
          o("WAWebNewsletterUpdateMsgsRecordsJob").updateNewsletterMsgRecord(t),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            msg: t,
            t: n.ack.t,
          }
        );
      }
      return (
        t.updateAck(o("WAWebAck").ACK.FAILED),
        (r = t.wamMessageSendReporter) == null ||
          r.postFailure({
            result: o("WAWebWamEnumMessageSendResultType")
              .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
            isTerminal: !0,
          }),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][status][send] Send failed: ",
                "",
              ])),
            n.ack.error,
          )
          .tags("newsletter", "status")
          .sendLogs("newsletter-status-send-failed"),
        {
          messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
            .ERROR_UNKNOWN,
        }
      );
    }
    ((l.sendNewsletterStatusTextMsgAction = d),
      (l.sendNewsletterStatusMediaMsgAction = p));
  },
  98,
);
