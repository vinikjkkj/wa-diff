__d(
  "WAWebBizAIDrawer.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizAIResponseSettingsDrawer.react",
    "WAWebBizToolsDrawerBodySection.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebListMsgIconIcon.react",
    "WAWebNoop",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcChat.react",
    "WDSIconIcChecklist.react",
    "WDSIconIcSchool.react",
    "WDSIconIcSettings.react",
    "WDSIconIcShoppingBag.react",
    "WDSIconIcShoppingCart.react",
    "WDSIconIcStore.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useMemo,
      f = n("$InternalEnum").Mirrored(["Home", "ResponseSettings"]),
      g = {
        body: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        icon: { color: "xhslqc4", $$css: !0 },
        iconContainer: {
          marginInlineEnd: "x14mko6t",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        item: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(19),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.isInitialStep,
        u = l.onBack,
        c = s === void 0 ? !1 : s,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (n[3] = m))
        : (m = n[3]);
      var p = o("useWAWebFlow").useFlow(f.Home, m),
        _ = p[0],
        g = p[1],
        h;
      n[4] !== g
        ? ((h = function () {
            g.pop();
          }),
          (n[4] = g),
          (n[5] = h))
        : (h = n[5]);
      var C = h,
        b;
      n[6] !== g
        ? ((b = function () {
            g.push(f.ResponseSettings);
          }),
          (n[6] = g),
          (n[7] = b))
        : (b = n[7]);
      var v = b,
        S = g.step;
      if (S == null) return null;
      var R;
      e: switch (S) {
        case f.Home: {
          var L;
          (n[8] !== c || n[9] !== u || n[10] !== v
            ? ((L = d.jsx(y, {
                isInitialStep: c,
                onBack: u,
                onResponseSettings: v,
              })),
              (n[8] = c),
              (n[9] = u),
              (n[10] = v),
              (n[11] = L))
            : (L = n[11]),
            (R = L));
          break e;
        }
        case f.ResponseSettings: {
          var E;
          (n[12] !== C
            ? ((E = d.jsx(r("WAWebBizAIResponseSettingsDrawer.react"), {
                onBack: C,
              })),
              (n[12] = C),
              (n[13] = E))
            : (E = n[13]),
            (R = E));
        }
      }
      var k;
      return (
        n[14] !== _ || n[15] !== R || n[16] !== g || n[17] !== i
          ? ((k = d.jsx(_, { ref: i, flow: g, children: R })),
            (n[14] = _),
            (n[15] = R),
            (n[16] = g),
            (n[17] = i),
            (n[18] = k))
          : (k = n[18]),
        k
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(28),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i = n,
        l = i.isInitialStep,
        c = i.onBack,
        m = i.onResponseSettings,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
            {
              icon: d.jsx(r("WDSIconIcStore.react"), { iconXstyle: g.icon }),
              label: s._(/*BTDS*/ "Add your business info"),
              testid: "biz-ai-add-business-info",
            },
            {
              icon: d.jsx(r("WDSIconIcShoppingBag.react"), {
                iconXstyle: g.icon,
              }),
              label: s._(/*BTDS*/ "Recommend bestsellers"),
              testid: "biz-ai-recommend-bestsellers",
            },
            {
              icon: d.jsx(r("WDSIconIcShoppingCart.react"), {
                iconXstyle: g.icon,
              }),
              label: s._(/*BTDS*/ "Add info about how to purchase"),
              testid: "biz-ai-add-purchase-info",
            },
          ]),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [
            {
              icon: d.jsx(o("WAWebListMsgIconIcon.react").ListMsgIconIcon, {
                iconXstyle: g.icon,
                height: 24,
                width: 24,
              }),
              label: s._(/*BTDS*/ "Ask for customer info"),
              secondary: s._(/*BTDS*/ "Ask for details like name and service"),
              testid: "biz-ai-ask-customer-info",
            },
            {
              icon: d.jsx(r("WDSIconIcCalendarMonth.react"), {
                iconXstyle: g.icon,
              }),
              label: s._(/*BTDS*/ "Book customer appointments"),
              secondary: s._(/*BTDS*/ "Get dates and other info for booking"),
              testid: "biz-ai-book-appointments",
            },
          ]),
          (t[4] = f))
        : (f = t[4]);
      var h = f,
        y,
        b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = d.jsx(r("WDSIconIcSettings.react"), { iconXstyle: g.icon })),
          (b = s._(/*BTDS*/ "Response settings")),
          (t[5] = y),
          (t[6] = b))
        : ((y = t[5]), (b = t[6]));
      var S;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Choose when and how AI responds")), (t[7] = S))
        : (S = t[7]);
      var R;
      t[8] !== m
        ? ((R = {
            icon: y,
            label: b,
            onClick: m,
            secondary: S,
            testid: "biz-ai-response-settings",
          }),
          (t[8] = m),
          (t[9] = R))
        : (R = t[9]);
      var L, E;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            icon: d.jsx(r("WDSIconIcSchool.react"), { iconXstyle: g.icon }),
            label: s._(/*BTDS*/ "Knowledge"),
            secondary: s._(/*BTDS*/ "Check and edit what your AI knows"),
            testid: "biz-ai-knowledge",
          }),
          (E = {
            icon: d.jsx(r("WDSIconIcChecklist.react"), { iconXstyle: g.icon }),
            label: s._(/*BTDS*/ "Instructions"),
            secondary: s._(/*BTDS*/ "Create instructions for how AI responds"),
            testid: "biz-ai-instructions",
          }),
          (t[10] = L),
          (t[11] = E))
        : ((L = t[10]), (E = t[11]));
      var k;
      t[12] !== R ? ((k = [R, L, E]), (t[12] = R), (t[13] = k)) : (k = t[13]);
      var I = k,
        T;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Business AI home")), (t[14] = T))
        : (T = t[14]);
      var D = l
          ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB
          : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
        x;
      t[15] !== c || t[16] !== D
        ? ((x = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: T,
            type: D,
            onBack: c,
          })),
          (t[15] = c),
          (t[16] = D),
          (t[17] = x))
        : (x = t[17]);
      var $;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Knowledge your AI needs")), (t[18] = $))
        : ($ = t[18]);
      var P;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = d.jsx(r("WDSIconIcChat.react"), { iconXstyle: g.icon })),
          (t[19] = P))
        : (P = t[19]);
      var N, M;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = d.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
            hideDivider: !0,
            theme: "biz-ai-home",
            headerText: $,
            children: [
              d.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                useRoundedStyle: !0,
                theme: "biz-tools",
                divider: !1,
                icon: P,
                iconXstyle: g.iconContainer,
                xstyle: g.item,
                active: !1,
                onClick: r("WAWebNoop"),
                detail: d.jsx(r("WDSButton.react"), {
                  variant: "tonal",
                  size: "small",
                  Icon: r("WDSIconIcAdd.react"),
                  label: s._(/*BTDS*/ "Add"),
                  onPress: r("WAWebNoop"),
                }),
                children: s._(/*BTDS*/ "Add example responses"),
              }),
              _.map(v),
            ],
          })),
          (M = s._(/*BTDS*/ "What your AI can do")),
          (t[20] = N),
          (t[21] = M))
        : ((N = t[20]), (M = t[21]));
      var w;
      t[22] !== I
        ? ((w = d.jsxs(r("WAWebDrawerBody.react"), {
            xstyle: g.body,
            children: [
              N,
              [
                { headerText: M, items: h },
                {
                  headerText: s._(/*BTDS*/ "Ways to control your AI"),
                  items: I,
                },
              ].map(C),
            ],
          })),
          (t[22] = I),
          (t[23] = w))
        : (w = t[23]);
      var A;
      return (
        t[24] !== a || t[25] !== x || t[26] !== w
          ? ((A = d.jsxs(r("WAWebDrawer.react"), {
              ref: a,
              testid: void 0,
              children: [x, w],
            })),
            (t[24] = a),
            (t[25] = x),
            (t[26] = w),
            (t[27] = A))
          : (A = t[27]),
        A
      );
    }
    function C(e, t) {
      return d.jsxs(
        d.Fragment,
        {
          children: [
            d.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
            d.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
              hideDivider: !0,
              theme: "biz-ai-home",
              headerText: e.headerText,
              children: e.items.map(b),
            }),
          ],
        },
        t,
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t;
      return d.jsx(
        o("WAWebDrawerButton.react").DrawerButtonSimple,
        {
          testid: void 0,
          useRoundedStyle: !0,
          theme: "biz-tools",
          divider: !1,
          icon: e.icon,
          iconXstyle: g.iconContainer,
          xstyle: g.item,
          active: !1,
          onClick: (t = e.onClick) != null ? t : r("WAWebNoop"),
          secondaryChildren: e.secondary,
          children: e.label,
        },
        e.testid,
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return d.jsx(
        o("WAWebDrawerButton.react").DrawerButtonSimple,
        {
          testid: void 0,
          useRoundedStyle: !0,
          theme: "biz-tools",
          divider: !1,
          icon: e.icon,
          iconXstyle: g.iconContainer,
          xstyle: g.item,
          active: !1,
          onClick: r("WAWebNoop"),
          children: e.label,
        },
        e.testid,
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
