__d(
  "WAWebClearFalcoBufferApi",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebLocalStorage",
    "WAWebODS",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 1048576,
      h = g,
      y = 100 * 1024,
      C = g,
      b = 5 * g,
      v = 10 * g;
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (r("WAWebLocalStorage") == null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] localStorage is not available",
                ])),
            );
            return;
          }
          try {
            var n = t.keysToRemove,
              a = t.totalBytes;
            (n.forEach(function (e) {
              try {
                r("WAWebLocalStorage").removeItem(e);
              } catch (t) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[falco] Failed to remove falco key ",
                      ": ",
                      "",
                    ])),
                  e,
                  t,
                );
              }
            }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] Cleared ",
                    " falco keys, total size: ",
                    " bytes",
                  ])),
                n.length,
                a,
              ));
          } catch (e) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] Error during falco buffer clearing: ",
                  "",
                ])),
              e,
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebABProps").getABPropConfigValue(
              "wa_web_falco_clear_local_storage_queue_enabled",
            )
          )
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] skip: clear_local_storage_queue ABProp disabled",
                  ])),
              ),
              { shouldClear: !1, keysToRemove: [], totalBytes: 0 }
            );
          try {
            var e = k(),
              t = e.keysToRemove,
              n = e.totalBytes;
            if (n < y)
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[falco] skip: size ",
                      "B < min ",
                      "B",
                    ])),
                  n,
                  y,
                ),
                { shouldClear: !1, keysToRemove: [], totalBytes: 0 }
              );
            var a = !1,
              i = "";
            if (
              (r("gkx")("17038")
                ? n > h
                  ? ((a = !0),
                    (i =
                      "Falco logs occupy " +
                      n +
                      " bytes (over " +
                      h +
                      " bytes limit)"))
                  : (yield o(
                      "WAWebStorageErrorHandlingUtils",
                    ).isQuotaActuallyExceeded()) &&
                    ((a = !0), (i = "Storage Quota is Exceeded"))
                : ((a = !0),
                  (i = "wa_web_falco_banzai_enabled GK is disabled")),
              a)
            )
              return (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[falco] Falco buffer will be cleared. Reason: ",
                      "",
                    ])),
                  i,
                ),
                { shouldClear: !0, keysToRemove: t, totalBytes: n }
              );
          } catch (e) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] Error during falco buffer clearing: ",
                  "",
                ])),
              e,
            );
          }
          return (
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] Skipping Falco Buffer Clear",
                ])),
            ),
            { shouldClear: !1, keysToRemove: [], totalBytes: 0 }
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      if (r("WAWebLocalStorage") == null)
        return { totalBytes: 0, keysToRemove: [] };
      var e = Object.keys(r("WAWebLocalStorage")),
        t = [],
        n = 0;
      for (var o of e)
        if (o.includes("falco_queue_log")) {
          var a,
            i = (a = r("WAWebLocalStorage")[o]) != null ? a : "";
          ((n += (o + i).length), t.push(o));
        }
      return (
        n >= v
          ? r("WAWebODS").incr("web.falco.buffer_size.over_10mb")
          : n >= b
            ? r("WAWebODS").incr("web.falco.buffer_size.over_5mb")
            : n >= C && r("WAWebODS").incr("web.falco.buffer_size.over_1mb"),
        { totalBytes: n, keysToRemove: t }
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield L(),
            t = e.keysToRemove,
            n = e.shouldClear,
            r = e.totalBytes;
          n && (yield S({ keysToRemove: t, totalBytes: r }));
        })),
        T.apply(this, arguments)
      );
    }
    ((l.clearFalcoBuffer = S),
      (l.getFalcoBufferClearConfig = L),
      (l.maybeClearFalcoBuffer = I));
  },
  98,
);
