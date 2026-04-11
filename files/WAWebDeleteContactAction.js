__d(
  "WAWebDeleteContactAction",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactEditSync",
    "WAWebContactSyncApi",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebFrontendContactGetters",
    "WAWebHandleUsernameSync",
    "WAWebNetworkStatus",
    "WAWebSaveContactAction",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            (r("gkx")("26258") ||
              (yield o("WAWebSaveContactAction")._runDebugContactAction()),
            !r("WAWebNetworkStatus").online)
          )
            throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
          var n = t.phoneNumber || t.lid,
            a = o("WAWebContactSyncUtils").constructUsyncDeltaQuery([
              { type: "delete", contact: n },
            ]),
            i = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_MUTATION_CONTACT_DELETE,
              requestedCount: 1,
              protocols: a.protocols,
            }),
            l = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(i, function () {
              return a.execute();
            }),
            s = l.error.all || l.error.contact;
          if (s)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                i,
                s.errorCode,
                l,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                s.errorCode,
                s.errorText,
              )
            );
          (o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
            yield o("WAWebContactSyncApi").handleLidSync(l),
            yield o("WAWebHandleUsernameSync").handleUsernameSync(l),
            l.list &&
              (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                r("compactMap")(l.list, function (e) {
                  return e.id instanceof r("WAWebWid") ? e.id : null;
                }),
              )));
          var u = o("WAWebContactCollection").ContactCollection.get(n);
          if (!u || !o("WAWebFrontendContactGetters").getIsMyContact(u)) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] Contact is already deleted",
                ])),
            );
            return;
          }
          (u.setNotMyContact(),
            t.lid
              ? yield o("WAWebContactEditSync").sendUsernameContactDelete(
                  t.lid,
                  t.username,
                )
              : yield o("WAWebContactEditSync").sendContactDelete(
                  t.phoneNumber,
                ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            ).contactSyncLogger.executeWithLogging(a, function () {
              return n.execute();
            }),
            l = i.error.all || i.error.contact;
          if (l)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                a,
                l.errorCode,
                i,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                l.errorCode,
                l.errorText,
              )
            );
          (o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
            yield o("WAWebContactSyncApi").handleLidSync(i),
            yield o("WAWebHandleUsernameSync").handleUsernameSync(i),
            i.list &&
              (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                r("compactMap")(i.list, function (e) {
                  return e.id instanceof r("WAWebWid") ? e.id : null;
                }),
              )));
          var u = [],
            c = 0,
            d = t.filter(function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e);
              return !t || !o("WAWebFrontendContactGetters").getIsMyContact(t)
                ? (c++, u.length < 3 && u.push(e), !1)
                : (t.setNotMyContact(), !0);
            });
          (c > 0 &&
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactBatchAction] ",
                  " contacts are already deleted => ",
                  "",
                ])),
              c,
              u,
            ),
            d.length > 0 &&
              (yield o("WAWebContactEditSync").sendContactDeleteBatch(d)));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.deleteContactAction = u), (l.deleteContactBatchAction = d));
  },
  98,
);
