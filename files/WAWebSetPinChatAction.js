__d(
  "WAWebSetPinChatAction",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAuraGating",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebChatPinBridge",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPinnedChatsWamEvent",
    "WAWebPinnedChatsWamUtils",
    "WAWebStateUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef(
        "WAWebSetPinChatAction",
      );
    function m(e, t) {
      return p(o("WAWebStateUtils").unproxy(e), t);
    }
    function p(t, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = t.promises;
      l.setPin && l.setPin.abortController.abort();
      var u = 0,
        m,
        f = o("WATimeUtils").unixTimeMs();
      a ? (u = f) : (m = t.pin);
      var g = new AbortController(),
        h = g.signal,
        y = !!(
          a &&
          r("WAWebAuraGating").isPinnedChatsEnabled() &&
          !r("WAWebAuraGating").isPinnedChatsBenefitActive()
        ),
        C = y
          ? o("WAWebChatPinBridge")
              .getNumConversationsPinned(t.id)
              .then(function (e) {
                var n = o("WAWebChatPinBridge").getPinLimit(t.id);
                if (e >= n)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    405,
                    "Pin limit exceeded",
                  );
                return o("WAWebChatPinBridge").setPin(t.id, u, m, f);
              })
          : o("WAWebChatPinBridge").setPin(t.id, u, m, f),
        b = a
          ? new (o("WAWebActionToast.react").ActionType)(_.getPinningText(t))
          : new (o("WAWebActionToast.react").ActionType)(_.getUnpinningText(t)),
        v = C.then(function () {
          if (h.aborted) throw new (o("WAAbortError").AbortError)();
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
          var e = a ? _.getPinnedText(t) : _.getUnpinnedText(t);
          return new (o("WAWebActionToast.react").ActionType)(e, {
            actionText: s._(/*BTDS*/ "Undo"),
            actionHandler: function () {
              return p(t, !a, i);
            },
          });
        })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(
            (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  if (n.status === 405) {
                    if (
                      (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(),
                      y)
                    ) {
                      o("WAWebToastManager").ToastManager.close(i);
                      var r = yield d.load();
                      return (
                        o("WAWebModalManager").ModalManager.openAlert(
                          c.jsx(r, {}),
                        ),
                        new (o("WAWebActionToast.react").ActionType)(
                          _.getFailedToPinText(t),
                        )
                      );
                    }
                    return new (o("WAWebActionToast.react").ActionType)(
                      _.getPinLimitExceededText(t),
                    );
                  } else if (n.status >= 400)
                    return a
                      ? new (o("WAWebActionToast.react").ActionType)(
                          _.getFailedToPinText(t),
                        )
                      : new (o("WAWebActionToast.react").ActionType)(
                          _.getFailedToUnpinText(t),
                        );
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat:setPin dropped",
                      ])),
                  );
                  var l = a
                    ? _.getFailedToPinText(t)
                    : _.getFailedToUnpinText(t);
                  return new (o("WAWebActionToast.react").ActionType)(l, {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return p(t, a, i);
                    },
                  });
                },
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })(),
          );
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: i,
          initialAction: b,
          pendingAction: v,
        }),
      );
      var S = C.then(function () {
        t.pin = u;
      }).finally(function () {
        l.setPin = null;
      });
      return ((l.setPin = { promise: S, abortController: g }), S);
    }
    var _ = {
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
    l.setPin = m;
  },
  226,
);
