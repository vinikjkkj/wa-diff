__d(
  "MAIBATriggerSendCreationBusyStore",
  ["MAIBAReactiveMap", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new (r("MAIBAReactiveMap"))();
    function c() {
      var e,
        t = new URLSearchParams(window.location.search);
      return JSON.stringify([
        window.location.pathname,
        t.get("business_id"),
        (e = t.get("asset_id")) != null ? e : t.get("waba_id"),
      ]);
    }
    function d() {
      if (typeof window == "undefined") return null;
      var e = u.get("active"),
        t = new URLSearchParams(window.location.search).get("id");
      return e != null && e.scope === c() && (t == null || t === e.journeyID)
        ? e
        : null;
    }
    function m(e) {
      u.set("active", { journeyID: null, owner: e, scope: c() });
    }
    function p(e) {
      var t;
      ((t = u.get("active")) == null ? void 0 : t.owner) === e &&
        u.delete("active");
    }
    function _(e, t) {
      var n = d();
      return n == null || n.owner !== e
        ? !1
        : (u.set("active", babelHelpers.extends({}, n, { journeyID: t })), !0);
    }
    function f(e) {
      var t;
      return ((t = d()) == null ? void 0 : t.owner) === e;
    }
    function g() {
      var e = d();
      return (e == null ? void 0 : e.journeyID) != null &&
        new URLSearchParams(window.location.search).get("id") === e.journeyID
        ? e
        : null;
    }
    var h = function (t) {
        return u.subscribe("active", t);
      },
      y = function () {
        return d() != null;
      },
      C = function () {
        return !1;
      };
    function b() {
      return s(h, y, C);
    }
    ((l.publishCreationBusy = m),
      (l.clearCreationBusy = p),
      (l.markCreationHandoff = _),
      (l.isCreationCurrent = f),
      (l.getCreationHandoff = g),
      (l.useMAIBATriggerSendCreationBusy = b));
  },
  98,
);
