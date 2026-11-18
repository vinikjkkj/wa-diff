__d(
  "WAWebReportSharableEventAction",
  [
    "fbt",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebLeaveSharableEventAction",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteeUserJourneyLogger",
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
      o(
        "WAWebSharableEventInviteeUserJourneyLogger",
      ).logSharableEventInviteeReportTapped(e);
      var a = {
          label: s._(/*BTDS*/ "Report event"),
          onPress: function () {
            (o("WDSDialogBridge").closeWDSDialog(), d(e));
          },
          testid: "sharable-event-report-dialog-report",
          type: "destructive",
          variant: "filled",
        },
        i = {
          label: r("WAWebFbtCommon")("Cancel"),
          onPress: o("WDSDialogBridge").closeWDSDialog,
          testid: "sharable-event-report-dialog-cancel",
          variant: "borderless",
        };
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSDialog.react"), {
          closeButton: !1,
          description: s._(
            /*BTDS*/ "This event will be sent to WhatsApp. No one in this event will be notified.",
          ),
          footer: t
            ? u.jsx(r("WDSButtonGroup.react"), {
                orientation: "stacked",
                primaryButtonProps: a,
                secondaryButtonProps: {
                  label: s._(/*BTDS*/ "Report and leave"),
                  onPress: function () {
                    (o("WDSDialogBridge").closeWDSDialog(), p(e, n));
                  },
                  testid: "sharable-event-report-dialog-report-and-leave",
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
          testid: "sharable-event-report-dialog",
          title: r("WAWebFbtCommon")("Report to WhatsApp"),
          children: t
            ? u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "If you leave this event, the event will be deleted from this device but you\u2019ll still see the invitation in chats. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(r("WDSTextualLink.react"), {
                        href: o("WAWebFaqUrl").getEventsHowToReportFaqUrl(),
                        testid: "sharable-event-report-dialog-learn-more",
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield f(e)) &&
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Event reported"),
              }),
            );
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
          (yield f(e)) &&
            (yield o(
              "WAWebLeaveSharableEventAction",
            ).leaveSharableEventAfterReport(e, t));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebSharableEventReportJob").reportSharableEvent(e);
          } catch (t) {
            return (
              o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                "report",
                t,
              ),
              o(
                "WAWebSharableEventInviteeUserJourneyLogger",
              ).logSharableEventInviteeReportFailed(e, t),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                }),
              ),
              !1
            );
          }
          return (
            o(
              "WAWebSharableEventInviteeUserJourneyLogger",
            ).logSharableEventInviteeReportCompleted(e),
            !0
          );
        })),
        g.apply(this, arguments)
      );
    }
    l.confirmReportSharableEvent = c;
  },
  226,
);
