__d(
  "WAWebGroupMembershipFormCryptoTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({ NO_KEY: "no_key", CORRUPT: "corrupt" });
    function l(t) {
      return t.type === "success"
        ? { type: "loaded", answers: t.answers }
        : t.error === e.NO_KEY
          ? { type: "failed" }
          : t.error === e.CORRUPT
            ? { type: "unavailable" }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t.error,
                );
              })();
    }
    ((i.GroupMembershipFormDecodeError = e),
      (i.getGroupMembershipFormResponseState = l));
  },
  66,
);
