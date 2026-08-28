__d(
  "AdsLoadObjectUtils",
  [
    "AdsLoadState_LEGACY",
    "LoadObject",
    "err",
    "immutable",
    "memoizeByReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return { type: "hasOperation" };
    }
    var s = {
      error: function (t) {
        return { type: "error", error: t, value: void 0 };
      },
      empty: function () {
        return { type: "empty" };
      },
      loaded: function (t) {
        return { type: "loaded", value: t };
      },
      loadedWithError: function (t, n) {
        return { type: "error", error: n, value: t };
      },
      loading: e,
      creating: e,
      updating: e,
      deleting: e,
    };
    function u(e, t) {
      var n = [],
        o = !1,
        a,
        l;
      for (var u of e) {
        if (!(u instanceof r("LoadObject"))) {
          n.push(u);
          continue;
        }
        var c = u.match(s);
        switch (c.type) {
          case "hasOperation": {
            var d = u.getOperation();
            if (!t)
              return r("LoadObject")
                .empty({ creatorModuleID: i.id })
                .setOperation(d);
            (n.push(u.getValue()), (a = a || d));
            break;
          }
          case "error":
            if (!t)
              return r("LoadObject").withError(c.error, {
                creatorModuleID: i.id,
              });
            (n.push(c.value), (l = l || c.error));
            break;
          case "empty":
            (n.push(void 0), (o = !0));
            break;
          case "loaded":
            n.push(c.value);
            break;
        }
      }
      return o && !t
        ? r("LoadObject").empty({ creatorModuleID: i.id })
        : r("LoadObject")
            .withValue(n, { creatorModuleID: i.id })
            .setError(l)
            .setOperation(a);
    }
    function c(e) {
      return u(e, !1);
    }
    function d(e) {
      return u(e, !0);
    }
    function m(e) {
      return c(e.values()).map(function (t) {
        var n = Array.from(e.keys()),
          o = n.map(function (e, n) {
            return [e, t[n]];
          });
        return r("immutable").Map(o);
      });
    }
    function p(e) {
      var t = Object.keys(e),
        n = Object.values(e);
      return c(n).map(function (e) {
        return t.reduce(function (t, n, r) {
          return ((t[n] = e[r]), t);
        }, {});
      });
    }
    function _(e) {
      for (var t of e) if (!t.hasValue() || !t.isDone()) return !0;
      return !1;
    }
    function f(e) {
      return Array.from(e)
        .filter(function (e) {
          return e.isDone() && e.hasValue();
        })
        .map(function (e) {
          return e.getValueEnforcing();
        });
    }
    function g(e) {
      return f(h(e));
    }
    function h(e) {
      var t = [];
      for (var n of e) {
        var r = n[0],
          o = n[1];
        t.push(o);
      }
      return t;
    }
    function y(e) {
      return e
        .filter(function (e) {
          return e.isDone() && e.hasValue();
        })
        .map(function (e) {
          return e.getValueEnforcing();
        });
    }
    function C(e) {
      return e == null
        ? r("LoadObject").withValue(e, { creatorModuleID: i.id })
        : e;
    }
    var b = r("memoizeByReference")(v);
    function v(e) {
      return e.loadState === r("AdsLoadState_LEGACY").NOT_LOADED
        ? r("LoadObject").empty({ creatorModuleID: i.id })
        : e.loadState === r("AdsLoadState_LEGACY").LOADING
          ? r("LoadObject").loading({ creatorModuleID: i.id })
          : e.loadState === r("AdsLoadState_LEGACY").DELETING
            ? r("LoadObject").deleting({ creatorModuleID: i.id })
            : e.loadState === r("AdsLoadState_LEGACY").PENDING_WRITE
              ? r("LoadObject").creating({ creatorModuleID: i.id })
              : e.loadState === r("AdsLoadState_LEGACY").UPDATING
                ? r("LoadObject").updating({ creatorModuleID: i.id })
                : e.loadState === r("AdsLoadState_LEGACY").ERROR
                  ? r("LoadObject").withError(
                      r("err")("Unknown AdsLoadState_LEGACY error"),
                      { creatorModuleID: i.id },
                    )
                  : e.loadState === r("AdsLoadState_LEGACY").LOADED
                    ? r("LoadObject").withValue(e, { creatorModuleID: i.id })
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e.loadState,
                        );
                      })();
    }
    ((l.all = c),
      (l.allForceWithValues = d),
      (l.allByKey = m),
      (l.allByKeyFromObject = p),
      (l.anyLoadingOrEmpty = _),
      (l.getLoadedValues = f),
      (l.getLoadedValuesFromMap = g),
      (l.getValuesFromMap = h),
      (l.getLoadedValuesByKey = y),
      (l.wrapIfNull = C),
      (l.fromLegacyLoadStateObject = b));
  },
  98,
);
