__d(
  "WAWebFrontendGroupMetadataGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebGroupMetadataGetters"],
  function (t, n, r, o, a, i, l) {
    var e = "https://chat.whatsapp.com/",
      s = o("WAWebGetters").createGetterFactories({
        root: o("WAWebGroupMetadataGetters").getGroupMetadataUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendGroupMetadataCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field;
    function m(e) {
      u(e);
    }
    function p(e) {
      return d(e);
    }
    var _ = p("afterReadDuration"),
      f = p("allowNonAdminSubGroupCreation"),
      g = p("announce"),
      h = p("creation"),
      y = p("displayedDesc"),
      C = p("ephemeralDuration"),
      b = p("groupAdder"),
      v = p("hasCapi"),
      S = p("id"),
      R = p("isLidAddressingMode"),
      L = p("isOpenBotGroup"),
      E = p("isTeeBotGroup"),
      k = p("joinedSubgroups"),
      I = p("lastReportToAdminTimestamp"),
      T = p("memberAddMode"),
      D = p("memberLinkMode"),
      x = p("membershipApprovalMode"),
      $ = p("memberShareGroupHistoryMode"),
      P = p("owner"),
      N = p("parentGroup"),
      M = p("reportToAdminMode"),
      w = p("restrict"),
      A = p("shouldDefaultGroupHistoryShareOn"),
      F = p("size"),
      O = p("support"),
      B = p("terminated"),
      W = p("uniqueShortNameMap"),
      q = p("unjoinedSubgroups"),
      U = d("inviteCode"),
      V = c(
        function (t) {
          var n = t[0];
          return n ? "" + e + n : null;
        },
        [U],
      );
    ((l.clearFrontendGroupMetadataGetterCacheFor = m),
      (l.getAfterReadDuration = _),
      (l.getAllowNonAdminSubGroupCreation = f),
      (l.getAnnounce = g),
      (l.getCreation = h),
      (l.getDisplayedDesc = y),
      (l.getEphemeralDuration = C),
      (l.getGroupAdder = b),
      (l.getHasCapi = v),
      (l.getId = S),
      (l.getIsLidAddressingMode = R),
      (l.getIsOpenBotGroup = L),
      (l.getIsTeeBotGroup = E),
      (l.getJoinedSubgroups = k),
      (l.getLastReportToAdminTimestamp = I),
      (l.getMemberAddMode = T),
      (l.getMemberLinkMode = D),
      (l.getMembershipApprovalMode = x),
      (l.getMemberShareGroupHistoryMode = $),
      (l.getOwner = P),
      (l.getParentGroup = N),
      (l.getReportToAdminMode = M),
      (l.getRestrict = w),
      (l.getShouldDefaultGroupHistoryShareOn = A),
      (l.getSize = F),
      (l.getSupport = O),
      (l.getTerminated = B),
      (l.getUniqueShortNameMap = W),
      (l.getUnjoinedSubgroups = q),
      (l.getGroupInviteLink = V));
  },
  98,
);
