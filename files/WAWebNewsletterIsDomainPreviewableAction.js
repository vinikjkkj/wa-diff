__d(
  "WAWebNewsletterIsDomainPreviewableAction",
  ["WALogger", "WAWebMexFetchNewsletterIsDomainPreviewableJob"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        var n,
          r = await o(
            "WAWebMexFetchNewsletterIsDomainPreviewableJob",
          ).mexFetchNewsletterIsDomainPreviewable([t]);
        return (n = r == null ? void 0 : r.get(t)) != null ? n : !1;
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletters] isDomainPreviewableAction failed",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-is-domain-previewable-action"),
          !1
        );
      }
    }
    l.isDomainPreviewableAction = s;
  },
  98,
);
