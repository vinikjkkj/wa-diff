__d(
  "WAWebMexUpdateGroupPropertyJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUpdateGroupPropertyJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexUpdateGroupPropertyJobMutation.graphql"));
    async function u(e, t) {
      var n,
        r = { group_id: e, update: t },
        a = await o("WAWebMexClient").fetchQuery(s, r),
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
    }
    l.mexUpdateGroupPropertyJob = u;
  },
  98,
);
