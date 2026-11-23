__d(
  "WAWebBizBroadcastProCreateAudienceChat",
  [
    "WAAbortError",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBackendApi",
    "WAWebBroadcastListIdUtils",
    "WAWebBroadcastListSync",
    "WAWebBroadcastSystemMsg",
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebModelStorageUtils",
    "WAWebSyncd",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = e.broadcastListName,
        a = e.customAudienceFbid;
      if (!t()) throw new (o("WAAbortError").AbortError)();
      var i = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["chat", "contact", "broadcast-metadata", "pending-mutations"],
            async function (e) {
              var i = e[0],
                l = e[1],
                u = e[2],
                c = e[3];
              if (!t()) throw new (o("WAAbortError").AbortError)();
              var d = await s(i, t),
                m = o("WAWebAudienceExpressionTypes").createExplicitExpression(
                  [],
                ),
                p = o("WATimeUtils").unixTimeMs(),
                _ = {
                  id: d,
                  name: n.trim(),
                  t: o("WATimeUtils").castMilliSecondsToUnixTime(p),
                },
                f = r("WAWebBroadcastListSync").getBroadcastListMutation({
                  customAudienceFbid: a,
                  expression: m,
                  id: d,
                  listName: _.name,
                  participants: [],
                  timestamp: p,
                });
              if (
                (await Promise.all([
                  i.createOrMerge(d, _),
                  l.createOrMerge(d, { id: d, name: _.name }),
                  u.createOrReplace({
                    audienceExpression: m,
                    customAudienceFbid: a,
                    id: d,
                    isWebCreatedList: !0,
                    labels: [],
                    recipients: [],
                    senderKeyDevices: [],
                    senderKeyRotate: !1,
                  }),
                  c.bulkCreate([f]),
                ]),
                !t())
              )
                throw new (o("WAAbortError").AbortError)();
              return { audienceExpression: m, chat: _, mutation: f };
            },
          )
          .catch(
            o("WAAbortError").catchAbort(function (e) {
              throw new (o("WAAbortError").AbortError)(e.message);
            }),
          ),
        l = i.audienceExpression,
        u = i.chat,
        c = i.mutation;
      if (!t()) throw new (o("WAAbortError").AbortError)();
      o("WAWebSyncd").markCollectionsForSync([c.collection]);
      var d = o("WAWebWidFactory").createWid(u.id);
      if (
        (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: d,
          handleSingleMsgOrigin: "createChat",
          messageOverwriteOption: o("WAWebHandleMsgTypes")
            .MessageOverwriteOption.NO_OVERWRITE,
          newMsg: o("WAWebBroadcastSystemMsg").genBroadcastProCreateSystemMsg(
            d,
          ),
          preserveOrder: !1,
        }),
        !t())
      )
        throw new (o("WAAbortError").AbortError)();
      return (
        o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
          broadcastMetadata: {
            audienceExpression: l,
            customAudienceFbid: a,
            id: d,
            recipients: [],
          },
          chat: babelHelpers.extends({}, u, { id: d }),
          contact: { id: d, name: u.name },
        }),
        u.id
      );
    }
    function s(e, t, n) {
      n === void 0 && (n = new Set());
      var r = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
        function (e) {
          return n.has(e);
        },
      );
      return e.get(r).then(function (a) {
        if (!t()) throw new (o("WAAbortError").AbortError)();
        return a == null ? r : (n.add(r), s(e, t, n));
      });
    }
    l.createProAudienceChat = e;
  },
  98,
);
