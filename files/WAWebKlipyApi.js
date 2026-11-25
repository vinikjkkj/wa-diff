__d(
  "WAWebKlipyApi",
  [
    "WAWebKlipyAppKey",
    "WAWebL10N",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "https://api.klipy.com/api/v1",
      s = 100;
    async function u(t) {
      var n,
        a,
        i = t.appKey,
        l = i === void 0 ? o("WAWebKlipyAppKey").getKlipyKey() : i,
        s = t.aspectRatio,
        u = t.catalog,
        d = t.contentFilter,
        m = t.formatFilter,
        p = t.page,
        _ = t.perPage,
        f = t.query,
        g = t.signal;
      if (l === "") throw r("err")("Klipy app key is not set");
      var h = f != null && f !== "" ? "search" : "trending",
        y = { page: p, per_page: _, content_filter: d, format_filter: m },
        C = c();
      (C != null && (y.locale = C),
        h === "search" && f != null && (y.q = f),
        s != null &&
          ((y.aspect_ratio_min = s.min), (y.aspect_ratio_max = s.max)));
      var b = r("WAWebURLUtils").build(e + "/" + l + "/" + u + "/" + h, y),
        v = await r("WAWebPonyfillsFetch")(b, {
          signal: g,
          referrerPolicy: "no-referrer",
        });
      if (!v.ok)
        throw r("err")(
          "Klipy " + u + " " + h + " failed with HTTP " + v.status,
        );
      var S = await v.json(),
        R = S == null || (n = S.data) == null ? void 0 : n.data;
      if ((S == null ? void 0 : S.result) !== !0 || !Array.isArray(R))
        throw r("err")("Invalid Klipy " + u + " " + h + " response");
      return {
        items: R.filter(function (e) {
          return e != null && typeof e == "object" && e.type !== "ad";
        }),
        hasNext: ((a = S.data) == null ? void 0 : a.has_next) === !0,
      };
    }
    function c() {
      var e = r("WAWebL10N").getLanguage().toLowerCase();
      if (e === "") return null;
      var t;
      try {
        t = r("WAWebL10N").getRegion().toUpperCase();
      } catch (t) {
        return e;
      }
      return /^[A-Z]{2}$/.test(t) ? e + "_" + t : e;
    }
    ((l.KLIPY_MAX_PER_PAGE = s),
      (l.fetchKlipyPage = u),
      (l.getKlipyLocale = c));
  },
  98,
);
