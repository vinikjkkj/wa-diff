__d(
  "WAWebChatContextMenuItemEditList.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListPeopleIcon.react",
    "WAWebListSubmenuContentLoadable",
    "WAWebListsIntroPopupLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebSchemaLabel",
    "WAWebStateUtils",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSMenuItem.react",
    "react",
    "useWAWebChatValues",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.chat,
        n = e.displayContext,
        a = e.onSMBLabelMenuItemClick,
        i = r("useWAWebNux")(o("WAWebNux").NUX.ADD_TO_LISTS),
        l = i[0],
        d = i[1],
        m = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getLabels,
          o("WAWebFrontendChatGetters").getIsFavorite,
        ]),
        p = m[0],
        _ = m[1],
        f =
          (p == null || p.length === 0) &&
          !(
            _ &&
            o("WAWebLabelCollection").LabelCollection.some(function (e) {
              return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
            })
          )
            ? s._(/*BTDS*/ "Add to list")
            : s._(/*BTDS*/ "Change list"),
        g = function () {
          if (o("WAWebMobilePlatforms").isSMB()) {
            a == null || a();
            return;
          }
          var e = function (r) {
            r === void 0 && (r = !1);
            var e = [o("WAWebStateUtils").unproxy(t)],
              a;
            (r
              ? (a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .LIST_NUX)
              : n === "chat-header"
                ? (a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                    .CHAT_MORE_OPTIONS)
                : (a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                    .CHAT_LONG_PRESS_OPTIONS),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable,
                  {
                    modelsToUpdate: e,
                    onClose: o("WAWebModalManager").closeModalManager,
                    entryPoint: a,
                  },
                ),
              ));
          };
          l
            ? o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable,
                  {
                    onContinue: function () {
                      (d(), e(!0));
                    },
                  },
                ),
              )
            : e();
        },
        h =
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_change_list_wds_submenu",
          ) === !0 && !o("WAWebMobilePlatforms").isSMB(),
        y =
          n === "chat-header"
            ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .CHAT_MORE_OPTIONS
            : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .CHAT_LONG_PRESS_OPTIONS;
      c(
        function () {
          h && o("WAWebListSubmenuContentLoadable").requireBundle();
        },
        [h],
      );
      var C = h
        ? u.jsx(
            o("WAWebListSubmenuContentLoadable").ListSubmenuContentLoadable,
            { chat: t, chatLabels: p, entryPoint: y },
          )
        : void 0;
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
          title: f,
          onPress: h ? r("WAWebNoop") : g,
          hasSubmenu: h,
          submenuContent: C,
          testid: void 0,
        },
        "EditList",
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
