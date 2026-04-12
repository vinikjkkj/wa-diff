__d(
  "useWAWebCommunityAdmins",
  ["useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.groupMetadata) == null ? void 0 : t.participants,
        o = r("useWAWebEventTargetValue")(
          [n],
          ["bulk_add", "bulk_remove", "reset", "change:isAdmin"],
          function () {
            return n == null
              ? void 0
              : n.filter(function (e) {
                  return e.isAdmin;
                });
          },
        );
      return o != null ? o : [];
    }
    l.default = e;
  },
  98,
);
