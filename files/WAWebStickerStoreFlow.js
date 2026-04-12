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
      var t = e.msg,
        n = e.onSticker,
        a = e.stickerPackId,
        i = o("useWAWebFlow").useFlow(
          a == null ? c.StickerStore : c.StickerPackDetails,
          { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight },
        ),
        l = i[0],
        d = i[1],
        m = u(null),
        p = m[0],
        _ = m[1],
        f = u(null),
        g = f[0],
        h = f[1],
        y = function (t) {
          (_(t), d.push(c.StickerPackDetails));
        },
        C = function (t, n) {
          (h(t), n && _(n), d.push(c.StickerDetails));
        },
        b = function () {
          d.pop();
        },
        v = function (t, r) {
          (d.pop(),
            t &&
              o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                "ui_idle",
                function () {
                  n(
                    t,
                    o("WAWebWamEnumStickerSendOriginType")
                      .STICKER_SEND_ORIGIN_TYPE.STICKER_STORE,
                    r,
                  );
                },
              ));
        };
      if (d.step == null) return null;
      var S = null;
      switch (d.step) {
        case c.StickerStore:
          S = s.jsx(r("WAWebStickersStoreDrawerModal.react"), {
            onStickerPackDetails: y,
            onClose: function () {
              return d.pop();
            },
          });
          break;
        case c.StickerPackDetails:
          a == null
            ? (S =
                p != null
                  ? s.jsx(r("WAWebStickersPackDetailsDrawerModal.react"), {
                      stickerPack: p,
                      onStickerClick: C,
                      onStickerEnter: C,
                      onBack: b,
                      msg: t,
                    })
                  : null)
            : (S = s.jsx(r("WAWebStickersPackDetailsDrawerModal.react"), {
                stickerPackId: a,
                onStickerClick: C,
                onStickerEnter: C,
                onClose: function () {
                  return d.end(o("WAWebUim").DismissReason.LIFECYCLE);
                },
                msg: t,
              }));
          break;
        case c.StickerDetails:
          S =
            g != null && p != null
              ? s.jsx(r("WAWebStickersDetailsDrawerModal.react"), {
                  sticker: g,
                  stickerPack: p,
                  onSend: v,
                  onBack: function () {
                    return d.pop();
                  },
                })
              : null;
          break;
      }
      return s.jsx(l, { flow: d, children: S });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
