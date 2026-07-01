__d(
  "WAWebApiContact",
  [
    "$InternalEnum",
    "WABase64",
    "WACustomError",
    "WAJids",
    "WALogger",
    "WAMd5",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebBizCoexHostedAddVerification",
    "WAWebLidAwareContactsDB",
    "WAWebLidPnCache",
    "WAWebModelStorageUtils",
    "WAWebPerformanceUtils",
    "WAWebProtobufsAdv.pb",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = new (o("WAWebLidPnCache").LidPnCache)(),
      h = new Set();
    function y(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], function () {
          var n = e.map(function (e, n) {
            var r = t ? t[n] : void 0;
            return {
              id: e,
              name: void 0,
              shortName: void 0,
              username: r,
              isAddressBookContact: 0,
              type: "out",
              contactHash: S(e),
              isUsernameContact: !1,
            };
          });
          return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            n,
            "ApiContact.setNotAddressBookContacts",
          );
        });
    }
    function C(e) {
      return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        e,
        "ApiContact.createOrMergeAddressBookContacts",
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").get(e);
          return t == null ? !1 : t.isAddressBookContact === 1;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = o("WAWebWidFactory").createWid(e).user,
        n = o("WABase64").decodeB64(o("WAMd5").md5(t + "WA_ADD_NOTIF"));
      return o("WABase64").encodeB64(n.slice(0, 3));
    }
    function R(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], function () {
          var t = e.map(function (e) {
            var t = e.data,
              n = e.lid;
            return babelHelpers.extends({ id: n.toString() }, t);
          });
          return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            t,
            "ApiContact.updateLidMetadata",
          );
        });
    }
    function L(e, t, n) {
      g.add(e, { lid: e, phoneNumber: t, phoneNumberCreatedAt: n });
    }
    var E;
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (E != null)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "warmUpAllLidPnMappings: already warmed up",
                  ])),
              ),
              E.promise
            );
          var n = self.performance.now();
          E = new (o("WAResolvable").Resolvable)();
          try {
            var a = e;
            a == null
              ? ((a = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                  .getContactTable()
                  .all()),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "warmUpAllLidPnMappings: queried DB, ",
                      " records in ",
                      "",
                    ])),
                  a.length,
                  o("WAWebPerformanceUtils").getElapsedTimeMs(n),
                ))
              : o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "warmUpAllLidPnMappings: warming up ",
                      " contacts",
                    ])),
                  a.length,
                );
            for (var i of a) {
              var l = i.id,
                p = i.phoneNumber,
                _ = i.phoneNumberCreatedAt;
              r("WAWebWid").isStringLid(l) &&
                p != null &&
                _ != null &&
                L(
                  o("WAWebWidFactory").createUserLidOrThrow(l),
                  o("WAWebWidFactory").createUserWidOrThrow(p),
                  _,
                );
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "warmUpAllLidPnMappings: error",
                  ])),
              )
              .sendLogs("warmup-all-lid-pn-mappings-error");
          }
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "warmUpAllLidPnMappings: finished in ",
                "",
              ])),
            o("WAWebPerformanceUtils").getElapsedTimeMs(n),
          ),
            (t = E) == null || t.resolve());
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      if (e.device != null)
        throw r("err")(
          "getAlternateUserWid - Invalid get call using deviceWid",
        );
      return e.isLid() ? N(e) : P(e);
    }
    function D() {
      var e = [],
        t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      t != null && e.push(t);
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return (n != null && e.push(n), e);
    }
    function x(e) {
      var t = T(o("WAWebWidFactory").asUserWidOrThrow(e));
      if (t != null) {
        var n;
        return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
          t.user,
          t.server,
          (n = e.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
        );
      }
    }
    function $(e) {
      var t = N(e);
      return t ? P(t) : e;
    }
    function P(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return n != null && t != null && e.equals(t) ? n : g.getCurrentLid(e);
    }
    function N(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return n != null && t != null && e.equals(t) ? n : g.getPhoneNumber(e);
    }
    function M(e) {
      var t = N(e);
      if (t != null) {
        var n = P(t);
        if (e.equals(n)) return t;
      }
    }
    function w() {
      (g.clear(), h.clear());
    }
    function A(e) {
      return r("WAWebLidAwareContactsDB").get(e.toJid());
    }
    function F(e) {
      return r("WAWebLidAwareContactsDB").bulkGet(
        e.map(function (e) {
          return e.toJid();
        }),
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t != null) {
            t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "updateContactAdvHostedType: check coex cache for ",
                    "",
                  ])),
                e == null ? void 0 : e.toLogString(),
              ),
              o(
                "WAWebBizCoexHostedAddVerification",
              ).assertThrowsWidAdvTypeFromVerificationCache(e));
            var n = e.isLid()
                ? o("WAJids").toLidUserJid(e.user)
                : o("WAJids").toPhoneUserJid(e.user),
              a = t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
            yield r("WAWebLidAwareContactsDB")
              .merge(
                n,
                a ? { isHosted: !0, isOrHasBeenHosted: !0 } : { isHosted: !1 },
              )
              .catch(function (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "updateContactAdvHostedTypefailed",
                        ])),
                    )
                    .verbose(),
                  e
                );
              });
          }
        })),
        B.apply(this, arguments)
      );
    }
    var W = n("$InternalEnum")({
      WAWEB_SIGNAL_SESSION_HAS_SIGNAL_SESSIONS: "waweb-ss-has-signal-sessions",
      WAWEB_SIGNAL_SESSION_DELETE_REMOTE_INFO: "waweb-ss-delete-remote-info",
      WAWEB_SIGNAL_SESSION_DELETE_REMOTE_SESSION:
        "waweb-ss-delete-remote-session",
      WAWEB_SIGNAL_SESSION_SAVE_SESSION_BASE_KEY:
        "waweb-ss-save-session-base-key",
      WAWEB_SIGNAL_SESSION_HAS_SAME_BASE_KEY: "waweb-ss-has-same-base-key",
      WAWEB_SIGNAL_SESSION_DELETE_GROUP_SENDER_KEY_INFO:
        "waweb-ss-delete-group-sender-key-info",
      WAWEB_SIGNAL_SESSION_DELETE_DEVICE_SENDER_KEY:
        "waweb-ss-delete-device-sender-key",
      WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION:
        "waweb-cldca-load-session",
      WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION:
        "waweb-cldca-handle-new-session",
      WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SENDER_KEY_SESSION:
        "waweb-cldca-load-sender-key-session",
      WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_SAVE_SENDER_KEY_SESSION:
        "waweb-cldca-save-sender-key-session",
      WAWEB_ADV_SYNC_DEVICE_LIST_SEND_DEVICE_SYNC_REQUEST:
        "waweb-asdl-send-device-sync-request",
      WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD: "waweb-adl-get-device-record",
      WAWEB_API_DEVICE_LIST_BULK_GET_DEVICE_RECORD:
        "waweb-adl-bulk-get-device-record",
      WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD:
        "waweb-adl-create-or-replace-device-record",
      WAWEB_API_DEVICE_LIST_BULK_CREATE_OR_REPLACE_DEVICE_RECORD:
        "waweb-adl-bulk-create-or-replace-device-record",
    });
    function q(t, n) {
      var r = new Set();
      t.forEach(function (e) {
        e.isBot() ||
          e.isHosted() ||
          e.isLid() ||
          r.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
      });
      var a = new Set();
      r.forEach(function (e) {
        var t = P(o("WAWebWidFactory").createUserWidOrThrow(e));
        t == null && a.add(e);
      });
      var i = n != null ? n : "unknown";
      a.size > 0 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "LID null - ",
                " PNs, missing: ",
                ", caller: ",
                "",
              ])),
            r.size,
            a.size,
            i,
          )
          .sendLogs("lidInfraAccount-" + i, { sampling: 0 });
    }
    var U = 5e3,
      V = null;
    function H() {
      V == null && (V = new (o("WAResolvable").Resolvable)());
    }
    function G() {
      var e;
      (e = V) == null || e.resolve();
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield K();
          var t = yield r("WAWebLidAwareContactsDB").equals(["contactHash"], e);
          if (t.length > 0) return t[0];
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = V;
          if (!(e == null || e.resolveWasCalled()))
            try {
              yield o("WAPromiseTimeout").promiseTimeout(e.promise, U);
            } catch (e) {
              if (!(e instanceof o("WACustomError").TimeoutError)) throw e;
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "getContactRecordByHash: timed out waiting for contact hash repair",
                    ])),
                )
                .sendLogs("contact-hash-repair-wait-timeout", {
                  sampling: 0.1,
                });
            }
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
          var t = [];
          for (var n of e) t.push({ id: n.id, contactHash: n.contactHash });
          yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            t,
            "ApiContact.updateContactsHashes",
          );
        })),
        Y.apply(this, arguments)
      );
    }
    ((l.lidPnCache = g),
      (l.lidPnCacheDirtySet = h),
      (l.setNotAddressBookContacts = y),
      (l.createOrMergeAddressBookContacts = C),
      (l.isAddressBookContact = b),
      (l.getContactHash = S),
      (l.updateLidMetadata = R),
      (l.warmUpLidPnMapping = L),
      (l.warmUpAllLidPnMappings = k),
      (l.getAlternateUserWid = T),
      (l.getMeUserWids = D),
      (l.getAlternateDeviceWid = x),
      (l.getLatestLid = $),
      (l.getCurrentLid = P),
      (l.getPhoneNumber = N),
      (l.getPnIfLidIsLatestMapping = M),
      (l.clearLidPnMappingCache = w),
      (l.getContactRecord = A),
      (l.bulkGetContactRecord = F),
      (l.updateContactAdvHostedType = O),
      (l.CheckPnToLidMappingCaller = W),
      (l.checkPnToLidMapping = q),
      (l.armContactHashRepairWait = H),
      (l.markContactHashRepairComplete = G),
      (l.getContactRecordByHash = z),
      (l.updateContactsHashes = X));
  },
  98,
);
