__d(
  "FieldGranularLoadObjectMap",
  [
    "FBLogger",
    "LoadObject",
    "LoadObjectMap",
    "LoadObjectMapBatchingQueueNames",
    "QPLSharing",
    "err",
    "filterSet",
    "immutable",
    "mapObject",
    "nullthrows",
    "promiseDone",
    "shallowEqual",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Number.POSITIVE_INFINITY,
      u = function (t) {
        return JSON.stringify(t);
      },
      c = "long_secret_string_do_not_use",
      d = function (t, n) {
        return t.isEmpty();
      },
      m = (function (t) {
        function n(e, n, o, a, i, l, m, p, _) {
          var f;
          return (
            a === void 0 && (a = u),
            i === void 0 && (i = s),
            l === void 0 && (l = void 0),
            m === void 0 && (m = new Set()),
            p === void 0 && (p = new Map()),
            _ === void 0 && (_ = new Set()),
            (f = t.call(this, c, function (e) {}, a, d, i, !0) || this),
            (f.flushLoadingKeysBatched = r("throttle")(function () {
              return f.$FieldGranularLoadObjectMap$p_21();
            })),
            (f.flushResponsesBatched = r("throttle")(function () {
              return f.$FieldGranularLoadObjectMap$p_22();
            })),
            (f.$FieldGranularLoadObjectMap$p_1 = e),
            (f.$FieldGranularLoadObjectMap$p_2 = i),
            (f.$FieldGranularLoadObjectMap$p_3 = o),
            (f.$FieldGranularLoadObjectMap$p_4 = a),
            (f.$FieldGranularLoadObjectMap$p_8 = m),
            (f.$FieldGranularLoadObjectMap$p_6 = n),
            (f.$FieldGranularLoadObjectMap$p_5 = []),
            (f.$FieldGranularLoadObjectMap$p_7 = []),
            (f.$FieldGranularLoadObjectMap$p_9 = p),
            (f.$FieldGranularLoadObjectMap$p_10 = new Map()),
            (f.$FieldGranularLoadObjectMap$p_11 = new Map()),
            (f.$FieldGranularLoadObjectMap$p_12 = new Map()),
            (f.$FieldGranularLoadObjectMap$p_13 = l),
            (f.$FieldGranularLoadObjectMap$p_14 = new Map()),
            (f.$FieldGranularLoadObjectMap$p_15 = _),
            (f.$FieldGranularLoadObjectMap$p_17 = []),
            (f.$FieldGranularLoadObjectMap$p_18 = new Set()),
            (f.$FieldGranularLoadObjectMap$p_16 = new Map()),
            f
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.__clearFrame = function (n) {
            var e;
            return (
              (e = this.$FieldGranularLoadObjectMap$p_14.get(n)) == null ||
                e.clear(),
              t.prototype.__clearFrame.call(this, n)
            );
          }),
          (o.__doLoadChunk = function (t) {
            var e = this,
              o = n.splitKeyFieldPairs(t),
              a = o.fields,
              i = o.keys,
              l = new Set();
            (t.forEach(function (t) {
              var n,
                r = e.$FieldGranularLoadObjectMap$p_4(t);
              (l.add(
                babelHelpers.extends({}, t, {
                  extraParam: e.$FieldGranularLoadObjectMap$p_10.get(r),
                }),
              ),
                e.$FieldGranularLoadObjectMap$p_9.has(r) ||
                  e.$FieldGranularLoadObjectMap$p_9.set(r, 0),
                e.$FieldGranularLoadObjectMap$p_5.push([
                  t,
                  (n = e.$FieldGranularLoadObjectMap$p_9.get(r)) != null
                    ? n
                    : 0,
                ]));
            }),
              this.flushLoadingKeysBatched(),
              r("promiseDone")(
                this.$FieldGranularLoadObjectMap$p_1(l),
                function (t) {
                  (Array.from(i).forEach(function (r) {
                    t[r] != null
                      ? e.$FieldGranularLoadObjectMap$p_7.push([
                          r,
                          n.parseResponse(
                            e.$FieldGranularLoadObjectMap$p_13 != null
                              ? e.$FieldGranularLoadObjectMap$p_13(t[r])
                              : t[r],
                            a,
                          ),
                        ])
                      : (e.$FieldGranularLoadObjectMap$p_7.push([
                          r,
                          n.parseError(r, a),
                        ]),
                        a.forEach(function (t) {
                          var n = e.$FieldGranularLoadObjectMap$p_4({
                            key: r,
                            field: t,
                          });
                          e.$FieldGranularLoadObjectMap$p_18.has(n) ||
                            (e.$FieldGranularLoadObjectMap$p_17.push({
                              key: r,
                              field: t,
                            }),
                            e.$FieldGranularLoadObjectMap$p_18.add(n));
                        }));
                  }),
                    e.flushResponsesBatched());
                },
                function (t) {
                  (Array.from(i).forEach(function (r) {
                    (e.$FieldGranularLoadObjectMap$p_7.push([
                      r,
                      n.parseError(r, a, t),
                    ]),
                      a.forEach(function (t) {
                        var n = e.$FieldGranularLoadObjectMap$p_4({
                          key: r,
                          field: t,
                        });
                        e.$FieldGranularLoadObjectMap$p_18.has(n) ||
                          (e.$FieldGranularLoadObjectMap$p_17.push({
                            key: r,
                            field: t,
                          }),
                          e.$FieldGranularLoadObjectMap$p_18.add(n));
                      }));
                  }),
                    e.flushResponsesBatched());
                },
              ));
          }),
          (o.loadAll = function (t, n, r) {
            for (var e of t) for (var o of n) this.getSingleField(e, o, r);
          }),
          (o.$FieldGranularLoadObjectMap$p_19 = function (t, n, r) {
            var e;
            return (
              r +
              (typeof t == "string"
                ? t
                : (e = JSON.stringify(t)) != null
                  ? e
                  : "empty") +
              ":" +
              Object.keys(n).join(",")
            );
          }),
          (o.getObjectInstance_LEGACY = function (t, n) {
            var e = this.$FieldGranularLoadObjectMap$p_11.get(t);
            if (e != null) return e;
            var r = n();
            return (this.$FieldGranularLoadObjectMap$p_11.set(t, r), r);
          }),
          (o.getObjectInstance = function (t, n, o) {
            var e,
              a =
                (e = this.$FieldGranularLoadObjectMap$p_11.get(t)) != null
                  ? e
                  : {};
            if (this.$FieldGranularLoadObjectMap$p_12.get(t)) return a;
            var i = n(),
              l = r("shallowEqual")(i, a);
            return l
              ? a
              : (this.$FieldGranularLoadObjectMap$p_11.set(t, i),
                o && this.$FieldGranularLoadObjectMap$p_12.set(t, !0),
                i);
          }),
          (o.getFields = function (n, o, a) {
            var t = this,
              i = this.$FieldGranularLoadObjectMap$p_19(n, o, "prefix"),
              l = this.getObjectInstance(
                i,
                function () {
                  return (e || (e = r("mapObject")))(o, function (e, r) {
                    return t.getSingleField(n, r, a);
                  });
                },
                !0,
              );
            return l;
          }),
          (o.getAllFields = function (t, n) {
            var e = this;
            return r("immutable")
              .Map()
              .withMutations(function (r) {
                for (var o of t) r.set(o, e.getFields(o, n));
              });
          }),
          (o.getCached = function (n) {
            var e,
              o,
              a = this.$FieldGranularLoadObjectMap$p_4(n);
            if (!this.$FieldGranularLoadObjectMap$p_15.has(a))
              return r("LoadObject").empty({ creatorModuleID: i.id });
            var l =
              (e =
                (o = this.$FieldGranularLoadObjectMap$p_16.get(a)) != null
                  ? o
                  : t.prototype.getData.call(this).get(a)) != null
                ? e
                : r("LoadObject").empty({ creatorModuleID: i.id });
            return (this.$FieldGranularLoadObjectMap$p_16.set(a, l), l);
          }),
          (o.getCachedFields = function (n, o) {
            var t = this,
              a = this.$FieldGranularLoadObjectMap$p_19(n, o, "prefix"),
              i = this.getObjectInstance(
                a,
                function () {
                  return (e || (e = r("mapObject")))(o, function (e, r) {
                    return t.getCachedSingleField(n, r);
                  });
                },
                !1,
              );
            return i;
          }),
          (o.getAllCached = function (t, n) {
            var e = this;
            return r("immutable")
              .Map()
              .withMutations(function (r) {
                for (var o of t) r.set(o, e.getCachedFields(o, n));
              });
          }),
          (o.getAllCachedSingleField = function (t, n) {
            var e = this;
            return r("immutable")
              .Map()
              .withMutations(function (r) {
                for (var o of t) r.set(o, e.getCachedSingleField(o, n));
              });
          }),
          (o.getCachedSingleField = function (t, n) {
            return this.getCached({ key: t, field: n });
          }),
          (o.getSingleField = function (t, n, r) {
            return this.getSingleFieldImpl(t, n, r);
          }),
          (o.getSingleFieldImpl = function (t, n, o) {
            var e = { key: t, field: n },
              a = this.getCached(e),
              i = this.$FieldGranularLoadObjectMap$p_4(e);
            if (!this.$FieldGranularLoadObjectMap$p_8.has(i) && d(a, e)) {
              var l,
                s =
                  (l = o == null ? void 0 : o.queueName) != null
                    ? l
                    : r("LoadObjectMapBatchingQueueNames").DEFAULT;
              return (
                this.$FieldGranularLoadObjectMap$p_14.has(s) ||
                  this.$FieldGranularLoadObjectMap$p_14.set(s, new Set()),
                r("nullthrows")(
                  this.$FieldGranularLoadObjectMap$p_14.get(s),
                ).add(n),
                this.$FieldGranularLoadObjectMap$p_8.add(i),
                o != null && this.$FieldGranularLoadObjectMap$p_10.set(i, o),
                this.get(e, s)
              );
            }
            return a;
          }),
          (o.setLoadingWithClearKeysForThisFrame = function (n, r) {
            var e = this,
              o = this.$FieldGranularLoadObjectMap$p_20(function () {
                return t.prototype.getData.call(e).withMutations(function (t) {
                  for (var r of n) {
                    var o = e.$FieldGranularLoadObjectMap$p_4(r),
                      a = e.getCached(r);
                    t.set(o, a.loading());
                  }
                });
              }, r);
            return o;
          }),
          (o.mergeFieldGranular = function (n) {
            var e = [],
              r = function () {
                var t = o[0],
                  n = o[1];
                Object.keys(n).forEach(function (r) {
                  var o = n[r];
                  e.push([{ key: t, field: r }, o]);
                });
              };
            for (var o of n) r();
            return t.prototype.merge.call(this, e);
          }),
          (o.deleteMulti = function (r, o) {
            var e = n.toKeyFieldPairs(r, o);
            return t.prototype.deleteMultipleValueOrError.call(this, e);
          }),
          (o.deleteAllErrors = function () {
            var e = [].concat(this.$FieldGranularLoadObjectMap$p_17);
            return (
              (this.$FieldGranularLoadObjectMap$p_17 = []),
              this.$FieldGranularLoadObjectMap$p_18.clear(),
              t.prototype.deleteMultipleErrors.call(this, e)
            );
          }),
          (o.__mutate = function (r) {
            var e = r();
            if (e === t.prototype.getData.call(this)) return this;
            var o = new Set(e.keys()),
              a = new n(
                this.$FieldGranularLoadObjectMap$p_1,
                this.$FieldGranularLoadObjectMap$p_6,
                this.$FieldGranularLoadObjectMap$p_3,
                this.$FieldGranularLoadObjectMap$p_4,
                this.$FieldGranularLoadObjectMap$p_2,
                this.$FieldGranularLoadObjectMap$p_13,
                this.$FieldGranularLoadObjectMap$p_8,
                this.$FieldGranularLoadObjectMap$p_9,
                o,
              );
            return (
              a.__setData(e),
              (a.$FieldGranularLoadObjectMap$p_17 =
                this.$FieldGranularLoadObjectMap$p_17),
              (a.$FieldGranularLoadObjectMap$p_18 =
                this.$FieldGranularLoadObjectMap$p_18),
              (a.$FieldGranularLoadObjectMap$p_11 =
                this.$FieldGranularLoadObjectMap$p_11),
              a
            );
          }),
          (o.$FieldGranularLoadObjectMap$p_20 = function (o, a) {
            var e = this,
              i = o();
            if (
              i === t.prototype.getData.call(this) &&
              Array.from(a).length === 0
            )
              return this;
            var l = Array.from(a).map(function (t) {
                return e.$FieldGranularLoadObjectMap$p_4(t);
              }),
              s = new Set(i.keys()),
              u = this.$FieldGranularLoadObjectMap$p_8.size === l.length,
              c = new n(
                this.$FieldGranularLoadObjectMap$p_1,
                this.$FieldGranularLoadObjectMap$p_6,
                this.$FieldGranularLoadObjectMap$p_3,
                this.$FieldGranularLoadObjectMap$p_4,
                this.$FieldGranularLoadObjectMap$p_2,
                this.$FieldGranularLoadObjectMap$p_13,
                u
                  ? new Set()
                  : r("filterSet")(
                      this.$FieldGranularLoadObjectMap$p_8,
                      function (e) {
                        return !l.includes(e);
                      },
                    ),
                this.$FieldGranularLoadObjectMap$p_9,
                s,
              );
            return (
              c.__setData(i),
              (c.$FieldGranularLoadObjectMap$p_17 =
                this.$FieldGranularLoadObjectMap$p_17),
              (c.$FieldGranularLoadObjectMap$p_18 =
                this.$FieldGranularLoadObjectMap$p_18),
              (c.$FieldGranularLoadObjectMap$p_11 =
                this.$FieldGranularLoadObjectMap$p_11),
              c
            );
          }),
          (o.__getChunkSize = function (t, n) {
            var e,
              o = this.$FieldGranularLoadObjectMap$p_14.get(n);
            return (
              o == null || o.size === 0
                ? (o == null &&
                    r("FBLogger")("ads").warn(
                      "fieldsInThisFrame should not be null for %s",
                      n,
                    ),
                  (e = this.$FieldGranularLoadObjectMap$p_2))
                : (e = o.size * this.$FieldGranularLoadObjectMap$p_2),
              e
            );
          }),
          (n.parseResponse = function (t, n) {
            var e = {};
            return (
              n.forEach(function (n) {
                t[n] != null
                  ? (e[n] = r("LoadObject").withValue(t[n], {
                      creatorModuleID: i.id,
                    }))
                  : (e[n] = r("LoadObject").withValue(void 0, {
                      creatorModuleID: i.id,
                    }));
              }),
              e
            );
          }),
          (n.parseError = function (t, n, o) {
            var e = {},
              a =
                o ||
                r("err")("Object with key " + String(t) + " does not exist");
            return (
              n.forEach(function (t) {
                e[t] = r("LoadObject").withError(a, { creatorModuleID: i.id });
              }),
              r("QPLSharing").emitPoint(
                "LOAD_AD_OBJECT",
                "FIELD_GRANULAR_LOAD_ERROR",
                {
                  data: {
                    string: { key: String(t), message: a.message },
                    string_array: { fields: Array.from(n).map(String) },
                  },
                },
              ),
              e
            );
          }),
          (o.$FieldGranularLoadObjectMap$p_21 = function () {
            var e = new Set(),
              t = new Set();
            for (var n of this.$FieldGranularLoadObjectMap$p_5) {
              var r,
                o = n[0],
                a = n[1],
                i = this.$FieldGranularLoadObjectMap$p_4(o),
                l =
                  (r = this.$FieldGranularLoadObjectMap$p_9.get(i)) != null
                    ? r
                    : 0;
              (l <= a && e.add(o), t.add(o));
            }
            (this.$FieldGranularLoadObjectMap$p_6(e, t),
              (this.$FieldGranularLoadObjectMap$p_5 = []));
          }),
          (o.$FieldGranularLoadObjectMap$p_22 = function () {
            var e = this;
            (this.$FieldGranularLoadObjectMap$p_7.forEach(function (t) {
              var n = t[0];
              Object.keys(t[1]).forEach(function (t) {
                var r,
                  o = e.$FieldGranularLoadObjectMap$p_4({ key: n, field: t }),
                  a =
                    (r = e.$FieldGranularLoadObjectMap$p_9.get(o)) != null
                      ? r
                      : 0;
                e.$FieldGranularLoadObjectMap$p_9.set(o, a + 1);
              });
            }),
              this.$FieldGranularLoadObjectMap$p_3(
                this.$FieldGranularLoadObjectMap$p_7,
              ),
              (this.$FieldGranularLoadObjectMap$p_7 = []));
          }),
          (n.splitKeyFieldPairs = function (t) {
            var e = new Set(
                Array.from(t).map(function (e) {
                  return e.key;
                }),
              ),
              n = new Set(
                Array.from(t).map(function (e) {
                  return e.field;
                }),
              );
            return { keys: e, fields: n };
          }),
          (n.toKeyFieldPairs = function (t, n) {
            var e = [];
            for (var r of t) for (var o of n) e.push({ key: r, field: o });
            return e;
          }),
          (o.__getFieldsInThisFrame = function (t) {
            return (
              t === void 0 &&
                (t = r("LoadObjectMapBatchingQueueNames").DEFAULT),
              new Set(this.$FieldGranularLoadObjectMap$p_14.get(t))
            );
          }),
          n
        );
      })(r("LoadObjectMap"));
    l.default = m;
  },
  98,
);
