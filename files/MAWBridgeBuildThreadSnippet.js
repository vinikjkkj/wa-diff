__d(
  "MAWBridgeBuildThreadSnippet",
  [
    "MAWAdminMsg",
    "MAWBridgeBuildMsgMentions",
    "MAWLocalizationType",
    "MAWVault",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null ? o("MAWVault").unvault(e) : void 0;
    }
    function s(e, t, n) {
      if (e == null) return t;
      var r = [].concat(t);
      switch (n) {
        case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_TEXT:
        case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_TEXT:
        case o("MAWLocalizationType").LOCALIZATION_TYPE
          .PARTICIPANT_SEND_TEXT_IN_GROUP: {
          r[0] = e;
          break;
        }
      }
      return r;
    }
    function u(e) {
      return e.replace(/\$/g, "$$$$");
    }
    function c(t, n) {
      var a = t.snippetContactIDs,
        i = t.snippetMentionJIDs,
        l = t.snippetParams,
        c = t.snippetSenderContactId,
        d = t.snippetType;
      if (l == null || d == null || a == null) return n;
      c != null && !a.includes(c) && a.push(c);
      var m = e(r("first")(l)),
        p = o("MAWBridgeBuildMsgMentions").buildThreadSnippetWithMentions(
          m == null ? null : u(m),
          i,
          a,
          d,
        ),
        _ = p[0],
        f = p[1];
      return o("MAWAdminMsg").buildLocalizedString(s(_, l, d), f, d);
    }
    l.buildBridgeThreadSnippet = c;
  },
  98,
);
