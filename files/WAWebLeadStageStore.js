__d(
  "WAWebLeadStageStore",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadSublistChangeNotifier",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = new Map(),
      c = null,
      d = null,
      m = 0,
      p = new Set();
    function _(e) {
      var t;
      return (t = b(u, e)) != null ? t : b(s, e);
    }
    function f(e) {
      return b(u, e);
    }
    function g(e, t) {
      u.get(e) !== t && (u.set(e, t), v());
    }
    function h(e) {
      u.delete(e) && v();
    }
    function y(e) {
      return (
        p.add(e),
        d == null &&
          (d = o(
            "WAWebLeadSublistChangeNotifier",
          ).subscribeToLeadSublistChanges(T)),
        R(),
        function () {
          (p.delete(e),
            p.size === 0 && (d == null || d(), (d = null), (c = null)));
        }
      );
    }
    function C() {
      ((s = new Map()),
        u.clear(),
        (c = null),
        m++,
        d == null || d(),
        (d = null),
        p.clear());
    }
    function b(e, t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = S(t);
      return r != null ? e.get(r) : null;
    }
    function v() {
      for (var e of p) e();
    }
    function S(e) {
      var t;
      if (!r("WAWebWid").isWid(e)) return null;
      var n = o("WAWebWidFactory").createWid(e);
      return n.isUser()
        ? (t = o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").asUserWidOrThrow(n),
          )) == null
          ? void 0
          : t.toString()
        : null;
    }
    function R() {
      return (c == null && (c = L()), c);
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = ++m,
            n = null;
          try {
            n = I(
              yield o("WAWebDBLabelSublistDatabaseApi").getAllLabelSublist(),
            );
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ContactManager] lead stage store read failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("customer_manager_lead_stage_store_read_failed");
          }
          if (t === m) {
            if (n == null) {
              c = null;
              return;
            }
            ((s = n), k(), v());
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      for (var e of u) {
        var t = e[0],
          n = e[1];
        b(s, t) === n && u.delete(t);
      }
    }
    function I(e) {
      var t = new Map();
      for (var n of e)
        if (
          n.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
        ) {
          var r = o("WAWebLeadStage").getLeadStageFromNumber(n.subListId);
          r != null && t.set(n.chatJid, r);
        }
      return t;
    }
    function T() {
      c = L();
    }
    ((l.getLeadStageFromStore = _),
      (l.getPendingLeadStage = f),
      (l.publishPendingLeadStage = g),
      (l.clearPendingLeadStage = h),
      (l.subscribeToLeadStageStore = y),
      (l.resetLeadStageStore = C));
  },
  98,
);
