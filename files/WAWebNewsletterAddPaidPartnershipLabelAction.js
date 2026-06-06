__d(
  "WAWebNewsletterAddPaidPartnershipLabelAction",
  [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMsgCollection",
    "WAWebNewsletterAddPaidPartnershipLabelJob",
    "WAWebNewsletterDBUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n, r) {
      r === void 0 && (r = "MESSAGE");
      try {
        var a =
            r === "STATUS"
              ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus
              : o("WAWebDBMessageUtils").InternalIdPrefix.Default,
          i = await o("WAWebNewsletterDBUtils").getMessageByServerId(
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
        var l = await o(
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
            .sendLogs("newsletter-add-paid-partnership-label-action-failed"),
          !1
        );
      }
    }
    l.WAWebNewsletterAddPaidPartnershipLabelAction = u;
  },
  98,
);
