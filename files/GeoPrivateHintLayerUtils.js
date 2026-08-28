__d(
  "GeoPrivateHintLayerUtils",
  [
    "GeoIcon.react",
    "GeoStatusIcon.react",
    "geoIPMGatingUtils",
    "meta-brand-block-circle-filled-12",
    "meta-brand-diagonal-line-padlock-filled-12",
    "meta-brand-exclamation-triangle-filled-12",
    "meta-brand-vertical-line-padlock-filled-12",
    "react",
    "react-compiler-runtime",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        root: {
          boxSizing: "x9f619",
          maxWidth: "xxc7z9f",
          overflowWrap: "xj0a0fe",
          $$css: !0,
        },
        nuxMaxWidth: { maxWidth: "x16ajwxl", $$css: !0 },
        icon: {
          display: "x78zum5",
          verticalAlign: "x1uuroth",
          pointerEvents: "x67bb7w",
          $$css: !0,
        },
        infoTooltipContainer: { flexShrink: "x2lah0s", $$css: !0 },
        relativePosition: { position: "x1n2onr6", $$css: !0 },
      },
      c = o("geoIPMGatingUtils").shouldShowNewBrandingStatusIcon();
    function d(e) {
      switch (e) {
        case "policy-restriction":
          return "error";
        case "disabled-restriction":
        case "normal":
          return "info";
        default:
          return e;
      }
    }
    function m(e) {
      if (e == null || e === "normal") return null;
      switch (e) {
        case "error":
          return c
            ? s.jsx(r("GeoStatusIcon.react"), { size: 12, status: "error" })
            : s.jsx(r("GeoIcon.react"), {
                color: "warning",
                icon: o("meta-brand-block-circle-filled-12")
                  .metaBrandBlockCircleStopFilled12,
              });
        case "warning":
          return c
            ? s.jsx(r("GeoStatusIcon.react"), { size: 12, status: "warning" })
            : s.jsx(r("GeoIcon.react"), {
                color: "warning",
                icon: o("meta-brand-exclamation-triangle-filled-12")
                  .metaBrandExclamationTriangleCautionTriangleFilled12,
              });
        case "policy-restriction":
          return s.jsx(r("GeoIcon.react"), {
            color: "warning",
            icon: o("meta-brand-diagonal-line-padlock-filled-12")
              .metaBrandDiagonalLinePadlockFilled12,
          });
        case "disabled-restriction":
          return s.jsx(r("GeoIcon.react"), {
            color: "warning",
            icon: o("meta-brand-vertical-line-padlock-filled-12")
              .metaBrandVerticalLinePadlockDisabledRestrictionFilled12,
          });
        default:
          return null;
      }
    }
    var p = {
      borderWidth: {
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        borderTopWidth: "xamhcws",
        borderInlineEndWidth: "x1alpsbp",
        borderBottomWidth: "xlxy82",
        borderInlineStartWidth: "xyumdvf",
        $$css: !0,
      },
    };
    function _(e) {
      var t = o("react-compiler-runtime").c(27),
        n = r("useGeoTheme")(),
        a = n.selectBorderColor,
        i = n.selectBorderRadius,
        l = n.selectElevation,
        s = n.selectFont,
        c = n.selectStaticBackgroundColor,
        d = n.selectTextColor,
        m = e === "nux" || e === "mediaNux",
        _;
      t[0] !== i
        ? ((_ = i({ context: "content" })), (t[0] = i), (t[1] = _))
        : (_ = t[1]);
      var f;
      t[2] !== l ? ((f = l({ level: 3 })), (t[2] = l), (t[3] = f)) : (f = t[3]);
      var g;
      t[4] !== s
        ? ((g = s({ size: "value" })), (t[4] = s), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== c
        ? ((h = c({ surface: "content" })), (t[6] = c), (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== d
        ? ((y = d({ color: "value" })), (t[8] = d), (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== m || t[11] !== a
        ? ((C = m && a({ color: "onboarding", isMuted: !0 })),
          (t[10] = m),
          (t[11] = a),
          (t[12] = C))
        : (C = t[12]);
      var b = m && p.borderWidth,
        v = m && u.relativePosition,
        S;
      t[13] !== m || t[14] !== l
        ? ((S = m && l({ level: 4 })), (t[13] = m), (t[14] = l), (t[15] = S))
        : (S = t[15]);
      var R = m && u.nuxMaxWidth,
        L;
      return (
        t[16] !== _ ||
        t[17] !== f ||
        t[18] !== g ||
        t[19] !== h ||
        t[20] !== y ||
        t[21] !== C ||
        t[22] !== b ||
        t[23] !== v ||
        t[24] !== S ||
        t[25] !== R
          ? ((L = [u.root, _, f, g, h, y, C, b, v, S, R]),
            (t[16] = _),
            (t[17] = f),
            (t[18] = g),
            (t[19] = h),
            (t[20] = y),
            (t[21] = C),
            (t[22] = b),
            (t[23] = v),
            (t[24] = S),
            (t[25] = R),
            (t[26] = L))
          : (L = t[26]),
        L
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.isPositionVertical,
        a = e.popoverType,
        i = r("useGeoTheme")(),
        l = i.selectSpacing,
        s = a === "nux" || a === "mediaNux",
        u;
      t[0] !== n || t[1] !== l
        ? ((u =
            n &&
            l({
              context: "control",
              bounds: "internal",
              target: "fine",
              positions: ["vertical"],
            })),
          (t[0] = n),
          (t[1] = l),
          (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== n || t[4] !== l
        ? ((c =
            !n &&
            l({
              context: "control",
              bounds: "internal",
              target: "normal",
              positions: ["horizontal"],
            })),
          (t[3] = n),
          (t[4] = l),
          (t[5] = c))
        : (c = t[5]);
      var d;
      t[6] !== s || t[7] !== n || t[8] !== l
        ? ((d =
            n &&
            s &&
            l({
              context: "container",
              bounds: "internal",
              relation: "component",
              positions: ["vertical"],
            })),
          (t[6] = s),
          (t[7] = n),
          (t[8] = l),
          (t[9] = d))
        : (d = t[9]);
      var m;
      t[10] !== s || t[11] !== n || t[12] !== l
        ? ((m =
            !n &&
            s &&
            l({
              context: "control",
              bounds: "internal",
              target: "coarse",
              positions: ["horizontal"],
            })),
          (t[10] = s),
          (t[11] = n),
          (t[12] = l),
          (t[13] = m))
        : (m = t[13]);
      var p;
      return (
        t[14] !== u || t[15] !== c || t[16] !== d || t[17] !== m
          ? ((p = [u, c, d, m]),
            (t[14] = u),
            (t[15] = c),
            (t[16] = d),
            (t[17] = m),
            (t[18] = p))
          : (p = t[18]),
        p
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(4),
        t = r("useGeoTheme")(),
        n = t.selectSpacing,
        a;
      e[0] !== n
        ? ((a = n({
            context: "component",
            bounds: "external",
            relation: "unrelated",
            positions: ["start"],
          })),
          (e[0] = n),
          (e[1] = a))
        : (a = e[1]);
      var i;
      return (e[2] !== a ? ((i = [a]), (e[2] = a), (e[3] = i)) : (i = e[3]), i);
    }
    function h() {
      var e = o("react-compiler-runtime").c(4),
        t = r("useGeoTheme")(),
        n = t.selectSpacing,
        a;
      e[0] !== n
        ? ((a = n({
            context: "component",
            bounds: "external",
            relation: "related",
            positions: ["horizontal"],
          })),
          (e[0] = n),
          (e[1] = a))
        : (a = e[1]);
      var i;
      return (
        e[2] !== a ? ((i = [u.icon, a]), (e[2] = a), (e[3] = i)) : (i = e[3]),
        i
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.type,
        a = r("useGeoTheme")(),
        i = a.selectSpacing,
        l;
      t[0] !== i
        ? ((l = i({
            context: "control",
            bounds: "internal",
            target: "fine",
            positions: ["vertical"],
          })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s;
      t[2] !== i
        ? ((s = i({
            context: "control",
            bounds: "internal",
            target: "normal",
            positions: ["horizontal"],
          })),
          (t[2] = i),
          (t[3] = s))
        : (s = t[3]);
      var c;
      t[4] !== l || t[5] !== s
        ? ((c = [l, s]), (t[4] = l), (t[5] = s), (t[6] = c))
        : (c = t[6]);
      var d = c,
        m;
      t[7] !== i
        ? ((m = i({
            context: "container",
            bounds: "internal",
            relation: "component",
          })),
          (t[7] = i),
          (t[8] = m))
        : (m = t[8]);
      var p;
      t[9] !== m
        ? ((p = [u.infoTooltipContainer, m]), (t[9] = m), (t[10] = p))
        : (p = t[10]);
      var _ = p;
      return n === "simpleTooltip" ? d : _;
    }
    ((l.getStatus = d),
      (l.getStatusIcon = m),
      (l.useLayerContentStyle = _),
      (l.useLayerContentContainerStyle = f),
      (l.useCloseButtonStyle = g),
      (l.useIconStyle = h),
      (l.useTooltipContainerStyle = y));
  },
  98,
);
