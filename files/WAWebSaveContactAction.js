__d(
  "WAWebSaveContactAction",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactEditSync",
    "WAWebContactSyncApi",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebHandleUsernameSync",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:27664",
    "err",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
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
      h = n("cr:27664") == null ? void 0 : n("cr:27664").debugConfigs,
      y = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "NetworkUnavailable"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield t();
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " username_contact_usync_lid_based=",
                      "",
                    ])),
                  e,
                  o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs(e),
              t
            );
          }
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
          if (
            (h != null &&
              h.delaySaveMs &&
              (yield o("WAPromiseDelays").delayMs(h.delaySaveMs)),
            h != null && h.simulateErrorOnSaveOrDeleteContact)
          ) {
            var e = h.simulateErrorOnSaveOrDeleteContact;
            switch (((h.simulateErrorOnSaveOrDeleteContact = null), e)) {
              case "USYNC":
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(1);
              case "NETWORK":
                throw new y();
              case "CLIENT":
                throw r("err")("Client error");
            }
          }
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
          var t,
            n,
            a = e.firstName,
            i = e.isConvertingContactType,
            l = e.lastName;
          if (
            (r("gkx")("26258") || (yield v()), !r("WAWebNetworkStatus").online)
          )
            throw new y();
          var s = [];
          if (e.phoneNumber != null) {
            var _ = e.phoneNumber,
              f = e.prevPhoneNumber;
            (s.push({ type: "add", phoneNumber: _ }),
              f != null &&
                f !== _ &&
                s.push({
                  type: "delete",
                  contact: yield C(
                    "companion-contact-client-error-save-create-user-wid-prev-pn-usync",
                    function () {
                      return o("WAWebWidFactory").createUserWidOrThrow(f);
                    },
                  ),
                }));
          } else
            s.push({ type: "add_username", lid: e.lid, username: e.username });
          var g = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(s),
            h = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_SAVE,
              requestedCount: s.length,
              protocols: g.protocols,
            }),
            b = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              h,
              function () {
                return g.execute();
              },
              o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
            ),
            S = b.error.all || b.error.contact;
          if (S)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                h,
                S.errorCode,
                b,
                o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                S.errorCode,
                S.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(h, b);
          var R = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            L = R ? "lid" : "pn",
            E = (t = (n = b.list) == null ? void 0 : n.length) != null ? t : 0;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[saveContactAction] addr_mode=",
                " usyncListSize=",
                " ",
              ])),
            L,
            E,
          );
          try {
            yield o("WAWebContactSyncApi").handleLidSync(b);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] handleLidSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  L,
                  e,
                )
                .sendLogs("save-contact-handle-lid-sync-error"),
              e
            );
          }
          try {
            yield o("WAWebHandleUsernameSync").handleUsernameSync(b);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] handleUsernameSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  L,
                  e,
                )
                .sendLogs("save-contact-handle-username-sync-error"),
              e
            );
          }
          try {
            b.list &&
              (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                r("compactMap")(b.list, function (e) {
                  return e.id instanceof r("WAWebWid") ? e.id : null;
                }),
              ));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] markContactsSyncCompleted mode=",
                      " e:",
                      "",
                    ])),
                  L,
                  e,
                )
                .sendLogs("save-contact-mark-sync-completed-error"),
              e
            );
          }
          var k = a && l ? a + " " + l : a || l;
          if (e.phoneNumber != null) {
            var I = yield C(
                "companion-contact-client-error-save-create-user-wid-pn-syncd",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(
                    e.phoneNumber,
                  );
                },
              ),
              T = e.lid;
            if (i === !0 && T && !r("isStringNullOrEmpty")(e.username)) {
              var D = o("WAWebUsernameTypes").asUsername(e.username);
              yield C(
                "companion-contact-client-error-save-syncd-send-username-contact-delete",
                function () {
                  return o("WAWebContactEditSync").sendUsernameContactDelete(
                    T,
                    D,
                  );
                },
              );
            }
            yield C(
              "companion-contact-client-error-save-syncd-send-contact-update",
              function () {
                var t;
                return o("WAWebContactEditSync").sendContactUpdate(
                  I,
                  k,
                  a || l,
                  e.syncToAddressbook,
                  (t = e.lid) != null
                    ? t
                    : o("WAWebLidMigrationUtils").toUserLid(I),
                  e.username,
                );
              },
            );
          } else {
            if (i === !0 && !r("isStringNullOrEmpty")(e.pn)) {
              var x = e.pn,
                $ = yield C(
                  "companion-contact-client-error-save-create-user-wid-pn-converting",
                  function () {
                    return o("WAWebWidFactory").createUserWidOrThrow(x);
                  },
                );
              yield C(
                "companion-contact-client-error-save-syncd-send-contact-delete-converting",
                function () {
                  return o("WAWebContactEditSync").sendContactDelete($);
                },
              );
            }
            if (r("isStringNullOrEmpty")(e.username)) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] username-only save missing username",
                    ])),
                )
                .sendLogs("save-contact-username-only-missing-username");
              return;
            }
            var P = o("WAWebUsernameTypes").asUsername(e.username);
            yield C(
              "companion-contact-client-error-save-syncd-send-username-contact-update",
              function () {
                return o("WAWebContactEditSync").sendUsernameContactUpdate(
                  e.lid,
                  k,
                  a || l,
                  P,
                );
              },
            );
            var N = e.prevLid,
              M = e.prevUsername;
            if (N != null && !N.equals(e.lid) && !r("isStringNullOrEmpty")(M)) {
              yield C(
                "companion-contact-client-error-save-syncd-send-username-contact-delete-prev-lid",
                function () {
                  return o("WAWebContactEditSync").sendUsernameContactDelete(
                    N,
                    o("WAWebUsernameTypes").asUsername(M),
                  );
                },
              );
              var w = o("WAWebContactCollection").ContactCollection.get(N);
              w != null && w.setNotMyContact();
            }
          }
          if (
            e.prevPhoneNumber != null &&
            e.prevPhoneNumber !== e.phoneNumber
          ) {
            var A = e.prevPhoneNumber,
              F = yield C(
                "companion-contact-client-error-save-create-user-wid-prev-pn-syncd",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(A);
                },
              );
            yield C(
              "companion-contact-client-error-save-syncd-send-contact-delete-prev-pn",
              function () {
                return o("WAWebContactEditSync").sendContactDelete(F);
              },
            );
            var O = o("WAWebContactCollection").ContactCollection.get(F);
            O != null && O.setNotMyContact();
          }
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
          if (
            (r("gkx")("26258") || (yield v()), !r("WAWebNetworkStatus").online)
          )
            throw new y();
          if (e.length !== 0) {
            var t = e.map(function (e) {
                return { type: "add", phoneNumber: e.phoneNumber };
              }),
              n = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(t),
              a = o(
                "WAWebContactSyncLogger",
              ).contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                  "interactive",
                  "delta",
                ),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                  .CONTACT_SAVE,
                requestedCount: t.length,
                protocols: n.protocols,
              }),
              i = yield o(
                "WAWebContactSyncLogger",
              ).contactSyncLogger.executeWithLogging(
                a,
                function () {
                  return n.execute();
                },
                o("WAWebContactSyncErrorCodes").SAVE_CONTACT_BATCH,
              ),
              l = i.error.all || i.error.contact;
            if (l)
              throw (
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                  a,
                  l.errorCode,
                  i,
                  o("WAWebContactSyncErrorCodes").SAVE_CONTACT_BATCH,
                ),
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  l.errorCode,
                  l.errorText,
                )
              );
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i);
            var s = o(
                "WAWebUsernameGatingUtils",
              ).usernameContactUsyncLidBased(),
              u = s ? "lid" : "pn";
            try {
              yield o("WAWebContactSyncApi").handleLidSync(i);
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] handleLidSync addr_mode=",
                        " err:",
                        "",
                      ])),
                    u,
                    e,
                  )
                  .sendLogs("save-contact-batch-handle-lid-sync-error"),
                e
              );
            }
            try {
              yield o("WAWebHandleUsernameSync").handleUsernameSync(i);
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] handleUsernameSync addr_mode=",
                        " err:",
                        "",
                      ])),
                    u,
                    e,
                  )
                  .sendLogs("save-contact-batch-handle-username-sync-error"),
                e
              );
            }
            try {
              i.list &&
                (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                  r("compactMap")(i.list, function (e) {
                    return e.id instanceof r("WAWebWid") ? e.id : null;
                  }),
                ));
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] markContactsSyncCompleted mode=",
                        " e:",
                        "",
                      ])),
                    u,
                    e,
                  )
                  .sendLogs(
                    "save-contact-batch-mark-contacts-sync-completed-error",
                  ),
                e
              );
            }
            var c = e.map(I);
            yield C(
              "companion-contact-client-error-save-batch-syncd-send-contact-update",
              function () {
                return o("WAWebContactEditSync").sendContactUpdateBatch(c);
              },
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      var n = t.firstName.trim(),
        a = t.lastName.trim(),
        i = n && a ? n + " " + a : n || a,
        l;
      try {
        l = o("WAWebWidFactory").createUserWidOrThrow(t.phoneNumber);
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveContactBatchAction] createUserWid err lidBased=",
                  "",
                ])),
              o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs(
              "companion-contact-client-error-save-batch-create-user-wid",
            ),
          t
        );
      }
      var s = o("WAWebLidMigrationUtils").toUserLid(l);
      return {
        contactId: l,
        fullName: i,
        shortName: n,
        syncToAddressbook: t.syncToAddressbook,
        lid: s,
      };
    }
    ((l.NetworkUnavailable = y),
      (l.runOrSendClientErrorLogs = C),
      (l._runDebugContactAction = v),
      (l.saveContactAction = R),
      (l.saveContactBatchAction = E));
  },
  98,
);
