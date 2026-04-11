__d(
  "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebJidToWid",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n.xwa2_notify_newsletter_on_wamo_sub_status_change,
            i = a.newsletter_id,
            l = a.wamo_sub_event;
          if (i == null)
            throw r("err")(
              "unexpected null newsletter_id in xwa2_notify_newsletter_on_wamo_sub_status_change",
            );
          var s = o("WAJids").toNewsletterJid(i),
            u = o("WAWebJidToWid").newsletterJidToWid(s),
            c = yield o("WAWebApiChatCommon").getChatRecord(u);
          if (c != null)
            try {
              var d;
              switch (l) {
                case "SUBSCRIPTION_CREATED":
                  d = o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE;
                  break;
                case "SUBSCRIPTION_PAUSED":
                case "SUBSCRIPTION_ON_HOLD":
                case "SUBSCRIPTION_EXPIRED":
                  d = o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE;
                  break;
                case "SUBSCRIPTION_CANCELLED":
                case "SUBSCRIPTION_IN_GRACE_PERIOD":
                case "SUBSCRIPTION_PENDING_REVOKE":
                case "SUBSCRIPTION_RENEWED":
                case "SUBSCRIPTION_TO_RENEW_SOON":
                case "SUBSCRIPTION_XGRADE":
                  break;
                default: {
                  var m = l == null ? "null or undefined" : l;
                  throw r("err")("Unexpected Wamo Sub event: " + m);
                }
              }
              if (d == null) return;
              (yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
                id: s,
                wamoSubStatus: o(
                  "WAWebNewsletterStorageUtils",
                ).mapNewsletterWamoSubStatusForStorage(d),
              }),
                o("WAWebBackendApi").frontendFireAndForget(
                  "handleNewsletterWamoSubStatusChangeNotification",
                  { jid: s, wamoSubStatus: d },
                ));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][newsletter] wamo-sub-status-change failed: ",
                      "",
                    ])),
                  l,
                )
                .catching(r("getErrorSafe")(t))
                .tags("mex", "newsletter")
                .sendLogs(
                  "mex-newsletter-notification-wamo-sub-status-change-fail",
                );
            }
        })),
        u.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterWamoSubStatusChange = s;
  },
  98,
);
