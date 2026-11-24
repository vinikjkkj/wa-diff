__d(
  "WAWebGroupMembersRequestName",
  ["WAWebContactGetters", "WAWebFrontendContactGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s(
        {
          formattedUser: o("WAWebFrontendContactGetters").getFormattedUser(e),
          isMyContact: o("WAWebFrontendContactGetters").getIsMyContact(e),
          pushname: o("WAWebContactGetters").getPushname(e),
        },
        t,
      );
    }
    function s(e, t) {
      var n = e.formattedUser,
        r = e.isMyContact,
        o = e.pushname;
      return t && o != null && o !== "" && !r ? "~" + o : n;
    }
    ((l.getGroupMembersRequestName = e), (l.pickGroupMembersRequestName = s));
  },
  98,
);
