__d(
  "WAWebLabyrinthOwnerAccountId",
  ["WAWebLabyrinthOpaqueTypes", "WAWebUserPrefsMeUser", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return u() === e;
    }
    function s() {
      return o("WAWebLabyrinthOpaqueTypes").makeOwnerAccountId(
        o("WAWebUserUtils").getMeLidUserOrThrow().toString(),
      );
    }
    function u() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : e.toString();
      return t == null
        ? null
        : o("WAWebLabyrinthOpaqueTypes").makeOwnerAccountId(t);
    }
    ((l.isCurrentAccount = e),
      (l.getOwnerAccountId = s),
      (l.getMaybeOwnerAccountId = u));
  },
  98,
);
