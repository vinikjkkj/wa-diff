__d(
  "WAWebSentForAdminReviewDrawer.react",
  [
    "fbt",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebDisplayType",
    "WAWebEmptyState.react",
    "WAWebMsgDrawer.react",
    "WAWebMsgModel",
    "WAWebReportToAdminEventsLogger",
    "WAWebReportToAdminJob",
    "WAWebReportedMsgCollection",
    "WAWebSendForAdminReviewUtils",
    "WAWebWamEnumReportToAdminInteraction",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState;
    function _(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chat,
        u = i.onClose,
        d = i.onMsgFooterClick,
        _ = p([]),
        f = _[0],
        g = _[1];
      m(
        function () {
          (o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(l),
            o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
              reportToAdminInteraction: o(
                "WAWebWamEnumReportToAdminInteraction",
              ).REPORT_TO_ADMIN_INTERACTION.CLICK_OPEN_ADMIN_DASHBOARD,
              groupId: l.id.user,
            }));
          function e() {
            return t.apply(this, arguments);
          }
          function t() {
            return (
              (t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o("WAWebReportToAdminJob").getReportedMsgs(l.id);
                if (e) {
                  var t = e.msgToReporterAndOrderMap,
                    n = e.reports;
                  if (n) {
                    var r = yield o("WAWebDBMsgUtils").getMsgsByMsgIdsAndChatId(
                        n.reportsReport.map(function (e) {
                          return e.messageId;
                        }),
                        l.id,
                      ),
                      a = r.map(function (e) {
                        var n = new (o("WAWebMsgModel").Msg)(
                          o("WAWebDBMessageSerialization").messageFromDbRow(e),
                        );
                        return (
                          n.waitForPrep().then(function () {
                            var e;
                            n.reporterJidList =
                              (e = t.get(n.id.id)) == null
                                ? void 0
                                : e.reporters;
                          }),
                          n
                        );
                      }),
                      i = a.sort(function (e, n) {
                        var r, o, a, i;
                        return (
                          ((r =
                            (o = t.get(e.id.id)) == null ? void 0 : o.order) !=
                          null
                            ? r
                            : 0) -
                          ((a =
                            (i = t.get(n.id.id)) == null ? void 0 : i.order) !=
                          null
                            ? a
                            : 0)
                        );
                      });
                    g(i);
                  }
                }
              })),
              t.apply(this, arguments)
            );
          }
          e();
        },
        [l],
      );
      var h = new (o("WAWebReportedMsgCollection").ReportedMsgCollection)(),
        y = function (t) {
          g(
            f.filter(function (e) {
              return e.id.toString() !== t.toString();
            }),
          );
        };
      o("useWAWebListener").useListener(l.msgs, "change:msgKey", function (e) {
        var t = e.oldKey;
        y(t);
      });
      var C = s._(/*BTDS*/ "Sent for admin review"),
        b = c.jsx(o("WAWebEmptyState.react").SentForAdminReview, {});
      return (
        h.add(f, { sort: !1 }),
        c.jsx(r("WAWebMsgDrawer.react"), {
          testid: void 0,
          ref: a,
          msgCollection: h,
          onClose: u,
          chat: l,
          title: C,
          displayType: o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG,
          emptyListText: b,
          onMsgFooterClick: d,
          footerText: s._(
            /*BTDS*/ "Use WhatsApp on your phone to see older messages.",
          ),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
