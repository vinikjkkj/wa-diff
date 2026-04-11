__d(
  "HasteSupportData",
  [
    "ix",
    "MetaConfigMap",
    "QPLHasteSupportDataStorage",
    "bx",
    "getFalcoLogPolicy_DO_NOT_USE",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = e.bxData,
        o = e.clpData,
        a = e.gkxData,
        i = e.ixData,
        l = e.justknobxData,
        u = e.metaconfigData,
        c = e.qexData,
        d = e.qplData;
      (n != null && r("bx").add(n, t),
        o != null && r("getFalcoLogPolicy_DO_NOT_USE").add(o, t),
        a != null && r("gkx").add(a, t),
        i != null && s.add(i, t),
        u != null && r("MetaConfigMap").add(u, t),
        c != null && r("qex").add(c, t),
        d != null && r("QPLHasteSupportDataStorage").add(d, t),
        l != null && r("justknobx").add(l, t));
    }
    l.handle = e;
  },
  98,
);
