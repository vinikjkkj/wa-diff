__d(
  "useWAWebFTS",
  [
    "Promise",
    "WAAbortError",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAPromiseRaceAbort",
    "WAShiftTimer",
    "WAWebBackendErrors",
    "WAWebMsgCollection",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "react",
    "useLazyRef",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(t, a, i, l, s, u) {
      (s === void 0 && (s = "desc"), u === void 0 && (u = r("WAWebNoop")));
      var p = m(!1),
        _ = p[0],
        f = p[1],
        g = d({}),
        h = m(t.length === 0),
        y = h[0],
        C = h[1],
        b = d(!1),
        v = d(null),
        S = d(null),
        R = r("useWAWebUnmountSignal")();
      (o("useWAWebListener").useListener(
        o("WAWebMsgCollection").MsgCollection,
        "add",
        function (e) {
          var n = t.filterMsgs([e], "");
          n.length > 0 && t.add(n);
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "remove",
          function (e) {
            var n = t.filterMsgs([e], "");
            n.length > 0 && t.remove(n);
          },
        ));
      var L = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function () {
            var e = g.current;
            (e.searchText !== void 0 && i(e.searchText),
              e.searching !== void 0 && f(e.searching),
              e.resultsUnavailable !== void 0 && C(e.resultsUnavailable),
              (g.current = {}));
          });
        }),
        E = function (t, n) {
          (n === void 0 && (n = 75),
            Object.assign(g.current, t),
            t.searching === !0 ? L.current.debounce(0) : L.current.debounce(n));
        };
      o("useWAWebListener").useListener(t, "add", function (e) {
        E({ resultsUnavailable: !1 });
      });
      var k = function () {
          var e = g.current;
          if ("searching" in e) {
            var t;
            return (t = e.searching) != null ? t : !1;
          }
          return _;
        },
        I = r("useWAWebDebouncedCallback")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var i;
            b.current = !1;
            var c = a.trim(),
              d = r("WAFtsIsSearchQueryEligibleForMessageSearch")(c);
            if (!((!d && c !== "") || !t.hasMoreMsgs)) {
              ((i = v.current) == null || i.abort(),
                (v.current = new AbortController()));
              var m = v.current.signal,
                p = (e || (e = n("Promise")))
                  .resolve()
                  .then(function () {
                    var e = c === "" && t.length === 0,
                      n = k();
                    ((!n && e) || n) &&
                      E({ searching: !0, resultsUnavailable: !1 });
                  })
                  .then(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      return t.search({
                        searchTerm: "",
                        count: l,
                        direction: s === "asc" ? "after" : "before",
                      });
                    }),
                  )
                  .finally(u);
              return (
                (S.current = r("WAPromiseRaceAbort")(p, m)
                  .then(function (e) {
                    if (R.aborted) throw new (o("WAAbortError").AbortError)();
                    e &&
                      !e.canceled &&
                      c === a.trim() &&
                      E({ searching: !1, resultsUnavailable: !1 });
                  })
                  .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                  .finally(function () {
                    ((S.current = void 0),
                      (v.current = void 0),
                      E({ searching: !1, resultsUnavailable: !1 }));
                  })
                  .catch(function (e) {
                    b.current ||
                      E({
                        searching: !1,
                        resultsUnavailable:
                          e instanceof o("WAWebBackendErrors").E404,
                      });
                  })),
                S.current
              );
            }
          }),
          300,
        );
      return (
        c(
          function () {
            return function () {
              var e;
              (I.cancel(),
                (e = v.current) == null || e.abort(),
                L.current.cancel(),
                t.reset(),
                t.resetSearch());
            };
          },
          [L, I, t],
        ),
        [I, k, y]
      );
    }
    l.default = p;
  },
  98,
);
