__d(
  "WASmaxInPreKeysUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInPreKeysFetchKeyBundlesUserErrorFallbackMixin",
    "WASmaxInPreKeysFetchKeyBundlesUserErrorMixin",
    "WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin",
      ).parseFetchKeyBundlesUserSuccessMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FetchKeyBundlesUserSuccess",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysFetchKeyBundlesUserErrorMixin",
      ).parseFetchKeyBundlesUserErrorMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "FetchKeyBundlesUserError",
          value: n.value,
        });
      var r = o(
        "WASmaxInPreKeysFetchKeyBundlesUserErrorFallbackMixin",
      ).parseFetchKeyBundlesUserErrorFallbackMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "FetchKeyBundlesUserErrorFallback",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["UserSuccess", "UserError", "UserErrorFallback"],
            [t, n, r],
          );
    }
    l.parseUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup =
      e;
  },
  98,
);
