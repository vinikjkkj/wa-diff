__d(
  "WAWebQueryLinkedAccountNonceJob",
  ["WASmaxBizLinkingGetAccountNonceRPC", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WASmaxBizLinkingGetAccountNonceRPC",
          ).sendGetAccountNonceRPC({});
          return ((typeof e == "object" && e !== null) ||
            typeof e == "function") &&
            e.name === "GetAccountNonceResponseSuccess"
            ? e.value.detailNonceElementValue
            : ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.name === "GetAccountNonceResponseError"
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
        })),
        s.apply(this, arguments)
      );
    }
    l.queryNonce = e;
  },
  98,
);
