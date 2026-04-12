__d(
  "WAWebStatusThumbnailForUpdatesTab.react",
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
      d = 33,
      m = 36,
      p = {
        container: {
          position: "x1n2onr6",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
        thumbSizeLarge: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        marginTop2: { marginTop: "xfl633f", $$css: !0 },
      };
    function _(t) {
      var n = t.ariaLabel,
        a = t.id,
        i = t.msg,
        l = t.tabIndex,
        s = o("useWAWebStatusValues").useStatusValues(a, [
          o("WAWebFrontendStatusGetters").getLastStatus,
        ]),
        _ = s[0],
        f = o("useWAWebContactValues").useContactValues(t.contact.id, [
          o("WAWebContactGetters").getStatusMute,
        ]),
        g = f[0],
        h = r("useWAWebIsKeyboardUser")(),
        y = h.isKeyboardUser,
        C = r("useWAWebStaticButtonA11y")(t.onClick),
        b = C[0],
        v = C[1],
        S = i != null ? i : _,
        R = c(
          function () {
            return !o(
              "WAWebStatusGatingUtils",
            ).isStatusCloseFriendsViewerSideEnabled() || _ == null
              ? null
              : _.statusAudienceMetadata != null
                ? o("WDSVars.stylex").WDSBaseColor.plum400
                : null;
          },
          [_],
        ),
        L = function () {
          if (!r("gkx")("26258") && S) {
            var e = o("WAWebStateUtils").unproxy(S);
            window.msg = e;
          }
        },
        E = p.thumbSizeLarge,
        k = S ? o("WAWebMsgGetters").getSender(S) : null,
        I = k
          ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: k,
              theme: "status",
            })
          : null;
      return u.jsxs(
        "div",
        babelHelpers.extends({ ref: b }, v, {
          tabIndex: l,
          className: (e || (e = r("stylex")))(
            p.container,
            E,
            p.marginTop2,
            y && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ),
          "aria-label": n,
          role: t.role || "",
          onContextMenu: r("gkx")("26258") ? null : L,
          onClickCapture: function (n) {
            (t.onClick == null || t.onClick(),
              n.stopPropagation(),
              n.preventDefault());
          },
          "data-testid": void 0,
          children: [
            u.jsxs("div", {
              className:
                "x1n2onr6 x5yr21d xh8yej3 xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62",
              children: [
                u.jsx(
                  o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail,
                  { msg: S, thumbnailPlaceholder: I, size: "large" },
                ),
                u.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy x1o0tod xtijo5x xng8ra xgy62qu x12xzxwr xyi3aci xwf5gio x47corl",
                }),
                u.jsx("div", {
                  className:
                    "x10l6tqk x1ey2m1c x1o0tod xtijo5x xng8ra x12vmko1 x12xzxwr x1suzm8a x1p453bz x47corl",
                }),
              ],
            }),
            !g &&
              k != null &&
              u.jsxs("div", {
                className:
                  "x10l6tqk x1atx4j1 xrr41r3 x1oy9qf3 x14qfxbe xc9qbxq x78zum5 x6s0dn4 xl56j7k",
                children: [
                  u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
                    id: a,
                    size: m,
                    breakRing: !1,
                    theme: o("WAWebStatusImageRing.react").RingTheme.UpdatesTab,
                    customUnreadRingColor: R,
                  }),
                  u.jsx("div", {
                    className:
                      "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x1npj6m0 xojvqvm",
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: k,
                      theme: "status",
                      size: d,
                    }),
                  }),
                ],
              }),
          ],
        }),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
