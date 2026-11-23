__d(
  "WAWebNewsletterPinMessageFlow",
  [
    "fbt",
    "WATimeUtils",
    "WAWebClock",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterInfoDialogsLoadable",
    "WAWebNewsletterPinDisplay",
    "WAWebNewsletterPinMessageAction",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 4;
    function d(e) {
      var t = e.serverId;
      return t == null ||
        t >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND
        ? null
        : t;
    }
    async function m() {
      return o("WAWebConfirmPopup.react").waitForConfirmPopup({
        title: s._(/*BTDS*/ ""),
        children: s._(/*BTDS*/ ""),
        okText: s._(/*BTDS*/ ""),
        cancelText: s._(/*BTDS*/ ""),
        testid: "channel-pin-retry",
      });
    }
    async function p(e, t, n) {
      try {
        await e(t, n);
      } catch (r) {
        (await m()) && (await p(e, t, n));
      }
    }
    function _(e) {
      var t = o("WATimeUtils").castToUnixTime(
        e.t +
          o("WAWebNewsletterPinDisplay")
            .NEWSLETTER_MAX_PINNABLE_MSG_AGE_SECONDS,
      );
      return o("WATimeUtils").sameDay(o("WATimeUtils").unixTime(), t)
        ? s._(/*BTDS*/ "", [
            s._param("expiry", o("WAWebClock").Clock.timestampStr(t)),
          ])
        : s._(/*BTDS*/ "", [
            s._param("expiry", o("WAWebClock").Clock.monthDayStr(t)),
          ]);
    }
    async function f(e, t) {
      var n,
        r,
        a = d(t);
      if (a != null) {
        if (o("WAWebNewsletterPinDisplay").isNewsletterMsgTooOldToPin(t)) {
          (o("WAWebModalManager").ModalManager.close(),
            o("WDSDialogBridge").openWDSDialog(
              u.jsx(
                o("WAWebNewsletterInfoDialogsLoadable")
                  .NewsletterPinTooOldPopupLoadable,
                {},
              ),
            ));
          return;
        }
        var i =
            o("WAWebNewsletterPinDisplay").filterActiveNewsletterPins(
              (n =
                (r = e.newsletterMetadata) == null
                  ? void 0
                  : r.pinnedMessages) != null
                ? n
                : [],
              o("WATimeUtils").unixTime(),
            ).length >= c,
          l = await o("WAWebConfirmPopup.react").waitForConfirmPopup(
            i
              ? {
                  title: s._(/*BTDS*/ ""),
                  children: s._(/*BTDS*/ ""),
                  okText: s._(/*BTDS*/ ""),
                  cancelText: s._(/*BTDS*/ ""),
                  testid: "channel-pin-replace-confirm",
                }
              : {
                  children: _(t),
                  okText: s._(/*BTDS*/ ""),
                  cancelText: s._(/*BTDS*/ ""),
                  testid: "channel-pin-confirm",
                },
          );
        l &&
          (await p(
            o("WAWebNewsletterPinMessageAction").pinNewsletterMessage,
            e,
            a,
          ));
      }
    }
    async function g(e, t) {
      var n = d(t);
      if (n != null) {
        var r = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
          title: s._(/*BTDS*/ ""),
          okText: s._(/*BTDS*/ ""),
          cancelText: s._(/*BTDS*/ ""),
          testid: "channel-unpin-confirm",
        });
        r &&
          (await p(
            o("WAWebNewsletterPinMessageAction").unpinNewsletterMessage,
            e,
            n,
          ));
      }
    }
    ((l.runPinNewsletterMessageFlow = f),
      (l.runUnpinNewsletterMessageFlow = g));
  },
  226,
);
