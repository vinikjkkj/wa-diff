__d(
  "useWAWebIAmCommunityAdmin",
  ["useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.participants,
        n = r("useWAWebEventTargetValue")(
          t,
          ["bulk_add", "bulk_remove"],
          function () {
            return t == null ? void 0 : t.iAmAdmin();
          },
        );
      return !!n;
    }
    l.default = e;
  },
  98,
);
