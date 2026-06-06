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
    "WAWebUsernameTypes",
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
      g,
      h = n("cr:27664") == null ? void 0 : n("cr:27664").debugConfigs,
      y = (function (e) {
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
    async function C(t, n) {
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
    async function b() {
      if (
        (h != null &&
          h.delaySaveMs &&
          (await o("WAPromiseDelays").delayMs(h.delaySaveMs)),
        h != null && h.simulateErrorOnSaveOrDeleteContact)
      ) {
        var e = h.simulateErrorOnSaveOrDeleteContact;
        switch (((h.simulateErrorOnSaveOrDeleteContact = null), e)) {
          case "USYNC":
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(1);
          case "NETWORK":
            throw new y();
          case "CLIENT":
            throw r("err")("Client error");
        }
      }
    }
    async function v(e) {
      var t,
        n,
        a = e.firstName,
        i = e.isConvertingContactType,
        l = e.lastName;
      if ((r("gkx")("26258") || (await b()), !r("WAWebNetworkStatus").online))
        throw new y();
      var p = [];
      if (e.phoneNumber != null) {
        var _ = e.phoneNumber,
          f = e.prevPhoneNumber;
        (p.push({ type: "add", phoneNumber: _ }),
          f != null &&
            f !== _ &&
            p.push({
              type: "delete",
              contact: await C(
                "companion-contact-client-error-save-create-user-wid-prev-pn-usync",
                function () {
                  return o("WAWebWidFactory").createUserWidOrThrow(f);
                },
              ),
            }));
      } else p.push({ type: "add_username", lid: e.lid, username: e.username });
      var g = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(p),
        h = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "delta",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .CONTACT_SAVE,
          requestedCount: p.length,
          protocols: g.protocols,
        }),
        v = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          h,
          function () {
            return g.execute();
          },
          o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
        ),
        S = v.error.all || v.error.contact;
      if (S)
        throw (
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            h,
            S.errorCode,
            v,
            o("WAWebContactSyncErrorCodes").SAVE_CONTACT,
          ),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            S.errorCode,
            S.errorText,
          )
        );
      o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(h, v);
      var R = (t = (n = v.list) == null ? void 0 : n.length) != null ? t : 0;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[saveContactAction] usyncListSize=",
            " ",
          ])),
        R,
      );
      try {
        await o("WAWebContactSyncApi").handleLidSync(v);
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
        await o("WAWebHandleUsernameSync").handleUsernameSync(v);
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
        v.list &&
          (await o("WAWebContactSyncApi").markContactsSyncCompleted(
            r("compactMap")(v.list, function (e) {
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
      var L = a && l ? a + " " + l : a || l;
      if (e.phoneNumber != null) {
        var E = await C(
            "companion-contact-client-error-save-create-user-wid-pn-syncd",
            function () {
              return o("WAWebWidFactory").createUserWidOrThrow(e.phoneNumber);
            },
          ),
          k = e.lid;
        if (i === !0 && k && !r("isStringNullOrEmpty")(e.username)) {
          var I = o("WAWebUsernameTypes").asUsername(e.username);
          await C(
            "companion-contact-client-error-save-syncd-send-username-contact-delete",
            function () {
              return o("WAWebContactEditSync").sendUsernameContactDelete(k, I);
            },
          );
        }
        await C(
          "companion-contact-client-error-save-syncd-send-contact-update",
          function () {
            var t;
            return o("WAWebContactEditSync").sendContactUpdate(
              E,
              L,
              a || l,
              e.syncToAddressbook,
              (t = e.lid) != null
                ? t
                : o("WAWebLidMigrationUtils").toUserLid(E),
              e.username,
            );
          },
        );
      } else {
        if (i === !0 && !r("isStringNullOrEmpty")(e.pn)) {
          var T = e.pn,
            D = await C(
              "companion-contact-client-error-save-create-user-wid-pn-converting",
              function () {
                return o("WAWebWidFactory").createUserWidOrThrow(T);
              },
            );
          await C(
            "companion-contact-client-error-save-syncd-send-contact-delete-converting",
            function () {
              return o("WAWebContactEditSync").sendContactDelete(D);
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
        var x = o("WAWebUsernameTypes").asUsername(e.username);
        await C(
          "companion-contact-client-error-save-syncd-send-username-contact-update",
          function () {
            return o("WAWebContactEditSync").sendUsernameContactUpdate(
              e.lid,
              L,
              a || l,
              x,
            );
          },
        );
        var $ = e.prevLid,
          P = e.prevUsername;
        if ($ != null && !$.equals(e.lid) && !r("isStringNullOrEmpty")(P)) {
          await C(
            "companion-contact-client-error-save-syncd-send-username-contact-delete-prev-lid",
            function () {
              return o("WAWebContactEditSync").sendUsernameContactDelete(
                $,
                o("WAWebUsernameTypes").asUsername(P),
              );
            },
          );
          var N = o("WAWebContactCollection").ContactCollection.get($);
          N != null && N.setNotMyContact();
        }
      }
      if (e.prevPhoneNumber != null && e.prevPhoneNumber !== e.phoneNumber) {
        var M = e.prevPhoneNumber,
          w = await C(
            "companion-contact-client-error-save-create-user-wid-prev-pn-syncd",
            function () {
              return o("WAWebWidFactory").createUserWidOrThrow(M);
            },
          );
        await C(
          "companion-contact-client-error-save-syncd-send-contact-delete-prev-pn",
          function () {
            return o("WAWebContactEditSync").sendContactDelete(w);
          },
        );
        var A = o("WAWebContactCollection").ContactCollection.get(w);
        A != null && A.setNotMyContact();
      }
    }
    async function S(e) {
      if ((r("gkx")("26258") || (await b()), !r("WAWebNetworkStatus").online))
        throw new y();
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
        try {
          await o("WAWebContactSyncApi").handleLidSync(i);
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
          await o("WAWebHandleUsernameSync").handleUsernameSync(i);
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
        var s = e.map(R);
        await C(
          "companion-contact-client-error-save-batch-syncd-send-contact-update",
          function () {
            return o("WAWebContactEditSync").sendContactUpdateBatch(s);
          },
        );
      }
    }
    function R(e) {
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
        shortName: t,
        syncToAddressbook: e.syncToAddressbook,
        lid: l,
      };
    }
    ((l.NetworkUnavailable = y),
      (l.runOrSendClientErrorLogs = C),
      (l._runDebugContactAction = b),
      (l.saveContactAction = v),
      (l.saveContactBatchAction = S));
  },
  98,
);
