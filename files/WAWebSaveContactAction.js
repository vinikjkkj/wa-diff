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
      g = n("cr:27664") == null ? void 0 : n("cr:27664").debugConfigs,
      h = (function (e) {
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
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (g != null &&
              g.delaySaveMs &&
              (yield o("WAPromiseDelays").delayMs(g.delaySaveMs)),
            g != null && g.simulateErrorOnSaveOrDeleteContact)
          ) {
            var e = g.simulateErrorOnSaveOrDeleteContact;
            switch (((g.simulateErrorOnSaveOrDeleteContact = null), e)) {
              case "USYNC":
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(1);
              case "NETWORK":
                throw new h();
              case "CLIENT":
                throw r("err")("Client error");
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.firstName,
            i = e.isConvertingContactType,
            l = e.lastName;
          if (
            (r("gkx")("26258") || (yield b()), !r("WAWebNetworkStatus").online)
          )
            throw new h();
          var s = [];
          if (e.phoneNumber != null) {
            var p = e.phoneNumber,
              _ = e.prevPhoneNumber;
            (s.push({ type: "add", phoneNumber: p }),
              _ != null &&
                _ !== p &&
                s.push({
                  type: "delete",
                  contact: yield y(
                    "companion-contact-client-error-save-create-user-wid-prev-pn-usync",
                    function () {
                      return o("WAWebWidFactory").createUserWidOrThrow(_);
                    },
                  ),
                }));
          }
          var f = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(s),
            g = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_SAVE,
              requestedCount: s.length,
              protocols: f.protocols,
            }),
            C = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              g,
              function () {
                return f.execute();
              },
              o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
            ),
            v = C.error.all || C.error.contact;
          if (v)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                g,
                v.errorCode,
                C,
                o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                v.errorCode,
                v.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(g, C);
          var S = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            R = S ? "lid" : "pn",
            L = (t = (n = C.list) == null ? void 0 : n.length) != null ? t : 0;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[saveContactAction] addr_mode=",
                " usyncListSize=",
                " ",
              ])),
            R,
            L,
          );
          try {
            yield o("WAWebContactSyncApi").handleLidSync(C);
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
                  R,
                  e,
                )
                .sendLogs("save-contact-handle-lid-sync-error"),
              e
            );
          }
          try {
            yield o("WAWebHandleUsernameSync").handleUsernameSync(C);
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
                  R,
                  e,
                )
                .sendLogs("save-contact-handle-username-sync-error"),
              e
            );
          }
          try {
            C.list &&
              (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                r("compactMap")(C.list, function (e) {
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
                  R,
                  e,
                )
                .sendLogs("save-contact-mark-sync-completed-error"),
              e
            );
          }
          var E = a && l ? a + " " + l : a || l;
          if (e.phoneNumber != null) {
            var k = yield y(
                "companion-contact-client-error-save-create-user-wid-pn-syncd",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(
                    e.phoneNumber,
                  );
                },
              ),
              I = e.lid;
            if (i === !0 && I && !r("isStringNullOrEmpty")(e.username)) {
              var T = e.username;
              yield y(
                "companion-contact-client-error-save-syncd-send-username-contact-delete",
                function () {
                  return o("WAWebContactEditSync").sendUsernameContactDelete(
                    I,
                    T,
                  );
                },
              );
            }
            yield y(
              "companion-contact-client-error-save-syncd-send-contact-update",
              function () {
                var t;
                return o("WAWebContactEditSync").sendContactUpdate(
                  k,
                  E,
                  a || l,
                  e.syncToAddressbook,
                  (t = e.lid) != null
                    ? t
                    : o("WAWebLidMigrationUtils").toUserLid(k),
                  e.username,
                );
              },
            );
          } else {
            if (i === !0 && !r("isStringNullOrEmpty")(e.pn)) {
              var D = e.pn,
                x = yield y(
                  "companion-contact-client-error-save-create-user-wid-pn-converting",
                  function () {
                    return o("WAWebWidFactory").createUserWidOrThrow(D);
                  },
                );
              yield y(
                "companion-contact-client-error-save-syncd-send-contact-delete-converting",
                function () {
                  return o("WAWebContactEditSync").sendContactDelete(x);
                },
              );
            }
            yield y(
              "companion-contact-client-error-save-syncd-send-username-contact-update",
              function () {
                return o("WAWebContactEditSync").sendUsernameContactUpdate(
                  e.lid,
                  E,
                  a || l,
                  e.username,
                );
              },
            );
          }
          if (
            e.prevPhoneNumber != null &&
            e.prevPhoneNumber !== e.phoneNumber
          ) {
            var $ = e.prevPhoneNumber,
              P = yield y(
                "companion-contact-client-error-save-create-user-wid-prev-pn-syncd",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow($);
                },
              );
            yield y(
              "companion-contact-client-error-save-syncd-send-contact-delete-prev-pn",
              function () {
                return o("WAWebContactEditSync").sendContactDelete(P);
              },
            );
            var N = o("WAWebContactCollection").ContactCollection.get(P);
            N != null && N.setNotMyContact();
          }
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
          if (
            (r("gkx")("26258") || (yield b()), !r("WAWebNetworkStatus").online)
          )
            throw new h();
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
            var c = e.map(k);
            yield y(
              "companion-contact-client-error-save-batch-syncd-send-contact-update",
              function () {
                return o("WAWebContactEditSync").sendContactUpdateBatch(c);
              },
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
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
    ((l.NetworkUnavailable = h),
      (l.runOrSendClientErrorLogs = y),
      (l._runDebugContactAction = b),
      (l.saveContactAction = S),
      (l.saveContactBatchAction = L));
  },
  98,
);
