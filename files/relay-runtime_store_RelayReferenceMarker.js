__d(
  "relay-runtime/store/RelayReferenceMarker",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/TypeID",
    "relay-runtime/store/cloneRelayHandleSourceField",
    "relay-runtime/store/live-resolvers/getOutputTypeRecordIDs",
    "relay-runtime/util/getOperation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = n("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      d = n("relay-runtime/store/TypeID").generateTypeID,
      m = "__connection_next_edge_index",
      p = (u = n("relay-runtime/store/RelayStoreUtils")).getHandleStorageKey,
      _ = u.getModuleComponentKey,
      f = u.getModuleOperationKey,
      g = u.getReadTimeResolverStorageKey,
      h = u.getStorageKey;
    function y(e, t, n, r, o, a) {
      var i = t.dataID,
        l = t.node,
        s = t.variables,
        u = new C(e, s, n, r, o, a);
      u.mark(l, i);
    }
    var C = (function () {
      function t(e, t, n, r, o, a) {
        ((this.$7 = a == null ? void 0 : a.target),
          (this.$8 = a == null ? void 0 : a.shouldTraverse),
          (this.$9 = a == null ? void 0 : a.firstPluralLinkIndex),
          this.$7 == null || o !== !0 || l(0, 191226),
          (this.$1 = r != null ? r : null),
          (this.$2 = null),
          (this.$6 = o != null ? o : !1),
          (this.$3 = e),
          (this.$4 = n),
          (this.$5 = t));
      }
      var r = t.prototype;
      return (
        (r.mark = function (t, n) {
          if (
            ((t.kind === "Operation" || t.kind === "SplitOperation") &&
              (this.$2 = t.name),
            t.kind === "Operation")
          ) {
            var e = t.clientAbstractTypes;
            if (e != null)
              for (var r of Object.keys(e)) {
                var o = e[r];
                if (o != null) for (var a of o) this.$4.add(d(a));
              }
          }
          this.$10(t, n);
        }),
        (r.$10 = function (t, n, r) {
          if (
            (r === void 0 && (r = !1),
            !(this.$8 != null && !this.$8(t, n, this.$5)))
          ) {
            this.$4.add(n);
            var e = this.$3.get(n);
            e != null &&
              (this.$7 != null && (this.$11(e, null), r && this.$11(e, m)),
              this.$12(t.selections, e));
          }
        }),
        (r.$11 = function (r, o) {
          var t = this.$7;
          if (t != null) {
            var a = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(r),
              i = t.get(a);
            (i == null &&
              ((i = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).create(a, e.getType(r))),
              t.set(a, i)),
              o != null &&
                (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).copyField(r, i, o));
          }
        }),
        (r.$13 = function (r, o, a) {
          var t,
            i = o.find(function (e) {
              return (
                e.kind === "LinkedHandle" &&
                e.handle === "connection" &&
                e.name === r.name &&
                e.alias === r.alias &&
                (s || (s = n("areEqual")))(e.args, r.args)
              );
            });
          if ((i == null ? void 0 : i.kind) !== "LinkedHandle") return !1;
          this.$11(a, null);
          var l =
            (t = this.$7) == null
              ? void 0
              : t.get(
                  (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getDataID(a),
                );
          if (l == null) return !0;
          var u = h(r, this.$5),
            c = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordID(a, p(i, this.$5));
          return (
            c != null
              ? (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).setLinkedRecordID(l, u, c)
              : c === null &&
                  (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getLinkedRecordID(a, u) === null
                ? (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).copyField(a, l, u)
                : c === null
                  ? ((
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).setValue(l, u, null),
                    e.setErrors(l, u))
                  : (
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).hasValue(l, u) &&
                    ((
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).setValue(l, u, void 0),
                    e.setErrors(l, u)),
            !0
          );
        }),
        (r.$14 = function (r, o) {
          var t = this.$3.get(
            d(
              (e || (e = n("relay-runtime/store/RelayModernRecord"))).getType(
                r,
              ),
            ),
          );
          return t == null ? !1 : (this.$11(t, o), e.getValue(t, o) === !0);
        }),
        (r.$15 = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$5, t) || l(0, 5170, t),
            this.$5[t]
          );
        }),
        (r.$12 = function (r, o) {
          var t = this;
          r.forEach(function (a) {
            switch (a.kind) {
              case "ActorChange":
                t.$16(a.linkedField, o);
                break;
              case "LinkedField":
                if (t.$7 != null && t.$13(a, r, o)) break;
                a.plural ? t.$17(a, o) : t.$16(a, o);
                break;
              case "Condition":
                var i = !!t.$15(a.condition);
                i === a.passingValue && t.$12(a.selections, o);
                break;
              case "InlineFragment":
                var s = a.abstractKey;
                if (s == null) {
                  var u = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getType(o);
                  ((u != null && u === a.type) ||
                    u === n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE) &&
                    t.$12(a.selections, o);
                } else {
                  var m = (
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).getType(o),
                    _ = d(m);
                  (t.$4.add(_),
                    (t.$7 == null || t.$14(o, s)) && t.$12(a.selections, o));
                }
                break;
              case "FragmentSpread":
                var f = t.$5;
                ((t.$5 = c(t.$5, a.fragment.argumentDefinitions, a.args)),
                  t.$12(a.fragment.selections, o),
                  (t.$5 = f));
                break;
              case "LinkedHandle":
                var g = n("relay-runtime/store/cloneRelayHandleSourceField")(
                    a,
                    r,
                    t.$5,
                  ),
                  y = t.$7 != null && a.handle === "connection";
                g.plural ? t.$17(g, o, y) : t.$16(g, o, y);
                break;
              case "Defer":
              case "Stream":
                t.$12(a.selections, o);
                break;
              case "ScalarField":
                t.$7 != null && t.$11(o, h(a, t.$5));
                break;
              case "ScalarHandle":
                t.$7 != null && t.$11(o, p(a, t.$5));
                break;
              case "TypeDiscriminator": {
                var C = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getType(o),
                  b = d(C);
                (t.$4.add(b), t.$7 != null && t.$14(o, a.abstractKey));
                break;
              }
              case "ModuleImport":
                t.$18(a, o);
                break;
              case "ClientExtension":
                t.$12(a.selections, o);
                break;
              case "RelayResolver":
              case "RelayLiveResolver":
                t.$19(a, o);
                break;
              case "ClientEdgeToClientObject":
              case "ClientEdgeToServerObject":
                t.$20(a, o);
                break;
              default:
                l(0, 5172, a);
            }
          });
        }),
        (r.$20 = function (r, o) {
          var t = r.linkedField;
          if (this.$6) {
            t.plural ? this.$17(t, o) : this.$16(t, o);
            return;
          }
          var a = this.$19(r.backingField, o);
          if (a != null) {
            var i = this.$3.get(a);
            if (i != null)
              if (r.backingField.isOutputType) {
                var l = n(
                  "relay-runtime/store/live-resolvers/getOutputTypeRecordIDs",
                )(i);
                if (l != null)
                  for (var s of l) (this.$4.add(s), this.$10(t, s));
              } else {
                var u = t.concreteType;
                if (u == null) return;
                if (t.plural) {
                  var c = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getResolverLinkedRecordIDs(i, u);
                  if (c != null) for (var d of c) d != null && this.$10(t, d);
                } else {
                  var m = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getResolverLinkedRecordID(i, u);
                  m != null && this.$10(t, m);
                }
              }
          }
        }),
        (r.$19 = function (r, o) {
          if (!this.$6) {
            var t = g(r, this.$5),
              a = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getLinkedRecordID(o, t);
            a != null && this.$4.add(a);
            var i = r.fragment;
            return (i != null && this.$12([i], o), a);
          }
        }),
        (r.$18 = function (r, o) {
          var t,
            a = this.$1;
          a !== null ||
            l(
              0,
              23904,
              r.fragmentName,
              (t = this.$2) != null ? t : "(unknown)",
            );
          var i = f(r.documentName);
          this.$7 != null && (this.$11(o, _(r.documentName)), this.$11(o, i));
          var s = (
            e || (e = n("relay-runtime/store/RelayModernRecord"))
          ).getValue(o, i);
          if (s != null) {
            var u = a.get(s);
            if (u != null) {
              var d = n("relay-runtime/util/getOperation")(u),
                m = this.$5;
              ((this.$5 = c(this.$5, d.argumentDefinitions, r.args)),
                this.$12(d.selections, o),
                (this.$5 = m));
            }
          }
        }),
        (r.$16 = function (r, o, a) {
          a === void 0 && (a = !1);
          var t = h(r, this.$5);
          this.$7 != null && this.$11(o, t);
          var i = (
            e || (e = n("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordID(o, t);
          i != null && this.$10(r, i, a);
        }),
        (r.$17 = function (r, o, a) {
          a === void 0 && (a = !1);
          var t = h(r, this.$5);
          this.$7 != null && this.$11(o, t);
          var i = (
            e || (e = n("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordIDs(o, t);
          if (i != null)
            for (
              var l = this.$9 != null ? this.$9(o, t, i) : 0, s = l;
              s < i.length;
              s++
            ) {
              var u = i[s];
              u != null && this.$10(r, u, a);
            }
        }),
        t
      );
    })();
    a.exports = { mark: y };
  },
  null,
);
