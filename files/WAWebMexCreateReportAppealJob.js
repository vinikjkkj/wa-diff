__d(
  "WAWebMexCreateReportAppealJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexCreateReportAppealJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexCreateReportAppealJobMutation.graphql"));
    async function u(e) {
      var t = e.reason,
        n = e.reportId,
        r = { report_id: n, reason: t },
        a = await o("WAWebMexClient").fetchQuery(s, r);
      if ((a == null ? void 0 : a.xwa2_create_channel_report_appeal_v2) == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "Mex unexpected null response for creating newsletter report appeal",
        );
      return a;
    }
    l.mexCreateReportAppeal = u;
  },
  98,
);
