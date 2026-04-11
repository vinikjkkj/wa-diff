__d(
  "WAWebMexGetDsbInfoJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGetDsbInfoJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebMexGetDsbInfoJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { input: { entity_id: e } },
            n = yield o("WAWebMexClient").fetchQuery(s, t);
          if ((n == null ? void 0 : n.xwa2_get_dsb_info) == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "Mex unexpected null response for getting DSB info",
            );
          return n.xwa2_get_dsb_info.reference_number;
        })),
        c.apply(this, arguments)
      );
    }
    l.mexGetDsbInfo = u;
  },
  98,
);
