__d(
  "WAWebMediaHostsMaybeSwitchHost",
  [],
  function (t, n, r, o, a, i) {
    var e = 52428800;
    function l(e, t, n) {
      return e.equals(t) && n != null && t != null && !t.equals(n);
    }
    function s(t, n, r, o) {
      var a = n.fallbackHost,
        i = n.selectedHost,
        s = r.fallbackHost,
        u = r.selectedHost;
      return o < e
        ? { changed: !1, host: t }
        : t.type === "primary" && !t.equals(u)
          ? { changed: !0, host: u }
          : t.type === "fallback" && !i.equals(u)
            ? { changed: !0, host: u }
            : t.type === "fallback" &&
                (l(t, a, s) || l(t, i.fallback, u.fallback))
              ? { changed: !0, host: i }
              : t.type === "primary" ||
                  t.type === "fallback" ||
                  t.type === null ||
                  t.type === void 0
                ? { changed: !1, host: t }
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t.type,
                    );
                  })();
    }
    ((i.THRESHOLD = e), (i.maybeSwitchHost = s));
  },
  66,
);
