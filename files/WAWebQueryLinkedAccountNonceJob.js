__d(
  "WAWebQueryLinkedAccountNonceJob",
  ["WASmaxBizLinkingGetAccountNonceRPC", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield o(
          "WASmaxBizLinkingGetAccountNonceRPC",
        ).sendGetAccountNonceRPC({});
        return ((typeof e == "object" && e !== null) ||
          typeof e == "function") &&
          e.name === "GetAccountNonceResponseSuccess"
          ? e.value.detailNonceElementValue
          : ((typeof e == "object" && e !== null) || typeof e == "function") &&
              e.name === "GetAccountNonceResponseError"
            ? null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    l.queryNonce = e;
  },
  98,
);
