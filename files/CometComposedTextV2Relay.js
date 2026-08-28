__d(
  "CometComposedTextV2Relay",
  [
    "CometComposedTextV2Node",
    "FBLogger",
    "Promise",
    "RelayFBModuleLoader",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u(e, t) {
      return { cb: t, ref: e };
    }
    function c(e, t, n) {
      var r = [],
        o = null;
      return {
        childrenKeys: n,
        node: e({ children: r, parent: o }),
        parentKey: t,
        type: "element",
      };
    }
    var d = (function () {
        function t() {
          this.$1 = new Map();
        }
        var a = t.prototype;
        return (
          (a.add = function (t) {
            var e = new m(this, t);
            return (this.$1.set(t, e), e);
          }),
          (a.load = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = [],
                a = Array.from(this.$1.entries());
              for (var i of a)
                t.push(o("RelayFBModuleLoader").load(i[0].__module_component));
              var l;
              try {
                l = yield (e || (e = n("Promise"))).all(t);
              } catch (e) {
                return (
                  r("FBLogger")("comet_ai")
                    .catching(r("getErrorSafe")(e))
                    .mustfix("Failed to load Composed Text node"),
                  []
                );
              }
              return p(a, l);
            });
            function a() {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.read = function () {
            var e = [],
              t = Array.from(this.$1.entries());
            for (var n of t)
              e.push(o("RelayFBModuleLoader").read(n[0].__module_component));
            return p(t, e);
          }),
          t
        );
      })(),
      m = (function () {
        function e(e, t) {
          ((this.$1 = e), (this.$2 = t), (this.$3 = new WeakMap()));
        }
        var t = e.prototype;
        return (
          (t.withProps = function (t, n) {
            return (this.$3.set(t, n), this);
          }),
          (t.__getProps = function () {
            return this.$3;
          }),
          (t.add = function (t) {
            return this.$1.add(t);
          }),
          (t.load = function () {
            return this.$1.load();
          }),
          e
        );
      })();
    function p(e, t) {
      for (var n = [], r = [], o = 0; o < e.length; o++) {
        var a = e[o],
          i = a[1],
          l = t[o],
          s = i.__getProps(),
          u = s.has(l.ref) ? [s.get(l.ref)] : [],
          c = l.cb.apply(l, u),
          d = void 0;
        ("getState" in c ? (d = { node: c, type: "node" }) : (d = c),
          n.push(d.node),
          r.push(d));
      }
      return (
        _(r),
        n.filter(function (e) {
          return e.getState().__parent == null;
        })
      );
    }
    function _(e) {
      var t = new Map();
      for (var n of e) t.set(n.node.getState().key, n.node);
      for (var o of e)
        if (o.type === "element") {
          var a = o.node;
          for (var i of o.childrenKeys) {
            var l = t.get(i);
            l != null &&
              l instanceof r("CometComposedTextV2Node") &&
              a.append(l);
          }
        }
    }
    ((l.composedTextV2CreateRelayNodeRef = s),
      (l.composedTextV2CreateRelayNode = u),
      (l.withParentChildKeyReplacement = c),
      (l.CometComposedTextV2Relay3DLoader = d));
  },
  98,
);
