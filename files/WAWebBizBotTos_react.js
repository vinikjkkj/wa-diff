__d(
  "WAWebBizBotTos.react",
  [
    "WAWebBizBotLogging",
    "WAWebBizBotTosContent.react",
    "WAWebBotTos",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebTos",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFocusOnMount",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useState;
    function _(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chatEntryPoint,
        s = i.onAccept,
        c = p(!1),
        _ = c[0],
        f = c[1],
        g = o("WAWebBotTos").hasSeenBotTos();
      (o("useWAWebListener").useListener(
        o("WAWebTos").TosManager,
        "change",
        function () {
          o("WAWebBotTos").hasAcceptedBizBotTos() &&
            o("WAWebModalManager").ModalManager.close();
        },
      ),
        m(a, function () {
          return { close: o("WAWebModalManager").closeModalManager };
        }));
      var h = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            f(!0);
            try {
              return (
                yield o("WAWebBotTos").acceptBizBotTos(),
                yield s == null ? void 0 : s(),
                o("WAWebModalManager").ModalManager.close(),
                !0
              );
            } catch (e) {
              return !1;
            } finally {
              f(!1);
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        y = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebBizBotLogging").logBizBotNuxJourneyEvent(
              "1p",
              "nux_continue_clicked",
              l,
            ),
              yield h().then(function (e) {
                e &&
                  o("WAWebBizBotLogging").logBizBotNuxJourneyEvent(
                    "1p",
                    "nux_select",
                    l,
                  );
              }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        C = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebBizBotLogging").logBizBotNuxJourneyEvent(
              "1p",
              "nux_dismiss",
              l,
            ),
              yield h().then(function (e) {
                e &&
                  o("WAWebBizBotLogging").logBizBotNuxJourneyEvent(
                    "1p",
                    "nux_dismiss_auto_accept",
                    l,
                  );
              }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        b = function () {
          C();
        },
        v = r("useWAWebFocusOnMount")();
      return (
        d(function () {
          o("WAWebBizBotLogging").logBizBotNuxJourneyEvent(
            "1p",
            g ? "nux_view_merged" : "nux_view_new",
            l,
          );
        }, []),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          testid: void 0,
          okText: r("WAWebFbtCommon")("OK"),
          onOK: y,
          okSpinner: _ === !0,
          onOverlayClick: b,
          ref: v,
          children: u.jsx(r("WAWebBizBotTosContent.react"), {}),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
