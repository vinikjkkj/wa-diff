__d(
  "WAWebMexDeleteNewsletterJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexDeleteNewsletterJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = await o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return u(e);
      });
      if (t.xwa2_newsletter_delete_v2 != null) return !0;
      throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
        500,
        "xwa2_newsletter_delete_v2 is null",
      );
    }
    async function u(t) {
      var r =
          e !== void 0
            ? e
            : (e = n("WAWebMexDeleteNewsletterJobMutation.graphql")),
        a = { newsletter_id: t },
        i = await o("WAWebMexClient").fetchQuery(r, a);
      return i;
    }
    l.mexDeleteNewsletter = s;
  },
  98,
);
