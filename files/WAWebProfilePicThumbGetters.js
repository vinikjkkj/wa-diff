__d(
  "WAWebProfilePicThumbGetters",
  [
    "WAWebBizAiAssetResolver",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebProfilePicThumbHostUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { SINGLE: "SINGLE", GROUP: "GROUP" },
      s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createProfilePicThumbCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field,
      m = s.unsafeIdentityGetter,
      p = o("WAWebGetters").createGetterFactories({
        root: m,
        createCache: o("WAWebGettersCaches").createFrontendProfilePicThumbCache,
      }),
      _ = p.clearCacheFor,
      f = p.computed,
      g = p.field;
    function h(e) {
      (u(e), _(e));
    }
    function y(e) {
      return g(e);
    }
    var C = y("id"),
      b = y("tag"),
      v = y("raw"),
      S = y("stale"),
      R = y("eurl"),
      L = y("previewEurl"),
      E = y("fullDirectPath"),
      k = y("previewDirectPath"),
      I = y("filehash"),
      T = y("lastHostUsed"),
      D = y("aiHubProfileIsDarkTheme"),
      x = d("id"),
      $ = f(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5],
            u = e[6],
            c = e[7],
            d = e[8];
          if (r("WAWebWid").isAiHub(t))
            return o("WAWebBizAiAssetResolver").getAiHubProfileURL(d);
          if (a) return "data:image/jpeg;base64," + a;
          if (!n && i) return null;
          if (n)
            return s != null
              ? o("WAWebProfilePicThumbHostUtils").buildMms4DownloadUrl(s, u, c)
              : l;
        },
        [C, b, v, S, L, k, I, T, D],
      ),
      P = f(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5],
            u = e[6],
            c = e[7],
            d = e[8];
          if (r("WAWebWid").isAiHub(t))
            return o("WAWebBizAiAssetResolver").getAiHubProfileURL(d);
          if ((a || !n) && i) return null;
          if (!a && n)
            return s != null
              ? o("WAWebProfilePicThumbHostUtils").buildMms4DownloadUrl(s, u, c)
              : l;
        },
        [C, b, v, S, R, E, I, T, D],
      );
    function N(e) {
      var t = new Set(),
        n = new Set();
      function r(e) {
        e.forEach(function (e) {
          if (!n.has(e)) {
            n.add(e);
            var o = e.dependencyKey;
            o == null ? r(e.dependencies) : o !== "id" && t.add(o);
          }
        });
      }
      return (
        e.forEach(function (e) {
          return r(e.dependencies);
        }),
        Array.from(t, function (e) {
          return "change:" + e;
        }).join(" ")
      );
    }
    var M = N([$]),
      w = N([$, P]);
    function A(e) {
      return e != null ? $(e) : void 0;
    }
    function F(e) {
      return e != null ? P(e) : void 0;
    }
    var O = c(
      function (t) {
        var n = t[0];
        return r("WAWebWid").isUser(n)
          ? e.SINGLE
          : (r("WAWebWid").isGroup(n), e.GROUP);
      },
      [x],
    );
    ((l.FALLBACK = e),
      (l.clearProfilePicThumbGetterCacheFor = h),
      (l.getId = x),
      (l.getImg = $),
      (l.getImgFull = P),
      (l.IMG_ROOT_CHANGE_EVENTS = M),
      (l.IMG_OR_IMG_FULL_ROOT_CHANGE_EVENTS = w),
      (l.getMaybeImg = A),
      (l.getMaybeImgFull = F),
      (l.getFallbackType = O));
  },
  98,
);
