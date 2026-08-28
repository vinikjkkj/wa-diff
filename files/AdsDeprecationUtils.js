__d(
  "AdsDeprecationUtils",
  ["fbt", "AdsAPIObjectives", "AdsAPIOptimizationGoals", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = s._(
        /*BTDS*/ "This campaign is using an objective that is no longer supported. Edit the objective or create a new campaign to continue.",
      ),
      p = s._(
        /*BTDS*/ "Your selection includes one or more campaigns with an objective that is no longer supported. Edit your selection to continue.",
      ),
      _ = s._(
        /*BTDS*/ "This campaign is using a feature that is no longer supported. Change the optimization for ad delivery or create a new campaign to continue.",
      ),
      f = new Set([
        (c = r("AdsAPIObjectives")).CANVAS_APP_ENGAGEMENT,
        c.CANVAS_APP_INSTALLS,
        c.LOCAL_AWARENESS,
        c.MOBILE_APP_ENGAGEMENT,
        c.MOBILE_APP_INSTALLS,
        c.OFFER_CLAIMS,
        c.NONE,
      ]),
      g = r("immutable").Map(
        ((e = {}),
        (e[(d = r("AdsAPIOptimizationGoals")).POST_ENGAGEMENT] = [
          c.PAGE_LIKES,
        ]),
        (e[d.IMPRESSIONS] = [c.APP_INSTALLS]),
        (e[d.OFFLINE_CONVERSIONS] = [c.WEBSITE_CONVERSIONS]),
        e),
      ),
      h = r("immutable").Map(
        ((u = {}),
        (u[d.IMPRESSIONS] = [c.PAGE_LIKES]),
        (u[d.REACH] = [c.PRODUCT_CATALOG_SALES]),
        (u[d.VIDEO_VIEWS] = [c.VIDEO_VIEWS]),
        (u[d.OFFSITE_CONVERSIONS] = [c.LINK_CLICKS]),
        u),
      );
    function y(e) {
      return f.has(e);
    }
    function C(e, t) {
      var n, r;
      return (
        !!((n = g.get(t)) != null && n.includes(e)) ||
        !!((r = h.get(t)) != null && r.includes(e))
      );
    }
    ((l.BLOCK_DUPLICATE_DEPRECATED_OBJECTIVE_TOOLTIP = m),
      (l.BLOCK_BULK_DUPLICATE_DEPRECATED_OBJECTIVE_TOOLTIP = p),
      (l.BLOCK_DUPLICATE_FOR_BOTTOM_OBJECTIVE_OPTIMIZATION_GOAL_TOOLTIP = _),
      (l.hasDeprecatedObjective = y),
      (l.hasDeprecatedOptimizationGoalObjectiveCombo = C));
  },
  226,
);
