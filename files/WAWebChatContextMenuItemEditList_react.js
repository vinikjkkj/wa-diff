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
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.chat,
        a = e.displayContext,
        i = e.onSMBLabelMenuItemClick,
        l = r("useWAWebNux")(o("WAWebNux").NUX.ADD_TO_LISTS),
        d = l[0],
        p = l[1],
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebChatGetters").getLabels,
            o("WAWebFrontendChatGetters").getIsFavorite,
          ]),
          (t[0] = _))
        : (_ = t[0]);
      var f = o("useWAWebChatValues").useChatValues(n.id, _),
        g = f[0],
        h = f[1],
        y;
      t[1] !== g || t[2] !== h
        ? ((y =
            (g == null || g.length === 0) &&
            !(h && o("WAWebLabelCollection").LabelCollection.some(m))
              ? s._(/*BTDS*/ "Add to list")
              : s._(/*BTDS*/ "Change list")),
          (t[1] = g),
          (t[2] = h),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== d || t[8] !== p
        ? ((b = function () {
            if (o("WAWebMobilePlatforms").isSMB()) {
              i == null || i();
              return;
            }
            var e = function (t) {
              var e = t === void 0 ? !1 : t,
                r = [o("WAWebStateUtils").unproxy(n)],
                i;
              (e
                ? (i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                    .LIST_NUX)
                : a === "chat-header"
                  ? (i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                      .CHAT_MORE_OPTIONS)
                  : (i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                      .CHAT_LONG_PRESS_OPTIONS),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable,
                    {
                      modelsToUpdate: r,
                      onClose: o("WAWebModalManager").closeModalManager,
                      entryPoint: i,
                    },
                  ),
                ));
            };
            d
              ? o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable,
                    {
                      onContinue: function () {
                        (p(), e(!0));
                      },
                    },
                  ),
                )
              : e();
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = i),
          (t[7] = d),
          (t[8] = p),
          (t[9] = b))
        : (b = t[9]);
      var v = b,
        S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S =
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_change_list_wds_submenu",
            ) === !0 && !o("WAWebMobilePlatforms").isSMB()),
          (t[10] = S))
        : (S = t[10]);
      var R = S,
        L =
          a === "chat-header"
            ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .CHAT_MORE_OPTIONS
            : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .CHAT_LONG_PRESS_OPTIONS,
        E,
        k;
      (t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            R && o("WAWebListSubmenuContentLoadable").requireBundle();
          }),
          (k = [R]),
          (t[11] = E),
          (t[12] = k))
        : ((E = t[11]), (k = t[12])),
        c(E, k));
      var I;
      t[13] !== n || t[14] !== g || t[15] !== L
        ? ((I = R
            ? u.jsx(
                o("WAWebListSubmenuContentLoadable").ListSubmenuContentLoadable,
                { chat: n, chatLabels: g, entryPoint: L },
              )
            : void 0),
          (t[13] = n),
          (t[14] = g),
          (t[15] = L),
          (t[16] = I))
        : (I = t[16]);
      var T = I,
        D = R ? r("WAWebNoop") : v,
        x;
      return (
        t[17] !== C || t[18] !== T || t[19] !== D
          ? ((x = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
                title: C,
                onPress: D,
                hasSubmenu: R,
                submenuContent: T,
                testid: void 0,
              },
              "EditList",
            )),
            (t[17] = C),
            (t[18] = T),
            (t[19] = D),
            (t[20] = x))
          : (x = t[20]),
        x
      );
    }
    function m(e) {
      return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
    }
    l.default = d;
  },
  226,
);
