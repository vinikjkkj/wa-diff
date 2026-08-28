__d(
  "UnicodeBidiWrapper",
  ["cx", "UnicodeBidi", "UnicodeBidiDirection", "UnicodeBidiService", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      if (!e) return null;
      var t = o("UnicodeBidi").getDirection(e),
        n =
          "_3dfi" +
          (t === o("UnicodeBidiDirection").LTR ? " _3dfj" : "") +
          (t === o("UnicodeBidiDirection").RTL ? " _3dfk" : "");
      return u.jsx("span", { className: n, children: e });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      if (!e) return null;
      var t = o("UnicodeBidi").getDirection(e),
        n =
          "_3dfi" +
          (t === o("UnicodeBidiDirection").LTR ? " _3dfj" : "") +
          (t === o("UnicodeBidiDirection").RTL ? " _3dfk" : "") +
          (t === o("UnicodeBidiDirection").LTR ? " _3dfl" : "") +
          (t === o("UnicodeBidiDirection").RTL ? " _3dfm" : "");
      return u.jsx("div", { className: n, children: e });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = new (r("UnicodeBidiService"))(),
        n = e.map(function (e, n) {
          var r = t.getDirection(e),
            a =
              "_3dfi" +
              (r === o("UnicodeBidiDirection").LTR ? " _3dfj" : "") +
              (r === o("UnicodeBidiDirection").RTL ? " _3dfk" : "") +
              (r === o("UnicodeBidiDirection").LTR ? " _3dfl" : "") +
              (r === o("UnicodeBidiDirection").RTL ? " _3dfm" : "");
          return u.jsx("div", { className: a, children: e }, n);
        });
      return u.jsx("div", { children: n });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.inline = c),
      (l.singleBlock = d),
      (l.multiBlock = m));
  },
  98,
);
