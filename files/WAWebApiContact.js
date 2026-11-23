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
              contactHash: v(e),
              isUsernameContact: !1,
              birthday: null,
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
    async function b(e) {
      var t = await r("WAWebLidAwareContactsDB").get(e);
      return (t == null ? void 0 : t.isAddressBookContact) === 1;
    }
    function v(e) {
      var t = o("WAWebWidFactory").createWid(e).user,
        n = o("WABase64").decodeB64(o("WAMd5").md5(t + "WA_ADD_NOTIF"));
      return o("WABase64").encodeB64(n.slice(0, 3));
    }
    function S(e) {
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
    function R(e, t, n) {
      g.add(e, { lid: e, phoneNumber: t, phoneNumberCreatedAt: n });
    }
    var L;
    async function E(t) {
      var n;
      if (L != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "warmUpAllLidPnMappings: already warmed up",
              ])),
          ),
          L.promise
        );
      var a = self.performance.now();
      L = new (o("WAResolvable").Resolvable)();
      try {
        var i = t;
        i == null
          ? ((i = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .all()),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "warmUpAllLidPnMappings: queried DB, ",
                  " records in ",
                  "",
                ])),
              i.length,
              o("WAWebPerformanceUtils").getElapsedTimeMs(a),
            ))
          : o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "warmUpAllLidPnMappings: warming up ",
                  " contacts",
                ])),
              i.length,
            );
        for (var l of i) {
          var m = l.id,
            p = l.phoneNumber,
            _ = l.phoneNumberCreatedAt;
          r("WAWebWid").isStringLid(m) &&
            p != null &&
            _ != null &&
            R(
              o("WAWebWidFactory").createUserLidOrThrow(m),
              o("WAWebWidFactory").createUserWidOrThrow(p),
              _,
            );
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "warmUpAllLidPnMappings: error",
              ])),
          )
          .sendLogs("warmup-all-lid-pn-mappings-error");
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "warmUpAllLidPnMappings: finished in ",
            "",
          ])),
        o("WAWebPerformanceUtils").getElapsedTimeMs(a),
      ),
        (n = L) == null || n.resolve());
    }
    function k(e) {
      if (e.device != null)
        throw r("err")(
          "getAlternateUserWid - Invalid get call using deviceWid",
        );
      return e.isLid() ? N(e) : P(e);
    }
    function I() {
      var e = [],
        t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      t != null && e.push(t);
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return (n != null && e.push(n), e);
    }
    function T(e) {
      var t = k(o("WAWebWidFactory").asUserWidOrThrow(e));
      if (t != null) {
        var n;
        return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
          t.user,
          t.server,
          (n = e.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
        );
      }
    }
    function D(e) {
      var t = N(e);
      return t ? P(t) : e;
    }
    function x(e) {
      var t = D(e);
      return t != null && !e.equals(t) ? t : null;
    }
    function $(e) {
      return x(e) != null;
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
    async function O(e, t) {
      if (t != null) {
        t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
        await r("WAWebLidAwareContactsDB")
          .merge(
            n,
            a ? { isHosted: !0, isOrHasBeenHosted: !0 } : { isHosted: !1 },
          )
          .catch(function (e) {
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "updateContactAdvHostedTypefailed",
                    ])),
                )
                .verbose(),
              e
            );
          });
      }
    }
    var B = n("$InternalEnum")({
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
    function W(e, t) {
      var n = new Set();
      e.forEach(function (e) {
        e.isBot() ||
          e.isHosted() ||
          e.isLid() ||
          n.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
      });
      var r = new Set();
      n.forEach(function (e) {
        var t = P(o("WAWebWidFactory").createUserWidOrThrow(e));
        t == null && r.add(e);
      });
      var a = t != null ? t : "unknown";
      r.size > 0 &&
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "LID null - ",
                " PNs, missing: ",
                ", caller: ",
                "",
              ])),
            n.size,
            r.size,
            a,
          )
          .sendLogs("lidInfraAccount-" + a, { sampling: 0 });
    }
    var q = 1e4,
      U = null;
    function V() {
      U == null && (U = new (o("WAResolvable").Resolvable)());
    }
    function H() {
      var e;
      (e = U) == null || e.resolve();
    }
    async function G(e) {
      var t = await z(e);
      if (t != null) return t;
      var n = await j();
      if (n) return z(e);
    }
    async function z(e) {
      var t = await r("WAWebLidAwareContactsDB").equals(["contactHash"], e);
      if (t.length > 0) return t[0];
    }
    async function j() {
      var e = U;
      if (e == null || e.resolveWasCalled()) return !1;
      try {
        await o("WAPromiseTimeout").promiseTimeout(e.promise, q);
      } catch (e) {
        if (!(e instanceof o("WACustomError").TimeoutError)) throw e;
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "getContactRecordByHash: timed out waiting for contact hash repair",
              ])),
          )
          .sendLogs("contact-hash-repair-wait-timeout", { sampling: 0.1 });
      }
      return !0;
    }
    async function K(e) {
      var t = [];
      for (var n of e) t.push({ id: n.id, contactHash: n.contactHash });
      await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        t,
        "ApiContact.updateContactsHashes",
      );
    }
    ((l.lidPnCache = g),
      (l.lidPnCacheDirtySet = h),
      (l.setNotAddressBookContacts = y),
      (l.createOrMergeAddressBookContacts = C),
      (l.isAddressBookContact = b),
      (l.getContactHash = v),
      (l.updateLidMetadata = S),
      (l.warmUpLidPnMapping = R),
      (l.warmUpAllLidPnMappings = E),
      (l.getAlternateUserWid = k),
      (l.getMeUserWids = I),
      (l.getAlternateDeviceWid = T),
      (l.getLatestLid = D),
      (l.getDeprecatedLidLatestLid = x),
      (l.isDeprecatedLid = $),
      (l.getCurrentLid = P),
      (l.getPhoneNumber = N),
      (l.getPnIfLidIsLatestMapping = M),
      (l.clearLidPnMappingCache = w),
      (l.getContactRecord = A),
      (l.bulkGetContactRecord = F),
      (l.updateContactAdvHostedType = O),
      (l.CheckPnToLidMappingCaller = B),
      (l.checkPnToLidMapping = W),
      (l.armContactHashRepairWait = V),
      (l.markContactHashRepairComplete = H),
      (l.getContactRecordByHash = G),
      (l.updateContactsHashes = K));
  },
  98,
);
