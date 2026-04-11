__d(
  "WAWebCollectionUtils",
  ["$InternalEnum", "WALogger", "WAWebSimpleCollection"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["Aggregate"]);
    function u(e) {
      return Array.isArray(e) ? JSON.stringify(e.map(u)) : String(e);
    }
    var c = (function (e) {
      function t(t, n) {
        var r;
        ((r = e.call(this) || this),
          (r.$AggregatedProxyView$p_3 = !1),
          (r.$AggregatedProxyView$p_2 = t),
          (r.$AggregatedProxyView$p_1 = n));
        var o = r;
        return (
          Object.defineProperty(r, "_models", {
            get: function () {
              var e, t;
              return (e =
                (t = o.$AggregatedProxyView$p_5()) == null
                  ? void 0
                  : t._models) != null
                ? e
                : [];
            },
          }),
          Object.defineProperty(r, "_index", {
            get: function () {
              var e, t;
              return (e =
                (t = o.$AggregatedProxyView$p_5()) == null
                  ? void 0
                  : t._index) != null
                ? e
                : {};
            },
          }),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$AggregatedProxyView$p_5 = function () {
          var e;
          return (e = this.$AggregatedProxyView$p_2.get(
            this.$AggregatedProxyView$p_1,
          )) == null
            ? void 0
            : e.collection;
        }),
        (n.on = function (n, r, o) {
          return (
            e.prototype.on.call(this, n, r, o),
            this.$AggregatedProxyView$p_6(),
            this
          );
        }),
        (n.off = function (n, r, o) {
          return (
            e.prototype.off.call(this, n, r, o),
            this.$AggregatedProxyView$p_7(),
            this
          );
        }),
        (n._hasListeners = function () {
          var e = this._events;
          if (e == null) return !1;
          for (var t in e) if (e[t] != null && e[t].length > 0) return !0;
          return !1;
        }),
        (n.$AggregatedProxyView$p_6 = function () {
          var e = this,
            t = this.$AggregatedProxyView$p_5();
          if (t == null) {
            if (this.$AggregatedProxyView$p_3) return;
            ((this.$AggregatedProxyView$p_3 = !0),
              this.$AggregatedProxyView$p_2.on(
                "add",
                this.$AggregatedProxyView$p_6,
                this,
              ),
              (this.$AggregatedProxyView$p_4 = function () {
                e.$AggregatedProxyView$p_2.off(
                  "add",
                  e.$AggregatedProxyView$p_6,
                  e,
                );
              }));
            return;
          }
          if (this.$AggregatedProxyView$p_3) {
            var n;
            ((n = this.$AggregatedProxyView$p_4) == null || n.call(this),
              (this.$AggregatedProxyView$p_3 = !1));
          }
          (t.on("all", this.$AggregatedProxyView$p_8, this),
            this.$AggregatedProxyView$p_2.on(
              "remove",
              this.$AggregatedProxyView$p_9,
              this,
            ),
            (this.$AggregatedProxyView$p_4 = function () {
              (t.off("all", e.$AggregatedProxyView$p_8, e),
                e.$AggregatedProxyView$p_2.off(
                  "remove",
                  e.$AggregatedProxyView$p_9,
                  e,
                ));
            }));
        }),
        (n.$AggregatedProxyView$p_7 = function () {
          var e;
          this._hasListeners() ||
            ((e = this.$AggregatedProxyView$p_4) == null || e.call(this),
            (this.$AggregatedProxyView$p_4 = null));
        }),
        (n.$AggregatedProxyView$p_9 = function (t) {
          if (this.$AggregatedProxyView$p_1 === t.id) {
            var e;
            ((e = this.$AggregatedProxyView$p_4) == null || e.call(this),
              (this.$AggregatedProxyView$p_4 = null),
              this.$AggregatedProxyView$p_6());
          }
        }),
        (n.$AggregatedProxyView$p_8 = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          this.trigger.apply(this, [t].concat(n));
        }),
        t
      );
    })(o("WAWebSimpleCollection").SimpleCollection);
    function d(e, t) {
      t === void 0 && (t = {});
      var n = t,
        r = n.subscribeToKey,
        a = n.subscribeToKeys,
        i = new (o("WAWebSimpleCollection").SimpleCollection)(),
        l = new Map(),
        d = function (t) {
          if (r != null) {
            var e = function () {
              var n = function () {
                t.off("change:" + r, e);
              };
              _(t, n);
            };
            t.on("change:" + r, e);
          }
          if (a != null) {
            var n = function () {
              var e = function () {
                a.forEach(function (e) {
                  t.off("change:" + e, n);
                });
              };
              _(t, e);
            };
            a.forEach(function (e) {
              t.on("change:" + e, n);
            });
          }
        },
        m = function (t, n) {
          var e,
            r = (e = i.get(t)) == null ? void 0 : e.collection;
          (r && (r.remove(n), r.length === 0 && i.remove(t)), l.delete(n.id));
        },
        p = function (n) {
          var t,
            r = e(n);
          if (r != null) {
            var a = l.get(n.id),
              s = u(r);
            a != null && s !== a && m(a, n);
            var c = (t = i.get(s)) == null ? void 0 : t.collection;
            (c == null &&
              ((c = new (o("WAWebSimpleCollection").SimpleCollection)()),
              i.add({ id: s, collection: c })),
              c.add(n),
              l.set(n.id, s),
              d(n));
          }
        },
        _ = function (n, r) {
          var t = l.get(n.id),
            o = e(n);
          if (o == null) {
            t != null && (r(), m(t, n));
            return;
          }
          if (t !== u(o)) return (r(), p(n));
        };
      return Object.assign(
        function (e) {
          return new c(i, u(e));
        },
        {
          kind: s.Aggregate,
          add: function (t) {
            t.forEach(function (e) {
              p(e);
            });
          },
          remove: function (n) {
            n.filter(Boolean).forEach(function (t) {
              var n = u(e(t));
              m(n, t);
            });
          },
          reset: function () {
            (i.forEach(function (e) {
              var t = e.collection;
              t.reset();
            }),
              i.reset(),
              l.clear());
          },
        },
      );
    }
    ((l.CollectionMethodKind = s),
      (l.AggregatedProxyView = c),
      (l.aggregated = d));
  },
  98,
);
