__d(
  "WAWebTextMutatorComponentUtils",
  [
    "WAWebBulletedListItemMutatorComponent.react",
    "WAWebNumberedListItemMutatorComponent.react",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = Array.isArray(e) ? e : [e],
        n = [],
        o = [];
      for (var a of t)
        if (typeof a == "string" && a.match(/^\r?\n$/) && o.length) o.push(a);
        else if (
          a != null &&
          typeof a == "object" &&
          (a.type === r("WAWebBulletedListItemMutatorComponent.react") ||
            a.type === r("WAWebNumberedListItemMutatorComponent.react"))
        )
          o.push(a);
        else {
          var i = a;
          (o.length &&
            (n.push({ isList: !0, children: o }),
            (o = []),
            typeof i == "string" && (i = i.replace(/^\r?\n/g, ""))),
            n.push({ isList: !1, children: i }));
        }
      return (o.length && n.push({ isList: !0, children: o }), n);
    }
    l.groupListChildren = e;
  },
  98,
);
