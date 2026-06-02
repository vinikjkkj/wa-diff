__d(
  "WAWebBroadcastListAction",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastListIdUtils",
    "WAWebBroadcastListStorageUtils",
    "WAWebBroadcastListSync",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebContactGetters",
    "WAWebContactImportContactVerifier",
    "WAWebContactImportFileProcessor",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebFrontendContactGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = "update",
      f = "delete";
    function g(e) {
      var t = e.map(function (e) {
        var t = o("WAWebContactGetters").getUserid(e);
        return {
          lid: t != null ? o("WAJids").toLidUserJid(t) : void 0,
          phone: o("WAWebFrontendContactGetters").getFormattedPhoneAndType(e)
            .displayName,
        };
      });
      return t;
    }
    async function h(t) {
      var n = t.filter(function (e) {
        return e.lid == null;
      });
      if (n.length === 0) return t;
      try {
        var a = n.map(function (e) {
            return o("WAWebContactImportFileProcessor").normalizePhoneNumber(
              e.phone,
            );
          }),
          i = await o("WAWebContactImportContactVerifier").verifyWhatsAppUsers(
            a,
            {
              errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BUSINESS_BROADCAST,
            },
          );
        return t.map(function (e) {
          if (e.lid != null) return e;
          var t = o("WAWebContactImportFileProcessor").normalizePhoneNumber(
              e.phone,
            ),
            n = i[t];
          return (n == null ? void 0 : n.isWhatsAppUser) === !0 && n.lid != null
            ? babelHelpers.extends({}, e, { lid: String(n.lid) })
            : e;
        });
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:list-action] USync LID resolve failed",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("business-broadcast-lid-resolve-failed"),
          t
        );
      }
    }
    async function y(e, t, n, a, i) {
      if (t.length !== 0) {
        var l = await h(t),
          d = o("WATimeUtils").unixTime(),
          m = l.flatMap(function (e) {
            var t = o("WAWebContactImportFileProcessor").normalizePhoneNumber(
                e.phone,
              ),
              n = e.lid;
            if (n == null) return [];
            var r = {
              lidJid: n,
              pnJid: t !== "" ? o("WAJids").toPhoneUserJid(t) : void 0,
            };
            return [r];
          });
        m.length === 0 &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:list-action] failed: no participants for jid ",
                  "",
                ])),
              e,
            )
            .sendLogs("business-broadcast-no-participants");
        try {
          var f =
              a != null
                ? a
                : o("WAWebAudienceExpressionTypes").createExplicitExpression(
                    m.flatMap(function (e) {
                      return e.lidJid != null ? [e.lidJid] : [];
                    }),
                  ),
            g = r("WAWebBroadcastListSync").getBroadcastListMutation(
              e,
              m,
              n,
              d,
              f,
            );
          await o("WAWebBroadcastListStorageUtils").updateBroadcastListStorage(
            {
              audienceExpression: f,
              id: e,
              isWebCreatedList: i,
              listName: n,
              timestamp: d,
            },
            [g],
          );
        } catch (e) {
          throw (
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:list-action] ",
                  " failed: ",
                  "",
                ])),
              _,
              e,
            ),
            o("WAWebToastManager").ToastManager.open(
              p.jsx(o("WAWebToast.react").Toast, {
                action: { actionText: s._(/*BTDS*/ "OK"), dismiss: !0 },
                msg: s._(
                  /*BTDS*/ "Failed to update broadcast audience. Please try again.",
                ),
                id: o("WAWebToast.react").genId(),
              }),
            ),
            e
          );
        }
      }
    }
    async function C(e) {
      var t = o("WATimeUtils").unixTime();
      try {
        var n = r("WAWebBroadcastListSync").getDeleteBroadcastListMutation(
          e,
          t,
        );
        await o("WAWebBroadcastListStorageUtils").removeBroadcastListStorage(
          e,
          [n],
        );
      } catch (e) {
        throw (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:list-action] ",
                " failed: ",
                "",
              ])),
            f,
            e,
          ),
          e
        );
      }
    }
    async function b(e, t) {
      var n,
        a = o("WAWebWidFactory").createWid(e),
        i = r("WAWebBroadcastMetadataCollection").get(a),
        l =
          (n =
            i == null
              ? void 0
              : i.recipients.map(function (e) {
                  return e.contact;
                })) != null
            ? n
            : [],
        s = g(l);
      return y(e, s, t);
    }
    async function v(e, t) {
      var n,
        r = o("WAWebWidFactory").createWid(e),
        a = o("WAWebChatCollection").ChatCollection.get(r),
        i = (n = a == null ? void 0 : a.name.trim()) != null ? n : "",
        l = g(t);
      await y(e, l, i);
    }
    async function S(e) {
      var t = e.audienceExpression,
        n = e.broadcastListName,
        r = e.contacts,
        a = n.trim(),
        i = o("WAWebBroadcastListIdUtils").createBroadcastListJid(function (e) {
          var t = o("WAWebWidFactory").createWid(e);
          return o("WAWebChatCollection").ChatCollection.get(t) != null;
        });
      return (await y(i, r, a, t, !0), i);
    }
    async function R(e, t) {
      t === void 0 && (t = "");
      var n = g(e),
        r = await S({ broadcastListName: t, contacts: n });
      return r;
    }
    ((l.editBroadcastListAction = y),
      (l.deleteBroadcastListAction = C),
      (l.renameBroadcastListAction = b),
      (l.updateBroadcastRecipientsAction = v),
      (l.createBroadcastListAction = S),
      (l.createBroadcastListFromContactModel = R));
  },
  226,
);
