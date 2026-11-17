__d(
  "WAWebBizBroadcastProCreateAudienceChat",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = t.broadcastListName,
            l = t.customAudienceFbid;
          if (!a()) throw new (o("WAAbortError").AbortError)();
          var s = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["chat", "contact", "broadcast-metadata", "pending-mutations"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var s = t[0],
                        u = t[1],
                        d = t[2],
                        m = t[3];
                      if (!a()) throw new (o("WAAbortError").AbortError)();
                      var p = yield c(s, a),
                        _ = o(
                          "WAWebAudienceExpressionTypes",
                        ).createExplicitExpression([]),
                        f = o("WATimeUtils").unixTimeMs(),
                        g = {
                          id: p,
                          name: i.trim(),
                          t: o("WATimeUtils").castMilliSecondsToUnixTime(f),
                        },
                        h = r(
                          "WAWebBroadcastListSync",
                        ).getBroadcastListMutation({
                          customAudienceFbid: l,
                          expression: _,
                          id: p,
                          listName: g.name,
                          participants: [],
                          timestamp: f,
                        });
                      if (
                        (yield (e || (e = n("Promise"))).all([
                          s.createOrMerge(p, g),
                          u.createOrMerge(p, { id: p, name: g.name }),
                          d.createOrReplace({
                            audienceExpression: _,
                            customAudienceFbid: l,
                            id: p,
                            isWebCreatedList: !0,
                            labels: [],
                            recipients: [],
                            senderKeyDevices: [],
                            senderKeyRotate: !1,
                          }),
                          m.bulkCreate([h]),
                        ]),
                        !a())
                      )
                        throw new (o("WAAbortError").AbortError)();
                      return { audienceExpression: _, chat: g, mutation: h };
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              )
              .catch(
                o("WAAbortError").catchAbort(function (e) {
                  throw new (o("WAAbortError").AbortError)(e.message);
                }),
              ),
            u = s.audienceExpression,
            d = s.chat,
            m = s.mutation;
          if (!a()) throw new (o("WAAbortError").AbortError)();
          o("WAWebSyncd").markCollectionsForSync([m.collection]);
          var p = o("WAWebWidFactory").createWid(d.id);
          if (
            (yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: p,
              handleSingleMsgOrigin: "createChat",
              messageOverwriteOption: o("WAWebHandleMsgTypes")
                .MessageOverwriteOption.NO_OVERWRITE,
              newMsg: o(
                "WAWebBroadcastSystemMsg",
              ).genBroadcastProCreateSystemMsg(p),
              preserveOrder: !1,
            }),
            !a())
          )
            throw new (o("WAAbortError").AbortError)();
          return (
            o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
              broadcastMetadata: {
                audienceExpression: u,
                customAudienceFbid: l,
                id: p,
                recipients: [],
              },
              chat: babelHelpers.extends({}, d, { id: p }),
              contact: { id: p, name: d.name },
            }),
            d.id
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      n === void 0 && (n = new Set());
      var r = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
        function (e) {
          return n.has(e);
        },
      );
      return e.get(r).then(function (a) {
        if (!t()) throw new (o("WAAbortError").AbortError)();
        return a == null ? r : (n.add(r), c(e, t, n));
      });
    }
    l.createProAudienceChat = s;
  },
  98,
);
