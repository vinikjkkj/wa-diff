__d(
  "WAWebWWAIMentionAnonymizer",
  [],
  function (t, n, r, o, a, i) {
    var e = "__MENTION_",
      l = /__MENTION_(\d+)__/g,
      s = /\b[\w.+-]+@(?:lid|s\.whatsapp\.net|c\.us)\b/g;
    function u(t, n) {
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
          u = i[1],
          c = "" + e + l + "__";
        r.set(String(l), u);
        var m = d(u.split("@")[0]);
        o = o.replace(
          new RegExp("(^|[^A-Za-z0-9])@" + m + "(?!\\d)", "g"),
          "$1" + c,
        );
      }
      var p = n.length;
      return (
        (o = o.replace(s, function (t) {
          if (t.includes(e)) return t;
          var n = "" + e + p + "__";
          return (r.set(String(p), t), p++, n);
        })),
        { text: o, mentionMap: r }
      );
    }
    function c(e, t) {
      return t.size === 0
        ? e
        : e.replace(l, function (e, n) {
            var r = t.get(n);
            return r != null ? "@" + r.split("@")[0] : e;
          });
    }
    function d(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    ((i.anonymizeMentions = u), (i.restoreMentions = c));
  },
  66,
);
