__d(
  "WAWebStickerStoreFlow",
  [
    "$InternalEnum",
    "WAWebStickersDetailsDrawerModal.react",
    "WAWebStickersPackDetailsDrawerModal.react",
    "WAWebStickersStoreDrawerModal.react",
    "WAWebUiIdleEventBus",
    "WAWebUim",
    "WAWebWamEnumStickerSendOriginType",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = n("$InternalEnum").Mirrored([
        "StickerStore",
        "StickerPackDetails",
        "StickerDetails",
      ]);
    function d(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.msg,
        a = e.onSticker,
        i = e.stickerPackId,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (t[0] = l))
        : (l = t[0]);
      var d = o("useWAWebFlow").useFlow(
          i == null ? c.StickerStore : c.StickerPackDetails,
          l,
        ),
        m = d[0],
        p = d[1],
        _ = u(null),
        f = _[0],
        g = _[1],
        h = u(null),
        y = h[0],
        C = h[1],
        b;
      t[1] !== p
        ? ((b = function (t) {
            (g(t), p.push(c.StickerPackDetails));
          }),
          (t[1] = p),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      t[3] !== p
        ? ((S = function (t, n) {
            (C(t), n && g(n), p.push(c.StickerDetails));
          }),
          (t[3] = p),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== p
        ? ((L = function () {
            p.pop();
          }),
          (t[5] = p),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      t[7] !== p || t[8] !== a
        ? ((k = function (t, n) {
            (p.pop(),
              t &&
                o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                  "ui_idle",
                  function () {
                    a(
                      t,
                      o("WAWebWamEnumStickerSendOriginType")
                        .STICKER_SEND_ORIGIN_TYPE.STICKER_STORE,
                      n,
                    );
                  },
                ));
          }),
          (t[7] = p),
          (t[8] = a),
          (t[9] = k))
        : (k = t[9]);
      var I = k;
      if (p.step == null) return null;
      var T = null;
      e: switch (p.step) {
        case c.StickerStore: {
          var D;
          t[10] !== p
            ? ((D = function () {
                return p.pop();
              }),
              (t[10] = p),
              (t[11] = D))
            : (D = t[11]);
          var x;
          (t[12] !== v || t[13] !== D
            ? ((x = s.jsx(r("WAWebStickersStoreDrawerModal.react"), {
                onStickerPackDetails: v,
                onClose: D,
              })),
              (t[12] = v),
              (t[13] = D),
              (t[14] = x))
            : (x = t[14]),
            (T = x));
          break e;
        }
        case c.StickerPackDetails: {
          if (i == null) {
            var $;
            (t[15] !== E || t[16] !== R || t[17] !== n || t[18] !== f
              ? (($ =
                  f != null
                    ? s.jsx(r("WAWebStickersPackDetailsDrawerModal.react"), {
                        stickerPack: f,
                        onStickerClick: R,
                        onStickerEnter: R,
                        onBack: E,
                        msg: n,
                      })
                    : null),
                (t[15] = E),
                (t[16] = R),
                (t[17] = n),
                (t[18] = f),
                (t[19] = $))
              : ($ = t[19]),
              (T = $));
          } else {
            var P;
            t[20] !== p
              ? ((P = function () {
                  return p.end(o("WAWebUim").DismissReason.LIFECYCLE);
                }),
                (t[20] = p),
                (t[21] = P))
              : (P = t[21]);
            var N;
            (t[22] !== R || t[23] !== n || t[24] !== i || t[25] !== P
              ? ((N = s.jsx(r("WAWebStickersPackDetailsDrawerModal.react"), {
                  stickerPackId: i,
                  onStickerClick: R,
                  onStickerEnter: R,
                  onClose: P,
                  msg: n,
                })),
                (t[22] = R),
                (t[23] = n),
                (t[24] = i),
                (t[25] = P),
                (t[26] = N))
              : (N = t[26]),
              (T = N));
          }
          break e;
        }
        case c.StickerDetails: {
          var M;
          (t[27] !== p || t[28] !== I || t[29] !== y || t[30] !== f
            ? ((M =
                y != null && f != null
                  ? s.jsx(r("WAWebStickersDetailsDrawerModal.react"), {
                      sticker: y,
                      stickerPack: f,
                      onSend: I,
                      onBack: function () {
                        return p.pop();
                      },
                    })
                  : null),
              (t[27] = p),
              (t[28] = I),
              (t[29] = y),
              (t[30] = f),
              (t[31] = M))
            : (M = t[31]),
            (T = M));
        }
      }
      var w;
      return (
        t[32] !== m || t[33] !== T || t[34] !== p
          ? ((w = s.jsx(m, { flow: p, children: T })),
            (t[32] = m),
            (t[33] = T),
            (t[34] = p),
            (t[35] = w))
          : (w = t[35]),
        w
      );
    }
    l.default = d;
  },
  98,
);
