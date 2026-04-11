__d(
  "relay-runtime/mutations/RelayRecordSourceMutator",
  [
    "invariant",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("relay-runtime/store/RelayRecordState").EXISTENT,
      u = (function () {
        function t(e, t) {
          ((this.__sources = [t, e]), (this.$1 = e), (this.$2 = t));
        }
        var r = t.prototype;
        return (
          (r.unstable_getRawRecordWithChanges = function (r) {
            var t = this.$1.get(r),
              o = this.$2.get(r);
            if (o === void 0) {
              if (t == null) return t;
              var a = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).clone(t);
              return a;
            } else {
              if (o === null) return null;
              if (t != null) {
                var i = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).update(t, o);
                return i;
              } else {
                var l = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).clone(o);
                return l;
              }
            }
          }),
          (r.$3 = function (r) {
            var t = this.$2.get(r);
            if (!t) {
              var o = this.$1.get(r);
              (o || l(0, 977, r),
                (t = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).create(r, e.getType(o))),
                this.$2.set(r, t));
            }
            return t;
          }),
          (r.copyFields = function (r, o) {
            var t = this.$2.get(r),
              a = this.$1.get(r);
            t || a || l(0, 978, r);
            var i = this.$3(o);
            (a &&
              (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).copyFields(a, i),
              t &&
                (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).copyFields(t, i));
          }),
          (r.copyFieldsFromRecord = function (r, o) {
            var t = this.$3(o);
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).copyFields(
              r,
              t,
            );
          }),
          (r.create = function (r, o) {
            (this.$1.getStatus(r) !== s && this.$2.getStatus(r) !== s) ||
              l(0, 979, r);
            var t = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).create(r, o);
            this.$2.set(r, t);
          }),
          (r.delete = function (t) {
            this.$2.delete(t);
          }),
          (r.getStatus = function (t) {
            return this.$2.has(t) ? this.$2.getStatus(t) : this.$1.getStatus(t);
          }),
          (r.getType = function (r) {
            for (var t = 0; t < this.__sources.length; t++) {
              var o = this.__sources[t].get(r);
              if (o)
                return (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getType(o);
              if (o === null) return null;
            }
          }),
          (r.getValue = function (r, o) {
            for (var t = 0; t < this.__sources.length; t++) {
              var a = this.__sources[t].get(r);
              if (a) {
                var i = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getValue(a, o);
                if (i !== void 0) return i;
              } else if (a === null) return null;
            }
          }),
          (r.setValue = function (r, o, a) {
            var t = this.$3(r);
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
              t,
              o,
              a,
            );
          }),
          (r.getErrors = function (r, o) {
            for (var t = 0; t < this.__sources.length; t++) {
              var a = this.__sources[t].get(r);
              if (a) {
                var i = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getErrors(a, o);
                if (i !== void 0) return i;
              } else if (a === null) return null;
            }
          }),
          (r.setErrors = function (r, o, a) {
            var t = this.$3(r);
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).setErrors(
              t,
              o,
              a,
            );
          }),
          (r.getLinkedRecordID = function (r, o) {
            for (var t = 0; t < this.__sources.length; t++) {
              var a = this.__sources[t].get(r);
              if (a) {
                var i = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getLinkedRecordID(a, o);
                if (i !== void 0) return i;
              } else if (a === null) return null;
            }
          }),
          (r.setLinkedRecordID = function (r, o, a) {
            var t = this.$3(r);
            (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).setLinkedRecordID(t, o, a);
          }),
          (r.getLinkedRecordIDs = function (r, o) {
            for (var t = 0; t < this.__sources.length; t++) {
              var a = this.__sources[t].get(r);
              if (a) {
                var i = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getLinkedRecordIDs(a, o);
                if (i !== void 0) return i;
              } else if (a === null) return null;
            }
          }),
          (r.setLinkedRecordIDs = function (r, o, a) {
            var t = this.$3(r);
            (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).setLinkedRecordIDs(t, o, a);
          }),
          t
        );
      })();
    a.exports = u;
  },
  null,
);
