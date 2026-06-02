__d(
  "WAWebMexNewsletterAddPaidPartnershipLabelJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexNewsletterAddPaidPartnershipLabelJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "WAWebMexNewsletterAddPaidPartnershipLabelJobMutation.graphql",
            ));
    async function c(e, t, n) {
      var r,
        a = await o("WAWebMexClient").fetchQuery(u, {
          newsletter_id: e,
          server_id: t,
          message_type: n,
        });
      return (a == null ||
      (r = a.xwa2_newsletter_label_paid_partnership) == null
        ? void 0
        : r.id) == null
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][dsa-26][mex] paid partnership - null resp",
                ])),
            )
            .tags("GQL", "MEX")
            .sendLogs("newsletter-add-paid-partnership-label-mex-failed"),
          !1)
        : !0;
    }
    l.mexNewsletterAddPaidPartnershipLabelJob = c;
  },
  98,
);
