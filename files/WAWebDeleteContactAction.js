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
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            p = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              l,
              function () {
                return i.execute();
              },
              o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
            ),
            _ = p.error.all || p.error.contact;
          if (_)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                l,
                _.errorCode,
                p,
                o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                _.errorCode,
                _.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, p);
          var f = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            g = f ? "lid" : "pn",
            h = (t = (n = p.list) == null ? void 0 : n.length) != null ? t : 0;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteContactAction] addr_mode=",
                " usyncListSize=",
                "",
              ])),
            g,
            h,
          );
          try {
            yield o("WAWebContactSyncApi").handleLidSync(p);
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
                  g,
                  e,
                )
                .sendLogs("delete-contact-handle-lid-sync-error"),
              e
            );
          }
          try {
            yield o("WAWebHandleUsernameSync").handleUsernameSync(p);
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
                  g,
                  e,
                )
                .sendLogs("delete-contact-handle-username-sync-error"),
              e
            );
          }
          try {
            p.list &&
              (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                r("compactMap")(p.list, function (e) {
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
                  g,
                  e,
                )
                .sendLogs("delete-contact-mark-sync-completed-error"),
              e
            );
          }
          var y = o("WAWebContactCollection").ContactCollection.get(a);
          if (!y || !o("WAWebFrontendContactGetters").getIsMyContact(y)) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] Contact is already deleted",
                ])),
            );
            return;
          }
          if ((y.setNotMyContact(), e.lid)) {
            var C = e.lid,
              b = e.username;
            yield o("WAWebSaveContactAction").runOrSendClientErrorLogs(
              "companion-contact-client-error-delete-syncd-send-username-contact-delete",
              function () {
                return o("WAWebContactEditSync").sendUsernameContactDelete(
                  C,
                  b,
                );
              },
            );
          } else {
            var v = e.phoneNumber;
            yield o("WAWebSaveContactAction").runOrSendClientErrorLogs(
              "companion-contact-client-error-delete-syncd-send-contact-delete",
              function () {
                return o("WAWebContactEditSync").sendContactDelete(v);
              },
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (r("gkx")("26258") ||
              (yield o("WAWebSaveContactAction")._runDebugContactAction()),
            !r("WAWebNetworkStatus").online)
          )
            throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
          var t = e.map(v),
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
        b.apply(this, arguments)
      );
    }
    function v(t) {
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
    ((l.deleteContactAction = h), (l.deleteContactBatchAction = C));
  },
  98,
);
