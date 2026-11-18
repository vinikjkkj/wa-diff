__d(
  "WAWebNewsletterForwardToMyStatusPlugin",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebNewsletterShareToStatusEligibility",
    "WAWebNewsletterShareToStatusToast",
    "asyncToGeneratorRuntime",
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          try {
            n = yield s();
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
          yield n(t);
        })),
        d.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
