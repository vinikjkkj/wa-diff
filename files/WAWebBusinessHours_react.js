__d(
  "WAWebBusinessHours.react",
  [
    "fbt",
    "WAWebBusinessLogEvents",
    "WAWebBusinessProfileUtils",
    "WAWebDrawerContext",
    "WAWebEmojiText.react",
    "WAWebProductCatalogContext",
    "WAWebSmbUtils",
    "WAWebUnstyledButton.react",
    "WDSIconIcKeyboardArrowDown.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useState,
      _ = {
        businessHours: {
          display: "x1lliihq",
          width: "xh8yej3",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        businessHoursHours: {
          display: "x1n9xxwz",
          width: "xh8yej3",
          lineHeight: "x1fc57z9",
          textAlign: "xp4054r",
          whiteSpace: "x126k92a",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        businessHoursDay: {
          display: "x1n9xxwz",
          whiteSpace: "xuxw1ft",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        flipSvg: {
          transform: "x1fzjszq",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        dayIsOpen: { fontWeight: "xk50ysn", color: "x1du590y", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.businessHours,
        a = e.hasCoverPhoto,
        i = e.isProfileLinked,
        l = m(o("WAWebDrawerContext").DrawerContext),
        u;
      t[0] !== l
        ? ((u = o("WAWebProductCatalogContext").getProductCatalogSessionId(l)),
          (t[0] = l),
          (t[1] = u))
        : (u = t[1]);
      var d = u,
        f;
      t[2] !== n
        ? ((f = o("WAWebBusinessProfileUtils").getBusinessOpenState(n)),
          (t[2] = n),
          (t[3] = f))
        : (f = t[3]);
      var h = f,
        y = p(!0),
        C = y[0],
        b = y[1];
      if (n == null) return null;
      var v;
      if (t[4] !== n || t[5] !== C || t[6] !== h) {
        var S = o("WAWebSmbUtils").getBusinessHours(n),
          R;
        (t[8] !== C || t[9] !== h
          ? ((R = function (t) {
              var e = t.day,
                n = t.first,
                r = t.hours,
                a = e,
                i = r,
                l = !1;
              if (n)
                e: switch (h.status) {
                  case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS
                    .OPEN_24H: {
                    ((a = s._(/*BTDS*/ "Open now")),
                      (i = s._(/*BTDS*/ "Open 24 hours")),
                      (l = !0));
                    break e;
                  }
                  case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS
                    .OPEN_APPOINTMENT: {
                    ((a = s._(/*BTDS*/ "Open now")),
                      (i = s._(/*BTDS*/ "Open by appointment only")),
                      (l = !0));
                    break e;
                  }
                  case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS
                    .OPEN: {
                    ((a = s._(/*BTDS*/ "Open now")), (l = !0));
                    break e;
                  }
                  case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS
                    .CLOSED_TODAY:
                    i = s._(/*BTDS*/ "Closed");
                }
              return !n && C
                ? null
                : c.jsx(
                    g,
                    { day: a, dayIsOpen: l, hours: i, first: n, collapsed: C },
                    e,
                  );
            }),
            (t[8] = C),
            (t[9] = h),
            (t[10] = R))
          : (R = t[10]),
          (v = S.map(R)),
          (t[4] = n),
          (t[5] = C),
          (t[6] = h),
          (t[7] = v));
      } else v = t[7];
      var L = v,
        E;
      t[11] !== d || t[12] !== a || t[13] !== C || t[14] !== i
        ? ((E = function () {
            (o("WAWebBusinessLogEvents").logHoursClick(d, i, !!a), b(!C));
          }),
          (t[11] = d),
          (t[12] = a),
          (t[13] = C),
          (t[14] = i),
          (t[15] = E))
        : (E = t[15]);
      var k;
      return (
        t[16] !== L || t[17] !== E
          ? ((k = c.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: _.businessHours,
              onClick: E,
              testid: void 0,
              children: L,
            })),
            (t[16] = L),
            (t[17] = E),
            (t[18] = k))
          : (k = t[18]),
        k
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(28),
        a = t.collapsed,
        i = t.day,
        l = t.dayIsOpen,
        s = t.first,
        u = t.hours;
      if (s) {
        var d;
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { className: "xf5m44m x1jchvi3 x14ug900" }), (n[0] = d))
          : (d = n[0]);
        var m;
        n[1] !== l
          ? ((m = (e || (e = r("stylex"))).props(
              _.businessHoursDay,
              o("WDSPaddings.stylex").wdsPaddings.paddingRight16,
              l && _.dayIsOpen,
            )),
            (n[1] = l),
            (n[2] = m))
          : (m = n[2]);
        var p;
        n[3] !== i
          ? ((p = c.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: i,
            })),
            (n[3] = i),
            (n[4] = p))
          : (p = n[4]);
        var f;
        n[5] !== m || n[6] !== p
          ? ((f = c.jsx("div", babelHelpers.extends({}, m, { children: p }))),
            (n[5] = m),
            (n[6] = p),
            (n[7] = f))
          : (f = n[7]);
        var g;
        n[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (e || (e = r("stylex"))).props(
              _.businessHoursHours,
              o("WDSPaddings.stylex").wdsPaddings.paddingRight4,
            )),
            (n[8] = g))
          : (g = n[8]);
        var h;
        n[9] !== u
          ? ((h = c.jsx(
              "div",
              babelHelpers.extends({}, g, {
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  text: u,
                }),
              }),
            )),
            (n[9] = u),
            (n[10] = h))
          : (h = n[10]);
        var y;
        n[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = { className: "x1n9xxwz xhslqc4 xxymvpz x181vq82" }),
            (n[11] = y))
          : (y = n[11]);
        var C = !a && _.flipSvg,
          b;
        n[12] !== C
          ? ((b = c.jsx(
              "div",
              babelHelpers.extends({}, y, {
                role: "button",
                children: c.jsx(r("WDSIconIcKeyboardArrowDown.react"), {
                  iconXstyle: [C],
                }),
              }),
            )),
            (n[12] = C),
            (n[13] = b))
          : (b = n[13]);
        var v;
        return (
          n[14] !== f || n[15] !== h || n[16] !== b
            ? ((v = c.jsxs(
                "div",
                babelHelpers.extends({ "data-testid": void 0 }, d, {
                  children: [f, h, b],
                }),
              )),
              (n[14] = f),
              (n[15] = h),
              (n[16] = b),
              (n[17] = v))
            : (v = n[17]),
          v
        );
      }
      var S, R;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "xf5m44m x1f6kntn x1anpt5t" }),
          (R = (e || (e = r("stylex"))).props(
            _.businessHoursDay,
            o("WDSPaddings.stylex").wdsPaddings.paddingRight16,
            o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
          )),
          (n[18] = S),
          (n[19] = R))
        : ((S = n[18]), (R = n[19]));
      var L;
      n[20] !== i
        ? ((L = c.jsx(
            "div",
            babelHelpers.extends({}, R, {
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: i,
              }),
            }),
          )),
          (n[20] = i),
          (n[21] = L))
        : (L = n[21]);
      var E;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (e || (e = r("stylex"))).props(
            _.businessHoursHours,
            o("WDSPaddings.stylex").wdsPaddings.paddingRight4,
            o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
          )),
          (n[22] = E))
        : (E = n[22]);
      var k;
      n[23] !== u
        ? ((k = c.jsx(
            "div",
            babelHelpers.extends({}, E, {
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: u,
              }),
            }),
          )),
          (n[23] = u),
          (n[24] = k))
        : (k = n[24]);
      var I;
      return (
        n[25] !== L || n[26] !== k
          ? ((I = c.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, S, {
                children: [L, k],
              }),
            )),
            (n[25] = L),
            (n[26] = k),
            (n[27] = I))
          : (I = n[27]),
        I
      );
    }
    l.default = f;
  },
  226,
);
