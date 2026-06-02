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
    async function d() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
        ) || o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
      );
    }
    async function m() {
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
    }
    async function p() {
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
    }
    async function _() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs", "contact"], async function () {
          var e = await d(),
            t;
          switch (e) {
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .AllowList:
              return {
                setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .AllowList,
                list: await m(),
              };
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .DenyList:
              return (
                (t = new Set((await p()).map(String))),
                {
                  setting: o("WAWebUserPrefsStatusType")
                    .StatusPrivacySettingType.DenyList,
                  list: (
                    await o("WAWebStatusContactUtils").getStatusContacts()
                  ).filter(function (e) {
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
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
              return {
                setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .Contact,
                list: await o("WAWebStatusContactUtils").getStatusContacts(),
              };
          }
        });
    }
    async function f() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
        ) === !0
      );
    }
    async function g() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
        ) === !0
      );
    }
    async function h(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
        e,
      );
    }
    async function y(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
        e,
      );
    }
    async function C() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
        ) === !0
      );
    }
    async function b(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
        e,
      );
    }
    async function v() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var e = await d(),
            t = await m(),
            n = await p();
          return { setting: e, allowList: t, denyList: n };
        });
    }
    async function S() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
      );
      return e || { rotateKey: !1, senderKey: new Set() };
    }
    async function R(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var t = await S(),
            n = t.rotateKey ? new Set() : t.senderKey;
          (e.forEach(function (e) {
            n.add(String(e));
          }),
            await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
              { rotateKey: !1, senderKey: n },
            ));
        });
    }
    async function L(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var t = await S();
          if (!t.rotateKey) {
            var n = e.some(function (e) {
              return t.senderKey.has(String(e));
            });
            n &&
              (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                { rotateKey: !0, senderKey: new Set() },
              ));
          }
        });
    }
    async function E(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var t = await S();
          (e.forEach(function (e) {
            if ((t.senderKey.delete(String(e)), e.isUser())) {
              var n = o("WAWebApiContact").getAlternateUserWid(
                o("WAWebWidFactory").asUserWidOrThrow(e),
              );
              n != null && t.senderKey.delete(String(n));
            }
          }),
            await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
              { rotateKey: t.rotateKey, senderKey: t.senderKey },
            ));
        });
    }
    async function k(e) {
      var t = await S();
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
            ? (o("WAWebSendMsgCommonApi").isPrimaryDevice(e) && n.push(e), a++)
            : o("WAWebUserPrefsMeUser").isMeDevice(e) || r.push(e);
        }),
        a < t.senderKey.size
          ? (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
              { rotateKey: !0, senderKey: new Set() },
            ),
            { rotateKey: !0, skDistribList: e, participantList: [] })
          : { rotateKey: t.rotateKey, skDistribList: r, participantList: n }
      );
    }
    var I = {
      setStatusPrivacyConfig: u,
      calculateStatusPrivacyUpdateEntries: c,
      getStatusPrivacySetting: d,
      getStatusAllowList: m,
      getStatusDenyList: p,
      getShareToFB: f,
      getShareToIG: g,
      persistShareToFB: h,
      persistShareToIG: y,
      getStatusReshareAllowed: C,
      persistStatusReshareAllowed: b,
      getStatusSenderKeyMap: S,
      getStatusSkDistribList: k,
      markStatusHasSenderKey: R,
      getStatusContacts: o("WAWebStatusContactUtils").getStatusContacts,
      getStatusList: _,
      getStatusPrivacySettingConfig: v,
      markForgetStatusSenderKey: E,
      markStatusSenderKeyRotate: L,
    };
    l.default = I;
  },
  98,
);
