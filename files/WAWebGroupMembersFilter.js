__d(
  "WAWebGroupMembersFilter",
  ["WAWebBoolFunc", "WAWebL10NAccentFold", "WAWebPhoneNumberSearch"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = s(t);
      return e.filter(function (e) {
        return u(e, n) && r(e.contact);
      });
    }
    function s(e) {
      var t = o("WAWebL10NAccentFold").accentFold(e.trim());
      if (t === "") return o("WAWebBoolFunc").returnTrue;
      var n = o("WAWebPhoneNumberSearch").numberSearch(t);
      return function (e) {
        return e.searchMatchExact(t, n) != null;
      };
    }
    function u(e, t) {
      return t === "all"
        ? !0
        : t === "admins"
          ? e.isAdmin
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    ((l.filterGroupMembers = e), (l.createContactSearchMatcher = s));
  },
  98,
);
