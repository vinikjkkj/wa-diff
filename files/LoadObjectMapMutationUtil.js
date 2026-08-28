__d(
  "LoadObjectMapMutationUtil",
  ["LoadObject", "mapMap", "promiseDone", "promiseLoadObjectsFromKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [];
      return (
        t.forEach(function (t) {
          e.getCached(t).isEmpty() &&
            n.push([t, r("LoadObject").loading({ creatorModuleID: i.id })]);
        }),
        e.merge(n)
      );
    }
    function s(e, t, n) {
      var o = [];
      return (
        t.forEach(function (e, t) {
          return o.push([
            e,
            r("LoadObject").withValue(n[t], { creatorModuleID: i.id }),
          ]);
        }),
        e.merge(o)
      );
    }
    function u(t, n) {
      return function (o) {
        (t(function (t) {
          return e(t, o);
        }),
          r("promiseDone")(r("promiseLoadObjectsFromKeys")(o, n), function (e) {
            return t(function (t) {
              return t.merge(e);
            });
          }));
      };
    }
    function c(t, n) {
      return function (o) {
        var a = Array.from(o);
        (t(function (t) {
          return e(t, o);
        }),
          r("promiseDone")(
            n(a),
            function (e) {
              return t(function (t) {
                return t.merge(
                  r("mapMap")(e, function (e) {
                    return r("LoadObject").withValue(e, {
                      creatorModuleID: i.id,
                    });
                  }),
                );
              });
            },
            function (e) {
              return t(function (t) {
                var n = r("LoadObject").withError(e, { creatorModuleID: i.id }),
                  o = new Map(
                    a.map(function (e) {
                      return [e, n];
                    }),
                  );
                return t.merge(o);
              });
            },
          ));
      };
    }
    ((l.setValueListToLoading = e),
      (l.updateValueList = s),
      (l.loadAllFnWithSingleKeyLoader = u),
      (l.loadAllFn = c));
  },
  98,
);
