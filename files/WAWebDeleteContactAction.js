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
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    async function y(t) {
      var n, a;
      if (
        (r("gkx")("26258") ||
          (await o("WAWebSaveContactAction")._runDebugContactAction()),
        !r("WAWebNetworkStatus").online)
      )
        throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
      var i = t.phoneNumber || t.lid,
        l = o("WAWebContactSyncUtils").constructUsyncDeltaQuery([
          { type: "delete", contact: i },
        ]),
        p = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "delta",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .CONTACT_MUTATION_CONTACT_DELETE,
          requestedCount: 1,
          protocols: l.protocols,
        }),
        _ = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          p,
          function () {
            return l.execute();
          },
          o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
        ),
        f = _.error.all || _.error.contact;
      if (f)
        throw (
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            p,
            f.errorCode,
            _,
            o("WAWebContactSyncErrorCodes").DELETE_CONTACT,
          ),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            f.errorCode,
            f.errorText,
          )
        );
      o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(p, _);
      var g = (n = (a = _.list) == null ? void 0 : a.length) != null ? n : 0;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[deleteContactAction] usyncListSize=",
            "",
          ])),
        g,
      );
      try {
        await o("WAWebContactSyncApi").handleLidSync(_);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] handleLidSync err:",
                  "",
                ])),
              e,
            )
            .sendLogs("delete-contact-handle-lid-sync-error"),
          e
        );
      }
      try {
        await o("WAWebHandleUsernameSync").handleUsernameSync(_);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] handleUsernameSync err:",
                  "",
                ])),
              e,
            )
            .sendLogs("delete-contact-handle-username-sync-error"),
          e
        );
      }
      try {
        _.list &&
          (await o("WAWebContactSyncApi").markContactsSyncCompleted(
            r("compactMap")(_.list, function (e) {
              return e.id instanceof r("WAWebWid") ? e.id : null;
            }),
          ));
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] markContactsSyncCompleted err:",
                  "",
                ])),
              e,
            )
            .sendLogs("delete-contact-mark-sync-completed-error"),
          e
        );
      }
      var h = o("WAWebContactCollection").ContactCollection.get(i);
      if (!h || !o("WAWebFrontendContactGetters").getIsMyContact(h)) {
        o("WALogger").ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[deleteContactAction] Contact is already deleted",
            ])),
        );
        return;
      }
      if ((h.setNotMyContact(), t.lid)) {
        var y = t.lid,
          C = o("WAWebUsernameTypes").asMaybeUsername(t.username);
        if (C == null) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactAction] LID delete missing username",
                ])),
            )
            .sendLogs("delete-contact-lid-missing-username");
          return;
        }
        await o("WAWebSaveContactAction").runOrSendClientErrorLogs(
          "companion-contact-client-error-delete-syncd-send-username-contact-delete",
          function () {
            return o("WAWebContactEditSync").sendUsernameContactDelete(y, C);
          },
        );
      } else {
        var b = t.phoneNumber;
        await o("WAWebSaveContactAction").runOrSendClientErrorLogs(
          "companion-contact-client-error-delete-syncd-send-contact-delete",
          function () {
            return o("WAWebContactEditSync").sendContactDelete(b);
          },
        );
      }
    }
    async function C(e) {
      if (
        (r("gkx")("26258") ||
          (await o("WAWebSaveContactAction")._runDebugContactAction()),
        !r("WAWebNetworkStatus").online)
      )
        throw new (o("WAWebSaveContactAction").NetworkUnavailable)();
      var t = e.map(b),
        n = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(
          t.map(function (e) {
            return { type: "delete", contact: e };
          }),
        ),
        a = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "delta",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .CONTACT_MUTATION_CONTACT_DELETE,
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
      try {
        await o("WAWebContactSyncApi").handleLidSync(i);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactBatchAction] handleLidSync err:",
                  "",
                ])),
              e,
            )
            .sendLogs("delete-contact-batch-handle-lid-sync-error"),
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
                  "[deleteContactBatchAction] handleUsernameSync err:",
                  "",
                ])),
              e,
            )
            .sendLogs("delete-contact-batch-handle-username-sync-error"),
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
                  "[deleteContactBatchAction] markContactsSyncCompleted err:",
                  "",
                ])),
              e,
            )
            .sendLogs("delete-contact-batch-mark-sync-completed-error"),
          e
        );
      }
      var s = [],
        u = 0,
        c = t.filter(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return !t || !o("WAWebFrontendContactGetters").getIsMyContact(t)
            ? (u++, s.length < 3 && s.push(e), !1)
            : (t.setNotMyContact(), !0);
        });
      (u > 0 &&
        o("WALogger").ERROR(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[deleteContactBatchAction] ",
              " contacts are already deleted => ",
              "",
            ])),
          u,
          s,
        ),
        c.length > 0 &&
          (await o("WAWebSaveContactAction").runOrSendClientErrorLogs(
            "companion-contact-client-error-delete-batch-syncd-send-contact-delete",
            function () {
              return o("WAWebContactEditSync").sendContactDeleteBatch(c);
            },
          )));
    }
    function b(e) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(e + "@c.us");
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteContactBatchAction] companion-contact-client-error-delete-batch-create-user-wid",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(
              "companion-contact-client-error-delete-batch-create-user-wid",
            ),
          e
        );
      }
    }
    ((l.deleteContactAction = y), (l.deleteContactBatchAction = C));
  },
  98,
);
