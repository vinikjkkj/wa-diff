__d(
  "WAWebLeadStageStore",
  [
    "WALogger",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadStageMembership",
    "WAWebLeadSublistChangeNotifier",
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
          ).subscribeToLeadSublistChanges(k)),
        v(),
        function () {
          (p.delete(e),
            p.size === 0 && (d == null || d(), (d = null), (c = null)));
        }
      );
    }
    function C(e, t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = o("WAWebLeadStageMembership").alternateSpelling(t);
      return r != null ? e.get(r) : null;
    }
    function b() {
      for (var e of p) e();
    }
    function v() {
      return (c == null && (c = S()), c);
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = ++m,
            n = null;
          try {
            n = E(
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
            ((s = n), L(), b());
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      for (var e of u) {
        var t = e[0],
          n = e[1];
        C(s, t) === n && u.delete(t);
      }
    }
    function E(e) {
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
    function k() {
      c = S();
    }
    ((l.getLeadStageFromStore = _),
      (l.getPendingLeadStage = f),
      (l.publishPendingLeadStage = g),
      (l.clearPendingLeadStage = h),
      (l.subscribeToLeadStageStore = y));
  },
  98,
);
