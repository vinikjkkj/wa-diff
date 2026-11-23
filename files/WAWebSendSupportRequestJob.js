__d(
  "WAWebSendSupportRequestJob",
  ["WALogger", "WAWebCrashlog", "WAWebSupportContactFormSubmitMutation"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 864e5;
    async function m(e, t, n) {
      var r,
        a,
        i = await o(
          "WAWebSupportContactFormSubmitMutation",
        ).submitContactFormGraphQL({
          description: e,
          debug_info_json: t,
          context_flow: "GENERAL",
          bot_fbid: n,
        });
      if (i.success === !0) {
        var l, s;
        return {
          type: "success",
          message: "",
          ticketId: (l = i.ticket_id) != null ? l : "",
          groupId: (s = i.support_phone_number_jid) != null ? s : "",
        };
      }
      return {
        type: "error",
        errorCode: (r = i.error_code) != null ? r : 500,
        errorText: (a = i.error_message) != null ? a : "GraphQL error",
      };
    }
    async function p(t, n, r) {
      var a = await m(t, n, r);
      return (
        a.type === "error"
          ? o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "supportRequest error: code=",
                    " message=",
                    "",
                  ])),
                a.errorCode,
                a.errorText,
              )
              .sendLogs("supportRequest")
          : n != null &&
            a.ticketId !== "no_ticket_created" &&
            a.ticketId !== "" &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "InAppSupport: Uploading logs for ticketId=",
                  "",
                ])),
              a.ticketId,
            ),
            o("WAWebCrashlog")
              .upload({
                reason: o("WAWebCrashlog").USER_REPORT,
                immediate: !0,
                isHighPri: !0,
                logType: o("WAWebCrashlog").LogType.SUPPORT,
                ticketId: a.ticketId,
                fromTimestamp: Date.now() - d,
              })
              .then(function (e) {
                e == null
                  ? o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "InAppSupport: Logs upload failed for ticketId=",
                          "",
                        ])),
                      a.ticketId,
                    )
                  : o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "InAppSupport: Logs upload complete for ticketId=",
                          ", logsId=",
                          "",
                        ])),
                      a.ticketId,
                      e,
                    );
              })),
        a
      );
    }
    l.sendSupportRequest = p;
  },
  98,
);
