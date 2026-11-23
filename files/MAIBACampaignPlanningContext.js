__d(
  "MAIBACampaignPlanningContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = function () {},
      p = {
        activeQueryRef: null,
        isPublished: !1,
        markPublishedLocally: m,
        notifyServerPublished: m,
        refreshWorkspaceSilently: m,
      },
      _ = c(p);
    function f() {
      return d(_);
    }
    ((l.MAIBACampaignPlanningContext = _),
      (l.useMAIBACampaignPlanningContext = f));
  },
  98,
);
