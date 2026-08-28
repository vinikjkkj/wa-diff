__d(
  "AdsAbstractDataManager",
  [
    "fbt",
    "invariant",
    "AdsError",
    "Promise",
    "err",
    "mapMap",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = (function () {
        function t() {
          var e = this;
          ((this.__loadMultiple = function (t) {
            e.__getMultiple &&
              r("promiseDone")(
                e.__getMultiple(t),
                function (n) {
                  e.__processIDMapResponse(n, t, function (e) {
                    var t = r("err")(
                      "Object with id '" +
                        String(e) +
                        "' does not exist, cannot be loaded due to missing permissions, or does not support this operation.",
                    );
                    return (t.stack, t);
                  });
                },
                function (n) {
                  return t.forEach(function (t) {
                    e.__handleError(["load"], t, null, n);
                  });
                },
              );
          }),
            (this.$11 = function () {
              (e.$13(e.$5, e.$4), e.$13(e.$3, e.$2), (e.$7 = !1), e.$10());
            }),
            (this.$6 = 0),
            (this.$4 = this.$8()),
            (this.$2 = this.$9()),
            this.$10(),
            (this.$7 = !1),
            (this.$1 = this.$11.bind(this)));
        }
        var o = t.prototype;
        return (
          (o.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "object");
          }),
          (o.__getObjectError = function (t, n) {
            var e;
            return (
              n != null && n.message != null && n.message !== ""
                ? (e = n.message)
                : (e = s._(
                    /*BTDS*/ "There was an unexpected error for the {object_type} with id: {object_id}",
                    [
                      s._param("object_type", this.__getObjectTypeLabel()),
                      s._param("object_id", "" + t),
                    ],
                  )),
              r("AdsError").createError("object_load_error_" + t, e)
            );
          }),
          (o.__handleSuccess = function (o, a, i, l) {
            var t = this;
            if (l != null) {
              var s = l;
              (o.forEach(function (e) {
                var n = r("nullthrows")(t.$5.get(e));
                n.set(a, { response: s, version: i });
              }),
                this.$7 ||
                  (r("promiseDone")(
                    (e || (e = n("Promise"))).resolve().then(this.$1),
                  ),
                  (this.$7 = !0)));
            }
          }),
          (o.__handleError = function (o, a, i, l) {
            var t = this;
            if (l != null) {
              var s = l;
              (o.forEach(function (e) {
                var n = r("nullthrows")(t.$3.get(e));
                n.set(a, { response: s, version: i });
              }),
                this.$7 ||
                  (r("promiseDone")(
                    (e || (e = n("Promise"))).resolve().then(this.$1),
                  ),
                  (this.$7 = !0)));
            }
          }),
          (o.__withBatching = function (t, n) {
            return t.length < 5 ? n.batched() : n;
          }),
          (o.__processIDMapResponse = function (t, n, r) {
            var e = this,
              o = new Set(n),
              a = t != null ? t : {};
            (n.forEach(function (t) {
              a[t] && (e.__handleSuccess(["load"], t, null, a[t]), o.delete(t));
            }),
              this.$12(o, r));
          }),
          (o.__processDataArrayResponse = function (t, n, r, o) {
            var e = this,
              a = new Set(n),
              i = (t == null ? void 0 : t.data) || [];
            (i.forEach(function (t) {
              var n = r(t);
              (e.__handleSuccess(["load"], n, null, t), a.delete(n));
            }),
              this.$12(a, o));
          }),
          (o.$12 = function (t, n) {
            var e = this;
            t.size > 0 &&
              t.forEach(function (t) {
                return e.__handleError(["load"], t, null, n(t));
              });
          }),
          (o.$8 = function () {
            var e = new Map();
            return (
              this.__onBatchCreated &&
                e.set("create", this.__onBatchCreated.bind(this)),
              this.__onBatchLoaded &&
                e.set("load", this.__onBatchLoaded.bind(this)),
              this.__onBatchUpdated &&
                e.set("update", this.__onBatchUpdated.bind(this)),
              this.__onBatchDeleted &&
                e.set("delete", this.__onBatchDeleted.bind(this)),
              e
            );
          }),
          (o.$9 = function () {
            var e = new Map();
            return (
              this.__onBatchCreateError &&
                e.set("create", this.__onBatchCreateError.bind(this)),
              this.__onBatchLoadError &&
                e.set("load", this.__onBatchLoadError.bind(this)),
              this.__onBatchUpdateError &&
                e.set("update", this.__onBatchUpdateError.bind(this)),
              this.__onBatchDeleteError &&
                e.set("delete", this.__onBatchDeleteError.bind(this)),
              e
            );
          }),
          (o.$10 = function () {
            ((this.$5 = r("mapMap")(this.$4, function () {
              return new Map();
            })),
              (this.$3 = r("mapMap")(this.$2, function () {
                return new Map();
              })));
          }),
          (o.$13 = function (t, n) {
            t.forEach(function (e, t) {
              var r = n.get(t);
              if ((r != null || u(0, 11817, t), e.size > 0)) {
                var o = new Map(),
                  a = new Map();
                (e.forEach(function (e, t) {
                  (o.set(t, e.response), a.set(t, e.version));
                }),
                  r(o, a));
              }
            });
          }),
          t
        );
      })();
    l.default = c;
  },
  226,
);
