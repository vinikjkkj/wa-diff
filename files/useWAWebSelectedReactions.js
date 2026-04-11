__d(
  "useWAWebSelectedReactions",
  ["react-compiler-runtime", "useWAWebReactions"],
  function (t, n, r, o, a, i, l) {
    var e = function () {};
    function s(t) {
      var n = o("react-compiler-runtime").c(2),
        a;
      n[0] !== t ? ((a = [t]), (n[0] = t), (n[1] = a)) : (a = n[1]);
      var i = r("useWAWebReactions")(a, e),
        l = i.reactionsModels;
      if (l[0]) {
        var s;
        return (s = l[0].reactionByMe) == null ? void 0 : s.reactionText;
      }
      return null;
    }
    l.default = s;
  },
  98,
);
