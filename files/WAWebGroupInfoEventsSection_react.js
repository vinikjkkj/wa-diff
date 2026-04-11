__d(
  "WAWebGroupInfoEventsSection.react",
  [
    "fbt",
    "WAWebChevronIcon.react",
    "WAWebDrawerSection.react",
    "WAWebEventPreviewBlock.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventFutureEvents",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
        eventCount: { fontSize: "x6prxxf", color: "xhslqc4", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        outerContainer: {
          width: "xh8yej3",
          boxSizing: "x9f619",
          position: "x1n2onr6",
          $$css: !0,
        },
        withStartFade: {
          "::before_content": "x1cpjm7i",
          "::before_position": "x1hmns74",
          "::before_top": "x1y3wzot",
          "::before_insetInlineStart": "x1682cnc",
          "::before_left": null,
          "::before_right": null,
          "::before_backgroundImage": "xg0bfl6",
          "::before_width": "x1o4m6q",
          "::before_height": "xszcg87",
          $$css: !0,
        },
        withStartFadeRtl: {
          "::before_content": "x1cpjm7i",
          "::before_position": "x1hmns74",
          "::before_top": "x1y3wzot",
          "::before_insetInlineStart": "x1682cnc",
          "::before_left": null,
          "::before_right": null,
          "::before_backgroundImage": "xo1xex6",
          "::before_width": "x1o4m6q",
          "::before_height": "xszcg87",
          $$css: !0,
        },
        withEndFade: {
          "::after_content": "x1s928wv",
          "::after_position": "x1j6awrg",
          "::after_top": "x1m1drc7",
          "::after_insetInlineEnd": "x1unh1gc",
          "::after_left": null,
          "::after_right": null,
          "::after_backgroundImage": "x10tw4oa",
          "::after_width": "xk69ee5",
          "::after_height": "x1wsn0xg",
          $$css: !0,
        },
        withEndFadeRtl: {
          "::after_content": "x1s928wv",
          "::after_position": "x1j6awrg",
          "::after_top": "x1m1drc7",
          "::after_insetInlineEnd": "x1unh1gc",
          "::after_left": null,
          "::after_right": null,
          "::after_backgroundImage": "x12nvoqz",
          "::after_width": "xk69ee5",
          "::after_height": "x1wsn0xg",
          $$css: !0,
        },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(3),
        a = t.msgs,
        i = a.length,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (e || (e = r("stylex"))).props([
            f.eventCount,
            o("WAWebUISpacing").uiMargin.end8,
          ])),
          (n[0] = l))
        : (l = n[0]);
      var u;
      return (
        n[1] !== i
          ? ((u = c.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children:
                  i != null
                    ? s._(/*BTDS*/ '_j{"*":"{number-of-events} upcoming"}', [
                        s._param("number-of-events", i, [0, i]),
                      ])
                    : c.jsx(o("WAWebSpinner.react").Spinner, {
                        size: 16,
                        stroke: 6,
                      }),
              }),
            )),
            (n[1] = i),
            (n[2] = u))
          : (u = n[2]),
        u
      );
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(33),
        a = t.chat,
        i = t.onAllEvents,
        l = t.onEventInfo,
        u = o("useWAWebEventFutureEvents").useFutureEvents(a),
        d = _(!1),
        h = d[0],
        y = d[1],
        C = _(!0),
        b = C[0],
        v = C[1],
        S = p(null),
        R = p(null),
        L;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            var e = R.current,
              t = function () {
                if (e == null) {
                  (v(!1), y(!1));
                  return;
                }
                var t = e.clientWidth,
                  n = e.scrollLeft,
                  r = e.scrollWidth,
                  o = Math.abs(n / (r - t));
                (o > 0.05 ? y(!0) : y(!1), o > 0.95 ? v(!1) : v(!0));
              };
            return (
              e == null || e.addEventListener("scroll", t),
              function () {
                e == null || e.removeEventListener("scroll", t);
              }
            );
          }),
          (n[0] = L))
        : (L = n[0]);
      var E;
      if (
        (n[1] !== u.length
          ? ((E = [u.length]), (n[1] = u.length), (n[2] = E))
          : (E = n[2]),
        m(L, E),
        u.length === 0)
      )
        return null;
      var k = u.length === 1,
        I;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Events")), (n[3] = I))
        : (I = n[3]);
      var T = I,
        D;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            iconXstyle: f.secondaryColor,
            directional: !0,
            height: 21,
          })),
          (n[4] = D))
        : (D = n[4]);
      var x = D,
        $;
      n[5] !== u
        ? (($ = c.jsx(g, { msgs: u })), (n[5] = u), (n[6] = $))
        : ($ = n[6]);
      var P;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx("div", { children: x })), (n[7] = P))
        : (P = n[7]);
      var N;
      n[8] !== $
        ? ((N = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [$, P],
          })),
          (n[8] = $),
          (n[9] = N))
        : (N = n[9]);
      var M = N,
        w;
      if (n[10] !== u || n[11] !== l || n[12] !== k) {
        var A;
        (n[14] !== l || n[15] !== k
          ? ((A = function (t) {
              return c.jsx(
                r("WAWebEventPreviewBlock.react"),
                {
                  eventMsg: t,
                  fullWidth: k,
                  onClick: function () {
                    return l(t);
                  },
                },
                t.id.toString(),
              );
            }),
            (n[14] = l),
            (n[15] = k),
            (n[16] = A))
          : (A = n[16]),
          (w = u.map(A)),
          (n[10] = u),
          (n[11] = l),
          (n[12] = k),
          (n[13] = w));
      } else w = n[13];
      var F = w,
        O = r("WAWebL10N").isRTL() ? f.withEndFadeRtl : f.withEndFade,
        B = r("WAWebL10N").isRTL() ? f.withStartFadeRtl : f.withStartFade,
        W = F.length > 0 && o("WAWebUISpacing").uiPadding.bottom10,
        q;
      n[17] !== k || n[18] !== b || n[19] !== h
        ? ((q = (e || (e = r("stylex"))).props(
            [f.outerContainer, o("WAWebUISpacing").uiPadding.horiz20].concat(
              b && !k ? [O] : [],
              h && !k ? [B] : [],
            ),
          )),
          (n[17] = k),
          (n[18] = b),
          (n[19] = h),
          (n[20] = q))
        : (q = n[20]);
      var U;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = { className: "xw2csxc x10wlt62 xuxw1ft" }), (n[21] = U))
        : (U = n[21]);
      var V;
      n[22] !== F || n[23] !== U
        ? ((V = c.jsx(
            "div",
            babelHelpers.extends({ ref: R }, U, { dir: "auto", children: F }),
          )),
          (n[22] = F),
          (n[23] = U),
          (n[24] = V))
        : (V = n[24]);
      var H;
      n[25] !== q || n[26] !== V
        ? ((H = c.jsx(
            "div",
            babelHelpers.extends({ ref: S }, q, { children: V }),
          )),
          (n[25] = q),
          (n[26] = V),
          (n[27] = H))
        : (H = n[27]);
      var G;
      return (
        n[28] !== i || n[29] !== M || n[30] !== H || n[31] !== W
          ? ((G = c.jsx(r("WAWebDrawerSection.react"), {
              subtitle: M,
              theme: "chat-info",
              title: T,
              titleOnClick: i,
              titleTestId: "section-events",
              xstyle: W,
              children: H,
            })),
            (n[28] = i),
            (n[29] = M),
            (n[30] = H),
            (n[31] = W),
            (n[32] = G))
          : (G = n[32]),
        G
      );
    }
    l.default = h;
  },
  226,
);
