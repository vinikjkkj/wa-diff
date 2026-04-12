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
      var t = e.msg,
        n = e.stickers,
        a = u(null),
        i = a[0],
        l = a[1],
        d = o("useWAWebFlow").useFlow(c.StickerPackInfoDetails),
        m = d[0],
        p = d[1],
        _ = null;
      function f(e) {
        return new (o("WAWebStickerPackModelMd").StickerPackModel)({
          id: e.id,
          name: e.filename,
          publisher: e.stickerPackPublisher,
          description: e.description,
          fileSize: e.size,
        });
      }
      var g = function () {
          (p.pop(),
            i &&
              o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                "ui_idle",
                function () {
                  r("WAWebSendStickerToActiveChatStickersAction")(
                    i,
                    o("WAWebWamEnumStickerSendOriginType")
                      .STICKER_SEND_ORIGIN_TYPE.STICKER_STORE,
                  );
                },
              ));
        },
        h = function (t) {
          (l(t), p.push(c.StickerDetails));
        };
      if (p.step == null) return null;
      switch (p.step) {
        case c.StickerPackInfoDetails:
          _ = s.jsx(
            o("WAWebStickerPackInfoDetailsDrawerModal.react")
              .StickerPackInfoDetailsDrawerModal,
            {
              onClose: o("WAWebDrawerManager").closeDrawerRight,
              msg: t,
              stickers: n,
              onStickerClick: h,
            },
          );
          break;
        case c.StickerDetails:
          _ =
            i != null
              ? s.jsx(r("WAWebStickersDetailsDrawerModal.react"), {
                  sticker: i,
                  stickerPack: f(t),
                  onSend: g,
                  onBack: function () {
                    return p.pop();
                  },
                })
              : null;
          break;
      }
      return s.jsx(m, { flow: p, children: _ });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
