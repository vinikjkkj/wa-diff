__d(
  "WAWebNewsletterAddPaidPartnershipLabelAction",
  [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMsgCollection",
    "WAWebNewsletterAddPaidPartnershipLabelJob",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          r === void 0 && (r = "MESSAGE");
          try {
            var a =
                r === "STATUS"
                  ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus
                  : o("WAWebDBMessageUtils").InternalIdPrefix.Default,
              i = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
                Number(n),
                t,
                a,
              );
            if (i == null)
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][dsa-26] msgKey not found for serverId ",
                      "",
                    ])),
                  n,
                ),
                !1
              );
            var l = yield o(
              "WAWebNewsletterAddPaidPartnershipLabelJob",
            ).addPaidPartnershipLabel(t, n, i.id.toString(), r);
            if (l === !0) {
              var u = o("WAWebMsgCollection").MsgCollection.get(i.id);
              u == null || u.set("hasPaidPartnershipLabel", !0);
            }
            return l;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][dsa-26] add paid partnership label failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs(
                  "newsletter-add-paid-partnership-label-action-failed",
                ),
              !1
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.WAWebNewsletterAddPaidPartnershipLabelAction = u;
  },
  98,
);
