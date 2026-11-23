__d(
  "WAWebMessageAssociationUIUtils",
  [
    "WAWebAddonQueryUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("WAWebMsgType").MSG_TYPE.ALBUM,
      o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
    ]);
    function s(t, n, r) {
      return r && e.has(n)
        ? Math.min.apply(
            Math,
            [t].concat(
              r.map(function (e) {
                var t = e.ack;
                return t;
              }),
            ),
          )
        : t;
    }
    function u(e, t) {
      return (
        t === void 0 && (t = o("WAWebViewMode.flow").ViewModeSurface.CHAT),
        m(o("WAWebMsgCollection").MsgCollection.byParentMessage(e), t)
      );
    }
    async function c(e, t) {
      var n = Array.from(new Set(t)),
        r = n.filter(function (e) {
          return o("WAWebMsgCollection").MsgCollection.get(e) == null;
        });
      r.length > 0 &&
        (await o("WAWebMsgCollection").MsgCollection.getMessagesById(r));
      var a = new Map(
          o("WAWebMsgCollection")
            .MsgCollection.byParentMessage(e)
            .map(function (e) {
              return [e.id.toString(), e];
            }),
        ),
        i = [];
      return (
        n.forEach(function (e) {
          var t = a.get(e);
          t != null && i.push(t);
        }),
        i
      );
    }
    function d(e, t) {
      return (
        t === void 0 && (t = o("WAWebViewMode.flow").ViewModeSurface.CHAT),
        o("WAWebMsgCollection")
          .MsgCollection.byChat(e)
          .filter(function (e) {
            var n = e.viewMode;
            return !o("WAWebViewModeUtils").isViewModeVisibleInSurface(t, n);
          })
      );
    }
    function m(e, t) {
      return e.filter(function (e) {
        var n = e.associationType,
          r = e.parentMsgKey,
          a = e.pendingDeleteForMe,
          i = e.viewMode;
        return (
          n != null &&
          r != null &&
          !a &&
          !o("WAWebViewModeUtils").isViewModeVisibleInSurface(t, i)
        );
      });
    }
    function p(e) {
      var t = e.duringDetach,
        n = t === void 0 ? !1 : t,
        r = e.parentMsgKey,
        o = n ? 1 : 0;
      return u(r).length - o > 0;
    }
    function _(e) {
      var t = e.duringDetach,
        n = t === void 0 ? !1 : t,
        r = e.parentMsg;
      switch (r.type) {
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION: {
          var a = o("WAWebFrontendMsgGetters").getAsPollCreation(r);
          return a == null
            ? !0
            : a.pollContentType ===
                o("WAWebPollCreationUtils").PollContentType.IMAGE &&
                u(r.id).length !== a.pollOptions.length;
        }
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
        default:
          return !p({ parentMsgKey: r.id, duringDetach: n });
      }
    }
    function f(e) {
      var t = e.associationType;
      if (!t) return !0;
      var n = e.parentMsgKey
        ? o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey)
        : null;
      e: return t ===
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
        ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            !_({ parentMsg: n })
        : t ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
          ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.ALBUM &&
            !_({ parentMsg: n })
          : !0;
    }
    async function g(e) {
      var t = h(e);
      if (t.size > 0) {
        var n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(
          Array.from(t.values(), function (e) {
            var t = e.parentMsgKey;
            return t;
          }),
        );
        await Promise.all(
          Array.from(t, function (e) {
            var t = e[0],
              r = e[1].children;
            return C(n.get(t), r);
          }),
        );
      }
      v(e);
    }
    function h(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = e.parentMsgKey,
            a = e.viewMode,
            i = e.getMsgChunk();
          if (
            !(
              r == null ||
              i == null ||
              o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                a,
              ) ||
              y(r, i)
            )
          ) {
            var l = r.toString(),
              s =
                (n = t.get(l)) != null ? n : { parentMsgKey: r, children: [] };
            (s.children.push(e), t.set(l, s));
          }
        }),
        t
      );
    }
    function y(e, t) {
      var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return t.get(e) != null || (n != null && t.get(n) != null);
    }
    async function C(e, t) {
      var n;
      if (
        !(
          e == null ||
          !(
            (n = o("WAWebInvisiblePlaceholderViewModeProcessor")
              .InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) !=
              null && n.includes(e.type)
          )
        )
      ) {
        var r = b(t);
        r != null &&
          (await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            r.msg.id.remote,
            [e],
            { add: "before", anchorMsgKey: r.msg.id, isHistory: !0 },
            "historyMsgHandlerAction",
            r.chunk,
          ));
      }
    }
    function b(e) {
      var t = null;
      return (
        e.forEach(function (e) {
          var n,
            r = e.getMsgChunk(),
            o = (n = r == null ? void 0 : r.indexOf(e)) != null ? n : -1;
          r != null &&
            o >= 0 &&
            (t == null || o < t.index) &&
            (t = { chunk: r, index: o, msg: e });
        }),
        t == null ? null : { chunk: t.chunk, msg: t.msg }
      );
    }
    function v(e) {
      e.filter(Boolean).forEach(function (e) {
        var t = e.parentMsgKey,
          n = e.viewMode;
        if (
          t &&
          !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
            o("WAWebViewMode.flow").ViewModeSurface.CHAT,
            n,
          )
        ) {
          var r,
            a = o("WAWebMsgCollection").MsgCollection.get(t);
          a &&
            (r = o("WAWebInvisiblePlaceholderViewModeProcessor")
              .InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) !=
              null &&
            r.includes(a.type) &&
            !_({ parentMsg: a, duringDetach: !1 }) &&
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              a == null ? void 0 : a.viewMode,
            ) &&
            a.set("viewMode", o("WAWebViewMode.flow").ViewModeType.VISIBLE);
        }
      });
    }
    ((l.getLowestAckState = s),
      (l.getHiddenAssociatedMessages = u),
      (l.getAssociatedMessagesByMsgKeys = c),
      (l.getHiddenViewModeMessagesForChat = d),
      (l.filterOutVisibleAssociatedMessages = m),
      (l.shouldHideParentMessage = _),
      (l.shouldDisplayOrphanMessage = f),
      (l.showParentsOfAttachedMsgsInChat = g),
      (l.makeParentMessagesVisibleInChat = v));
  },
  98,
);
