__d(
  "WAWebMexDeleteNewsletterJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexDeleteNewsletterJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebNewsletterRpcUtils").runWithBackoff(
            function () {
              return c(e);
            },
          );
          if (t.xwa2_newsletter_delete_v2 != null) return !0;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            500,
            "xwa2_newsletter_delete_v2 is null",
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r =
              e !== void 0
                ? e
                : (e = n("WAWebMexDeleteNewsletterJobMutation.graphql")),
            a = { newsletter_id: t },
            i = yield o("WAWebMexClient").fetchQuery(r, a);
          return i;
        })),
        d.apply(this, arguments)
      );
    }
    l.mexDeleteNewsletter = s;
  },
  98,
);
