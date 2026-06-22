__d(
  "WAWebListsUtil",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFavoritesUtils",
    "WAWebFbtCommon",
    "WAWebGroupType",
    "WAWebListItemParentType",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebModalManager",
    "WAWebSchemaLabel",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamLabelEventReporter",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      o("WAWebWamLabelEventReporter").logLabelOperationEvent(
        o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
        e,
        o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_COMBINED_DIALOG,
        t == null ? void 0 : t,
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.length;
          c(t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      e: return e.type === o("WAWebSchemaLabel").ListType.FAVORITES
        ? o("WAWebFavoritesUtils").getFavoriteChats()
        : e.type === o("WAWebSchemaLabel").ListType.UNREAD
          ? o("WAWebChatCollection").ChatCollection.filter(function (e) {
              return e.unreadCount !== 0 && !e.archive && !e.isLocked;
            })
          : e.type === o("WAWebSchemaLabel").ListType.GROUPS
            ? o("WAWebChatCollection").ChatCollection.filter(function (e) {
                var t;
                if (e.archive || e.isLocked) return !1;
                var n = (t = e.groupMetadata) == null ? void 0 : t.groupType;
                return (
                  o("WAWebChatGetters").getIsGroup(e) &&
                  n !== o("WAWebGroupType").GroupType.COMMUNITY &&
                  n !==
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
                  n !== o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
                  n !== o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
                );
              })
            : e.type === o("WAWebSchemaLabel").ListType.COMMUNITY
              ? o("WAWebChatCollection").ChatCollection.filter(function (e) {
                  var t;
                  if (e.archive || e.isLocked) return !1;
                  var n = (t = e.groupMetadata) == null ? void 0 : t.groupType;
                  return (
                    o("WAWebChatGetters").getIsGroup(e) &&
                    (n === o("WAWebGroupType").GroupType.COMMUNITY ||
                      n ===
                        o("WAWebGroupType").GroupType
                          .LINKED_ANNOUNCEMENT_GROUP ||
                      n === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
                      n === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP)
                  );
                })
              : e.labelItemCollection.reduce(function (e, t) {
                  if (
                    t == null ||
                    t.parentType !==
                      o("WAWebListItemParentType").LabelItemParentType.Chat
                  )
                    return e;
                  var n = o("WAWebChatCollection").ChatCollection.get(
                    t.parentId,
                  );
                  return (n != null && e.push(n), e);
                }, []);
    }
    var _ = function (t, n) {
        var e = new Set(t),
          r = new Set(n),
          o = [];
        for (var a of r) e.has(a) || o.push(a);
        var i = [];
        for (var l of e) r.has(l) || i.push(l);
        return { removedItems: i, addedItems: o };
      },
      f = function (t, n, a) {
        var e = s._(/*BTDS*/ "Delete this list?");
        if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
          o("WDSDialogBridge").openWDSDialog(
            u.jsx(r("WDSConfirmDialog.react"), {
              title: e,
              description: s._(
                /*BTDS*/ "Your chats with people and groups won't be deleted.",
              ),
              confirmLabel: s._(/*BTDS*/ "Delete"),
              destructive: !0,
              onConfirm: function () {
                o("WAWebListsActions")
                  .deleteListAction(t, o("WDSDialogBridge").closeWDSDialog, n)
                  .then(function () {
                    a == null || a();
                  });
              },
              onDismiss: o("WDSDialogBridge").closeWDSDialog,
              open: !0,
            }),
          );
          return;
        }
        var i = s._(
          /*BTDS*/ "Deleting a list removes it from all contacts and chats. Are you sure you want to delete this list?",
        );
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            testid: "delete-list-confirm-popup",
            title: e,
            okButtonType: "solid-warning",
            onOK: function () {
              o("WAWebListsActions")
                .deleteListAction(
                  t,
                  o("WAWebModalManager").closeModalManager,
                  n,
                )
                .then(function () {
                  a == null || a();
                });
            },
            onCancel: o("WAWebModalManager").closeModalManager,
            children: i,
          }),
        );
      },
      g = function (t, n) {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            testid: "disable-list-confirm-popup",
            title: s._(/*BTDS*/ "Disable list?"),
            okButtonType: "solid-warning",
            okText: s._(/*BTDS*/ "Disable"),
            onOK: function () {
              o("WAWebListsActions")
                .deactivatePresetList(t)
                .then(function () {
                  (o("WAWebModalManager").closeModalManager(),
                    n == null || n());
                });
            },
            onCancel: o("WAWebModalManager").closeModalManager,
            children: s._(
              /*BTDS*/ "You can re-enable it from your lists settings at any time.",
            ),
          }),
        );
      };
    function h(e) {
      o("WAWebModalManager").ModalManager.openAlert(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: function () {
            return o("WAWebModalManager").ModalManager.closeAlert();
          },
          okText: r("WAWebFbtCommon")("OK"),
          children: o("WAWebListUtils").getReachMaxLabelCountText(e),
        }),
      );
    }
    ((l.logLabelOperationEventsForModels = d),
      (l.getAllChatsInList = p),
      (l.getTwoArraysDifference = _),
      (l.openListDeleteConfirmPopup = f),
      (l.openListDisableConfirmPopup = g),
      (l.showMaxListsModal = h));
  },
  226,
);
