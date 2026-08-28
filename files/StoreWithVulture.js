__d(
  "StoreWithVulture",
  ["ObjectWithVulture", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.selector.node.metadata) == null ? void 0 : t.vultureHash;
      return n == null || e.data == null
        ? e
        : babelHelpers.extends({}, e, {
            data: o("ObjectWithVulture").wrapObjectWithVulture(e.data, n),
          });
    }
    var s = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(n, t);
      var r = n.prototype;
      return (
        (r.lookup = function (r) {
          var n = t.prototype.lookup.call(this, r);
          return e(n);
        }),
        (r.subscribe = function (r, o) {
          return t.prototype.subscribe.call(this, r, function (t) {
            return o(e(t));
          });
        }),
        n
      );
    })(o("relay-runtime").Store);
    l.default = s;
  },
  98,
);
