__d(
  "useWAWebSelectedReactions",
  ["useWAWebReactions"],
  function (t, n, r, o, a, i, l) {
    var e = function () {};
    function s(t) {
      var n = r("useWAWebReactions")([t], e),
        o = n.reactionsModels;
      if (o[0]) {
        var a;
        return (a = o[0].reactionByMe) == null ? void 0 : a.reactionText;
      }
      return null;
    }
    l.default = s;
  },
  98,
);
