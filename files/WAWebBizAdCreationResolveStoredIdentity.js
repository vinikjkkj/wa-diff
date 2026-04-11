__d(
  "WAWebBizAdCreationResolveStoredIdentity",
  ["WAWebUserPrefsCTWA", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (function (e) {
        return e === "FB" ? "FB" : e === "WAA" ? "WAA" : null;
      })(o("WAWebUserPrefsGeneral").getLastUsedAdAccountType());
    }
    function s(e) {
      return e === "FB"
        ? o("WAWebUserPrefsCTWA").getFBIdentity()
        : e === "WAA"
          ? o("WAWebUserPrefsCTWA").getAdAccountToken()
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.resolveStoredAccountType = e),
      (l.resolveStoredIdentityForAccountType = s));
  },
  98,
);
