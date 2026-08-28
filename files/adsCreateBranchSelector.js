__d(
  "adsCreateBranchSelector",
  ["adsCreateSelector", "createFailThunkSelector", "createPassThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      o === void 0 && (o = !1);
      var i = r("createPassThunkSelector")(t),
        l = r("createFailThunkSelector")(n);
      return r("adsCreateSelector")(
        [e, i, l],
        function (t, n, r) {
          return t ? n() : r();
        },
        { name: (a != null ? a : "unnamedBranchSelector") + "-branch" },
      );
    }
    l.default = e;
  },
  98,
);
