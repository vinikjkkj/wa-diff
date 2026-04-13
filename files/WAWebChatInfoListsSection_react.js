__d(
  "WAWebChatInfoListsSection.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatInfoDrawerSection.react",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListPeopleRefreshedIcon.react",
    "WAWebListsIntroPopupLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSMBListsIntroPopupLoadable",
    "WAWebSchemaLabel",
    "WAWebStateUtils",
    "WAWebWamEnumUpdateEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.chat,
        a = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        i = r("useWAWebNux")(a),
        l = i[0],
        c = i[1],
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            o("WAWebChatGetters").getLabels,
            o("WAWebFrontendChatGetters").getIsFavorite,
            o("WAWebChatGetters").getIsGroup,
          ]),
          (t[0] = m))
        : (m = t[0]);
      var p = o("useWAWebChatValues").useChatValues(n.id, m),
        _ = p[0],
        f = p[1],
        g = p[2],
        h;
      t[1] !== _ || t[2] !== f
        ? ((h =
            (_ == null || _.length === 0) &&
            !(f && o("WAWebLabelCollection").LabelCollection.some(d))
              ? s._(/*BTDS*/ "Add to list")
              : s._(/*BTDS*/ "Change list")),
          (t[1] = _),
          (t[2] = f),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C;
      if (t[4] !== n || t[5] !== g || t[6] !== l || t[7] !== c) {
        var b = function () {
          var e = function (t) {
            var e = t === void 0 ? !1 : t,
              r = [o("WAWebStateUtils").unproxy(n)],
              a;
            (e
              ? (a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .LIST_NUX)
              : g
                ? (a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                    .GROUP_INFO)
                : (a = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                    .CONTACT_INFO),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable,
                  {
                    modelsToUpdate: r,
                    onClose: o("WAWebModalManager").closeModalManager,
                    entryPoint: a,
                  },
                ),
              ));
          };
          if (l) {
            var t = o("WAWebMobilePlatforms").isSMB()
              ? o("WAWebSMBListsIntroPopupLoadable").SMBListsIntroPopupLoadable
              : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
            o("WAWebModalManager").ModalManager.open(
              u.jsx(t, {
                onContinue: function () {
                  (c(), e(!0));
                },
              }),
            );
          } else e();
        };
        ((C = { onClick: b, testid: "li-lists" }),
          (t[4] = n),
          (t[5] = g),
          (t[6] = l),
          (t[7] = c),
          (t[8] = C));
      } else C = t[8];
      var v = C,
        S;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(
            o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon,
            {},
          )),
          (t[9] = S))
        : (S = t[9]);
      var R;
      return (
        t[10] !== v || t[11] !== y
          ? ((R = u.jsx(
              o("WAWebChatInfoDrawerSection.react")
                .ChatInfoDrawerButtonsSection,
              {
                children: u.jsx(
                  r("WAWebDrawerButtonRefreshed.react"),
                  babelHelpers.extends({ icon: S }, v, { children: y }),
                ),
              },
            )),
            (t[10] = v),
            (t[11] = y),
            (t[12] = R))
          : (R = t[12]),
        R
      );
    }
    function d(e) {
      return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
    }
    l.default = c;
  },
  226,
);
