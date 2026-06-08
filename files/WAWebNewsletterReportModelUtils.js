__d(
  "WAWebNewsletterReportModelUtils",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a = e.reported_content_data,
        i = {
          state: e.appeal.state,
          appealReason: e.appeal.appeal_reason,
          appealReasonOptions:
            (t =
              (n = e.appeal_reason_options) == null
                ? void 0
                : n.map(function (e) {
                    var t = e.label,
                      n = e.reason;
                    return { label: t, reason: n };
                  })) != null
              ? t
              : [],
          creationTime:
            e.appeal.creation_time != null
              ? Number(e.appeal.creation_time)
              : null,
          reportId: e.appeal.report_id,
          appealId: (r = e.appeal.appeal_id) != null ? r : "",
        },
        l = {
          id: e.report_id,
          reportStatus: e.status,
          creationTime: Number(e.creation_time),
          newsletterName: e.channel_name,
          newsletterId: o("WAWebWidFactory").createWid(e.channel_jid),
          appeal: i,
        };
      if (a != null) {
        if (a.server_id != null)
          return babelHelpers.extends({}, l, {
            reportContentData: {
              reportContentType: "status",
              statusServerId: a.server_id,
            },
          });
        if (a.server_response_id != null) {
          var s, u;
          return babelHelpers.extends({}, l, {
            reportContentData: {
              reportContentType: "response",
              responseServerMsgId: Number(a.server_response_id),
              notifyName: (s = a.notify_name) != null ? s : null,
              serverMsgId:
                ((u = a.question_data) == null ? void 0 : u.server_msg_id) !=
                null
                  ? Number(a.question_data.server_msg_id)
                  : null,
            },
          });
        }
        if (a.server_msg_id != null)
          return babelHelpers.extends({}, l, {
            reportContentData: {
              reportContentType: "message",
              serverMsgId: Number(a.server_msg_id),
            },
          });
      }
      return babelHelpers.extends({}, l, {
        reportContentData: { reportContentType: "channel" },
      });
    }
    l.mapMexReportToNewsletterReport = e;
  },
  98,
);
