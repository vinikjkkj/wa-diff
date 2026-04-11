__d(
  "WASmaxInPreKeysUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInPreKeysFetchMissingPreKeysUserErrorFallbackMixin",
    "WASmaxInPreKeysFetchMissingPreKeysUserErrorMixin",
    "WASmaxInPreKeysFetchMissingPreKeysUserSuccessMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysFetchMissingPreKeysUserSuccessMixin",
      ).parseFetchMissingPreKeysUserSuccessMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FetchMissingPreKeysUserSuccess",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysFetchMissingPreKeysUserErrorMixin",
      ).parseFetchMissingPreKeysUserErrorMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "FetchMissingPreKeysUserError",
          value: n.value,
        });
      var r = o(
        "WASmaxInPreKeysFetchMissingPreKeysUserErrorFallbackMixin",
      ).parseFetchMissingPreKeysUserErrorFallbackMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "FetchMissingPreKeysUserErrorFallback",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["UserSuccess", "UserError", "UserErrorFallback"],
            [t, n, r],
          );
    }
    l.parseUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup =
      e;
  },
  98,
);
