__d(
  "useWAWebMediaHubFTSLoad",
  [
    "Promise",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubSearchUtils",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
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
      var s = o("react-compiler-runtime").c(9),
        u = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        c = u.sortOrder,
        p = u.tab,
        _ = m(void 0),
        f;
      (s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            _.current = void 0;
          }),
          (s[0] = f))
        : (f = s[0]),
        o("useWAWebListener").useListener(t, "reset", f));
      var g, h;
      (s[1] !== t ||
      s[2] !== i ||
      s[3] !== a ||
      s[4] !== c ||
      s[5] !== p ||
      s[6] !== l
        ? ((g = function () {
            _.current !== c &&
              p === l &&
              a !== "sender" &&
              (p === l && (t.reset(), t.resetSearch()),
              (e || (e = n("Promise"))).resolve().then(i).catch(r("WAWebNoop")),
              (_.current = c));
          }),
          (h = [i, p, a, l, c, t]),
          (s[1] = t),
          (s[2] = i),
          (s[3] = a),
          (s[4] = c),
          (s[5] = p),
          (s[6] = l),
          (s[7] = g),
          (s[8] = h))
        : ((g = s[7]), (h = s[8])),
        d(g, h));
    }
    function _(e, t, n) {
      var a = o("react-compiler-runtime").c(10),
        i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        l = i.searchQuery,
        s;
      a[0] !== e.hasMoreMsgs || a[1] !== n || a[2] !== t || a[3] !== l
        ? ((s = function () {
            if (
              o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(l) &&
              t &&
              e.hasMoreMsgs
            ) {
              var a;
              (a = n()) == null || a.catch(r("WAWebNoop"));
            }
          }),
          (a[0] = e.hasMoreMsgs),
          (a[1] = n),
          (a[2] = t),
          (a[3] = l),
          (a[4] = s))
        : (s = a[4]);
      var u = s,
        c;
      (a[5] !== u
        ? ((c = function () {
            u();
          }),
          (a[5] = u),
          (a[6] = c))
        : (c = a[6]),
        o("useWAWebListener").useListener(e, "searchPromise_update", c));
      var m, p;
      (a[7] !== u
        ? ((m = function () {
            u();
          }),
          (p = [u]),
          (a[7] = u),
          (a[8] = m),
          (a[9] = p))
        : ((m = a[8]), (p = a[9])),
        d(m, p));
    }
    ((l.useWAWebMediaHubFTSLoad = p), (l.useWAWebMediaHubFTSLoadMore = _));
  },
  98,
);
