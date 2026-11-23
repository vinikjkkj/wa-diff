__d(
  "WAWebNewsletterAddAiContentLabelAction",
  [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMsgAIProvenance",
    "WAWebMsgCollection",
    "WAWebNewsletterAddAiContentLabelJob",
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
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content] msgKey not found for serverId ",
                    "",
                  ])),
                n,
              )
              .tags("newsletter", "sgi", "wa-ice", "wa-spice-web")
              .sendLogs("newsletter-label-ai-content-msgkey-missing"),
            !1
          );
        var l = await o(
          "WAWebNewsletterAddAiContentLabelJob",
        ).addAiContentLabel(t, n, r);
        if (l === !0) {
          var u = o("WAWebMsgCollection").MsgCollection.get(i.id);
          u == null ||
            u.set(
              "aiProvenance",
              o("WAWebMsgAIProvenance").withSelfDisclosed(
                u == null ? void 0 : u.aiProvenance,
              ),
            );
        }
        return l;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][sgi-ai-content] label ai content failed",
                ])),
            )
            .tags("newsletter", "sgi", "wa-ice", "wa-spice-web")
            .sendLogs("newsletter-label-ai-content-action-failed"),
          !1
        );
      }
    }
    l.WAWebNewsletterAddAiContentLabelAction = u;
  },
  98,
);
