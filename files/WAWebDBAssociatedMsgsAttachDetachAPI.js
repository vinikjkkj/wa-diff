__d(
  "WAWebDBAssociatedMsgsAttachDetachAPI",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendApi",
    "WAWebCreateAssociationProcessor",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebMessageAssociation.flow",
    "WAWebMsgStoreExtensions",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum").Mirrored(["Attach", "Detach"]);
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield h({
            parentMsgKeys: e.map(function (e) {
              return e.id;
            }),
            showParentsInChat: !1,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield f(t);
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] attaching detached children failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("history-sync-attach-detached-children-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("justknobx")._("6943")) {
            var t = new Map();
            if (
              (e.forEach(function (e) {
                e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
                  ? t.set(e.id.toString(), e.id)
                  : o("WAWebMessageAssociation.flow").isAssociatedMsg(e) &&
                    e.viewMode ===
                      o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
                    t.set(e.parentMsgKey.toString(), e.parentMsgKey);
              }),
              t.size !== 0)
            ) {
              var n = yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkGet(Array.from(t.keys()), !1),
                a = n.flatMap(function (e) {
                  var n =
                    e != null && e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
                      ? t.get(String(e.id))
                      : null;
                  return n != null ? [n] : [];
                });
              a.length !== 0 &&
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[viewModeUpdate] attaching detached children of ",
                      " parents after history sync",
                    ])),
                  a.length,
                ),
                yield h({ parentMsgKeys: a, showParentsInChat: !0 }));
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentMsgKeys,
            n = e.showParentsInChat,
            a = yield C(t),
            i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(
                a.map(function (e) {
                  return e.msgKey.toString();
                }),
                !1,
              ),
            l = i.filter(Boolean),
            s = S(l, c.Attach).flatMap(function (e, t) {
              return e != null && e.viewMode !== l[t].viewMode ? [e] : [];
            });
          if (s.length > 0) {
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(s);
            var u = new Map();
            (s.forEach(function (e) {
              var t = r("nullthrows")(e.viewMode);
              u.set(e.id, t);
            }),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateViewModeForMsgs",
                { msgIdsViewModeMap: u, showParentsInChat: n },
              ));
          }
          a.length > 0 &&
            (yield o("WAWebMsgStoreExtensions").handleAttachedAssociatedMsgs(
              a,
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebDBGetAssociatedMsgsByParentMsgKey",
          ).bulkGetMessagesByParentMsgKey(e);
          return (
            t.length &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[viewModeUpdate] found associated msgs",
                  ])),
              ),
            t
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n = [];
      return (
        e.map(function (e) {
          var r = o(
            "WAWebAssociationProcessor",
          ).getAssociationProcessorByAssociationType(e.associationType);
          r != null && (t !== c.Detach || L(r.processorType)) && n.push(e);
        }),
        n
      );
    }
    function S(e, t) {
      return e.map(function (e) {
        if (!e.associationType) return null;
        var n = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(e.associationType);
        return n == null || (t === c.Detach && !L(n.processorType))
          ? null
          : babelHelpers.extends({}, e, {
              viewMode:
                t === c.Detach
                  ? o("WAWebViewMode.flow").ViewModeType.VISIBLE
                  : o(
                      "WAWebCreateAssociationProcessor",
                    ).getAssociatedMsgViewMode(n, e),
            });
      });
    }
    function R(e) {
      return e.map(function (e) {
        if (!e.associationType) return null;
        var t = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(e.associationType);
        return t == null || !L(t.processorType)
          ? null
          : babelHelpers.extends({}, e, {
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              parentMsgKey: void 0,
              associationType: void 0,
            });
      });
    }
    function L(e) {
      return (
        e ===
        o("WAWebAssociationProcessorConstants").AssociationProcessorType
          .WithDetachedMessages
      );
    }
    ((l.ViewModeUpdateType = c),
      (l.processOrphansFromAssociationsTableForNewMsg = d),
      (l.attachDetachedChildrenAfterHistorySync = p),
      (l.getAssociatedMsgsByParentMsgKeyFromAssociationTable = C),
      (l.getValidAssociatedMsgs = v),
      (l.getDetachedForeverAssociatedMsgs = R));
  },
  98,
);
