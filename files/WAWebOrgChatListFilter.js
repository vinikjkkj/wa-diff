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
        r,
        a,
        i =
          (n = o("WAWebOrgCollection").OrgCollection.get(t)) == null
            ? void 0
            : n.members;
      if (!o("WAWebOrgGatingUtils").isOrgsEnabled() || i == null) return !1;
      var l = function (t) {
        var e = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(t);
        return e != null && i.get(e.user) != null;
      };
      if (!o("WAWebContactGetters").getIsGroup(e.contact))
        return (
          e.contact.id.isUser() &&
          !o("WAWebUserUtils").isMeAccount(e.contact.id) &&
          l(e.contact.id)
        );
      var s =
        (r =
          (a = e.groupMetadata) == null
            ? void 0
            : a.participants.toArray().filter(function (e) {
                return !o("WAWebUserUtils").isMeAccount(e.id);
              })) != null
          ? r
          : [];
      return (
        s.length > 0 &&
        s.every(function (e) {
          return l(e.id);
        })
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
