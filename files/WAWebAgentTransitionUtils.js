__d(
  "WAWebAgentTransitionUtils",
  ["WAWebUserPrefsIndexedDBStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WAAgentDisassociationState",
      s = "wa-agent-disassociation-state-changed";
    async function u(t, n) {
      var r,
        a =
          (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) != null
            ? r
            : [],
        i = t.toString() + ":" + n;
      a.includes(i) ||
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          e,
          [].concat(a, [i]),
        ),
        document.dispatchEvent(new CustomEvent(s)));
    }
    function c(t) {
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
    async function d(t) {
      var n,
        r =
          (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) != null
            ? n
            : [],
        a = t.toString() + ":",
        i = r.filter(function (e) {
          return !e.startsWith(a);
        });
      i.length !== r.length &&
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, i),
        document.dispatchEvent(new CustomEvent(s)));
    }
    var m = "WAMeSmbOffboardingState",
      p = "WAMeSmbParentCompanyName";
    async function _() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(m, !0);
    }
    function f() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(m) === !0;
    }
    async function g() {
      (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(m),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(p));
    }
    async function h(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(p, e);
    }
    function y() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(p)) !=
        null
        ? e
        : "";
    }
    function C(e, t) {
      return !e && t ? "associated" : e && !t ? "disassociated" : null;
    }
    ((l.AGENT_DISASSOCIATION_STATE_CHANGED_EVENT = s),
      (l.storeAgentDisassociationState = u),
      (l.getAgentDisassociationState = c),
      (l.clearAgentDisassociationState = d),
      (l.storeMeSmbOffboardingState = _),
      (l.getMeSmbOffboardingState = f),
      (l.clearMeSmbOffboardingState = g),
      (l.storeMeSmbParentCompanyName = h),
      (l.getMeSmbParentCompanyName = y),
      (l.detectAgentTransition = C));
  },
  98,
);
