__d(
  "useWAWebMediaHubFTSLoad",
  [
    "Promise",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubSearchUtils",
    "WAWebNoop",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef;
    function p(t, a, i, l) {
      var s = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        u = s.sortOrder,
        c = s.tab,
        p = m(void 0);
      (o("useWAWebListener").useListener(t, "reset", function () {
        p.current = void 0;
      }),
        d(
          function () {
            p.current !== u &&
              c === l &&
              a !== "sender" &&
              (c === l && (t.reset(), t.resetSearch()),
              (e || (e = n("Promise"))).resolve().then(i).catch(r("WAWebNoop")),
              (p.current = u));
          },
          [i, c, a, l, u, t],
        ));
    }
    function _(e, t, n) {
      var a = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        i = a.searchQuery,
        l = c(
          function () {
            if (
              o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(i) &&
              t &&
              e.hasMoreMsgs
            ) {
              var a;
              (a = n()) == null || a.catch(r("WAWebNoop"));
            }
          },
          [i, e.hasMoreMsgs, t, n],
        );
      (o("useWAWebListener").useListener(
        e,
        "searchPromise_update",
        function () {
          l();
        },
      ),
        d(
          function () {
            l();
          },
          [l],
        ));
    }
    ((l.useWAWebMediaHubFTSLoad = p), (l.useWAWebMediaHubFTSLoadMore = _));
  },
  98,
);
