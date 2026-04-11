__d(
  "WAWebHatchCommandCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t) {
      return e.get(t);
    }
    function s(t, n) {
      var r,
        o = e.get(t);
      if (o == null) return null;
      var a = n.startsWith("/") ? n : "/" + n;
      return (r = o.find(function (e) {
        return e.name === a;
      })) != null
        ? r
        : null;
    }
    function u(t, n) {
      e.set(t, n);
    }
    function c(t) {
      e.delete(t);
    }
    function d() {
      e.clear();
    }
    ((i.getHatchCommands = l),
      (i.findHatchCommandByName = s),
      (i.setHatchCommands = u),
      (i.clearHatchCommands = c),
      (i.clearAllHatchCommands = d));
  },
  66,
);
