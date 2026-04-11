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
      }),
      l = function (n) {
        switch (n) {
          case e.UNREAD:
          case e.ASSIGNED_TO_YOU:
          case e.CONTACT:
          case e.GROUP:
          case e.COMMUNITY:
          case e.LABELS:
          case e.FAVORITES:
          case e.CHANNELS:
            return !0;
          case e.BROADCAST:
          case e.NON_CONTACT:
          case e.BUSINESS:
          case e.PERSONAL:
            return !1;
        }
      },
      s = function (n) {
        switch (n) {
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
            return !1;
        }
      };
    ((i.SearchFilters = e),
      (i.isFilterExcludedFromSearchTreatmentInInboxFlow = l),
      (i.isFilterExcludedFromSearchTreatmentInNormalFlow = s));
  },
  66,
);
