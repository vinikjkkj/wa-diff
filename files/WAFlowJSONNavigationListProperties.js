__d(
  "WAFlowJSONNavigationListProperties",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        SMALL: "small",
        REGULAR: "regular",
        LARGE: "large",
      }),
      l = Object.freeze({
        MEDIA_SIZE: "media-size",
        LIST_ITEMS: "list-items",
        MAIN_CONTENT: "main-content",
        END_ADD_ON: "end",
        START_ADD_ON: "start",
        TAGS: "tags",
        ID: "id",
        BADGE: "badge",
        ON_CLICK_ACTION: "on-click-action",
        TITLE: "title",
        DESCRIPTION: "description",
        METADATA: "metadata",
      }),
      s = n("$InternalEnum")({
        DUPLICATE_ACTION: "duplicateAction",
        MISSING_ACTION: "missingAction",
        END_ADD_ON_MISSING: "endAddOnMissing",
        END_ADD_ON: "endAddOn",
        BADGE_COUNT: "badgeCount",
        INVALID_NAVIGATION: "invalidNavigation",
      }),
      u = { MAX_TAGS: 3, MIN_ITEMS: 1 };
    ((i.WAFlowJSONNavigationListMediaSizeType = e),
      (i.WAFlowJSONNavigationListPropsType = l),
      (i.WAFlowJSONNavigationListErrorKeywords = s),
      (i.WAFlowJSONNavigationListConstants = u));
  },
  66,
);
