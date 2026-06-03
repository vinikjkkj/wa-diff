__d(
  "WAWebUserPrefsStatus",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebModelStorageUtils",
    "WAWebSendMsgCommonApi",
    "WAWebStatusContactUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.list,
        n = e.setting;
      if (n === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact)
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
          n,
        );
      var r = c({
        setting: n,
        allowList:
          n === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
            ? t
            : void 0,
        denyList:
          n === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
            ? t
            : void 0,
      });
      return o(
        "WAWebUserPrefsIndexedDBStorage",
      ).userPrefsIdb.bulkSetItemsToIndexedDB(r);
    }
    function c(e) {
      var t = [],
        n = e.allowList,
        r = e.denyList,
        a = e.setting;
      return (
        a != null &&
          t.push({
            key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .STATUS_PRIVACY_SETTING,
            value: a,
          }),
        n != null &&
          t.push({
            key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_ALLOW_LIST,
            value: Array.from(
              new Set(
                n.map(function (e) {
                  return String(o("WAWebWidFactory").asUserWidOrThrow(e));
                }),
              ),
            ),
          }),
        r != null &&
          t.push({
            key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_DENY_LIST,
            value: Array.from(
              new Set(
                r.map(function (e) {
                  return String(o("WAWebWidFactory").asUserWidOrThrow(e));
                }),
              ),
            ),
          }),
        t
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
            ) || o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "UserPrefsStatus: staring to getStatusAllowList",
              ])),
          );
          var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_ALLOW_LIST,
          );
          return t != null ? t.map(o("WAWebWidFactory").createWid) : [];
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "UserPrefsStatus: staring to getStatusDenyList",
              ])),
          );
          var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_DENY_LIST,
          );
          return e != null ? e.map(o("WAWebWidFactory").createWid) : [];
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs", "contact"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield d(),
                  t;
                switch (e) {
                  case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .AllowList:
                    return {
                      setting: o("WAWebUserPrefsStatusType")
                        .StatusPrivacySettingType.AllowList,
                      list: yield p(),
                    };
                  case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .DenyList:
                    return (
                      (t = new Set((yield f()).map(String))),
                      {
                        setting: o("WAWebUserPrefsStatusType")
                          .StatusPrivacySettingType.DenyList,
                        list: (yield o(
                          "WAWebStatusContactUtils",
                        ).getStatusContacts()).filter(function (e) {
                          var n = e.isUser()
                              ? o("WAWebApiContact").getAlternateUserWid(
                                  o("WAWebWidFactory").asUserWidOrThrow(e),
                                )
                              : null,
                            r = t.has(e.toString()),
                            a = n == null ? !1 : t.has(n.toString());
                          return !r && !a;
                        }),
                      }
                    );
                  case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .Contact:
                    return {
                      setting: o("WAWebUserPrefsStatusType")
                        .StatusPrivacySettingType.Contact,
                      list: yield o(
                        "WAWebStatusContactUtils",
                      ).getStatusContacts(),
                    };
                }
              }),
            );
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
            ) === !0
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
            ) === !0
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
            e,
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
            e,
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
            ) === !0
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
            e,
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield d(),
                  t = yield p(),
                  n = yield f();
                return { setting: e, allowList: t, denyList: n };
              }),
            );
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
          );
          return e || { rotateKey: !1, senderKey: new Set() };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield N(),
                  n = t.rotateKey ? new Set() : t.senderKey;
                (e.forEach(function (e) {
                  n.add(String(e));
                }),
                  yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                    o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                    { rotateKey: !1, senderKey: n },
                  ));
              }),
            );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield N();
                if (!t.rotateKey) {
                  var n = e.some(function (e) {
                    return t.senderKey.has(String(e));
                  });
                  n &&
                    (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                        .STATUS_SENDER_KEY,
                      { rotateKey: !0, senderKey: new Set() },
                    ));
                }
              }),
            );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield N();
                (e.forEach(function (e) {
                  if ((t.senderKey.delete(String(e)), e.isUser())) {
                    var n = o("WAWebApiContact").getAlternateUserWid(
                      o("WAWebWidFactory").asUserWidOrThrow(e),
                    );
                    n != null && t.senderKey.delete(String(n));
                  }
                }),
                  yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                    o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                    { rotateKey: t.rotateKey, senderKey: t.senderKey },
                  ));
              }),
            );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield N();
          if (t.rotateKey || t.senderKey.size === 0)
            return {
              rotateKey: t.rotateKey,
              skDistribList: e,
              participantList: [],
            };
          var n = [],
            r = [],
            a = 0;
          return (
            e.forEach(function (e) {
              t.senderKey.has(String(e))
                ? (o("WAWebSendMsgCommonApi").isPrimaryDevice(e) && n.push(e),
                  a++)
                : o("WAWebUserPrefsMeUser").isMeDevice(e) || r.push(e);
            }),
            a < t.senderKey.size
              ? (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                  { rotateKey: !0, senderKey: new Set() },
                ),
                { rotateKey: !0, skDistribList: e, participantList: [] })
              : { rotateKey: t.rotateKey, skDistribList: r, participantList: n }
          );
        })),
        U.apply(this, arguments)
      );
    }
    var V = {
      setStatusPrivacyConfig: u,
      calculateStatusPrivacyUpdateEntries: c,
      getStatusPrivacySetting: d,
      getStatusAllowList: p,
      getStatusDenyList: f,
      getShareToFB: C,
      getShareToIG: v,
      persistShareToFB: R,
      persistShareToIG: E,
      getStatusReshareAllowed: I,
      persistStatusReshareAllowed: D,
      getStatusSenderKeyMap: N,
      getStatusSkDistribList: q,
      markStatusHasSenderKey: w,
      getStatusContacts: o("WAWebStatusContactUtils").getStatusContacts,
      getStatusList: h,
      getStatusPrivacySettingConfig: $,
      markForgetStatusSenderKey: B,
      markStatusSenderKeyRotate: F,
    };
    l.default = V;
  },
  98,
);
