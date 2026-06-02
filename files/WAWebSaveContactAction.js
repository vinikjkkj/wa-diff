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
    async function y(t, n) {
      try {
        return await n();
      } catch (n) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " username_contact_usync_lid_based=",
                  "",
                ])),
              t,
              o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs(t),
          n
        );
      }
    }
    async function C() {
      if (
        (g != null &&
          g.delaySaveMs &&
          (await o("WAPromiseDelays").delayMs(g.delaySaveMs)),
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
    }
    async function b(e) {
      var t,
        n,
        a = e.firstName,
        i = e.isConvertingContactType,
        l = e.lastName;
      if ((r("gkx")("26258") || (await C()), !r("WAWebNetworkStatus").online))
        throw new h();
      var m = [];
      if (e.phoneNumber != null) {
        var p = e.phoneNumber,
          _ = e.prevPhoneNumber;
        (m.push({ type: "add", phoneNumber: p }),
          _ != null &&
            _ !== p &&
            m.push({
              type: "delete",
              contact: await y(
                "companion-contact-client-error-save-create-user-wid-prev-pn-usync",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(_);
                },
              ),
            }));
      } else m.push({ type: "add_username", lid: e.lid, username: e.username });
      var f = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(m),
        g = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "delta",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .CONTACT_SAVE,
          requestedCount: m.length,
          protocols: f.protocols,
        }),
        b = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          g,
          function () {
            return f.execute();
          },
          o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
        ),
        v = b.error.all || b.error.contact;
      if (v)
        throw (
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            g,
            v.errorCode,
            b,
            o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
          ),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            v.errorCode,
            v.errorText,
          )
        );
      o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(g, b);
      var S = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
        R = S ? "lid" : "pn",
        L = (t = (n = b.list) == null ? void 0 : n.length) != null ? t : 0;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[saveContactAction] addr_mode=",
            " usyncListSize=",
            " ",
          ])),
        R,
        L,
      );
      try {
        await o("WAWebContactSyncApi").handleLidSync(b);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
        await o("WAWebHandleUsernameSync").handleUsernameSync(b);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
        var k = await y(
            "companion-contact-client-error-save-create-user-wid-pn-syncd",
            function () {
              return o("WAWebWidFactory").createUserWidOrThrow(e.phoneNumber);
            },
          ),
          I = e.lid;
        if (i === !0 && I && !r("isStringNullOrEmpty")(e.username)) {
          var T = e.username;
          await y(
            "companion-contact-client-error-save-syncd-send-username-contact-delete",
            function () {
              return o("WAWebContactEditSync").sendUsernameContactDelete(I, T);
            },
          );
        }
        await y(
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
            x = await y(
              "companion-contact-client-error-save-create-user-wid-pn-converting",
              function () {
                return o("WAWebWidFactory").createUserWidOrThrow(D);
              },
            );
          await y(
            "companion-contact-client-error-save-syncd-send-contact-delete-converting",
            function () {
              return o("WAWebContactEditSync").sendContactDelete(x);
            },
          );
        }
        await y(
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
        var $ = e.prevLid,
          P = e.prevUsername;
        if ($ != null && !$.equals(e.lid) && !r("isStringNullOrEmpty")(P)) {
          await y(
            "companion-contact-client-error-save-syncd-send-username-contact-delete-prev-lid",
            function () {
              return o("WAWebContactEditSync").sendUsernameContactDelete($, P);
            },
          );
          var N = o("WAWebContactCollection").ContactCollection.get($);
          N != null && N.setNotMyContact();
        }
      }
      if (e.prevPhoneNumber != null && e.prevPhoneNumber !== e.phoneNumber) {
        var M = e.prevPhoneNumber,
          w = await y(
            "companion-contact-client-error-save-create-user-wid-prev-pn-syncd",
            function () {
              return o("WAWebWidFactory").createUserWidOrThrow(M);
            },
          );
        await y(
          "companion-contact-client-error-save-syncd-send-contact-delete-prev-pn",
          function () {
            return o("WAWebContactEditSync").sendContactDelete(w);
          },
        );
        var A = o("WAWebContactCollection").ContactCollection.get(w);
        A != null && A.setNotMyContact();
      }
    }
    async function v(e) {
      if ((r("gkx")("26258") || (await C()), !r("WAWebNetworkStatus").online))
        throw new h();
      if (e.length !== 0) {
        var t = e.map(function (e) {
            return { type: "add", phoneNumber: e.phoneNumber };
          }),
          n = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(t),
          a = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
            syncType: o("WAWebContactSyncLogger").getSyncTypeString(
              "interactive",
              "delta",
            ),
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
              .CONTACT_SAVE,
            requestedCount: t.length,
            protocols: n.protocols,
          }),
          i = await o(
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
        var s = o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
          u = s ? "lid" : "pn";
        try {
          await o("WAWebContactSyncApi").handleLidSync(i);
        } catch (e) {
          throw (
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
          await o("WAWebHandleUsernameSync").handleUsernameSync(i);
        } catch (e) {
          throw (
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
            (await o("WAWebContactSyncApi").markContactsSyncCompleted(
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
        var c = e.map(S);
        await y(
          "companion-contact-client-error-save-batch-syncd-send-contact-update",
          function () {
            return o("WAWebContactEditSync").sendContactUpdateBatch(c);
          },
        );
      }
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveContactBatchAction] createUserWid err lidBased=",
                  "",
                ])),
              o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
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
        shortName: t,
        syncToAddressbook: e.syncToAddressbook,
        lid: l,
      };
    }
    ((l.NetworkUnavailable = h),
      (l.runOrSendClientErrorLogs = y),
      (l._runDebugContactAction = C),
      (l.saveContactAction = b),
      (l.saveContactBatchAction = v));
  },
  98,
);
