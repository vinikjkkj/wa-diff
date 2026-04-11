__d(
  "WAWebNuxOrderExpansion.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBizOrderExpansionModal.react",
    "WAWebCoolOffNuxBanner.react",
    "WAWebNux",
    "WAWebNuxBanner",
    "WAWebNuxCoolOff",
    "WAWebOrdersExpansionUtils",
    "WDSIconIcReceipt.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.createRef,
      d = {
        COOL_OFF_START_STORAGE_KEY:
          o("WAWebNux").CoolOffPeriodKeys.ORDER_EXPANSION,
        MAX_CLICKS: 1,
        MAX_DISMISSES: 1,
      },
      m = function () {
        return (
          o("WAWebOrdersExpansionUtils").isOrderExpansionBannerEnabled() &&
          o("WAWebNuxCoolOff").shouldShowNUX(
            o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.ORDER_EXPANSION,
            d,
          )
        );
      },
      p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$OrderExpansionBanner$p_1 = c()),
            (t.getElement = function () {
              return t.$OrderExpansionBanner$p_1.current;
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.render = function () {
            var e = this.props.onInteract,
              t = new (o("WAWebNuxCoolOff").CoolOffNux)(
                o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.ORDER_EXPANSION,
                d,
              ),
              n = function () {
                (e == null || e(),
                  o(
                    "WAWebBizOrderExpansionModal.react",
                  ).openOrderExpansionModal(function () {
                    return t.dismiss();
                  }));
              };
            return u.jsx(r("WAWebCoolOffNuxBanner.react"), {
              icon: r("WDSIconIcReceipt.react"),
              title: s._(/*BTDS*/ "Build trust and track sales"),
              subtitle: o(
                "WAWebBizGatingUtils",
              ).isOrderContentOptimizationEnabled()
                ? s._(
                    /*BTDS*/ "Use orders to confirm purchases and manage charges.",
                  )
                : s._(
                    /*BTDS*/ "Use orders to create customer receipts and manage sales.",
                  ),
              actionText: s._(/*BTDS*/ "See details"),
              onDismiss: e,
              onClick: n,
              nuxManager: t,
              theme: "orderExpansion",
            });
          }),
          (t.shouldShow = function () {
            return m();
          }),
          t
        );
      })(o("WAWebNuxBanner").NuxBanner);
    ((l.shouldShowOrderExpansionBanner = m), (l.OrderExpansionBanner = p));
  },
  226,
);
