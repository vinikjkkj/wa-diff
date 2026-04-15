__d(
  "WAWebStickerPackInfoDetailsDrawerModal.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebForwardMessageFlowLoadable",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebStickerPackDrawerButton.react",
    "WAWebStickerPanelContentStickerItem.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        title: { flexGrow: "x1c4vz4f", $$css: !0 },
        titleContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
      };
    function d(e) {
      var t = 1e3;
      return e < t * t
        ? (e / t).toFixed(0) + " KB"
        : e < Math.pow(t, 3)
          ? (e / Math.pow(t, 2)).toFixed(1) + " MB"
          : (e / Math.pow(t, 3)).toFixed(1) + " GB";
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.msg,
        a = e.onClose,
        i = e.onStickerClick,
        l = e.ref,
        m = e.stickers,
        p;
      t[0] !== n
        ? ((p = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable,
                {
                  msgs: [o("WAWebStateUtils").unproxy(n.unsafe())],
                  onClose: o("WAWebModalManager").closeModalManager,
                },
              ),
              { transition: "modal-flow" },
            );
          }),
          (t[0] = n),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { surface: "unknown", viewName: "sticker-pack-info" }),
          (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Sticker pack info")), (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] !== a
        ? ((h = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: g,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: a,
            focusBackOrCancel: !0,
          })),
          (t[4] = a),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [c.titleContainer, c.marginBottom8]), (t[6] = y))
        : (y = t[6]);
      var C;
      t[7] !== n.filename
        ? ((C = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: y,
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
              xstyle: c.title,
              text: n.filename,
              ellipsify: !0,
              titlify: !0,
            }),
          })),
          (t[7] = n.filename),
          (t[8] = C))
        : (C = t[8]);
      var b;
      t[9] !== n.description
        ? ((b =
            n.description != null &&
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              marginBottom: 16,
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: n.description,
              }),
            })),
          (t[9] = n.description),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== n.stickerPackPublisher || t[12] !== n.stickerPackSize
        ? ((v =
            n.stickerPackPublisher != null &&
            u.jsxs(o("WAWebText.react").WAWebTextMuted, {
              marginBottom: 16,
              children: [
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: s._(/*BTDS*/ "Created by {name}", [
                    s._param("name", n.stickerPackPublisher),
                  ]),
                }),
                " \u2219 ",
                s._(/*BTDS*/ "{size}", [
                  s._param("size", d(n.stickerPackSize)),
                ]),
              ],
            })),
          (t[11] = n.stickerPackPublisher),
          (t[12] = n.stickerPackSize),
          (t[13] = v))
        : (v = t[13]);
      var S;
      t[14] !== n.description
        ? ((S =
            n.description != null &&
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              marginBottom: 16,
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: n.description,
              }),
            })),
          (t[14] = n.description),
          (t[15] = S))
        : (S = t[15]);
      var R;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = {
            className:
              "xrvj5dj xvfmyfb x40hh3e xi32cqo x1qughib xh8yej3 x5yr21d",
          }),
          (t[16] = R))
        : (R = t[16]);
      var L;
      if (t[17] !== i || t[18] !== m) {
        var E;
        (t[20] !== i
          ? ((E = function (t) {
              return u.jsx(
                r("WAWebStickerPanelContentStickerItem.react"),
                {
                  sticker: t,
                  theme: "stickerStore",
                  dontShowViewPack: !0,
                  onClick: i,
                  onEnter: i,
                },
                t.id,
              );
            }),
            (t[20] = i),
            (t[21] = E))
          : (E = t[21]),
          (L = m.map(E)),
          (t[17] = i),
          (t[18] = m),
          (t[19] = L));
      } else L = t[19];
      var k;
      t[22] !== L
        ? ((k = u.jsx("div", babelHelpers.extends({}, R, { children: L }))),
          (t[22] = L),
          (t[23] = k))
        : (k = t[23]);
      var I;
      t[24] !== k || t[25] !== C || t[26] !== b || t[27] !== v || t[28] !== S
        ? ((I = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "padding-no-margin",
              children: [C, b, v, S, k],
            }),
          })),
          (t[24] = k),
          (t[25] = C),
          (t[26] = b),
          (t[27] = v),
          (t[28] = S),
          (t[29] = I))
        : (I = t[29]);
      var T;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x1ey2m1c x7wzq59 xamitd3 x16ovd2e x12xbjc7" }),
          (t[30] = T))
        : (T = t[30]);
      var D;
      t[31] !== _
        ? ((D = u.jsx(
            "div",
            babelHelpers.extends({}, T, {
              children: u.jsx(r("WAWebStickerPackDrawerButton.react"), {
                handleClick: _,
              }),
            }),
          )),
          (t[31] = _),
          (t[32] = D))
        : (D = t[32]);
      var x;
      return (
        t[33] !== l || t[34] !== I || t[35] !== D || t[36] !== h
          ? ((x = u.jsxs(
              r("WAWebDrawer.react"),
              {
                theme: "sticker-store",
                ref: l,
                tsNavigationData: f,
                children: [h, I, D],
              },
              "sticker-pack-details-modal",
            )),
            (t[33] = l),
            (t[34] = I),
            (t[35] = D),
            (t[36] = h),
            (t[37] = x))
          : (x = t[37]),
        x
      );
    }
    ((l.displayStickerPackSize = d), (l.StickerPackInfoDetailsDrawerModal = m));
  },
  226,
);
