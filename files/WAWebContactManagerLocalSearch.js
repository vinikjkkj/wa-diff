__d(
  "WAWebContactManagerLocalSearch",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactManagerProfileQueryPlan",
    "WAWebL10NAccentFold",
    "WAWebPhoneNumberSearch",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (!o("WAWebContactManagerProfileQueryPlan").isSearchQueryActive(e))
        return null;
      var n = o("WAWebL10NAccentFold").accentFold(e.trim()),
        r = o("WAWebPhoneNumberSearch").numberSearch(n),
        a = [];
      for (var i of t != null ? t : []) {
        var l = o("WAWebContactCollection").ContactCollection.get(i);
        l != null && l.searchMatchExact(n, r) != null && a.push(i);
      }
      return a;
    }
    function u(t) {
      if (t == null) return null;
      var n = [];
      for (var a of t)
        if (
          r("WAWebWid").isStringLid(a) &&
          (n.push(o("WAWebWidFactory").createUserLidOrThrow(a).user),
          n.length ===
            o("WAWebContactManagerProfileQueryPlan").MAX_CANDIDATE_LIDS)
        ) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ContactManager] local search reached the candidate cap of ",
                  " contacts; candidates truncated",
                ])),
              o("WAWebContactManagerProfileQueryPlan").MAX_CANDIDATE_LIDS,
            )
            .sendLogs("customer_manager_search_candidates_truncated");
          break;
        }
      return n;
    }
    ((l.findMatchingContactIds = s), (l.toCandidateLids = u));
  },
  98,
);
