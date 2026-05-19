__d(
  "WAWebChatSearchFilters",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
      UNREAD: "unread",
      FAVORITES: "favorites",
      GROUP: "group",
      COMMUNITY: "community",
      BROADCAST: "broadcast",
      CONTACT: "contact",
      NON_CONTACT: "non_contact",
      ASSIGNED_TO_YOU: "assigned_to_you",
      PERSONAL: "personal",
      BUSINESS: "business",
      LABELS: "labels",
      CHANNELS: "channels",
      AI_RESPONDING: "ai_responding",
      AI_HANDOFF: "ai_handoff",
    });
    function l(t) {
      switch (t) {
        case e.UNREAD:
        case e.ASSIGNED_TO_YOU:
        case e.CONTACT:
        case e.GROUP:
        case e.COMMUNITY:
        case e.LABELS:
        case e.FAVORITES:
        case e.CHANNELS:
        case e.AI_RESPONDING:
        case e.AI_HANDOFF:
          return !0;
        case e.BROADCAST:
        case e.NON_CONTACT:
        case e.BUSINESS:
        case e.PERSONAL:
          return !1;
      }
    }
    function s(t) {
      switch (t) {
        case e.UNREAD:
        case e.ASSIGNED_TO_YOU:
          return !0;
        case e.BROADCAST:
        case e.NON_CONTACT:
        case e.BUSINESS:
        case e.PERSONAL:
        case e.CONTACT:
        case e.GROUP:
        case e.COMMUNITY:
        case e.LABELS:
        case e.FAVORITES:
        case e.CHANNELS:
        case e.AI_RESPONDING:
        case e.AI_HANDOFF:
          return !1;
      }
    }
    ((i.SearchFilters = e),
      (i.isFilterExcludedFromSearchTreatmentInInboxFlow = l),
      (i.isFilterExcludedFromSearchTreatmentInNormalFlow = s));
  },
  66,
);
