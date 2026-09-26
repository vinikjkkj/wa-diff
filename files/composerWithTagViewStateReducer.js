__d(
  "composerWithTagViewStateReducer",
  [
    "addTagsToWithTagsIDsTracker",
    "removeWithTagAttributionForSourceIDFromTracker",
    "removeWithTagAttributionFromTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = t.withTagID,
        a = r("addTagsToWithTagsIDsTracker")(
          "WithTagTool",
          [o],
          (n = e.withTagIDsTracker) != null ? n : new Map(),
        );
      return babelHelpers.extends({}, e, { withTagIDsTracker: a });
    }
    function s(e, t) {
      var n = new Map(e.withTagIDsTracker),
        o = t.withTagID,
        a = r("removeWithTagAttributionFromTracker")(o, n, "WithTagTool");
      return babelHelpers.extends({}, e, { withTagIDsTracker: a });
    }
    function u(e) {
      return babelHelpers.extends({}, e, { withTagIDsTracker: void 0 });
    }
    function c(e, t) {
      var n = new Map(e.withTagIDsTracker),
        o = t.withTagIDs,
        a = n
          .keys()
          .toArray()
          .filter(function (e) {
            return !o.includes(e);
          }),
        i = o.filter(function (e) {
          return !n.has(e);
        }),
        l = r("removeWithTagAttributionForSourceIDFromTracker")(
          n,
          a,
          "WithTagTool",
        ),
        s = r("addTagsToWithTagsIDsTracker")(
          "WithTagTool",
          i,
          l != null ? l : new Map(),
        );
      return babelHelpers.extends({}, e, { withTagIDsTracker: s });
    }
    function d(t, n) {
      switch (n.type) {
        case "ADD_WITH_TAG_ID":
          return e(t, n);
        case "REMOVE_WITH_TAG_ID":
          return s(t, n);
        case "REMOVE_ALL_WITH_TAGS":
          return u(t);
        case "SET_WITH_TAGS_IDS":
          return c(t, n);
      }
      return t;
    }
    l.default = d;
  },
  98,
);
