__d(
  "MAIBAR23E2EODAXDefaultOnStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maiba_r23_e2e_odax_default_on",
      u = 1,
      c = { attemptCount: 0, isMAIBASelected: !0, version: 1 };
    function d() {
      var t = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (t == null) return c;
      var n = t.getItem(s);
      if (n == null) return c;
      try {
        var o = JSON.parse(n);
        if (
          o != null &&
          o.version === 1 &&
          typeof o.attemptCount == "number" &&
          Number.isInteger(o.attemptCount) &&
          o.attemptCount >= 0 &&
          typeof o.isMAIBASelected == "boolean"
        )
          return {
            attemptCount: o.attemptCount,
            isMAIBASelected: o.isMAIBASelected,
            version: 1,
          };
      } catch (e) {}
      return c;
    }
    function m(t) {
      var n = (e || (e = r("WebStorage"))).getLocalStorage();
      n != null &&
        (e || (e = r("WebStorage"))).setItemGuarded(n, s, JSON.stringify(t));
    }
    function p() {
      var e = d();
      return e.attemptCount < u ? !0 : e.isMAIBASelected;
    }
    function _(e) {
      return e === "MAIBA" ? !0 : e === "MANUAL" ? !1 : p();
    }
    function f(e) {
      var t = d(),
        n = t.attemptCount <= u ? t.attemptCount + 1 : t.attemptCount;
      m(babelHelpers.extends({}, t, { attemptCount: n, isMAIBASelected: e }));
    }
    ((l.shouldE2EODAXDefaultOnFromStorage = p),
      (l.shouldE2EODAXDefaultOnFromSavedMode = _),
      (l.recordE2EODAXAttempt = f));
  },
  98,
);
