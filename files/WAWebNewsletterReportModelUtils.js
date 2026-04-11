__d(
  "WAWebNewsletterReportModelUtils",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.reported_content_data,
        r = {
          state: e.appeal.state,
          appealReason: e.appeal.appeal_reason,
          creationTime:
            e.appeal.creation_time != null
              ? Number(e.appeal.creation_time)
              : null,
          reportId: e.appeal.report_id,
          appealId: (t = e.appeal.appeal_id) != null ? t : "",
        },
        a = {
          id: e.report_id,
          reportStatus: e.status,
          creationTime: Number(e.creation_time),
          newsletterName: e.channel_name,
          newsletterId: o("WAWebWidFactory").createWid(e.channel_jid),
          appeal: r,
        };
      if (n != null) {
        if (n.server_id != null)
          return babelHelpers.extends({}, a, {
            reportContentData: {
              reportContentType: "status",
              statusServerId: n.server_id,
            },
          });
        if (n.server_response_id != null) {
          var i, l;
          return babelHelpers.extends({}, a, {
            reportContentData: {
              reportContentType: "response",
              responseServerMsgId: Number(n.server_response_id),
              notifyName: (i = n.notify_name) != null ? i : null,
              serverMsgId:
                ((l = n.question_data) == null ? void 0 : l.server_msg_id) !=
                null
                  ? Number(n.question_data.server_msg_id)
                  : null,
            },
          });
        }
        if (n.server_msg_id != null)
          return babelHelpers.extends({}, a, {
            reportContentData: {
              reportContentType: "message",
              serverMsgId: Number(n.server_msg_id),
            },
          });
      }
      return babelHelpers.extends({}, a, {
        reportContentData: { reportContentType: "channel" },
      });
    }
    l.mapMexReportToNewsletterReport = e;
  },
  98,
);
