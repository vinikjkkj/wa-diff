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
      var n = t.msgs,
        a = n.length;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([
            f.eventCount,
            o("WAWebUISpacing").uiMargin.end8,
          ]),
          {
            children:
              a != null
                ? s._(/*BTDS*/ '_j{"*":"{number-of-events} upcoming"}', [
                    s._param("number-of-events", a, [0, a]),
                  ])
                : c.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 16,
                    stroke: 6,
                  }),
          },
        ),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.chat,
        a = t.onAllEvents,
        i = t.onEventInfo,
        l = o("useWAWebEventFutureEvents").useFutureEvents(n),
        u = _(!1),
        d = u[0],
        h = u[1],
        y = _(!0),
        C = y[0],
        b = y[1],
        v = p(null),
        S = p(null);
      if (
        (m(
          function () {
            var e = S.current,
              t = function () {
                if (e == null) {
                  (b(!1), h(!1));
                  return;
                }
                var t = e.clientWidth,
                  n = e.scrollLeft,
                  r = e.scrollWidth,
                  o = Math.abs(n / (r - t));
                (o > 0.05 ? h(!0) : h(!1), o > 0.95 ? b(!1) : b(!0));
              };
            return (
              e == null || e.addEventListener("scroll", t),
              function () {
                e == null || e.removeEventListener("scroll", t);
              }
            );
          },
          [l.length],
        ),
        l.length === 0)
      )
        return null;
      var R = l.length === 1,
        L = s._(/*BTDS*/ "Events"),
        E = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
          iconXstyle: f.secondaryColor,
          directional: !0,
          height: 21,
        }),
        k = c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [c.jsx(g, { msgs: l }), c.jsx("div", { children: E })],
        }),
        I = l.map(function (e) {
          return c.jsx(
            r("WAWebEventPreviewBlock.react"),
            {
              eventMsg: e,
              fullWidth: R,
              onClick: function () {
                return i(e);
              },
            },
            e.id.toString(),
          );
        }),
        T = r("WAWebL10N").isRTL() ? f.withEndFadeRtl : f.withEndFade,
        D = r("WAWebL10N").isRTL() ? f.withStartFadeRtl : f.withStartFade;
      return c.jsx(r("WAWebDrawerSection.react"), {
        subtitle: k,
        theme: "chat-info",
        title: L,
        titleOnClick: a,
        titleTestId: "section-events",
        xstyle: I.length > 0 && o("WAWebUISpacing").uiPadding.bottom10,
        children: c.jsx(
          "div",
          babelHelpers.extends(
            { ref: v },
            (e || (e = r("stylex"))).props(
              [f.outerContainer, o("WAWebUISpacing").uiPadding.horiz20].concat(
                C && !R ? [T] : [],
                d && !R ? [D] : [],
              ),
            ),
            {
              children: c.jsx("div", {
                ref: S,
                className: "xw2csxc x10wlt62 xuxw1ft",
                dir: "auto",
                children: I,
              }),
            },
          ),
        ),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
