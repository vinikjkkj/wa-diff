__d(
  "WAWebStickerPackDetailsFlow.react",
  [
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebStickerPackInfoDetailsDrawerModal.react",
    "WAWebStickerPackModelMd",
    "WAWebStickersDetailsDrawerModal.react",
    "WAWebUiIdleEventBus",
    "WAWebWamEnumStickerSendOriginType",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = n("$InternalEnum").Mirrored([
        "StickerPackInfoDetails",
        "StickerDetails",
      ]);
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.msg,
        a = e.stickers,
        i = u(null),
        l = i[0],
        d = i[1],
        m = o("useWAWebFlow").useFlow(c.StickerPackInfoDetails),
        p = m[0],
        _ = m[1],
        f = null,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t) {
            return new (o("WAWebStickerPackModelMd").StickerPackModel)({
              id: t.id,
              name: t.filename,
              publisher: t.stickerPackPublisher,
              description: t.description,
              fileSize: t.size,
            });
          }),
          (t[0] = g))
        : (g = t[0]);
      var h = g,
        y;
      t[1] !== _ || t[2] !== l
        ? ((y = function () {
            (_.pop(),
              l &&
                o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                  "ui_idle",
                  function () {
                    r("WAWebSendStickerToActiveChatStickersAction")(
                      l,
                      o("WAWebWamEnumStickerSendOriginType")
                        .STICKER_SEND_ORIGIN_TYPE.STICKER_STORE,
                    );
                  },
                ));
          }),
          (t[1] = _),
          (t[2] = l),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== _
        ? ((b = function (t) {
            (d(t), _.push(c.StickerDetails));
          }),
          (t[4] = _),
          (t[5] = b))
        : (b = t[5]);
      var v = b;
      if (_.step == null) return null;
      e: switch (_.step) {
        case c.StickerPackInfoDetails: {
          var S;
          (t[6] !== v || t[7] !== n || t[8] !== a
            ? ((S = s.jsx(
                o("WAWebStickerPackInfoDetailsDrawerModal.react")
                  .StickerPackInfoDetailsDrawerModal,
                {
                  onClose: o("WAWebDrawerManager").closeDrawerRight,
                  msg: n,
                  stickers: a,
                  onStickerClick: v,
                },
              )),
              (t[6] = v),
              (t[7] = n),
              (t[8] = a),
              (t[9] = S))
            : (S = t[9]),
            (f = S));
          break e;
        }
        case c.StickerDetails: {
          var R;
          (t[10] !== _ || t[11] !== C || t[12] !== n || t[13] !== l
            ? ((R =
                l != null
                  ? s.jsx(r("WAWebStickersDetailsDrawerModal.react"), {
                      sticker: l,
                      stickerPack: h(n),
                      onSend: C,
                      onBack: function () {
                        return _.pop();
                      },
                    })
                  : null),
              (t[10] = _),
              (t[11] = C),
              (t[12] = n),
              (t[13] = l),
              (t[14] = R))
            : (R = t[14]),
            (f = R));
        }
      }
      var L;
      return (
        t[15] !== p || t[16] !== f || t[17] !== _
          ? ((L = s.jsx(p, { flow: _, children: f })),
            (t[15] = p),
            (t[16] = f),
            (t[17] = _),
            (t[18] = L))
          : (L = t[18]),
        L
      );
    }
    l.default = d;
  },
  98,
);
