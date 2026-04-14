__d(
  "WAWebBizLabelFlow.react",
  [
    "$InternalEnum",
    "WAWebBizLabelDrawer.react",
    "WAWebBizLabelItemDrawer.react",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebListsIntroPopupLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSMBListsIntroPopupLoadable",
    "WAWebWamEnumUpdateEntryPoint",
    "react",
    "useWAWebFlow",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "Labels",
        "LabelItem",
        "CreateList",
        "EditList",
      ]);
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.isInitialStep,
        l = i === void 0 ? !1 : i,
        s = a.onEnd,
        m = a.startInReorderMode,
        p = m === void 0 ? !1 : m,
        _ = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        f = r("useWAWebNux")(_),
        g = f[0],
        h = f[1],
        y = o("useWAWebFlow").useFlow(d.Labels, {
          onEnd: s,
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        C = y[0],
        b = y[1],
        v = c(""),
        S = v[0],
        R = v[1];
      if (b.step == null) return null;
      var L = function () {
          return b.pop();
        },
        E;
      switch (b.step) {
        case d.Labels: {
          var k = function (t) {
              (R(t),
                o("WAWebListsGatingUtils").isListsEnabled()
                  ? b.push(d.EditList)
                  : b.push(d.LabelItem));
            },
            I = function () {
              if (g) {
                var e = o("WAWebMobilePlatforms").isSMB()
                  ? o("WAWebSMBListsIntroPopupLoadable")
                      .SMBListsIntroPopupLoadable
                  : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(e, {
                    onContinue: function () {
                      (h(), b.push(d.CreateList));
                    },
                  }),
                );
              } else b.push(d.CreateList);
            };
          E = u.jsx(r("WAWebBizLabelDrawer.react"), {
            ref: n,
            onCreateListClick: I,
            onLabelClick: k,
            onClose: L,
            isInitialStep: l,
            startInReorderMode: p,
          });
          break;
        }
        case d.LabelItem: {
          var T = function (t) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable,
                  {
                    modelsToUpdate: t,
                    onClose: o("WAWebModalManager").closeModalManager,
                    entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                      .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                  },
                ),
              );
            },
            D = function (t, n) {
              var e = [{ id: t, type: "remove" }];
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(e, n);
            };
          E = u.jsx(r("WAWebBizLabelItemDrawer.react"), {
            labelId: S,
            onManageLabels: T,
            onClose: L,
            onRemoveLabel: D,
          });
          break;
        }
        case d.CreateList: {
          E = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
            onBack: L,
            onClose: L,
            entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
              .LIST_SETTINGS,
          });
          break;
        }
        case d.EditList: {
          E = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
            ref: n,
            onBack: L,
            onClose: L,
            listId: S,
            entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
              .LIST_SETTINGS,
          });
          break;
        }
      }
      return u.jsx(C, { flow: b, children: E });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
