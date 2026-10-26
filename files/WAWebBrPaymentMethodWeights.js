__d(
  "WAWebBrPaymentMethodWeights",
  ["WAWebBrPaymentMethodKey", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = 1e3,
      s = new Set([
        "pix_native_connected",
        "appswitch_returning",
        "last_used",
        "merchant_top",
      ]),
      u = new Set(["merchant_most_used", "merchant_preferred_hint"]),
      c = null;
    function d(e) {
      if (c != null && c.raw === e) return c.config;
      var t = m(e);
      return ((c = { raw: e, config: t }), t);
    }
    function m(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || f(e)) return null;
      var n = t,
        r = n.pinned,
        a = n.version;
      if (typeof a != "string" || a.trim().length === 0) return null;
      var i = _(r),
        l = g(
          t.methods,
          function (e) {
            return o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.isValid(e);
          },
          !0,
        ),
        u = g(
          t.signals,
          function (e) {
            return s.has(e);
          },
          !1,
        );
      return i == null || l == null || u == null
        ? null
        : { version: a, pinned: i, methods: l, signals: u };
    }
    function p(e, t, n, o, a) {
      var i,
        l,
        s = {
          ordered: e,
          rankSource: n,
          weightsVersion:
            (i = o == null ? void 0 : o.version) != null ? i : "invalid",
          rankChanged: !1,
          pinnedEntry: null,
        };
      if (o == null || e.length === 0) return s;
      var c = new Map([
          ["last_used", a],
          ["merchant_top", u.has(n != null ? n : "") ? t(e[0]) : null],
        ]),
        d = new Map(
          e.map(function (e) {
            return [t(e), e];
          }),
        ),
        m = h(o.pinned, d, c),
        p = e
          .map(function (e, n) {
            return { value: e, index: n, score: y(t(e), o, c) };
          })
          .filter(function (e) {
            var n = e.value;
            return !m.has(t(n));
          })
          .sort(function (e, t) {
            return t.score - e.score || e.index - t.index;
          }),
        _ = [].concat(
          Array.from(m.keys()).map(function (e) {
            return r("nullthrows")(d.get(e));
          }),
          p.map(function (e) {
            var t = e.value;
            return t;
          }),
        ),
        f = _.some(function (n, r) {
          return t(n) !== t(e[r]);
        }),
        g = t(_[0]);
      return {
        ordered: f ? _ : e,
        rankSource: C(g, t(e[0]), n, m, o, c),
        weightsVersion: o.version,
        rankChanged: f,
        pinnedEntry: (l = m.get(g)) != null ? l : null,
      };
    }
    function _(e) {
      if (e === void 0) return [];
      if (!Array.isArray(e)) return null;
      var t = new Set();
      for (var n of e) {
        if (typeof n != "string") return null;
        t.add(n.toLowerCase());
      }
      return Array.from(t);
    }
    function f(e) {
      return /\d[.eE]/.test(e.replace(/\"(?:[^\"\\]|\\.)*\"/g, '""'));
    }
    function g(t, n, r) {
      var o = new Map();
      if (t === void 0) return o;
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      for (var a of Object.entries(t)) {
        var i = a[0],
          l = a[1];
        if (typeof l != "number" || !Number.isInteger(l)) return null;
        var s = r ? i.toUpperCase() : i.toLowerCase();
        n(s) && o.set(s, Math.max(-e, Math.min(e, l)));
      }
      return o;
    }
    function h(e, t, n) {
      var r = new Map();
      for (var o of e) {
        var a = s.has(o) ? n.get(o) : o.toUpperCase();
        a != null && t.has(a) && !r.has(a) && r.set(a, o);
      }
      return r;
    }
    function y(e, t, n) {
      var r,
        o = (r = t.methods.get(e)) != null ? r : 0;
      for (var a of t.signals) {
        var i = a[0],
          l = a[1];
        n.get(i) === e && (o += l);
      }
      return o;
    }
    function C(e, t, n, r, o, a) {
      var i;
      return e === t
        ? n
        : r.has(e)
          ? "client_pinned"
          : a.get("last_used") === e &&
              ((i = o.signals.get("last_used")) != null ? i : 0) > 0
            ? "client_last_used"
            : "client_weights";
    }
    ((l.parsePaymentMethodWeights = d), (l.reorderPaymentMethods = p));
  },
  98,
);
