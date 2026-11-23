__d(
  "WAWebUserPrefsStatus",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebApiUserPrefs",
    "WAWebModelStorageUtils",
    "WAWebSendMsgCommonApi",
    "WAWebStatusContactUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStatusType",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e) {
      (await d(e), m(e));
    }
    function d(e) {
      return o("WAWebApiUserPrefs").bulkCreateOrReplaceUserPrefs(
        p(e).map(function (e) {
          var t = e.key,
            n = e.value;
          return { key: t, value: n };
        }),
      );
    }
    function m(e) {
      var t = p(e);
      []
        .concat(
          t.filter(function (e) {
            var t = e.key;
            return (
              t !==
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING
            );
          }),
          t.filter(function (e) {
            var t = e.key;
            return (
              t ===
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING
            );
          }),
        )
        .forEach(function (e) {
          var t = e.key,
            n = e.value;
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applyCommittedSet(
            t,
            n,
          );
        });
    }
    function p(e) {
      var t = e.list,
        n = e.setting;
      return _({
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
    }
    function _(e) {
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
    async function f() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
        ) || o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
      );
    }
    async function g() {
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
    async function h() {
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
    async function y() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs", "contact"], async function () {
          var e = await f(),
            t;
          switch (e) {
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .AllowList:
              return {
                setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .AllowList,
                list: await g(),
              };
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .DenyList:
              return (
                (t = new Set((await h()).map(String))),
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
    async function C() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
        ) === !0
      );
    }
    async function b() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
        ) === !0
      );
    }
    async function v(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
        e,
      );
    }
    async function S(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
        e,
      );
    }
    async function R() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
        ) === !0
      );
    }
    async function L(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
        e,
      );
    }
    async function E() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var e = await f(),
            t = await g(),
            n = await h();
          return { setting: e, allowList: t, denyList: n };
        });
    }
    async function k() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
      );
      return e || { rotateKey: !1, senderKey: new Set() };
    }
    var I = 0,
      T = new Map(),
      D = 0,
      x = new Map();
    function $() {
      return I;
    }
    function P() {
      return D;
    }
    function N(e) {
      var t = e.map(String);
      return (
        t.forEach(function (e) {
          var t;
          T.set(e, ((t = T.get(e)) != null ? t : 0) + 1);
        }),
        function () {
          t.forEach(function (e) {
            var t,
              n = ((t = T.get(e)) != null ? t : 1) - 1;
            n > 0 ? T.set(e, n) : T.delete(e);
          });
        }
      );
    }
    async function M(e, t) {
      var n = t === void 0 ? { keepPendingRotation: !1 } : t,
        r = n.epoch,
        a = n.forgetSeq,
        i = n.keepPendingRotation;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var t = await k();
          if (!(i && (t.rotateKey || r !== I))) {
            var n = t.rotateKey ? new Set() : t.senderKey;
            (e
              .filter(function (e) {
                return !w(String(e), a);
              })
              .forEach(function (e) {
                n.add(String(e));
              }),
              await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                { rotateKey: !1, senderKey: n },
              ));
          }
        });
    }
    function w(e, t) {
      var n;
      return t == null || !r("justknobx")._("6798") || !r("justknobx")._("7420")
        ? !1
        : ((n = x.get(e)) != null ? n : 0) > t;
    }
    async function A() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          (I++,
            await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
              { rotateKey: !1, senderKey: new Set() },
            ));
        });
    }
    async function F(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var t = await k();
          if (!t.rotateKey) {
            var n = o("WAWebABProps").getABPropConfigValue(
                "web_status_sender_key_rotation_enabled",
              ),
              r = e.some(function (e) {
                return t.senderKey.has(String(e)) || (n && T.has(String(e)));
              });
            r &&
              (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                { rotateKey: !0, senderKey: new Set() },
              ));
          }
        });
    }
    async function O(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var t = await k();
          (D++,
            e.forEach(function (e) {
              if (
                (t.senderKey.delete(String(e)), x.set(String(e), D), e.isUser())
              ) {
                var n = o("WAWebApiContact").getAlternateDeviceWid(
                  o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e),
                );
                n != null &&
                  (t.senderKey.delete(String(n)), x.set(String(n), D));
              }
            }),
            await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
              { rotateKey: t.rotateKey, senderKey: t.senderKey },
            ));
        });
    }
    async function B(e, t) {
      var n = await W(e),
        r = await q(n, t),
        o = r.after,
        a = r.before,
        i = r.changed;
      return {
        alternateDeviceWid: n.alternate,
        aliasResolution: n.aliasResolution,
        before: a,
        after: o,
        changed: i,
      };
    }
    async function W(e) {
      await o("WAWebApiContact").warmUpAllLidPnMappings(null);
      var t = String(e),
        n = o("WAWebApiContact").getAlternateDeviceWid(e),
        r = n != null ? String(n) : null,
        a = r != null ? "resolved" : "unresolved";
      return {
        exact: t,
        alternate: r,
        aliasResolution: a,
        all: r != null ? [t, r] : [t],
      };
    }
    async function q(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["user-prefs"], async function () {
          var n = await k(),
            a = U(e, n.senderKey);
          if (t === "preview" || e.aliasResolution === "unresolved")
            return { before: a, after: a, changed: !1 };
          var i = new Set(n.senderKey),
            l = !1;
          if (
            (e.all.forEach(function (e) {
              l = i.delete(e) || l;
            }),
            !l)
          )
            return { before: a, after: a, changed: !1 };
          var s = { rotateKey: n.rotateKey, senderKey: i };
          await o("WAWebApiUserPrefs").createOrReplaceUserPref({
            key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
            value: s,
          });
          try {
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applyCommittedSet(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
              s,
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "UserPrefsStatus: durable sender-key reset committed, cache sync failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("status-sender-key-cache-sync-failed");
          }
          return { before: a, after: U(e, i), changed: !0 };
        });
    }
    function U(e, t) {
      var n = e.alternate;
      return {
        exact: t.has(e.exact) ? [e.exact] : [],
        alternate: n != null && t.has(n) ? [n] : [],
      };
    }
    async function V(e, t) {
      var n = t.isFullAudience,
        r = await k();
      if (r.rotateKey || r.senderKey.size === 0)
        return {
          rotateKey: r.rotateKey,
          skDistribList: e,
          participantList: [],
        };
      var a = [],
        i = [],
        l = 0;
      return (
        e.forEach(function (e) {
          r.senderKey.has(String(e))
            ? (o("WAWebSendMsgCommonApi").isPrimaryDevice(e) && a.push(e), l++)
            : o("WAWebUserUtils").isMeDevice(e) || i.push(e);
        }),
        n && l < r.senderKey.size
          ? (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
              { rotateKey: !0, senderKey: new Set() },
            ),
            { rotateKey: !0, skDistribList: e, participantList: [] })
          : { rotateKey: r.rotateKey, skDistribList: i, participantList: a }
      );
    }
    ((l.setStatusPrivacyConfig = c),
      (l.writeStatusPrivacyConfig = d),
      (l.applyCommittedStatusPrivacyConfig = m),
      (l.calculateStatusPrivacyUpdateEntries = _),
      (l.getStatusPrivacySetting = f),
      (l.getStatusAllowList = g),
      (l.getStatusDenyList = h),
      (l.getStatusList = y),
      (l.getShareToFB = C),
      (l.getShareToIG = b),
      (l.persistShareToFB = v),
      (l.persistShareToIG = S),
      (l.getStatusReshareAllowed = R),
      (l.persistStatusReshareAllowed = L),
      (l.getStatusPrivacySettingConfig = E),
      (l.getStatusSenderKeyMap = k),
      (l.getStatusSenderKeyEpoch = $),
      (l.getStatusSenderKeyForgetSeq = P),
      (l.trackStatusSenderKeyDistribution = N),
      (l.markStatusHasSenderKey = M),
      (l.consumeStatusSenderKeyRotation = A),
      (l.markStatusSenderKeyRotate = F),
      (l.markForgetStatusSenderKey = O),
      (l.previewOrResetStatusSenderKeyDistribution = B),
      (l.getStatusSkDistribList = V));
  },
  98,
);
