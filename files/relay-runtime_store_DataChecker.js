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
    function h(e, t, n, r, o, a, i, l, s, u) {
      s != null && s({ name: "store.datachecker.start", selector: r });
      var c = r.dataID,
        d = r.node,
        m = r.variables,
        p = new y(e, t, n, m, o, a, i, l, s, u),
        _ = p.check(d, c);
      return (
        s != null && s({ name: "store.datachecker.end", selector: r }),
        _
      );
    }
    var y = (function () {
      function t(e, t, n, r, o, a, i, l, s, u) {
        ((this.$11 = e),
          (this.$12 = t),
          (this.$13 = i),
          (this.$7 = e(n)),
          (this.$14 = new Map()));
        var c = this.$16(n),
          d = c[0],
          m = c[1];
        ((this.$8 = u != null ? u : !1),
          (this.$2 = null),
          (this.$1 = o),
          (this.$3 = d),
          (this.$4 = a != null ? a : null),
          (this.$5 = m),
          (this.$6 = !1),
          (this.$9 = r),
          (this.$10 = l),
          (this.$15 = s));
      }
      var r = t.prototype;
      return (
        (r.$16 = function (t) {
          var e = this.$14.get(t);
          if (e == null) {
            var r = this.$12(t),
              o = new (n("relay-runtime/mutations/RelayRecordSourceMutator"))(
                this.$11(t),
                r,
              ),
              a = new (n("relay-runtime/mutations/RelayRecordSourceProxy"))(
                o,
                this.$13,
                void 0,
                this.$1,
                this.$15,
              );
            ((e = [o, a]), this.$14.set(t, e));
          }
          return e;
        }),
        (r.check = function (t, n) {
          return (
            this.$17(t),
            this.$18(t, n),
            this.$6 === !0
              ? { mostRecentlyInvalidatedAt: this.$2, status: "missing" }
              : { mostRecentlyInvalidatedAt: this.$2, status: "available" }
          );
        }),
        (r.$19 = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$9, t) || l(0, 2044, t),
            this.$9[t]
          );
        }),
        (r.$20 = function () {
          this.$6 = !0;
        }),
        (r.$21 = function (t, n) {
          if (!(t.name === "id" && t.alias == null && s(n))) {
            var e = t.args != null ? g(t.args, this.$9) : {};
            for (var r of this.$1)
              if (r.kind === "scalar") {
                var o = r.handle(t, this.$5.get(n), e, this.$5);
                if (o !== void 0) return o;
              }
            (this.$15 != null &&
              this.$15({
                name: "store.datachecker.missing",
                kind: "scalar",
                dataID: n,
                fieldName: t.name,
                storageKey: f(t, this.$9),
              }),
              this.$20());
          }
        }),
        (r.$22 = function (t, n) {
          var e = t.args != null ? g(t.args, this.$9) : {};
          for (var r of this.$1)
            if (r.kind === "linked") {
              var o = r.handle(t, this.$5.get(n), e, this.$5);
              if (o !== void 0 && (o === null || this.$3.getStatus(o) === c))
                return o;
            }
          (this.$15 != null &&
            this.$15({
              name: "store.datachecker.missing",
              kind: "linked",
              dataID: n,
              fieldName: t.name,
              storageKey: f(t, this.$9),
            }),
            this.$20());
        }),
        (r.$23 = function (t, n) {
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
          (this.$15 != null &&
            this.$15({
              name: "store.datachecker.missing",
              kind: "pluralLinked",
              dataID: n,
              fieldName: t.name,
              storageKey: f(t, this.$9),
            }),
            this.$20());
        }),
        (r.$18 = function (r, o) {
          var t = this.$3.getStatus(o);
          if (
            (t === d &&
              (this.$15 != null &&
                this.$15({
                  name: "store.datachecker.missing",
                  kind: "unknown_record",
                  dataID: o,
                }),
              this.$20()),
            t === c)
          ) {
            var a = this.$7.get(o),
              i = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getInvalidationEpoch(a);
            (i != null &&
              (this.$2 = this.$2 != null ? Math.max(this.$2, i) : i),
              this.$24(r.selections, o));
          }
        }),
        (r.$24 = function (t, r) {
          var e = this;
          t.forEach(function (o) {
            switch (o.kind) {
              case "ScalarField":
                e.$25(o, r);
                break;
              case "LinkedField":
                o.plural ? e.$26(o, r) : e.$27(o, r);
                break;
              case "ActorChange":
                e.$28(o.linkedField, r);
                break;
              case "Condition":
                var a = !!e.$19(o.condition);
                a === o.passingValue && e.$24(o.selections, r);
                break;
              case "InlineFragment": {
                var i = o.abstractKey;
                if (i == null) {
                  var s = e.$3.getType(r);
                  s === o.type && e.$24(o.selections, r);
                } else {
                  var c = e.$3.getType(r);
                  c != null || l(0, 22686, r);
                  var d = p(c),
                    m = e.$3.getValue(d, i);
                  m === !0 ? e.$24(o.selections, r) : m == null && e.$20();
                }
                break;
              }
              case "LinkedHandle": {
                var _ = n("relay-runtime/store/cloneRelayHandleSourceField")(
                  o,
                  t,
                  e.$9,
                );
                _.plural ? e.$26(_, r) : e.$27(_, r);
                break;
              }
              case "ScalarHandle": {
                var f = n(
                  "relay-runtime/store/cloneRelayScalarHandleSourceField",
                )(o, t, e.$9);
                e.$25(f, r);
                break;
              }
              case "ModuleImport":
                e.$29(o, r);
                break;
              case "Defer":
              case "Stream":
                e.$24(o.selections, r);
                break;
              case "FragmentSpread":
                var g = e.$9;
                ((e.$9 = u(e.$9, o.fragment.argumentDefinitions, o.args)),
                  e.$24(o.fragment.selections, r),
                  (e.$9 = g));
                break;
              case "ClientExtension":
                var h = e.$6;
                (e.$24(o.selections, r), (e.$6 = h));
                break;
              case "TypeDiscriminator":
                var y = o.abstractKey,
                  C = e.$3.getType(r);
                C != null || l(0, 22686, r);
                var b = p(C),
                  v = e.$3.getValue(b, y);
                v == null && e.$20();
                break;
              case "ClientComponent":
                if (e.$10 === !1) break;
                e.$24(o.fragment.selections, r);
                break;
              case "RelayResolver":
              case "RelayLiveResolver":
                e.$8 || e.$30(o, r);
                break;
              case "ClientEdgeToClientObject":
                e.$8 || e.$30(o.backingField, r);
                break;
              default:
                l(0, 2045, o.kind);
            }
          });
        }),
        (r.$30 = function (t, n) {
          t.fragment && this.$24([t.fragment], n);
        }),
        (r.$29 = function (t, r) {
          var e = this.$4;
          e !== null || l(0, 13642);
          var o = _(t.documentName),
            a = this.$3.getValue(r, o);
          if (a == null) {
            a === void 0 && this.$20();
            return;
          }
          var i = e.get(a);
          if (i != null) {
            var s = n("relay-runtime/util/getOperation")(i),
              c = this.$9;
            ((this.$9 = u(this.$9, s.argumentDefinitions, t.args)),
              this.$18(s, r),
              (this.$9 = c));
          } else this.$20();
        }),
        (r.$25 = function (t, n) {
          var e = f(t, this.$9),
            r = this.$3.getValue(n, e);
          r === void 0 &&
            ((r = this.$21(t, n)), r !== void 0 && this.$3.setValue(n, e, r));
        }),
        (r.$27 = function (t, n) {
          var e = f(t, this.$9),
            r = this.$3.getLinkedRecordID(n, e);
          (r === void 0 &&
            ((r = this.$22(t, n)),
            r != null
              ? this.$3.setLinkedRecordID(n, e, r)
              : r === null && this.$3.setValue(n, e, null)),
            r != null && this.$18(t, r));
        }),
        (r.$26 = function (t, n) {
          var e = this,
            r = f(t, this.$9),
            o = this.$3.getLinkedRecordIDs(n, r);
          (o === void 0 &&
            ((o = this.$23(t, n)),
            o != null
              ? this.$3.setLinkedRecordIDs(n, r, o)
              : o === null && this.$3.setValue(n, r, null)),
            o &&
              o.forEach(function (n) {
                n != null && e.$18(t, n);
              }));
        }),
        (r.$28 = function (r, o) {
          var t = f(r, this.$9),
            a = this.$7.get(o),
            i =
              a != null
                ? (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getActorLinkedRecordID(a, t)
                : a;
          if (i == null) i === void 0 && this.$20();
          else {
            var l = i[0],
              s = i[1],
              u = this.$7,
              c = this.$3,
              d = this.$5,
              m = this.$16(l),
              p = m[0],
              _ = m[1];
            ((this.$7 = this.$11(l)),
              (this.$3 = p),
              (this.$5 = _),
              this.$17(r),
              this.$18(r, s),
              (this.$7 = u),
              (this.$3 = c),
              (this.$5 = d));
          }
        }),
        (r.$17 = function (t) {
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
