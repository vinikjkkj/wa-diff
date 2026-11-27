__d(
  "WmiErrorDomain",
  ["WmiErrorStamp", "err", "fb-error", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.bug,
        a = t.infra,
        i = t.infraFallback,
        l = new Set(Object.keys(n)),
        s = new Map(),
        u = new Map(),
        c = function (t, n) {
          (s.set(t, n), u.set(t, t));
        };
      for (var d of Object.keys(a))
        c(d, {
          code: d,
          domain: e,
          retryable: a[d].retryable,
          severity: a[d].severity,
        });
      for (var m of Object.keys(n))
        c(m, { code: m, domain: e, retryable: !1, severity: "mustfix" });
      function p(e, t) {
        for (
          var n = s.get(e),
            a = arguments.length,
            i = new Array(a > 2 ? a - 2 : 0),
            l = 2;
          l < a;
          l++
        )
          i[l - 2] = arguments[l];
        var u = r("fb-error").TAAL.blameToPreviousFrame(
          r("err").apply(void 0, ["[" + e + "] " + t].concat(i)),
        );
        return (
          (u.message = r("fb-error").ErrorSerializer.toReadableMessage(u)),
          n == null ? u : o("WmiErrorStamp").stampWmiError(u, _(n, t))
        );
      }
      function _(e, t) {
        return l.has(e.code)
          ? babelHelpers.extends({}, e, {
              site: t.replace(/\W+/g, "_").slice(0, 40),
            })
          : e;
      }
      return {
        classify: function (t, n, a) {
          if (
            t instanceof Error &&
            o("WmiErrorStamp").getWmiErrorStamp(t) != null
          )
            return t;
          var e = r("getErrorSafe")(t),
            i = s.get(a);
          return i == null
            ? e
            : o("WmiErrorStamp").stampWmiError(
                e,
                _(babelHelpers.extends({}, i, { source: n + "/" + e.name }), n),
              );
        },
        codeOf: function (n) {
          var t = o("WmiErrorStamp").getWmiErrorStamp(n),
            r = t != null && t.domain === e ? u.get(t.code) : null;
          return r != null ? r : i;
        },
        error: p,
        fromWire: function (t, n, a) {
          var e = t != null && s.has(t) ? t : String(i),
            l = s.get(e),
            u = n != null ? n : "failed across a bridge",
            c =
              t != null && u.startsWith("[" + t + "] ")
                ? u.slice(t.length + 3)
                : u,
            d = a == null ? void 0 : a.callerStack,
            m = d != null && d.includes("\n") ? d.slice(d.indexOf("\n")) : null,
            p =
              m != null
                ? r("fb-error").TAAL.blameToPreviousDirectory(
                    r("err")("[" + e + "] %s", c),
                  )
                : r("fb-error").TAAL.blameToPreviousFile(
                    r("err")("[" + e + "] %s", c),
                  );
          ((p.message = r("fb-error").ErrorSerializer.toReadableMessage(p)),
            m != null && (p.stack = String(p.stack).split("\n")[0] + m));
          var _ = a == null ? void 0 : a.stack;
          if (_ != null) {
            var f = r("err")("%s", u);
            ((f.stack = _), (p.deferredSource = f));
          }
          if (l == null) return p;
          var g = a == null ? void 0 : a.source;
          return o("WmiErrorStamp").stampWmiError(
            p,
            g == null ? l : babelHelpers.extends({}, l, { source: g }),
          );
        },
        sourceOf: function (n) {
          var t = o("WmiErrorStamp").getWmiErrorStamp(n);
          return t != null && t.domain === e ? t.source : null;
        },
      };
    }
    l.defineErrorDomain = e;
  },
  98,
);
