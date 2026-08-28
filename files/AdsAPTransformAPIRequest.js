__d(
  "AdsAPTransformAPIRequest",
  [
    "AdsAPConsts",
    "AdsAPRequestFieldsValues",
    "FBLogger",
    "GraphAPIRequestMatchingUtils",
    "adsAPStringifyParams",
    "firstx",
    "getErrorSafe",
    "lastx",
    "mapObject",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [/^limit$/, /height$/, /width$/],
      u = ["_reqName", "_reqSrc"],
      c;
    function d(e) {
      c = e;
    }
    function m() {
      if (c != null) {
        var e;
        return {
          date_preset: String(
            (e = c.getValue("DATE_PRESET")) != null ? e : "EMPTY",
          ),
        };
      }
    }
    function p(e, t) {
      try {
        var n = o("GraphAPIRequestMatchingUtils").normalizeParamsForMatching(
          e,
          u,
        );
        return (c != null && (n = _(c, n, t)), r("adsAPStringifyParams")(n));
      } catch (e) {
        r("FBLogger")("ads-ap")
          .catching(r("getErrorSafe")(e))
          .warn("An error was thrown in transformRequestParams");
      }
    }
    function _(e, t, n) {
      var r = function () {
        var r = o[0],
          a = o[1];
        if (
          s.some(function (e) {
            return e.test(r);
          })
        )
          return 1;
        t[r] = E(e, t[r], r, n);
      };
      for (var o of Object.entries(t)) r();
      return t;
    }
    function f(e) {
      if (c != null)
        try {
          return S(c, e);
        } catch (e) {
          r("FBLogger")("ads-ap")
            .catching(r("getErrorSafe")(e))
            .warn("An error was thrown in transformRequestPath");
        }
      return e;
    }
    function g(e, t) {
      r("FBLogger")("adaptive_prefetching").debug(
        "Collision resolved: selected %s (values: %s)",
        t,
        Array.from(e).join(", "),
      );
    }
    function h(e, t, n, o) {
      var a = new Set(),
        i = e.getListKeys(),
        l = function () {
          var n = e.getListValueSet(s);
          n != null &&
            t.every(function (e) {
              return n.has(e);
            }) &&
            a.add(s);
        };
      for (var s of i) l();
      return a.size === 0
        ? null
        : o != null && a.size > 1 && a.has(o)
          ? (g(a, o), "%%" + n + "{" + o + "}%%")
          : "%%" + n + "{" + r("firstx")(a.values()) + "}%%";
    }
    function y(e) {
      for (var t of Object.entries(r("AdsAPRequestFieldsValues"))) {
        var n = t[0],
          o = t[1];
        if (r("shallowArrayEqual")(e, o)) return "%%fields{" + n + "}%%";
      }
      return null;
    }
    function C(e, t, n, r) {
      var o = e.getKeys(t);
      return o == null
        ? null
        : n != null && o != null && o.size > 1 && o.has(n)
          ? (g(o, n), n)
          : r(o);
    }
    function b(e, t, n, o) {
      var a = C(e, t, o == null ? void 0 : o.get(n), r("lastx"));
      return a != null ? "%%" + a + "%%" : t;
    }
    function v(e, t, n) {
      try {
        var a = t,
          i = t.matchAll(o("AdsAPConsts").ID_REGEXP);
        for (var l of i) {
          var s = l[0],
            u = C(e, s, n, r("lastx"));
          u != null && (a = k(a, s, "%%" + u + "%%"));
        }
        return a;
      } catch (e) {
        r("FBLogger")("ads-ap")
          .catching(r("getErrorSafe")(e))
          .warn("An error was thrown in transformSingleIDPattern");
      }
      return t;
    }
    function S(e, t, n, a) {
      n === void 0 && (n = "");
      var i = a == null ? void 0 : a.get(n),
        l = C(e, t, i, r("lastx"));
      if (l != null) return "%%" + l + "%%";
      if (o("AdsAPConsts").ID_LIST_REGEXP.test(t)) {
        var s = t.split(","),
          u = h(e, s, "stringList", i);
        return u != null ? u : t;
      }
      return v(e, t, i);
    }
    function R(t, n, o, a) {
      if (!Array.isArray(n))
        return (e || (e = r("mapObject")))(n, function (e) {
          return E(t, e, o, a);
        });
      if (
        n.length > 0 &&
        n.every(function (e) {
          return typeof e == "string";
        })
      ) {
        var i = n;
        if (
          i.every(function (e) {
            return /^\d+$/.test(e);
          })
        ) {
          var l = h(t, i, "list", a == null ? void 0 : a.get(o));
          return l != null ? l : n;
        } else {
          var s = y(i);
          if (s != null) return s;
        }
      }
      return L(t, n, o, a);
    }
    function L(e, t, n, r) {
      return t.map(function (t) {
        return E(e, t, n, r);
      });
    }
    function E(e, t, n, r) {
      if (t == null) return t;
      switch (typeof t) {
        case "boolean":
          return t;
        case "number":
          return b(e, t, n, r);
        case "string":
          return S(e, t, n, r);
        case "object":
          return R(e, t, n, r);
      }
    }
    function k(e, t, n) {
      for (var r = e; r.includes(t); ) r = r.replace(t, n);
      return r;
    }
    ((l.init = d),
      (l.getContextDataForTraceLogging = m),
      (l.transformRequestParams = p),
      (l.transformRequestPath = f));
  },
  98,
);
