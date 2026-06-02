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
    "WAWebPinChatLimits",
    "WAWebPinnedChatsWamEvent",
    "WAWebPinnedChatsWamUtils",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
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
      if (
        !e.isNewsletter() &&
        !(t <= o("WAWebPinChatLimits").MAX_PINNED_CHATS) &&
        !(
          !r("WAWebAuraGating").isPinnedChatsEnabled() &&
          !r("WAWebAuraGating").isPinnedChatsBenefitActive()
        )
      ) {
        var n = r("WAWebAuraGating").isPinnedChatsBenefitActive();
        new (o("WAWebWaPlusBenefitJourneyLogger").WaPlusBenefitJourneyLogger)({
          benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE
            .PINNED_CHATS,
          surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT,
        }).logApply({
          success: n,
          errorMessage: n ? void 0 : "not_active_user_exceeded_base_limit",
          customFields: { pinned_chat_number: t },
        });
      }
    }
    function p(e) {
      if (
        !e.isNewsletter() &&
        r("WAWebAuraGating").isPinnedChatsBenefitActive()
      ) {
        var t = o("WAWebChatPinBridge").getPinLimit(e);
        t > o("WAWebPinChatLimits").MAX_PINNED_CHATS ||
          new (o("WAWebWaPlusBenefitJourneyLogger").WaPlusBenefitJourneyLogger)(
            {
              benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE
                .PINNED_CHATS,
              surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT,
            },
          ).logApply({
            success: !1,
            errorMessage: "active_user_blocked_below_premium_limit",
          });
      }
    }
    function _(e, t) {
      return f(o("WAWebStateUtils").unproxy(e), t);
    }
    function f(t, n, a) {
      a === void 0 && (a = o("WAWebActionToast.react").genId());
      var i = t.promises;
      i.setPin && i.setPin.abortController.abort();
      var l = 0,
        u,
        _ = o("WATimeUtils").unixTimeMs();
      n ? (l = _) : (u = t.pin);
      var h = new AbortController(),
        y = h.signal,
        C = !!(
          n &&
          r("WAWebAuraGating").isPinnedChatsEnabled() &&
          !r("WAWebAuraGating").isPinnedChatsBenefitActive()
        ),
        b = C
          ? o("WAWebChatPinBridge")
              .getNumConversationsPinned(t.id)
              .then(function (e) {
                var n = o("WAWebChatPinBridge").getPinLimit(t.id);
                if (e >= n)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    405,
                    "Pin limit exceeded",
                  );
                return o("WAWebChatPinBridge").setPin(t.id, l, u, _);
              })
          : o("WAWebChatPinBridge").setPin(t.id, l, u, _),
        v = n
          ? new (o("WAWebActionToast.react").ActionType)(g.getPinningText(t))
          : new (o("WAWebActionToast.react").ActionType)(g.getUnpinningText(t)),
        S = b
          .then(function () {
            if (y.aborted) throw new (o("WAAbortError").AbortError)();
            n &&
              o("WAWebChatPinBridge")
                .getNumConversationsPinned(t.id)
                .then(function (e) {
                  var n = o(
                    "WAWebPinnedChatsWamUtils",
                  ).getPinnedChatsPremiumStatus();
                  (new (o("WAWebPinnedChatsWamEvent").PinnedChatsWamEvent)({
                    pinnedChatNumber: e,
                    pinnedChatsPremiumStatus: n,
                  }).commit(),
                    m(t.id, e));
                });
            var e = n ? g.getPinnedText(t) : g.getUnpinnedText(t);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: s._(/*BTDS*/ "Undo"),
              actionHandler: function () {
                return f(t, !n, a);
              },
            });
          })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(async function (r) {
            if (r.status === 405) {
              if (
                (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(),
                p(t.id),
                C)
              ) {
                o("WAWebToastManager").ToastManager.close(a);
                var i = await d.load();
                return (
                  o("WAWebModalManager").ModalManager.openAlert(c.jsx(i, {})),
                  new (o("WAWebActionToast.react").ActionType)(
                    g.getFailedToPinText(t),
                  )
                );
              }
              return new (o("WAWebActionToast.react").ActionType)(
                g.getPinLimitExceededText(t),
              );
            } else if (r.status >= 400)
              return n
                ? new (o("WAWebActionToast.react").ActionType)(
                    g.getFailedToPinText(t),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    g.getFailedToUnpinText(t),
                  );
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "models:chat:setPin dropped",
                ])),
            );
            var l = n ? g.getFailedToPinText(t) : g.getFailedToUnpinText(t);
            return new (o("WAWebActionToast.react").ActionType)(l, {
              actionText: s._(/*BTDS*/ "Try again."),
              actionHandler: function () {
                return f(t, n, a);
              },
            });
          });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: a,
          initialAction: v,
          pendingAction: S,
        }),
      );
      var R = b
        .then(function () {
          t.pin = l;
        })
        .finally(function () {
          i.setPin = null;
        });
      return ((i.setPin = { promise: R, abortController: h }), R);
    }
    var g = {
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
    l.setPin = _;
  },
  226,
);
