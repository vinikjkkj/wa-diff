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
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield r("WAWebInitialSystemMsg")(t, null, null),
            i = o("WAWebBroadcastSystemMsg").genBroadcastCreateSystemMsg(t),
            l = [].concat(a, [i]);
          yield (e || (e = n("Promise"))).all(
            l.map(function (e) {
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
            l = e.listName,
            u = e.timestamp,
            d = o("WAWebWidFactory").createWid(i),
            m = yield o("WAWebAudienceResolver").resolveAudienceExpression(r),
            p = c(r),
            _ = { id: d, name: l },
            f = !1,
            g = a;
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["chat", "broadcast-metadata", "contact"],
            t != null ? t : [],
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    s,
                    c,
                    d,
                    h,
                    y = t[0],
                    C = t[1],
                    b = t[2],
                    v = yield y.get(i);
                  (v == null && ((f = !0), (_.t = u)),
                    yield y.createOrMerge(
                      i,
                      babelHelpers.extends({}, _, { id: i }),
                    ),
                    yield b.createOrMerge(i, { id: i, name: l }));
                  var S = yield o("WAWebSchemaBroadcastMetadata")
                    .getBroadcastMetadataTable()
                    .get(i);
                  ((g =
                    (n = S == null ? void 0 : S.customAudienceFbid) != null
                      ? n
                      : a),
                    yield C.createOrReplace({
                      audienceExpression: r,
                      customAudienceFbid: g,
                      id: i,
                      isWebCreatedList:
                        (s =
                          (c = e.isWebCreatedList) != null
                            ? c
                            : S == null
                              ? void 0
                              : S.isWebCreatedList) != null
                          ? s
                          : !1,
                      labels: p,
                      recipients: m,
                      senderKeyDevices:
                        (d = S == null ? void 0 : S.senderKeyDevices) != null
                          ? d
                          : [],
                      senderKeyRotate:
                        (h = S == null ? void 0 : S.senderKeyRotate) != null
                          ? h
                          : !1,
                    }));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          ),
            f && (yield s(d)),
            o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
              broadcastMetadata: {
                audienceExpression: r,
                customAudienceFbid: g,
                id: d,
                recipients: m.map(function (e) {
                  return { id: o("WAWebWidFactory").createWid(e) };
                }),
              },
              chat: _,
              contact: { id: d, name: l },
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
