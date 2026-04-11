__d(
  "ReactUseEvent.react",
  ["ReactDOM", "react", "useUnsafeRef_DEPRECATED"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useLayoutEffect;
    function c(t, n) {
      var a = (e || (e = r("useUnsafeRef_DEPRECATED")))(null),
        i = a.current;
      if ((n && (n.passive = void 0), i === null)) {
        var l = o("ReactDOM").unstable_createEventHandle(t, n),
          s = new Map();
        ((i = {
          setListener: function (t, n) {
            var e = s.get(t);
            if ((e !== void 0 && e(), n === null)) {
              s.delete(t);
              return;
            }
            ((e = l(t, n)), s.set(t, e));
          },
          clear: function () {
            for (var e = Array.from(s.values()), t = 0; t < e.length; t++)
              e[t]();
            s.clear();
          },
        }),
          (a.current = i));
      }
      return (
        u(
          function () {
            return function () {
              (i !== null && i.clear(), (a.current = null));
            };
          },
          [i],
        ),
        i
      );
    }
    l.default = c;
  },
  98,
);
