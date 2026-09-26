__d(
  "GroupsCometInsightsUtils",
  [
    "CometLocalDate",
    "CometRouteURL",
    "ConstUriUtils",
    "ForumInsightsAudienceType",
    "GroupCometInsightsTimeUtils",
    "XCometGroupInsightsControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "TWENTY_EIGHT_DAYS",
      s = "/groups/{idorvanity}/insights/";
    function u(e) {
      return (e == null ? void 0 : e.routePath) === s;
    }
    function c(e, t) {
      var n,
        a = o("ConstUriUtils").getUri(t),
        i =
          a == null || (n = a.getQueryParams()) == null
            ? void 0
            : n.get("section");
      if (i == null) return t;
      var l = d();
      return r("XCometGroupInsightsControllerRouteBuilder")
        .buildUri(babelHelpers.extends({ idorvanity: e }, l, { section: i }))
        .toString();
    }
    function d() {
      var e,
        t = (e = o("CometRouteURL").getWindowURLParams()) != null ? e : {},
        n = t.admin_activity,
        r = t.end,
        a = t.include_today,
        i = t.participants_filter,
        l = t.section,
        s = t.selected_subgroup,
        u = t.start,
        c = t.subsection;
      return {
        admin_activity: n,
        end: r,
        include_today: a,
        participants_filter: i,
        section: l,
        selected_subgroup: s,
        start: u,
        subsection: c,
      };
    }
    function m() {
      var e = d(),
        t = e.end,
        n = e.participants_filter,
        r = e.selected_subgroup,
        o = e.start;
      return { end: t, participants_filter: n, selected_subgroup: r, start: o };
    }
    function p(t, n, o, a) {
      var i = m(),
        l = i.end,
        s = i.participants_filter,
        u = i.selected_subgroup,
        c = i.start,
        d = Object.keys(r("ForumInsightsAudienceType")).find(function (e) {
          return r("ForumInsightsAudienceType")[e] === s;
        });
      if (s != null && d == null) return null;
      var p = a.find(function (e) {
        var t = e.id;
        return t === u;
      });
      if (u != null && p == null) return null;
      var _ = r("GroupCometInsightsTimeUtils").getEndOfToday(),
        f =
          l == null
            ? r("GroupCometInsightsTimeUtils").getDefaultEndTimeState(t, n)
            : new Date(+l);
      if (f > _) return null;
      var g = r("CometLocalDate")
          .fromDate(new Date())
          .getWithDaysAdded(-365)
          .getJSDate(),
        h =
          c == null
            ? r("GroupCometInsightsTimeUtils").getPresetTimeRangeStartDate(e, f)
            : new Date(+c);
      return h < g || h > f
        ? null
        : {
            end: f,
            groupOrSubgroupID: p == null ? void 0 : p.id,
            groupOrSubgroupName: p == null ? void 0 : p.name,
            participantsFilter: d != null ? d : o ? "EVERYONE" : null,
            start: h,
          };
    }
    ((l.isCometRouteFromGroupInsightsController = u),
      (l.getInsightsURLWithPersistentFilterParams = c),
      (l.getInsightsControllerUserParamsFromURL = d),
      (l.getSanitizedFilterParamsFromURL = p));
  },
  98,
);
