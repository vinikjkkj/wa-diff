__d(
  "WAWebAeaBusinessAccountType",
  [
    "WALogger",
    "WAWebAeaAccountState",
    "WAWebAeaThreadStateStore",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      for (var n of t) {
        var a = n.aeaAccountType,
          i = n.wid,
          l =
            a == null
              ? null
              : o("WAWebAeaAccountState").AeaAccountState.cast(a);
        l == null ||
          !o("WAWebAeaAccountState").isAeaNonE2eeAccountState(l) ||
          !i.isRegularUser() ||
          o("WAWebUserUtils").isMeAccount(i) ||
          o("WAWebAeaThreadStateStore")
            .updateAeaThreadStateFromUnsignedSource(
              o("WAWebWidFactory").asUserWidOrThrow(i),
              l,
            )
            .catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to record a business account type",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("aea-business-account-type-fail");
            });
      }
    }
    l.observeAeaBusinessAccountTypes = s;
  },
  98,
);
