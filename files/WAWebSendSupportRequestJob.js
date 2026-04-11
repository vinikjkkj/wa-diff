__d(
  "WAWebSendSupportRequestJob",
  [
    "WALogger",
    "WASmaxSupportContactFormRPC",
    "WAWebABProps",
    "WAWebCrashlog",
    "WAWebSupportContactFormSubmitMutation",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
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
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
              iqFrom: o("WAWebWidToJid").widToUserJid(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ),
              descriptionElementValue: e,
              debugInformationJsonArgs: { debugInformationJsonElementValue: t },
            },
            r = yield o("WASmaxSupportContactFormRPC").sendContactFormRPC(n);
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "ContactFormResponseError" &&
              "value" in e
            ) {
              var t = e.value;
              return {
                type: "error",
                errorCode: Number(t.errorContactFormError.value.code),
                errorText: t.errorContactFormError.value.text,
              };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "ContactFormResponseRetryableError" &&
              "value" in e
            ) {
              var n = e.value;
              return {
                type: "error",
                errorCode: Number(n.responseErrorCode),
                errorText: "retryable error",
              };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "ContactFormResponseSuccess" &&
              "value" in e
            ) {
              var r = e.value;
              return {
                type: "success",
                message: r.responseMessageElementValue,
                ticketId: r.responseTicketIdElementValue,
                groupId: r.responseGroupJidElementValue,
              };
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(r);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield o("WAWebABProps").getABPropConfigValue(
            "support_contact_form_using_graphql",
          )
            ? m(t, n)
            : _(t, n);
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
        h.apply(this, arguments)
      );
    }
    l.sendSupportRequest = g;
  },
  98,
);
