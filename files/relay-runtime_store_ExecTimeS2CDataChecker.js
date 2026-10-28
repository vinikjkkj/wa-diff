__d(
  "relay-runtime/store/ExecTimeS2CDataChecker",
  [
    "invariant",
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/store/DataChecker",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/defaultGetDataID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      u = n("relay-runtime/store/DataChecker").DataChecker;
    function c(e, t, n) {
      var r = new d(
          e,
          t.variables,
          n == null
            ? null
            : {
                get: function (t) {
                  var e = n.get(t);
                  return (e == null ? void 0 : e.kind) === "SplitOperation"
                    ? babelHelpers.extends({}, e, {
                        selections: p(e.selections),
                      })
                    : e;
                },
                load: function (t) {
                  return n.load(t);
                },
              },
        ),
        o = t.node,
        a = r.check(
          babelHelpers.extends({}, o, { selections: p(o.selections, !1, !0) }),
          t.dataID,
        ),
        i = a.status;
      return i === "missing"
        ? { kind: "incomplete", reason: "missing" }
        : r.getWork();
    }
    var d = (function (t) {
        function r(e, r, o) {
          var a;
          return (
            (a =
              t.call(
                this,
                function () {
                  return e;
                },
                function () {
                  return n("relay-runtime/store/RelayRecordSource").create();
                },
                s,
                r,
                [],
                o,
                n("relay-runtime/store/defaultGetDataID"),
                null,
                !0,
              ) || this),
            (a.$ExecTimeS2CDataChecker1 = new Map()),
            (a.$ExecTimeS2CDataChecker2 = null),
            (a.$ExecTimeS2CDataChecker3 = e),
            a
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.getWork = function () {
            var e = this.$ExecTimeS2CDataChecker2;
            return e !== null
              ? { kind: "incomplete", reason: e }
              : {
                  executions: Array.from(
                    this.$ExecTimeS2CDataChecker1,
                    function (e) {
                      var t = e[0],
                        n = e[1],
                        r = n.selections,
                        o = n.typeName;
                      return { recordID: t, selections: r, typeName: o };
                    },
                  ),
                  kind: "complete",
                };
          }),
          (o.checkExecTimeResolver = function (r, o) {
            var t = this.$ExecTimeS2CDataChecker3.get(o);
            t != null || l(0, 187705, o);
            var a = this.$ExecTimeS2CDataChecker1.get(o);
            (a == null &&
              ((a = {
                selections: [],
                typeName: (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getType(t),
              }),
              this.$ExecTimeS2CDataChecker1.set(o, a)),
              a.selections.push(r));
          }),
          (o.onRefinementRuledOut = function () {
            this.$ExecTimeS2CDataChecker2 = "abstract_refinement";
          }),
          r
        );
      })(u),
      m = null;
    function p(e, t, n) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        m == null && (m = { belowRoot: new WeakMap(), onRoot: new WeakMap() }));
      var r = n ? m.onRoot : m.belowRoot,
        o = r.get(e);
      return (o == null && ((o = _(e, t, !1, n)), r.set(e, o)), o);
    }
    function _(e, t, n, r) {
      var o = [];
      return (
        e.forEach(function (e) {
          switch (e.kind) {
            case "ClientEdgeToClientObject":
            case "ClientEdgeToServerObject":
            case "RelayLiveResolver":
            case "RelayResolver": {
              var a,
                i =
                  e.kind === "ClientEdgeToClientObject" ||
                  e.kind === "ClientEdgeToServerObject"
                    ? e.backingField
                    : e,
                l = (a = i.resolverInfo) == null ? void 0 : a.rootFragment;
              if (l != null) {
                var s;
                (((s = l.metadata) == null ? void 0 : s.hasServerField) ===
                  !0 &&
                  o.push({
                    args: i.args,
                    fragment: babelHelpers.extends({}, l, {
                      selections: p(l.selections, !0, r),
                    }),
                    kind: "FragmentSpread",
                  }),
                  o.push(e));
              }
              break;
            }
            case "ClientExtension":
              o.push.apply(o, _(e.selections, t, !0, r));
              break;
            case "Condition":
            case "Defer":
            case "Stream": {
              var u = _(e.selections, t, n, r);
              u.length > 0 &&
                o.push(babelHelpers.extends({}, e, { selections: u }));
              break;
            }
            case "FragmentSpread": {
              var c = _(e.fragment.selections, t, n, r);
              c.length > 0 &&
                o.push(
                  babelHelpers.extends({}, e, {
                    fragment: babelHelpers.extends({}, e.fragment, {
                      selections: c,
                    }),
                  }),
                );
              break;
            }
            case "InlineFragment":
            case "LinkedField": {
              if (n) break;
              var d = _(e.selections, t, !1, r && e.kind === "InlineFragment");
              r && e.kind === "InlineFragment" && e.abstractKey == null
                ? o.push.apply(o, d)
                : (d.length > 0 || t) &&
                  o.push(babelHelpers.extends({}, e, { selections: d }));
              break;
            }
            case "ModuleImport":
              n || o.push(e);
              break;
            case "ActorChange":
            case "LinkedHandle":
            case "ScalarField":
            case "ScalarHandle":
            case "TypeDiscriminator":
              t && !n && o.push(e);
              break;
            default:
          }
        }),
        o
      );
    }
    a.exports = { check: c };
  },
  null,
);
