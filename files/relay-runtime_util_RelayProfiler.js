__d(
  "relay-runtime/util/RelayProfiler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { stop: function () {} },
      s = {
        profile: function (n, r) {
          var t = e[n];
          if (t && t.length > 0) {
            for (var o = [], a = t.length - 1; a >= 0; a--) {
              var i = t[a](n, r);
              o.unshift(i);
            }
            return {
              stop: function (t) {
                o.forEach(function (e) {
                  return e(t);
                });
              },
            };
          }
          return l;
        },
        attachProfileHandler: function (n, r) {
          (Object.prototype.hasOwnProperty.call(e, n) || (e[n] = []),
            e[n].push(r));
        },
        detachProfileHandler: function (n, r) {
          Object.prototype.hasOwnProperty.call(e, n) && u(e[n], r);
        },
      };
    function u(e, t) {
      var n = e.indexOf(t);
      n !== -1 && e.splice(n, 1);
    }
    a.exports = s;
  },
  null,
);
