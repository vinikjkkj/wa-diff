__d(
  "WAWebSideNavButtonsActivityModel",
  [
    "$InternalEnum",
    "WAWebBotGating",
    "WAWebBotUtils",
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
      ]);
    function d() {
      return s;
    }
    function m(e) {
      s = e;
    }
    function p() {
      var t;
      return (t = c.get(e.Chats)) != null ? t : null;
    }
    function _(t) {
      c.set(e.Chats, t);
    }
    function f() {
      var t;
      return (t = c.get(e.Newsletters)) != null ? t : null;
    }
    function g(t) {
      c.set(e.Newsletters, t);
    }
    function h(e) {
      u = e;
    }
    function y() {
      return u || o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab;
    }
    function C() {
      var t;
      return (t = c.get(e.Community)) != null ? t : null;
    }
    function b(t) {
      c.set(e.Community, t);
    }
    function v(e) {
      if (
        !(
          o("WAWebBotUtils").isMetaAiBot(e.id) &&
          o("WAWebBotGating").isAiChatThreadsEnabled()
        )
      ) {
        var t = e.id.toString(),
          n = d();
        if (n == null) {
          _(t);
          return;
        }
        switch (n) {
          case o("WAWebNavBarTypes").NavBarItems.Chats:
            _(t);
            break;
          case o("WAWebNavBarTypes").NavBarItems.Newsletters:
            o("WAWebChatGetters").getIsNewsletter(e) && g(t);
            break;
          case o("WAWebNavBarTypes").NavBarItems.Communities:
            if (e.groupType != null)
              switch (e.groupType) {
                case o("WAWebGroupType").GroupType.COMMUNITY:
                case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                  b(t);
                  break;
                case o("WAWebGroupType").GroupType.DEFAULT:
                  _(t);
                  break;
              }
            break;
          case o("WAWebNavBarTypes").NavBarItems.Updates:
            o("WAWebChatGetters").getIsNewsletter(e) && g(t);
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
      }
    }
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
