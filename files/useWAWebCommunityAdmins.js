__d(
  "useWAWebCommunityAdmins",
  ["react-compiler-runtime", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("react-compiler-runtime").c(7),
        a = (t = e.groupMetadata) == null ? void 0 : t.participants,
        i;
      n[0] !== a ? ((i = [a]), (n[0] = a), (n[1] = i)) : (i = n[1]);
      var l;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["bulk_add", "bulk_remove", "reset", "change:isAdmin"]),
          (n[2] = l))
        : (l = n[2]);
      var u;
      n[3] !== a
        ? ((u = function () {
            return a == null ? void 0 : a.filter(s);
          }),
          (n[3] = a),
          (n[4] = u))
        : (u = n[4]);
      var c = r("useWAWebEventTargetValue")(i, l, u),
        d;
      return (
        n[5] !== c
          ? ((d = c != null ? c : []), (n[5] = c), (n[6] = d))
          : (d = n[6]),
        d
      );
    }
    function s(e) {
      return e.isAdmin;
    }
    l.default = e;
  },
  98,
);
