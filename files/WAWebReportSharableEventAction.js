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
          label: s._(/*BTDS*/ ""),
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
          description: s._(/*BTDS*/ ""),
          footer: t
            ? u.jsx(r("WDSButtonGroup.react"), {
                orientation: "stacked",
                primaryButtonProps: a,
                secondaryButtonProps: {
                  label: s._(/*BTDS*/ ""),
                  onPress: function () {
                    (o("WDSDialogBridge").closeWDSDialog(), m(e, n));
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
                children: s._(/*BTDS*/ "", [
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("WDSTextualLink.react"), {
                      href: o("WAWebFaqUrl").getEventsHowToReportFaqUrl(),
                      testid: "sharable-event-report-dialog-learn-more",
                      textConfig: "Body2",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              })
            : null,
        }),
      );
    }
    async function d(e) {
      (await p(e)) &&
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
        );
    }
    async function m(e, t) {
      (await p(e)) &&
        (await o("WAWebLeaveSharableEventAction").leaveSharableEventAfterReport(
          e,
          t,
        ));
    }
    async function p(e) {
      try {
        await o("WAWebSharableEventReportJob").reportSharableEvent(e);
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
            u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
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
    }
    l.confirmReportSharableEvent = c;
  },
  226,
);
