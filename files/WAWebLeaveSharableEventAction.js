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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var a = {
          label: s._(/*BTDS*/ ""),
          onPress: function () {
            (o("WDSDialogBridge").closeWDSDialog(), m(e, n));
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
          description: s._(/*BTDS*/ ""),
          footer: t
            ? u.jsx(r("WDSButtonGroup.react"), {
                orientation: "stacked",
                primaryButtonProps: a,
                secondaryButtonProps: {
                  label: s._(/*BTDS*/ ""),
                  onPress: function () {
                    (o("WDSDialogBridge").closeWDSDialog(), p(e, n));
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
          title: s._(/*BTDS*/ ""),
          children: t
            ? u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(/*BTDS*/ "", [
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("WDSTextualLink.react"), {
                      href: o("WAWebFaqUrl").getEventsHowToReportFaqUrl(),
                      testid: "sharable-event-leave-dialog-learn-more",
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
    async function d(e, t) {
      var n = s._(/*BTDS*/ "");
      (await _(e, n)) && (y(h()), t());
    }
    async function m(e, t) {
      (await _(e, f())) && (y(g()), t());
    }
    async function p(e, t) {
      if (await _(e, f())) {
        t();
        try {
          await o("WAWebSharableEventReportJob").reportSharableEvent(e);
        } catch (e) {
          (o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "report",
            e,
          ),
            y(g()));
          return;
        }
        y(h());
      }
    }
    async function _(e, t) {
      try {
        return (
          await o("WAWebSharableEventLeaveJob").leaveSharableEvent(e),
          !0
        );
      } catch (e) {
        return (
          o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "leave",
            e,
          ),
          y(t),
          !1
        );
      }
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    ((l.confirmLeaveSharableEvent = c), (l.leaveSharableEventAfterReport = d));
  },
  226,
);
