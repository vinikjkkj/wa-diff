__d(
  "WAWebSetPinChatAction",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebChatPinBridge",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPinnedChatsWamEvent",
    "WAWebPinnedChatsWamUtils",
    "WAWebStateUtils",
    "WAWebToastManager",
    "cr:12224",
    "cr:12385",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m(o("WAWebStateUtils").unproxy(e), t);
    }
    function m(t, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = t.promises;
      l.setPin && l.setPin.abortController.abort();
      var u = 0,
        d,
        _ = o("WATimeUtils").unixTimeMs();
      a ? (u = _) : (d = t.pin);
      var f = new AbortController(),
        g = f.signal,
        h = !!(
          a &&
          n("cr:12224") != null &&
          n("cr:12224").isPinnedChatsEnabled() &&
          !(n("cr:12224") != null && n("cr:12224").isPinnedChatsBenefitActive())
        ),
        y = h
          ? o("WAWebChatPinBridge")
              .getNumConversationsPinned(t.id)
              .then(function (e) {
                var n = o("WAWebChatPinBridge").getPinLimit(t.id);
                if (e >= n)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    405,
                    "Pin limit exceeded",
                  );
                return o("WAWebChatPinBridge").setPin(t.id, u, d, _);
              })
          : o("WAWebChatPinBridge").setPin(t.id, u, d, _),
        C = a
          ? new (o("WAWebActionToast.react").ActionType)(p.getPinningText(t))
          : new (o("WAWebActionToast.react").ActionType)(p.getUnpinningText(t)),
        b = y
          .then(function () {
            if (g.aborted) throw new (o("WAAbortError").AbortError)();
            a &&
              o("WAWebChatPinBridge")
                .getNumConversationsPinned(t.id)
                .then(function (e) {
                  var t = o(
                    "WAWebPinnedChatsWamUtils",
                  ).getPinnedChatsPremiumStatus();
                  new (o("WAWebPinnedChatsWamEvent").PinnedChatsWamEvent)({
                    pinnedChatNumber: e,
                    pinnedChatsPremiumStatus: t,
                  }).commit();
                });
            var e = a ? p.getPinnedText(t) : p.getUnpinnedText(t);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: s._(/*BTDS*/ "Undo"),
              actionHandler: function () {
                return m(t, !a, i);
              },
            });
          })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(function (r) {
            if (r.status === 405)
              return (
                o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(),
                h && n("cr:12385")
                  ? (o("WAWebToastManager").ToastManager.close(i),
                    o("WAWebModalManager").ModalManager.openAlert(
                      c.jsx(n("cr:12385"), {}),
                    ),
                    new (o("WAWebActionToast.react").ActionType)(
                      p.getFailedToPinText(t),
                    ))
                  : new (o("WAWebActionToast.react").ActionType)(
                      p.getPinLimitExceededText(t),
                    )
              );
            if (r.status >= 400)
              return a
                ? new (o("WAWebActionToast.react").ActionType)(
                    p.getFailedToPinText(t),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    p.getFailedToUnpinText(t),
                  );
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "models:chat:setPin dropped",
                ])),
            );
            var l = a ? p.getFailedToPinText(t) : p.getFailedToUnpinText(t);
            return new (o("WAWebActionToast.react").ActionType)(l, {
              actionText: s._(/*BTDS*/ "Try again."),
              actionHandler: function () {
                return m(t, a, i);
              },
            });
          });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: i,
          initialAction: C,
          pendingAction: b,
        }),
      );
      var v = y
        .then(function () {
          t.pin = u;
        })
        .finally(function () {
          l.setPin = null;
        });
      return ((l.setPin = { promise: v, abortController: f }), v);
    }
    var p = {
      getPinnedText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Channel pinned")
          : s._(/*BTDS*/ "Chat pinned");
      },
      getUnpinnedText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Channel unpinned")
          : s._(/*BTDS*/ "Chat unpinned");
      },
      getPinningText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Pinning channel")
          : s._(/*BTDS*/ "Pinning chat");
      },
      getUnpinningText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Unpinning channel")
          : s._(/*BTDS*/ "Unpinning chat");
      },
      getFailedToPinText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Couldn't pin channel")
          : s._(/*BTDS*/ "Couldn't pin chat");
      },
      getFailedToUnpinText: function (t) {
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(/*BTDS*/ "Couldn't unpin channel")
          : s._(/*BTDS*/ "Couldn't unpin chat");
      },
      getPinLimitExceededText: function (t) {
        var e = o("WAWebChatPinBridge").getPinLimit(t.id);
        return o("WAWebChatGetters").getIsNewsletter(t)
          ? s._(
              /*BTDS*/ '_j{"*":"You can only pin up to {number} channels.","_1":"You can only pin up to 1 channel."}',
              [s._plural(e, "number")],
            )
          : s._(
              /*BTDS*/ '_j{"*":"You can only pin up to {number} chats.","_1":"You can only pin up to 1 chat."}',
              [s._plural(e, "number")],
            );
      },
    };
    l.setPin = d;
  },
  226,
);
