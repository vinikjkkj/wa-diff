__d(
  "WAWebBrLastUsedPaymentMethodCache",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebL10NCountryCodes",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 50,
      d = 2160 * 60 * 60 * 1e3,
      m = {
        entries: {},
        account: null,
        generation: 0,
        pendingWarm: null,
        loaded: !1,
      },
      p = !1,
      _ = !1;
    function f() {
      (m.generation++,
        (m.entries = {}),
        (m.account = null),
        (m.pendingWarm = null),
        (m.loaded = !1));
    }
    function g() {
      var e,
        t,
        n =
          (e =
            (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : t.toString()) != null
            ? e
            : null;
      return (n !== m.account && (f(), (m.account = n)), n);
    }
    function h(e) {
      var t,
        n = m.account;
      if (
        !m.loaded ||
        n == null ||
        ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) !== n
      )
        return null;
      var r = y(e),
        a = r == null ? null : m.entries[n + "|" + r],
        i = Date.now();
      return a != null && a.t <= i && i - a.t <= d ? a.m : null;
    }
    function y(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e.unsafe())) return null;
      var t = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
        n = t.accountLid;
      return t.id.isUser() && n != null && n.isLid() ? n.toString() : null;
    }
    function C() {
      p ||
        ((p = !0),
        o("WAWebCmd").Cmd.on("main_stream_mode_ready_from_bridge", L),
        o("WAWebCmd").Cmd.on("initial_load_ready_from_bridge", L),
        o("WAWebCmd").Cmd.on("starting_logout_from_bridge", k),
        o("WAWebCmd").Cmd.on("logout_from_bridge", k),
        o("WAWebCmd").Cmd.isMainStreamReadyMd === !0 && L());
    }
    function b() {
      return S(function (e) {
        var t = e.warmLastUsedBrPaymentMethodCache;
        return t();
      }, !0);
    }
    function v(e, t) {
      S(function (n) {
        var r = n.recordLastUsedBrPaymentMethod;
        return r(e, t);
      });
    }
    function S(e, t) {
      if ((t === void 0 && (t = !1), _ || !r("justknobx")._("2282")))
        return (u || (u = n("Promise"))).resolve();
      var o = g();
      if (o == null || (t && m.loaded))
        return (u || (u = n("Promise"))).resolve();
      var a = m.generation;
      return r("JSResourceForInteraction")("WAWebBrLastUsedPaymentMethodStore")
        .__setRef("WAWebBrLastUsedPaymentMethodCache")
        .load()
        .then(function (t) {
          if (g() === o && m.generation === a) return e(t);
        })
        .catch(R);
    }
    function R(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[BR_LAST_USED_PAYMENT_METHOD] store load failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("br-last-used-payment-method-load-failed");
    }
    function L() {
      var e;
      _ ||
        o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user,
        ) !== "BR" ||
        (E(), r("justknobx")._("2282") && b());
    }
    function E() {
      return r("JSResourceForInteraction")("WAWebBrOptionsToPayResolver")
        .__setRef("WAWebBrLastUsedPaymentMethodCache")
        .load()
        .then(function (e) {
          return e.preloadBrPaymentMethodWeights();
        })
        .catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BR_PAYMENT_METHOD_WEIGHTS] preload failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-method-weights-preload-failed");
        });
    }
    function k() {
      ((_ = !0), f());
    }
    ((l.MAX_MERCHANTS = c),
      (l.RETENTION_MS = d),
      (l.brLastUsedPaymentMethodCache = m),
      (l.resetLastUsedBrPaymentMethodCache = f),
      (l.prepareLastUsedBrPaymentMethodAccount = g),
      (l.getCachedLastUsedBrPaymentMethod = h),
      (l.getMerchantLid = y),
      (l.initLastUsedBrPaymentMethodCacheLifecycle = C),
      (l.warmLastUsedBrPaymentMethodCacheLazy = b),
      (l.recordLastUsedBrPaymentMethodLazy = v));
  },
  98,
);
