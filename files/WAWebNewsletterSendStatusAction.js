__d(
  "WAWebNewsletterSendStatusAction",
  [
    "invariant",
    "WALogger",
    "WAWebAck",
    "WAWebDBProcessMessage",
    "WAWebMessageSendReporter",
    "WAWebMsgModel",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendStatusJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebSendMsgResultAction",
    "WAWebStatusCollection",
    "WAWebStatusMsgDataUtils",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e, t) {
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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled()
          )
            throw r("err")(
              "[newsletter][status] Status creation is not enabled",
            );
          var n = o("WAWebWidToJid").widToNewsletterJid(e),
            a = yield o("WAWebStatusMsgDataUtils").createTextStatusMsgData(
              t,
              e,
            );
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
            }),
            l = new (o("WAWebMsgModel").Msg)(i);
          ((l.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(l)),
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              e,
              [l],
            ),
            u(e, i.t),
            yield o("WAWebDBProcessMessage").storeMessages([i], e));
          try {
            var c = yield o(
              "WAWebNewsletterSendStatusJob",
            ).sendNewsletterStatus({ type: "text", msg: l, newsletterJid: n });
            return _(l, c);
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
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled()
          )
            throw r("err")(
              "[newsletter][status] Status creation is not enabled",
            );
          var n = o("WAWebWidFactory").asNewsletterWidOrThrow(e.id.remote),
            a = o("WAWebWidToJid").widToNewsletterJid(n),
            i = babelHelpers.extends({}, e, {
              isNewsletterStatus: !0,
              author: n,
              statusAttributions: [
                {
                  type: o("WAWebProtobufsStatusAttributions.pb")
                    .StatusAttribution$Type.NEWSLETTER_STATUS,
                },
              ],
            }),
            l = new (o("WAWebMsgModel").Msg)(i);
          ((l.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(l)),
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              n,
              [l],
            ),
            u(n, i.t),
            yield o("WAWebDBProcessMessage").storeMessages([i], n));
          try {
            yield t(l);
          } catch (e) {
            var c;
            return (
              l.updateAck(o("WAWebAck").ACK.FAILED),
              (c = l.wamMessageSendReporter) == null ||
                c.postFailure({
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
          var d = l.mediaHandle;
          d != null || s(0, 144005);
          try {
            var m = yield o(
              "WAWebNewsletterSendStatusJob",
            ).sendNewsletterStatus({
              type: "media",
              msg: l,
              newsletterJid: a,
              mediaHandle: d,
            });
            return _(l, m);
          } catch (e) {
            var p;
            throw (
              l.updateAck(o("WAWebAck").ACK.FAILED),
              (p = l.wamMessageSendReporter) == null ||
                p.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !0,
                }),
              e
            );
          } finally {
            l.wamMessageSendReporter = null;
          }
        })),
        p.apply(this, arguments)
      );
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
    ((l.sendNewsletterStatusTextMsgAction = c),
      (l.sendNewsletterStatusMediaMsgAction = m));
  },
  98,
);
