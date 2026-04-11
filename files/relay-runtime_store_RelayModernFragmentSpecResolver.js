__d(
  "relay-runtime/store/RelayModernFragmentSpecResolver",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/getPendingOperationsForFragment",
    "relay-runtime/util/handlePotentialSnapshotErrors",
    "relay-runtime/util/isScalarAndEqual",
    "relay-runtime/util/recycleNodesInto",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n(
        "relay-runtime/util/handlePotentialSnapshotErrors",
      ).handlePotentialSnapshotErrors,
      u = n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createRequestDescriptor,
      c = n("relay-runtime/store/RelayModernSelector").areEqualSelectors,
      d = n("relay-runtime/store/RelayModernSelector").createReaderSelector,
      m = n("relay-runtime/store/RelayModernSelector").getSelectorsFromObject,
      p = (function () {
        function e(e, t, n, r, o) {
          var a = this;
          ((this.$9 = function () {
            ((a.$8 = !0), typeof a.$1 == "function" && a.$1());
          }),
            (this.$1 = r),
            (this.$2 = e),
            (this.$4 = {}),
            (this.$5 = t),
            (this.$6 = {}),
            (this.$7 = {}),
            (this.$8 = !1),
            (this.$3 = o),
            this.setProps(n));
        }
        var t = e.prototype;
        return (
          (t.dispose = function () {
            for (var e in this.$7)
              Object.prototype.hasOwnProperty.call(this.$7, e) && g(this.$7[e]);
          }),
          (t.resolve = function () {
            if (this.$8) {
              var e = this.$4,
                t;
              for (var r in this.$7)
                if (Object.prototype.hasOwnProperty.call(this.$7, r)) {
                  var o = this.$7[r],
                    a = e[r];
                  if (o) {
                    var i = o.resolve();
                    (t || i !== a) &&
                      ((t = t || babelHelpers.extends({}, e)), (t[r] = i));
                  } else {
                    var l = this.$6[r],
                      s = l !== void 0 ? l : null;
                    (t || !n("relay-runtime/util/isScalarAndEqual")(s, a)) &&
                      ((t = t || babelHelpers.extends({}, e)), (t[r] = s));
                  }
                }
              ((this.$4 = t || e), (this.$8 = !1));
            }
            return this.$4;
          }),
          (t.setCallback = function (t, r) {
            ((this.$1 = r),
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0 &&
                this.setProps(t));
          }),
          (t.setProps = function (t) {
            this.$6 = {};
            var e = m(this.$5, t);
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = e[n],
                  o = this.$7[n];
                (r == null
                  ? (o != null && o.dispose(), (o = null))
                  : r.kind === "PluralReaderSelector"
                    ? o == null
                      ? (o = new f(
                          this.$2.environment,
                          this.$3,
                          r,
                          this.$1 != null,
                          this.$9,
                        ))
                      : (o instanceof f || l(0, 4761, n), o.setSelector(r))
                    : o == null
                      ? (o = new _(
                          this.$2.environment,
                          this.$3,
                          r,
                          this.$1 != null,
                          this.$9,
                        ))
                      : (o instanceof _ || l(0, 4762, n), o.setSelector(r)),
                  (this.$6[n] = t[n]),
                  (this.$7[n] = o));
              }
            this.$8 = !0;
          }),
          (t.setVariables = function (t, n) {
            for (var e in this.$7)
              if (Object.prototype.hasOwnProperty.call(this.$7, e)) {
                var r = this.$7[e];
                r && r.setVariables(t, n);
              }
            this.$8 = !0;
          }),
          e
        );
      })(),
      _ = (function () {
        function t(e, t, r, o, a) {
          var i = this;
          this.$9 = function (e) {
            ((i.$2 = e.data),
              (i.$4 = e.isMissingData),
              (i.$5 = e.fieldErrors),
              i.$1());
          };
          var l = e.lookup(r);
          ((this.$1 = a),
            (this.$2 = l.data),
            (this.$4 = l.isMissingData),
            (this.$5 = l.fieldErrors),
            (this.$3 = e),
            (this.$6 = t),
            (this.$7 = r),
            n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0
              ? o && (this.$8 = e.subscribe(l, this.$9))
              : (this.$8 = e.subscribe(l, this.$9)));
        }
        var r = t.prototype;
        return (
          (r.dispose = function () {
            this.$8 && (this.$8.dispose(), (this.$8 = null));
          }),
          (r.resolve = function () {
            if (this.$4 === !0) {
              var e = n("relay-runtime/util/getPendingOperationsForFragment")(
                  this.$3,
                  this.$7.node,
                  this.$7.owner,
                ),
                t = e == null ? void 0 : e.promise;
              if (t != null)
                if (this.$6)
                  n("warning")(
                    !1,
                    "Relay: Relay Container for fragment `%s` has missing data and would suspend. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.",
                    this.$7.node.name,
                  );
                else {
                  var r,
                    o =
                      (r = e == null ? void 0 : e.pendingOperations) != null
                        ? r
                        : [];
                  throw (
                    n("warning")(
                      !1,
                      "Relay: Relay Container for fragment `%s` suspended. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.",
                      this.$7.node.name,
                    ),
                    this.$3.__log({
                      name: "suspense.fragment",
                      data: this.$2,
                      fragment: this.$7.node,
                      isRelayHooks: !1,
                      isMissingData: this.$4,
                      isPromiseCached: !1,
                      pendingOperations: o,
                    }),
                    t
                  );
                }
            }
            return (s(this.$3, this.$5), this.$2);
          }),
          (r.setSelector = function (t) {
            if (!(this.$8 != null && c(t, this.$7))) {
              this.dispose();
              var e = this.$3.lookup(t);
              ((this.$2 = n("relay-runtime/util/recycleNodesInto")(
                this.$2,
                e.data,
              )),
                (this.$4 = e.isMissingData),
                (this.$5 = e.fieldErrors),
                (this.$7 = t),
                (this.$8 = this.$3.subscribe(e, this.$9)));
            }
          }),
          (r.setVariables = function (r, o) {
            if (!(e || (e = n("areEqual")))(r, this.$7.variables)) {
              var t = u(o, r),
                a = d(this.$7.node, this.$7.dataID, r, t);
              this.setSelector(a);
            }
          }),
          t
        );
      })(),
      f = (function () {
        function e(e, t, n, r, o) {
          var a = this;
          ((this.$8 = function (e) {
            ((a.$6 = !0), a.$1());
          }),
            (this.$1 = o),
            (this.$2 = []),
            (this.$3 = e),
            (this.$4 = []),
            (this.$6 = !0),
            (this.$5 = t),
            (this.$7 = r),
            this.setSelector(n));
        }
        var t = e.prototype;
        return (
          (t.dispose = function () {
            this.$4.forEach(g);
          }),
          (t.resolve = function () {
            if (this.$6) {
              for (var e = this.$2, t, n = 0; n < this.$4.length; n++) {
                var r = e[n],
                  o = this.$4[n].resolve();
                (t || o !== r) && ((t = t || e.slice(0, n)), t.push(o));
              }
              (!t &&
                this.$4.length !== e.length &&
                (t = e.slice(0, this.$4.length)),
                (this.$2 = t || e),
                (this.$6 = !1));
            }
            return this.$2;
          }),
          (t.setSelector = function (t) {
            for (var e = t.selectors; this.$4.length > e.length; ) {
              var n = this.$4.pop();
              n.dispose();
            }
            for (var r = 0; r < e.length; r++)
              r < this.$4.length
                ? this.$4[r].setSelector(e[r])
                : (this.$4[r] = new _(
                    this.$3,
                    this.$5,
                    e[r],
                    this.$7,
                    this.$8,
                  ));
            this.$6 = !0;
          }),
          (t.setVariables = function (t, n) {
            (this.$4.forEach(function (e) {
              return e.setVariables(t, n);
            }),
              (this.$6 = !0));
          }),
          e
        );
      })();
    function g(e) {
      e && e.dispose();
    }
    a.exports = p;
  },
  null,
);
