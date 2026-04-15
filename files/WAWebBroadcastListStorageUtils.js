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
            a = e.id,
            i = e.listName,
            l = e.timestamp,
            u = o("WAWebWidFactory").createWid(a),
            d = yield o("WAWebAudienceResolver").resolveAudienceExpression(r),
            m = c(r),
            p = { id: u, name: i },
            _ = !1;
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["chat", "broadcast-metadata", "contact"],
            t != null ? t : [],
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    s,
                    u,
                    c,
                    f = t[0],
                    g = t[1],
                    h = t[2],
                    y = yield f.get(a);
                  (y == null && ((_ = !0), (p.t = l)),
                    yield f.createOrMerge(
                      a,
                      babelHelpers.extends({}, p, { id: a }),
                    ),
                    yield h.createOrMerge(a, { id: a, name: i }));
                  var C = yield o("WAWebSchemaBroadcastMetadata")
                    .getBroadcastMetadataTable()
                    .get(a);
                  yield g.createOrReplace({
                    audienceExpression: r,
                    id: a,
                    isWebCreatedList:
                      (n =
                        (s = e.isWebCreatedList) != null
                          ? s
                          : C == null
                            ? void 0
                            : C.isWebCreatedList) != null
                        ? n
                        : !1,
                    labels: m,
                    recipients: d,
                    senderKeyDevices:
                      (u = C == null ? void 0 : C.senderKeyDevices) != null
                        ? u
                        : [],
                    senderKeyRotate:
                      (c = C == null ? void 0 : C.senderKeyRotate) != null
                        ? c
                        : !1,
                  });
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          ),
            _ && (yield s(u)),
            o("WAWebBackendApi").frontendFireAndForget("updateBroadcastList", {
              broadcastMetadata: {
                audienceExpression: r,
                id: u,
                recipients: d.map(function (e) {
                  return { id: o("WAWebWidFactory").createWid(e) };
                }),
              },
              chat: p,
              contact: { id: u, name: i },
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
