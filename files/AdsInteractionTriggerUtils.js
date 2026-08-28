__d(
  "AdsInteractionTriggerUtils",
  [
    "AdsInteractionTriggerTrackedKeysConfig",
    "AdsPerfInteractions",
    "AdsPerfInteractionsController",
    "filterObject",
    "getAdsPerfInteractionConfigForInteraction",
    "mapObjectKeysAndValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = null,
      c = null;
    function d(t, n) {
      var o;
      if (n != null) {
        s ||
          (s = Object.keys(r("AdsInteractionTriggerTrackedKeysConfig")).filter(
            function (e) {
              return (
                r("AdsInteractionTriggerTrackedKeysConfig")[e]
                  .tracePolicySegment != null
              );
            },
          ));
        var a = s.find(function (e) {
          var o = r("AdsInteractionTriggerTrackedKeysConfig")[e];
          return (
            o.interaction === t &&
            o.tracePolicySegment != null &&
            n.includes(o.tracePolicySegment)
          );
        });
        if (a) return a;
      }
      return (
        e ||
          (e = r("mapObjectKeysAndValues")(
            r("filterObject")(
              r("AdsInteractionTriggerTrackedKeysConfig"),
              function (e) {
                return e.tracePolicySegment == null;
              },
            ),
            function (e) {
              return String(e.interaction);
            },
            function (e, t) {
              return t;
            },
          )),
        (o = e[String(t)]) != null ? o : null
      );
    }
    function m() {
      if (u) return u;
      var e = [];
      for (var t in r("AdsPerfInteractions")) {
        var n = r("getAdsPerfInteractionConfigForInteraction")(
          r("AdsPerfInteractions")[t],
        );
        (n == null ? void 0 : n.component) === "am.table" &&
          e.push(r("AdsPerfInteractions")[t]);
      }
      return ((u = e), e);
    }
    function p() {
      if (c) return c;
      var e = [];
      for (var t in r("AdsPerfInteractions")) {
        var n = r("getAdsPerfInteractionConfigForInteraction")(
          r("AdsPerfInteractions")[t],
        );
        (n == null ? void 0 : n.traceType) === "INITIAL_LOAD" &&
          e.push(r("AdsPerfInteractions")[t]);
      }
      return ((c = e), e);
    }
    function _(e, t) {
      var n = m();
      for (var o of n)
        r("AdsPerfInteractionsController").addEventListener(o, e, t);
    }
    function f(e, t) {
      r("AdsPerfInteractionsController").addEventListener(
        "am.editor.change_level",
        e,
        t,
      );
    }
    function g(e, t, n) {
      n === void 0 && (n = []);
      var o = p();
      for (var a of o)
        n.includes(a) ||
          r("AdsPerfInteractionsController").addEventListener(a, e, t);
    }
    ((l.getInteractionKeyFromPerfInteraction = d),
      (l.addTableInteractionsListener = _),
      (l.addTableUpdateInteractionsListener = f),
      (l.addPageLoadInteractionsListener = g));
  },
  98,
);
