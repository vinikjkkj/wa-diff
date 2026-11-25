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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum").Mirrored(["Attach", "Detach"]);
    async function d(e) {
      await _({
        parentMsgKeys: e.map(function (e) {
          return e.id;
        }),
        showParentsInChat: !1,
      });
    }
    async function m(t) {
      try {
        await p(t);
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
    }
    async function p(e) {
      var t = new Map();
      if (
        (e.forEach(function (e) {
          e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
            ? t.set(e.id.toString(), e.id)
            : o("WAWebMessageAssociation.flow").isAssociatedMsg(e) &&
              e.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
              t.set(e.parentMsgKey.toString(), e.parentMsgKey);
        }),
        t.size !== 0)
      ) {
        var n = await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(Array.from(t.keys()), !1),
          r = n.flatMap(function (e) {
            var n =
              e != null && e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
                ? t.get(String(e.id))
                : null;
            return n != null ? [n] : [];
          });
        r.length !== 0 &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[viewModeUpdate] attaching detached children of ",
                " parents after history sync",
              ])),
            r.length,
          ),
          await _({ parentMsgKeys: r, showParentsInChat: !0 }));
      }
    }
    async function _(e) {
      var t = e.parentMsgKeys,
        n = e.showParentsInChat,
        a = await f(t),
        i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(
            a.map(function (e) {
              return e.msgKey.toString();
            }),
            !1,
          ),
        l = i.filter(Boolean),
        s = h(l, c.Attach).flatMap(function (e, t) {
          return e != null && e.viewMode !== l[t].viewMode ? [e] : [];
        });
      if (s.length > 0) {
        await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkMergeOnly(
            s.map(function (e) {
              var t = e.id,
                n = e.viewMode;
              return { id: t, viewMode: n };
            }),
          );
        var u = new Map();
        (s.forEach(function (e) {
          var t = r("nullthrows")(e.viewMode);
          u.set(e.id, t);
        }),
          o("WAWebBackendApi").frontendFireAndForget("updateViewModeForMsgs", {
            msgIdsViewModeMap: u,
            showParentsInChat: n,
          }));
      }
      a.length > 0 &&
        (await o("WAWebMsgStoreExtensions").handleAttachedAssociatedMsgs(a));
    }
    async function f(e) {
      var t = await o(
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
    }
    function g(e, t) {
      var n = [];
      return (
        e.map(function (e) {
          var r = o(
            "WAWebAssociationProcessor",
          ).getAssociationProcessorByAssociationType(e.associationType);
          r != null && (t !== c.Detach || C(r.processorType)) && n.push(e);
        }),
        n
      );
    }
    function h(e, t) {
      return e.map(function (e) {
        if (!e.associationType) return null;
        var n = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(e.associationType);
        return n == null || (t === c.Detach && !C(n.processorType))
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
    function y(e) {
      return e.map(function (e) {
        if (!e.associationType) return null;
        var t = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(e.associationType);
        return t == null || !C(t.processorType)
          ? null
          : babelHelpers.extends({}, e, {
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              parentMsgKey: void 0,
              associationType: void 0,
            });
      });
    }
    function C(e) {
      return (
        e ===
        o("WAWebAssociationProcessorConstants").AssociationProcessorType
          .WithDetachedMessages
      );
    }
    ((l.ViewModeUpdateType = c),
      (l.processOrphansFromAssociationsTableForNewMsg = d),
      (l.attachDetachedChildrenAfterHistorySync = m),
      (l.getAssociatedMsgsByParentMsgKeyFromAssociationTable = f),
      (l.getValidAssociatedMsgs = g),
      (l.getDetachedForeverAssociatedMsgs = y));
  },
  98,
);
