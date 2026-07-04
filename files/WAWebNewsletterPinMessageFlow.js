__d(
  "WAWebNewsletterPinMessageFlow",
  [
    "fbt",
    "WATimeUtils",
    "WAWebClock",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterPinDisplay",
    "WAWebNewsletterPinMessageAction",
    "asyncToGeneratorRuntime",
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
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebConfirmPopup.react").waitForConfirmPopup({
            title: s._(/*BTDS*/ "Couldn't update pin"),
            children: s._(/*BTDS*/ "Check your connection and try again."),
            okText: s._(/*BTDS*/ "Retry"),
            cancelText: s._(/*BTDS*/ "Cancel"),
            testid: "channel-pin-retry",
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield e(t, n);
          } catch (r) {
            (yield m()) && (yield _(e, t, n));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = o("WATimeUtils").castToUnixTime(
        e.t +
          o("WAWebNewsletterPinDisplay")
            .NEWSLETTER_MAX_PINNABLE_MSG_AGE_SECONDS,
      );
      return o("WATimeUtils").sameDay(o("WATimeUtils").unixTime(), t)
        ? s._(
            /*BTDS*/ "This update will be pinned until {expiry} today. You can unpin at any time.",
            [s._param("expiry", o("WAWebClock").Clock.timestampStr(t))],
          )
        : s._(
            /*BTDS*/ "This update will be pinned until {expiry}. You can unpin at any time.",
            [s._param("expiry", o("WAWebClock").Clock.monthDayStr(t))],
          );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = d(t);
          if (a != null) {
            if (o("WAWebNewsletterPinDisplay").isNewsletterMsgTooOldToPin(t)) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebNewsletterErrorPopups.react")
                    .NewsletterPinTooOldPopup,
                  {},
                ),
              );
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
              l = yield o("WAWebConfirmPopup.react").waitForConfirmPopup(
                i
                  ? {
                      title: s._(/*BTDS*/ "Replace oldest pin?"),
                      children: s._(
                        /*BTDS*/ "Your new pin will replace the oldest pinned update.",
                      ),
                      okText: s._(/*BTDS*/ "Pin"),
                      cancelText: s._(/*BTDS*/ "Cancel"),
                      testid: "channel-pin-replace-confirm",
                    }
                  : {
                      children: g(t),
                      okText: s._(/*BTDS*/ "Pin"),
                      cancelText: s._(/*BTDS*/ "Cancel"),
                      testid: "channel-pin-confirm",
                    },
              );
            l &&
              (yield _(
                o("WAWebNewsletterPinMessageAction").pinNewsletterMessage,
                e,
                a,
              ));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(t);
          if (n != null) {
            var r = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
              title: s._(/*BTDS*/ "Unpin this update?"),
              okText: s._(/*BTDS*/ "Unpin"),
              cancelText: s._(/*BTDS*/ "Cancel"),
              testid: "channel-unpin-confirm",
            });
            r &&
              (yield _(
                o("WAWebNewsletterPinMessageAction").unpinNewsletterMessage,
                e,
                n,
              ));
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.runPinNewsletterMessageFlow = h),
      (l.runUnpinNewsletterMessageFlow = C));
  },
  226,
);
