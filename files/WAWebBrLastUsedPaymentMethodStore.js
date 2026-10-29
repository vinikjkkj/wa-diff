__d(
  "WAWebBrLastUsedPaymentMethodStore",
  [
    "Promise",
    "WALogger",
    "WAWebBrLastUsedPaymentMethodCache",
    "WAWebFrontendMsgGetters",
    "WAWebPaymentsGatingUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "WABrLastUsedPaymentMethods",
      c = (s || (s = n("Promise"))).resolve();
    function d() {
      var e = o(
        "WAWebBrLastUsedPaymentMethodCache",
      ).prepareLastUsedBrPaymentMethodAccount();
      if (
        e == null ||
        o("WAWebBrLastUsedPaymentMethodCache").brLastUsedPaymentMethodCache
          .loaded
      )
        return (s || (s = n("Promise"))).resolve();
      if (
        o("WAWebBrLastUsedPaymentMethodCache").brLastUsedPaymentMethodCache
          .pendingWarm != null
      )
        return o("WAWebBrLastUsedPaymentMethodCache")
          .brLastUsedPaymentMethodCache.pendingWarm;
      var t = o("WAWebBrLastUsedPaymentMethodCache")
        .brLastUsedPaymentMethodCache.generation;
      o(
        "WAWebBrLastUsedPaymentMethodCache",
      ).brLastUsedPaymentMethodCache.pendingWarm = _(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            !(
              o(
                "WAWebBrLastUsedPaymentMethodCache",
              ).prepareLastUsedBrPaymentMethodAccount() !== e ||
              t !==
                o("WAWebBrLastUsedPaymentMethodCache")
                  .brLastUsedPaymentMethodCache.generation ||
              o("WAWebBrLastUsedPaymentMethodCache")
                .brLastUsedPaymentMethodCache.loaded
            ) &&
              ((o(
                "WAWebBrLastUsedPaymentMethodCache",
              ).brLastUsedPaymentMethodCache.entries = g({
                now: Date.now(),
                stored: f(
                  o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u),
                  e,
                ),
              })),
              (o(
                "WAWebBrLastUsedPaymentMethodCache",
              ).brLastUsedPaymentMethodCache.loaded = !0)));
        }),
      );
      var r = o("WAWebBrLastUsedPaymentMethodCache")
        .brLastUsedPaymentMethodCache.pendingWarm;
      return (
        r.finally(function () {
          t ===
            o("WAWebBrLastUsedPaymentMethodCache").brLastUsedPaymentMethodCache
              .generation &&
            o("WAWebBrLastUsedPaymentMethodCache").brLastUsedPaymentMethodCache
              .pendingWarm === r &&
            (o(
              "WAWebBrLastUsedPaymentMethodCache",
            ).brLastUsedPaymentMethodCache.pendingWarm = null);
        }),
        r
      );
    }
    function m(e, t) {
      if (!(t.trim() === "" || t === "UNKNOWN")) {
        var r = o("WAWebBrLastUsedPaymentMethodCache").getMerchantLid(e);
        if (
          !(
            r == null ||
            !o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(
              o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
            )
          )
        ) {
          var a = o(
            "WAWebBrLastUsedPaymentMethodCache",
          ).prepareLastUsedBrPaymentMethodAccount();
          if (a != null) {
            var i = Date.now(),
              l = o("WAWebBrLastUsedPaymentMethodCache")
                .brLastUsedPaymentMethodCache.generation;
            _(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
                  !(
                    o(
                      "WAWebBrLastUsedPaymentMethodCache",
                    ).prepareLastUsedBrPaymentMethodAccount() !== a ||
                    l !==
                      o("WAWebBrLastUsedPaymentMethodCache")
                        .brLastUsedPaymentMethodCache.generation
                  ) &&
                    ((o(
                      "WAWebBrLastUsedPaymentMethodCache",
                    ).brLastUsedPaymentMethodCache.entries = p(
                      f(
                        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u),
                        a,
                      ),
                      a + "|" + r,
                      t,
                      i,
                      Date.now(),
                    )),
                    (o(
                      "WAWebBrLastUsedPaymentMethodCache",
                    ).brLastUsedPaymentMethodCache.loaded = !0),
                    yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      u,
                      o("WAWebBrLastUsedPaymentMethodCache")
                        .brLastUsedPaymentMethodCache.entries,
                    )));
              }),
            );
          }
        }
      }
    }
    function p(e, t, n, r, o) {
      var a,
        i,
        l = h(e, o),
        s = (a = (i = l[t]) == null ? void 0 : i.t) != null ? a : 0;
      return s > r && s <= o
        ? g({ now: o, stored: l })
        : ((l[t] = { m: n, t: r }), g({ keep: t, now: o, stored: l }));
    }
    function _(t) {
      return (
        (c = c.then(t).catch(function () {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[BR_LAST_USED_PAYMENT_METHOD] storage operation failed",
                ])),
            )
            .sendLogs("br-last-used-payment-method-storage-failed");
        })),
        c
      );
    }
    function f(e, t) {
      return Object.fromEntries(
        Object.entries(h(e, Date.now())).filter(function (e) {
          var n = e[0];
          return n.startsWith(t + "|") && n.endsWith("@lid");
        }),
      );
    }
    function g(e) {
      var t = e.keep,
        n = e.now,
        r = e.stored,
        a = h(r, n),
        i = Object.keys(a).sort(function (e, t) {
          return a[t].t - a[e].t;
        }),
        l =
          t != null && a[t] != null
            ? [t].concat(
                i.filter(function (e) {
                  return e !== t;
                }),
              )
            : i;
      return Object.fromEntries(
        l
          .slice(0, o("WAWebBrLastUsedPaymentMethodCache").MAX_MERCHANTS)
          .map(function (e) {
            return [e, a[e]];
          }),
      );
    }
    function h(e, t) {
      var n = {};
      if (e == null || typeof e != "object" || Array.isArray(e)) return n;
      for (var r of Object.entries(e)) {
        var o = r[0],
          a = r[1],
          i = y(a, t);
        i != null && (n[o] = i);
      }
      return n;
    }
    function y(e, t) {
      if (e == null || typeof e != "object") return null;
      var n = e.m,
        r = e.t;
      return typeof n != "string" ||
        n.trim() === "" ||
        n === "UNKNOWN" ||
        typeof r != "number" ||
        !Number.isFinite(r) ||
        r < 0 ||
        r > t ||
        t - r > o("WAWebBrLastUsedPaymentMethodCache").RETENTION_MS
        ? null
        : { m: n, t: r };
    }
    ((l.MAX_MERCHANTS = o("WAWebBrLastUsedPaymentMethodCache").MAX_MERCHANTS),
      (l.RETENTION_MS = o("WAWebBrLastUsedPaymentMethodCache").RETENTION_MS),
      (l.resetLastUsedBrPaymentMethodCache = o(
        "WAWebBrLastUsedPaymentMethodCache",
      ).resetLastUsedBrPaymentMethodCache),
      (l.getCachedLastUsedBrPaymentMethod = o(
        "WAWebBrLastUsedPaymentMethodCache",
      ).getCachedLastUsedBrPaymentMethod),
      (l.warmLastUsedBrPaymentMethodCache = d),
      (l.recordLastUsedBrPaymentMethod = m),
      (l.updateLastUsedPaymentMethods = p));
  },
  98,
);
