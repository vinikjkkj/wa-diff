__d(
  "FieldGranularDerivedStore",
  [
    "invariant",
    "AdsLoadObjectUtils",
    "FBLogger",
    "FluxDerivedStoreNew",
    "abstractMethod",
    "immutable",
    "isValidID",
    "mapObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = "-fieldsMap-",
      c = (function (t) {
        function n(e) {
          var r;
          return (
            (r = t.call(this, e) || this),
            (r.$FieldGranularDerivedStore$p_2 = new Set()),
            (r.$FieldGranularDerivedStore$p_1 = new Map()),
            (r.$FieldGranularDerivedStore$p_3 = n.serializeFieldsMap(
              r.__getAllFields(),
            )),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getCachedByFields = function (o, a, i) {
            var t = this,
              l = n.getKey(o, a);
            return this.$FieldGranularDerivedStore$p_5(a, l, function (n) {
              return (e || (e = r("mapObject")))(n, function (e, n) {
                return t.getCachedSingleField(o, n);
              });
            });
          }),
          (a.$FieldGranularDerivedStore$p_6 = function (t) {
            this.$FieldGranularDerivedStore$p_2.add(t);
          }),
          (a.getByFields = function (o, a, i) {
            var t = this,
              l = a != null ? a : this.__getAllFields();
            r("isValidID")(o) ||
              r("FBLogger")("ads")
                .blameToPreviousFrame()
                .warn(
                  "FieldGranularDerivedStore getByFields called with invalid id: %s",
                  o,
                );
            var s = n.getKey(o, l),
              u = this.$FieldGranularDerivedStore$p_5(l, s, function (n) {
                return (e || (e = r("mapObject")))(n, function (e, n) {
                  return t.getSingleField(o, n);
                });
              });
            return (this.$FieldGranularDerivedStore$p_6(s), u);
          }),
          (a.__getFieldsString = function (t, n, r) {
            var e = r != null ? r.split(".")[0] + "-" : "";
            return (
              e +
              Object.keys(t)
                .map(function (e) {
                  return n ? e.substring(0, 10) : e;
                })
                .join(".")
            );
          }),
          (a.getCachedSingleField = function (r, o) {
            return t.prototype.getCached.call(this, n.getSingleFieldKey(r, o));
          }),
          (a.getSingleField = function (r, o) {
            return t.prototype.get.call(this, n.getSingleFieldKey(r, o));
          }),
          (a.$FieldGranularDerivedStore$p_5 = function (t, n, r) {
            if (!this.$FieldGranularDerivedStore$p_2.has(n)) {
              var e = this.$FieldGranularDerivedStore$p_1.get(n),
                a = r(t),
                i = o("AdsLoadObjectUtils").allByKeyFromObject(a);
              (!e || !e.shallowEquals(i)) &&
                this.$FieldGranularDerivedStore$p_1.set(n, i);
            }
            var l = this.$FieldGranularDerivedStore$p_1.get(n);
            return (l != null || s(0, 31859), l);
          }),
          (a.getAllByFieldsImpl = function (t, r, o, a) {
            var e = new Set(t),
              i = Array.from(e).map(function (e) {
                return n.getKey(e, r);
              }),
              l = this.$FieldGranularDerivedStore$p_7(i, o, null, a);
            return l.mapKeys(function (e) {
              return e.split(u)[0];
            });
          }),
          (a.$FieldGranularDerivedStore$p_7 = function (t, o, a, i) {
            var e = this,
              l = new Set(t),
              s =
                a ||
                this.$FieldGranularDerivedStore$p_4 ||
                r("immutable").Map(),
              u = s.withMutations(function (t) {
                (s.forEach(function (e, n) {
                  l.has(n) || t.delete(n);
                }),
                  l.forEach(function (r) {
                    var a = n.deserializeKey(r),
                      l = a[0],
                      s = a[1],
                      u = o
                        ? e.getCachedByFields(l, s, i)
                        : e.getByFields(l, s, i);
                    t.set(r, u);
                  }));
              });
            return ((this.$FieldGranularDerivedStore$p_4 = u), u);
          }),
          (a.getAllByFields = function (t, n, r) {
            return this.getAllByFieldsImpl(t, n, !1, r);
          }),
          (a.getAllCachedByFields = function (t, n, r) {
            return this.getAllByFieldsImpl(t, n, !0, r);
          }),
          (a.getObject = function (t) {
            return this.getByFields(t, this.__getAllFields());
          }),
          (a.getCachedObject = function (t) {
            return this.getCachedByFields(t, this.__getAllFields());
          }),
          (a.getAllObjects = function (t) {
            return this.getAllByFields(t, this.__getAllFields());
          }),
          (a.getAllCachedObjects = function (t) {
            return this.getAllCachedByFields(t, this.__getAllFields());
          }),
          (n.getKey = function (t, r) {
            var e = n.serializeFieldsMap(r);
            return n.createFieldsKey(t, e);
          }),
          (n.getSingleFieldKey = function (t, r) {
            return n.createFieldsKey(t, r);
          }),
          (n.serializeFieldsMap = function (t) {
            return Object.keys(t).sort().join(",");
          }),
          (n.createFieldsKey = function (t, n) {
            return "" + t + u + n;
          }),
          (a.__deserializeSingleFieldKey = function (t) {
            var e = t.split(u),
              n = e[0],
              r = e[1];
            return [n, r];
          }),
          (n.deserializeKey = function (t) {
            var e = t.split(u),
              n = e[0],
              r = e[1],
              o = Object.fromEntries(
                r.split(",").map(function (e) {
                  return [e, null];
                }),
              );
            return [n, o];
          }),
          (a.__getAllFields = function () {
            return r("abstractMethod")(
              "FieldGranularDerivedStore",
              "__getAllFields",
            );
          }),
          (a.__invalidateCache = function () {
            (t.prototype.__invalidateCache.call(this),
              this.$FieldGranularDerivedStore$p_2.clear());
          }),
          (a.clearCacheForTestsOnly = function () {
            (t.prototype.clearCacheForTestsOnly.call(this),
              this.$FieldGranularDerivedStore$p_2.clear(),
              this.$FieldGranularDerivedStore$p_1.clear());
          }),
          (a.get = function (n) {
            return t.prototype.get.call(this, n);
          }),
          (a.getCached = function (n) {
            return t.prototype.getCached.call(this, n);
          }),
          (a.getAll = function (n) {
            return t.prototype.getAll.call(this, n);
          }),
          (a.getAllCached = function (n) {
            return t.prototype.getAllCached.call(this, n);
          }),
          n
        );
      })(r("FluxDerivedStoreNew"));
    l.default = c;
  },
  98,
);
