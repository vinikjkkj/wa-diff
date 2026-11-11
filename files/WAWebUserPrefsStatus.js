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
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t = e.list,
        n = e.setting;
      if (n === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact)
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
          n,
        );
      var r = d({
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
    function d(e) {
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
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
            ) || o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs", "contact"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield m(),
                  t;
                switch (e) {
                  case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .AllowList:
                    return {
                      setting: o("WAWebUserPrefsStatusType")
                        .StatusPrivacySettingType.AllowList,
                      list: yield _(),
                    };
                  case o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .DenyList:
                    return (
                      (t = new Set((yield g()).map(String))),
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
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
            ) === !0
          );
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
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
            ) === !0
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB,
            e,
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG,
            e,
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
            ) === !0
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
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED,
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
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield m(),
                  t = yield _(),
                  n = yield g();
                return { setting: e, allowList: t, denyList: n };
              }),
            );
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
          );
          return e || { rotateKey: !1, senderKey: new Set() };
        })),
        w.apply(this, arguments)
      );
    }
    var A = 0,
      F = new Map(),
      O = 0,
      B = new Map();
    function W() {
      return A;
    }
    function q() {
      return O;
    }
    function U(e) {
      var t = e.map(String);
      return (
        t.forEach(function (e) {
          var t;
          F.set(e, ((t = F.get(e)) != null ? t : 0) + 1);
        }),
        function () {
          t.forEach(function (e) {
            var t,
              n = ((t = F.get(e)) != null ? t : 1) - 1;
            n > 0 ? F.set(e, n) : F.delete(e);
          });
        }
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t === void 0 ? { keepPendingRotation: !1 } : t,
            a = r.epoch,
            i = r.forgetSeq,
            l = r.keepPendingRotation;
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield M();
                if (!(l && (t.rotateKey || a !== A))) {
                  var n = t.rotateKey ? new Set() : t.senderKey;
                  (e
                    .filter(function (e) {
                      return !G(String(e), i);
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
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      var n;
      return t == null || !r("justknobx")._("6798") || !r("justknobx")._("7420")
        ? !1
        : ((n = B.get(e)) != null ? n : 0) > t;
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (A++,
                  yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                    o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                    { rotateKey: !1, senderKey: new Set() },
                  ));
              }),
            );
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield M();
                if (!t.rotateKey) {
                  var n = o("WAWebABProps").getABPropConfigValue(
                      "web_status_sender_key_rotation_enabled",
                    ),
                    r = e.some(function (e) {
                      return (
                        t.senderKey.has(String(e)) || (n && F.has(String(e)))
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
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield M();
                (O++,
                  e.forEach(function (e) {
                    if (
                      (t.senderKey.delete(String(e)),
                      B.set(String(e), O),
                      e.isUser())
                    ) {
                      var n = o("WAWebApiContact").getAlternateDeviceWid(
                        o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e),
                      );
                      n != null &&
                        (t.senderKey.delete(String(n)), B.set(String(n), O));
                    }
                  }),
                  yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                    o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                    { rotateKey: t.rotateKey, senderKey: t.senderKey },
                  ));
              }),
            );
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield ee(e),
            r = yield ne(n, t),
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
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        te.apply(this, arguments)
      );
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["user-prefs"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = yield M(),
                  a = oe(e, n.senderKey);
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
                return { before: a, after: oe(e, i), changed: !0 };
              }),
            );
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      var n = e.alternate;
      return {
        exact: t.has(e.exact) ? [e.exact] : [],
        alternate: n != null && t.has(n) ? [n] : [],
      };
    }
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.isFullAudience,
            r = yield M();
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
                : o("WAWebUserPrefsMeUser").isMeDevice(e) || i.push(e);
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
        ie.apply(this, arguments)
      );
    }
    ((l.setStatusPrivacyConfig = c),
      (l.calculateStatusPrivacyUpdateEntries = d),
      (l.getStatusPrivacySetting = m),
      (l.getStatusAllowList = _),
      (l.getStatusDenyList = g),
      (l.getStatusList = y),
      (l.getShareToFB = b),
      (l.getShareToIG = S),
      (l.persistShareToFB = L),
      (l.persistShareToIG = k),
      (l.getStatusReshareAllowed = T),
      (l.persistStatusReshareAllowed = x),
      (l.getStatusPrivacySettingConfig = P),
      (l.getStatusSenderKeyMap = M),
      (l.getStatusSenderKeyEpoch = W),
      (l.getStatusSenderKeyForgetSeq = q),
      (l.trackStatusSenderKeyDistribution = U),
      (l.markStatusHasSenderKey = V),
      (l.consumeStatusSenderKeyRotation = z),
      (l.markStatusSenderKeyRotate = K),
      (l.markForgetStatusSenderKey = X),
      (l.previewOrResetStatusSenderKeyDistribution = J),
      (l.getStatusSkDistribList = ae));
  },
  98,
);
