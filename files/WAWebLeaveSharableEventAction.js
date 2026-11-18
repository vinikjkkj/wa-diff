__d(
  "WAWebLeaveSharableEventAction",
  [
    "fbt",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventLeaveJob",
    "WAWebSharableEventReportJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var a = {
          label: s._(/*BTDS*/ "Leave event"),
          onPress: function () {
            (o("WDSDialogBridge").closeWDSDialog(), p(e, n));
          },
          testid: "sharable-event-leave-dialog-leave",
          type: "destructive",
          variant: "filled",
        },
        i = {
          label: r("WAWebFbtCommon")("Cancel"),
          onPress: o("WDSDialogBridge").closeWDSDialog,
          testid: "sharable-event-leave-dialog-cancel",
          variant: "borderless",
        };
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSDialog.react"), {
          closeButton: !1,
          description: s._(
            /*BTDS*/ "The event will be deleted from this device but you\u2019ll still see the invitation in chats.",
          ),
          footer: t
            ? u.jsx(r("WDSButtonGroup.react"), {
                orientation: "stacked",
                primaryButtonProps: a,
                secondaryButtonProps: {
                  label: s._(/*BTDS*/ "Leave and report"),
                  onPress: function () {
                    (o("WDSDialogBridge").closeWDSDialog(), f(e, n));
                  },
                  testid: "sharable-event-leave-dialog-leave-and-report",
                  type: "destructive",
                  variant: "outline",
                },
                tertiaryButtonProps: i,
                width: "fill",
              })
            : u.jsx(r("WDSButtonGroup.react"), {
                orientation: "stacked",
                primaryButtonProps: a,
                secondaryButtonProps: i,
                width: "fill",
              }),
          headerType: "expressive",
          layoutType: "expressive",
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          size: "sm",
          testid: "sharable-event-leave-dialog",
          title: s._(/*BTDS*/ "Leave event"),
          children: t
            ? u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "If you report the event, it will be sent to WhatsApp. No one in this event will be notified. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(r("WDSTextualLink.react"), {
                        href: o("WAWebFaqUrl").getEventsHowToReportFaqUrl(),
                        testid: "sharable-event-leave-dialog-learn-more",
                        textConfig: "Body2",
                        children: s._(/*BTDS*/ "Learn more"),
                      }),
                    ),
                  ],
                ),
              })
            : null,
        }),
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = s._(
            /*BTDS*/ "Event reported. Couldn\u2019t leave the event.",
          );
          (yield h(e, n)) && (S(v()), t());
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield h(e, C())) && (S(b()), t());
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (yield h(e, C())) {
            t();
            try {
              yield o("WAWebSharableEventReportJob").reportSharableEvent(e);
            } catch (e) {
              (o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                "report",
                e,
              ),
                S(b()));
              return;
            }
            S(v());
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return (
              yield o("WAWebSharableEventLeaveJob").leaveSharableEvent(e),
              !0
            );
          } catch (e) {
            return (
              o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                "leave",
                e,
              ),
              S(t),
              !1
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return s._(/*BTDS*/ "Couldn\u2019t leave the event. Please try again.");
    }
    function b() {
      return s._(/*BTDS*/ "You left the event");
    }
    function v() {
      return s._(/*BTDS*/ "Event reported. You left the event.");
    }
    function S(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    ((l.confirmLeaveSharableEvent = c), (l.leaveSharableEventAfterReport = d));
  },
  226,
);
