__d(
  "useWAWebNewsletterDirectoryResults",
  [
    "WAWebNetworkStatus",
    "WAWebNewsletterDirectorySearchAction",
    "react",
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
      var t = e.category,
        n = e.chatEntryPoint,
        a = e.countryCode,
        i = e.listView,
        l = e.newsletterDirectoryFunnelLogger,
        s = e.searchText,
        p = e.skipSubscribedNewsletters,
        _ = c(""),
        f = c(!1),
        g = d([]),
        h = g[0],
        y = g[1],
        C = d(!1),
        b = C[0],
        v = C[1],
        S = d(!1),
        R = S[0],
        L = S[1],
        E = d([]),
        k = E[0],
        I = E[1],
        T = d(!1),
        D = T[0],
        x = T[1],
        $ = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          function () {
            return !r("WAWebNetworkStatus").online;
          },
        ),
        P = u(
          function () {
            var e = s.trim(),
              r = e !== "";
            return (
              l.setSearchMode(r),
              o("WAWebNewsletterDirectorySearchAction")
                .fetchNewsletterDirectories({
                  countryCodes: a === "" ? [] : [a],
                  searchText: e,
                  view: i,
                  cursorToken: _.current,
                  categories: t == null ? [] : [t.type],
                  skipSubscribedNewsletters: p,
                })
                .then(function (e) {
                  var t,
                    r = e.newsletters,
                    o = e.pageInfo,
                    a = e.subscribedNewsletters;
                  ((_.current =
                    (t = o == null ? void 0 : o.endCursor) != null ? t : ""),
                    (f.current = (o == null ? void 0 : o.hasNextPage) === !0));
                  var i = m(r, n, l),
                    s = m(a, n, l);
                  return [i, s];
                })
                .catch(function (e) {
                  throw (l.logServerError(), e);
                })
            );
          },
          [s, l, a, i, t, p, n],
        ),
        N = u(
          function () {
            !$ &&
              !b &&
              (x(!0),
              (_.current = ""),
              (f.current = !1),
              P()
                .then(function (e) {
                  var t = e[0],
                    n = e[1];
                  (y(t), I(n));
                })
                .catch(function () {
                  v(!0);
                })
                .finally(function () {
                  x(!1);
                }));
          },
          [$, b, P],
        ),
        M = u(
          function () {
            (L(!0),
              P()
                .then(function (e) {
                  var t = e[0],
                    n = e[1];
                  (y([].concat(h, t)), I([].concat(k, n)));
                })
                .finally(function () {
                  L(!1);
                }));
          },
          [P, h, k],
        ),
        w = u(
          function () {
            return f.current === !0 && !R;
          },
          [R],
        ),
        A = u(function () {
          return f.current;
        }, []);
      return [h, w, N, M, A, D, R, b, v, k];
    }
    l.useNewsletterDirectoryResults = p;
  },
  98,
);
