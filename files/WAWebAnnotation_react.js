__d(
  "WAWebAnnotation.react",
  [
    "fbt",
    "$InternalEnum",
    "WANullthrows",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebExternalLink.react",
    "WAWebMapUtils",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterGatingUtils",
    "WAWebParseForwardedNewsletterMessageInfo",
    "WAWebResizeObserver.react",
    "WAWebUimUie.react",
    "WAWebUimUieTooltip.react",
    "WAWebWamEnumTsSurface",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = n("$InternalEnum").Mirrored([
        "Location",
        "NewsletterLink",
        "Unknown",
      ]);
    function f(e) {
      return e.location != null
        ? _.Location
        : e.newsletter != null
          ? _.NewsletterLink
          : _.Unknown;
    }
    function g(e) {
      var t = e.polygonVertices,
        n = t[0],
        r = t[2];
      if (
        n == null ||
        n.x == null ||
        n.y == null ||
        r == null ||
        r.x == null ||
        r.y == null
      )
        return !1;
      var a = f(e);
      switch (a) {
        case _.Location: {
          var i = e.location;
          return (
            (i == null ? void 0 : i.degreesLatitude) != null &&
            (i == null ? void 0 : i.degreesLongitude) != null
          );
        }
        case _.NewsletterLink: {
          var l = e.newsletter;
          return (
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterLinksOnStatusConsumptionEnabled() &&
            (l == null ? void 0 : l.newsletterJid) != null
          );
        }
        case _.Unknown:
          return !1;
      }
    }
    function h(e) {
      var t,
        n = e.polygonVertices,
        o = n[0],
        a = n[2];
      return (
        (t = r("WANullthrows"))(o.x) +
        ":" +
        t(o.y) +
        ":" +
        t(a.x) +
        ":" +
        t(a.y)
      );
    }
    function y(e, t) {
      if (e == null) return null;
      var n = e.parentNode;
      if (!(n != null && n instanceof HTMLElement)) return null;
      var o = t.polygonVertices,
        a = o[0],
        i = o[1],
        l = o[2];
      if (
        r("WANullthrows")(a.x) === r("WANullthrows")(i.x) ||
        r("WANullthrows")(i.y) === r("WANullthrows")(l.y)
      ) {
        var s = t.polygonVertices;
        ((a = s[1]), (i = s[2]), (l = s[3]));
      }
      var u = r("WANullthrows")(a.x),
        c = r("WANullthrows")(a.y),
        d = r("WANullthrows")(i.x),
        m = r("WANullthrows")(i.y),
        p = r("WANullthrows")(l.y),
        _ = u * n.offsetWidth,
        f = c * n.offsetHeight,
        g = n.offsetWidth * (u - d),
        h = n.offsetHeight * (c - m),
        y = u > d ? Math.PI : 0,
        C = g ? Math.atan(h / g) + y : 0,
        b = (C * 180) / Math.PI,
        v = Math.abs(g / Math.cos(C)),
        S = Math.abs((n.offsetHeight * (p - m)) / Math.cos(C)),
        R = "rotate(" + b + "deg)";
      return {
        left: Math.round(_),
        top: Math.round(f),
        width: Math.round(v),
        height: Math.round(S),
        transform: R,
        transformOrigin: "top left",
      };
    }
    function C(e) {
      var t,
        n,
        r,
        o,
        a = f(e);
      switch (a) {
        case _.Location:
          return (t = (n = e.location) == null ? void 0 : n.name) != null
            ? t
            : s._(/*BTDS*/ "Unknown location");
        case _.NewsletterLink:
          return (r = (o = e.newsletter) == null ? void 0 : o.newsletterName) !=
            null
            ? r
            : s._(/*BTDS*/ "Unknown channel");
        case _.Unknown:
          return s._(/*BTDS*/ "Unknown link");
      }
    }
    function b(e) {
      "use no forget";
      var t = e.annotation,
        n = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        r = m(null);
      return (
        d(function () {
          n();
        }, []),
        u.jsx("div", {
          ref: r,
          className: "x10l6tqk xupqr0c",
          style: y(r.current, t),
          onClick: function (r) {
            return e.onClick(r, t);
          },
          onKeyDown: function (r) {
            return e.onKeyDown(r, t);
          },
          role: "button",
          "aria-label": C(t),
          tabIndex: 0,
        })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = f(e);
      switch (t) {
        case _.Location:
          return s._(/*BTDS*/ "See location");
        case _.NewsletterLink:
          return s._(/*BTDS*/ "View channel");
        case _.Unknown:
          return s._(/*BTDS*/ "Unknown link");
      }
    }
    function S(e) {
      var t = e.location,
        n = o("WAWebMapUtils").getMapUrl(
          r("WANullthrows")(t.degreesLatitude),
          r("WANullthrows")(t.degreesLongitude),
        );
      o("WAWebExternalLink.react").openExternalLink(n);
    }
    function R(e) {
      var t = e.newsletter;
      if (t != null) {
        var n = o(
            "WAWebParseForwardedNewsletterMessageInfo",
          ).parseForwardedNewsletterMessageInfo(t),
          r = n.newsletterId,
          a = n.serverMessageId;
        r != null &&
          (o("WAWebCmd").Cmd.closeStatusViewer(),
          o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
            identifier: r.toString(),
            identifierType: o("WAWebNewsletterApiParse")
              .NewsletterIdentifierType.Id,
            type: "view",
            chatEntryPoint: o(
              "WAWebParseForwardedNewsletterMessageInfo",
            ).getChatEntryPointFromNewsletterLinkAnnotation(e),
            discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEW,
            serverId: a,
          }));
      }
    }
    function L(e) {
      var t = f(e);
      switch (t) {
        case _.Location:
          S(e);
          break;
        case _.NewsletterLink:
          R(e);
          break;
        case _.Unknown:
          break;
      }
    }
    function E(e) {
      var t = e.annotation,
        n = e.onClick,
        o = v(t),
        a = function () {
          (L(t), n());
        };
      return u.jsx(r("WAWebClickableLink.react"), {
        className: "x1lliihq x1tiyuxx xyri2b x1nbhmlj x1c1uobl x18ihxl1",
        onClick: a,
        children: o,
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.onTooltipDismiss,
        n = e.onTooltipDisplay,
        a = Array.from(e.annotations).reverse(),
        i = p(null),
        l = i[0],
        s = i[1],
        c = function () {
          (s(null), t && t());
        },
        d = function (t, r, a) {
          if (!(r == null && a == null)) {
            var e = u.jsx(E, { annotation: t, onClick: c }),
              i = {
                menu: e,
                type: o("WAWebDropdown.react").MenuType.Tooltip,
                dirX: o("WAWebDropdown.react").DirX.RIGHT,
                dirY: o("WAWebDropdown.react").DirY.TOP,
              };
            (r != null
              ? (i = babelHelpers.extends({}, i, {
                  event: r,
                  autoFocus: !1,
                  offsetX: 0,
                  offsetY: 0,
                }))
              : (i = babelHelpers.extends({}, i, { anchor: a, autoFocus: !0 })),
              s(i),
              n && n());
          }
        },
        m = function (t, n, r) {
          t.shouldSkipConfirmation === !0 ? L(t) : d(t, n, r);
        },
        _ = function (t, n) {
          (t.stopPropagation(), m(n, t));
        },
        f = function (t, n) {
          (t.key === " " || t.key === "Enter") &&
            (t.preventDefault(), m(n, null, t.target));
        },
        y = r("useWAWebDebouncedCallback")(function () {
          c();
        }, 100);
      if (!a.length) return null;
      var C =
        l &&
        u.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "InteractiveAnnotationTooltip",
          popable: !0,
          escapable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: c,
          requestRecentFocusOnUnmount: !1,
          children: u.jsx(r("WAWebUimUieTooltip.react"), { tooltip: l }),
        });
      return u.jsxs(u.Fragment, {
        children: [
          a.map(function (e) {
            return (
              g(e) &&
              u.jsx(
                b,
                {
                  annotation: e,
                  onClick: function (n) {
                    return _(n, e);
                  },
                  onKeyDown: function (n) {
                    return f(n, e);
                  },
                },
                h(e),
              )
            );
          }),
          C,
          u.jsx(r("WAWebResizeObserver.react"), { onResize: y }),
        ],
      });
    }
    ((k.displayName = k.name + " [from " + i.id + "]"), (l.default = k));
  },
  226,
);
