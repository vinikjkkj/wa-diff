__d(
  "WAWebSavedPromotionsAutoSaveCatchUp",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "WASavedPromotionsAutoSaveCoveredUpToT",
      u = null,
      c = !1,
      d = 0,
      m = 0,
      p = Promise.resolve();
    function _(e) {
      if (
        (o("WAWebSavedPromotionsAutoSave").autoSavePromotionOnReceipt(e),
        e.t != null)
      ) {
        var t = Math.min(e.t, b());
        c
          ? o("WAWebCmd").Cmd.isOfflineDeliveryEnd && C(t)
          : (d = Math.max(d, t));
      }
    }
    function f() {
      ((c = !1), m++);
      var e = p.then(g).finally(function () {
        m--;
      });
      return ((p = e.catch(r("WAWebNoop"))), e);
    }
    async function g() {
      var t,
        n =
          (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : t.toString();
      if (n != null) {
        var r = await y(n),
          a = o("WAWebChatCollection")
            .ChatCollection.getModelsArray()
            .filter(function (e) {
              return e.id.isUser();
            }),
          i = b(),
          l = a.reduce(
            function (e, t) {
              var n;
              return Math.max(e, Math.min((n = t.t) != null ? n : 0, i));
            },
            r != null ? r : 0,
          );
        if (r != null) {
          var s = await h(
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
        (m === 1 && ((u = Math.max(l, d)), (d = 0), (c = !0)),
          !(r == null && u === 0) && (await C(u, n)));
      }
    }
    async function h(e, t) {
      var n = 0;
      return (
        await e.reduce(function (e, r) {
          return e
            .then(o("WAWebReleaseToEventLoop").releaseToEventLoop)
            .then(function () {
              return o("WAWebDBReceivedTemplateMessages")
                .getTemplatesReceivedSince(r.id, t)
                .then(function (e) {
                  for (var t of [].concat(e).reverse())
                    o(
                      "WAWebSavedPromotionsAutoSave",
                    ).autoSavePromotionOnReceipt(t);
                })
                .catch(function () {
                  n++;
                });
            });
        }, Promise.resolve()),
        n
      );
    }
    async function y(e) {
      var t, n;
      if (((t = u) == null ? void 0 : t.account) !== e) {
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
        var r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
        u =
          r != null && r.account === e && Number.isFinite(r.t)
            ? { account: e, t: r.t }
            : null;
      }
      return (n = u) == null ? void 0 : n.t;
    }
    async function C(e, t) {
      if (t === void 0) {
        var n;
        t = (n = u) == null ? void 0 : n.account;
      }
      var r = u;
      t == null ||
        (r != null && r.account === t && r.t >= e) ||
        ((u = { account: t, t: e }),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, {
          account: t,
          t: e,
        }));
    }
    function b() {
      return Math.floor(o("WAWebClock").Clock.getServerTimeMs() / 1e3);
    }
    ((l.receiveLiveOffer = _), (l.catchUpOnStoredOffers = f));
  },
  98,
);
