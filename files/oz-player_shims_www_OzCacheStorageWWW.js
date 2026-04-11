__d(
  "oz-player/shims/www/OzCacheStorageWWW",
  ["WebStorage", "fb-error", "oz-player/shims/www/ozReportUnexpectedErrorWWW"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "_oz_",
      u = "_@_",
      c = (e || (e = r("WebStorage"))).getLocalStorage(),
      d = 5,
      m = 0,
      p = 5,
      _ = 0,
      f = {
        get: function (t) {
          try {
            if (c == null) {
              if (m < d)
                throw r("fb-error").err(
                  "WebStorage getLocalStorage returned nullish",
                );
              return null;
            }
            var e = c.getItem(s + t);
            return (
              typeof e == "string" &&
                e.startsWith(u) &&
                (e = e.substring(u.length)),
              e
            );
          } catch (e) {
            return (
              m < d &&
                (++m,
                r("oz-player/shims/www/ozReportUnexpectedErrorWWW")(
                  e,
                  'OzCacheStorageWWW.get "' + t + '" exception',
                  "warn",
                )),
              null
            );
          }
        },
        set: function (t, n) {
          try {
            if (c == null) {
              if (_ < p)
                throw r("fb-error").err(
                  "WebStorage getLocalStorage returned nullish",
                );
              return;
            }
            c.setItem(s + t, n);
          } catch (e) {
            _ < p &&
              (++_,
              r("oz-player/shims/www/ozReportUnexpectedErrorWWW")(
                e,
                'OzCacheStorageWWW.set "' + t + '" exception',
                "warn",
              ));
          }
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
