__d(
  "WAWebMessageAssociationUIUtils",
  [
    "WAWebFrontendMsgGetters",
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
      switch (t) {
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .MEDIA_POLL:
          return (
            n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            !p({ parentMsg: n })
          );
        default:
          return !0;
      }
    }
    ((l.getLowestAckState = s),
      (l.getHiddenAssociatedMessages = u),
      (l.getHiddenViewModeMessagesForChat = c),
      (l.filterOutVisibleAssociatedMessages = d),
      (l.shouldHideParentMessage = p),
      (l.shouldDisplayOrphanMessage = _));
  },
  98,
);
