__d(
  "WAWebDeleteContactAction",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactEditSync",
    "WAWebContactSyncApi",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebFrontendContactGetters",
    "WAWebHandleUsernameSync",
    "WAWebNetworkStatus",
    "WAWebSaveContactAction",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          if (
            (r("gkx")("26258") ||
              (yield o("WAWebSaveContactAction")._runDebugContactAction()),
            !r("WAWebNetworkStatus").online)
          )
            throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
          var a = e.phoneNumber || e.lid,
            i = o("WAWebContactSyncUtils").constructUsyncDeltaQuery([
              { type: "delete", contact: a },
            ]),
            l = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_MUTATION_CONTACT_DELETE,
              requestedCount: 1,
              protocols: i.protocols,
            }),
            _ = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              l,
              function () {
                return i.execute();
              },
              o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
            ),
            f = _.error.all || _.error.contact;
          if (f)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                l,
                f.errorCode,
                _,
                o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                f.errorCode,
                f.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, _);
          var g = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            h = g ? "lid" : "pn",
            y = (t = (n = _.list) == null ? void 0 : n.length) != null ? t : 0;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteContactAction] addr_mode=",
                " usyncListSize=",
                "",
              ])),
            h,
            y,
          );
          try {
            yield o("WAWebContactSyncApi").handleLidSync(_);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteContactAction] handleLidSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  h,
                  e,
                )
                .sendLogs("delete-contact-handle-lid-sync-error"),
              e
            );
          }
          try {
            yield o("WAWebHandleUsernameSync").handleUsernameSync(_);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteContactAction] handleUsernameSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  h,
                  e,
                )
                .sendLogs("delete-contact-handle-username-sync-error"),
              e
            );
          }
          try {
            _.list &&
              (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                r("compactMap")(_.list, function (e) {
                  return e.id instanceof r("WAWebWid") ? e.id : null;
                }),
              ));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteContactAction] markContactsSyncCompleted addr_mode=",
                      " err:",
                      "",
                    ])),
                  h,
                  e,
                )
                .sendLogs("delete-contact-mark-sync-completed-error"),
              e
            );
          }
          var C = o("WAWebContactCollection").ContactCollection.get(a);
          if (!C || !o("WAWebFrontendContactGetters").getIsMyContact(C)) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] Contact is already deleted",
                ])),
            );
            return;
          }
          if ((C.setNotMyContact(), e.lid)) {
            var b = e.lid,
              v = o("WAWebUsernameTypes").asMaybeUsername(e.username);
            if (v == null) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteContactAction] LID delete missing username",
                    ])),
                )
                .sendLogs("delete-contact-lid-missing-username");
              return;
            }
            yield o("WAWebSaveContactAction").runOrSendClientErrorLogs(
              "companion-contact-client-error-delete-syncd-send-username-contact-delete",
              function () {
                return o("WAWebContactEditSync").sendUsernameContactDelete(
                  b,
                  v,
                );
              },
            );
          } else {
            var S = e.phoneNumber;
            yield o("WAWebSaveContactAction").runOrSendClientErrorLogs(
              "companion-contact-client-error-delete-syncd-send-contact-delete",
              function () {
                return o("WAWebContactEditSync").sendContactDelete(S);
              },
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
          if (
            (r("gkx")("26258") ||
              (yield o("WAWebSaveContactAction")._runDebugContactAction()),
            !r("WAWebNetworkStatus").online)
          )
            throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
          var t = e.map(S),
            n = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(
              t.map(function (e) {
                return { type: "delete", contact: e };
              }),
            ),
            a = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_MUTATION_CONTACT_DELETE,
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
              o("WAWebContactSyncErrorCodes").DELETE_CONTACT_BATCH,
            ),
            l = i.error.all || i.error.contact;
          if (l)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                a,
                l.errorCode,
                i,
                o("WAWebContactSyncErrorCodes").DELETE_CONTACT_BATCH,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                l.errorCode,
                l.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i);
          var s = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            u = s ? "lid" : "pn";
          try {
            yield o("WAWebContactSyncApi").handleLidSync(i);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteContactBatchAction] handleLidSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  u,
                  e,
                )
                .sendLogs("delete-contact-batch-handle-lid-sync-error"),
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
                      "[deleteContactBatchAction] handleUsernameSync addr_mode=",
                      " err:",
                      "",
                    ])),
                  u,
                  e,
                )
                .sendLogs("delete-contact-batch-handle-username-sync-error"),
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
                      "[deleteContactBatchAction] markContactsSyncCompleted addr_mode=",
                      " err:",
                      "",
                    ])),
                  u,
                  e,
                )
                .sendLogs("delete-contact-batch-mark-sync-completed-error"),
              e
            );
          }
          var c = [],
            d = 0,
            m = t.filter(function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e);
              return !t || !o("WAWebFrontendContactGetters").getIsMyContact(t)
                ? (d++, c.length < 3 && c.push(e), !1)
                : (t.setNotMyContact(), !0);
            });
          (d > 0 &&
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactBatchAction] ",
                  " contacts are already deleted => ",
                  "",
                ])),
              d,
              c,
            ),
            m.length > 0 &&
              (yield o("WAWebSaveContactAction").runOrSendClientErrorLogs(
                "companion-contact-client-error-delete-batch-syncd-send-contact-delete",
                function () {
                  return o("WAWebContactEditSync").sendContactDeleteBatch(m);
                },
              )));
        })),
        v.apply(this, arguments)
      );
    }
    function S(t) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(t + "@c.us");
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactBatchAction] companion-contact-client-error-delete-batch-create-user-wid username_contact_usync_lid_based=",
                  "",
                ])),
              o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs(
              "companion-contact-client-error-delete-batch-create-user-wid",
            ),
          t
        );
      }
    }
    ((l.deleteContactAction = y), (l.deleteContactBatchAction = b));
  },
  98,
);
