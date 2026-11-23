__d(
  "WAWebBroadcastListAction",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastAudienceDuplicateCheck",
    "WAWebBizBroadcastProListUtils",
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
    "WAWebDeleteChatSync",
    "WAWebFrontendContactGetters",
    "WAWebLogBizBroadcastAudienceDuplicateCheck",
    "WAWebNoop",
    "WAWebWidFactory",
    "WDSToastImperativeHost",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = "update",
      p = "delete";
    function _(e) {
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
    async function f(t) {
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
            ? babelHelpers.extends({}, e, { lid: n.lid })
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
    async function g(e, t, n, r, o) {
      return h({
        audienceExpression: r,
        contacts: t,
        id: e,
        isWebCreatedList: o,
        listName: n,
      });
    }
    async function h(e) {
      var t = e.audienceExpression,
        n = e.contacts,
        a = e.creationDuplicateCheck,
        i = e.customAudienceFbid,
        l = e.id,
        d = e.isWebCreatedList,
        p = e.listName,
        _ = i == null ? void 0 : i.trim(),
        g = _ != null && _.length > 0 ? _ : void 0,
        h = g != null ? { customAudienceFbid: g } : {},
        y = o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(g);
      if (!(n.length === 0 && !y)) {
        var C = await f(n),
          b = o("WATimeUtils").unixTimeMs(),
          v = C.flatMap(function (e) {
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
        v.length === 0 &&
          n.length > 0 &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:list-action] failed: no participants for jid ",
                  "",
                ])),
              l,
            )
            .sendLogs("business-broadcast-no-participants");
        try {
          var S =
              t != null
                ? t
                : o("WAWebAudienceExpressionTypes").createExplicitExpression(
                    v.flatMap(function (e) {
                      return e.lidJid != null ? [e.lidJid] : [];
                    }),
                  ),
            R = r("WAWebBroadcastListSync").getBroadcastListMutation(
              babelHelpers.extends({}, h, {
                expression: S,
                id: l,
                listName: p,
                participants: v,
                timestamp: b,
              }),
            ),
            L = await o(
              "WAWebBroadcastListStorageUtils",
            ).updateBroadcastListStorage(
              babelHelpers.extends({ audienceExpression: S }, h, {
                id: l,
                isBizBroadcastPro: y,
                isWebCreatedList: d,
                listName: p,
                shouldInsertInitialSystemMessages: !0,
                timestamp: o("WATimeUtils").castMilliSecondsToUnixTime(b),
              }),
              [R],
            );
          if (
            L &&
            a != null &&
            !y &&
            S.type ===
              o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_EXPLICIT
          ) {
            var E;
            o(
              "WAWebLogBizBroadcastAudienceDuplicateCheck",
            ).logCoreAudienceDuplicateCheck(
              "creation",
              (E =
                a.countSavedAudience == null
                  ? void 0
                  : a.countSavedAudience(l, S.userJids)) != null
                ? E
                : o(
                    "WAWebBizBroadcastAudienceDuplicateCheck",
                  ).countMatchingCoreAudiences(new Set([l])),
              a.entryPoint,
            );
          }
        } catch (e) {
          throw (
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:list-action] ",
                  " failed: ",
                  "",
                ])),
              m,
              e,
            ),
            y ||
              o("WDSToastImperativeHost").showWDSToast({
                action: { label: s._(/*BTDS*/ ""), onPress: r("WAWebNoop") },
                message: s._(/*BTDS*/ ""),
              }),
            e
          );
        }
      }
    }
    async function y(e) {
      var t = o("WATimeUtils").unixTimeMs(),
        n = o("WAWebWidFactory").createWid(e);
      try {
        var a = r("WAWebBroadcastListSync").getDeleteBroadcastListMutation(
            e,
            t,
          ),
          i = await r("WAWebDeleteChatSync").getDeleteChatMutation(t, n);
        await o("WAWebBroadcastListStorageUtils").removeBroadcastListStorage(
          e,
          [a, i],
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
            p,
            e,
          ),
          e
        );
      }
    }
    async function C(e, t) {
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
        s = _(l);
      return g(e, s, t);
    }
    async function b(e, t) {
      var n,
        r = o("WAWebWidFactory").createWid(e),
        a = o("WAWebChatCollection").ChatCollection.get(r),
        i = (n = a == null ? void 0 : a.name.trim()) != null ? n : "",
        l = _(t);
      await g(e, l, i);
    }
    async function v(e) {
      var t = e.audienceExpression,
        n = e.broadcastListName,
        r = e.contacts,
        a = e.creationDuplicateCheck,
        i = e.customAudienceFbid,
        l = n.trim(),
        s = o("WAWebBroadcastListIdUtils").createBroadcastListJid(function (e) {
          var t = o("WAWebWidFactory").createWid(e);
          return o("WAWebChatCollection").ChatCollection.get(t) != null;
        });
      return (
        await h({
          audienceExpression: t,
          contacts: r,
          creationDuplicateCheck: a,
          customAudienceFbid: i,
          id: s,
          isWebCreatedList: !0,
          listName: l,
        }),
        s
      );
    }
    async function S(e, t) {
      t === void 0 && (t = "");
      var n = _(e),
        r = await v({ broadcastListName: t, contacts: n });
      return r;
    }
    ((l.editBroadcastListAction = g),
      (l.deleteBroadcastListAction = y),
      (l.renameBroadcastListAction = C),
      (l.updateBroadcastRecipientsAction = b),
      (l.createBroadcastListAction = v),
      (l.createBroadcastListFromContactModel = S));
  },
  226,
);
