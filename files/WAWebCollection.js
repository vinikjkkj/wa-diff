__d(
  "WAWebCollection",
  [
    "WAArrayMove",
    "WALogger",
    "WAWebCollectionInternalUtils",
    "WAWebEventEmitter",
    "compactMap",
    "countWhere",
    "err",
    "gkx",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function n(e, n) {
          var o;
          (n === void 0 && (n = {}),
            (o = t.call(this) || this),
            n.parent && (o.parent = n.parent));
          var a = o.constructor,
            i = a.comparator,
            l = a.model;
          if (!l)
            throw r("err")(
              "Collection initialized without model. It is likely that you have a circular dependency. Set a breakpoint to find it and use inline `require` instead of `import` to avoid it.",
            );
          ((o.modelClass = l), i && (o._comparator = i), o._reset());
          var s = o;
          return (
            Object.defineProperty(o, "length", {
              get: function () {
                return s._models.length;
              },
            }),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.add = function (t, n) {
            var e;
            return (
              Array.isArray(t) ? (e = t.slice()) : (e = t ? [t] : []),
              this.set(
                e,
                babelHelpers.extends({ merge: !1, add: !0, remove: !1 }, n),
              )
            );
          }),
          (a.set = function (n, r) {
            var t = this;
            if (!n)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "collection:set called with no models",
                    ])),
                ),
                []
              );
            for (
              var a = babelHelpers.extends(
                  { add: !0, remove: !0, merge: !0 },
                  r,
                ),
                i,
                l,
                u,
                c,
                d = this._comparator && a.sort !== !1,
                m = [],
                p = [],
                _ = {},
                f = a.add,
                g = a.merge,
                h = a.remove,
                y = a.at != null ? a.at : void 0,
                C = !d && f === !0 && h === !0 ? [] : null,
                b = function () {
                  if (((c = n[S]), t.isModel(c) && (l = c), (i = c.id), !i))
                    return (
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "collection:set model has no id",
                          ])),
                      ),
                      0
                    );
                  if (((u = t.get(i)), u)) {
                    var e = u;
                    (h === !0 && (_[u.id.toString()] = !0),
                      g === !0 &&
                        ((c = l && c === l ? l.attributes : c),
                        e.set(c, a),
                        t.$Collection$p_1(function (t) {
                          t.add([e]);
                        })),
                      (n[S] = e));
                  } else if (f === !0)
                    if (((l = n[S] = t.$Collection$p_2(c, a)), l)) {
                      var r = l;
                      (m.push(r), t.$Collection$p_3(r));
                    } else return 0;
                  if (((l = u || l), !l)) return 0;
                  var d = l;
                  (C && (!l.id || !_[l.id.toString()]) && C.push(d),
                    (_[d.id.toString()] = !0));
                },
                v,
                S = 0,
                R = n.length;
              S < R;
              S++
            )
              v = b();
            if (h === !0) {
              for (var L = 0, E = this.length; L < E; L++) {
                l = this._models[L];
                var k = l;
                _[l.id.toString()] || p.push(k);
              }
              p.length && this.remove(p, babelHelpers.extends({}, a));
            }
            var I;
            if (m.length || (C != null && C.length)) {
              if ((d && (I = !0), typeof y == "number")) {
                var T;
                (T = this._models).splice.apply(T, [y, 0].concat(m));
              } else
                for (var D = C || m, x = 0, $ = D.length; x < $; x++)
                  this._models.push(D[x]);
              this.$Collection$p_1(function (e) {
                e.add(m);
              });
            }
            return (
              I && this.sort({ silent: !0 }),
              this.$Collection$p_4(m, I, C, a),
              n
            );
          }),
          (a.remove = function (t, n) {
            n === void 0 && (n = {});
            for (
              var e,
                r,
                o,
                a,
                i = Array.isArray(t) ? t.slice() : [t],
                l = [],
                s = 0,
                u = i.length;
              s < u;
              s++
            )
              if (
                ((a = i[s]),
                !!a &&
                  ((o = a instanceof this.modelClass ? a.id : a),
                  (e = l[s] = this.get(o)),
                  e))
              ) {
                var c = e;
                (this.$Collection$p_5(e),
                  (r = this._models.indexOf(e)),
                  this._models.splice(r, 1),
                  n.silent !== !0 &&
                    ((n.index = r),
                    c.trigger
                      ? c.trigger("remove", e, this, n)
                      : this.trigger("remove", e, this, n)),
                  this.$Collection$p_6(c));
              }
            return (
              this.$Collection$p_1(function (e) {
                e.remove(l);
              }),
              l
            );
          }),
          (a.reset = function () {
            for (var e = 0, t = this._models.length; e < t; e++)
              this.$Collection$p_6(this._models[e]);
            (this._reset(), this.trigger("reset", this));
          }),
          (a.sort = function (t) {
            var e;
            return (
              t === void 0 && (t = {}),
              this._models.sort(
                (e = t.comparator) != null ? e : this._comparator.bind(this),
              ),
              t.silent !== !0 && this.trigger("sort", this, t),
              this
            );
          }),
          (a.replaceId = function (t, n) {
            var e = this.get(t);
            e &&
              (this.$Collection$p_7(t),
              e.set({ id: n }),
              this.$Collection$p_8(e));
          }),
          (a.reorderMutate = function (t, n) {
            o("WAArrayMove").arrayMoveMutate(this._models, t, n);
          }),
          (a.get = function (t) {
            return this._index[t];
          }),
          (a.assertGet = function (t) {
            var e = this._index[t];
            if (!e)
              if (r("gkx")("26258"))
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!",
                      ])),
                  )
                  .sendLogs("Collection:assertGet no result");
              else {
                var n = this.constructor.name + ":assertGet";
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "no model with id ",
                        "",
                      ])),
                    String(t),
                  )
                  .sendLogs(n);
              }
            return e;
          }),
          (a.at = function (t) {
            return this._models[t];
          }),
          (a.serialize = function () {
            return this.map(function (e) {
              return e.toJSON();
            });
          }),
          (a.toJSON = function () {
            return this.serialize();
          }),
          (a.isModel = function (t) {
            return t instanceof this.modelClass;
          }),
          (a.includes = function (t, n) {
            return (
              n === void 0 && (n = 0),
              n === 0
                ? t instanceof this.modelClass
                  ? this.get(t.id) != null
                  : !1
                : this._models.includes(t, n)
            );
          }),
          (a.indexOf = function (t, n) {
            return this._models.indexOf(t, n);
          }),
          (a.lastIndexOf = function (t, n) {
            return this._models.lastIndexOf(t, n);
          }),
          (a.findLast = function (t) {
            return this._models.findLast(t);
          }),
          (a.every = function (t) {
            return this._models.every(t);
          }),
          (a.some = function (t) {
            return this._models.some(t);
          }),
          (a.forEach = function (t) {
            this._models.forEach(t);
          }),
          (a.map = function (t) {
            return this._models.map(t);
          }),
          (a.compactMap = function (t) {
            return r("compactMap")(this._models, t);
          }),
          (a.countWhere = function (t) {
            return r("countWhere")(this._models, t);
          }),
          (a.sumBy = function (t) {
            return r("sumBy")(this._models, t);
          }),
          (a.filter = function (t) {
            return this._models.filter(t);
          }),
          (a.findFirst = function (t) {
            return this._models.find(t);
          }),
          (a.reduce = function (t, n) {
            return this._models.reduce(t, n);
          }),
          (a.slice = function (t, n) {
            return this._models.slice(t, n);
          }),
          (a.where = function (t) {
            return this.filter(function (e) {
              for (var n in t) if (t[n] !== e.get(n)) return !1;
              return !0;
            });
          }),
          (a.head = function () {
            return this._models[0];
          }),
          (a.last = function () {
            return this._models[this._models.length - 1];
          }),
          (a.toArray = function () {
            return this._models.slice();
          }),
          (a.getModelsArray = function () {
            return this._models;
          }),
          (a.reorder = function (t, n) {
            return o("WAArrayMove").arrayMove(this._models, t, n);
          }),
          (a._reset = function () {
            ((this._models = []),
              (this._index = {}),
              this.$Collection$p_1(function (e) {
                e.reset();
              }, !1));
          }),
          (a.$Collection$p_2 = function (t, n) {
            if (this.isModel(t))
              return (t.collection == null && (t.collection = this), t);
            var e = babelHelpers.extends({}, n, { collection: this });
            try {
              return new this.modelClass(t, e);
            } catch (e) {
              var r, a;
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "collection:_prepareModel: for model ",
                      "",
                    ])),
                  (r =
                    this == null || (a = this.modelClass) == null
                      ? void 0
                      : a.name) != null
                    ? r
                    : "",
                )
                .catching(e)
                .sendLogs("collection-model-creation-error");
              return;
            }
          }),
          (a.$Collection$p_3 = function (t) {
            (this.$Collection$p_8(t),
              t.collection || (t.collection = this),
              t.on && t.on("all", this.$Collection$p_9, this));
          }),
          (a.$Collection$p_6 = function (t) {
            (this === t.collection && delete t.collection,
              this.$Collection$p_5(t),
              t.off && t.off("all", this.$Collection$p_9, this));
          }),
          (a.$Collection$p_8 = function (t) {
            this._index[t.id] = t;
          }),
          (a.$Collection$p_5 = function (t) {
            delete this._index[t.id];
          }),
          (a.$Collection$p_7 = function (t) {
            this.get(t) && delete this._index[t];
          }),
          (a.$Collection$p_4 = function (t, n, r, o) {
            if (o.silent !== !0) {
              for (var e = 0, a = t.length; e < a; e++) {
                var i = t[e];
                i.trigger
                  ? i.trigger("add", i, this, o)
                  : this.trigger("add", i, this, o);
              }
              (n === !0 || (r != null && r.length)) &&
                this.trigger("sort", this, o);
            }
          }),
          (a.$Collection$p_9 = function (t, n, r, o) {
            var e = t.indexOf(":"),
              a = e === -1 ? t : t.slice(0, e);
            ((a === "add" || a === "remove") && r !== this) ||
              (a === "destroy" && this.remove(n, o),
              this.trigger.apply(this, arguments));
          }),
          (a.$Collection$p_1 = function (t, n) {
            var e;
            if ((n === void 0 && (n = !0), this._aggregators == null)) {
              if (!n) return;
              this._aggregators = o(
                "WAWebCollectionInternalUtils",
              ).groupMethodsByKind(this).aggregate;
            }
            (e = this._aggregators) == null || e.forEach(t);
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    l.default = m;
  },
  98,
);
