__d(
  "WAWebMexUpdateGroupPropertyJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUpdateGroupPropertyJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexUpdateGroupPropertyJobMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = { group_id: e, update: t },
            a = yield o("WAWebMexClient").fetchQuery(s, r),
            i = (n = a.xwa2_group_update_property) != null ? n : {},
            l = i.state;
          if (l !== "ACTIVE") {
            if (l != null)
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                405,
                "MexFatalExtensionError: group property update failed. group is in " +
                  l +
                  " state",
              );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.mexUpdateGroupPropertyJob = u;
  },
  98,
);
