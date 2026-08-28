__d(
  "AdsAdObjectsAccessorUtils",
  ["FBLogger", "PathArrayIndex", "memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
        return {
          get: t,
          set: function (t, r) {
            var e = function (r) {
              return r.setIn([].concat(n), t);
            };
            return r === void 0 ? e : e(r);
          },
          delete: function (t) {
            return t.deleteIn([].concat(n));
          },
          at: r("memoizeWithArgs")(
            function (e) {
              return a.reduce(function (r, a) {
                var i;
                return babelHelpers.extends(
                  {},
                  r,
                  ((i = {
                    get: function (r) {
                      var n;
                      return (n = t(r)) == null ? void 0 : n.get(e);
                    },
                    set: function (r, a) {
                      var t = function (a) {
                        return a.setIn(
                          [].concat(n, [o("PathArrayIndex").pathArrayIndex(e)]),
                          r,
                        );
                      };
                      return a === void 0 ? t : t(a);
                    },
                    delete: function (r) {
                      return r.deleteIn(
                        [].concat(n, [o("PathArrayIndex").pathArrayIndex(e)]),
                      );
                    },
                  }),
                  (i[a] = {
                    get: function (r) {
                      var n;
                      return (n = t(r)) == null || (n = n.get(e)) == null
                        ? void 0
                        : n.get(a);
                    },
                    set: function (r, i) {
                      var t = function (i) {
                        return i.setIn(
                          [].concat(n, [
                            o("PathArrayIndex").pathArrayIndex(e),
                            a,
                          ]),
                          r,
                        );
                      };
                      return i === void 0 ? t : t(i);
                    },
                    delete: function (r) {
                      return r.deleteIn(
                        [].concat(n, [
                          o("PathArrayIndex").pathArrayIndex(e),
                          a,
                        ]),
                      );
                    },
                  }),
                  i),
                );
              }, {});
            },
            function (e) {
              return String(e);
            },
          ),
          __setSemanticValue: _,
        };
      },
      s = function (t, n) {
        return {
          get: t,
          set: function (t, r) {
            var e = function (r) {
              return r.setIn([].concat(n), t);
            };
            return r === void 0 ? e : e(r);
          },
          __setSemanticValue: _,
          delete: function (t) {
            return t.deleteIn([].concat(n));
          },
        };
      },
      u = function (t, n, r) {
        return {
          get: function (n) {
            var e = t(n);
            return e != null ? e[r] : void 0;
          },
          set: function (t, o) {
            var e = function (o) {
              return o.setIn([].concat(n, [r]), t);
            };
            return o === void 0 ? e : e(o);
          },
          __setSemanticValue: _,
          delete: function (t) {
            return t.deleteIn([].concat(n, [r]));
          },
        };
      },
      c = function (t, n, a) {
        return babelHelpers.extends({}, u(t, n, a), {
          index: r("memoizeWithArgs")(
            function (e) {
              return {
                get: function (r) {
                  var n,
                    o = t(r);
                  return o != null
                    ? (n = o[a]) == null
                      ? void 0
                      : n.get(e)
                    : void 0;
                },
                set: function (r, i) {
                  var t = function (i) {
                    return i.setIn(
                      [].concat(n, [a, o("PathArrayIndex").pathArrayIndex(e)]),
                      r,
                    );
                  };
                  return i === void 0 ? t : t(i);
                },
                delete: function (r) {
                  return r.deleteIn(
                    [].concat(n, [a, o("PathArrayIndex").pathArrayIndex(e)]),
                  );
                },
              };
            },
            function (e) {
              return String(e);
            },
          ),
        });
      },
      d = function (t, n) {
        return {
          get: t,
          set: function (t, r) {
            var e = function (r) {
              return r.setIn([].concat(n), t);
            };
            return r === void 0 ? e : e(r);
          },
          delete: function (t) {
            return t.deleteIn([].concat(n));
          },
          __setSemanticValue: _,
        };
      },
      m = function (t, n, r) {
        return {
          get: function (n) {
            var e = t(n);
            return e != null ? e[r] : void 0;
          },
          set: function (t, o) {
            var e = function (o) {
              return o.setIn([].concat(n, [r]), t);
            };
            return o === void 0 ? e : e(o);
          },
          delete: function (t) {
            return t.deleteIn([].concat(n, [r]));
          },
          __setSemanticValue: _,
        };
      },
      p = function (t, n, o) {
        return babelHelpers.extends({}, m(t, n, o), {
          index: r("memoizeWithArgs")(
            function (e) {
              return {
                get: function (r) {
                  var n = t(r);
                  return n != null ? n[o].get(e) : void 0;
                },
              };
            },
            function (e) {
              return String(e);
            },
          ),
        });
      };
    function _() {
      throw r("FBLogger")("ads_ad_objects").mustfixThrow(
        "__setSemanticValue is unimplemented and should not be called",
      );
    }
    ((l.nonPrimitiveListFieldAccessorsFactory = e),
      (l.baseFieldAccessorFactory = s),
      (l.basicFieldAccessorFactory = u),
      (l.basicListFieldAccessorFactory = c),
      (l.baseFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE = d),
      (l.basicFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE = m),
      (l.basicListFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE = p));
  },
  98,
);
