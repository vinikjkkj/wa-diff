__d(
  "ClientManagedActionsCompletedStateContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = s.createContext({
        completedClientSideActions: [],
        setCompletedClientSideActions: function (t) {},
      });
    function p() {
      var e = o("react-compiler-runtime").c(3),
        t = d(m),
        n = t.completedClientSideActions,
        r = t.setCompletedClientSideActions,
        a;
      return (
        e[0] !== n || e[1] !== r
          ? ((a = function (t) {
              r(n.concat(t));
            }),
            (e[0] = n),
            (e[1] = r),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(2),
        t = d(m),
        n = t.completedClientSideActions,
        r;
      return (
        e[0] !== n
          ? ((r = function (t, r, o) {
              return n.filter(function (e) {
                var n = e.actionType === t && r in e.params;
                return o === !0 ? !n : n;
              });
            }),
            (e[0] = n),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t = d(m),
        n = t.completedClientSideActions,
        r;
      return (
        e[0] !== n
          ? ((r = function (t) {
              var e = JSON.stringify(t);
              return (
                n.find(function (t) {
                  return JSON.stringify(t) === e;
                }) != null
              );
            }),
            (e[0] = n),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    ((l.ClientManagedActionsCompletedStateContext = m),
      (l.useAddClientSideActions = p),
      (l.useFilterClientSideActionsByParam = _),
      (l.useIsClientSideActionCompleted = f));
  },
  98,
);
