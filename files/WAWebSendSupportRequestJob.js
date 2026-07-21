__d(
  "WAWebSendSupportRequestJob",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebSupportContactFormSubmitMutation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 864e5;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o(
              "WAWebSupportContactFormSubmitMutation",
            ).submitContactFormGraphQL({
              description: e,
              debug_info_json: t,
              context_flow: "GENERAL",
            });
          if (a.success === !0) {
            var i, l;
            return {
              type: "success",
              message: "",
              ticketId: (i = a.ticket_id) != null ? i : "",
              groupId: (l = a.support_phone_number_jid) != null ? l : "",
            };
          }
          return {
            type: "error",
            errorCode: (n = a.error_code) != null ? n : 500,
            errorText: (r = a.error_message) != null ? r : "GraphQL error",
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield m(t, n);
          return (
            r.type === "error"
              ? o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "supportRequest error: code=",
                        " message=",
                        "",
                      ])),
                    r.errorCode,
                    r.errorText,
                  )
                  .sendLogs("supportRequest")
              : n != null &&
                r.ticketId !== "no_ticket_created" &&
                r.ticketId !== "" &&
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "InAppSupport: Uploading logs for ticketId=",
                      "",
                    ])),
                  r.ticketId,
                ),
                o("WAWebCrashlog")
                  .upload({
                    reason: o("WAWebCrashlog").USER_REPORT,
                    immediate: !0,
                    isHighPri: !0,
                    logType: o("WAWebCrashlog").LogType.SUPPORT,
                    ticketId: r.ticketId,
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
                          r.ticketId,
                        )
                      : o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "InAppSupport: Logs upload complete for ticketId=",
                              ", logsId=",
                              "",
                            ])),
                          r.ticketId,
                          e,
                        );
                  })),
            r
          );
        })),
        f.apply(this, arguments)
      );
    }
    l.sendSupportRequest = _;
  },
  98,
);
