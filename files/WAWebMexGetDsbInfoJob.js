__d(
  "WAWebMexGetDsbInfoJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGetDsbInfoJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebMexGetDsbInfoJobMutation.graphql"));
    async function u(e) {
      var t = { input: { entity_id: e } },
        n = await o("WAWebMexClient").fetchQuery(s, t);
      if ((n == null ? void 0 : n.xwa2_get_dsb_info) == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "Mex unexpected null response for getting DSB info",
        );
      return n.xwa2_get_dsb_info.reference_number;
    }
    l.mexGetDsbInfo = u;
  },
  98,
);
