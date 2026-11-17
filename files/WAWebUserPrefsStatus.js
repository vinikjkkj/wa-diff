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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield m(e), p(e));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return o("WAWebApiUserPrefs").bulkCreateOrReplaceUserPrefs(
        _(e).map(function (e) {
          var t = e.key,
            n = e.value;
          return { key: t, value: n };
        }),
      );
    }
    function p(e) {
      var t = _(e);
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
    function _(e) {
      var t = e.list,
        n = e.setting;
      return f({
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
    function f(e) {
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
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
            ) || o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs", "contact"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield g(),
                  t;
                switch (e) {
                  case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .AllowList:
                    return {
                      setting: o("WAWebUserPrefsStatusType")
                        .StatusPrivacySettingType.AllowList,
                      list: yield y(),
                    };
                  case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .DenyList:
                    return (
                      (t = new Set((yield b()).map(String))),
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
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
            ) === !0
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
            ) === !0
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
            e,
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
            e,
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
            ) === !0
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
            e,
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield g(),
                  t = yield y(),
                  n = yield b();
                return { setting: e, allowList: t, denyList: n };
              }),
            );
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
          );
          return e || { rotateKey: !1, senderKey: new Set() };
        })),
        B.apply(this, arguments)
      );
    }
    var W = 0,
      q = new Map(),
      U = 0,
      V = new Map();
    function H() {
      return W;
    }
    function G() {
      return U;
    }
    function z(e) {
      var t = e.map(String);
      return (
        t.forEach(function (e) {
          var t;
          q.set(e, ((t = q.get(e)) != null ? t : 0) + 1);
        }),
        function () {
          t.forEach(function (e) {
            var t,
              n = ((t = q.get(e)) != null ? t : 1) - 1;
            n > 0 ? q.set(e, n) : q.delete(e);
          });
        }
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t === void 0 ? { keepPendingRotation: !1 } : t,
            a = r.epoch,
            i = r.forgetSeq,
            l = r.keepPendingRotation;
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield O();
                if (!(l && (t.rotateKey || a !== W))) {
                  var n = t.rotateKey ? new Set() : t.senderKey;
                  (e
                    .filter(function (e) {
                      return !Q(String(e), i);
                    })
                    .forEach(function (e) {
                      n.add(String(e));
                    }),
                    yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                        .STATUS_SENDER_KEY,
                      { rotateKey: !1, senderKey: n },
                    ));
                }
              }),
            );
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      var n;
      return t == null || !r("justknobx")._("6798") || !r("justknobx")._("7420")
        ? !1
        : ((n = V.get(e)) != null ? n : 0) > t;
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (W++,
                  yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                    o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                    { rotateKey: !1, senderKey: new Set() },
                  ));
              }),
            );
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield O();
                if (!t.rotateKey) {
                  var n = o("WAWebABProps").getABPropConfigValue(
                      "web_status_sender_key_rotation_enabled",
                    ),
                    r = e.some(function (e) {
                      return (
                        t.senderKey.has(String(e)) || (n && q.has(String(e)))
                      );
                    });
                  r &&
                    (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                        .STATUS_SENDER_KEY,
                      { rotateKey: !0, senderKey: new Set() },
                    ));
                }
              }),
            );
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield O();
                (U++,
                  e.forEach(function (e) {
                    if (
                      (t.senderKey.delete(String(e)),
                      V.set(String(e), U),
                      e.isUser())
                    ) {
                      var n = o("WAWebApiContact").getAlternateDeviceWid(
                        o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e),
                      );
                      n != null &&
                        (t.senderKey.delete(String(n)), V.set(String(n), U));
                    }
                  }),
                  yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                    o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                    { rotateKey: t.rotateKey, senderKey: t.senderKey },
                  ));
              }),
            );
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield oe(e),
            r = yield ie(n, t),
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
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebApiContact").warmUpAllLidPnMappings(null);
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
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = yield O(),
                  a = se(e, n.senderKey);
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
                yield o("WAWebApiUserPrefs").createOrReplaceUserPref({
                  key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                    .STATUS_SENDER_KEY,
                  value: s,
                });
                try {
                  o(
                    "WAWebUserPrefsIndexedDBStorage",
                  ).userPrefsIdb.applyCommittedSet(
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
                return { before: a, after: se(e, i), changed: !0 };
              }),
            );
        })),
        le.apply(this, arguments)
      );
    }
    function se(e, t) {
      var n = e.alternate;
      return {
        exact: t.has(e.exact) ? [e.exact] : [],
        alternate: n != null && t.has(n) ? [n] : [],
      };
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.isFullAudience,
            r = yield O();
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
                ? (o("WAWebSendMsgCommonApi").isPrimaryDevice(e) && a.push(e),
                  l++)
                : o("WAWebUserUtils").isMeDevice(e) || i.push(e);
            }),
            n && l < r.senderKey.size
              ? (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                  { rotateKey: !0, senderKey: new Set() },
                ),
                { rotateKey: !0, skDistribList: e, participantList: [] })
              : { rotateKey: r.rotateKey, skDistribList: i, participantList: a }
          );
        })),
        ce.apply(this, arguments)
      );
    }
    ((l.setStatusPrivacyConfig = c),
      (l.writeStatusPrivacyConfig = m),
      (l.applyCommittedStatusPrivacyConfig = p),
      (l.calculateStatusPrivacyUpdateEntries = f),
      (l.getStatusPrivacySetting = g),
      (l.getStatusAllowList = y),
      (l.getStatusDenyList = b),
      (l.getStatusList = S),
      (l.getShareToFB = L),
      (l.getShareToIG = k),
      (l.persistShareToFB = T),
      (l.persistShareToIG = x),
      (l.getStatusReshareAllowed = P),
      (l.persistStatusReshareAllowed = M),
      (l.getStatusPrivacySettingConfig = A),
      (l.getStatusSenderKeyMap = O),
      (l.getStatusSenderKeyEpoch = H),
      (l.getStatusSenderKeyForgetSeq = G),
      (l.trackStatusSenderKeyDistribution = z),
      (l.markStatusHasSenderKey = j),
      (l.consumeStatusSenderKeyRotation = X),
      (l.markStatusSenderKeyRotate = J),
      (l.markForgetStatusSenderKey = ee),
      (l.previewOrResetStatusSenderKeyDistribution = ne),
      (l.getStatusSkDistribList = ue));
  },
  98,
);
