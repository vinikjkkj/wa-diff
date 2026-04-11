__d(
  "WAWebNewsletterDeleteModal.react",
  [
    "fbt",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebEnforcementActionLogging",
    "WAWebModalManager",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterDeleteAction",
    "WAWebUserConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumInteractionSurface",
    "WAWebWamEnumThreadType",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = function () {
        return s._(
          /*BTDS*/ "To delete, confirm your country code and enter your phone number.",
        );
      },
      _ = function () {
        return s._(/*BTDS*/ "To delete, confirm your email.");
      },
      f = function () {
        return s._(/*BTDS*/ "Delete");
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["name"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (t[1] = l))
        : (l = t[1]),
        m(y, l),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          h,
        ));
      var c;
      t[2] !== n.id
        ? ((c = function () {
            (o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.log({
              channelCoreEventType: o("WAWebWamEnumChannelEventType")
                .CHANNEL_EVENT_TYPE.DELETE,
              cid: n.id,
              eventSurface: o("WAWebWamEnumChannelEventSurface")
                .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
            }),
              o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[2] = n.id),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        g;
      t[4] !== n
        ? ((g = function () {
            return (
              r(
                "WAWebEnforcementActionLogging",
              ).logChannelDeletePhoneNumberConfirmClick(),
              o("WAWebNewsletterDeleteAction").deleteNewsletterAction(n)
            );
          }),
          (t[4] = n),
          (t[5] = g))
        : (g = t[5]);
      var C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "The channel couldn't be deleted. Please try again.",
          )),
          (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] !== g
        ? ((b = [{ action: g, errorMessage: C }]), (t[7] = g), (t[8] = b))
        : (b = t[8]);
      var v = b,
        S;
      t[9] !== i.name
        ? ((S = s._(/*BTDS*/ 'You deleted your channel "{channel-name}"', [
            s._param(
              "channel-name",
              u.jsx(o("WAWebEmojiText.react").EmojiText, { text: i.name }),
            ),
          ])),
          (t[9] = i.name),
          (t[10] = S))
        : (S = t[10]);
      var R = S,
        L;
      t[11] !== n.id
        ? ((L = {
            surface: "channel-delete-page",
            extras: {
              channelWid: n.id,
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
            },
          }),
          (t[11] = n.id),
          (t[12] = L))
        : (L = t[12]);
      var E = L,
        k,
        I,
        T;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = f()),
          (k = _()),
          (I = p()),
          (t[13] = k),
          (t[14] = I),
          (t[15] = T))
        : ((k = t[13]), (I = t[14]), (T = t[15]));
      var D;
      return (
        t[16] !== v || t[17] !== d || t[18] !== R || t[19] !== E
          ? ((D = u.jsx(r("WAWebUserConfirmationModal.react"), {
              actions: v,
              actionType: "solid-warning",
              actionText: T,
              emailContentText: k,
              phoneContentText: I,
              successText: R,
              onCompletion: d,
              tsNavigationData: E,
            })),
            (t[16] = v),
            (t[17] = d),
            (t[18] = R),
            (t[19] = E),
            (t[20] = D))
          : (D = t[20]),
        D
      );
    }
    function h() {
      r("WAWebEnforcementActionLogging").logDismissModalClick();
    }
    function y() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .DELETE_CHANNEL_PHONE_NUMBER_CONFIRM,
      );
    }
    l.default = g;
  },
  226,
);
