__d(
  "WAWebOrgMemberSearchErrorRowLayout",
  [],
  function (t, n, r, o, a, i) {
    var e = 3;
    function l(e) {
      return s(e) ? c + u : c;
    }
    function s(e) {
      return e === "offline"
        ? !0
        : e === "unavailable"
          ? !1
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    var u = 20,
      c = e * u + 4;
    ((i.ORG_MEMBER_SEARCH_ERROR_LINES = e),
      (i.getOrgMemberSearchErrorHeight = l),
      (i.orgMemberSearchErrorOffersRetry = s));
  },
  66,
);
