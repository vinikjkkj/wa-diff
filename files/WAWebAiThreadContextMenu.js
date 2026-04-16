__d(
  "WAWebAiThreadContextMenu",
  [
    "fbt",
    "WAWebAiThreadRenameModal.react",
    "WAWebBotGating",
    "WAWebConfirmPopup.react",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebFbtCommon",
    "WAWebIcEditIcon.react",
    "WAWebModalManager",
    "WAWebPinAiThreadAction",
    "WAWebResolveThreadForEntryPoint",
    "WAWebShowDeleteAiThreadConfirmation",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebBotGating").getAiThreadPinMaxCount();
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: s._(
            /*BTDS*/ '_j{"*":"You can only pin up to {number} chats.","_1":"You can only pin up to 1 chat."}',
            [s._plural(e, "number")],
          ),
        }),
      );
    }
    function d(e, t) {
      var n = e.pinThreadTimestamp != null && e.pinThreadTimestamp > 0,
        a = function () {
          var r = e.id.key.remote;
          n
            ? o("WAWebPinAiThreadAction").unpinAiThreadAction(e, r)
            : o("WAWebPinAiThreadAction").canPinMoreThreads(t)
              ? o("WAWebPinAiThreadAction").pinAiThreadAction(e, r)
              : c();
        };
      return o("WAWebBotGating").isAiThreadPinEnabled()
        ? u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: a,
              icon: n
                ? u.jsx(r("WDSIconWdsIcPushPinSlash.react"), {})
                : u.jsx(r("WDSIconIcPushPin.react"), {}),
              children: n
                ? s._(/*BTDS*/ "Unpin chat")
                : s._(/*BTDS*/ "Pin chat"),
            },
            "pin",
          )
        : null;
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.activeThreadId,
        n = e.chat,
        a = e.thread,
        i = [],
        l = function () {
          var e = a.id.key.remote;
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebAiThreadRenameModal.react").AiThreadRenameModal, {
              aiThread: a,
              chatId: e,
            }),
          );
        },
        c = function () {
          var e = a.id.key.remote,
            n = (t == null ? void 0 : t.toString()) === a.id.toString();
          o(
            "WAWebShowDeleteAiThreadConfirmation",
          ).showDeleteAiThreadConfirmation(e, a.id, n);
        },
        m = d(a, n);
      return (
        m != null &&
          (i.push(m),
          i.push(
            u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "pin-divider"),
          )),
        (!o("WAWebResolveThreadForEntryPoint").isDefaultThread(a.id) ||
          !o("WAWebBotGating").isDefaultThreadRoutingEnabled()) &&
          (i.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: l,
                icon: u.jsx(o("WAWebIcEditIcon.react").IcEditIcon, {}),
                children: s._(/*BTDS*/ "Rename chat"),
              },
              "rename",
            ),
          ),
          i.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "divider"))),
        i.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: c,
              icon: u.jsx(
                o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                {},
              ),
              children: s._(/*BTDS*/ "Delete"),
            },
            "delete",
          ),
        ),
        i
      );
    }
    ((l.showPinOverflowAlert = c), (l.getAiThreadContextMenuItems = m));
  },
  226,
);
