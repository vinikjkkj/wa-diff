__d(
  "relay-runtime/store/RelayResponseNormalizer",
  [
    "invariant",
    "areEqual",
    "relay-runtime/multi-actor-environment/ActorUtils",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayErrorTrie",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/TypeID",
    "relay-runtime/util/RelayFeatureFlags",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = n(
        "relay-runtime/multi-actor-environment/ActorUtils",
      ).ACTOR_IDENTIFIER_FIELD_NAME,
      d = n(
        "relay-runtime/multi-actor-environment/ActorUtils",
      ).getActorIdentifierFromPayload,
      m = n("relay-runtime/store/ClientID").generateClientID,
      p = n("relay-runtime/store/ClientID").isClientID,
      _ = n("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      f = n("relay-runtime/store/RelayErrorTrie").buildErrorTrie,
      g = n("relay-runtime/store/RelayErrorTrie").getErrorsByKey,
      h = n("relay-runtime/store/RelayErrorTrie").getNestedErrorTrieByKey,
      y = n(
        "relay-runtime/store/RelayModernSelector",
      ).createNormalizationSelector,
      C = (u = n("relay-runtime/store/RelayStoreUtils")).ROOT_ID,
      b = u.ROOT_TYPE,
      v = u.TYPENAME_KEY,
      S = u.getArgumentValues,
      R = u.getHandleStorageKey,
      L = u.getModuleComponentKey,
      E = u.getModuleOperationKey,
      k = u.getStorageKey,
      I = n("relay-runtime/store/TypeID").TYPE_SCHEMA_TYPE,
      T = n("relay-runtime/store/TypeID").generateTypeID;
    function D(e, t, n, r, o, a) {
      var i = t.dataID,
        l = t.node,
        s = t.variables,
        u = new x(e, s, r, a != null ? a : !1);
      return u.normalizeResponse(l, i, n, o);
    }
    var x = (function () {
      function t(e, t, n, r) {
        ((this.$1 = n.actorIdentifier),
          (this.$2 = n.getDataID),
          (this.$3 = []),
          (this.$4 = n.treatMissingFieldsAsNull),
          (this.$5 = n.deferDeduplicatedFields),
          (this.$6 = []),
          (this.$7 = !1),
          (this.$8 = !1),
          (this.$13 = r),
          (this.$9 = []),
          (this.$10 = n.path ? [].concat(n.path) : []),
          (this.$11 = e),
          (this.$12 = t),
          (this.$14 = n.shouldProcessClientComponents),
          (this.$16 = n.log),
          (this.$17 = new Map()));
      }
      var r = t.prototype;
      return (
        (r.normalizeResponse = function (t, n, r, o) {
          var e = this.$11.get(n);
          return (
            e || l(0, 3565, n),
            this.$18(t),
            (this.$15 = f(o)),
            this.$19(t, e, r),
            {
              errors: o,
              fieldPayloads: this.$3,
              followupPayloads: this.$9,
              incrementalPlaceholders: this.$6,
              isFinal: !1,
              s2cExecutions:
                this.$17.size > 0
                  ? Array.from(this.$17.entries()).map(function (e) {
                      var t = e[0],
                        n = e[1];
                      return {
                        recordID: t,
                        selections: n.selections,
                        typeName: n.typeName,
                      };
                    })
                  : void 0,
              source: this.$11,
            }
          );
        }),
        (r.$18 = function (r) {
          var t = r.clientAbstractTypes;
          if (t != null)
            for (var o of Object.keys(t))
              for (var a of t[o]) {
                var i = T(a),
                  l = this.$11.get(i);
                (l == null &&
                  ((l = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).create(i, I)),
                  this.$11.set(i, l)),
                  (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).setValue(l, o, !0));
              }
        }),
        (r.$20 = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$12, t) || l(0, 3566, t),
            this.$12[t]
          );
        }),
        (r.$21 = function (t) {
          var e = t[v];
          return (e != null || l(0, 3567, JSON.stringify(t, null, 2)), e);
        }),
        (r.$19 = function (r, o, a) {
          for (var t, i, s = 0; s < r.selections.length; s++) {
            var u = r.selections[s];
            switch (u.kind) {
              case "ScalarField":
              case "LinkedField":
                this.$22(u, o, a);
                break;
              case "Condition":
                var c = !!this.$20(u.condition);
                c === u.passingValue && this.$19(u, o, a);
                break;
              case "FragmentSpread": {
                var d = this.$12;
                ((this.$12 = _(
                  this.$12,
                  u.fragment.argumentDefinitions,
                  u.args,
                )),
                  this.$19(u.fragment, o, a),
                  (this.$12 = d));
                break;
              }
              case "InlineFragment": {
                this.$23(u, o, a);
                break;
              }
              case "TypeDiscriminator": {
                var m = u.abstractKey,
                  p = Object.prototype.hasOwnProperty.call(a, m),
                  f = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getType(o),
                  g = T(f),
                  h = this.$11.get(g);
                (h == null &&
                  ((h = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).create(g, I)),
                  this.$11.set(g, h)),
                  e.setValue(h, m, p));
                break;
              }
              case "LinkedHandle":
              case "ScalarHandle":
                var y = u.args ? S(u.args, this.$12) : {},
                  C = k(u, this.$12),
                  b = R(u, this.$12);
                this.$3.push({
                  args: y,
                  dataID: (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getDataID(o),
                  fieldKey: C,
                  handle: u.handle,
                  handleArgs: u.handleArgs ? S(u.handleArgs, this.$12) : {},
                  handleKey: b,
                });
                break;
              case "ModuleImport":
                this.$24(u, o, a);
                break;
              case "Defer":
                this.$25(u, o, a);
                break;
              case "Stream":
                this.$26(u, o, a);
                break;
              case "ClientExtension":
                var v = this.$7;
                ((this.$7 = !0), this.$19(u, o, a), (this.$7 = v));
                break;
              case "ClientComponent":
                if (this.$14 === !1) break;
                this.$19(u.fragment, o, a);
                break;
              case "ActorChange":
                this.$27(u, o, a);
                break;
              case "RelayResolver":
              case "RelayLiveResolver":
                this.$13
                  ? ((t = u.resolverInfo) == null ? void 0 : t.rootFragment) !=
                      null && this.$29(u, o)
                  : this.$28(u, o, a);
                break;
              case "ClientEdgeToClientObject":
              case "ClientEdgeToServerObject":
                this.$13
                  ? ((i = u.backingField.resolverInfo) == null
                      ? void 0
                      : i.rootFragment) != null && this.$29(u, o)
                  : this.$28(u.backingField, o, a);
                break;
              default:
                l(0, 3569, u.kind);
            }
          }
        }),
        (r.$23 = function (r, o, a) {
          var t = r.abstractKey;
          if (t == null) {
            var i = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getType(o);
            (i === r.type || i === b) && this.$19(r, o, a);
          } else {
            var l = Object.prototype.hasOwnProperty.call(a, t),
              s = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getType(o),
              u = T(s),
              c = this.$11.get(u);
            (c == null &&
              ((c = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).create(u, I)),
              this.$11.set(u, c)),
              e.setValue(c, t, l),
              l && this.$19(r, o, a));
          }
        }),
        (r.$28 = function (t, n, r) {
          t.fragment != null && this.$23(t.fragment, n, r);
        }),
        (r.$29 = function (r, o) {
          var t = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getDataID(o),
            a = e.getType(o),
            i = this.$17.get(t);
          (i == null &&
            ((i = { selections: [], typeName: a }), this.$17.set(t, i)),
            i.selections.push(r));
        }),
        (r.$25 = function (r, o, a) {
          var t = r.if === null || this.$20(r.if);
          t === !1
            ? this.$19(r, o, a)
            : this.$6.push({
                actorIdentifier: this.$1,
                data: a,
                kind: "defer",
                label: r.label,
                path: [].concat(this.$10),
                selector: y(
                  r,
                  (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getDataID(o),
                  this.$12,
                ),
                typeName: e.getType(o),
              });
        }),
        (r.$26 = function (r, o, a) {
          this.$19(r, o, a);
          var t = r.if === null || this.$20(r.if);
          t === !0 &&
            this.$6.push({
              actorIdentifier: this.$1,
              kind: "stream",
              label: r.label,
              node: r,
              parentID: (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(o),
              path: [].concat(this.$10),
              variables: this.$12,
            });
        }),
        (r.$24 = function (r, o, a) {
          (typeof a == "object" && a) || l(0, 13641);
          var t = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getType(o),
            i = L(r.documentName),
            s = r.componentModuleProvider || a[i];
          e.setValue(o, i, s != null ? s : null);
          var u = E(r.documentName),
            c = r.operationModuleProvider || a[u];
          (e.setValue(o, u, c != null ? c : null),
            c != null &&
              this.$9.push({
                actorIdentifier: this.$1,
                args: r.args,
                data: a,
                dataID: (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(o),
                kind: "ModuleImportPayload",
                operationReference: c,
                path: [].concat(this.$10),
                typeName: t,
                variables: this.$12,
              }));
        }),
        (r.$22 = function (r, o, a) {
          (typeof a == "object" && a) || l(0, 3570, r.name);
          var t = r.alias || r.name,
            i = k(r, this.$12),
            s = a[t],
            u =
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS &&
              Array.isArray(s) &&
              s.length === 0;
          if (s == null || u) {
            if (s === void 0) {
              var c = this.$7 || this.$8 || this.$5;
              if (c) return;
              if (!this.$4) return;
            }
            (r.kind === "ScalarField" && this.$30(o, i, null),
              u
                ? r.kind === "LinkedField"
                  ? (
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).setLinkedRecordIDs(o, i, [])
                  : (
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).setValue(o, i, [])
                : (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).setValue(o, i, null));
            var d = this.$15;
            if (d != null) {
              var m = g(d, t);
              m != null &&
                (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).setErrors(o, i, m);
            }
            return;
          }
          if (r.kind === "ScalarField")
            (this.$30(o, i, s),
              (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
                o,
                i,
                s,
              ));
          else if (r.kind === "LinkedField") {
            this.$10.push(t);
            var p = this.$15;
            ((this.$15 = p == null ? null : h(p, t)),
              r.plural ? this.$31(r, o, i, s) : this.$32(r, o, i, s),
              (this.$15 = p),
              this.$10.pop());
          } else l(0, 11863, r.kind);
        }),
        (r.$27 = function (r, o, a) {
          var t,
            i = r.linkedField;
          (typeof a == "object" && a) || l(0, 45628, i.name);
          var s = i.alias || i.name,
            u = k(i, this.$12),
            c = a[s];
          if (c == null) {
            if (c === void 0) {
              var p = this.$7 || this.$8;
              if (p) return;
              if (!this.$4) return;
            }
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
              o,
              u,
              null,
            );
            return;
          }
          var _ = d(c);
          if (_ == null) {
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
              o,
              u,
              null,
            );
            return;
          }
          var f = (t = i.concreteType) != null ? t : this.$21(c),
            g =
              this.$2(c, f) ||
              (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getLinkedRecordID(o, u) ||
              m(
                (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(o),
                u,
              );
          (typeof g == "string" || l(0, 3572, u),
            (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).setActorLinkedRecordID(o, u, _, g),
            this.$9.push({
              actorIdentifier: _,
              data: c,
              dataID: g,
              kind: "ActorPayload",
              node: i,
              path: [].concat(this.$10, [s]),
              typeName: f,
              variables: this.$12,
            }));
        }),
        (r.$32 = function (r, o, a, i) {
          var t;
          (typeof i == "object" && i) || l(0, 3571, a);
          var s =
            this.$2(i, (t = r.concreteType) != null ? t : this.$21(i)) ||
            (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordID(o, a) ||
            m(
              (e || (e = n("relay-runtime/store/RelayModernRecord"))).getDataID(
                o,
              ),
              a,
            );
          (typeof s == "string" || l(0, 3572, a),
            this.$33(
              (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getLinkedRecordID(o, a),
              s,
              a,
            ),
            e.setLinkedRecordID(o, a, s));
          var u = this.$11.get(s);
          if (u) this.$34(u, r, i);
          else {
            var c = r.concreteType || this.$21(i);
            ((u = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).create(s, c)),
              this.$11.set(s, u));
          }
          this.$19(r, u, i);
        }),
        (r.$31 = function (r, o, a, i) {
          var t = this;
          Array.isArray(i) || l(0, 3573, a);
          var s = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordIDs(o, a),
            u = [];
          (i.forEach(function (i, c) {
            var d;
            if (i == null) {
              u.push(i);
              return;
            }
            t.$10.push(String(c));
            var p = t.$15;
            ((t.$15 = p == null ? null : h(p, c)),
              typeof i == "object" || l(0, 3574, a));
            var _ =
              t.$2(i, (d = r.concreteType) != null ? d : t.$21(i)) ||
              (s && s[c]) ||
              m(
                (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(o),
                a,
                c,
              );
            (typeof _ == "string" || l(0, 3575, a), u.push(_));
            var f = t.$11.get(_);
            if (f) t.$34(f, r, i);
            else {
              var g = r.concreteType || t.$21(i);
              ((f = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).create(_, g)),
                t.$11.set(_, f));
            }
            (s && t.$33(s[c], _, a), t.$19(r, f, i), (t.$15 = p), t.$10.pop());
          }),
            e.setLinkedRecordIDs(o, a, u));
        }),
        (r.$34 = function (r, o, a) {
          if (
            n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_STORE_ID_COLLISION_LOGGING
          ) {
            var t,
              i = (t = o.concreteType) != null ? t : this.$21(a),
              l = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(r),
              s =
                (p(l) && l !== C) ||
                (e || (e = n("relay-runtime/store/RelayModernRecord"))).getType(
                  r,
                ) === i;
            if (!s) {
              var u = {
                name: "idCollision.typename",
                new_typename: i,
                previous_typename: (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getType(r),
              };
              this.$16 != null && this.$16(u);
            }
          }
        }),
        (r.$30 = function (t, n, r) {}),
        (r.$33 = function (t, n, r) {}),
        t
      );
    })();
    a.exports = { normalize: D };
  },
  null,
);
