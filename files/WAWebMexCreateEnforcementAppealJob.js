__d(
  "WAWebMexCreateEnforcementAppealJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexCreateEnforcementAppealJobMutation.graphql",
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
                : (e = n("WAWebMexCreateEnforcementAppealJobMutation.graphql")),
            a = t.additionalAppealReason,
            i = t.enforcementId,
            l = t.locale,
            s = t.newsletterJid,
            u = t.reason,
            c = {
              input: {
                entity_id: s,
                enforcement_id: i,
                appeal_reason: u,
                additional_appeal_reason: a,
                locale: l,
              },
            },
            d = yield o("WAWebMexClient").fetchQuery(r, c);
          if ((d == null ? void 0 : d.xwa2_create_enforcement_appeal) != null)
            return {
              creationTimestamp:
                d.xwa2_create_enforcement_appeal.appeal_creation_time,
              state: d.xwa2_create_enforcement_appeal.appeal_state,
            };
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            500,
            "unexpected-null-mex-response",
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.mexCreateEnforcementAppeal = s;
  },
  98,
);
