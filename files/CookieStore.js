__d(
  "CookieStore",
  ["CookieCoreLoggingConfig", "FBLogger", "Random", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES !=
        null
          ? window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES()
          : null,
      u = {
        set: function (t) {
          document.cookie = t;
        },
        get: function () {
          return document.cookie;
        },
      };
    function c() {
      return s != null ? s : u;
    }
    function d(e, t, n, r, o, a, i, l) {
      return (
        t +
        "=" +
        encodeURIComponent(n) +
        "; " +
        (a !== 0 && a !== void 0 && a !== null
          ? "expires=" + new Date(e + a).toUTCString() + "; "
          : "") +
        "path=" +
        r +
        "; domain=" +
        o +
        (i ? "; secure" : "") +
        (l ? "; SameSite=" + l : "")
      );
    }
    function m(e, t, n) {
      return (
        e +
        "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" +
        t +
        "; domain=" +
        n
      );
    }
    function p() {
      if (r("CookieCoreLoggingConfig").sampleRate > 0) {
        var t = (e || (e = r("performanceNow")))(),
          n = c().get(),
          o = e() - t,
          a =
            o > r("CookieCoreLoggingConfig").maximumIgnorableStallMs &&
            r("Random").coinflip(1 / r("CookieCoreLoggingConfig").sampleRate);
        return (
          a &&
            r("FBLogger")("cookie_infra")
              .addMetadata("COOKIE_INFRA", "WALL_TIME", String(o))
              .warn(
                "Cookie read exceeded %s milliseconds.",
                r("CookieCoreLoggingConfig").maximumIgnorableStallMs,
              ),
          n
        );
      } else return c().get();
    }
    var _ = (function () {
        function e() {
          this.$1 = 0;
        }
        var t = e.prototype;
        return (
          (t.setCookie = function (t, n, r, o, a, i, l, s) {
            c().set(d(t, n, r, o, a, i, l, s));
          }),
          (t.clearCookie = function (t, n, r) {
            c().set(m(t, n, r));
          }),
          (t.getCookie = function (t) {
            var e;
            this.$1++;
            var n =
              (e = p()) == null
                ? void 0
                : e.match("(?:^|;\\s*)" + t + "=(.*?)(?:;|$)");
            return n ? decodeURIComponent(n[1]) : null;
          }),
          e
        );
      })(),
      f = 10 * 1e3,
      g = (function () {
        function e() {
          ((this.$1 = {}), (this.$2 = 0), (this.$3 = 0), (this.$4 = 0));
        }
        var t = e.prototype;
        return (
          (t.setCookie = function (t, n, r, o, a, i, l, s) {
            (c().set(d(t, n, r, o, a, i, l, s)),
              (this.$1[n] = { value: r, updated: t }));
          }),
          (t.clearCookie = function (t, n, r) {
            (c().set(m(t, n, r)),
              (this.$1[t] = { value: null, updated: Date.now() }));
          }),
          (t.getCookie = function (t) {
            var e = this.$5(t),
              n = e.cookie;
            return n;
          }),
          (t.$5 = function (t) {
            var e = Date.now(),
              n = this.$1[t];
            return n
              ? n.updated + f < e
                ? (this.$6(), { cookie: this.$5(t).cookie, hit: !1 })
                : (this.$3++, { cookie: n.value, hit: !0 })
              : this.$2 + f < e
                ? (this.$6(), { cookie: this.$5(t).cookie, hit: !1 })
                : (this.$3++, { cookie: null, hit: !0 });
          }),
          (t.$6 = function () {
            var e, t;
            this.$4++;
            var n =
              (e = (t = p()) == null ? void 0 : t.split(";")) != null ? e : [];
            ((this.$2 = Date.now()), (this.$1 = {}));
            for (var r of n) {
              var o = r.match("\\s*([^=]+)=(.*)");
              o &&
                (this.$1[o[1]] = {
                  value: decodeURIComponent(o[2]),
                  updated: this.$2,
                });
            }
          }),
          e
        );
      })();
    function h() {
      return new _();
    }
    ((l.newCookieStore = h),
      (l.CookieCacheForTest = g),
      (l.CookieStoreSlowForTest = _));
  },
  98,
);
