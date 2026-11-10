__d(
  "WAWebUsernameRevocationUserPrefs",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = {
      chat_list:
        o("WAWebUserPrefsKeys").UserPrefs
          .UsernameRevocationBannerDismissedChatList,
      profile:
        o("WAWebUserPrefsKeys").UserPrefs
          .UsernameRevocationBannerDismissedProfile,
    };
    function s() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").UserPrefs.UsernameRevoked,
      );
      return typeof e != "string"
        ? null
        : { assignedUsername: e === "" ? null : e };
    }
    function u() {
      return s() != null;
    }
    function c(e) {
      var t = s();
      (t != null && t.assignedUsername === (e != null ? e : null)) ||
        (r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").UserPrefs.UsernameRevoked,
          e != null ? e : "",
        ),
        f());
    }
    function d(e) {
      var t = s();
      t != null && t.assignedUsername !== e && m();
    }
    function m() {
      u() &&
        (r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").UserPrefs.UsernameRevoked,
          null,
        ),
        f());
    }
    function p(t) {
      return r("WAWebUserPrefsStore").get(e[t]) === !0;
    }
    function _(t) {
      r("WAWebUserPrefsStore").set(e[t], !0);
    }
    function f() {
      (r("WAWebUserPrefsStore").set(e.chat_list, null),
        r("WAWebUserPrefsStore").set(e.profile, null));
    }
    ((l.getUsernameRevocation = s),
      (l.isUsernameRevoked = u),
      (l.markUsernameRevoked = c),
      (l.clearUsernameRevokedForNewUsername = d),
      (l.clearUsernameRevoked = m),
      (l.isUsernameRevocationDismissed = p),
      (l.dismissUsernameRevocation = _));
  },
  98,
);
