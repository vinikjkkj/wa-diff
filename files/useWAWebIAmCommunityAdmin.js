__d(
  "useWAWebIAmCommunityAdmin",
  ["react-compiler-runtime", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e == null ? void 0 : e.participants,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["bulk_add", "bulk_remove"]), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n
        ? ((i = function () {
            return n == null ? void 0 : n.iAmAdmin();
          }),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l = r("useWAWebEventTargetValue")(n, a, i);
      return !!l;
    }
    l.default = e;
  },
  98,
);
