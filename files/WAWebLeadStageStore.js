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
      return (t = C(u, e)) != null ? t : C(s, e);
    }
    function f(e) {
      return C(u, e);
    }
    function g(e, t) {
      u.get(e) !== t && (u.set(e, t), b());
    }
    function h(e) {
      u.delete(e) && b();
    }
    function y(e) {
      return (
        p.add(e),
        d == null &&
          (d = o(
            "WAWebLeadSublistChangeNotifier",
          ).subscribeToLeadSublistChanges(I)),
        S(),
        function () {
          (p.delete(e),
            p.size === 0 && (d == null || d(), (d = null), (c = null)));
        }
      );
    }
    function C(e, t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = v(t);
      return r != null ? e.get(r) : null;
    }
    function b() {
      for (var e of p) e();
    }
    function v(e) {
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
    function S() {
      return (c == null && (c = R()), c);
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = ++m,
            n = null;
          try {
            n = k(
              yield o("WAWebDBLabelSublistDatabaseApi").getAllLabelSublist(),
            );
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[CustomerManager] lead stage store read failed",
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
            ((s = n), E(), b());
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      for (var e of u) {
        var t = e[0],
          n = e[1];
        C(s, t) === n && u.delete(t);
      }
    }
    function k(e) {
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
    function I() {
      c = R();
    }
    ((l.getLeadStageFromStore = _),
      (l.getPendingLeadStage = f),
      (l.publishPendingLeadStage = g),
      (l.clearPendingLeadStage = h),
      (l.subscribeToLeadStageStore = y));
  },
  98,
);
