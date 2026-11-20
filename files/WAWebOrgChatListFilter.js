__d(
  "WAWebOrgChatListFilter",
  [
    "WALogger",
    "WAWebContactGetters",
    "WAWebOrgCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgLazyActions",
    "WAWebOrgMemberLidEligibility",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n,
        r = e.contact.id;
      if (
        !o("WAWebOrgGatingUtils").isOrgsEnabled() ||
        o("WAWebContactGetters").getIsGroup(e.contact) ||
        !r.isUser() ||
        o("WAWebUserUtils").isMeAccount(r)
      )
        return !1;
      var a = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(r);
      return (
        a != null &&
        ((n = o("WAWebOrgCollection").OrgCollection.get(t)) == null
          ? void 0
          : n.members.get(a.user)) != null
      );
    }
    function u(t) {
      o("WAWebOrgLazyActions")
        .loadOrgFetchDirectoryAction()
        .then(function (e) {
          return e.loadOrgDirectoryMembers(t);
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-chat-filter] could not load the network's members",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-chat-filter-members-load-failed");
        });
    }
    ((l.isChatWithNetworkMembers = s), (l.loadNetworkFilterMembers = u));
  },
  98,
);
