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
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n, a;
          if (
            (r("gkx")("26258") ||
              (yield o("WAWebSaveContactAction")._runDebugContactAction()),
            !r("WAWebNetworkStatus").online)
          )
            throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
          var i = t.phoneNumber || t.lid,
            l = o("WAWebContactSyncUtils").constructUsyncDeltaQuery([
              { type: "delete", contact: i },
            ]),
            m = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_MUTATION_CONTACT_DELETE,
              requestedCount: 1,
              protocols: l.protocols,
            }),
            p = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              m,
              function () {
                return l.execute();
              },
              o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
            ),
            _ = p.error.all || p.error.contact;
          if (_)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                m,
                _.errorCode,
                p,
                o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                _.errorCode,
                _.errorText,
              )
            );
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(m, p);
          var f = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            g = f ? "lid" : "pn",
            h = (n = (a = p.list) == null ? void 0 : a.length) != null ? n : 0;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
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
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
          var y = o("WAWebContactCollection").ContactCollection.get(i);
          if (!y || !o("WAWebFrontendContactGetters").getIsMyContact(y)) {
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] Contact is already deleted",
                ])),
            );
            return;
          }
          (y.setNotMyContact(),
            t.lid
              ? yield o("WAWebContactEditSync").sendUsernameContactDelete(
                  t.lid,
                  t.username,
                )
              : yield o("WAWebContactEditSync").sendContactDelete(
                  t.phoneNumber,
                ));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (r("gkx")("26258") ||
              (yield o("WAWebSaveContactAction")._runDebugContactAction()),
            !r("WAWebNetworkStatus").online)
          )
            throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
          var t = e.map(function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(e + "@c.us");
            }),
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            g = t.filter(function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e);
              return !t || !o("WAWebFrontendContactGetters").getIsMyContact(t)
                ? (d++, c.length < 3 && c.push(e), !1)
                : (t.setNotMyContact(), !0);
            });
          (d > 0 &&
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactBatchAction] ",
                  " contacts are already deleted => ",
                  "",
                ])),
              d,
              c,
            ),
            g.length > 0 &&
              (yield o("WAWebContactEditSync").sendContactDeleteBatch(g)));
        })),
        C.apply(this, arguments)
      );
    }
    ((l.deleteContactAction = g), (l.deleteContactBatchAction = y));
  },
  98,
);
