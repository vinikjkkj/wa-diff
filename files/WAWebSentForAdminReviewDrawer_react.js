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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(14),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var u = i,
        d = u.chat,
        _ = u.onClose,
        g = u.onMsgFooterClick,
        h;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (a[3] = h))
        : (h = a[3]);
      var y = p(h),
        C = y[0],
        b = y[1],
        v,
        S;
      (a[4] !== d
        ? ((v = function () {
            (o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(d),
              o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
                reportToAdminInteraction: o(
                  "WAWebWamEnumReportToAdminInteraction",
                ).REPORT_TO_ADMIN_INTERACTION.CLICK_OPEN_ADMIN_DASHBOARD,
                groupId: d.id.user,
              }));
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield o("WAWebReportToAdminJob").getReportedMsgs(
                    d.id,
                  );
                  if (e) {
                    var t = e.msgToReporterAndOrderMap,
                      n = e.reports;
                    if (n) {
                      var r = yield o(
                          "WAWebDBMsgUtils",
                        ).getMsgsByMsgIdsAndChatId(
                          n.reportsReport.map(f),
                          d.id,
                        ),
                        a = r.map(function (e) {
                          var n = new (o("WAWebMsgModel").Msg)(
                            o("WAWebDBMessageSerialization").messageFromDbRow(
                              e,
                            ),
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
                              (o = t.get(e.id.id)) == null
                                ? void 0
                                : o.order) != null
                              ? r
                              : 0) -
                            ((a =
                              (i = t.get(n.id.id)) == null
                                ? void 0
                                : i.order) != null
                              ? a
                              : 0)
                          );
                        });
                      b(i);
                    }
                  }
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })();
            e();
          }),
          (S = [d]),
          (a[4] = d),
          (a[5] = v),
          (a[6] = S))
        : ((v = a[5]), (S = a[6])),
        m(v, S));
      var R = new (o("WAWebReportedMsgCollection").ReportedMsgCollection)(),
        L;
      a[7] !== C
        ? ((L = function (t) {
            b(
              C.filter(function (e) {
                return e.id.toString() !== t.toString();
              }),
            );
          }),
          (a[7] = C),
          (a[8] = L))
        : (L = a[8]);
      var E = L,
        k;
      (a[9] !== E
        ? ((k = function (t) {
            var e = t.oldKey;
            E(e);
          }),
          (a[9] = E),
          (a[10] = k))
        : (k = a[10]),
        o("useWAWebListener").useListener(d.msgs, "change:msgKey", k));
      var I;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Sent for admin review")), (a[11] = I))
        : (I = a[11]);
      var T = I,
        D;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx(o("WAWebEmptyState.react").SentForAdminReview, {})),
          (a[12] = D))
        : (D = a[12]);
      var x = D;
      R.add(C, { sort: !1 });
      var $;
      return (
        a[13] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = s._(
              /*BTDS*/ "Use WhatsApp on your phone to see older messages.",
            )),
            (a[13] = $))
          : ($ = a[13]),
        c.jsx(r("WAWebMsgDrawer.react"), {
          testid: void 0,
          ref: l,
          msgCollection: R,
          onClose: _,
          chat: d,
          title: T,
          displayType: o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG,
          emptyListText: x,
          onMsgFooterClick: g,
          footerText: $,
        })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return e.messageId;
    }
    l.default = _;
  },
  226,
);
