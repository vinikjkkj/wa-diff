__d(
  "WAWebNewsletterSendStatusAction",
  [
    "invariant",
    "WALogger",
    "WAWebAck",
    "WAWebBackendRuntime",
    "WAWebDBProcessMessage",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageStoreService",
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
    "WAWebStatusPosterActionsLogger",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumStatusContentType",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
            t,
          })
        : o("WAWebStatusCollection").StatusCollection.add({
            id: e,
            t,
            totalCount: 1,
            unreadCount: 1,
          });
    }
    async function d(e, t, n) {
      if (
        !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(
          r("WAWebNewsletterMetadataCollection").get(e),
        )
      )
        throw r("err")(
          "[newsletter][status] Newsletter status posting not allowed: capability missing or not admin",
        );
      var a = o("WAWebWidToJid").widToNewsletterJid(e),
        i = await o("WAWebStatusMsgDataUtils").createTextStatusMsgData(t, e);
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
        await o("WAWebStatusCollection").StatusCollection.addStatusMessages(e, [
          u,
        ]),
        c(e, l.t),
        await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).storeMessages
            : o("WAWebDBProcessMessage").storeMessages
        )([l], e));
      var d = new (o(
        "WAWebStatusPosterActionsLogger",
      ).StatusPosterActionsLogger)(n == null ? void 0 : n.sessionId, e);
      d.logPostStatusRequest(
        o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT,
        0,
        n == null ? void 0 : n.entryPoint,
      );
      try {
        var m = await o("WAWebNewsletterSendStatusJob").sendNewsletterStatus({
            type: "text",
            msg: u,
            newsletterJid: a,
          }),
          f = _(u, m);
        return (
          await p({
            contentType: o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE
              .TEXT,
            funnelContext: n,
            logger: d,
            msg: u,
            response: m,
            result: f,
          }),
          f
        );
      } catch (e) {
        var g, h;
        throw (
          u.updateAck(o("WAWebAck").ACK.FAILED),
          (g = u.wamMessageSendReporter) == null ||
            g.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
              isTerminal: !0,
            }),
          d.logPostStatusFailure({
            contentType: o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE
              .TEXT,
            entryPoint: n == null ? void 0 : n.entryPoint,
            failureReason:
              (h = r("getErrorSafe")(e)) == null ? void 0 : h.message,
            retryCount: 0,
          }),
          e
        );
      } finally {
        u.wamMessageSendReporter = null;
      }
    }
    async function m(e, t, n) {
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
        await o("WAWebStatusCollection").StatusCollection.addStatusMessages(a, [
          d,
        ]),
        c(a, l.t),
        await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).storeMessages
            : o("WAWebDBProcessMessage").storeMessages
        )([l], a));
      try {
        await t(d);
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
      var f = d.mediaHandle;
      f != null || s(0, 144005);
      var g = o("WAWebSendStatusMsgAction").getContentTypeForLogging(d.type),
        h = new (o("WAWebStatusPosterActionsLogger").StatusPosterActionsLogger)(
          n == null ? void 0 : n.sessionId,
          a,
        );
      h.logPostStatusRequest(g, 0, n == null ? void 0 : n.entryPoint);
      try {
        var y = await o("WAWebNewsletterSendStatusJob").sendNewsletterStatus({
            type: "media",
            msg: d,
            newsletterJid: i,
            mediaHandle: f,
          }),
          C = _(d, y);
        return (
          await p({
            contentType: g,
            funnelContext: n,
            logger: h,
            msg: d,
            response: y,
            result: C,
          }),
          C
        );
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
          h.logPostStatusFailure({
            contentType: g,
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
    }
    async function p(e) {
      var t = e.contentType,
        n = e.funnelContext,
        r = e.logger,
        a = e.msg,
        i = e.response,
        l = e.result;
      if (
        l.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK
      ) {
        var s = await o("WAWebStatusLoggingUtils").statusIdForLogging(a);
        r.logPostStatusSuccess(t, s, n == null ? void 0 : n.entryPoint);
        return;
      }
      var u = i.success ? void 0 : i.ack.error;
      r.logPostStatusFailure({
        contentType: t,
        entryPoint: n == null ? void 0 : n.entryPoint,
        failureReason: u,
        retryCount: 0,
      });
    }
    function _(t, n) {
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
      (l.sendNewsletterStatusMediaMsgAction = m));
  },
  98,
);
