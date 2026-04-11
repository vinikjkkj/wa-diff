__d(
  "getTabbableNodes",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = document.activeElement,
        r = function (r, o, a) {
          return a === n
            ? !0
            : e(r, o, a) &&
                a.offsetWidth > 0 &&
                a.offsetHeight > 0 &&
                a.tabIndex !== -1 &&
                window.getComputedStyle(a).visibility !== "hidden";
        },
        o = n ? t.DO_NOT_USE_queryAllNodes(r) : null;
      if (o === null) return [null, null, null, 0, null];
      var a = {};
      for (var i of o)
        if (
          i instanceof HTMLInputElement &&
          i.tagName === "INPUT" &&
          i.type === "radio" &&
          i.name != null
        ) {
          var l;
          a[i.name] = [].concat((l = a[i.name]) != null ? l : [], [i]);
        }
      var s = Object.values(a)
        .map(function (e) {
          if (
            e.find(function (e) {
              return e.checked;
            })
          )
            return e.filter(function (e) {
              return !e.checked;
            });
          var t = e[0],
            n = babelHelpers.arrayLikeToArray(e).slice(1);
          return n;
        })
        .flat();
      o = o.filter(function (e) {
        return !s.includes(e);
      });
      var u = o[0],
        c = o[o.length - 1],
        d = o.indexOf(n),
        m = null;
      return (d !== -1 && (m = o[d]), [o, u, c, d, m]);
    }
    i.default = e;
  },
  66,
);
