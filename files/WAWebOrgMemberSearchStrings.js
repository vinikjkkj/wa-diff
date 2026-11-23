__d(
  "WAWebOrgMemberSearchStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = 300;
    function u(e) {
      return e === "offline"
        ? s._(/*BTDS*/ "")
        : e === "unavailable"
          ? s._(/*BTDS*/ "")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    ((l.ORG_MEMBER_SEARCH_DEBOUNCE_MS = e),
      (l.getOrgMemberSearchErrorText = u),
      (l.getOrgMemberSearchHeader = c));
  },
  226,
);
