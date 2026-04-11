__d(
  "WAWebCommentAction",
  [
    "WAAbortError",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCommentCollection",
    "WAWebMsgType",
    "WAWebNotificationBackend",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return !e.read && e.parentMsgKey.fromMe && !e.id.fromMe;
    }
    function u(e, t) {
      var n = [],
        r = t ? [].concat(t) : [];
      for (var a of e)
        switch (a.type) {
          case o("WAWebMsgType").MSG_TYPE.REVOKED:
            (n.push(
              o("WAWebCommentCollection").createCommentModelFromRevoke(a),
            ),
              a.protocolMessageKey != null && r.push(a.protocolMessageKey));
            break;
          case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
            n.push(
              o("WAWebCommentCollection").createCommentModelFromPlaceholder(a),
            );
            break;
          case o("WAWebMsgType").MSG_TYPE.COMMENT:
            n.push(o("WAWebCommentCollection").createCommentModel(a));
        }
      (o("WAWebCommentCollection").CommentCollection.remove(r),
        o("WAWebCommentCollection").CommentCollection.set(n, { remove: !1 }));
    }
    function c(e) {
      for (var t of e) {
        var n = t.id,
          r = t.t;
        if (n != null) {
          var a = o("WAWebChatCollection").ChatCollection.get(n);
          if (a != null) {
            var i;
            ((a.t = r),
              (a.unreadCount =
                (i = t.unreadCount) != null ? i : a.unreadCount));
          }
        }
      }
    }
    function d(t, n) {
      for (var r of t)
        s(r) &&
          o("WAWebNotificationBackend")
            .showCommentNotification(r)
            .catch(
              o("WAAbortError").catchAbort(function (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[Comments] Aborted notification ",
                      "",
                    ])),
                  t,
                );
              }),
            );
      for (var a of n)
        o("WAWebNotificationBackend").removeCommentNotification(a);
    }
    ((l.upsertCommentModelCollection = u),
      (l.updateChatToLatest = c),
      (l.handleCommentNotification = d));
  },
  98,
);
