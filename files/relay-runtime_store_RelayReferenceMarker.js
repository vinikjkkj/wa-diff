__d(
  "relay-runtime/store/RelayReferenceMarker",
  [
    "invariant",
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
      s = n("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      u = n("relay-runtime/store/TypeID").generateTypeID,
      c = n(
        "relay-runtime/store/RelayStoreUtils",
      ).getReadTimeResolverStorageKey,
      d = n("relay-runtime/store/RelayStoreUtils").getStorageKey,
      m = n("relay-runtime/store/RelayStoreUtils").getModuleOperationKey;
    function p(e, t, n, r, o, a) {
      var i = t.dataID,
        l = t.node,
        s = t.variables,
        u = new _(e, s, n, r, o, a);
      u.mark(l, i);
    }
    var _ = (function () {
      function t(e, t, n, r, o, a) {
        ((this.$1 = r != null ? r : null),
          (this.$2 = null),
          (this.$6 = a != null ? a : !1),
          (this.$3 = e),
          (this.$4 = n),
          (this.$5 = t),
          (this.$7 = o));
      }
      var r = t.prototype;
      return (
        (r.mark = function (t, n) {
          ((t.kind === "Operation" || t.kind === "SplitOperation") &&
            (this.$2 = t.name),
            this.$8(t, n));
        }),
        (r.$8 = function (t, n) {
          this.$4.add(n);
          var e = this.$3.get(n);
          e != null && this.$9(t.selections, e);
        }),
        (r.$10 = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$5, t) || l(0, 5170, t),
            this.$5[t]
          );
        }),
        (r.$9 = function (r, o) {
          var t = this;
          r.forEach(function (a) {
            switch (a.kind) {
              case "ActorChange":
                t.$11(a.linkedField, o);
                break;
              case "LinkedField":
                a.plural ? t.$12(a, o) : t.$11(a, o);
                break;
              case "Condition":
                var i = !!t.$10(a.condition);
                i === a.passingValue && t.$9(a.selections, o);
                break;
              case "InlineFragment":
                if (a.abstractKey == null) {
                  var c = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getType(o);
                  ((c != null && c === a.type) ||
                    c === n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE) &&
                    t.$9(a.selections, o);
                } else {
                  var d = (
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).getType(o),
                    m = u(d);
                  (t.$4.add(m), t.$9(a.selections, o));
                }
                break;
              case "FragmentSpread":
                var p = t.$5;
                ((t.$5 = s(t.$5, a.fragment.argumentDefinitions, a.args)),
                  t.$9(a.fragment.selections, o),
                  (t.$5 = p));
                break;
              case "LinkedHandle":
                var _ = n("relay-runtime/store/cloneRelayHandleSourceField")(
                  a,
                  r,
                  t.$5,
                );
                _.plural ? t.$12(_, o) : t.$11(_, o);
                break;
              case "Defer":
              case "Stream":
                t.$9(a.selections, o);
                break;
              case "ScalarField":
              case "ScalarHandle":
                break;
              case "TypeDiscriminator": {
                var f = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getType(o),
                  g = u(f);
                t.$4.add(g);
                break;
              }
              case "ModuleImport":
                t.$13(a, o);
                break;
              case "ClientExtension":
                t.$9(a.selections, o);
                break;
              case "ClientComponent":
                if (t.$7 === !1) break;
                t.$9(a.fragment.selections, o);
                break;
              case "RelayResolver":
              case "RelayLiveResolver":
                t.$14(a, o);
                break;
              case "ClientEdgeToClientObject":
                t.$15(a, o);
                break;
              default:
                l(0, 5172, a);
            }
          });
        }),
        (r.$15 = function (r, o) {
          if (this.$6) {
            this.$11(r.linkedField, o);
            return;
          }
          var t = this.$14(r.backingField, o);
          if (t != null) {
            var a = this.$3.get(t);
            if (a != null) {
              var i = r.linkedField;
              if (r.backingField.isOutputType) {
                var l = n(
                  "relay-runtime/store/live-resolvers/getOutputTypeRecordIDs",
                )(a);
                if (l != null) for (var s of l) (this.$4.add(s), this.$8(i, s));
              } else {
                var u = i.concreteType;
                if (u == null) return;
                if (i.plural) {
                  var c = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getResolverLinkedRecordIDs(a, u);
                  if (c != null) for (var d of c) d != null && this.$8(i, d);
                } else {
                  var m = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getResolverLinkedRecordID(a, u);
                  m != null && this.$8(i, m);
                }
              }
            }
          }
        }),
        (r.$14 = function (r, o) {
          if (!this.$6) {
            var t = c(r, this.$5),
              a = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getLinkedRecordID(o, t);
            a != null && this.$4.add(a);
            var i = r.fragment;
            return (i != null && this.$9([i], o), a);
          }
        }),
        (r.$13 = function (r, o) {
          var t,
            a = this.$1;
          a !== null ||
            l(
              0,
              23904,
              r.fragmentName,
              (t = this.$2) != null ? t : "(unknown)",
            );
          var i = m(r.documentName),
            u = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getValue(o, i);
          if (u != null) {
            var c = a.get(u);
            if (c != null) {
              var d = n("relay-runtime/util/getOperation")(c),
                p = this.$5;
              ((this.$5 = s(this.$5, d.argumentDefinitions, r.args)),
                this.$9(d.selections, o),
                (this.$5 = p));
            }
          }
        }),
        (r.$11 = function (r, o) {
          var t = d(r, this.$5),
            a = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordID(o, t);
          a != null && this.$8(r, a);
        }),
        (r.$12 = function (r, o) {
          var t = this,
            a = d(r, this.$5),
            i = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordIDs(o, a);
          i != null &&
            i.forEach(function (e) {
              e != null && t.$8(r, e);
            });
        }),
        t
      );
    })();
    a.exports = { mark: p };
  },
  null,
);
