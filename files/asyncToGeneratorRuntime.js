__d(
  "asyncToGeneratorRuntime",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t, r, o, a, i, l, s) {
      try {
        var u = t[l](s),
          c = u.value;
      } catch (e) {
        o(e);
        return;
      }
      u.done ? r(c) : (e || (e = n("Promise"))).resolve(c).then(a, i);
    }
    function s(t) {
      return function () {
        var r = this,
          o = arguments;
        return new (e || (e = n("Promise")))(function (e, n) {
          var a = t.apply(r, o);
          function i(t) {
            l(a, e, n, i, s, "next", t);
          }
          function s(t) {
            l(a, e, n, i, s, "throw", t);
          }
          i(void 0);
        });
      };
    }
    i.asyncToGenerator = s;
  },
  66,
);
