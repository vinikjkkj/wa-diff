__d(
  "WAWebNewsletterSendStatusAction",
  [
    "invariant",
    "WALogger",
    "WAWebAck",
    "WAWebDBProcessMessage",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgModel",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterSendStatusJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebSendMsgResultAction",
    "WAWebStatusCollection",
    "WAWebStatusMsgDataUtils",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
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
    async function d(e, t) {
      if (
        !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(
          r("WAWebNewsletterMetadataCollection").get(e),
        )
      )
        throw r("err")(
          "[newsletter][status] Newsletter status posting not allowed: capability missing or not admin",
        );
      var n = o("WAWebWidToJid").widToNewsletterJid(e),
        a = await o("WAWebStatusMsgDataUtils").createTextStatusMsgData(t, e);
      a != null || s(0, 143976);
      var i = babelHelpers.extends({}, a, {
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
        l = new (o("WAWebMsgModel").Msg)(i);
      ((l.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(l, {
        frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
      })),
        await o("WAWebStatusCollection").StatusCollection.addStatusMessages(e, [
          l,
        ]),
        c(e, i.t),
        await o("WAWebDBProcessMessage").storeMessages([i], e));
      try {
        var u = await o("WAWebNewsletterSendStatusJob").sendNewsletterStatus({
          type: "text",
          msg: l,
          newsletterJid: n,
        });
        return p(l, u);
      } catch (e) {
        var d;
        throw (
          l.updateAck(o("WAWebAck").ACK.FAILED),
          (d = l.wamMessageSendReporter) == null ||
            d.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
              isTerminal: !0,
            }),
          e
        );
      } finally {
        l.wamMessageSendReporter = null;
      }
    }
    async function m(e, t) {
      var n = o("WAWebWidFactory").asNewsletterWidOrThrow(e.id.remote);
      if (
        !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(
          r("WAWebNewsletterMetadataCollection").get(n),
        )
      )
        throw r("err")(
          "[newsletter][status] Newsletter status posting not allowed: capability missing or not admin",
        );
      var a = o("WAWebWidToJid").widToNewsletterJid(n),
        i = babelHelpers.extends({}, e, {
          isNewsletterStatus: !0,
          author: n,
          statusAttributions: [
            {
              type: o("WAWebProtobufsStatusAttributions.pb")
                .StatusAttribution$Type.NEWSLETTER_STATUS,
            },
          ],
          canBeReshared: !0,
        }),
        l = new (o("WAWebMsgModel").Msg)(i);
      ((l.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(l, {
        frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
      })),
        await o("WAWebStatusCollection").StatusCollection.addStatusMessages(n, [
          l,
        ]),
        c(n, i.t),
        await o("WAWebDBProcessMessage").storeMessages([i], n));
      try {
        await t(l);
      } catch (e) {
        var d;
        return (
          l.updateAck(o("WAWebAck").ACK.FAILED),
          (d = l.wamMessageSendReporter) == null ||
            d.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
              isTerminal: !0,
            }),
          (l.wamMessageSendReporter = null),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UPLOAD,
          }
        );
      }
      l.deprecatedMms3Url = u;
      var m = l.mediaHandle;
      m != null || s(0, 144005);
      try {
        var _ = await o("WAWebNewsletterSendStatusJob").sendNewsletterStatus({
          type: "media",
          msg: l,
          newsletterJid: a,
          mediaHandle: m,
        });
        return p(l, _);
      } catch (e) {
        var f;
        throw (
          l.updateAck(o("WAWebAck").ACK.FAILED),
          (f = l.wamMessageSendReporter) == null ||
            f.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
              isTerminal: !0,
            }),
          e
        );
      } finally {
        l.wamMessageSendReporter = null;
      }
    }
    function p(t, n) {
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
