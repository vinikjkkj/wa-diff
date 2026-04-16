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
      _ = n("cr:27664") == null ? void 0 : n("cr:27664").debugConfigs,
      f = (function (e) {
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
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (_ != null &&
              _.delaySaveMs &&
              (yield o("WAPromiseDelays").delayMs(_.delaySaveMs)),
            _ != null && _.simulateErrorOnSaveOrDeleteContact)
          ) {
            var e = _.simulateErrorOnSaveOrDeleteContact;
            switch (((_.simulateErrorOnSaveOrDeleteContact = null), e)) {
              case "USYNC":
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(1);
              case "NETWORK":
                throw new f();
              case "CLIENT":
                throw r("err")("Client error");
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i = t.firstName,
            l = t.isConvertingContactType,
            d = t.lastName;
          if (
            (r("gkx")("26258") || (yield g()), !r("WAWebNetworkStatus").online)
          )
            throw new f();
          var m = [];
          if (t.phoneNumber != null) {
            var p = t.phoneNumber,
              _ = t.prevPhoneNumber;
            (m.push({ type: "add", phoneNumber: p }),
              _ != null &&
                _ !== p &&
                m.push({
                  type: "delete",
                  contact: o("WAWebWidFactory").createUserWidOrThrow(_),
                }));
          }
          var h = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(m),
            y = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_SAVE,
              requestedCount: m.length,
              protocols: h.protocols,
            }),
            C = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              y,
              function () {
                return h.execute();
              },
              o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
            ),
            b = C.error.all || C.error.contact;
          if (b)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                y,
                b.errorCode,
                C,
                o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                b.errorCode,
                b.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(y, C);
          var v = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            S = v ? "lid" : "pn",
            R = (n = (a = C.list) == null ? void 0 : a.length) != null ? n : 0;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[saveContactAction] addr_mode=",
                " usyncListSize=",
                " ",
              ])),
            S,
            R,
          );
          try {
            yield o("WAWebContactSyncApi").handleLidSync(C);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] handleLidSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  S,
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] handleUsernameSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  S,
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveContactAction] markContactsSyncCompleted addr_mode=",
                      " err:",
                      "",
                    ])),
                  S,
                  e,
                )
                .sendLogs("save-contact-mark-sync-completed-error"),
              e
            );
          }
          var L = i && d ? i + " " + d : i || d;
          if (t.phoneNumber != null) {
            var E,
              k = o("WAWebWidFactory").createUserWidOrThrow(t.phoneNumber),
              I = t.lid;
            (l === !0 &&
              I &&
              !r("isStringNullOrEmpty")(t.username) &&
              (yield o("WAWebContactEditSync").sendUsernameContactDelete(
                I,
                t.username,
              )),
              yield o("WAWebContactEditSync").sendContactUpdate(
                k,
                L,
                i || d,
                t.syncToAddressbook,
                (E = t.lid) != null
                  ? E
                  : o("WAWebLidMigrationUtils").toUserLid(k),
                t.username,
              ));
          } else
            (l === !0 &&
              !r("isStringNullOrEmpty")(t.pn) &&
              (yield o("WAWebContactEditSync").sendContactDelete(
                o("WAWebWidFactory").createUserWidOrThrow(t.pn),
              )),
              yield o("WAWebContactEditSync").sendUsernameContactUpdate(
                t.lid,
                L,
                i || d,
                t.username,
              ));
          if (
            t.prevPhoneNumber != null &&
            t.prevPhoneNumber !== t.phoneNumber
          ) {
            var T = o("WAWebWidFactory").createUserWidOrThrow(
              t.prevPhoneNumber,
            );
            yield o("WAWebContactEditSync").sendContactDelete(T);
            var D = o("WAWebContactCollection").ContactCollection.get(T);
            D != null && D.setNotMyContact();
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
          if (
            (r("gkx")("26258") || (yield g()), !r("WAWebNetworkStatus").online)
          )
            throw new f();
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] markContactsSyncCompleted addr_mode=",
                        " err:",
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
            var c = e.map(function (e) {
              var t = e.firstName.trim(),
                n = e.lastName.trim(),
                r = t && n ? t + " " + n : t || n,
                a = o("WAWebWidFactory").createUserWidOrThrow(e.phoneNumber),
                i = o("WAWebLidMigrationUtils").toUserLid(a);
              return {
                contactId: a,
                fullName: r,
                shortName: t,
                syncToAddressbook: e.syncToAddressbook,
                lid: i,
              };
            });
            yield o("WAWebContactEditSync").sendContactUpdateBatch(c);
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.NetworkUnavailable = f),
      (l._runDebugContactAction = g),
      (l.saveContactAction = y),
      (l.saveContactBatchAction = b));
  },
  98,
);
