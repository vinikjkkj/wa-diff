__d(
  "AdsPlacementParentPositionTooltipUtils",
  ["fbt", "AdsPlacementPositionPlugins"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = r("AdsPlacementPositionPlugins").get(e),
        n = t.nameWithPlatform.toString();
      return s._(
        /*BTDS*/ "This placement requires {parent_placement_needed_for_current_position_plugin} to be also included.",
        [s._param("parent_placement_needed_for_current_position_plugin", n)],
      );
    }
    var u = s._(/*BTDS*/ "There are no parent placements");
    ((l.getParentPlacementRequirementTooltip = e),
      (l.defaultTextForNoParentPlacements = u));
  },
  226,
);
