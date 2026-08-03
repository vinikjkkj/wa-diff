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
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = yield r("WAWebLidAwareContactsDB").get(e);
          if ((n == null ? void 0 : n.isAddressBookContact) === 1) return !0;
          if (!t || !r("WAWebWid").isStringLid(e)) return !1;
          var a = null;
          if ((n == null ? void 0 : n.phoneNumber) != null) {
            var i = n.phoneNumber;
            try {
              a = o("WAWebWidFactory").createUserWidOrThrow(i);
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "isAddressBookContact: unexpected PN parse failure in LID row for ",
                      "",
                    ])),
                  i,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("is-address-book-contact-pn-parse-fail");
            }
          }
          if (a == null)
            try {
              a = F(o("WAWebWidFactory").createUserLidOrThrow(e));
            } catch (t) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "isAddressBookContact: unexpected LID parse failure for ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("is-address-book-contact-lid-parse-fail");
            }
          if (a != null)
            try {
              var l = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .get(a.toJid());
              if ((l == null ? void 0 : l.isAddressBookContact) === 1)
                return (
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "isAddressBookContact: found out of sync PN to LID mapping for ",
                          " and ",
                          "",
                        ])),
                      a.toLogString(),
                      e,
                    )
                    .sendLogs("is-address-book-contact-pn-lid-out-of-sync"),
                  !0
                );
            } catch (e) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "isAddressBookContact: failed to get PN contact row",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("is-address-book-contact-pn-get-fail");
            }
          return !1;
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "warmUpAllLidPnMappings: queried DB, ",
                      " records in ",
                      "",
                    ])),
                  a.length,
                  o("WAWebPerformanceUtils").getElapsedTimeMs(n),
                ))
              : o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "warmUpAllLidPnMappings: warming up ",
                      " contacts",
                    ])),
                  a.length,
                );
            for (var i of a) {
              var l = i.id,
                s = i.phoneNumber,
                u = i.phoneNumberCreatedAt;
              r("WAWebWid").isStringLid(l) &&
                s != null &&
                u != null &&
                T(
                  o("WAWebWidFactory").createUserLidOrThrow(l),
                  o("WAWebWidFactory").createUserWidOrThrow(s),
                  u,
                );
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "warmUpAllLidPnMappings: error",
                  ])),
              )
              .sendLogs("warmup-all-lid-pn-mappings-error");
          }
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
      return e.isLid() ? F(e) : A(e);
    }
    function N() {
      var e = [],
        t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      t != null && e.push(t);
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return (n != null && e.push(n), e);
    }
    function M(e) {
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
    function w(e) {
      var t = F(e);
      return t ? A(t) : e;
    }
    function A(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return n != null && t != null && e.equals(t) ? n : b.getCurrentLid(e);
    }
    function F(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return n != null && t != null && e.equals(t) ? n : b.getPhoneNumber(e);
    }
    function O(e) {
      var t = F(e);
      if (t != null) {
        var n = A(t);
        if (e.equals(n)) return t;
      }
    }
    function B() {
      (b.clear(), v.clear());
    }
    function W(e) {
      return r("WAWebLidAwareContactsDB").get(e.toJid());
    }
    function q(e) {
      return r("WAWebLidAwareContactsDB").bulkGet(
        e.map(function (e) {
          return e.toJid();
        }),
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t != null) {
            t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "updateContactAdvHostedType: check coex cache for ",
                    "",
                  ])),
                e == null ? void 0 : e.toLogString(),
              ),
              o(
                "WAWebBizCoexHostedAddVerification",
              ).assertThrowsWidAdvTypeFromVerificationCache(e));
            var n = o("WAWebWidToJid").widToUserJid(e),
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
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "updateContactAdvHostedTypefailed",
                        ])),
                    )
                    .verbose(),
                  e
                );
              });
          }
        })),
        V.apply(this, arguments)
      );
    }
    var H = n("$InternalEnum")({
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
    function G(t, n) {
      var r = new Set();
      t.forEach(function (e) {
        e.isBot() ||
          e.isHosted() ||
          e.isLid() ||
          r.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
      });
      var a = new Set();
      r.forEach(function (e) {
        var t = A(o("WAWebWidFactory").createUserWidOrThrow(e));
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
    var z = 1e4,
      j = null;
    function K() {
      j == null && (j = new (o("WAResolvable").Resolvable)());
    }
    function Q() {
      var e;
      (e = j) == null || e.resolve();
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield J(e);
          if (t != null) return t;
          var n = yield ee();
          if (n) return J(e);
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
          var t = yield r("WAWebLidAwareContactsDB").equals(["contactHash"], e);
          if (t.length > 0) return t[0];
        })),
        Z.apply(this, arguments)
      );
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = j;
          if (e == null || e.resolveWasCalled()) return !1;
          try {
            yield o("WAPromiseTimeout").promiseTimeout(e.promise, z);
          } catch (e) {
            if (!(e instanceof o("WACustomError").TimeoutError)) throw e;
            o("WALogger")
              .WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "getContactRecordByHash: timed out waiting for contact hash repair",
                  ])),
              )
              .sendLogs("contact-hash-repair-wait-timeout", { sampling: 0.1 });
          }
          return !0;
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          for (var n of e) t.push({ id: n.id, contactHash: n.contactHash });
          yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            t,
            "ApiContact.updateContactsHashes",
          );
        })),
        re.apply(this, arguments)
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
      (l.getMeUserWids = N),
      (l.getAlternateDeviceWid = M),
      (l.getLatestLid = w),
      (l.getCurrentLid = A),
      (l.getPhoneNumber = F),
      (l.getPnIfLidIsLatestMapping = O),
      (l.clearLidPnMappingCache = B),
      (l.getContactRecord = W),
      (l.bulkGetContactRecord = q),
      (l.updateContactAdvHostedType = U),
      (l.CheckPnToLidMappingCaller = H),
      (l.checkPnToLidMapping = G),
      (l.armContactHashRepairWait = K),
      (l.markContactHashRepairComplete = Q),
      (l.getContactRecordByHash = X),
      (l.updateContactsHashes = ne));
  },
  98,
);
