__d(
  "WAFlowsCalendarPickerDialogNavigationReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      UPDATE_NAVIGATION_STATE: "UPDATE_NAVIGATION_STATE",
      SHOW_NAVIGATION_WHEELS: "SHOW_NAVIGATION_WHEELS",
      UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE",
      NAVIGATE_PAGE: "NAVIGATE_PAGE",
    };
    function l(t, n) {
      switch (n.type) {
        case e.UPDATE_NAVIGATION_STATE:
          return babelHelpers.extends({}, t, {
            canNavigatePrevious: n.canPrevious,
            canNavigateNext: n.canNext,
          });
        case e.SHOW_NAVIGATION_WHEELS:
          return babelHelpers.extends({}, t, {
            navigationWheelsOpen: n.open,
            currentPage: n.focusPage != null ? n.focusPage : t.currentPage,
          });
        case e.UPDATE_CURRENT_PAGE:
          return babelHelpers.extends({}, t, { currentPage: n.page });
        case e.NAVIGATE_PAGE:
          return n.direction === "previous"
            ? babelHelpers.extends({}, t, {
                currentPage: t.canNavigatePrevious
                  ? t.currentPage - 1
                  : t.currentPage,
              })
            : n.direction === "next"
              ? babelHelpers.extends({}, t, {
                  currentPage: t.canNavigateNext
                    ? t.currentPage + 1
                    : t.currentPage,
                })
              : t;
        default:
          return t;
      }
    }
    ((i.WAFlowsCalendarPickerNavigationActionTypes = e),
      (i.calendarPickerPageNavigationReducer = l));
  },
  66,
);
