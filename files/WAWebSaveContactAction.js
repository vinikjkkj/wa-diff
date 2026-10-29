__d(
  "WAWebSaveContactAction",
  [
    "WACustomError",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactEditSync",
    "WAWebContactSyncApi",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebContactUtils",
    "WAWebHandleUsernameSync",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
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
                  s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  e,
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.firstName,
            i = e.isConvertingContactType,
            l = e.lastName;
          if (!r("WAWebNetworkStatus").online) throw new h();
          var s = [];
          if (e.phoneNumber != null) {
            var _ = e.phoneNumber,
              f = e.prevPhoneNumber;
            (s.push({ type: "add", phoneNumber: _ }),
              f != null &&
                f !== _ &&
                s.push({
                  type: "delete",
                  contact: yield y(
                    "companion-contact-client-error-save-create-user-wid-prev-pn-usync",
                    function () {
                      return o("WAWebWidFactory").createUserWidOrThrow(f);
                    },
                  ),
                }));
          } else
            s.push({ type: "add_username", lid: e.lid, username: e.username });
          var g = yield o("WAWebContactSyncUtils").constructUsyncDeltaQuery(s),
            C = o(
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
              C,
              function () {
                return g.execute();
              },
              o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
            ),
            v = b.error.all || b.error.contact;
          if (v)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                C,
                v.errorCode,
                b,
                o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                v.errorCode,
                v.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(C, b);
          var S =
            (t = (n = b.list) == null ? void 0 : n.length) != null ? t : 0;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[saveContactAction] usyncListSize=",
                " ",
              ])),
            S,
          );
          try {
            yield o("WAWebContactSyncApi").handleLidSync(b);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] handleLidSync err:",
                      "",
                    ])),
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
                      "[saveContactAction] handleUsernameSync err:",
                      "",
                    ])),
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
                      "[saveContactAction] markContactsSyncCompleted e:",
                      "",
                    ])),
                  e,
                )
                .sendLogs("save-contact-mark-sync-completed-error"),
              e
            );
          }
          var R = a && l ? a + " " + l : a || l;
          if (e.phoneNumber != null) {
            var L = yield y(
                "companion-contact-client-error-save-create-user-wid-pn-syncd",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(
                    e.phoneNumber,
                  );
                },
              ),
              E = e.lid;
            if (i === !0 && E && !r("isStringNullOrEmpty")(e.username)) {
              var k = o("WAWebUsernameTypes").asUsername(e.username);
              yield y(
                "companion-contact-client-error-save-syncd-send-username-contact-delete",
                function () {
                  return o("WAWebContactEditSync").sendUsernameContactDelete(
                    E,
                    k,
                  );
                },
              );
            }
            yield y(
              "companion-contact-client-error-save-syncd-send-contact-update",
              function () {
                var t;
                return o("WAWebContactEditSync").sendContactUpdate({
                  contactId: L,
                  fullName: R,
                  lid:
                    (t = e.lid) != null
                      ? t
                      : o("WAWebLidMigrationUtils").toUserLid(L),
                  shortName: a || l,
                  syncToAddressbook: e.syncToAddressbook,
                  username: e.username,
                });
              },
            );
          } else {
            if (i === !0 && !r("isStringNullOrEmpty")(e.pn)) {
              var I = e.pn,
                T = yield y(
                  "companion-contact-client-error-save-create-user-wid-pn-converting",
                  function () {
                    return o("WAWebWidFactory").createUserWidOrThrow(I);
                  },
                );
              yield y(
                "companion-contact-client-error-save-syncd-send-contact-delete-converting",
                function () {
                  return o("WAWebContactEditSync").sendContactDelete(T);
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
            var D = o("WAWebUsernameTypes").asUsername(e.username);
            yield y(
              "companion-contact-client-error-save-syncd-send-username-contact-update",
              function () {
                return o("WAWebContactEditSync").sendUsernameContactUpdate(
                  e.lid,
                  R,
                  a || l,
                  D,
                );
              },
            );
            var x = e.prevLid,
              $ = e.prevUsername;
            if (x != null && !x.equals(e.lid) && !r("isStringNullOrEmpty")($)) {
              yield y(
                "companion-contact-client-error-save-syncd-send-username-contact-delete-prev-lid",
                function () {
                  return o("WAWebContactEditSync").sendUsernameContactDelete(
                    x,
                    o("WAWebUsernameTypes").asUsername($),
                  );
                },
              );
              var P = o("WAWebContactCollection").ContactCollection.get(x);
              P != null && o("WAWebContactUtils").setContactNotMine(P);
            }
          }
          if (
            e.prevPhoneNumber != null &&
            e.prevPhoneNumber !== e.phoneNumber
          ) {
            var N = e.prevPhoneNumber,
              M = yield y(
                "companion-contact-client-error-save-create-user-wid-prev-pn-syncd",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(N);
                },
              );
            yield y(
              "companion-contact-client-error-save-syncd-send-contact-delete-prev-pn",
              function () {
                return o("WAWebContactEditSync").sendContactDelete(M);
              },
            );
            var w = o("WAWebContactCollection").ContactCollection.get(M);
            w != null && o("WAWebContactUtils").setContactNotMine(w);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t === void 0 && (t = []), !r("WAWebNetworkStatus").online))
            throw new h();
          if (!(e.length === 0 && t.length === 0)) {
            var n = [].concat(
                e.map(function (e) {
                  return { type: "add", phoneNumber: e.phoneNumber };
                }),
                t.map(function (e) {
                  return {
                    type: "add_username",
                    lid: e.lid,
                    username: e.username,
                  };
                }),
              ),
              a = yield o("WAWebContactSyncUtils").constructUsyncDeltaQuery(n),
              i = o(
                "WAWebContactSyncLogger",
              ).contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                  "interactive",
                  "delta",
                ),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                  .CONTACT_SAVE,
                requestedCount: n.length,
                protocols: a.protocols,
              }),
              l = yield o(
                "WAWebContactSyncLogger",
              ).contactSyncLogger.executeWithLogging(
                i,
                function () {
                  return a.execute();
                },
                o("WAWebContactSyncErrorCodes").SAVE_CONTACT_BATCH,
              ),
              s = l.error.all || l.error.contact;
            if (s)
              throw (
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                  i,
                  s.errorCode,
                  l,
                  o("WAWebContactSyncErrorCodes").SAVE_CONTACT_BATCH,
                ),
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  s.errorCode,
                  s.errorText,
                )
              );
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
            try {
              yield o("WAWebContactSyncApi").handleLidSync(l);
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] handleLidSync err:",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("save-contact-batch-handle-lid-sync-error"),
                e
              );
            }
            try {
              yield o("WAWebHandleUsernameSync").handleUsernameSync(l);
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] handleUsernameSync err:",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("save-contact-batch-handle-username-sync-error"),
                e
              );
            }
            try {
              l.list &&
                (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                  r("compactMap")(l.list, function (e) {
                    return e.id instanceof r("WAWebWid") ? e.id : null;
                  }),
                ));
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] markContactsSyncCompleted e:",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs(
                    "save-contact-batch-mark-contacts-sync-completed-error",
                  ),
                e
              );
            }
            if (e.length > 0) {
              var u = e.map(E);
              yield y(
                "companion-contact-client-error-save-batch-syncd-send-contact-update",
                function () {
                  return o("WAWebContactEditSync").sendContactUpdateBatch(u);
                },
              );
            }
            t.length > 0 &&
              (yield y(
                "companion-contact-client-error-save-batch-syncd-send-username-contact-update",
                function () {
                  return o(
                    "WAWebContactEditSync",
                  ).sendUsernameContactUpdateBatch(t.map(L));
                },
              ));
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = e.firstName.trim(),
        n = e.lastName.trim();
      return {
        lid: e.lid,
        fullName: t && n ? t + " " + n : t || n,
        firstName: t,
        username: o("WAWebUsernameTypes").asUsername(e.username),
      };
    }
    function E(t) {
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
                  "[saveContactBatchAction] createUserWid err",
                ])),
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
      (l.saveContactAction = b),
      (l.saveContactBatchAction = S));
  },
  98,
);
