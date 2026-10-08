__d(
  "WAWebOrgMemberSearchStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = 300;
    function u(e) {
      return e === "offline"
        ? s._(
            /*BTDS*/ "Couldn't load organization members. Check your internet connection.",
          )
        : e === "unavailable"
          ? s._(
              /*BTDS*/ "Can't search for organization members right now. Try again later.",
            )
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c(e) {
      return s._(/*BTDS*/ "Other {organization name} members", [
        s._param("organization name", e),
      ]);
    }
    function d() {
      return s._(/*BTDS*/ "Searching for organization members");
    }
    function m() {
      return s._(/*BTDS*/ "Try again");
    }
    ((l.ORG_MEMBER_SEARCH_DEBOUNCE_MS = e),
      (l.getOrgMemberSearchErrorText = u),
      (l.getOrgMemberSearchHeader = c),
      (l.getOrgMemberSearchLoadingLabel = d),
      (l.getOrgMemberSearchRetryLabel = m));
  },
  226,
);
