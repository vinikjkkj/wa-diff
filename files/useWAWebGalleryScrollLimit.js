__d(
  "useWAWebGalleryScrollLimit",
  [
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubSearchUtils",
    "WAWebWamEnumActionCode",
    "react",
    "react-compiler-runtime",
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
      var i = o("react-compiler-runtime").c(26),
        l = t === void 0 ? !1 : t,
        s = n === void 0 ? !1 : n,
        m = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        p = m.searchQuery,
        _ = d(o("WAWebMediaHubSearchUtils").NON_SEARCH_LIMIT_CAP),
        f = _[0],
        g = _[1],
        h;
      i[0] !== p
        ? ((h = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(p)),
          (i[0] = p),
          (i[1] = h))
        : (h = i[1]);
      var y = h,
        C = c(!1),
        b = e.length > 0,
        v;
      i[2] !== l || i[3] !== b || i[4] !== y
        ? ((v = function () {
            l ||
              !b ||
              o("WAWebMediaHubLogger").logMediaHubAction({
                action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
                customFields: {
                  fromSearchResult: y,
                  searchResultsReturned: !0,
                },
              });
          }),
          (i[2] = l),
          (i[3] = b),
          (i[4] = y),
          (i[5] = v))
        : (v = i[5]);
      var S;
      (i[6] !== l || i[7] !== b || i[8] !== y || i[9] !== f
        ? ((S = [f, l, y, b]),
          (i[6] = l),
          (i[7] = b),
          (i[8] = y),
          (i[9] = f),
          (i[10] = S))
        : (S = i[10]),
        u(v, S));
      var R, L;
      (i[11] !== s
        ? ((R = function () {
            s && g(o("WAWebMediaHubSearchUtils").NON_SEARCH_LIMIT_CAP);
          }),
          (L = [s]),
          (i[11] = s),
          (i[12] = R),
          (i[13] = L))
        : ((R = i[12]), (L = i[13])),
        u(R, L));
      var E;
      i[14] !== e.hasMoreMsgs ||
      i[15] !== e.length ||
      i[16] !== f ||
      i[17] !== a
        ? ((E = function () {
            var t = f + o("WAWebMediaHubSearchUtils").NON_SEARCH_LIMIT_CAP;
            e.length >= f && g(t);
            var n = e.length <= t;
            if (n && e.hasMoreMsgs && C.current === !1) {
              var r;
              ((C.current = !0),
                a == null ||
                  (r = a()) == null ||
                  r.finally(function () {
                    C.current = !1;
                  }));
            }
          }),
          (i[14] = e.hasMoreMsgs),
          (i[15] = e.length),
          (i[16] = f),
          (i[17] = a),
          (i[18] = E))
        : (E = i[18]);
      var k = E,
        I;
      i[19] !== k
        ? ((I = function (t) {
            t.scrollTop + t.clientHeight * 0.5 >=
              t.scrollHeight - t.clientHeight && k();
          }),
          (i[19] = k),
          (i[20] = I))
        : (I = i[20]);
      var T = r("useWAWebThrottledCallback")(I, 150),
        D;
      i[21] !== T
        ? ((D = function (t) {
            T(t.currentTarget);
          }),
          (i[21] = T),
          (i[22] = D))
        : (D = i[22]);
      var x = D,
        $;
      return (
        i[23] !== x || i[24] !== f
          ? (($ = [f, x]), (i[23] = x), (i[24] = f), (i[25] = $))
          : ($ = i[25]),
        $
      );
    }
    l.default = m;
  },
  98,
);
