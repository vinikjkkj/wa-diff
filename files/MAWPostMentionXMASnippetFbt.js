__d(
  "MAWPostMentionXMASnippetFbt",
  ["fbt", "isStringNullOrWhitespaceOnly"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        return r("isStringNullOrWhitespaceOnly")(t)
          ? s._(/*BTDS*/ "You tagged this user in your post")
          : s._(/*BTDS*/ "You tagged {user_name} in your post", [
              s._param("user_name", t),
            ]);
      },
      u = function (t) {
        return r("isStringNullOrWhitespaceOnly")(t)
          ? s._(/*BTDS*/ "This user tagged you in their post")
          : s._(/*BTDS*/ "{user_name} tagged you in their post", [
              s._param("user_name", t),
            ]);
      };
    ((l.getCurrentUserSendPostMentionSnippetFbt = e),
      (l.getParticipantSendPostMentionSnippetFbt = u));
  },
  226,
);
