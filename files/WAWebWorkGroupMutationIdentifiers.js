__d(
  "WAWebWorkGroupMutationIdentifiers",
  [
    "WAWebABProps",
    "WAWebRecoverUnknownUsernamesBatchJob",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (
        !(
          !t ||
          !o("WAWebABProps").getABPropConfigValue(
            "username_group_mutation_enabled",
          )
        )
      ) {
        var n = r("compactMap")(e, s);
        n.length !== 0 &&
          (await o(
            "WAWebRecoverUnknownUsernamesBatchJob",
          ).recoverUsernamesForLids(n));
      }
    }
    function s(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e.id);
      return !t.isLid() || e.username != null || e.phoneNumber != null
        ? null
        : t;
    }
    l.resolveWorkGroupMutationIdentifiers = e;
  },
  98,
);
