__d(
  "LS",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "I64",
    "LSDatascriptRuntimeTypes",
    "LSDict",
    "LSDynamicDependencies",
    "LSInt64Lite",
    "LSIterationOperations",
    "LSJson",
    "LSRuntimeDb",
    "LSSynchronousPromise",
    "LSVec",
    "MWFBLogger",
    "MessengerLogHistory",
    "MetaConfig",
    "ODS",
    "ReStoreKeyComparer",
    "XPlatReactTextDecoder",
    "XPlatReactTextEncoder",
    "base64Binary",
    "cr:1088",
    "cr:4790",
    "emptyFunction",
    "err",
    "gkx",
    "isPromise",
    "justknobx",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = "LS_WEB",
      y = o("MessengerLogHistory").getInstance("ls");
    function C(e) {
      return o("base64Binary").decode(e).buffer;
    }
    var b = {
      compareTo: function (t, n) {
        for (
          var e = new Uint8Array(t),
            r = new Uint8Array(n),
            o = Math.min(e.length, r.length),
            a = 0;
          a < o;
          a++
        ) {
          var i = e[a] - r[a];
          if (i !== 0) return i;
        }
        return e.length === r.length ? 0 : e.length - r.length;
      },
      eq: function (t, n) {
        if (t == null && n == null) return !0;
        if (t == null || n == null) return !1;
        var e = new Uint8Array(t),
          r = new Uint8Array(n);
        if (e.length !== r.length) return !1;
        for (var o = 0; o < e.length; o++) if (e[o] !== r[o]) return !1;
        return !0;
      },
      ge: function (t, n) {
        return b.compareTo(t, n) >= 0;
      },
      gt: function (t, n) {
        return b.compareTo(t, n) > 0;
      },
      le: function (t, n) {
        return b.compareTo(t, n) <= 0;
      },
      lt: function (t, n) {
        return b.compareTo(t, n) < 0;
      },
      neq: function (t, n) {
        return !b.eq(t, n);
      },
      of_string: function (t) {
        if (t != null) {
          var e = new (o("XPlatReactTextEncoder").TextEncoder)();
          return e.encode(t).buffer;
        }
      },
      to_string: function (t) {
        if (t != null) {
          var e = new (o("XPlatReactTextDecoder").TextDecoder)();
          return e.decode(t);
        }
      },
    };
    function v(e) {
      if (e.length !== 1)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "only literal strings supported",
        );
      var t = e[0],
        n = parseInt(t.substr(-8), 16),
        a = parseInt(t.substr(0, t.length - 8), 16);
      return (g || (g = o("I64"))).mk(
        ((n >>> 1) + (a & 1) * 2147483648) ^ -(n & 1),
        (a >>> 1) ^ -(n & 1),
      );
    }
    function S(e) {
      if (e != null && typeof e == "object") {
        if ("__sproc_name__" in e && typeof e.__sproc_name__ == "string")
          return e.__sproc_name__;
        if (
          "__debugModuleSource" in e &&
          typeof e.__debugModuleSource == "string"
        )
          return e.__debugModuleSource;
      }
      return "<unknown_sproc>";
    }
    var R = (function () {
        var e = 0;
        function t(t) {
          var o = t.args,
            a = t.shouldLog,
            i = t.sprocName;
          if (
            (n("cr:1088") == null || n("cr:1088").logStoredProcedureCall(i, o),
            !(!a || !n("cr:4790")))
          ) {
            var l = ++e;
            return (
              n("cr:4790").markerStart(r("qpl")._(25302991, "143"), l),
              n("cr:4790").markerAnnotate(
                r("qpl")._(25302991, "143"),
                { string: { name: i } },
                { instanceKey: l },
              ),
              l
            );
          }
        }
        function o(e, t, o) {
          var a = e.shouldLog;
          !a ||
            t == null ||
            n("cr:4790") == null ||
            n("cr:4790").markerEnd(r("qpl")._(25302991, "143"), o, t);
        }
        function a(e) {
          return Math.random() * r("MetaConfig")._("10") < 1;
        }
        return { call: t, logSprocDone: o, shouldLogSproc: a };
      })(),
      L = "Native operation timeout; transaction blocked",
      E = 30 * 1e3;
    function k(t, n, a, i, l, g, I, T) {
      (l === void 0 && (l = {}), g === void 0 && (g = void 0));
      var D = [],
        x = o("LSRuntimeDb").LSRuntimeDb(i, t, n, l, D, I, T),
        $ = function (n, l) {
          for (
            var e = arguments.length, s = new Array(e > 2 ? e - 2 : 0), u = 2;
            u < e;
            u++
          )
            s[u - 2] = arguments[u];
          var c;
          if (typeof l == "string") {
            if (((c = a[l.toString()]), c == null))
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Attempted to call unimplemented native type op with type: %s and id: %s",
                n,
                l,
              );
            if (c === o("LSDynamicDependencies").TOMBSTONE)
              throw r("err")(
                "Concurrent native type op loading failed for: %s (retryable)",
                l,
              );
            c.load && (c = c.load());
          } else c = l;
          return o("LSSynchronousPromise")
            .wrapInSyncPromiseIfNotPromise(c)
            .then(function (e) {
              return e.call.apply(e, [i, t].concat(s));
            });
        },
        P = function (n) {
          for (
            var e = arguments.length, l = new Array(e > 1 ? e - 1 : 0), s = 1;
            s < e;
            s++
          )
            l[s - 1] = arguments[s];
          var u;
          if (typeof n == "string") {
            if (((u = a[n + ".bs"] || a[n + ".nop"]), u == null))
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Attempted to call unimplemented native op with id: %s",
                n,
              );
            if (u === o("LSDynamicDependencies").TOMBSTONE)
              throw r("err")(
                "Concurrent native type op loading failed for: %s (retryable)",
                n,
              );
            u.load && (u = u.load());
          } else u = n;
          var c, d;
          return o("LSSynchronousPromise")
            .wrapInSyncPromiseIfNotPromise(u)
            .then(function (e) {
              var n, a;
              ((c =
                (n =
                  (a = e.__nop_name__) != null
                    ? a
                    : e == null
                      ? void 0
                      : e.toString().slice(0, 250)) != null
                  ? n
                  : "<unknown nop name>"),
                (d = T == null ? void 0 : T.logNativeOperationStart(c)));
              var s = o(
                "LSSynchronousPromise",
              ).maybeExtractValueIfSynchronousPromise(
                e.apply(void 0, [i, t].concat(l)),
              );
              return (m || (m = r("isPromise")))(s) &&
                r("justknobx")._("3895") &&
                (f || (f = r("ExecutionEnvironment"))).isInBrowser
                ? Promise.race([
                    s,
                    new Promise(function (e, t) {
                      return r("setTimeout")(function () {
                        return t(r("err")(L));
                      }, E);
                    }),
                  ])
                : s;
            })
            .then(
              function (e) {
                var t;
                return ((t = d) == null || t.end(), e);
              },
              function (e) {
                var t;
                ((t = d) == null || t.end(),
                  r("FBLogger")("messenger_web")
                    .catching(e)
                    .addMetadata(h, "NATIVE_OP_ID", c)
                    .mustfixThrow(
                      "Native operation %s failed: was_timeout: %s, is_in_worker: %s",
                      c,
                      (e == null ? void 0 : e.message) === L,
                      (f || (f = r("ExecutionEnvironment"))).isInWorker,
                    ));
              },
            );
        },
        N = function (t) {
          return t.slice(1).reduce(function (e, n) {
            return typeof n != "function"
              ? (r("FBLogger")("messenger_web").mustfix(
                  "Non-function passed (%s, type %s) in sequence (%s)",
                  n,
                  typeof n,
                  JSON.stringify(
                    t.map(function (e) {
                      return typeof e;
                    }),
                  ),
                ),
                e)
              : e.then(n);
          }, t[0]());
        },
        M = function (t, n) {
          return t.slice(n);
        },
        w = {
          Map: r("LSDict"),
          blob: C,
          blobs: b,
          constructor: { n: v },
          count: o("LSIterationOperations").count,
          createArray: function () {
            return r("LSVec").ofArray([]);
          },
          createArrayWithElements: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return r("LSVec").ofArray(t);
          },
          db: x,
          filter: o("LSIterationOperations").filter,
          forEach: o("LSIterationOperations").forEach,
          groupBy: o("LSIterationOperations").groupBy,
          i64: r("LSInt64Lite"),
          islc: o("LSIterationOperations").slice,
          like: function (t, n) {
            var e = n
              .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
              .replace(/%/g, ".*")
              .replace(/_/g, ".");
            return RegExp(e).test(t);
          },
          logger: function (t) {
            if (g) return { debug: g, info: g, mustfix: g, warn: g };
            var e = o("MWFBLogger").MWLogger(),
              n = t.startsWith("epoch mismatch"),
              a = t.startsWith("cursor mismatch");
            if (n || a) {
              var i = function (t) {
                y.error(t, "error");
                var e = (function () {
                  return n
                    ? "epoch_mismatch"
                    : a
                      ? "cursor_mismatch"
                      : "fixme_could_not_produce_key";
                })();
                (p || (p = o("ODS"))).bumpEntityKey(3185, "lsplatform", e);
              };
              return {
                debug: function (t) {
                  return y.debug(t);
                },
                info: function (t) {
                  return y.debug(t);
                },
                mustfix: i,
                warn: i,
              };
            } else
              return (r("gkx")("26382") || (e.info = r("emptyFunction")), e);
          },
          loopAsync: function (n, a) {
            function t(i) {
              if (r("LSInt64Lite").lt(i, n)) {
                for (
                  var l = i,
                    u = o(
                      "LSSynchronousPromise",
                    ).maybeExtractValueIfSynchronousPromise(a(l));
                  !(m || (m = r("isPromise")))(u);
                ) {
                  if (
                    ((l = r("LSInt64Lite").add(
                      l,
                      v(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose(["2"])),
                      ),
                    )),
                    !r("LSInt64Lite").lt(l, n))
                  )
                    return o("LSSynchronousPromise").makeSynchronousPromise(
                      void 0,
                    );
                  u = o(
                    "LSSynchronousPromise",
                  ).maybeExtractValueIfSynchronousPromise(a(l));
                }
                return u.then(function () {
                  return t(
                    r("LSInt64Lite").add(
                      l,
                      v(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose(["2"])),
                      ),
                    ),
                  );
                });
              }
              return o("LSSynchronousPromise").makeSynchronousPromise(void 0);
            }
            return t(
              v(u || (u = babelHelpers.taggedTemplateLiteralLoose(["0"]))),
            );
          },
          loopSync: function (t, n) {
            for (
              var e = v(
                c || (c = babelHelpers.taggedTemplateLiteralLoose(["0"])),
              );
              r("LSInt64Lite").lt(e, t);
              e = r("LSInt64Lite").add(
                e,
                v(d || (d = babelHelpers.taggedTemplateLiteralLoose(["2"]))),
              )
            )
              n(e);
          },
          merge: function () {
            function e(e, t) {
              return (_ || (_ = o("ReStoreKeyComparer"))).compareValue(e, t) > 0
                ? e
                : t;
            }
            function t(e, t) {
              return (_ || (_ = o("ReStoreKeyComparer"))).compareValue(
                [e[0], -e[1]],
                [t[0], -t[1]],
              ) < 0
                ? e
                : t;
            }
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
              r[a] = arguments[a];
            var i = r.reduce(function (n, r) {
                var a = o("LSRuntimeDb").parseConstraint(r, "asc");
                return {
                  end: n.end && a.end ? t(a.end, n.end) : a.end || n.end,
                  start:
                    n.start && a.start
                      ? e(a.start, n.start)
                      : a.start || n.start,
                };
              }, {}),
              l = i.start
                ? i.start[1]
                  ? { gt: i.start[0] }
                  : { gte: i.start[0] }
                : {};
            return i.end
              ? i.end[1]
                ? babelHelpers.extends({}, l, { lt: i.end[0] })
                : babelHelpers.extends({}, l, { lte: i.end[0] })
              : l;
          },
          n: v,
          nativeOperation: P,
          nativeTypeOperation: $,
          notnull: function (t) {
            if (t === null)
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "value should not be null",
              );
            return t;
          },
          print: function (t) {},
          resolve: function (t) {
            return o("LSSynchronousPromise").wrapInSyncPromiseIfNotPromise(t);
          },
          resolveGuaranteeAsync: function (t) {
            var e;
            return ((e = self.Promise) != null ? e : Promise).resolve(
              o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(
                t,
              ),
            );
          },
          rm: r("LSInt64Lite").of_int32(t),
          sequence: N,
          slice: M,
          sortBy: o("LSIterationOperations").sortBy,
          storedProcedure: function (s) {
            for (
              var e = arguments.length, u = new Array(e > 1 ? e - 1 : 0), c = 1;
              c < e;
              c++
            )
              u[c - 1] = arguments[c];
            var d;
            if (typeof s == "string") {
              if (((d = a[s]), d == null))
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Attempted to call unimplemented stored procedure with id: %s",
                  s,
                );
              if (d === o("LSDynamicDependencies").TOMBSTONE)
                throw r("err")(
                  "Concurrent sproc loading failed for: %s (retryable)",
                  s,
                );
              d.load && (d = d.load());
            } else d = s;
            var m = w;
            switch (t) {
              case 0:
                m = k(2, n, a, i, l, g, I);
                break;
              case 2:
                m = k(1, n, a, i, l, g, I);
                break;
            }
            var p, _, f, y;
            return o("LSSynchronousPromise")
              .wrapInSyncPromiseIfNotPromise(d)
              .then(function (e) {
                return (
                  (_ = S(e)),
                  (f = R.shouldLogSproc(_)),
                  D.push(_),
                  (p = R.call({ args: u, shouldLog: f, sprocName: _ })),
                  (y =
                    T == null
                      ? void 0
                      : T.logSprocCallStart(
                          _,
                          o("LSDatascriptRuntimeTypes").TopLevelCallOrigin.UI,
                        )),
                  i.reportUsedTablesForSyncAccess(e.__tables__),
                  e.apply(void 0, u.concat([m]))
                );
              })
              .then(
                function (e) {
                  var t;
                  return (
                    D.pop(),
                    R.logSprocDone(
                      { args: u, shouldLog: f, sprocName: _ },
                      p,
                      2,
                    ),
                    (t = y) == null || t.end(),
                    e
                  );
                },
                function (e) {
                  var t;
                  throw (
                    D.pop(),
                    R.logSprocDone(
                      { args: u, shouldLog: f, sprocName: _ },
                      p,
                      3,
                    ),
                    (t = y) == null || t.end(),
                    r("FBLogger")("messenger_web")
                      .catching(e)
                      .addMetadata(
                        h,
                        "SPROC_STACK",
                        D.join(`
`),
                      )
                      .warn("Sproc %s failed", _),
                    e
                  );
                },
              );
          },
          throw: function (t) {
            throw r("FBLogger")("messenger_web").mustfixThrow(t);
          },
          toArray: o("LSIterationOperations").toArray,
          toJSON: function (t) {
            return o("LSJson").stringify(t);
          },
        };
      return w;
    }
    ((k.n = v), (l.default = k));
  },
  98,
);
