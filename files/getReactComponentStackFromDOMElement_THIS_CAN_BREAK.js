__d(
  "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = Object.keys(e).find(function (e) {
        return e.startsWith("__reactFiber$");
      });
      return t == null ? null : e[t];
    }
    function l(e) {
      var t,
        n = (t = e.displayName) != null ? t : e.name;
      if (n == null) return null;
      var r = n.match(/.*\[from (.*)\.react\]/);
      return (r && r[1]) || n;
    }
    function s(t) {
      try {
        for (var n = [], r = e(t); r; ) {
          var o = r.type;
          if (o == null || typeof o == "string") {
            r = r.return;
            continue;
          }
          var a = l(o);
          (a == null && o.render != null && (a = l(o.render)),
            a != null && a !== "" && n.push(a),
            (r = r.return));
        }
        return n;
      } catch (e) {
        return null;
      }
    }
    i.default = s;
  },
  66,
);
