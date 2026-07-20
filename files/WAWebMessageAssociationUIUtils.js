__d(
  "WAWebMessageAssociationUIUtils",
  [
    "WAWebFrontendMsgGetters",
    "WAWebInvisiblePlaceholderViewModeProcessor",
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
        d(o("WAWebMsgCollection").MsgCollection.byParentMessage(e), t)
      );
    }
    function c(e, t) {
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
    function d(e, t) {
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
    function m(e) {
      var t = e.duringDetach,
        n = t === void 0 ? !1 : t,
        r = e.parentMsgKey,
        o = n ? 1 : 0;
      return u(r).length - o > 0;
    }
    function p(e) {
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
          return !m({ parentMsgKey: r.id, duringDetach: n });
      }
    }
    function _(e) {
      var t = e.associationType;
      if (!t) return !0;
      var n = e.parentMsgKey
        ? o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey)
        : null;
      e: return t ===
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
        ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            !p({ parentMsg: n })
        : t ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
          ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.ALBUM &&
            !p({ parentMsg: n })
          : !0;
    }
    function f(e) {
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
            !p({ parentMsg: a, duringDetach: !1 }) &&
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
      (l.getHiddenViewModeMessagesForChat = c),
      (l.filterOutVisibleAssociatedMessages = d),
      (l.shouldHideParentMessage = p),
      (l.shouldDisplayOrphanMessage = _),
      (l.makeParentMessagesVisibleInChat = f));
  },
  98,
);
