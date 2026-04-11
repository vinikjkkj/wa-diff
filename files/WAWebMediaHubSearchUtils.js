__d(
  "WAWebMediaHubSearchUtils",
  [
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMsgGetters",
    "WAWebWamEnumActionCode",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        r = n.searchQuery,
        a = n.tab,
        i;
      t[0] !== r ? ((i = _(r)), (t[0] = r), (t[1] = i)) : (i = t[1]);
      var l = i,
        s;
      t[2] !== l || t[3] !== a || t[4] !== e
        ? ((s = function () {
            a === e &&
              o("WAWebMediaHubLogger").logMediaHubAction({
                customFields: { fromSearchResult: l },
              });
          }),
          (t[2] = l),
          (t[3] = a),
          (t[4] = e),
          (t[5] = s))
        : (s = t[5]);
      var u;
      (t[6] !== r || t[7] !== l || t[8] !== a || t[9] !== e
        ? ((u = [l, a, e, r]),
          (t[6] = r),
          (t[7] = l),
          (t[8] = a),
          (t[9] = e),
          (t[10] = u))
        : (u = t[10]),
        c(s, u));
    }
    function g() {
      var e = o("react-compiler-runtime").c(5),
        t = d(5),
        n = t[0],
        r = t[1],
        a;
      e[0] !== n
        ? ((a = function () {
            (o("WAWebMediaHubLogger").logMediaHubAction({
              action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
              customFields: { searchResultsReturned: !0 },
            }),
              r(n + m));
          }),
          (e[0] = n),
          (e[1] = a))
        : (a = e[1]);
      var i;
      return (
        e[2] !== n || e[3] !== a
          ? ((i = [n, a]), (e[2] = n), (e[3] = a), (e[4] = i))
          : (i = e[4]),
        i
      );
    }
    function h(e, t, n) {
      var r = o("react-compiler-runtime").c(11),
        a = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        i = a.searchQuery,
        l = a.setSearchStatusCaption,
        s = a.setSearchStatusSender,
        u = a.tab,
        d;
      r[0] !== i ? ((d = _(i)), (r[0] = i), (r[1] = d)) : (d = r[1]);
      var m = d,
        p,
        f;
      (r[2] !== t ||
      r[3] !== e ||
      r[4] !== l ||
      r[5] !== s ||
      r[6] !== m ||
      r[7] !== u ||
      r[8] !== n
        ? ((p = function () {
            if (u === n) {
              var r = m ? !t : null;
              e === "sender" ? s(r) : l(r);
            }
          }),
          (f = [m, t, e, s, l, u, n]),
          (r[2] = t),
          (r[3] = e),
          (r[4] = l),
          (r[5] = s),
          (r[6] = m),
          (r[7] = u),
          (r[8] = n),
          (r[9] = p),
          (r[10] = f))
        : ((p = r[9]), (f = r[10])),
        c(p, f));
    }
    function y() {
      var e = o("react-compiler-runtime").c(2),
        t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        n = t.filters,
        r;
      e[0] !== n
        ? ((r = function (t) {
            var e = o("WAWebMsgGetters").getIsSentByMe(t),
              r = n !== "others",
              a = n !== "you";
            return e ? r : a;
          }),
          (e[0] = n),
          (e[1] = r))
        : (r = e[1]);
      var a = r;
      return a;
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
