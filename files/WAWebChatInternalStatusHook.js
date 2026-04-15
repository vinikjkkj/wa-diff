__d(
  "WAWebChatInternalStatusHook",
  [
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WAWebNoop",
    "WAWebTextStatusCollection",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState,
      m = { brb: "BRB", pto: "PTO", sick: "SICK" },
      p = ["status"].concat(Object.keys(m)),
      _ = "change:status",
      f = /\{([^}]*)\}/g;
    function g(e) {
      var t = e,
        n = [],
        r = e.matchAll(f);
      for (var o of r) {
        var a,
          i = o == null ? void 0 : o[1],
          l = (a = i == null ? void 0 : i.split(":")) != null ? a : [],
          s = l[0],
          u = l[1];
        switch (s.toLowerCase()) {
          case "tz":
            (n.push({ name: "tz", params: [u] }),
              (t = t.replace((o == null ? void 0 : o[0]) || "", "")));
            break;
          default:
            break;
        }
      }
      return { status: t.trim(), addons: n };
    }
    function h(e) {
      try {
        var t = e.split("/"),
          n = new Date(),
          o = n.getFullYear();
        t.length === 2 && t.push(o.toString());
        var a = new Date(t[0] + "/" + t[1] + "/" + t[2]);
        return a;
      } catch (e) {
        throw r("err")("Invalid date format");
      }
    }
    function y(e) {
      try {
        var t = e == null ? void 0 : e.match(/@(\w+)\s*\{([^}]*)\}/),
          n = t == null ? void 0 : t[2];
        if (n == null) return !0;
        var r = n.split("-"),
          o = r[0],
          a = r[1],
          i = h(o),
          l = a === "" ? i : h(a),
          s = new Date();
        return i <= s && s <= l;
      } catch (e) {
        return !0;
      }
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(18),
        n = d(""),
        a = n[0],
        i = n[1],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (t[0] = l))
        : (l = t[0]);
      var s = d(l),
        f = s[0],
        h = s[1],
        C = c(),
        b = r("useWAWebUnmountSignal")(),
        v,
        S;
      (t[1] !== e || t[2] !== b
        ? ((v = function () {
            if ((i(""), !!e.isRegularUser()))
              return (
                r("WAPromiseRaceAbort")(
                  o("WAWebTextStatusCollection").TextStatusCollection.find(e),
                  b,
                )
                  .then(function (e) {
                    if (b.aborted) throw new (o("WAAbortError").AbortError)();
                    var t = function () {
                      if (!b.aborted) {
                        var t = g(e.status),
                          n = t.addons,
                          r = t.status;
                        (i(r), h(n));
                      }
                    };
                    (t(),
                      e.on(_, t),
                      (C.current = function () {
                        return e.off(_, t);
                      }));
                  })
                  .catch(o("WAAbortError").catchAbort(r("WAWebNoop"))),
                function () {
                  C.current == null || C.current();
                }
              );
          }),
          (S = [e, b]),
          (t[1] = e),
          (t[2] = b),
          (t[3] = v),
          (t[4] = S))
        : ((v = t[3]), (S = t[4])),
        u(v, S));
      var R, L;
      if (t[5] !== a) {
        var E = a == null ? void 0 : a.match(/@(\w*)\b/);
        ((R = E == null ? void 0 : E[1].toLowerCase()),
          (L = R != null && p.includes(R)),
          (t[5] = a),
          (t[6] = R),
          (t[7] = L));
      } else ((R = t[6]), (L = t[7]));
      var k = L,
        I;
      t[8] !== k || t[9] !== a
        ? ((I = k ? y(a) : !1), (t[8] = k), (t[9] = a), (t[10] = I))
        : (I = t[10]);
      var T = I,
        D = R != null && T ? m[R] : null,
        x = !!D,
        $;
      return (
        t[11] !== f ||
        t[12] !== T ||
        t[13] !== x ||
        t[14] !== k ||
        t[15] !== D ||
        t[16] !== a
          ? (($ = {
              status: a,
              hasStatus: k,
              hasActiveStatus: T,
              overlay: D,
              hasOverlay: x,
              addons: f,
            }),
            (t[11] = f),
            (t[12] = T),
            (t[13] = x),
            (t[14] = k),
            (t[15] = D),
            (t[16] = a),
            (t[17] = $))
          : ($ = t[17]),
        $
      );
    }
    l.default = C;
  },
  98,
);
