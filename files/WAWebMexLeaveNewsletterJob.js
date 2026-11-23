__d(
  "WAWebMexLeaveNewsletterJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexLeaveNewsletterJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var r =
          e !== void 0
            ? e
            : (e = n("WAWebMexLeaveNewsletterJobMutation.graphql")),
        a = { newsletter_id: t },
        i = await o("WAWebMexClient").fetchQuery(r, a);
      return i;
    }
    async function u(e) {
      var t = await s(e);
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
    }
    l.mexLeaveNewsletter = u;
  },
  98,
);
