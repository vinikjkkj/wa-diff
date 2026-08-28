__d(
  "FluxLoadObjectStore",
  [
    "invariant",
    "FluxLoadObjectStorePrefix",
    "FluxMapStore",
    "LoadObject",
    "abstractMethod",
    "clearImmediate",
    "immutable",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 0,
      u = new Set();
    function c(t) {
      for (var n = t; u.has(n); ) n = "" + t + e++;
      return (u.add(n), n);
    }
    var d = (function (e) {
      function t(t, n) {
        var o;
        ((o = e.call(this, t) || this),
          (o.$FluxLoadObjectStore$p_5 = new Map()),
          (o.$FluxLoadObjectStore$p_8 = function () {
            var e = o.$FluxLoadObjectStore$p_2;
            ((o.$FluxLoadObjectStore$p_2 = r("immutable").OrderedSet()),
              r("clearImmediate")(o.$FluxLoadObjectStore$p_3),
              (o.$FluxLoadObjectStore$p_3 = void 0),
              o.$FluxLoadObjectStore$p_9(e));
          }),
          (o.$FluxLoadObjectStore$p_6 = c(
            n || o.__moduleID || o.getDispatchToken(),
          )),
          (o.$FluxLoadObjectStore$p_1 = o.getActionTypeStartLoad(n)),
          (o.$FluxLoadObjectStore$p_2 = r("immutable").OrderedSet()),
          o.__load &&
            !o.__loadAll &&
            (o.__loadAll = function (e) {
              for (var t of e) o.__load(t);
            }),
          o.__loadAll &&
            !o.__load &&
            (o.__load = function (e) {
              o.__loadAll(r("immutable").List([e]));
            }),
          (o.__load && o.__loadAll) || s(0, 88624, o.$FluxLoadObjectStore$p_6));
        var a = o.reduce.bind(o);
        return (
          (o.reduce = function (e, t) {
            return (
              t.action &&
                t.action.type === o.$FluxLoadObjectStore$p_1 &&
                (e = o.__setLoading(e, t.action.keys)),
              a(e, t)
            );
          }),
          (o.$FluxLoadObjectStore$p_4 = o.__getChunkSize()),
          o.$FluxLoadObjectStore$p_4 != null &&
            o.$FluxLoadObjectStore$p_4 <= 0 &&
            (o.$FluxLoadObjectStore$p_4 = void 0),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getActionTypeStartLoad = function (t) {
          return (
            this.$FluxLoadObjectStore$p_1 ||
              (this.$FluxLoadObjectStore$p_1 =
                r("FluxLoadObjectStorePrefix") +
                c(t || this.__moduleID || this.getDispatchToken())),
            this.$FluxLoadObjectStore$p_1
          );
        }),
        (n.reduce = function (t, n) {
          return r("abstractMethod")("FluxLoadObjectStore", "reduce");
        }),
        (n.__handleMap = function (t, n) {
          var e = this;
          return t.withMutations(function (t) {
            for (var r of n) {
              var o = r[0],
                a = r[1],
                i = e.getCached(o);
              a instanceof Error
                ? t.set(o, i.setError(a).done())
                : t.set(o, i.setValue(a).done());
            }
          });
        }),
        (n.__handleOne = function (t, n, r) {
          var e = this.getCached(n);
          return r instanceof Error
            ? t.set(n, e.setError(r).done())
            : t.set(n, e.setValue(r).done());
        }),
        (n.__setLoading = function (t, n) {
          return this.$FluxLoadObjectStore$p_7(t, n, function (e) {
            return e.loading();
          });
        }),
        (n.__setUpdating = function (t, n) {
          return this.$FluxLoadObjectStore$p_7(t, n, function (e) {
            return e.updating();
          });
        }),
        (n.__setUpdatingAndRemoveErrors = function (t, n) {
          return this.$FluxLoadObjectStore$p_7(t, n, function (e) {
            return e.updating().removeError();
          });
        }),
        (n.__setCreating = function (t, n) {
          return this.$FluxLoadObjectStore$p_7(t, n, function (e) {
            return e.creating();
          });
        }),
        (n.__setDeleting = function (t, n) {
          return this.$FluxLoadObjectStore$p_7(t, n, function (e) {
            return e.deleting();
          });
        }),
        (n.__setEmpty = function (t, n) {
          return this.$FluxLoadObjectStore$p_7(t, n, function (e) {
            return e.removeValue().removeOperation().removeError();
          });
        }),
        (n.__setEmptyAndLoading = function (t, n) {
          return this.$FluxLoadObjectStore$p_7(t, n, function (e) {
            return e.removeValue().removeError().loading();
          });
        }),
        (n.__getChunkSize = function () {}),
        (n.__eagerLoadAll = function () {
          return !1;
        }),
        (n.__isKeyPendingLoad = function (t) {
          return this.$FluxLoadObjectStore$p_2.has(t);
        }),
        (n.$FluxLoadObjectStore$p_7 = function (t, n, r) {
          var e = this;
          return t.withMutations(function (t) {
            for (var o of n) {
              var a = e.getCached(o);
              t.set(o, r(a, o));
            }
          });
        }),
        (n.get = function (t) {
          var e = this.getCached(t);
          if (e.isEmpty()) {
            var n = r("immutable").List.of(t);
            this.__queueLoadAll(n);
          }
          return this.getCached(t);
        }),
        (n.getCached = function (n) {
          return (
            e.prototype.get.call(this, n) ||
            r("LoadObject").empty({ creatorModuleID: i.id })
          );
        }),
        (n.getAll = function (t, n) {
          var e = this;
          return this.__getAllInternal(
            t,
            n,
            function (t) {
              return e.getCached(t);
            },
            "getAll",
          );
        }),
        (n.__getAllInternal = function (t, n, o, a) {
          var e = Array.from(t).filter(function (e) {
            return o(e).isEmpty();
          });
          if (e.length > 0) {
            var i = r("immutable").List(e);
            this.__queueLoadAll(i);
          }
          return this.__getAllCachedInternal(t, n, o, a);
        }),
        (n.getAllCached = function (t, n) {
          var e = this;
          return this.__getAllCachedInternal(
            t,
            n,
            function (t) {
              return e.getCached(t);
            },
            "getAll",
          );
        }),
        (n.__getAllCachedInternal = function (t, n, o, a) {
          var e = new Set(t),
            i =
              n || this.$FluxLoadObjectStore$p_5.get(a) || r("immutable").Map(),
            l = i.withMutations(function (t) {
              for (var n of i.keys()) e.has(n) || t.delete(n);
              for (var r of e) t.set(r, o(r));
            });
          return (this.$FluxLoadObjectStore$p_5.set(a, l), l);
        }),
        (n.__queueLoadAll = function (t) {
          (this.$FluxLoadObjectStore$p_3 ||
            (this.$FluxLoadObjectStore$p_3 = r("setImmediate")(
              this.$FluxLoadObjectStore$p_8,
            )),
            (this.$FluxLoadObjectStore$p_2 =
              this.$FluxLoadObjectStore$p_2.union(t)),
            this.__eagerLoadAll() &&
              this.$FluxLoadObjectStore$p_4 != null &&
              this.$FluxLoadObjectStore$p_2.size >=
                this.$FluxLoadObjectStore$p_4 &&
              this.$FluxLoadObjectStore$p_8());
        }),
        (n.$FluxLoadObjectStore$p_9 = function (t) {
          this.__dispatchStartLoadAction(t);
          var e = this.$FluxLoadObjectStore$p_4;
          if (e != null) {
            var n = [];
            for (var r of t)
              (n.push(r), n.length >= e && (this.__loadAll(n), (n = [])));
            n.length > 0 && this.__loadAll(n);
          } else this.__loadAll(t);
        }),
        (n.__dispatchStartLoadAction = function (t) {
          this.getDispatcher().dispatch({
            action: {
              actionType: this.$FluxLoadObjectStore$p_1,
              type: this.$FluxLoadObjectStore$p_1,
              keys: t,
            },
          });
        }),
        t
      );
    })(r("FluxMapStore"));
    ((d.__moduleID = i.id), (l.default = d));
  },
  98,
);
