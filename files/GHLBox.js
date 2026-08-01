__d(
  "GHLBox",
  [
    "FBLogger",
    "GhlTennisKnobsConfig.experimental",
    "Promise",
    "WebStorage",
    "getErrorSafe",
    "gkx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("requireDeferred")("json-bigint").__setRef("GHLBox"),
      c = atob("YXJlc19sYXN0X3NpZ25hbF9mbHVzaA=="),
      d = atob("YmR6X3BsYXliYWNrX3N0YXRl"),
      m = 36,
      p = r("gkx")("20995"),
      _ =
        r("GhlTennisKnobsConfig.experimental").ghlbox_log_validity_in_mins *
        60 *
        1e3,
      f =
        r("GhlTennisKnobsConfig.experimental").ghlbox_initialize_in_mins *
        60 *
        1e3,
      g = 1,
      h = function () {
        return new (s || (s = n("Promise")))(function (e) {
          u.onReady(function (t) {
            var n = y(t, !0),
              r = y(t);
            return n === 0 && r === 0
              ? e(!1)
              : n !== r
                ? (b(Date.now()), e(!0))
                : Date.now() - r <= _
                  ? e(!0)
                  : e(!1);
          });
        });
      },
      y = function (n, o) {
        o === void 0 && (o = !1);
        var t = (e || (e = r("WebStorage"))).getLocalStorageForRead();
        if (!t || !p) return 0;
        var a, i;
        if (o) {
          var s, u;
          ((a =
            (s =
              (u = n.parse(t.getItem(d))) == null ? void 0 : u.session_key) !=
            null
              ? s
              : ""),
            (i = Number.parseInt(a, m)));
        } else {
          var l;
          ((a = (l = t.getItem(c)) != null ? l : ""),
            (i = Number.parseInt(a, 10)));
        }
        return Number.isFinite(i) ? i : 0;
      },
      C = function () {
        var t = (e || (e = r("WebStorage"))).getLocalStorage();
        !t ||
          !p ||
          (t.getItem(c) === null && t.getItem(d) === null && b(Date.now() - f));
      },
      b = function (n) {
        u.onReady(function (t) {
          var o = (e || (e = r("WebStorage"))).getLocalStorage();
          if (o && p) {
            var a = n.toString();
            try {
              o.setItem(c, a);
            } catch (e) {
              r("FBLogger")("GHLBox").warn(
                "Exception while writing to local storage exception: %s, tss: %s, tss.length: (%d)",
                r("getErrorSafe")(e).message,
                a,
                a.length,
              );
            }
            var i = { session_key: n.toString(m), buffer_length: 60 };
            o.setItem(d, t.stringify(i));
          }
        });
      },
      v = b,
      S = h,
      R = C;
    ((l.MinimumHiddenAdsToUpdateLocalStorage = g),
      (l.s = v),
      (l.r = S),
      (l.i = R));
  },
  98,
);
