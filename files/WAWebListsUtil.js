__d(
  "WAWebListsUtil",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebListItemParentType",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebModalManager",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamLabelEventReporter",
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
          o("WAWebBizGatingUtils").isSMBEnhancedLoggingEnabled()
            ? e.forEach(function (e) {
                var n = e.id.toJid(),
                  r = o("WAWebChatThreadLogging").getChatThreadIDHMAC(n),
                  a = function (n) {
                    return c(t, n);
                  };
                r.then(a);
              })
            : c(t);
        })),
        m.apply(this, arguments)
      );
    }
    var p = function (t) {
        return t.labelItemCollection.reduce(function (e, t) {
          if (
            t == null ||
            t.parentType !==
              o("WAWebListItemParentType").LabelItemParentType.Chat
          )
            return e;
          var n = o("WAWebChatCollection").ChatCollection.get(t.parentId);
          return (n != null && e.push(n), e);
        }, []);
      },
      _ = function (t, n) {
        var e = new Set(t),
          r = new Set(n),
          o = [];
        for (var a of r) e.has(a) || o.push(a);
        var i = [];
        for (var l of e) r.has(l) || i.push(l);
        return { removedItems: i, addedItems: o };
      },
      f = function (t, n, r) {
        var e = s._(/*BTDS*/ "Delete this list?"),
          a = s._(
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
                  r == null || r();
                });
            },
            onCancel: o("WAWebModalManager").closeModalManager,
            children: a,
          }),
        );
      };
    function g(e) {
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
      (l.showMaxListsModal = g));
  },
  226,
);
