__d(
  "WAWebMessageAssociationUIUtils",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        o("WAWebMsgType").MSG_TYPE.ALBUM,
        o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
      ]);
    function u(e, t, n) {
      return n && s.has(t)
        ? Math.min.apply(
            Math,
            [e].concat(
              n.map(function (e) {
                var t = e.ack;
                return t;
              }),
            ),
          )
        : e;
    }
    function c(e, t) {
      return (
        t === void 0 && (t = o("WAWebViewMode.flow").ViewModeSurface.CHAT),
        _(o("WAWebMsgCollection").MsgCollection.byParentMessage(e), t)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Array.from(new Set(t)),
            r = n.filter(function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e) == null;
            });
          r.length > 0 &&
            (yield o("WAWebMsgCollection").MsgCollection.getMessagesById(r));
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
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
    function _(e, t) {
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
    function f(e) {
      var t = e.duringDetach,
        n = t === void 0 ? !1 : t,
        r = e.parentMsgKey,
        o = n ? 1 : 0;
      return c(r).length - o > 0;
    }
    function g(e) {
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
                c(r.id).length !== a.pollOptions.length;
        }
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
        default:
          return !f({ parentMsgKey: r.id, duringDetach: n });
      }
    }
    function h(e) {
      var t = e.associationType;
      if (!t) return !0;
      var n = e.parentMsgKey
        ? o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey)
        : null;
      e: return t ===
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
        ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            !g({ parentMsg: n })
        : t ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
          ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.ALBUM &&
            !g({ parentMsg: n })
          : !0;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = b(t);
          if (r.size > 0) {
            var a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(
              Array.from(r.values(), function (e) {
                var t = e.parentMsgKey;
                return t;
              }),
            );
            yield (e || (e = n("Promise"))).all(
              Array.from(r, function (e) {
                var t = e[0],
                  n = e[1].children;
                return S(a.get(t), n);
              }),
            );
          }
          E(t);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
              v(r, i)
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
    function v(e, t) {
      var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return t.get(e) != null || (n != null && t.get(n) != null);
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            !(
              e == null ||
              ((n = o("WAWebInvisiblePlaceholderViewModeProcessor")
                .InvisiblePlaceholderViewModeProcessor
                .compatibleMessageTypes) == null
                ? void 0
                : n.includes(e.type)) !== !0
            )
          ) {
            var r = L(t);
            r != null &&
              (yield o(
                "WAWebMsgCollection",
              ).MsgCollection.processMultipleMessages(
                r.msg.id.remote,
                [e],
                { add: "before", anchorMsgKey: r.msg.id, isHistory: !0 },
                "historyMsgHandlerAction",
                r.chunk,
              ));
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
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
    function E(e) {
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
            !g({ parentMsg: a, duringDetach: !1 }) &&
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              a == null ? void 0 : a.viewMode,
            ) &&
            a.set("viewMode", o("WAWebViewMode.flow").ViewModeType.VISIBLE);
        }
      });
    }
    ((l.getLowestAckState = u),
      (l.getHiddenAssociatedMessages = c),
      (l.getAssociatedMessagesByMsgKeys = d),
      (l.getHiddenViewModeMessagesForChat = p),
      (l.filterOutVisibleAssociatedMessages = _),
      (l.shouldHideParentMessage = g),
      (l.shouldDisplayOrphanMessage = h),
      (l.showParentsOfAttachedMsgsInChat = y),
      (l.makeParentMessagesVisibleInChat = E));
  },
  98,
);
