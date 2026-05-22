__d(
  "WAWebAgentTransitionUtils",
  ["WAWebUserPrefsIndexedDBStorage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WAAgentDisassociationState",
      s = "wa-agent-disassociation-state-changed";
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a =
              (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) !=
              null
                ? r
                : [],
            i = t.toString() + ":" + n;
          a.includes(i) ||
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              e,
              [].concat(a, [i]),
            ),
            document.dispatchEvent(new CustomEvent(s)));
        })),
        c.apply(this, arguments)
      );
    }
    function d(t) {
      var n,
        r =
          (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) != null
            ? n
            : [],
        a = t.toString() + ":";
      for (var i of r)
        if (i.startsWith(a)) {
          var l = i.slice(a.length);
          if (l === "disassociated") return l;
        }
      return null;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r =
              (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) !=
              null
                ? n
                : [],
            a = t.toString() + ":",
            i = r.filter(function (e) {
              return !e.startsWith(a);
            });
          i.length !== r.length &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, i),
            document.dispatchEvent(new CustomEvent(s)));
        })),
        p.apply(this, arguments)
      );
    }
    var _ = "WAMeSmbOffboardingState",
      f = "WAMeSmbParentCompanyName";
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(_, !0);
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(_) === !0;
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(_),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(f));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(f, e);
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(f)) !=
        null
        ? e
        : "";
    }
    function L(e, t) {
      return !e && t ? "associated" : e && !t ? "disassociated" : null;
    }
    ((l.AGENT_DISASSOCIATION_STATE_CHANGED_EVENT = s),
      (l.storeAgentDisassociationState = u),
      (l.getAgentDisassociationState = d),
      (l.clearAgentDisassociationState = m),
      (l.storeMeSmbOffboardingState = g),
      (l.getMeSmbOffboardingState = y),
      (l.clearMeSmbOffboardingState = C),
      (l.storeMeSmbParentCompanyName = v),
      (l.getMeSmbParentCompanyName = R),
      (l.detectAgentTransition = L));
  },
  98,
);
