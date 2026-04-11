__d(
  "ContextualConfigMergePartialResultParams",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = {};
      for (var r of t) n[r.name] = r;
      var o = [];
      for (var a of e) {
        var i = n[a.name];
        o.push(i != null && i.name === a.name && i.type === a.type ? i : a);
      }
      return o;
    }
    i.default = e;
  },
  66,
);
