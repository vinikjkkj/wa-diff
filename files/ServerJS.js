__d(
  "ServerJS",
  [
    "ContextualComponent",
    "ErrorGuard",
    "HasteBitMap",
    "HasteResourceIndexUtil",
    "ServerJSDefine",
    "__debug",
    "err",
    "ge",
    "getErrorSafe",
    "replaceTransportMarkers",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1,
      u = 2,
      c = 16,
      d = 0,
      m = (function () {
        function t() {
          ((this.$2 = {}),
            (this.$1 = null),
            (this.$4 = {}),
            (this.$3 = void 0));
        }
        var i = t.prototype;
        return (
          (i.handle = function (t, n) {
            return this.$5(t, n, _);
          }),
          (i.handleWithCustomApplyEach = function (t, n, r) {
            this.$5(n, r, t);
          }),
          (i.$5 = function (t, n, o) {
            if (((this.$3 = n), t.__guard != null))
              throw r("err")(
                "ServerJS.handle called on data that has already been handled",
              );
            ((t.__guard = !0),
              o(t.define || [], this.$6, this),
              o(t.markup || [], this.$7, this),
              o(t.elements || [], this.$8, this),
              this.$9(t.contexts || []),
              o(t.instances || [], this.$10, this));
            var e = o(t.pre_display_requires || [], this.$11, this);
            return (
              (e = e.concat(o(t.require || [], this.$11, this))),
              t.phd2_indexes != null && this.$12(t.phd2_indexes),
              {
                cancel: function () {
                  e.forEach(function (e) {
                    e && e.cancel();
                  });
                },
              }
            );
          }),
          (i.handlePartial = function (t, n) {
            var e = this;
            return (
              (t.instances || []).forEach(function (t) {
                h(e.$2, t);
              }),
              (t.markup || []).forEach(function (t) {
                g(e.$2, t);
              }),
              (t.elements || []).forEach(function (t) {
                g(e.$2, t);
              }),
              this.handle(t, n)
            );
          }),
          (i.setRelativeTo = function (t) {
            return ((this.$1 = t), this);
          }),
          (i.cleanup = function (o) {
            var t = Object.keys(this.$2);
            (o
              ? a.call(
                  null,
                  t,
                  o.guard(function () {}, "SeverJS Cleanup requireLazy", {
                    propagationType: o.PropagationType.ORPHAN,
                  }),
                )
              : a.call(null, t, function () {}),
              (this.$2 = {}));
            function i(e) {
              var t = this.$4[e],
                o = t[0],
                a = t[1],
                i = t[2];
              delete this.$4[e];
              var l = a
                  ? 'JS::call("' + o + '", "' + a + '", ...)'
                  : 'JS::requireModule("' + o + '")',
                s = n("__debug").debugUnresolvedDependencies([o, e]);
              throw p(
                r("err")(
                  "%s did not fire because it has missing dependencies.\n%s",
                  l,
                  s,
                ),
                i,
              );
            }
            for (var l in this.$4)
              (e || (e = r("ErrorGuard"))).applyWithGuard(i, this, [l], {
                name: "ServerJS:cleanup id: " + l,
                project: "ServerJSCleanup",
              });
          }),
          (i.$6 = function (n, o, a, i) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(
              r("ServerJSDefine").handleDefine,
              r("ServerJSDefine"),
              [n, o, a, i, this.$1],
              { name: "JS::define" },
            );
          }),
          (i.$11 = function (n, o, a, i) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(
              this.$13,
              this,
              [n, o, a, i],
              { name: o != null ? "JS::call" : "JS::requireModule" },
            );
          }),
          (i.$13 = function (o, a, i, l) {
            var t = this,
              m = r("ServerJSDefine").getModuleNameAndHash(o),
              _ = m.hash,
              f = m.name,
              g,
              h;
            typeof a == "object" ? (g = a) : ((g = i), (h = a));
            var y = [f].concat(g || []),
              C;
            (h != null
              ? (C = "__call__" + f + "." + h)
              : l != null
                ? (C = "__call__" + f)
                : (C = "__requireModule__" + f),
              (C += "__" + d++),
              (this.$4[C] = [f, h, _]));
            var b = this.$3 && this.$3.bigPipeContext,
              v = (e || (e = r("ErrorGuard"))).guard(
                function (e) {
                  var o = n.call(null, f);
                  if (
                    (delete t.$4[C],
                    l &&
                      r("replaceTransportMarkers")(
                        { relativeTo: t.$1, bigPipeContext: b },
                        l,
                      ),
                    h != null)
                  ) {
                    if (!o[h])
                      throw p(
                        r("err")('Module %s has no method "%s"', f, h),
                        _,
                      );
                  } else if (l != null && typeof o != "function")
                    throw p(
                      r("err")(
                        "Module %s is not a function but was called with args",
                        f,
                      ),
                      _,
                    );
                  var a =
                    h != null
                      ? o[h]
                      : l != null && typeof o == "function"
                        ? o
                        : null;
                  a != null &&
                    (a.apply(o, l || []),
                    (v.__SMmeta = a.__SMmeta || {}),
                    (v.__SMmeta.module = v.__SMmeta.module || f),
                    (v.__SMmeta.name = v.__SMmeta.name || h));
                },
                {
                  name:
                    h != null
                      ? "JS::call('" + f + "', '" + h + "', ...)"
                      : l != null
                        ? "JS::call('" + f + "', ...)"
                        : "JS::requireModule('" + f + "')",
                },
              ),
              S = define(C, y, v, s | c | u, this, 1, this.$3);
            return S;
          }),
          (i.$10 = function (n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(
              this.$14,
              this,
              [n, o, a, i],
              { name: "JS::instance" },
            );
          }),
          (i.$14 = function (t, o, a, i) {
            var e = this,
              l = null,
              s = r("ServerJSDefine").getModuleNameAndHash(t),
              d = s.hash,
              m = s.name;
            if (o) {
              var p = this.$3 && this.$3.bigPipeContext;
              l = function () {
                var t = n.call(null, o[0]);
                r("replaceTransportMarkers")(
                  { relativeTo: e.$1, bigPipeContext: p },
                  a,
                );
                var i = Object.create(t.prototype);
                return (t.apply(i, a), i);
              };
            }
            define(m, o, l, u | c, null, i);
          }),
          (i.$7 = function (n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(
              this.$15,
              this,
              [n, o, a, i],
              { name: "JS::markup" },
            );
          }),
          (i.$15 = function (t, n, o, a) {
            var e = r("ServerJSDefine").getModuleNameAndHash(t),
              i = e.hash,
              l = e.name;
            define(
              l,
              [a],
              function (t) {
                try {
                  return t.replaceJSONWrapper(n).getRootNode();
                } catch (e) {
                  throw p(r("getErrorSafe")(e), i);
                }
              },
              c,
              null,
              o,
            );
          }),
          (i.$8 = function (n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(
              this.$16,
              this,
              [n, o, a, i],
              { name: "JS::element" },
            );
          }),
          (i.$16 = function (t, n, o, a) {
            var e = r("ServerJSDefine").getModuleNameAndHash(t),
              i = e.hash,
              l = e.name;
            if (n === null && o != null) {
              define(l, null, null, c, null, o);
              return;
            }
            var u = [],
              d = c,
              m = o || 0;
            (a != null && (u.push(a), (d |= s), m++),
              define(
                l,
                u,
                function (t) {
                  var e = r("ge")(n, t);
                  if (!e) {
                    var o = "";
                    throw p(r("err")('Could not find element "%s"%s', n, o), i);
                  }
                  return e;
                },
                d,
                null,
                m,
              ));
          }),
          (i.$9 = function (n) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$17, this, [n], {
              name: "ContextualComponents",
            });
          }),
          (i.$17 = function (t) {
            var e = this,
              n = this.$3 && this.$3.bigPipeContext;
            t.map(function (t) {
              r("replaceTransportMarkers")(
                { relativeTo: e.$1, bigPipeContext: n },
                t,
              );
              var o = t[0];
              return [t, f(o)];
            })
              .sort(function (e, t) {
                return e[1] - t[1];
              })
              .forEach(function (e) {
                var t = e[0],
                  n = t[0],
                  o = t[1];
                r("ContextualComponent").register({ element: n, isRoot: o });
              });
          }),
          (i.$12 = function (t) {
            o("HasteResourceIndexUtil")
              .parseResourceIndexes(t)
              .forEach(function (e) {
                return o("HasteBitMap").add("__sjsp", e);
              });
          }),
          t
        );
      })();
    function p(e, t) {
      return ((e.serverHash = t), e);
    }
    function _(e, t, n) {
      return e.map(function (r) {
        return t.apply(n, r);
      });
    }
    function f(e) {
      for (var t = 0, n = e; n; ) ((n = n.parentElement), t++);
      return t;
    }
    function g(e, t) {
      var n = r("ServerJSDefine").getModuleNameAndHash(t[0]),
        o = n.name;
      (o in e || (t[2] = (t[2] || 0) + 1), (e[o] = !0));
    }
    function h(e, t) {
      var n = r("ServerJSDefine").getModuleNameAndHash(t[0]),
        o = n.name;
      (o in e || (t[3] = (t[3] || 0) + 1), (e[o] = !0));
    }
    i.exports = m;
  },
  34,
);
