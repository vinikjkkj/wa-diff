__d(
  "WAWebWWAIMentionAnonymizer",
  [],
  function (t, n, r, o, a, i) {
    var e = "__MENTION_",
      l = /__MENTION_(\d+)__/g;
    function s(t, n) {
      var r = new Map(),
        o = t,
        a = n.map(function (e, t) {
          return [t, e];
        });
      a.sort(function (e, t) {
        return t[1].split("@")[0].length - e[1].split("@")[0].length;
      });
      for (var i of a) {
        var l = i[0],
          s = i[1],
          u = "" + e + l + "__";
        r.set(String(l), s);
        var d = c(s.split("@")[0]);
        o = o.replace(
          new RegExp("(^|[^A-Za-z0-9])@" + d + "(?!\\d)", "g"),
          "$1" + u,
        );
      }
      return { text: o, mentionMap: r };
    }
    function u(e, t) {
      return t.size === 0
        ? e
        : e.replace(l, function (e, n) {
            var r = t.get(n);
            return r != null ? "@" + r.split("@")[0] : e;
          });
    }
    function c(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    ((i.anonymizeMentions = s), (i.restoreMentions = u));
  },
  66,
);
