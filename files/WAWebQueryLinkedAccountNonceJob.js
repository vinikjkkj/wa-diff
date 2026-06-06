__d(
  "WAWebQueryLinkedAccountNonceJob",
  ["WASmaxBizLinkingGetAccountNonceRPC"],
  function (t, n, r, o, a, i, l) {
    var e = async function () {
      var e = await o(
        "WASmaxBizLinkingGetAccountNonceRPC",
      ).sendGetAccountNonceRPC({});
      return ((typeof e == "object" && e !== null) || typeof e == "function") &&
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
    };
    l.queryNonce = e;
  },
  98,
);
