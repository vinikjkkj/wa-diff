__d(
  "relay-runtime/store/DataChecker",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordSourceMutator",
    "relay-runtime/mutations/RelayRecordSourceProxy",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/TypeID",
    "relay-runtime/store/cloneRelayHandleSourceField",
    "relay-runtime/store/cloneRelayScalarHandleSourceField",
    "relay-runtime/util/getOperation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("relay-runtime/store/ClientID").isClientID,
      u = n("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      c = n("relay-runtime/store/RelayRecordState").EXISTENT,
      d = n("relay-runtime/store/RelayRecordState").UNKNOWN,
      m = n("relay-runtime/store/TypeID").TYPE_SCHEMA_TYPE,
      p = n("relay-runtime/store/TypeID").generateTypeID,
      _ = n("relay-runtime/store/RelayStoreUtils").getModuleOperationKey,
      f = n("relay-runtime/store/RelayStoreUtils").getStorageKey,
      g = n("relay-runtime/store/RelayStoreUtils").getArgumentValues;
    function h(e, t, n, r, o, a, i, l, s) {
      l != null && l({ name: "store.datachecker.start", selector: r });
      var u = r.dataID,
        c = r.node,
        d = r.variables,
        m = new y(e, t, n, d, o, a, i, l, s),
        p = m.check(c, u);
      return (
        l != null && l({ name: "store.datachecker.end", selector: r }),
        p
      );
    }
    var y = (function () {
      function t(e, t, n, r, o, a, i, l, s) {
        ((this.$10 = e),
          (this.$11 = t),
          (this.$12 = i),
          (this.$7 = e(n)),
          (this.$13 = new Map()));
        var u = this.$15(n),
          c = u[0],
          d = u[1];
        ((this.$8 = s != null ? s : !1),
          (this.$2 = null),
          (this.$1 = o),
          (this.$3 = c),
          (this.$4 = a != null ? a : null),
          (this.$5 = d),
          (this.$6 = !1),
          (this.$9 = r),
          (this.$14 = l));
      }
      var r = t.prototype;
      return (
        (r.$15 = function (t) {
          var e = this.$13.get(t);
          if (e == null) {
            var r = this.$11(t),
              o = new (n("relay-runtime/mutations/RelayRecordSourceMutator"))(
                this.$10(t),
                r,
              ),
              a = new (n("relay-runtime/mutations/RelayRecordSourceProxy"))(
                o,
                this.$12,
                void 0,
                this.$1,
                this.$14,
              );
            ((e = [o, a]), this.$13.set(t, e));
          }
          return e;
        }),
        (r.check = function (t, n) {
          return (
            this.$16(t),
            this.$17(t, n),
            this.$6 === !0
              ? { mostRecentlyInvalidatedAt: this.$2, status: "missing" }
              : { mostRecentlyInvalidatedAt: this.$2, status: "available" }
          );
        }),
        (r.$18 = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$9, t) || l(0, 2044, t),
            this.$9[t]
          );
        }),
        (r.$19 = function () {
          this.$6 = !0;
        }),
        (r.$20 = function (t, n) {
          if (!(t.name === "id" && t.alias == null && s(n))) {
            var e = t.args != null ? g(t.args, this.$9) : {};
            for (var r of this.$1)
              if (r.kind === "scalar") {
                var o = r.handle(t, this.$5.get(n), e, this.$5);
                if (o !== void 0) return o;
              }
            (this.$14 != null &&
              this.$14({
                name: "store.datachecker.missing",
                kind: "scalar",
                dataID: n,
                fieldName: t.name,
                storageKey: f(t, this.$9),
              }),
              this.$19());
          }
        }),
        (r.$21 = function (t, n) {
          var e = t.args != null ? g(t.args, this.$9) : {};
          for (var r of this.$1)
            if (r.kind === "linked") {
              var o = r.handle(t, this.$5.get(n), e, this.$5);
              if (o !== void 0 && (o === null || this.$3.getStatus(o) === c))
                return o;
            }
          (this.$14 != null &&
            this.$14({
              name: "store.datachecker.missing",
              kind: "linked",
              dataID: n,
              fieldName: t.name,
              storageKey: f(t, this.$9),
            }),
            this.$19());
        }),
        (r.$22 = function (t, n) {
          var e = this,
            r = t.args != null ? g(t.args, this.$9) : {};
          for (var o of this.$1)
            if (o.kind === "pluralLinked") {
              var a = o.handle(t, this.$5.get(n), r, this.$5);
              if (a != null) {
                var i = a.every(function (t) {
                  return t != null && e.$3.getStatus(t) === c;
                });
                if (i) return a;
              } else if (a === null) return null;
            }
          (this.$14 != null &&
            this.$14({
              name: "store.datachecker.missing",
              kind: "pluralLinked",
              dataID: n,
              fieldName: t.name,
              storageKey: f(t, this.$9),
            }),
            this.$19());
        }),
        (r.$17 = function (r, o) {
          var t = this.$3.getStatus(o);
          if (
            (t === d &&
              (this.$14 != null &&
                this.$14({
                  name: "store.datachecker.missing",
                  kind: "unknown_record",
                  dataID: o,
                }),
              this.$19()),
            t === c)
          ) {
            var a = this.$7.get(o),
              i = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getInvalidationEpoch(a);
            (i != null &&
              (this.$2 = this.$2 != null ? Math.max(this.$2, i) : i),
              this.$23(r.selections, o));
          }
        }),
        (r.$23 = function (t, r) {
          var e = this;
          t.forEach(function (o) {
            switch (o.kind) {
              case "ScalarField":
                e.$24(o, r);
                break;
              case "LinkedField":
                o.plural ? e.$25(o, r) : e.$26(o, r);
                break;
              case "ActorChange":
                e.$27(o.linkedField, r);
                break;
              case "Condition":
                var a = !!e.$18(o.condition);
                a === o.passingValue && e.$23(o.selections, r);
                break;
              case "InlineFragment": {
                var i = o.abstractKey;
                if (i == null) {
                  var s = e.$3.getType(r);
                  s === o.type && e.$23(o.selections, r);
                } else {
                  var c = e.$3.getType(r);
                  c != null || l(0, 22686, r);
                  var d = p(c),
                    m = e.$3.getValue(d, i);
                  m === !0 ? e.$23(o.selections, r) : m == null && e.$19();
                }
                break;
              }
              case "LinkedHandle": {
                var _ = n("relay-runtime/store/cloneRelayHandleSourceField")(
                  o,
                  t,
                  e.$9,
                );
                _.plural ? e.$25(_, r) : e.$26(_, r);
                break;
              }
              case "ScalarHandle": {
                var f = n(
                  "relay-runtime/store/cloneRelayScalarHandleSourceField",
                )(o, t, e.$9);
                e.$24(f, r);
                break;
              }
              case "ModuleImport":
                e.$28(o, r);
                break;
              case "Defer":
              case "Stream":
                e.$23(o.selections, r);
                break;
              case "FragmentSpread":
                var g = e.$9;
                ((e.$9 = u(e.$9, o.fragment.argumentDefinitions, o.args)),
                  e.$23(o.fragment.selections, r),
                  (e.$9 = g));
                break;
              case "ClientExtension":
                var h = e.$6;
                (e.$23(o.selections, r), (e.$6 = h));
                break;
              case "TypeDiscriminator":
                var y = o.abstractKey,
                  C = e.$3.getType(r);
                C != null || l(0, 22686, r);
                var b = p(C),
                  v = e.$3.getValue(b, y);
                v == null && e.$19();
                break;
              case "RelayResolver":
              case "RelayLiveResolver":
                e.$8 || e.$29(o, r);
                break;
              case "ClientEdgeToClientObject":
              case "ClientEdgeToServerObject":
                e.$8 || e.$29(o.backingField, r);
                break;
              default:
                l(0, 2045, o.kind);
            }
          });
        }),
        (r.$29 = function (t, n) {
          t.fragment && this.$23([t.fragment], n);
        }),
        (r.$28 = function (t, r) {
          var e = this.$4;
          e !== null || l(0, 13642);
          var o = _(t.documentName),
            a = this.$3.getValue(r, o);
          if (a == null) {
            a === void 0 && this.$19();
            return;
          }
          var i = e.get(a);
          if (i != null) {
            var s = n("relay-runtime/util/getOperation")(i),
              c = this.$9;
            ((this.$9 = u(this.$9, s.argumentDefinitions, t.args)),
              this.$17(s, r),
              (this.$9 = c));
          } else this.$19();
        }),
        (r.$24 = function (t, n) {
          var e = f(t, this.$9),
            r = this.$3.getValue(n, e);
          r === void 0 &&
            ((r = this.$20(t, n)), r !== void 0 && this.$3.setValue(n, e, r));
        }),
        (r.$26 = function (t, n) {
          var e = f(t, this.$9),
            r = this.$3.getLinkedRecordID(n, e);
          (r === void 0 &&
            ((r = this.$21(t, n)),
            r != null
              ? this.$3.setLinkedRecordID(n, e, r)
              : r === null && this.$3.setValue(n, e, null)),
            r != null && this.$17(t, r));
        }),
        (r.$25 = function (t, n) {
          var e = this,
            r = f(t, this.$9),
            o = this.$3.getLinkedRecordIDs(n, r);
          (o === void 0 &&
            ((o = this.$22(t, n)),
            o != null
              ? this.$3.setLinkedRecordIDs(n, r, o)
              : o === null && this.$3.setValue(n, r, null)),
            o &&
              o.forEach(function (n) {
                n != null && e.$17(t, n);
              }));
        }),
        (r.$27 = function (r, o) {
          var t = f(r, this.$9),
            a = this.$7.get(o),
            i =
              a != null
                ? (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getActorLinkedRecordID(a, t)
                : a;
          if (i == null) i === void 0 && this.$19();
          else {
            var l = i[0],
              s = i[1],
              u = this.$7,
              c = this.$3,
              d = this.$5,
              m = this.$15(l),
              p = m[0],
              _ = m[1];
            ((this.$7 = this.$10(l)),
              (this.$3 = p),
              (this.$5 = _),
              this.$16(r),
              this.$17(r, s),
              (this.$7 = u),
              (this.$3 = c),
              (this.$5 = d));
          }
        }),
        (r.$16 = function (t) {
          var e = t.clientAbstractTypes;
          if (e != null)
            for (var n of Object.keys(e))
              for (var r of e[n]) {
                var o = p(r);
                (this.$7.get(o) == null && this.$3.create(o, m),
                  this.$3.getValue(o, n) == null && this.$3.setValue(o, n, !0));
              }
        }),
        t
      );
    })();
    a.exports = { check: h };
  },
  null,
);
