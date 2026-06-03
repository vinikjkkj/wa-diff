__d(
  "WAWebApiContact",
  [
    "$InternalEnum",
    "Promise",
    "WABase64",
    "WAJids",
    "WALogger",
    "WAMd5",
    "WAResolvable",
    "WAWebBizCoexGatingUtils",
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
    "justknobx",
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
      g,
      h,
      y,
      C,
      b = new (o("WAWebLidPnCache").LidPnCache)(),
      v = new Set();
    function S(e, t) {
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
              contactHash: k(e),
              isUsernameContact: !1,
            };
          });
          return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            n,
            "ApiContact.setNotAddressBookContacts",
          );
        });
    }
    function R(e) {
      return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        e,
        "ApiContact.createOrMergeAddressBookContacts",
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").get(e);
          return t == null ? !1 : t.isAddressBookContact === 1;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = o("WAWebWidFactory").createWid(e).user,
        n = o("WABase64").decodeB64(o("WAMd5").md5(t + "WA_ADD_NOTIF"));
      return o("WABase64").encodeB64(n.slice(0, 3));
    }
    function I(e) {
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
    function T(e, t, n) {
      b.add(e, { lid: e, phoneNumber: t, phoneNumberCreatedAt: n });
    }
    var D;
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (D != null)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "warmUpAllLidPnMappings: already warmed up",
                  ])),
              ),
              D.promise
            );
          var n = self.performance.now();
          D = new (o("WAResolvable").Resolvable)();
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
                T(
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
            (t = D) == null || t.resolve());
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      if (e.device != null)
        throw r("err")(
          "getAlternateUserWid - Invalid get call using deviceWid",
        );
      return e.isLid() ? A(e) : w(e);
    }
    function N(e) {
      var t = P(o("WAWebWidFactory").asUserWidOrThrow(e));
      if (t != null) {
        var n;
        return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
          t.user,
          t.server,
          (n = e.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
        );
      }
    }
    function M(e) {
      var t = A(e);
      return t ? w(t) : e;
    }
    function w(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return n != null && t != null && e.equals(t) ? n : b.getCurrentLid(e);
    }
    function A(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return n != null && t != null && e.equals(t) ? n : b.getPhoneNumber(e);
    }
    function F(e) {
      var t = A(e);
      if (t != null) {
        var n = w(t);
        if (e.equals(n)) return t;
      }
    }
    function O() {
      (b.clear(), v.clear());
    }
    function B(e) {
      return r("WAWebLidAwareContactsDB").get(e.toJid());
    }
    function W(e) {
      return r("WAWebLidAwareContactsDB").bulkGet(
        e.map(function (e) {
          return e.toJid();
        }),
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
            if (t == null) return;
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
            var a = e.isLid()
                ? o("WAJids").toLidUserJid(e.user)
                : o("WAJids").toPhoneUserJid(e.user),
              i = t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
            yield r("WAWebLidAwareContactsDB")
              .merge(
                a,
                i ? { isHosted: !0, isOrHasBeenHosted: !0 } : { isHosted: !1 },
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
          return (C || (C = n("Promise"))).resolve();
        })),
        U.apply(this, arguments)
      );
    }
    var V = n("$InternalEnum")({
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
    function H(t, n) {
      var r = new Set();
      t.forEach(function (e) {
        e.isBot() ||
          e.isHosted() ||
          e.isLid() ||
          r.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
      });
      var a = new Set();
      r.forEach(function (e) {
        var t = w(o("WAWebWidFactory").createUserWidOrThrow(e));
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
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").equals(["contactHash"], e);
          if (t.length > 0) return t[0];
          if (!r("justknobx")._("1559")) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "getContactRecordByHash: no record for hash (1st lookup)",
                ])),
            );
            var n = yield r("WAWebLidAwareContactsDB").all(),
              a = [],
              i = null;
            for (var l of n)
              if (l.contactHash == null) {
                var s = k(l.id);
                (a.push({ id: l.id, contactHash: s }),
                  s === e &&
                    (i = babelHelpers.extends({}, l, { contactHash: s })));
              }
            return (
              a.length > 0 &&
                (yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                  a,
                  "ApiContact.getContactRecordByHash",
                ),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "getContactRecordByHash: computed hashes for ",
                      " records",
                    ])),
                  a.length,
                )),
              i != null
                ? o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "getContactRecordByHash: found match, updated",
                      ])),
                  )
                : o("WALogger").WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "getContactRecordByHash: no match found (2nd lookup)",
                      ])),
                  ),
              i
            );
          }
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          for (var n of e) t.push({ id: n.id, contactHash: n.contactHash });
          yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            t,
            "ApiContact.updateContactsHashes",
          );
        })),
        K.apply(this, arguments)
      );
    }
    ((l.lidPnCache = b),
      (l.lidPnCacheDirtySet = v),
      (l.setNotAddressBookContacts = S),
      (l.createOrMergeAddressBookContacts = R),
      (l.isAddressBookContact = L),
      (l.getContactHash = k),
      (l.updateLidMetadata = I),
      (l.warmUpLidPnMapping = T),
      (l.warmUpAllLidPnMappings = x),
      (l.getAlternateUserWid = P),
      (l.getAlternateDeviceWid = N),
      (l.getLatestLid = M),
      (l.getCurrentLid = w),
      (l.getPhoneNumber = A),
      (l.getPnIfLidIsLatestMapping = F),
      (l.clearLidPnMappingCache = O),
      (l.getContactRecord = B),
      (l.bulkGetContactRecord = W),
      (l.updateContactAdvHostedType = q),
      (l.CheckPnToLidMappingCaller = V),
      (l.checkPnToLidMapping = H),
      (l.getContactRecordByHash = G),
      (l.updateContactsHashes = j));
  },
  98,
);
