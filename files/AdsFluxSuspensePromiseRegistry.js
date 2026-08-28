__d(
  "AdsFluxSuspensePromiseRegistry",
  [
    "FBLogger",
    "FluxContainerSubscriptions",
    "LoadObject",
    "Promise",
    "PromiseAnnotate",
    "clearTimeout",
    "justknobx",
    "setTimeout",
    "stableStringify",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4;
    function c() {
      var e = r("justknobx")._("4417");
      return e > 0 ? e : u;
    }
    var d = new WeakMap();
    function m(e, t) {
      try {
        return r("stableStringify")([e, t]);
      } catch (e) {
        return (
          r("FBLogger")("ads_flux_suspense_promise_registry").info(
            "getArgsKey: failed to serialize selector args (%s)",
            e instanceof Error ? e.message : String(e),
          ),
          null
        );
      }
    }
    function p(e, t) {
      var n;
      return (n = d.get(e)) == null ? void 0 : n.get(t);
    }
    function _(e, t, n) {
      var r = d.get(e);
      (r == null && ((r = new Map()), d.set(e, r)), r.set(t, n));
    }
    function f(e, t) {
      var n = d.get(e);
      n != null && (n.delete(t), n.size === 0 && d.delete(e));
    }
    function g(e) {
      return e != null && typeof e == "object" && typeof e.then == "function";
    }
    function h(e, t) {
      var n = p(e, t);
      n != null &&
        (r("clearTimeout")(n.timeoutId), n.subscriptions.reset(), f(e, t));
    }
    function y(t, a, i) {
      if (t.name == null) return null;
      var l = m(a, i);
      if (l == null) return null;
      var u = p(t, l);
      if (u != null) return u.promise;
      var d = t.name.startsWith("<CUSTOM_NAME: ")
          ? t.name.substring(14, t.name.length - 1)
          : t.name,
        f = function () {},
        y = function () {},
        C = new (s || (s = n("Promise")))(function (e, t) {
          ((f = e), (y = t));
        });
      (e || (e = o("PromiseAnnotate"))).setDisplayName(
        C,
        "AdsFluxSelector(" + d + ")",
      );
      var b = new (r("FluxContainerSubscriptions"))(
          "SuspenseRegistry(" + d + ")",
        ),
        v = t.getStores(i);
      v.length > 0 && b.setStores(v);
      var S = function () {
        var e;
        try {
          e = t(a);
        } catch (e) {
          if (g(e)) return;
          (y(e), h(t, l));
          return;
        }
        (!(e instanceof r("LoadObject")) || !e.isLoading()) && (f(), h(t, l));
      };
      b.addListener(S);
      var R = c(),
        L = r("setTimeout")(function () {
          (r("FBLogger")("am_potential_infinite_loading_states_load_object")
            .addToCategoryKey("suspense_selector_promise_timeout:" + d)
            .warn("timeout (in ms): %s", String(R)),
            f(),
            h(t, l));
        }, R);
      return (
        _(t, l, {
          promise: C,
          resolve: f,
          reject: y,
          subscriptions: b,
          timeoutId: L,
        }),
        C
      );
    }
    function C(e, t, n) {
      var r = m(t, n);
      if (r != null) {
        var o = p(e, r);
        o != null && (o.resolve(), h(e, r));
      }
    }
    ((l.getOrCreatePromise = y), (l.clearPromise = C));
  },
  98,
);
