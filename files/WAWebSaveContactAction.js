__d(
  "WAWebSaveContactAction",
  [
    "WACustomError",
    "WAPromiseDelays",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactEditSync",
    "WAWebContactSyncApi",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebHandleUsernameSync",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
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
    var e = n("cr:27664") == null ? void 0 : n("cr:27664").debugConfigs,
      s = (function (e) {
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
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (e != null &&
              e.delaySaveMs &&
              (yield o("WAPromiseDelays").delayMs(e.delaySaveMs)),
            e != null && e.simulateErrorOnSaveOrDeleteContact)
          ) {
            var t = e.simulateErrorOnSaveOrDeleteContact;
            switch (((e.simulateErrorOnSaveOrDeleteContact = null), t)) {
              case "USYNC":
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(1);
              case "NETWORK":
                throw new s();
              case "CLIENT":
                throw r("err")("Client error");
            }
          }
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
          var t = e.firstName,
            n = e.isConvertingContactType,
            a = e.lastName;
          if (
            (r("gkx")("26258") || (yield u()), !r("WAWebNetworkStatus").online)
          )
            throw new s();
          var i = [];
          if (e.phoneNumber != null) {
            var l = e.phoneNumber,
              c = e.prevPhoneNumber;
            (i.push({ type: "add", phoneNumber: l }),
              c != null &&
                c !== l &&
                i.push({
                  type: "delete",
                  contact: o("WAWebWidFactory").createUserWidOrThrow(c),
                }));
          }
          var d = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(i),
            m = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "delta",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CONTACT_SAVE,
              requestedCount: i.length,
              protocols: d.protocols,
            }),
            p = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(m, function () {
              return d.execute();
            }),
            _ = p.error.all || p.error.contact;
          if (_)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                m,
                _.errorCode,
                p,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                _.errorCode,
                _.errorText,
              )
            );
          (o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(m, p),
            yield o("WAWebContactSyncApi").handleLidSync(p),
            yield o("WAWebHandleUsernameSync").handleUsernameSync(p),
            p.list &&
              (yield o("WAWebContactSyncApi").markContactsSyncCompleted(
                r("compactMap")(p.list, function (e) {
                  return e.id instanceof r("WAWebWid") ? e.id : null;
                }),
              )));
          var f = t && a ? t + " " + a : t || a;
          if (e.phoneNumber != null) {
            var g,
              h = o("WAWebWidFactory").createUserWidOrThrow(e.phoneNumber),
              y = e.lid;
            (n === !0 &&
              y &&
              !r("isStringNullOrEmpty")(e.username) &&
              (yield o("WAWebContactEditSync").sendUsernameContactDelete(
                y,
                e.username,
              )),
              yield o("WAWebContactEditSync").sendContactUpdate(
                h,
                f,
                t || a,
                e.syncToAddressbook,
                (g = e.lid) != null
                  ? g
                  : o("WAWebLidMigrationUtils").toUserLid(h),
                e.username,
              ));
          } else
            (n === !0 &&
              !r("isStringNullOrEmpty")(e.pn) &&
              (yield o("WAWebContactEditSync").sendContactDelete(
                o("WAWebWidFactory").createUserWidOrThrow(e.pn),
              )),
              yield o("WAWebContactEditSync").sendUsernameContactUpdate(
                e.lid,
                f,
                t || a,
                e.username,
              ));
          if (
            e.prevPhoneNumber != null &&
            e.prevPhoneNumber !== e.phoneNumber
          ) {
            var C = o("WAWebWidFactory").createUserWidOrThrow(
              e.prevPhoneNumber,
            );
            yield o("WAWebContactEditSync").sendContactDelete(C);
            var b = o("WAWebContactCollection").ContactCollection.get(C);
            b != null && b.setNotMyContact();
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (r("gkx")("26258") || (yield u()), !r("WAWebNetworkStatus").online)
          )
            throw new s();
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
        _.apply(this, arguments)
      );
    }
    ((l.NetworkUnavailable = s),
      (l._runDebugContactAction = u),
      (l.saveContactAction = d),
      (l.saveContactBatchAction = p));
  },
  98,
);
