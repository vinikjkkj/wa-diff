__d(
  "WAWebNewsletterForwardToMyStatusPlugin",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebNewsletterShareToStatusEligibility",
    "WAWebNewsletterShareToStatusToast",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebNewsletterForwardToMyStatusAction",
        )
          .__setRef("WAWebNewsletterForwardToMyStatusPlugin")
          .load();
      }, "NewsletterForwardToMyStatusAction"),
      u = {
        canForwardToMyStatus: o("WAWebNewsletterShareToStatusEligibility")
          .canForwardNewsletterUpdatesToMyStatus,
        forwardToMyStatus: c,
      };
    async function c(t) {
      var n;
      try {
        n = await s();
      } catch (t) {
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter-forward-to-my-status] could not load the forward to My status action",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("newsletter-forward-to-my-status-load-failed"),
          o(
            "WAWebNewsletterShareToStatusToast",
          ).showShareToStatusFailedToast());
        return;
      }
      await n(t);
    }
    l.default = u;
  },
  98,
);
