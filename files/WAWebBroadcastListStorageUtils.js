__d(
  "WAWebBroadcastListStorageUtils",
  [
    "Promise",
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
          var i = a ? [] : yield r("WAWebInitialSystemMsg")(t, null, null),
            l = a
              ? o("WAWebBroadcastSystemMsg").genBroadcastProCreateSystemMsg(t)
              : o("WAWebBroadcastSystemMsg").genBroadcastCreateSystemMsg(t),
            s = [].concat(i, [l]);
          yield (e || (e = n("Promise"))).all(
            s.map(function (e) {
              return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: t,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                  .MessageOverwriteOption.NO_OVERWRITE,
                newMsg: e,
                preserveOrder: !1,
              });
            }),
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.audienceExpression,
            a = e.customAudienceFbid,
            i = e.id,
            l = e.isBizBroadcastPro,
            u = e.listName,
            d = e.shouldInsertInitialSystemMessages,
            m = e.timestamp,
            p = o("WAWebWidFactory").createWid(i),
            _ = yield o("WAWebAudienceResolver").resolveAudienceExpression(r),
            f = c(r),
            g = { id: p, name: u },
            h = !1,
            y = a;
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["chat", "broadcast-metadata", "contact"],
            t != null ? t : [],
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    l,
                    s,
                    c,
                    d,
                    p = t[0],
                    C = t[1],
                    b = t[2],
                    v = yield p.get(i);
                  (v == null && ((h = !0), (g.t = m)),
                    yield p.createOrMerge(
                      i,
                      babelHelpers.extends({}, g, { id: i }),
                    ),
                    yield b.createOrMerge(i, { id: i, name: u }));
                  var S = yield o("WAWebSchemaBroadcastMetadata")
                    .getBroadcastMetadataTable()
                    .get(i);
                  ((y =
                    (n = S == null ? void 0 : S.customAudienceFbid) != null
                      ? n
                      : a),
                    yield C.createOrReplace({
                      audienceExpression: r,
                      customAudienceFbid: y,
                      id: i,
                      isWebCreatedList:
                        (l =
                          (s = e.isWebCreatedList) != null
                            ? s
                            : S == null
                              ? void 0
                              : S.isWebCreatedList) != null
                          ? l
                          : !1,
                      labels: f,
                      recipients: _,
                      senderKeyDevices:
                        (c = S == null ? void 0 : S.senderKeyDevices) != null
                          ? c
                          : [],
                      senderKeyRotate:
                        (d = S == null ? void 0 : S.senderKeyRotate) != null
                          ? d
                          : !1,
                    }));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          ),
            h && d && (yield s(p, l)),
            o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
              broadcastMetadata: {
                audienceExpression: r,
                customAudienceFbid: y,
                id: p,
                recipients: _.map(function (e) {
                  return { id: o("WAWebWidFactory").createWid(e) };
                }),
              },
              chat: g,
              contact: { id: p, name: u },
            }));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = typeof e == "string" ? e : e.toString(),
            a = typeof e == "string" ? o("WAWebWidFactory").createWid(e) : e;
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["chat", "broadcast-metadata"],
            t != null ? t : [],
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e[0],
                    n = e[1];
                  (yield t.remove(r), yield n.remove(r));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
            o("WAWebBackendApi").frontendFireAndForget("removeBroadcastList", {
              id: a,
            }));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.updateBroadcastListStorage = d), (l.removeBroadcastListStorage = p));
  },
  98,
);
