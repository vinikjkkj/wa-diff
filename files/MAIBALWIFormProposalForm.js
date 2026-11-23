__d(
  "MAIBALWIFormProposalForm",
  ["LWIMAIBAFormGateway", "emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map(),
      u = "",
      c = new Map(),
      d = new Map(),
      m = new Set(),
      p = new Map();
    function _(t, n) {
      e.set(t, n);
    }
    function f(e, t) {
      var n,
        r = (n = s.get(e.apply)) != null ? n : new Set();
      ((t.length > 0 ? t : [u]).forEach(function (e) {
        return r.add(e);
      }),
        s.set(e.apply, r));
    }
    function g(e, t) {
      var n = s.get(e.apply);
      return (
        n != null &&
        (n.has(u) ||
          t.some(function (e) {
            return n.has(e);
          }))
      );
    }
    function h(t) {
      return e.has(t.apply) || e.has(t.undo);
    }
    function y(e, t) {
      var n = c.get(e);
      return (n == null && c.set(e, t), (n != null ? n : t) === t);
    }
    function C(e, t) {
      var n = c.get(e);
      return n != null && n !== t;
    }
    function b(e, t) {
      (d.set(e, t),
        m.forEach(function (e) {
          return e();
        }));
    }
    function v(e) {
      return d.get(e);
    }
    function S(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function R() {
      (p.clear(), e.clear(), s.clear(), c.clear(), d.clear());
    }
    function L(e) {
      var t = r("emptyFunction"),
        n = function () {
          t();
          var n = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway();
          t = n.status === "OK" ? n.gateway.subscribe(e) : r("emptyFunction");
        };
      n();
      var a = o("LWIMAIBAFormGateway").subscribeToLWIMAIBAFormGateways(
        function () {
          (n(), e());
        },
      );
      return function () {
        (a(), t());
      };
    }
    function E(e, t) {
      var n,
        r = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway(),
        a = r.status === "OK" ? r.gateway : null;
      if (a == null || a.applyCommand == null) return "";
      var i = { reason: "STALE_FORM", status: "refused" };
      a.form === e &&
        (i =
          t == null
            ? { reason: "INVALID_COMMAND", status: "refused" }
            : a.previewCommand == null
              ? void 0
              : a.previewCommand(t.field, t));
      var l =
        ((n = i) == null ? void 0 : n.status) === "refused" ? i.reason : null;
      return l === "CONTROL_DIRTY" || l === "STALE_VALUE"
        ? "null"
        : JSON.stringify(i != null ? i : null);
    }
    function k(e, t, n) {
      p.set(t, { form: e, snapshot: n });
    }
    function I(e, t) {
      var n = p.get(t);
      if (n == null || n.form !== e) return !1;
      var r = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway(),
        a = r.status === "OK" && r.gateway.form === e ? r.gateway : null;
      if (a == null) return !1;
      var i = null;
      try {
        i = a.getSanitizedSpec();
      } catch (e) {
        return !1;
      }
      return i != null && JSON.stringify(i) !== n.snapshot;
    }
    function T(e, t) {
      var n = window.setTimeout(e, t);
      return function () {
        return window.clearTimeout(n);
      };
    }
    var D = 250,
      x = 3e3;
    function $(e, t, n) {
      n === void 0 && (n = T);
      var a = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway(),
        i = a.status === "OK" && a.gateway.form === e ? a.gateway : null;
      if (i != null) {
        var l = "",
          s = function () {
            try {
              var t = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway();
              if (t.status !== "OK" || t.gateway.form !== e) return l;
              var n = t.gateway.getSanitizedSpec();
              l = n == null ? l : JSON.stringify(n);
            } catch (e) {}
            return l;
          },
          u = function () {
            var t = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway();
            return t.status === "OK" && t.gateway.form === e;
          };
        l = s();
        var c = !1,
          d = r("emptyFunction"),
          m = r("emptyFunction"),
          p = r("emptyFunction"),
          _ = function () {
            c || ((c = !0), d(), m(), p(), u() && k(e, t, l));
          },
          f = function () {
            ((l = s()), _());
          };
        ((d = n(f, D)),
          (m = n(function () {
            ((l = s()), _());
          }, x)),
          (p = i.subscribe(function () {
            if (!u()) {
              _();
              return;
            }
            ((l = s()), d(), (d = n(f, D)));
          })));
      }
    }
    function P(t, n, r) {
      var a,
        i = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway(),
        l = i.status === "OK" && i.gateway.form === t ? i.gateway : null,
        s =
          l == null || l.getReceipt == null ? void 0 : l.getReceipt(n, r.undo),
        u =
          l == null || l.getReceipt == null ? void 0 : l.getReceipt(n, r.apply);
      if (s != null) return { action: "undo", isRounded: !1, receipt: s };
      var c = (a = e.get(r.apply)) != null ? a : {},
        d = c.isClamped,
        m = c.isDirect,
        p = c.isRounded;
      return u == null
        ? null
        : {
            action: "apply",
            isClamped: d === !0,
            isDirect: m === !0,
            isRounded: p === !0,
            receipt: u,
          };
    }
    ((l.rememberLWIFormProposalResult = _),
      (l.markLWIFormProposalDismissed = f),
      (l.wasLWIFormProposalDismissed = g),
      (l.wasLWIFormProposalHandled = h),
      (l.claimLWIDirectProposal = y),
      (l.isLWIDirectProposalClaimedByAnother = C),
      (l.rememberLWIDirectFallback = b),
      (l.getLWIDirectFallback = v),
      (l.subscribeToLWIDirectFallbacks = S),
      (l.resetLWIFormProposalResultsForTest = R),
      (l.subscribeToLWIFormProposalForm = L),
      (l.readLWIFormProposalForm = E),
      (l.rememberLWIFormApplySnapshot = k),
      (l.isLWIFormDirtySinceApply = I),
      (l.captureLWIFormApplySnapshot = $),
      (l.getStoredLWIFormProposalResult = P));
  },
  98,
);
