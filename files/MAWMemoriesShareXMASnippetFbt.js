__d(
  "MAWMemoriesShareXMASnippetFbt",
  ["fbt", "isStringNullOrWhitespaceOnly"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function () {
        return s._(/*BTDS*/ "You sent a memory");
      },
      u = function (t) {
        return r("isStringNullOrWhitespaceOnly")(t)
          ? s._(/*BTDS*/ "This user sent a memory")
          : s._(/*BTDS*/ "{user_name} sent a memory", [
              s._param("user_name", t),
            ]);
      };
    ((l.getCurrentUserSendMemoriesShareSnippetFbt = e),
      (l.getParticipantSendMemoriesShareSnippetFbt = u));
  },
  226,
);
