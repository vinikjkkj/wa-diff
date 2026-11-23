__d(
  "WAWebBroadcastListStorageUtils",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolver",
    "WAWebBackendApi",
    "WAWebBroadcastSystemMsg",
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInitialSystemMsg",
    "WAWebSchemaBroadcastMetadata",
    "WAWebSyncdCoreApi",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = t ? [] : await r("WAWebInitialSystemMsg")(e, null, null),
        a = t
          ? o("WAWebBroadcastSystemMsg").genBroadcastProCreateSystemMsg(e)
          : o("WAWebBroadcastSystemMsg").genBroadcastCreateSystemMsg(e),
        i = [].concat(n, [a]);
      await Promise.all(
        i.map(function (t) {
          return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: e,
            handleSingleMsgOrigin: "createChat",
            messageOverwriteOption: o("WAWebHandleMsgTypes")
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
        a = t.customAudienceFbid,
        i = t.id,
        l = t.isBizBroadcastPro,
        u = t.listName,
        c = t.shouldInsertInitialSystemMessages,
        d = t.timestamp,
        m = o("WAWebWidFactory").createWid(i),
        p = await o("WAWebAudienceResolver").resolveAudienceExpression(r),
        _ = s(r),
        f = { id: m, name: u },
        g = !1,
        h = a;
      return (
        await o("WAWebSyncdCoreApi").lockForSync(
          ["chat", "broadcast-metadata", "contact"],
          n != null ? n : [],
          async function (e) {
            var n,
              l,
              s,
              c,
              m,
              y = e[0],
              C = e[1],
              b = e[2],
              v = await y.get(i);
            (v == null && ((g = !0), (f.t = d)),
              await y.createOrMerge(i, babelHelpers.extends({}, f, { id: i })),
              await b.createOrMerge(i, { id: i, name: u }));
            var S = await o("WAWebSchemaBroadcastMetadata")
              .getBroadcastMetadataTable()
              .get(i);
            ((h =
              (n = S == null ? void 0 : S.customAudienceFbid) != null ? n : a),
              await C.createOrReplace({
                audienceExpression: r,
                customAudienceFbid: h,
                id: i,
                isWebCreatedList:
                  (l =
                    (s = t.isWebCreatedList) != null
                      ? s
                      : S == null
                        ? void 0
                        : S.isWebCreatedList) != null
                    ? l
                    : !1,
                labels: _,
                recipients: p,
                senderKeyDevices:
                  (c = S == null ? void 0 : S.senderKeyDevices) != null
                    ? c
                    : [],
                senderKeyRotate:
                  (m = S == null ? void 0 : S.senderKeyRotate) != null ? m : !1,
              }));
          },
        ),
        g && c && (await e(m, l)),
        o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
          broadcastMetadata: {
            audienceExpression: r,
            customAudienceFbid: h,
            id: m,
            recipients: p.map(function (e) {
              return { id: o("WAWebWidFactory").createWid(e) };
            }),
          },
          chat: f,
          contact: { id: m, name: u },
        }),
        g
      );
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
