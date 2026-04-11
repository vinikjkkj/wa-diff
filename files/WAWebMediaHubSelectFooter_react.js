__d(
  "WAWebMediaHubSelectFooter.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebKeepInChatMsgUtils",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMultiSelectCount.react",
    "WAWebMultiSelectDelete.react",
    "WAWebMultiSelectDownload.react",
    "WAWebMultiSelectForward.react",
    "WAWebMultiSelectKeep.react",
    "WAWebMultiSelectStar.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUimUie.react",
    "WAWebWamEnumActionCode",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        footer: {
          height: "x1vqgdyp",
          background: "xp8kixx",
          width: "xh8yej3",
          $$css: !0,
        },
        items: { justifyContent: "xaw8158", $$css: !0 },
        count: {
          alignSelf: "xamitd3",
          marginTop: "xr1yuqi",
          marginInlineEnd: "x11t971q",
          marginBottom: "x4ii5y1",
          marginInlineStart: "xvc5jky",
          $$css: !0,
        },
        actionItems: { width: "xygnafs", $$css: !0 },
        show: { transition: "x52kqe7", transform: "x2jnzp2", $$css: !0 },
        paddingAll12: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
        paddingEnd12: { paddingInlineEnd: "xde1mab", $$css: !0 },
        paddingStart24: { paddingInlineStart: "xb0esv5", $$css: !0 },
      };
    function d() {
      "use no forget";
      var e = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        t = e.getMultiSelection,
        n = e.isSelectMode,
        a = e.setIsSelectMode;
      if (!n) return null;
      var i = function () {
          a(!1);
        },
        l = t(),
        d = l.getSelected(),
        g =
          d.length > 0 &&
          d.every(function (e) {
            return o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e);
          });
      return u.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "MediaHubSelectFooter",
        escapable: !0,
        requestDismiss: i,
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          grow: 1,
          xstyle: c.show,
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: [c.paddingAll12, c.items, c.footer],
            grow: 1,
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: c.actionItems,
                children: u.jsx(r("WAWebMultiSelectDelete.react"), {
                  onCancel: i,
                  selectedMessages: l,
                  theme: "mediaHub",
                  onDeleteModalOpen: m,
                }),
              }),
              u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
                color:
                  d.length === 0
                    ? "wdsContentDisabled"
                    : "wdsContentDeemphasized",
                xstyle: [c.count, c.paddingEnd12, c.paddingStart24],
                children: u.jsx(r("WAWebMultiSelectCount.react"), {
                  selectedMsgsCount: d.length,
                }),
              }),
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: c.actionItems,
                justify: "end",
                children: [
                  g
                    ? u.jsx(r("WAWebMultiSelectKeep.react"), {
                        selectedMessages: l,
                        onCancel: function () {
                          d.every(function (e) {
                            return o("WAWebMsgGetters").getIsUnkept(e);
                          }) && i();
                        },
                        theme: "mediaHub",
                        onUnkeep: function () {
                          o("WAWebToastManager").ToastManager.open(
                            u.jsx(o("WAWebToast.react").Toast, {
                              msg: s._(
                                /*BTDS*/ '_j{"*":"Unkept {number_of_messages} items","_1":"Unkept 1 item"}',
                                [s._plural(d.length, "number_of_messages")],
                              ),
                            }),
                          );
                        },
                        onKeep: function () {
                          o("WAWebToastManager").ToastManager.open(
                            u.jsx(o("WAWebToast.react").Toast, {
                              msg: s._(
                                /*BTDS*/ '_j{"*":"Kept {number_of_messages} items","_1":"Kept 1 item"}',
                                [s._plural(d.length, "number_of_messages")],
                              ),
                            }),
                          );
                        },
                      })
                    : u.jsx(r("WAWebMultiSelectStar.react"), {
                        onStar: p,
                        onCancel: function () {
                          var e = d.some(function (e) {
                              return e.star;
                            }),
                            t = d.some(function (e) {
                              return !e.star;
                            });
                          (e && t) || i();
                        },
                        selectedMessages: l,
                        theme: "mediaHub",
                      }),
                  u.jsx(r("WAWebMultiSelectDownload.react"), {
                    downloadButton: !0,
                    onCancel: i,
                    selectedMessages: l,
                    isMediaHub: !0,
                    onDownload: _,
                  }),
                  u.jsx(r("WAWebMultiSelectForward.react"), {
                    noSortOnForward: !0,
                    onCancel: i,
                    selectedMessages: l,
                    onBack: f,
                    theme: "mediaHub",
                    onForwardModalOpen: function () {
                      o("WAWebMediaHubLogger").logMediaHubAction({
                        action: o("WAWebWamEnumActionCode").ACTION_CODE.FORWARD,
                      });
                    },
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebMediaHubLogger").logMediaHubAction({
        action: o("WAWebWamEnumActionCode").ACTION_CODE.DELETE,
      });
    }
    function p() {
      o("WAWebMediaHubLogger").logMediaHubAction({
        action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR,
      });
    }
    function _() {
      o("WAWebMediaHubLogger").logMediaHubAction({
        action: o("WAWebWamEnumActionCode").ACTION_CODE.DOWNLOAD,
      });
    }
    function f() {
      o("WAWebModalManager").ModalManager.closeSupportModal();
    }
    l.default = d;
  },
  226,
);
