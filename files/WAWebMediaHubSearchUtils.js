__d(
  "WAWebMediaHubSearchUtils",
  [
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMsgGetters",
    "WAWebWamEnumActionCode",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState,
      m = 10,
      p = 50,
      _ = function (t) {
        return (
          t != null &&
          t !== "" &&
          r("WAFtsIsSearchQueryEligibleForMessageSearch")(t)
        );
      };
    function f(e) {
      var t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        n = t.searchQuery,
        r = t.tab,
        a = _(n);
      c(
        function () {
          r === e &&
            o("WAWebMediaHubLogger").logMediaHubAction({
              customFields: { fromSearchResult: a },
            });
        },
        [a, r, e, n],
      );
    }
    function g() {
      var e = d(5),
        t = e[0],
        n = e[1];
      return [
        t,
        function () {
          (o("WAWebMediaHubLogger").logMediaHubAction({
            action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
            customFields: { searchResultsReturned: !0 },
          }),
            n(t + m));
        },
      ];
    }
    function h(e, t, n) {
      var r = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        a = r.searchQuery,
        i = r.setSearchStatusCaption,
        l = r.setSearchStatusSender,
        s = r.tab,
        u = _(a);
      c(
        function () {
          if (s === n) {
            var r = u ? !t : null;
            e === "sender" ? l(r) : i(r);
          }
        },
        [u, t, e, l, i, s, n],
      );
    }
    function y() {
      var e = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        t = e.filters,
        n = u(
          function (e) {
            var n = o("WAWebMsgGetters").getIsSentByMe(e),
              r = t !== "others",
              a = t !== "you";
            return n ? r : a;
          },
          [t],
        );
      return n;
    }
    ((l.SEARCH_LIMIT_CAP = m),
      (l.NON_SEARCH_LIMIT_CAP = p),
      (l.mediaHubShouldSearch = _),
      (l.useMediaHubSearchLog = f),
      (l.useMediaHubSearchLimit = g),
      (l.useMediaHubSearchStatus = h),
      (l.useMediaHubFilterByWithMe = y));
  },
  98,
);
