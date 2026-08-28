__d(
  "LoadObject",
  [
    "invariant",
    "LoadObjectOperation",
    "err",
    "gkx",
    "immutable",
    "justknobx",
    "nullthrows",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("gkx")("5498"),
      u = [void 0, null, !1, !0, 0, ""],
      c = function (t, n) {
        return Object.is(t, n) || r("immutable").is(t, n);
      },
      d = "SECRET_" + Math.random(),
      m = new Map(
        new Map(
          u.map(function (e) {
            return [
              e,
              new Map([
                [!0, new Map()],
                [!1, new Map()],
              ]),
            ];
          }),
        ),
      ),
      p = r("immutable").Record({
        operation: void 0,
        value: void 0,
        error: void 0,
        internalHasValue: !1,
        metadata: void 0,
      }),
      _ = (function (t) {
        function n(e, n, r, o, a, i) {
          return (
            e === d || s(0, 2084),
            t.call(this, {
              operation: n,
              value: r,
              error: o,
              internalHasValue: a,
              metadata: i,
            }) || this
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.$LoadObject$p_1 = function (r, o, a, i, l) {
            var t = n.$LoadObject$p_2(r, o, a, i, l);
            return t || new n(d, r, o, a, i, e ? l : void 0);
          }),
          (n.$LoadObject$p_2 = function (o, a, i, l, s) {
            if (i !== void 0 || !m.has(a)) return null;
            var t = r("nullthrows")(m.get(a)),
              u = r("nullthrows")(t.get(l)),
              c = o === r("LoadObjectOperation").LOADING && e && s != null;
            if (c) return null;
            if (!u.has(o)) {
              var p = new n(d, o, a, i, l, e ? s : void 0);
              u.set(o, p);
            }
            return r("nullthrows")(u.get(o));
          }));
        var o = n.prototype;
        return (
          (o.getOperation = function () {
            return this.get("operation");
          }),
          (o.getValue = function () {
            return this.get("value");
          }),
          (o.getMetadata = function () {
            return this.get("metadata");
          }),
          (o.getValueEnforcing = function () {
            var e = this.getError(),
              t = this.getOperation();
            e == null
              ? this.hasValue() || s(0, 86799, t)
              : this.hasValue() || s(0, 86800, t, e.message);
            var n = this.getValue();
            return n;
          }),
          (o.getError = function () {
            return this.get("error");
          }),
          (o.getErrorEnforcing = function () {
            return (this.hasError() || s(0, 2086), this.get("error"));
          }),
          (o.getCreatorModuleID = function () {
            var e;
            return (e = this.getMetadata()) == null
              ? void 0
              : e.creatorModuleID;
          }),
          (o.hasValue = function () {
            return !!this.get("internalHasValue");
          }),
          (o.hasOperation = function () {
            return this.getOperation() !== void 0;
          }),
          (o.hasError = function () {
            return this.getError() !== void 0;
          }),
          (o.isEmpty = function () {
            return !this.hasValue() && !this.hasOperation() && !this.hasError();
          }),
          (o.setOperation = function (t) {
            var e = n.$LoadObject$p_2(
              t,
              this.getValue(),
              this.getError(),
              this.hasValue(),
              this.getMetadata(),
            );
            return e || this.set("operation", t);
          }),
          (o.setValue = function (t) {
            var e = n.$LoadObject$p_2(
              this.getOperation(),
              t,
              this.getError(),
              !0,
              this.getMetadata(),
            );
            return e || this.set("value", t).set("internalHasValue", !0);
          }),
          (o.setError = function (t) {
            var e = n.$LoadObject$p_2(
              this.getOperation(),
              this.getValue(),
              t,
              this.hasValue(),
              this.getMetadata(),
            );
            return e || this.set("error", t);
          }),
          (o.removeOperation = function () {
            var e = this.remove("operation"),
              t = n.$LoadObject$p_2(
                e.getOperation(),
                e.getValue(),
                e.getError(),
                e.hasValue(),
                e.getMetadata(),
              );
            return t || e;
          }),
          (o.removeValue = function () {
            var e = this.remove("value").remove("internalHasValue"),
              t = n.$LoadObject$p_2(
                e.getOperation(),
                e.getValue(),
                e.getError(),
                e.hasValue(),
                e.getMetadata(),
              );
            return t || e;
          }),
          (o.removeError = function () {
            var e = this.remove("error"),
              t = n.$LoadObject$p_2(
                e.getOperation(),
                e.getValue(),
                e.getError(),
                e.hasValue(),
                e.getMetadata(),
              );
            return t || e;
          }),
          (o.isCreating = function () {
            return this.getOperation() === r("LoadObjectOperation").CREATING;
          }),
          (o.isDeleting = function () {
            return this.getOperation() === r("LoadObjectOperation").DELETING;
          }),
          (o.isDone = function () {
            return !this.hasOperation();
          }),
          (o.hasValueWithoutError = function () {
            return this.isDone() && this.hasValue() && !this.hasError();
          }),
          (o.isLoading = function () {
            return this.getOperation() === r("LoadObjectOperation").LOADING;
          }),
          (o.isLoadingOrEmpty = function () {
            return this.isLoading() || this.isEmpty();
          }),
          (o.isUpdating = function () {
            return this.getOperation() === r("LoadObjectOperation").UPDATING;
          }),
          (o.creating = function () {
            return this.setOperation(r("LoadObjectOperation").CREATING);
          }),
          (o.deleting = function () {
            return this.setOperation(r("LoadObjectOperation").DELETING);
          }),
          (o.done = function () {
            return this.removeOperation();
          }),
          (o.loading = function () {
            return this.setOperation(r("LoadObjectOperation").LOADING);
          }),
          (o.updating = function () {
            return this.setOperation(r("LoadObjectOperation").UPDATING);
          }),
          (o.map = function (t) {
            if (!this.hasValue()) return this;
            var e = this.getValueEnforcing(),
              r = t(e);
            return r instanceof n ? r : this.setValue(r);
          }),
          (o.mapValue = function (t) {
            if (!this.hasValue()) return this;
            var e = this.getValueEnforcing(),
              r = t(e);
            return r instanceof n
              ? (!r.hasError() &&
                  this.hasError() &&
                  (r = r.setError(this.getErrorEnforcing())),
                !r.hasOperation() &&
                  this.hasOperation() &&
                  (r = r.setOperation(this.getOperation())),
                r)
              : this.setValue(r);
          }),
          (o.mapError = function (t) {
            if (!this.hasError()) return this;
            var e = this.getErrorEnforcing(),
              r = t(e);
            return r instanceof n ? r : this.setError(r);
          }),
          (o.match = function (t, o) {
            if (this.hasOperation()) {
              var e = t.loading;
              this.isCreating() && t.creating
                ? (e = t.creating)
                : this.isUpdating() && t.updating
                  ? (e = t.updating)
                  : this.isDeleting() && t.deleting && (e = t.deleting);
              var a = e(this.value, this.error, o);
              return this.isLoading() &&
                a instanceof n &&
                r("justknobx")._("1393")
                ? this
                : a;
            }
            return this.hasError()
              ? this.hasValue() && t.loadedWithError
                ? r("nullthrows")(t.loadedWithError)(
                    this.getValueEnforcing(),
                    this.getErrorEnforcing(),
                    o,
                  )
                : t.error(this.getErrorEnforcing(), o)
              : this.hasValue()
                ? t.loaded(this.getValueEnforcing(), o)
                : t.empty
                  ? t.empty(o)
                  : t.error(r("err")("No value"), o);
          }),
          (o.equals = function (t, r) {
            return n.equals(this, t, r);
          }),
          (o.shallowEquals = function (t) {
            return n.equals(this, t, r("shallowEqual"));
          }),
          (n.equals = function (t, n, o) {
            var e = t === n;
            if (!t || !n || e) return e;
            if (
              t.getOperation() !== n.getOperation() ||
              t.hasError() !== n.hasError() ||
              t.hasValue() !== n.hasValue()
            )
              return !1;
            if (t.hasError() && n.hasError() && t.getError() === n.getError())
              return !0;
            var a = t.getValue(),
              i = n.getValue();
            if (!a || !i) return a === i;
            var l = o != null ? o : c;
            return l(r("nullthrows")(a), r("nullthrows")(i));
          }),
          (n.shallowEquals = function (t, o) {
            return n.equals(t, o, r("shallowEqual"));
          }),
          (n.creating = function (t) {
            return n.$LoadObject$p_1(
              r("LoadObjectOperation").CREATING,
              void 0,
              void 0,
              !1,
              t,
            );
          }),
          (n.deleting = function (t) {
            return n.$LoadObject$p_1(
              r("LoadObjectOperation").DELETING,
              void 0,
              void 0,
              !1,
              t,
            );
          }),
          (n.empty = function (t) {
            return n.$LoadObject$p_1(void 0, void 0, void 0, !1, t);
          }),
          (n.loading = function (t) {
            return n.$LoadObject$p_1(
              r("LoadObjectOperation").LOADING,
              void 0,
              void 0,
              !1,
              t,
            );
          }),
          (n.updating = function (t) {
            return n.$LoadObject$p_1(
              r("LoadObjectOperation").UPDATING,
              void 0,
              void 0,
              !1,
              t,
            );
          }),
          (n.withError = function (t, r) {
            return n.$LoadObject$p_1(void 0, void 0, t, !1, r);
          }),
          (n.withValue = function (t, r) {
            return n.$LoadObject$p_1(void 0, t, void 0, !0, r);
          }),
          n
        );
      })(p);
    l.default = _;
  },
  98,
);
