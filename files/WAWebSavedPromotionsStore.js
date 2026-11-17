__d(
  "WAWebSavedPromotionsStore",
  [
    "Promise",
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebCmd",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 50,
      m = "WASavedPromotions",
      p = { account: null, entries: null, generation: 0 },
      _ = new Set(),
      f = (c || (c = n("Promise"))).resolve(),
      g = !1,
      h = !1;
    function y() {
      return h || r("WAWebBrokerGlobalAppState").isLogoutInProgress;
    }
    function C(e) {
      var t;
      return (
        E() === p.account &&
        ((t = p.entries) == null
          ? void 0
          : t.some(function (t) {
              return t.messageKey === e;
            })) === !0
      );
    }
    function b() {
      return P(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t;
          return (e = (t = yield k()) == null ? void 0 : t.entries) != null
            ? e
            : null;
        }),
        null,
      );
    }
    function v(e) {
      var t = Date.now();
      return P(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield k();
          if (n == null) return !1;
          if (
            n.entries.some(function (t) {
              return t.messageKey === e;
            })
          )
            return !0;
          var r = [{ messageKey: e, savedAtMs: t }]
            .concat(n.entries)
            .slice(0, d);
          return T(n.account, n.generation, r);
        }),
        !1,
      );
    }
    function S(e) {
      if (e.length === 0) return (c || (c = n("Promise"))).resolve(!0);
      var t = new Set(e);
      return P(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield k();
          if (e == null) return !1;
          var n = e.entries.filter(function (e) {
            return !t.has(e.messageKey);
          });
          return n.length === e.entries.length
            ? !0
            : T(e.account, e.generation, n);
        }),
        !1,
      );
    }
    function R(e) {
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function L() {
      (N(), (f = (c || (c = n("Promise"))).resolve()), _.clear(), (h = !1));
    }
    function E() {
      var e, t;
      return (e =
        (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) != null
        ? e
        : null;
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = E();
          if (y() || e == null) return null;
          p.account !== e && (N(), (p.account = e));
          var t = p.generation;
          if (p.entries == null) {
            if (
              (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
              t !== p.generation)
            )
              return null;
            ((p.entries = x(
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(m),
              e,
            )),
              p.entries != null && $());
          }
          var n = p.entries;
          return n == null ? null : { account: e, entries: n, generation: t };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (y() || t !== p.generation) return !1;
          try {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(m, {
              account: e,
              entries: n.map(function (e) {
                var t = e.messageKey,
                  n = e.savedAtMs;
                return { k: t, t: n };
              }),
            });
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] write not persisted",
                  ])),
              )
              .sendLogs("saved-promotions-persist-failed");
          }
          return t !== p.generation ? !1 : ((p.entries = n), $(), !0);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      if (e == null) return [];
      if (typeof e != "object" || !Array.isArray(e.entries)) return null;
      if (e.account !== t) return [];
      var n = [];
      for (var r of e.entries)
        if (!(r == null || typeof r != "object")) {
          var o = r.k,
            a = r.t;
          typeof o == "string" &&
            typeof a == "number" &&
            Number.isFinite(a) &&
            n.push({ messageKey: o, savedAtMs: a });
        }
      return n;
    }
    function $() {
      _.forEach(function (t) {
        try {
          t();
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[SAVED_PROMOTIONS] listener failed",
                ])),
            )
            .sendLogs("saved-promotions-listener-failed");
        }
      });
    }
    function P(e, t) {
      M();
      var n = f.then(e).catch(function () {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[SAVED_PROMOTIONS] storage operation failed",
                ])),
            )
            .sendLogs("saved-promotions-storage-failed"),
          t
        );
      });
      return ((f = n), n);
    }
    function N() {
      (p.generation++, (p.account = null), (p.entries = null));
    }
    function M() {
      g ||
        ((g = !0),
        o("WAWebCmd").Cmd.on("starting_logout_from_bridge", w),
        o("WAWebCmd").Cmd.on("logout_from_bridge", w));
    }
    function w() {
      ((h = !0), N());
    }
    ((l.MAX_SAVED_PROMOTIONS = d),
      (l.isPromotionSaved = C),
      (l.loadSavedPromotions = b),
      (l.savePromotion = v),
      (l.removeSavedPromotions = S),
      (l.subscribeToSavedPromotions = R),
      (l.resetSavedPromotionsForTests = L));
  },
  98,
);
