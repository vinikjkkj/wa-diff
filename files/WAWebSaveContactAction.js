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
    async function y(t, n) {
      try {
        return await n();
      } catch (n) {
        throw (
          o("WALogger")
            .ERROR(
              e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              t,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs(t),
          n
        );
      }
    }
    async function C(e) {
      var t,
        n,
        a = e.firstName,
        i = e.isConvertingContactType,
        l = e.lastName;
      if (!r("WAWebNetworkStatus").online) throw new h();
      var p = [];
      if (e.phoneNumber != null) {
        var _ = e.phoneNumber,
          f = e.prevPhoneNumber;
        (p.push({ type: "add", phoneNumber: _ }),
          f != null &&
            f !== _ &&
            p.push({
              type: "delete",
              contact: await y(
                "companion-contact-client-error-save-create-user-wid-prev-pn-usync",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(f);
                },
              ),
            }));
      } else p.push({ type: "add_username", lid: e.lid, username: e.username });
      var g = await o("WAWebContactSyncUtils").constructUsyncDeltaQuery(p),
        C = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "delta",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .CONTACT_SAVE,
          requestedCount: p.length,
          protocols: g.protocols,
        }),
        b = await o(
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
      var S = (t = (n = b.list) == null ? void 0 : n.length) != null ? t : 0;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[saveContactAction] usyncListSize=",
            " ",
          ])),
        S,
      );
      try {
        await o("WAWebContactSyncApi").handleLidSync(b);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
        await o("WAWebHandleUsernameSync").handleUsernameSync(b);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
          (await o("WAWebContactSyncApi").markContactsSyncCompleted(
            r("compactMap")(b.list, function (e) {
              return e.id instanceof r("WAWebWid") ? e.id : null;
            }),
          ));
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
        var L = await y(
            "companion-contact-client-error-save-create-user-wid-pn-syncd",
            function () {
              return o("WAWebWidFactory").createUserWidOrThrow(e.phoneNumber);
            },
          ),
          E = e.lid;
        if (i === !0 && E && !r("isStringNullOrEmpty")(e.username)) {
          var k = o("WAWebUsernameTypes").asUsername(e.username);
          await y(
            "companion-contact-client-error-save-syncd-send-username-contact-delete",
            function () {
              return o("WAWebContactEditSync").sendUsernameContactDelete(E, k);
            },
          );
        }
        await y(
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
            T = await y(
              "companion-contact-client-error-save-create-user-wid-pn-converting",
              function () {
                return o("WAWebWidFactory").createUserWidOrThrow(I);
              },
            );
          await y(
            "companion-contact-client-error-save-syncd-send-contact-delete-converting",
            function () {
              return o("WAWebContactEditSync").sendContactDelete(T);
            },
          );
        }
        if (r("isStringNullOrEmpty")(e.username)) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveContactAction] username-only save missing username",
                ])),
            )
            .sendLogs("save-contact-username-only-missing-username");
          return;
        }
        var D = o("WAWebUsernameTypes").asUsername(e.username);
        await y(
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
          await y(
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
      if (e.prevPhoneNumber != null && e.prevPhoneNumber !== e.phoneNumber) {
        var N = e.prevPhoneNumber,
          M = await y(
            "companion-contact-client-error-save-create-user-wid-prev-pn-syncd",
            function () {
              return o("WAWebWidFactory").createUserWidOrThrow(N);
            },
          );
        await y(
          "companion-contact-client-error-save-syncd-send-contact-delete-prev-pn",
          function () {
            return o("WAWebContactEditSync").sendContactDelete(M);
          },
        );
        var w = o("WAWebContactCollection").ContactCollection.get(M);
        w != null && o("WAWebContactUtils").setContactNotMine(w);
      }
    }
    async function b(e, t) {
      if ((t === void 0 && (t = []), !r("WAWebNetworkStatus").online))
        throw new h();
      if (!(e.length === 0 && t.length === 0)) {
        var n = [].concat(
            e.map(function (e) {
              return { type: "add", phoneNumber: e.phoneNumber };
            }),
            t.map(function (e) {
              return { type: "add_username", lid: e.lid, username: e.username };
            }),
          ),
          a = await o("WAWebContactSyncUtils").constructUsyncDeltaQuery(n),
          i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
            syncType: o("WAWebContactSyncLogger").getSyncTypeString(
              "interactive",
              "delta",
            ),
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
              .CONTACT_SAVE,
            requestedCount: n.length,
            protocols: a.protocols,
          }),
          l = await o(
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
          await o("WAWebContactSyncApi").handleLidSync(l);
        } catch (e) {
          throw (
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
          await o("WAWebHandleUsernameSync").handleUsernameSync(l);
        } catch (e) {
          throw (
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            (await o("WAWebContactSyncApi").markContactsSyncCompleted(
              r("compactMap")(l.list, function (e) {
                return e.id instanceof r("WAWebWid") ? e.id : null;
              }),
            ));
        } catch (e) {
          throw (
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
          var u = e.map(S);
          await y(
            "companion-contact-client-error-save-batch-syncd-send-contact-update",
            function () {
              return o("WAWebContactEditSync").sendContactUpdateBatch(u);
            },
          );
        }
        t.length > 0 &&
          (await y(
            "companion-contact-client-error-save-batch-syncd-send-username-contact-update",
            function () {
              return o("WAWebContactEditSync").sendUsernameContactUpdateBatch(
                t.map(v),
              );
            },
          ));
      }
    }
    function v(e) {
      var t = e.firstName.trim(),
        n = e.lastName.trim();
      return {
        lid: e.lid,
        fullName: t && n ? t + " " + n : t || n,
        firstName: t,
        username: o("WAWebUsernameTypes").asUsername(e.username),
      };
    }
    function S(e) {
      var t = e.firstName.trim(),
        n = e.lastName.trim(),
        a = t && n ? t + " " + n : t || n,
        i;
      try {
        i = o("WAWebWidFactory").createUserWidOrThrow(e.phoneNumber);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveContactBatchAction] createUserWid err",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(
              "companion-contact-client-error-save-batch-create-user-wid",
            ),
          e
        );
      }
      var l = o("WAWebLidMigrationUtils").toUserLid(i);
      return {
        contactId: i,
        fullName: a,
        shortName: t || n,
        syncToAddressbook: e.syncToAddressbook,
        lid: l,
      };
    }
    ((l.NetworkUnavailable = h),
      (l.runOrSendClientErrorLogs = y),
      (l.saveContactAction = C),
      (l.saveContactBatchAction = b));
  },
  98,
);
