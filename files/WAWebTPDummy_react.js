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
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = p,
        n = m;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_file_forward_modal",
        t,
      );
      var r;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = function (r, o) {
            var e,
              a = (e = o == null ? void 0 : o.showPreview) != null ? e : !0;
            a ? n(r, o) : t(r);
          }),
          (e[0] = r))
        : (r = e[0]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_file_forward_modal_with_preview",
          r,
        ));
      var a;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsx("div", {})), (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    function m(e, t) {
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
            if ((o("WAWebModalManager").ModalManager.close(), i.length === 0)) {
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
    }
    function p(e) {
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
    }
    l.default = d;
  },
  226,
);
