__d(
  "relay-runtime/mutations/createUpdatableProxy",
  ["relay-runtime/store/RelayStoreUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/store/RelayStoreUtils").getArgumentValues,
      l = ["id", "__id", "__typename", "js"];
    function s(e, t, n, r, o) {
      var a = {};
      return (u(a, e, t, n, r, o), a);
    }
    function u(t, n, r, o, a, i) {
      var s = function (s) {
        var o;
        switch (s.kind) {
          case "LinkedField":
            if (s.plural) {
              var _;
              Object.defineProperty(t, (_ = s.alias) != null ? _ : s.name, {
                get: m(s, r, n, a, i),
                set: c(s, r, n, a),
              });
            } else {
              var f;
              Object.defineProperty(t, (f = s.alias) != null ? f : s.name, {
                get: p(s, r, n, a, i),
                set: d(s, r, n, a),
              });
            }
            break;
          case "ScalarField":
            var h = (o = s.alias) != null ? o : s.name;
            Object.defineProperty(t, h, {
              get: function () {
                var t,
                  o = e((t = s.args) != null ? t : [], r),
                  l = n.getValue(s.name, o);
                return (l == null && (l = g(s, o, n, a, i)), l);
              },
              set: l.includes(s.name)
                ? void 0
                : function (t) {
                    var o,
                      a = e((o = s.args) != null ? o : [], r);
                    n.setValue__UNSAFE(t, s.name, a);
                  },
            });
            break;
          case "InlineFragment":
            n.getType() === s.type && u(t, n, r, s.selections, a, i);
            break;
          case "ClientExtension":
            u(t, n, r, s.selections, a, i);
            break;
          case "FragmentSpread":
            break;
          case "Condition":
          case "ActorChange":
          case "InlineDataFragmentSpread":
          case "AliasedInlineFragmentSpread":
          case "ClientEdgeToClientObject":
          case "ClientEdgeToServerObject":
          case "Defer":
          case "ModuleImport":
          case "RequiredField":
          case "CatchField":
          case "Stream":
          case "RelayResolver":
          case "RelayLiveResolver":
            throw new Error(
              "Encountered an unexpected ReaderSelection variant in RelayRecordSourceProxy. This indicates a bug in Relay.",
            );
          default:
            throw (
              s.kind,
              new Error(
                "Encountered an unexpected ReaderSelection variant in RelayRecordSourceProxy. This indicates a bug in Relay.",
              )
            );
        }
      };
      for (var _ of o) s(_);
    }
    function c(t, n, r, o) {
      return function (i) {
        var a,
          l = e((a = t.args) != null ? a : [], n);
        if (i == null)
          throw new Error(
            "Do not assign null to plural linked fields; assign an empty array instead.",
          );
        var s = i.map(function (e) {
          if (e == null)
            throw new Error(
              "When assigning an array of items, none of the items should be null or undefined.",
            );
          var t = e.__id;
          if (t == null)
            throw new Error(
              "The __id field must be present on each item passed to the setter. This indicates a bug in Relay.",
            );
          var n = o.get(t);
          if (n == null)
            throw new Error(
              "Did not find item with data id " + t + " in the store.",
            );
          return n;
        });
        r.setLinkedRecords(s, t.name, l);
      };
    }
    function d(t, n, r, o) {
      return function (i) {
        var a,
          l = e((a = t.args) != null ? a : [], n);
        if (i == null) r.setValue(i, t.name, l);
        else {
          var s = i.__id;
          if (s == null)
            throw new Error(
              "The __id field must be present on the argument. This indicates a bug in Relay.",
            );
          var u = o.get(s);
          if (u == null)
            throw new Error(
              "Did not find item with data id " + s + " in the store.",
            );
          r.setLinkedRecord(u, t.name, l);
        }
      };
    }
    function m(t, n, r, o, a) {
      return function () {
        var i,
          l = e((i = t.args) != null ? i : [], n),
          s = r.getLinkedRecords(t.name, l);
        return (
          s === void 0 && (s = f(t, l, r, o, a)),
          s != null
            ? s.map(function (e) {
                if (e != null) {
                  var r = {};
                  return (u(r, e, n, t.selections, o, a), r);
                } else return e;
              })
            : s
        );
      };
    }
    function p(t, n, r, o, a) {
      return function () {
        var i,
          l = e((i = t.args) != null ? i : [], n),
          s = r.getLinkedRecord(t.name, l);
        if ((s === void 0 && (s = _(t, l, r, o, a)), s != null)) {
          var c = {};
          return (u(c, s, n, t.selections, o, a), c);
        } else return s;
      };
    }
    function _(e, t, n, r, o) {
      for (var a of o)
        if (a.kind === "linked") {
          var i = a.handle(e, n, t, r);
          if (i != null) return r.get(i);
        }
    }
    function f(e, t, n, r, o) {
      for (var a of o)
        if (a.kind === "pluralLinked") {
          var i = a.handle(e, n, t, r);
          if (i != null)
            return i.map(function (e) {
              if (e != null) return r.get(e);
            });
        }
    }
    function g(e, t, n, r, o) {
      for (var a of o)
        if (a.kind === "scalar") {
          var i = a.handle(e, n, t, r);
          if (i !== void 0) return i;
        }
    }
    a.exports = { createUpdatableProxy: s };
  },
  null,
);
