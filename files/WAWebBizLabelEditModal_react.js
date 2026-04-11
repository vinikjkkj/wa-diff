__d(
  "WAWebBizLabelEditModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WANullthrows",
    "WAWebBizLabelEditingAction",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebLabelCollection",
    "WAWebLabelColorPanel.react",
    "WAWebLabelConstants",
    "WAWebLabels.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebMobilePlatforms",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebSavePopup.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumListAction",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamLabelEventReporter",
    "WAWebWamSmbListEventReporter",
    "asyncToGeneratorRuntime",
    "chunkArray",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = n("$InternalEnum").Mirrored([
        "NameEmpty",
        "NameAlreadyExists",
        "SaveFailed",
      ]),
      f = function (t) {
        if (o("WAWebListsGatingUtils").isListsEnabled())
          switch (t) {
            case _.NameEmpty:
              return s._(/*BTDS*/ "Choose a name for your list.");
            case _.NameAlreadyExists:
              return s._(
                /*BTDS*/ "This name is in use. Choose a different name.",
              );
            case _.SaveFailed:
              return s._(/*BTDS*/ "Failed to save the list");
          }
        else
          switch (t) {
            case _.NameEmpty:
              return s._(/*BTDS*/ "Label name can't be empty");
            case _.NameAlreadyExists:
              return s._(/*BTDS*/ "Label already exists");
            case _.SaveFailed:
              return s._(/*BTDS*/ "Failed to save the label");
          }
      };
    function g(t) {
      var a,
        i,
        l = o("WAWebListsGatingUtils").isListsEnabled(),
        u = t.label,
        d = p((a = u == null ? void 0 : u.name) != null ? a : ""),
        g = d[0],
        h = d[1],
        y = p(null),
        C = y[0],
        b = y[1],
        v = p(
          o("WAWebMobilePlatforms").isSMB()
            ? (i = u == null ? void 0 : u.colorIndex) != null
              ? i
              : o(
                  "WAWebLabelCollection",
                ).LabelCollection.getNextAvailableColor()
            : null,
        ),
        S = v[0],
        R = v[1],
        L = p(!1),
        E = L[0],
        k = L[1],
        I = m(),
        T = r("WAWebL10N").getFullLocale(),
        D = function (t) {
          var e = t.trim().toLocaleLowerCase(T);
          return e === ""
            ? _.NameEmpty
            : (u == null ? void 0 : u.name.toLocaleLowerCase(T)) !== e &&
                o("WAWebLabelCollection").LabelCollection.some(function (t) {
                  return t.name.toLocaleLowerCase(T) === e;
                })
              ? _.NameAlreadyExists
              : null;
        },
        x = function (t) {
          var e = D(t);
          (h(t), b(e ? f(e) : null));
        },
        $ = function () {
          k(!E);
        },
        P = function (t) {
          (R(t), k(!1));
        },
        N = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            if (u) {
              e = Number(u.id);
              var t = g !== u.name,
                n = o("WAWebLabelConstants").mapLabelNameToPredefinedId(g);
              (yield o("WAWebBizLabelEditingAction").labelEditAction(
                u.id,
                g,
                n,
                S,
              ),
                t &&
                  l &&
                  (o("WAWebListsLogging").logListUpdate({
                    listId: e,
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.RENAME,
                    entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                      .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                  }),
                  o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations")
                      .LABEL_OPERATIONS.RENAME,
                    updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                      .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                    listId: e,
                    customListTitle: g,
                  })));
            } else {
              var r = yield o("WAWebBizLabelEditingAction").labelAddAction(
                g,
                S,
              );
              ((e = r),
                r != null &&
                  l &&
                  (o("WAWebListsLogging").logListUpdate({
                    listId: r,
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                    entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                      .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                    chatsBeforeUpdate: [],
                    addedChats: [],
                    removedChats: [],
                  }),
                  o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations")
                      .LABEL_OPERATIONS.ADD,
                    updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                      .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                    listId: r,
                    customListTitle: g,
                  })));
            }
            (o("WAWebWamLabelEventReporter").logLabelOperationEvent(
              o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.EDIT,
              void 0,
              o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG,
            ),
              u != null &&
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                  labelOperation: o("WAWebWamEnumLabelOperations")
                    .LABEL_OPERATIONS.EDIT,
                  labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS
                    .LABEL,
                  updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                    .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                  listId: e != null ? e : void 0,
                }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        M = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: l ? s._(/*BTDS*/ "List saved") : s._(/*BTDS*/ "Label saved"),
            }),
          );
        },
        w = function (t) {
          var e,
            n = (e = _.cast(t.message)) != null ? e : _.SaveFailed;
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, { msg: f(n) }),
          );
        },
        A = function () {
          return g !== "" && C == null;
        },
        F = o("WAWebListUtils")
          .getAllLabelColors()
          .map(function (e) {
            return { hexColor: e, enabled: !0 };
          }),
        O = r("chunkArray")(F, 5),
        B,
        W;
      return (
        l
          ? ((B = u ? s._(/*BTDS*/ "Edit list") : s._(/*BTDS*/ "Add list")),
            (W = s._(/*BTDS*/ "List")))
          : ((B = u ? s._(/*BTDS*/ "Edit label") : s._(/*BTDS*/ "Add label")),
            (W = s._(/*BTDS*/ "Label"))),
        c.jsxs(r("WAWebSavePopup.react"), {
          title: B,
          doSave: N,
          afterSave: M,
          onError: w,
          isValid: A(),
          modalConfig: {
            type: o("WAWebModal.react").ModalTheme.LabelEdit,
            onCancel: o("WAWebModalManager").closeModalManager,
          },
          tsNavigationData: { surface: "smb-labels-edit" },
          children: [
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: [
                o("WAWebUISpacing").uiPadding.all16,
                o("WAWebUISpacing").uiPadding.top0,
              ],
              children: [
                o("WAWebMobilePlatforms").isSMB() &&
                  S != null &&
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        o("WAWebUISpacing").uiPadding.top8,
                        o("WAWebUISpacing").uiPadding.end16,
                      ),
                      {
                        children: c.jsx(r("WAWebUnstyledButton.react"), {
                          ref: I,
                          onClick: $,
                          children: c.jsx(o("WAWebLabels.react").Label, {
                            color: o("WAWebListUtils").colorIndexToHex(S),
                            renderAsCircle: !0,
                          }),
                        }),
                      },
                    ),
                  ),
                c.jsx("div", {
                  className: "xh8yej3",
                  children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    placeholder: W,
                    value: g,
                    maxLength: o("WAWebLabelConstants").LABEL_NAME_MAX_LENGTH,
                    error: C,
                    onChange: function (t) {
                      var e = t.text;
                      return x(e);
                    },
                    emojiBtnPosition: "side",
                    showRemaining: !0,
                    focusOnMount: !0,
                    testid: void 0,
                  }),
                }),
              ],
            }),
            E &&
              S != null &&
              c.jsx(o("WAWebLabelColorPanel.react").LabelColorPopup, {
                colors: O,
                selectedIndex: S,
                onSelect: P,
                anchor: r("WANullthrows")(I.current),
                onClose: function () {
                  return k(!1);
                },
              }),
          ],
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
