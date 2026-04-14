__d(
  "useWAWebGalleryScrollLimit",
  [
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubSearchUtils",
    "WAWebWamEnumActionCode",
    "react",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e, t, n, a) {
      (t === void 0 && (t = !1), n === void 0 && (n = !1));
      var i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        l = i.searchQuery,
        s = d(o("WAWebMediaHubSearchUtils").NON_SEARCH_LIMIT_CAP),
        m = s[0],
        p = s[1],
        _ = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(l),
        f = c(!1),
        g = e.length > 0;
      (u(
        function () {
          t ||
            !g ||
            o("WAWebMediaHubLogger").logMediaHubAction({
              action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
              customFields: { fromSearchResult: _, searchResultsReturned: !0 },
            });
        },
        [m, t, _, g],
      ),
        u(
          function () {
            n && p(o("WAWebMediaHubSearchUtils").NON_SEARCH_LIMIT_CAP);
          },
          [n],
        ));
      var h = function () {
          var t = m + o("WAWebMediaHubSearchUtils").NON_SEARCH_LIMIT_CAP;
          e.length >= m && p(t);
          var n = e.length <= t;
          if (n && e.hasMoreMsgs && f.current === !1) {
            var r;
            ((f.current = !0),
              a == null ||
                (r = a()) == null ||
                r.finally(function () {
                  f.current = !1;
                }));
          }
        },
        y = r("useWAWebThrottledCallback")(function (e) {
          e.scrollTop + e.clientHeight * 0.5 >=
            e.scrollHeight - e.clientHeight && h();
        }, 150),
        C = function (t) {
          y(t.currentTarget);
        };
      return [m, C];
    }
    l.default = m;
  },
  98,
);
