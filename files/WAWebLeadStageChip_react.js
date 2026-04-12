__d(
  "WAWebLeadStageChip.react",
  [
    "WAWebCustomerDataCollection",
    "WAWebCustomerDataFieldSaver",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebStopEvent",
    "WDSChip.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebListener",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = e.customer,
        n = e.onStageChange,
        a = e.showNoneOption,
        i = e.testid,
        l = c(
          function () {
            var e;
            return (e = o("WAWebLeadStage").getLeadStageFromNumber(
              t == null ? void 0 : t.leadStage,
            )) != null
              ? e
              : o("WAWebLeadStage").LeadStage.NONE;
          },
          [t == null ? void 0 : t.leadStage],
        ),
        u = p(l),
        _ = u[0],
        f = u[1],
        g = p(t == null ? void 0 : t.id),
        h = g[0],
        y = g[1];
      (h !== (t == null ? void 0 : t.id) &&
        (y(t == null ? void 0 : t.id), f(l())),
        o("useWAWebListener").useListeners(
          t != null
            ? [
                {
                  source: t,
                  eventOrEvents: "change:leadStage",
                  callback: function () {
                    f(l());
                  },
                },
              ]
            : [],
        ));
      var C = m(null),
        b = c(
          function (e) {
            var r = _;
            if (n != null) (f(e), n(e, r));
            else if (t != null) {
              var a = o(
                "WAWebCustomerDataCollection",
              ).CustomerDataCollection.get(t.id);
              a != null &&
                (f(e),
                o("WAWebCustomerDataFieldSaver").saveCustomerDataField(
                  a.chatJid,
                  a,
                  { leadStage: e },
                ));
            }
          },
          [_, t, n],
        ),
        v =
          a === !0
            ? o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE
            : o("WAWebLeadStage").LEAD_STAGE_ORDER,
        S = d(
          function () {
            return s.jsx(r("WDSMenu.react"), {
              children: v.map(function (e) {
                return s.jsx(
                  r("WDSMenuItem.react"),
                  {
                    isToggleable: !0,
                    onPress: function () {
                      return b(e);
                    },
                    testid: void 0,
                    title: o("WAWebLeadStageNames").getLeadStageName(e),
                    toggled: _ === e,
                  },
                  e,
                );
              }),
            });
          },
          [_, b, v],
        ),
        R = r("useWDSMenu")({ targetRef: C, menu: S }),
        L = R.closeMenu,
        E = R.isMenuOpen,
        k = R.menuPortal,
        I = R.openMenu,
        T = c(
          function () {
            E ? L() : I();
          },
          [L, E, I],
        );
      return s.jsxs("div", {
        onClick: o("WAWebStopEvent").stopPropagation,
        onKeyDown: o("WAWebStopEvent").stopPropagation,
        role: "toolbar",
        children: [
          s.jsx(r("WDSChip.react"), {
            "aria-pressed": E,
            label: o("WAWebLeadStageNames").getLeadStageName(_),
            onPress: T,
            ref: C,
            showEndDropdownIcon: !0,
            testid: void 0,
          }),
          k,
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
