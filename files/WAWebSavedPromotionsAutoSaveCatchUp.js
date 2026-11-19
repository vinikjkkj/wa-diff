__d(
  "WAWebSavedPromotionsAutoSaveCatchUp",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebClock",
    "WAWebCmd",
    "WAWebDBReceivedTemplateMessages",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "WAWebSavedPromotionsAutoSave",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "WASavedPromotionsAutoSaveCoveredUpToT",
      c = null,
      d = !1,
      m = 0,
      p = 0,
      _ = (s || (s = n("Promise"))).resolve();
    function f(e) {
      if (
        (o("WAWebSavedPromotionsAutoSave").autoSavePromotionOnReceipt(e),
        e.t != null)
      ) {
        var t = Math.min(e.t, E());
        d
          ? o("WAWebCmd").Cmd.isOfflineDeliveryEnd && R(t)
          : (m = Math.max(m, t));
      }
    }
    function g() {
      ((d = !1), p++);
      var e = _.then(h).finally(function () {
        p--;
      });
      return ((_ = e.catch(r("WAWebNoop"))), e);
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t,
            n =
              (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                ? void 0
                : t.toString();
          if (n != null) {
            var r = yield v(n),
              a = o("WAWebChatCollection")
                .ChatCollection.getModelsArray()
                .filter(function (e) {
                  return e.id.isUser();
                }),
              i = E(),
              l = a.reduce(
                function (e, t) {
                  var n;
                  return Math.max(e, Math.min((n = t.t) != null ? n : 0, i));
                },
                r != null ? r : 0,
              );
            if (r != null) {
              var s = yield C(
                a.filter(function (e) {
                  var t;
                  return ((t = e.t) != null ? t : 0) > r;
                }),
                r + 1,
              );
              s > 0 &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[SAVED_PROMOTIONS] auto-save catch-up could not read ",
                        " chats",
                      ])),
                    s,
                  )
                  .sendLogs("saved-promotions-auto-save-catch-up-read-failed");
            }
            var u = l;
            (p === 1 && ((u = Math.max(l, m)), (m = 0), (d = !0)),
              !(r == null && u === 0) && (yield R(u, n)));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = 0;
          return (
            yield e.reduce(
              function (e, n) {
                return e
                  .then(o("WAWebReleaseToEventLoop").releaseToEventLoop)
                  .then(function () {
                    return o("WAWebDBReceivedTemplateMessages")
                      .getTemplatesReceivedSince(n.id, t)
                      .then(function (e) {
                        for (var t of [].concat(e).reverse())
                          o(
                            "WAWebSavedPromotionsAutoSave",
                          ).autoSavePromotionOnReceipt(t);
                      })
                      .catch(function () {
                        r++;
                      });
                  });
              },
              (s || (s = n("Promise"))).resolve(),
            ),
            r
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          if (((t = c) == null ? void 0 : t.account) !== e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
            var r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u);
            c =
              r != null && r.account === e && Number.isFinite(r.t)
                ? { account: e, t: r.t }
                : null;
          }
          return (n = c) == null ? void 0 : n.t;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t === void 0) {
            var n;
            t = (n = c) == null ? void 0 : n.account;
          }
          var r = c;
          t == null ||
            (r != null && r.account === t && r.t >= e) ||
            ((c = { account: t, t: e }),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(u, {
              account: t,
              t: e,
            }));
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return Math.floor(o("WAWebClock").Clock.getServerTimeMs() / 1e3);
    }
    ((l.receiveLiveOffer = f), (l.catchUpOnStoredOffers = g));
  },
  98,
);
