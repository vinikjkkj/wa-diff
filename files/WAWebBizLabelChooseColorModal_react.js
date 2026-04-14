__d(
  "WAWebBizLabelChooseColorModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizLabelEditingAction",
    "WAWebFlex.react",
    "WAWebLabelCollection",
    "WAWebLabelColorPanel.react",
    "WAWebListUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSavePopup.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamSmbListEventReporter",
    "asyncToGeneratorRuntime",
    "chunkArray",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = n("$InternalEnum").Mirrored(["SaveFailed"]),
      m = function (t) {
        switch (t) {
          case d.SaveFailed:
            return s._(/*BTDS*/ "Failed to save the label");
        }
      },
      p = { surface: "smb-label-edit-color" };
    function _(e) {
      var t,
        a = e.label,
        i = c(
          (t = a == null ? void 0 : a.colorIndex) != null
            ? t
            : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor(),
        ),
        l = i[0],
        _ = i[1],
        f = function (t) {
          _(t);
        },
        g = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = l !== a.colorIndex;
            (yield o("WAWebBizLabelEditingAction").labelEditAction(
              a.id,
              a.name,
              a.predefinedId,
              l,
            ),
              e &&
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                  labelOperation: o("WAWebWamEnumLabelOperations")
                    .LABEL_OPERATIONS.UPDATED_COLOR,
                  updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                    .UPDATE_ENTRY_POINT.LIST_DETAIL_VIEW,
                  listId: Number(a.id),
                }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        h = function () {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Label color saved"),
            }),
          );
        },
        y = function () {
          var e = d.SaveFailed;
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: m(e) }),
          );
        },
        C = o("WAWebListUtils")
          .getAllLabelColors()
          .map(function (e) {
            return { hexColor: e, enabled: !0 };
          }),
        b = r("chunkArray")(C, 5);
      return u.jsx(r("WAWebSavePopup.react"), {
        title: s._(/*BTDS*/ "Choose color"),
        doSave: g,
        afterSave: h,
        onError: y,
        isValid: !0,
        modalConfig: {
          type: o("WAWebModal.react").ModalTheme.LabelChooseColor,
          onCancel: o("WAWebModalManager").closeModalManager,
        },
        tsNavigationData: p,
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: u.jsx(o("WAWebLabelColorPanel.react").LabelColorPicker, {
            colors: b,
            selectedIndex: l,
            onSelect: f,
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
