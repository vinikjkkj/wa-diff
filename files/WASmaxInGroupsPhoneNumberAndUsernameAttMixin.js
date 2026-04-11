__d(
  "WASmaxInGroupsPhoneNumberAndUsernameAttMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
      if (!t.success) return t;
      var n = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, t.value, n.value),
          )
        : n;
    }
    l.parsePhoneNumberAndUsernameAttMixin = e;
  },
  98,
);
