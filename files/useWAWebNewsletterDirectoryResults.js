__d(
  "useWAWebNewsletterDirectoryResults",
  [
    "WAWebNetworkStatus",
    "WAWebNewsletterDirectorySearchAction",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef,
      d = s.useState,
      m = function (t, n, r) {
        if (t == null) return [];
        var e = t.map(function (e, t) {
          return {
            type: "NEWSLETTER_DIRECTORY_CELL",
            itemKey: "newsletter-" + e.id.toString(),
            newsletter: e,
            chatEntryPoint: n,
            index: t,
            directoryFunnelLogger: r,
          };
        });
        return e;
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.category,
        a = e.chatEntryPoint,
        i = e.countryCode,
        l = e.listView,
        s = e.newsletterDirectoryFunnelLogger,
        u = e.searchText,
        p = e.skipSubscribedNewsletters,
        f = c(""),
        g = c(!1),
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (t[0] = h))
        : (h = t[0]);
      var y = d(h),
        C = y[0],
        b = y[1],
        v = d(!1),
        S = v[0],
        R = v[1],
        L = d(!1),
        E = L[0],
        k = L[1],
        I;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = []), (t[1] = I))
        : (I = t[1]);
      var T = d(I),
        D = T[0],
        x = T[1],
        $ = d(!1),
        P = $[0],
        N = $[1],
        M = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          _,
        ),
        w;
      t[2] !== n ||
      t[3] !== a ||
      t[4] !== i ||
      t[5] !== l ||
      t[6] !== s ||
      t[7] !== u ||
      t[8] !== p
        ? ((w = function () {
            var e = u.trim(),
              t = e !== "";
            return (
              s.setSearchMode(t),
              o("WAWebNewsletterDirectorySearchAction")
                .fetchNewsletterDirectories({
                  countryCodes: i === "" ? [] : [i],
                  searchText: e,
                  view: l,
                  cursorToken: f.current,
                  categories: n == null ? [] : [n.type],
                  skipSubscribedNewsletters: p,
                })
                .then(function (e) {
                  var t,
                    n = e.newsletters,
                    r = e.pageInfo,
                    o = e.subscribedNewsletters;
                  ((f.current =
                    (t = r == null ? void 0 : r.endCursor) != null ? t : ""),
                    (g.current = (r == null ? void 0 : r.hasNextPage) === !0));
                  var i = m(n, a, s),
                    l = m(o, a, s);
                  return [i, l];
                })
                .catch(function (e) {
                  throw (s.logServerError(), e);
                })
            );
          }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = l),
          (t[6] = s),
          (t[7] = u),
          (t[8] = p),
          (t[9] = w))
        : (w = t[9]);
      var A = w,
        F;
      t[10] !== A || t[11] !== M || t[12] !== S
        ? ((F = function () {
            !M &&
              !S &&
              (N(!0),
              (f.current = ""),
              (g.current = !1),
              A()
                .then(function (e) {
                  var t = e[0],
                    n = e[1];
                  (b(t), x(n));
                })
                .catch(function () {
                  R(!0);
                })
                .finally(function () {
                  N(!1);
                }));
          }),
          (t[10] = A),
          (t[11] = M),
          (t[12] = S),
          (t[13] = F))
        : (F = t[13]);
      var O = F,
        B;
      t[14] !== A || t[15] !== C || t[16] !== D
        ? ((B = function () {
            (k(!0),
              A()
                .then(function (e) {
                  var t = e[0],
                    n = e[1];
                  (b([].concat(C, t)), x([].concat(D, n)));
                })
                .finally(function () {
                  k(!1);
                }));
          }),
          (t[14] = A),
          (t[15] = C),
          (t[16] = D),
          (t[17] = B))
        : (B = t[17]);
      var W = B,
        q;
      t[18] !== E
        ? ((q = function () {
            return g.current === !0 && !E;
          }),
          (t[18] = E),
          (t[19] = q))
        : (q = t[19]);
      var U = q,
        V;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = function () {
            return g.current;
          }),
          (t[20] = V))
        : (V = t[20]);
      var H = V,
        G;
      return (
        t[21] !== P ||
        t[22] !== E ||
        t[23] !== W ||
        t[24] !== C ||
        t[25] !== S ||
        t[26] !== U ||
        t[27] !== D ||
        t[28] !== O
          ? ((G = [C, U, O, W, H, P, E, S, R, D]),
            (t[21] = P),
            (t[22] = E),
            (t[23] = W),
            (t[24] = C),
            (t[25] = S),
            (t[26] = U),
            (t[27] = D),
            (t[28] = O),
            (t[29] = G))
          : (G = t[29]),
        G
      );
    }
    function _() {
      return !r("WAWebNetworkStatus").online;
    }
    l.useNewsletterDirectoryResults = p;
  },
  98,
);
