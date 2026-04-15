__d(
  "WAWebChatInternalStatusWarning.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebInfoFilledIcon.react",
    "WAWebL10N",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WDSIconIcInfo.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatInternalStatusHookWrapper",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useState,
      f = {
        badge: {
          position: "x10l6tqk",
          insetInlineEnd: "xhu3bip",
          bottom: "x1ey2m1c",
          zIndex: "x16uhe5s",
          boxSizing: "x9f619",
          width: "x1xp8n7a",
          height: "xmix8c7",
          pointerEvents: "x47corl",
          backgroundColor: "x1h3rtpe",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        badgeIconSvg: {
          width: "x6jxa94",
          height: "x1v9usgg",
          color: "xhslqc4",
          $$css: !0,
        },
        refreshOuterContainer: {
          fontSize: "x1nxh6w3",
          color: "xhslqc4",
          backgroundColor: "xk7ee7b",
          borderStartStartRadius: "x12l2aii",
          borderStartEndRadius: "x1mbk4o",
          boxShadow: "xz16w4b",
          transition: "x1m0b2ad",
          $$css: !0,
        },
        refreshInnerContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          width: "x14atkfc",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          backgroundColor: "xhjsbib",
          $$css: !0,
        },
        internLabelRefresh: {
          display: "x78zum5",
          alignItems: "xuk3077",
          justifyContent: "x1qughib",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        localTimeAddon: {
          fontFamily: "x1ey7xld",
          wordSpacing: "xxl7t6f",
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          borderEndEndRadius: "x1u0fnx4",
          borderEndStartRadius: "xbxn0j6",
          $$css: !0,
        },
        localTimeAddonAm: {
          backgroundColor: "x1hvvfs5",
          color: "x184iwga",
          $$css: !0,
        },
        localTimeAddonPm: {
          backgroundColor: "xdcu8fa",
          color: "x136mz08",
          $$css: !0,
        },
      };
    function g(t) {
      var n,
        a = o("react-compiler-runtime").c(4),
        i = t.id;
      r("vulture")("AMUxb_3s53JLNH_qvaKHqLXo9qk=");
      var l =
          (n = r("useWAWebChatInternalStatusHookWrapper")(i)) != null ? n : {},
        s = l.hasStatus,
        u = l.status;
      if (s !== !0) return null;
      var d;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (e || (e = r("stylex"))).props(
            f.badge,
            o("WAWebUISpacing").uiPadding.all2,
          )),
          (a[0] = d))
        : (d = a[0]);
      var m;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = c.jsx(r("WDSIconIcInfo.react"), {
            iconXstyle: f.badgeIconSvg,
          })),
          (a[1] = m))
        : (m = a[1]);
      var p;
      return (
        a[2] !== u
          ? ((p = c.jsx(
              "div",
              babelHelpers.extends({}, d, { title: u, children: m }),
            )),
            (a[2] = u),
            (a[3] = p))
          : (p = a[3]),
        p
      );
    }
    function h(t) {
      var n = t.tz,
        a = 128336,
        i = m(
          function () {
            try {
              var e = new Date().toLocaleString(
                  r("WAWebL10N").getFullLocale(),
                  {
                    timeZone: n,
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: !1,
                  },
                ),
                t = e.split(":"),
                o = t[0],
                i = t[1],
                l = t[2],
                s = parseInt(o, 10),
                u = parseInt(i, 10),
                c;
              u > 15 && u < 45
                ? (c = a + ((s % 12 || 12) - 1) + 12)
                : u >= 45
                  ? (c = a + (s % 12))
                  : (c = a + (s % 12 || 12) - 1);
              var d = String.fromCodePoint(c);
              return d + " " + e;
            } catch (e) {
              return null;
            }
          },
          [n],
        ),
        l = _(i()),
        s = l[0],
        u = l[1];
      return (
        p(
          function () {
            var e = window.setInterval(function () {
              u(i());
            }, 1e3);
            return function () {
              window.clearInterval(e);
            };
          },
          [i],
        ),
        s != null &&
          c.jsx(
            "span",
            babelHelpers.extends(
              {
                title:
                  "This is the current time in the timezone(" +
                  n +
                  ") of the user",
              },
              (e || (e = r("stylex"))).props(
                o("WAWebThemeContext").isDarkTheme()
                  ? f.localTimeAddonPm
                  : f.localTimeAddonAm,
                f.localTimeAddon,
                o("WAWebUISpacing").uiPadding.all3,
                o("WAWebUISpacing").uiMargin.start5,
              ),
              { children: s },
            ),
          )
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return e.map(function (e, t) {
        switch (e.name) {
          case "tz":
            return c.jsx(h, { tz: e.params[0] }, t);
          default:
            return null;
        }
      });
    }
    function C(t) {
      var n,
        a = o("react-compiler-runtime").c(28),
        i = t.id,
        l = t.ref,
        u = t.renderImmediately,
        d =
          (n = r("useWAWebChatInternalStatusHookWrapper")(i)) != null ? n : {},
        m = d.addons,
        p = d.hasStatus,
        _ = d.status;
      if (u !== !0 && p !== !0) return null;
      var g, h, C, v, S;
      if (a[0] !== l) {
        var R = [o("WAWebUISpacing").uiPadding.all5, f.refreshOuterContainer];
        ((g = o("WAWebUimUie.react").UIE),
          (C = l),
          (v = "ComposeBoxInternalStatus"),
          (S = !1),
          (h = (e || (e = r("stylex"))).props(R)),
          (a[0] = l),
          (a[1] = g),
          (a[2] = h),
          (a[3] = C),
          (a[4] = v),
          (a[5] = S));
      } else ((g = a[1]), (h = a[2]), (C = a[3]), (v = a[4]), (S = a[5]));
      var L;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = (e || (e = r("stylex"))).props(
            f.refreshInnerContainer,
            o("WAWebUISpacing").uiPadding.horiz5,
            o("WAWebUISpacing").uiPadding.vert10,
          )),
          (a[6] = L))
        : (L = a[6]);
      var E;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = [f.internLabelRefresh, o("WAWebUISpacing").uiPadding.horiz5]),
          (a[7] = E))
        : (E = a[7]);
      var k;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = c.jsx(r("WAWebFlexItem.react"), {
            children: c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
              href: "https://www.internalfb.com/intern/wiki/WhatsApp/Eng/Client/Web/Reference/Intern_Only_Away_Status/",
              xstyle: E,
              children: [
                c.jsx(o("WAWebInfoFilledIcon.react").InfoFilledIcon, {
                  displayInline: !0,
                  style: {
                    marginRight: o("WDSVars.stylex").WDSVars.spacingQuarter,
                  },
                }),
                s._(/*BTDS*/ "intern only"),
              ],
            }),
          })),
          (a[8] = k))
        : (k = a[8]);
      var I;
      a[9] !== m
        ? ((I = y(m != null ? m : []).map(b)), (a[9] = m), (a[10] = I))
        : (I = a[10]);
      var T;
      a[11] !== I
        ? ((T = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            wrap: "wrap",
            children: [k, I],
          })),
          (a[11] = I),
          (a[12] = T))
        : (T = a[12]);
      var D;
      a[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.start5,
          )),
          (a[13] = D))
        : (D = a[13]);
      var x;
      a[14] !== _
        ? ((x = c.jsx("span", babelHelpers.extends({}, D, { children: _ }))),
          (a[14] = _),
          (a[15] = x))
        : (x = a[15]);
      var $;
      a[16] !== x || a[17] !== T
        ? (($ = c.jsxs(
            "div",
            babelHelpers.extends({}, L, { children: [T, x] }),
          )),
          (a[16] = x),
          (a[17] = T),
          (a[18] = $))
        : ($ = a[18]);
      var P;
      a[19] !== h || a[20] !== $
        ? ((P = c.jsx("div", babelHelpers.extends({}, h, { children: $ }))),
          (a[19] = h),
          (a[20] = $),
          (a[21] = P))
        : (P = a[21]);
      var N;
      return (
        a[22] !== g || a[23] !== P || a[24] !== C || a[25] !== v || a[26] !== S
          ? ((N = c.jsx(g, {
              ref: C,
              displayName: v,
              escapable: S,
              children: P,
            })),
            (a[22] = g),
            (a[23] = P),
            (a[24] = C),
            (a[25] = v),
            (a[26] = S),
            (a[27] = N))
          : (N = a[27]),
        N
      );
    }
    function b(e, t) {
      return c.jsx(r("WAWebFlexItem.react"), { children: e }, t);
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t,
        n = o("react-compiler-runtime").c(4),
        a = e.id,
        i =
          (t = r("useWAWebChatInternalStatusHookWrapper")(a)) != null ? t : {},
        l = i.hasOverlay,
        s = i.overlay;
      if (l !== !0) return null;
      var u;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            className:
              "x10l6tqk x13vifvy x1o0tod xbagc2z x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
          }),
          (n[0] = u))
        : (u = n[0]);
      var d;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x1lzn6yi xw6cgo0 x1h227xn" }), (n[1] = d))
        : (d = n[1]);
      var m;
      return (
        n[2] !== s
          ? ((m = c.jsx(
              "div",
              babelHelpers.extends({}, u, {
                children: c.jsx("svg", {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 50 50",
                  children: c.jsx(
                    "text",
                    babelHelpers.extends({}, d, {
                      x: "50%",
                      y: "50%",
                      children: s,
                    }),
                  ),
                }),
              }),
            )),
            (n[2] = s),
            (n[3] = m))
          : (m = n[3]),
        m
      );
    }
    var S = {
      InternalStatusWarningBadge: g,
      InternalStatusWarningComposeBox: C,
      InternalStatusWarningImageOverlay: v,
    };
    l.default = S;
  },
  226,
);
