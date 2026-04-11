__d(
  "WAWebEditGroupProfileDrawer.react",
  [
    "fbt",
    "$InternalEnum",
    "ReactKonva",
    "WANullthrows",
    "WAWebCheckmarkLargeIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEditGroupProfileDrawerColorPanel.react",
    "WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebIconTabs.react",
    "WAWebMediaEditorUtilsCreateCanvasAndImage",
    "WAWebNoop",
    "WAWebProfileCropConstants",
    "WAWebRound.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUtilsGetColor",
    "WAWebUtilsSharpenFilter",
    "WDSIconIcMood.react",
    "WDSIconWdsIcSticker.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = 64,
      g = n("$InternalEnum").Mirrored(["EMOJI", "STICKER"]),
      h = {
        body: { flexGrow: "x1iyjqo2", $$css: !0 },
        footer: {
          display: "x78zum5",
          position: "x1n2onr6",
          width: "xh8yej3",
          height: "xwvwv9b",
          zIndex: "xhtitgo",
          alignItems: "x7a106z",
          justifyContent: "xl56j7k",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
      },
      y = {
        emojiIcon: { width: "x17z2i9w", height: "x17rw0jw", $$css: !0 },
        stickerIcon: { width: "x1ig0tib", height: "x1pwvq5b", $$css: !0 },
      },
      C = [
        ["purple", "sky-blue", "green", "yellow", "orange", "pink"],
        ["cool-gray", "cobalt", "teal", "red", "sand"],
      ],
      b = (e = []).concat.apply(e, C),
      v = 160,
      S = 104,
      R = { width: 90, height: 48 },
      L = 770;
    function E(e) {
      for (var t = [], n = e.split(" "), r = 0; r < n.length; r++)
        n[r].length > 0 && t.push(n[r]);
      return t;
    }
    function k(e, t) {
      for (var n = "", r = 0; r < t.length; r++)
        n += (r === 0 ? "" : " ") + t[r].text;
      var o = E(n);
      if (e.length !== o.length) return !0;
      for (var a = 0; a < e.length; a++) if (e[a] !== o[a]) return !0;
      return !1;
    }
    function I(e) {
      switch (e) {
        case "purple":
          return s._(/*BTDS*/ "purple");
        case "sky-blue":
          return s._(/*BTDS*/ "sky blue");
        case "green":
          return s._(/*BTDS*/ "green");
        case "yellow":
          return s._(/*BTDS*/ "yellow");
        case "orange":
          return s._(/*BTDS*/ "orange");
        case "pink":
          return s._(/*BTDS*/ "pink");
        case "cool-gray":
          return s._(/*BTDS*/ "cool gray");
        case "cobalt":
          return s._(/*BTDS*/ "cobalt");
        case "teal":
          return s._(/*BTDS*/ "teal");
        case "red":
          return s._(/*BTDS*/ "red");
        case "sand":
          return s._(/*BTDS*/ "sand");
      }
    }
    function T(e) {
      var t,
        a,
        i,
        l,
        u = e.onCancel,
        d = e.onFinished,
        T = e.sendEmojiStickerPanelOpenLoggingEvent,
        D = e.title,
        x = _(null),
        $ = x[0],
        P = x[1],
        N = _(null),
        M = N[0],
        w = N[1],
        A = _(null),
        F = A[0],
        O = A[1],
        B = _(0),
        W = B[0],
        q = B[1],
        U = _(null),
        V = U[0],
        H = U[1],
        G = _([]),
        z = G[0],
        j = G[1],
        K = p(null),
        Q = p(null),
        X = p(!1),
        Y = { EMOJI: 0, STICKER: 1 },
        J = p(
          ((t = {}),
          (t[Y.EMOJI] = r("WAWebNoop")),
          (t[Y.STICKER] = r("WAWebNoop")),
          t),
        ),
        Z = p([]),
        ee = p(null),
        te = s._(/*BTDS*/ "Choose an emoji or sticker");
      (m(
        function () {
          var e;
          (e = Q.current) == null || e.cache();
        },
        [$],
      ),
        m(
          function () {
            var e = ee.current;
            if (e != null)
              for (
                var t = E(te.toString()), n = k(t, e.textArr);
                e.getHeight() > R.height || n;
              )
                (e.fontSize(e.fontSize() - 1), (n = k(t, e.textArr)));
          },
          [te],
        ));
      var ne = c.jsx(o("ReactKonva").Stage, {
        width: v,
        height: v,
        className:
          "xqui205 xpwdb9g x1hq5gj4 xefazk8 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 xc8icb0",
        ref: K,
        onClick: function () {
          $ == null && F == null && O(0);
        },
        children: c.jsxs(o("ReactKonva").Layer, {
          children: [
            c.jsx(o("ReactKonva").Rect, {
              width: v,
              height: v,
              fill: r("WAWebUtilsGetColor")(b[W], 200),
            }),
            $ == null
              ? c.jsx(o("ReactKonva").Text, {
                  ref: ee,
                  x: v / 2,
                  y: v / 2,
                  width: R.width,
                  height: R.height,
                  offset: { x: R.width / 2, y: R.height / 2 },
                  lineHeight: 1.14,
                  align: "center",
                  verticalAlign: "middle",
                  text: te.toString(),
                  fontSize: 14,
                  fontFamily:
                    '"SF Pro Text", "SF Pro Icons", system, -apple-system, system-ui, "system-ui", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", "Kohinoor Devanagari", sans-serif',
                  fill: r("WAWebUtilsGetColor")("cool-gray-alpha", 50),
                })
              : c.jsx(o("ReactKonva").Image, {
                  ref: Q,
                  width: S,
                  height: S,
                  offset: { x: S / 2, y: S / 2 },
                  x: v / 2,
                  y: v / 2,
                  image: $,
                  filters:
                    M === g.EMOJI && X.current
                      ? [r("WAWebUtilsSharpenFilter")]
                      : [],
                }),
          ],
        }),
      });
      Object.values(Y).forEach(function (e) {
        typeof e == "number" &&
          (J.current[e] = function () {
            F === e && O(null);
          });
      });
      var re = function (t) {
          T != null && T(t);
        },
        oe = function (t, a) {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = window.innerHeight < L;
                if (t != null) (j(null), H(t));
                else if (a != null) {
                  var n;
                  (H(null),
                    j(
                      (n = a == null ? void 0 : a.mediaData.emojis) != null
                        ? n
                        : [],
                    ));
                }
                if (t != null) {
                  var i = yield o(
                    "WAWebMediaEditorUtilsCreateCanvasAndImage",
                  ).createImageFromEmoji(t);
                  i &&
                    (P(i),
                    (X.current = i.naturalWidth <= f && i.naturalHeight <= f),
                    w(g.EMOJI),
                    e && J.current[Y.EMOJI]());
                } else if (a != null) {
                  var l = yield o(
                    "WAWebMediaEditorUtilsCreateCanvasAndImage",
                  ).createImageFromSticker(a);
                  (P(l), w(g.STICKER), e && J.current[Y.STICKER]());
                } else
                  throw r("err")(
                    "Neither emoji nor sticker is provided in handleEmojiStickerSelect()",
                  );
              } catch (e) {
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Failed to add image"),
                  }),
                );
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e();
        },
        ae = function () {
          if ($ == null)
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Choose an emoji or sticker to continue"),
                id: "ChooseAnEmojiOrStickerToContinueToast",
              }),
              o("WAWebToastManager").ToastPosition.CENTER,
            );
          else {
            var e,
              t,
              n,
              a,
              i =
                (e =
                  (t = K.current) == null
                    ? void 0
                    : t.toDataURL({
                        mimeType: "image/jpeg",
                        pixelRatio:
                          o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE /
                          v,
                        quality: 0,
                        width: v,
                        height: v,
                      })) != null
                  ? e
                  : "",
              l =
                (n =
                  (a = K.current) == null
                    ? void 0
                    : a.toDataURL({
                        mimeType: "image/jpeg",
                        pixelRatio:
                          (o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE *
                            2) /
                          v,
                        quality: 1,
                        width: v,
                        height: v,
                      })) != null
                  ? n
                  : "";
            d(i, l, r("WANullthrows")(M));
          }
        },
        ie = c.jsx(
          "div",
          {
            className: "x1cb1t30",
            children: c.jsx(o("WAWebRound.react").Round, {
              large: !0,
              onClick: ae,
              theme:
                $ == null ? o("WAWebRound.react").RoundTheme.Disabled : void 0,
              label: s._(/*BTDS*/ "Submit picture"),
              children: c.jsx(
                o("WAWebCheckmarkLargeIcon.react").CheckmarkLargeIcon,
                {},
              ),
            }),
          },
          "btn-submit",
        ),
        le =
          V != null
            ? s._(
                /*BTDS*/ 'Group photo showing the "{emoji name}" emoji on a {color name} background',
                [s._param("emoji name", V), s._param("color name", I(b[W]))],
              )
            : null,
        se = null;
      if (Array.isArray(z))
        if (z.length > 0) {
          var ue;
          se = s._(
            /*BTDS*/ '_j{"*":"Group photo showing a sticker represented as the \\"{emoji name}\\" emojis on a {color name} background","_1":"Group photo showing a sticker represented as the \\"{emoji name}\\" emoji on a {color name} background"}',
            [
              s._plural((ue = z == null ? void 0 : z.length) != null ? ue : 0),
              s._param("emoji name", z == null ? void 0 : z.join(" ")),
              s._param("color name", I(b[W])),
            ],
          );
        } else
          se = s._(
            /*BTDS*/ "Group photo showing a sticker on a {color name} background",
            [s._param("color name", I(b[W]))],
          );
      var ce = (a = le != null ? le : se) != null ? a : te;
      return c.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: "products",
          tsNavigationData: {
            surface: "unknown",
            viewName: "edit-group-profile",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: D,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onCancel: u,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              overflow: "hidden",
              children: [
                c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  className: "x16w0wmm x1n2onr6 xh8yej3 x5yr21d",
                  align: "center",
                  justify: "center",
                  children: [
                    c.jsx(r("WAWebFlexItem.react"), {
                      grow: 1,
                      xstyle: h.body,
                      children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                        align: "center",
                        children: [
                          c.jsx(r("WAWebFlexItem.react"), {
                            role: "img",
                            "aria-label": ce,
                            children: ne,
                          }),
                          c.jsx(r("WAWebFlexItem.react"), {
                            children: c.jsx(r("WAWebIconTabs.react"), {
                              refs: Z.current,
                              selectedIndex: F,
                              onSelect: function (t) {
                                t !== F &&
                                  (O(t),
                                  re(t === Y.EMOJI ? g.EMOJI : g.STICKER));
                              },
                              tabConfigs: [
                                {
                                  Icon: r("WDSIconIcMood.react"),
                                  iconStyle: y.emojiIcon,
                                  ariaLabel: s._(/*BTDS*/ "Emojis selector"),
                                },
                                {
                                  Icon: r("WDSIconWdsIcSticker.react"),
                                  iconStyle: y.stickerIcon,
                                  ariaLabel: s._(/*BTDS*/ "Stickers selector"),
                                },
                              ],
                              popupAtLaunch: !0,
                            }),
                          }),
                          c.jsx(r("WAWebFlexItem.react"), {
                            children: c.jsx(
                              r("WAWebEditGroupProfileDrawerColorPanel.react"),
                              {
                                className: "x1yl842u",
                                colors: C,
                                selectedIndex: W,
                                onSelect: q,
                              },
                            ),
                          }),
                        ],
                      }),
                    }),
                    c.jsx(r("WAWebFlexItem.react"), {
                      grow: 0,
                      xstyle: h.footer,
                      children: ie,
                    }),
                  ],
                }),
                F === Y.EMOJI &&
                  c.jsx(
                    o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react")
                      .EmojiPanelPopup,
                    {
                      anchor: r("WANullthrows")(
                        (i = Z.current[Y.EMOJI]) == null ? void 0 : i.current,
                      ),
                      onSelect: oe,
                      onClose: function () {
                        return J.current[Y.EMOJI]();
                      },
                    },
                  ),
                F === Y.STICKER &&
                  c.jsx(
                    o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react")
                      .StickerPanelPopup,
                    {
                      anchor: r("WANullthrows")(
                        (l = Z.current[Y.STICKER]) == null ? void 0 : l.current,
                      ),
                      onSelect: function (t) {
                        return oe(null, t);
                      },
                      onClose: function () {
                        return J.current[Y.STICKER]();
                      },
                    },
                  ),
              ],
            }),
          ],
        },
        "attach-edit-group-profile-modal",
      );
    }
    ((T.displayName = T.name + " [from " + i.id + "]"),
      (l.EMOJI_IMAGE_SHARPEN_SIZE_THRESHOLD = f),
      (l.ImageType = g),
      (l.COLOR_OPTIONS = b),
      (l.PHOTO_SIZE = v),
      (l.IMAGE_SIZE = S),
      (l.getFbtColorString = I),
      (l.EditGroupProfileDrawer = T));
  },
  226,
);
