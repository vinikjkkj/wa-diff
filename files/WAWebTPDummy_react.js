__d(
  "WAWebTPDummy.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebOpenFilePreviewFlow",
    "WAWebSelectModal.react",
    "WAWebSendFilesToChats",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d() {
      var e = c(function (e) {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebSelectModal.react").SelectModal, {
              title: s._(/*BTDS*/ "Select chats"),
              listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
              onConfirm: function (n) {
                var t = n.selectedItems;
                return r("WAWebSendFilesToChats")(t, [e]);
              },
            }),
          );
        }, []),
        t = c(function (e, t) {
          var n = t != null ? t : {},
            r = n.onCancel,
            a = n.onSend;
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebSelectModal.react").SelectModal, {
              title: s._(/*BTDS*/ "Select chats"),
              listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
              onConfirm: function (n) {
                var t = n.selectedItems,
                  i = t;
                if (
                  (o("WAWebModalManager").ModalManager.close(), i.length === 0)
                ) {
                  r == null || r();
                  return;
                }
                var l = i[0],
                  s = babelHelpers.arrayLikeToArray(i).slice(1);
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: l })
                  .then(function () {
                    o("WAWebOpenFilePreviewFlow").openFilePreviewFlowMulticast(
                      l,
                      e,
                      s,
                      {
                        onComplete: function (t) {
                          t && (a == null || a());
                        },
                        onCancel: r,
                      },
                    );
                  });
              },
            }),
          );
        }, []);
      return (
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_file_forward_modal",
          e,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_file_forward_modal_with_preview",
          function (n, r) {
            var o,
              a = (o = r == null ? void 0 : r.showPreview) != null ? o : !0;
            a ? t(n, r) : e(n);
          },
        ),
        u.jsx("div", {})
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
