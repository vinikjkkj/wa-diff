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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        a = e.label,
        i;
      if (t[0] !== a.colorIndex) {
        var l;
        ((i =
          (l = a == null ? void 0 : a.colorIndex) != null
            ? l
            : o(
                "WAWebLabelCollection",
              ).LabelCollection.getNextAvailableColor()),
          (t[0] = a.colorIndex),
          (t[1] = i));
      } else i = t[1];
      var d = c(i),
        m = d[0],
        _ = d[1],
        y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function (t) {
            _(t);
          }),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] !== m ||
      t[4] !== a.colorIndex ||
      t[5] !== a.id ||
      t[6] !== a.name ||
      t[7] !== a.predefinedId
        ? ((b = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = m !== a.colorIndex;
              (yield o("WAWebBizLabelEditingAction").labelEditAction(
                a.id,
                a.name,
                a.predefinedId,
                m,
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
          })()),
          (t[3] = m),
          (t[4] = a.colorIndex),
          (t[5] = a.id),
          (t[6] = a.name),
          (t[7] = a.predefinedId),
          (t[8] = b))
        : (b = t[8]);
      var v = b,
        S = h,
        R = g,
        L;
      if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
        var E = o("WAWebListUtils").getAllLabelColors().map(f);
        ((L = r("chunkArray")(E, 5)), (t[9] = L));
      } else L = t[9];
      var k = L,
        I;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Choose color")), (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = {
            type: o("WAWebModal.react").ModalTheme.LabelChooseColor,
            onCancel: o("WAWebModalManager").closeModalManager,
          }),
          (t[11] = T))
        : (T = t[11]);
      var D;
      t[12] !== m
        ? ((D = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebLabelColorPanel.react").LabelColorPicker, {
              colors: k,
              selectedIndex: m,
              onSelect: C,
            }),
          })),
          (t[12] = m),
          (t[13] = D))
        : (D = t[13]);
      var x;
      return (
        t[14] !== v || t[15] !== D
          ? ((x = u.jsx(r("WAWebSavePopup.react"), {
              title: I,
              doSave: v,
              afterSave: S,
              onError: R,
              isValid: !0,
              modalConfig: T,
              tsNavigationData: p,
              children: D,
            })),
            (t[14] = v),
            (t[15] = D),
            (t[16] = x))
          : (x = t[16]),
        x
      );
    }
    function f(e) {
      return { hexColor: e, enabled: !0 };
    }
    function g() {
      var e = d.SaveFailed;
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: m(e) }),
      );
    }
    function h() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Label color saved"),
        }),
      );
    }
    l.default = _;
  },
  226,
);
