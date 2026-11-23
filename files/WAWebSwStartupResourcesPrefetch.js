__d(
  "WAWebSwStartupResourcesPrefetch",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebStartupResourcesPrefetch",
    "WAWebSwObjectStores",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e4,
      u = "startup_resources_prefetch";
    async function c() {
      if (r("gkx")("27785"))
        try {
          await d();
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[startup-resources-prefetch] service worker run failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
    }
    async function d() {
      var e,
        t = _(await p().get(u)),
        n = Date.now(),
        r = t == null ? 1 / 0 : n - t.checkedAt;
      if (!(r >= 0 && r < o("WATimeUtils").HOUR_MILLISECONDS)) {
        var a = (e = t == null ? void 0 : t.rev) != null ? e : null;
        if (await m({ checkedAt: n, rev: a })) {
          var i = new AbortController();
          self.setTimeout(function () {
            return i.abort();
          }, s);
          var l = await o(
            "WAWebStartupResourcesPrefetch",
          ).prefetchStartupResources(a, i.signal);
          l != null && (await p().put(u, { checkedAt: n, rev: l }));
        }
      }
    }
    async function m(e) {
      await p().put(u, e);
      var t = _(await p().get(u));
      return (t == null ? void 0 : t.checkedAt) === e.checkedAt;
    }
    function p() {
      return new (r("WAWebSwObjectStores").ObjectStore)("prefs");
    }
    function _(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.checkedAt,
        n = e.rev;
      return typeof t != "number" || !Number.isFinite(t)
        ? null
        : { checkedAt: t, rev: typeof n == "number" ? n : null };
    }
    l.maybePrefetchStartupResources = c;
  },
  98,
);
