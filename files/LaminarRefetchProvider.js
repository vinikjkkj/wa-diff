__d(
  "LaminarRefetchProvider",
  ["invariant", "AdsDataAtomShared", "Laminar", "LaminarProvider"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i) {
      i === void 0 && (i = []);
      var l = o("LaminarProvider").create(e, n, a, i),
        u = null,
        c = function (t) {
          (u != null || s(0, 5463), u.dispatch({ reducer: t }));
        },
        d = function () {
          return l.select(r("AdsDataAtomShared").getAlteredState());
        },
        m = Object.assign(
          d,
          babelHelpers.extends({}, l, {
            refetch: function (n) {
              return t(c, n);
            },
          }),
        );
      return (
        (u = o("Laminar").__createAction(
          function () {
            return [
              o("Laminar").__createReducer(
                {
                  reduce: function (t, n) {
                    return n.reducer(t);
                  },
                },
                l,
                {},
                n + "QuerySetStateReducer",
              ),
            ];
          },
          function () {
            return [];
          },
          n + "QuerySetStateAction",
        )),
        m
      );
    }
    l.create = e;
  },
  98,
);
