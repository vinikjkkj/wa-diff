__d(
  "WAWebBroadcastListStorageUtils",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolver",
    "WAWebBackendApi",
    "WAWebBroadcastSystemMsg",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInitialSystemMsg",
    "WAWebSchemaBroadcastMetadata",
    "WAWebSyncdCoreApi",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await r("WAWebInitialSystemMsg")(e, null, null),
        n = o("WAWebBroadcastSystemMsg").genBroadcastCreateSystemMsg(e),
        a = [].concat(t, [n]);
      await Promise.all(
        a.map(function (t) {
          return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: e,
            handleSingleMsgOrigin: "createChat",
            messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
              .MessageOverwriteOption.NO_OVERWRITE,
            newMsg: t,
            preserveOrder: !1,
          });
        }),
      );
    }
    function s(e) {
      if (
        e.type ===
          o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE &&
        e.predicateType ===
          o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL
      ) {
        var t, n;
        return Array.from(
          (t = (n = e.params) == null ? void 0 : n.labelIds) != null ? t : [],
        );
      }
      return [];
    }
    async function u(t, n) {
      var r = t.audienceExpression,
        a = t.id,
        i = t.listName,
        l = t.timestamp,
        u = o("WAWebWidFactory").createWid(a),
        c = await o("WAWebAudienceResolver").resolveAudienceExpression(r),
        d = s(r),
        m = { id: u, name: i },
        p = !1;
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["chat", "broadcast-metadata", "contact"],
        n != null ? n : [],
        async function (e) {
          var n,
            s,
            u,
            _,
            f = e[0],
            g = e[1],
            h = e[2],
            y = await f.get(a);
          (y == null && ((p = !0), (m.t = l)),
            await f.createOrMerge(a, babelHelpers.extends({}, m, { id: a })),
            await h.createOrMerge(a, { id: a, name: i }));
          var C = await o("WAWebSchemaBroadcastMetadata")
            .getBroadcastMetadataTable()
            .get(a);
          await g.createOrReplace({
            audienceExpression: r,
            id: a,
            isWebCreatedList:
              (n =
                (s = t.isWebCreatedList) != null
                  ? s
                  : C == null
                    ? void 0
                    : C.isWebCreatedList) != null
                ? n
                : !1,
            labels: d,
            recipients: c,
            senderKeyDevices:
              (u = C == null ? void 0 : C.senderKeyDevices) != null ? u : [],
            senderKeyRotate:
              (_ = C == null ? void 0 : C.senderKeyRotate) != null ? _ : !1,
          });
        },
      ),
        p && (await e(u)),
        o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
          broadcastMetadata: {
            audienceExpression: r,
            id: u,
            recipients: c.map(function (e) {
              return { id: o("WAWebWidFactory").createWid(e) };
            }),
          },
          chat: m,
          contact: { id: u, name: i },
        }));
    }
    async function c(e, t) {
      var n = typeof e == "string" ? e : e.toString(),
        r = typeof e == "string" ? o("WAWebWidFactory").createWid(e) : e;
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["chat", "broadcast-metadata"],
        t != null ? t : [],
        async function (e) {
          var t = e[0],
            r = e[1];
          (await t.remove(n), await r.remove(n));
        },
      ),
        o("WAWebBackendApi").frontendFireAndForget("removeBroadcastList", {
          id: r,
        }));
    }
    ((l.updateBroadcastListStorage = u), (l.removeBroadcastListStorage = c));
  },
  98,
);
