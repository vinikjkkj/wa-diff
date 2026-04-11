__d(
  "WAWebSideNavButtonsActivityModel",
  [
    "$InternalEnum",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebGroupType",
    "WAWebNavBarTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["Chats", "Community", "Newsletters"]),
      s = null,
      u = null,
      c = new Map([
        [e.Chats, null],
        [e.Newsletters, null],
        [e.Community, null],
      ]),
      d = function () {
        return s;
      },
      m = function (t) {
        s = t;
      },
      p = function () {
        var t;
        return (t = c.get(e.Chats)) != null ? t : null;
      },
      _ = function (n) {
        c.set(e.Chats, n);
      },
      f = function () {
        var t;
        return (t = c.get(e.Newsletters)) != null ? t : null;
      },
      g = function (n) {
        c.set(e.Newsletters, n);
      },
      h = function (t) {
        u = t;
      },
      y = function () {
        return u || o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab;
      },
      C = function () {
        var t;
        return (t = c.get(e.Community)) != null ? t : null;
      },
      b = function (n) {
        c.set(e.Community, n);
      },
      v = function (t) {
        var e = t.id.toString(),
          n = d();
        if (n == null) {
          _(e);
          return;
        }
        switch (n) {
          case o("WAWebNavBarTypes").NavBarItems.Chats:
            _(e);
            break;
          case o("WAWebNavBarTypes").NavBarItems.Newsletters:
            o("WAWebChatGetters").getIsNewsletter(t) && g(e);
            break;
          case o("WAWebNavBarTypes").NavBarItems.Communities:
            if (t.groupType != null)
              switch (t.groupType) {
                case o("WAWebGroupType").GroupType.COMMUNITY:
                case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                  b(e);
                  break;
                case o("WAWebGroupType").GroupType.DEFAULT:
                  _(e);
                  break;
              }
            break;
          case o("WAWebNavBarTypes").NavBarItems.Updates:
            o("WAWebChatGetters").getIsNewsletter(t) && g(e);
            break;
          case o("WAWebNavBarTypes").NavBarItems.Archived:
          case o("WAWebNavBarTypes").NavBarItems.Beta:
          case o("WAWebNavBarTypes").NavBarItems.BizTools:
          case o("WAWebNavBarTypes").NavBarItems.AdCreation:
          case o("WAWebNavBarTypes").NavBarItems.Calls:
          case o("WAWebNavBarTypes").NavBarItems.Contacts:
          case o("WAWebNavBarTypes").NavBarItems.Orders:
          case o("WAWebNavBarTypes").NavBarItems.Labels:
          case o("WAWebNavBarTypes").NavBarItems.LockedChats:
          case o("WAWebNavBarTypes").NavBarItems.Starred:
          case o("WAWebNavBarTypes").NavBarItems.Settings:
          case o("WAWebNavBarTypes").NavBarItems.Profile:
          case o("WAWebNavBarTypes").NavBarItems.Status:
          case o("WAWebNavBarTypes").NavBarItems.MediaHub:
          case o("WAWebNavBarTypes").NavBarItems.MetaAI:
          case o("WAWebNavBarTypes").NavBarItems.MeTab:
          case o("WAWebNavBarTypes").NavBarItems.CustomerManager:
            break;
        }
      };
    ((l.getLastActiveButton = d),
      (l.setLastActiveButton = m),
      (l.getLastActiveChat = p),
      (l.setLastActiveChat = _),
      (l.getLastActiveNewsletter = f),
      (l.setLastActiveNewsletter = g),
      (l.setLastActiveNewsletterEntryPoint = h),
      (l.getLastActiveNewsletterEntryPoint = y),
      (l.getLastActiveCommunity = C),
      (l.setLastActiveCommunity = b),
      (l.setLastSideBarActivityBasedOnChat = v));
  },
  98,
);
