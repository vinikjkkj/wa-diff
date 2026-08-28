__d(
  "LSProfiler",
  [
    "CometDevToolsLightspeedStoredProcedureStoredProfilingTypes.flow",
    "FBLogger",
    "LSDatascriptRuntimeTypes",
    "ProxyUtils",
    "Random",
    "SynchronousProfiler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = { id: 0 },
      u = new WeakMap(),
      c = function (n, a, i, l) {
        s = l;
        var t = 0,
          c = o("SynchronousProfiler").buildProfiler(n, a, i);
        u.set(s, c);
        var d = {
          get: function (a, i, m) {
            if (i === "storedProcedure") {
              var n = a.storedProcedure;
              return function (e) {
                var a = r("Random").uint32();
                t++;
                for (
                  var i = arguments.length,
                    d = new Array(i > 1 ? i - 1 : 0),
                    p = 1;
                  p < i;
                  p++
                )
                  d[p - 1] = arguments[p];
                c.startCall(e, d, a);
                var _ = n.apply(m, [e].concat(d));
                return _.then(function (n) {
                  if ((c.endCall(a), --t === 0 && s !== l)) {
                    var i,
                      d = u.get(s),
                      m =
                        (i =
                          d == null
                            ? void 0
                            : d.captureStack().map(function (e) {
                                return e.name;
                              })) != null
                          ? i
                          : ["<stack missing>"];
                    r("FBLogger")("messenger_web").warn(
                      "Parallel sproc execution detected: this is unsafe. Ran sproc: %s, parallel stack: %s",
                      o("SynchronousProfiler").getNameFromSproc(e),
                      m.join(", "),
                    );
                  }
                  return n;
                });
              };
            } else if (i === "nativeOperation") {
              var p = a.nativeOperation;
              return function (t) {
                var n = r("Random").uint32(),
                  i = a.db.transactionId;
                e.set(i, d);
                for (
                  var l = arguments.length,
                    s = new Array(l > 1 ? l - 1 : 0),
                    u = 1;
                  u < l;
                  u++
                )
                  s[u - 1] = arguments[u];
                c.startCall(
                  t,
                  s,
                  n,
                  o(
                    "CometDevToolsLightspeedStoredProcedureStoredProfilingTypes.flow",
                  ).InternalCallType.NATIVE_OP,
                );
                var _ = p.apply(m, [t].concat(s));
                return _.then(function (t) {
                  return (c.endCall(n), e.delete(i), t);
                });
              };
            } else if (i === "db")
              return babelHelpers.extends({}, a.db, {
                table: function (t) {
                  return (
                    c.touchTable(a.db.metadata.tableIds[t]),
                    a.db.table(t)
                  );
                },
              });
            return o("ProxyUtils").originalPropertyWithThisRebinding(a, i, m);
          },
          getStack: function () {
            return c.captureStack();
          },
        };
        return d;
      },
      d = void 0,
      m = {
        _baseSequence: 0,
        _nextCallOrigin: o("LSDatascriptRuntimeTypes").TopLevelCallOrigin
          .BROKER,
        _nextCallParams: d,
        get: function (n, a, i) {
          if (a === "storedProcedure") {
            var t = n.db.transactionId,
              l = e.get(t);
            if (l !== void 0) {
              (m.getNextCallParams(), m.getNextCallOrigin());
              var s = new Proxy(n, l);
              return s.storedProcedure;
            }
            var u = new Proxy(
              n,
              c(m.getNextSeq(), m.getNextCallParams(), m.getNextCallOrigin(), {
                id: r("Random").uint32(),
              }),
            );
            return u.storedProcedure;
          }
          return o("ProxyUtils").originalPropertyWithThisRebinding(n, a, i);
        },
        getNextCallOrigin: function () {
          var e = m._nextCallOrigin;
          return (
            (m._nextCallOrigin = o(
              "LSDatascriptRuntimeTypes",
            ).TopLevelCallOrigin.BROKER),
            e
          );
        },
        getNextCallParams: function () {
          var e = m._nextCallParams;
          return ((m._nextCallParams = d), e);
        },
        getNextSeq: function () {
          return m._baseSequence++;
        },
        reset: function () {
          ((m._baseSequence = 0), e.clear());
        },
        setNextCallOrigin: function (t) {
          m._nextCallOrigin = t;
        },
        setNextCallParams: function (t) {
          m._nextCallParams = t;
        },
      };
    function p(e) {
      return new Proxy(e, m);
    }
    function _() {
      return Array.from(e.values()).map(function (e) {
        return e
          .getStack()
          .filter(function (e) {
            return (
              e.opType ===
              o(
                "CometDevToolsLightspeedStoredProcedureStoredProfilingTypes.flow",
              ).InternalCallType.NATIVE_OP
            );
          })
          .map(function (e) {
            return e.name;
          });
      });
    }
    var f = {
      CallType: o("LSDatascriptRuntimeTypes").TopLevelCallOrigin,
      TEST_ONLY_reset: m.reset,
      getCurrentlyExecutingNativeOps: _,
      getNameFromSproc: o("SynchronousProfiler").getNameFromSproc,
      setSprocCallType: m.setNextCallOrigin,
      setSprocNamedParams: m.setNextCallParams,
      wrapSprocInvocationWithProfiler: p,
    };
    l.default = f;
  },
  98,
);
