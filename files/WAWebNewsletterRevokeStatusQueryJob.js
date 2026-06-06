__d(
  "WAWebNewsletterRevokeStatusQueryJob",
  [
    "WALogger",
    "WASmaxStatusPublishPostNewsletterStatusRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
            t.newsletterJid,
          );
          var n = {
              statusTo: t.newsletterJid,
              clientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroupArgs:
                {
                  postNewsletterStatusClientID: {
                    statusId: o("WAStanzaUtils").toStanzaId(t.statusId),
                    newsletterClientIdContentArgs: {
                      isStatusNewsletterRevoke: !0,
                    },
                  },
                },
            },
            r = yield o(
              "WASmaxStatusPublishPostNewsletterStatusRPC",
            ).sendPostNewsletterStatusRPC(n);
          e: {
            var a = r;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "PostNewsletterStatusResponseSuccess" &&
              "value" in a
            ) {
              var i = a.value;
              return { success: !0, ack: { t: i.t } };
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "PostNewsletterStatusResponseNegative" &&
              "value" in a
            ) {
              var l = a.value;
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "newsletter status revoke failed: ",
                        "",
                      ])),
                    l.error,
                  )
                  .sendLogs("newsletter-status-revoke-failed"),
                { success: !1, ack: { t: l.t, error: l.error } }
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                a,
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.queryRevokeNewsletterStatus = s;
  },
  98,
);
