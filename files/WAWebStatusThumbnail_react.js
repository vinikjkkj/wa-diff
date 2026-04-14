__d(
  "WAWebStatusThumbnail.react",
  [
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFrontendStatusGetters",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusImageRing.react",
    "WAWebStatusThumbnailComponents.react",
    "WDSFocusStateStyles",
    "WDSVars.stylex",
    "gkx",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebIsKeyboardUser",
    "useWAWebStaticButtonA11y",
    "useWAWebStatusValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        container: {
          paddingTop: "xz9dl7a",
          paddingInlineEnd: "x1q3ajuy",
          paddingBottom: "xsag5q8",
          paddingInlineStart: "xbmws1g",
          position: "x1n2onr6",
          borderStartStartRadius: "xr9e8f9",
          borderStartEndRadius: "x1e4oeot",
          borderEndEndRadius: "x1ui04y5",
          borderEndStartRadius: "x6en5u8",
          $$css: !0,
        },
        thumbSizeSmall: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        marginTop2: { marginTop: "xfl633f", $$css: !0 },
      };
    function m(t) {
      var n = t.ariaLabel,
        a = t.id,
        i = t.msg,
        l = t.tabIndex,
        s = o("useWAWebStatusValues").useStatusValues(a, [
          o("WAWebFrontendStatusGetters").getLastStatus,
        ]),
        m = s[0],
        p = o("useWAWebContactValues").useContactValues(t.contact.id, [
          o("WAWebContactGetters").getStatusMute,
        ]),
        _ = p[0],
        f = r("useWAWebIsKeyboardUser")(),
        g = f.isKeyboardUser,
        h = r("useWAWebStaticButtonA11y")(t.onClick),
        y = h[0],
        C = h[1],
        b = i != null ? i : m,
        v = c(
          function () {
            return !o(
              "WAWebStatusGatingUtils",
            ).isStatusCloseFriendsViewerSideEnabled() || m == null
              ? null
              : m.statusAudienceMetadata != null
                ? o("WDSVars.stylex").WDSBaseColor.plum400
                : null;
          },
          [m],
        ),
        S = function () {
          if (!r("gkx")("26258") && b) {
            var e = o("WAWebStateUtils").unproxy(b);
            window.msg = e;
          }
        },
        R = d.thumbSizeSmall,
        L = b
          ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: o("WAWebMsgGetters").getSender(b),
              theme: "status",
              size: 40,
            })
          : null;
      return u.jsxs(
        "div",
        babelHelpers.extends({ ref: y }, C, {
          tabIndex: l,
          className: (e || (e = r("stylex")))(
            d.container,
            R,
            d.marginTop2,
            g && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ),
          "aria-label": n,
          role: t.role || "",
          onContextMenu: r("gkx")("26258") ? null : S,
          onClickCapture: function (n) {
            (t.onClick == null || t.onClick(),
              n.stopPropagation(),
              n.preventDefault());
          },
          "data-testid": void 0,
          children: [
            _
              ? null
              : u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
                  id: a,
                  breakRing: !0,
                  customUnreadRingColor: v,
                }),
            u.jsx(
              o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail,
              { msg: b, thumbnailPlaceholder: L, size: "small" },
            ),
          ],
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
