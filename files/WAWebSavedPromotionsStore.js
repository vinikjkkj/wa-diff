__d(
  "WAWebSavedPromotionsStore",
  [
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebCmd",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 50,
      d = "WASavedPromotions",
      m = { account: null, entries: null, generation: 0 },
      p = new Set(),
      _ = Promise.resolve(),
      f = !1,
      g = !1;
    function h() {
      return g || r("WAWebBrokerGlobalAppState").isLogoutInProgress;
    }
    function y(e) {
      var t;
      return (
        R() === m.account &&
        ((t = m.entries) == null
          ? void 0
          : t.some(function (t) {
              return t.messageKey === e;
            })) === !0
      );
    }
    function C() {
      return T(async function () {
        var e, t;
        return (e = (t = await L()) == null ? void 0 : t.entries) != null
          ? e
          : null;
      }, null);
    }
    function b(e) {
      var t = Date.now();
      return T(async function () {
        var n = await L();
        if (n == null) return !1;
        if (
          n.entries.some(function (t) {
            return t.messageKey === e;
          })
        )
          return !0;
        var r = [{ messageKey: e, savedAtMs: t }].concat(n.entries).slice(0, c);
        return E(n.account, n.generation, r);
      }, !1);
    }
    function v(e) {
      if (e.length === 0) return Promise.resolve(!0);
      var t = new Set(e);
      return T(async function () {
        var e = await L();
        if (e == null) return !1;
        var n = e.entries.filter(function (e) {
          return !t.has(e.messageKey);
        });
        return n.length === e.entries.length
          ? !0
          : E(e.account, e.generation, n);
      }, !1);
    }
    function S(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function R() {
      var e, t;
      return (e =
        (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) != null
        ? e
        : null;
    }
    async function L() {
      var e = R();
      if (h() || e == null) return null;
      m.account !== e && (D(), (m.account = e));
      var t = m.generation;
      if (m.entries == null) {
        if (
          (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
          t !== m.generation)
        )
          return null;
        ((m.entries = k(
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(d),
          e,
        )),
          m.entries != null && I());
      }
      var n = m.entries;
      return n == null ? null : { account: e, entries: n, generation: t };
    }
    async function E(t, n, r) {
      if (h() || n !== m.generation) return !1;
      try {
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(d, {
          account: t,
          entries: r.map(function (e) {
            var t = e.messageKey,
              n = e.savedAtMs;
            return { k: t, t: n };
          }),
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] write not persisted",
              ])),
          )
          .sendLogs("saved-promotions-persist-failed");
      }
      return n !== m.generation ? !1 : ((m.entries = r), I(), !0);
    }
    function k(e, t) {
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
    function I() {
      p.forEach(function (e) {
        try {
          e();
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[SAVED_PROMOTIONS] listener failed",
                ])),
            )
            .sendLogs("saved-promotions-listener-failed");
        }
      });
    }
    function T(e, t) {
      x();
      var n = _.then(e).catch(function () {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[SAVED_PROMOTIONS] storage operation failed",
                ])),
            )
            .sendLogs("saved-promotions-storage-failed"),
          t
        );
      });
      return ((_ = n), n);
    }
    function D() {
      (m.generation++, (m.account = null), (m.entries = null));
    }
    function x() {
      f ||
        ((f = !0),
        o("WAWebCmd").Cmd.on("starting_logout_from_bridge", $),
        o("WAWebCmd").Cmd.on("logout_from_bridge", $));
    }
    function $() {
      ((g = !0), D());
    }
    ((l.MAX_SAVED_PROMOTIONS = c),
      (l.isPromotionSaved = y),
      (l.loadSavedPromotions = C),
      (l.savePromotion = b),
      (l.removeSavedPromotions = v),
      (l.subscribeToSavedPromotions = S));
  },
  98,
);
