__d(
  "WAWebGifPanelKlipySearch",
  [
    "WAAbortError",
    "WALogger",
    "WAWebGifPanelConstants",
    "WAWebGifPanelGifInfo",
    "WAWebGifPanelGifSections",
    "WAWebKlipyApi",
    "WAWebNetworkStatus",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1048576,
      m = new Map();
    async function p(e, t, n) {
      var a = b(e);
      if (a != null) return a;
      var i = e === o("WAWebGifPanelGifSections").SECTIONS.TRENDING,
        l = i ? "trending" : "search",
        s;
      try {
        s = await o("WAWebKlipyApi").fetchKlipyPage({
          appKey: n,
          catalog: "gifs",
          contentFilter: "low",
          formatFilter: "mp4,gif,webp",
          page: 1,
          perPage: o("WAWebKlipyApi").KLIPY_MAX_PER_PAGE,
          query: i ? null : e,
          signal: t,
        });
      } catch (e) {
        if (t.aborted) throw new (o("WAAbortError").AbortError)();
        return (R(l, r("getErrorSafe")(e)), null);
      }
      var u = _(s.items, i);
      return (u.length > 0 && v(e, u), u);
    }
    function _(e, t) {
      var n = [];
      for (var r of e) {
        var o = g(r, t, n.length);
        o != null && n.push(o);
      }
      return (S(e.length, n.length, t), n);
    }
    function f(e) {
      var t,
        n,
        r,
        o,
        a = h(e == null || (t = e.sm) == null ? void 0 : t.mp4),
        i = h(e == null || (n = e.md) == null ? void 0 : n.mp4);
      return a != null
        ? i != null && y(i) && a.size > i.size
          ? i
          : a
        : [
            i,
            h(e == null || (r = e.hd) == null ? void 0 : r.mp4),
            h(e == null || (o = e.xs) == null ? void 0 : o.mp4),
          ].find(function (e) {
            return e != null && y(e);
          });
    }
    function g(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _ = e.file,
        g = f(_);
      return g == null
        ? null
        : new (o("WAWebGifPanelGifInfo").GifInfo)({
            accessibilityLabel:
              e.title != null && e.title !== "" ? e.title : null,
            nonVideoUrl:
              (r =
                (a =
                  (i =
                    _ == null || (l = _.sm) == null || (l = l.gif) == null
                      ? void 0
                      : l.url) != null
                    ? i
                    : _ == null || (s = _.sm) == null || (s = s.webp) == null
                      ? void 0
                      : s.url) != null
                  ? a
                  : _ == null || (u = _.md) == null || (u = u.gif) == null
                    ? void 0
                    : u.url) != null
                ? r
                : _ == null || (c = _.md) == null || (c = c.webp) == null
                  ? void 0
                  : c.url,
            previewUrl:
              (d =
                _ == null || (m = _.sm) == null || (m = m.mp4) == null
                  ? void 0
                  : m.url) != null
                ? d
                : _ == null || (p = _.md) == null || (p = p.mp4) == null
                  ? void 0
                  : p.url,
            provider: "klipy",
            rank: n,
            trending: t,
            url: g.url,
            width: C(g),
          });
    }
    function h(e) {
      var t,
        n = e == null ? void 0 : e.url;
      return e == null || n == null || n === ""
        ? null
        : {
            url: n,
            width: e.width,
            height: e.height,
            size: (t = e.size) != null ? t : 0,
          };
    }
    function y(e) {
      return e.size > 0 && e.size <= d;
    }
    function C(e) {
      var t = e.height,
        n = e.width;
      return n == null || t == null || n <= 0 || t <= 0
        ? o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT
        : Math.round((n * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT) / t);
    }
    function b(e) {
      var t = m.get(e);
      return t == null ||
        (m.delete(e),
        Date.now() - t.createdTimeMs >
          o("WAWebGifPanelConstants").GIF_SEARCH_CACHE_MAX_AGE_MS)
        ? null
        : (m.set(e, t), t.gifs);
    }
    function v(e, t) {
      if (
        (m.delete(e),
        m.size >= o("WAWebGifPanelConstants").GIF_SEARCH_CACHE_MAX_ENTRIES)
      ) {
        var n = m.keys().next().value;
        n != null && m.delete(n);
      }
      m.set(e, { gifs: t, createdTimeMs: Date.now() });
    }
    function S(t, n, r) {
      var a = t - n;
      if (a !== 0) {
        var i = r ? "trending" : "search";
        if (n === 0) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[gif_search] all ",
                  " klipy ",
                  " gifs skipped, check klipy response",
                ])),
              t,
              i,
            )
            .sendLogs("gif_search_klipy_all_skipped", {
              sampling: 0.01,
              employeeSampling: 1,
            });
          return;
        }
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[gif_search] skipped ",
              "/",
              " klipy ",
              " gifs",
            ])),
          a,
          t,
          i,
        );
      }
    }
    function R(e, t) {
      if (!r("WAWebNetworkStatus").online) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[gif_search] searchKlipy: ",
              " request failed while offline",
            ])),
          e,
        );
        return;
      }
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[gif_search] searchKlipy: ",
              " request failed",
            ])),
          e,
        )
        .catching(t)
        .sendLogs("gif_search_klipy_error", {
          sampling: 0.01,
          employeeSampling: 1,
        });
    }
    ((l.searchKlipy = p), (l.klipyItemsToGifs = _));
  },
  98,
);
