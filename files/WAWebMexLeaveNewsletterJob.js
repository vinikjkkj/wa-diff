__d(
  "WAWebMexLeaveNewsletterJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexLeaveNewsletterJobMutation.graphql",
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
          var r =
              e !== void 0
                ? e
                : (e = n("WAWebMexLeaveNewsletterJobMutation.graphql")),
            a = { newsletter_id: t },
            i = yield o("WAWebMexClient").fetchQuery(r, a);
          return i;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield s(e);
          if ((t == null ? void 0 : t.xwa2_newsletter_leave_v2) != null) {
            var n = t.xwa2_newsletter_leave_v2.state.type;
            if (n === "DELETED" || n === "NON_EXISTING")
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                404,
                "newsletter-deleted-or-non-existing",
              );
            if (n === "SUSPENDED")
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                423,
                "newsletter-suspended",
              );
            return !0;
          }
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            500,
            "unexpected-null-mex-response",
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.mexLeaveNewsletter = c;
  },
  98,
);
