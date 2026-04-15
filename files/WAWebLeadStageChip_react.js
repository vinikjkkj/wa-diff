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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(34),
        n = e.customer,
        a = e.onStageChange,
        i = e.showNoneOption,
        l = e.testid,
        u;
      (t[0] !== (n == null ? void 0 : n.leadStage)
        ? ((u = function () {
            var e;
            return (e = o("WAWebLeadStage").getLeadStageFromNumber(
              n == null ? void 0 : n.leadStage,
            )) != null
              ? e
              : o("WAWebLeadStage").LeadStage.NONE;
          }),
          (t[0] = n == null ? void 0 : n.leadStage),
          (t[1] = u))
        : (u = t[1]),
        n == null || n.leadStage);
      var c = u,
        d = p(c),
        _ = d[0],
        f = d[1],
        g = p(n == null ? void 0 : n.id),
        h = g[0],
        y = g[1];
      h !== (n == null ? void 0 : n.id) &&
        (y(n == null ? void 0 : n.id), f(c()));
      var C;
      (t[2] !== n || t[3] !== c
        ? ((C =
            n != null
              ? [
                  {
                    source: n,
                    eventOrEvents: "change:leadStage",
                    callback: function () {
                      f(c());
                    },
                  },
                ]
              : []),
          (t[2] = n),
          (t[3] = c),
          (t[4] = C))
        : (C = t[4]),
        o("useWAWebListener").useListeners(C));
      var b = m(null),
        v;
      t[5] !== _ || t[6] !== n || t[7] !== a
        ? ((v = function (t) {
            var e = _;
            if (a != null) (f(t), a(t, e));
            else if (n != null) {
              var r = o(
                "WAWebCustomerDataCollection",
              ).CustomerDataCollection.get(n.id);
              r != null &&
                (f(t),
                o("WAWebCustomerDataFieldSaver").saveCustomerDataField(
                  r.chatJid,
                  r,
                  { leadStage: t },
                ));
            }
          }),
          (t[5] = _),
          (t[6] = n),
          (t[7] = a),
          (t[8] = v))
        : (v = t[8]);
      var S = v,
        R =
          i === !0
            ? o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE
            : o("WAWebLeadStage").LEAD_STAGE_ORDER,
        L;
      if (t[9] !== _ || t[10] !== S || t[11] !== R) {
        var E;
        (t[13] !== _ || t[14] !== S
          ? ((E = function (t) {
              return s.jsx(
                r("WDSMenuItem.react"),
                {
                  isToggleable: !0,
                  onPress: function () {
                    return S(t);
                  },
                  testid: void 0,
                  title: o("WAWebLeadStageNames").getLeadStageName(t),
                  toggled: _ === t,
                },
                t,
              );
            }),
            (t[13] = _),
            (t[14] = S),
            (t[15] = E))
          : (E = t[15]),
          (L = R.map(E)),
          (t[9] = _),
          (t[10] = S),
          (t[11] = R),
          (t[12] = L));
      } else L = t[12];
      var k;
      t[16] !== L
        ? ((k = s.jsx(r("WDSMenu.react"), { children: L })),
          (t[16] = L),
          (t[17] = k))
        : (k = t[17]);
      var I = k,
        T;
      t[18] !== I
        ? ((T = { targetRef: b, menu: I }), (t[18] = I), (t[19] = T))
        : (T = t[19]);
      var D = r("useWDSMenu")(T),
        x = D.closeMenu,
        $ = D.isMenuOpen,
        P = D.menuPortal,
        N = D.openMenu,
        M;
      t[20] !== x || t[21] !== $ || t[22] !== N
        ? ((M = function () {
            $ ? x() : N();
          }),
          (t[20] = x),
          (t[21] = $),
          (t[22] = N),
          (t[23] = M))
        : (M = t[23]);
      var w = M,
        A;
      t[24] !== _
        ? ((A = o("WAWebLeadStageNames").getLeadStageName(_)),
          (t[24] = _),
          (t[25] = A))
        : (A = t[25]);
      var F = l != null ? l : "lead-stage-chip",
        O;
      t[26] !== w || t[27] !== $ || t[28] !== A || t[29] !== F
        ? ((O = s.jsx(r("WDSChip.react"), {
            "aria-pressed": $,
            label: A,
            onPress: w,
            ref: b,
            showEndDropdownIcon: !0,
            testid: void 0,
          })),
          (t[26] = w),
          (t[27] = $),
          (t[28] = A),
          (t[29] = F),
          (t[30] = O))
        : (O = t[30]);
      var B;
      return (
        t[31] !== P || t[32] !== O
          ? ((B = s.jsxs("div", {
              onClick: o("WAWebStopEvent").stopPropagation,
              onKeyDown: o("WAWebStopEvent").stopPropagation,
              role: "toolbar",
              children: [O, P],
            })),
            (t[31] = P),
            (t[32] = O),
            (t[33] = B))
          : (B = t[33]),
        B
      );
    }
    l.default = _;
  },
  98,
);
