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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(33),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.isInitialStep,
        m = l.onEnd,
        f = l.startInReorderMode,
        g = s === void 0 ? !1 : s,
        h = f === void 0 ? !1 : f,
        y = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        C = r("useWAWebNux")(y),
        b = C[0],
        v = C[1],
        S;
      n[3] !== m
        ? ((S = {
            onEnd: m,
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          }),
          (n[3] = m),
          (n[4] = S))
        : (S = n[4]);
      var R = o("useWAWebFlow").useFlow(d.Labels, S),
        L = R[0],
        E = R[1],
        k = c(""),
        I = k[0],
        T = k[1];
      if (E.step == null) return null;
      var D;
      n[5] !== E
        ? ((D = function () {
            return E.pop();
          }),
          (n[5] = E),
          (n[6] = D))
        : (D = n[6]);
      var x = D,
        $;
      e: switch (E.step) {
        case d.Labels: {
          var P;
          n[7] !== E
            ? ((P = function (t) {
                (T(t),
                  o("WAWebListsGatingUtils").isListsEnabled()
                    ? E.push(d.EditList)
                    : E.push(d.LabelItem));
              }),
              (n[7] = E),
              (n[8] = P))
            : (P = n[8]);
          var N = P,
            M;
          n[9] !== E || n[10] !== b || n[11] !== v
            ? ((M = function () {
                if (b) {
                  var e = o("WAWebMobilePlatforms").isSMB()
                    ? o("WAWebSMBListsIntroPopupLoadable")
                        .SMBListsIntroPopupLoadable
                    : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(e, {
                      onContinue: function () {
                        (v(), E.push(d.CreateList));
                      },
                    }),
                  );
                } else E.push(d.CreateList);
              }),
              (n[9] = E),
              (n[10] = b),
              (n[11] = v),
              (n[12] = M))
            : (M = n[12]);
          var w = M,
            A;
          (n[13] !== w ||
          n[14] !== N ||
          n[15] !== g ||
          n[16] !== x ||
          n[17] !== i ||
          n[18] !== h
            ? ((A = u.jsx(r("WAWebBizLabelDrawer.react"), {
                ref: i,
                onCreateListClick: w,
                onLabelClick: N,
                onClose: x,
                isInitialStep: g,
                startInReorderMode: h,
              })),
              (n[13] = w),
              (n[14] = N),
              (n[15] = g),
              (n[16] = x),
              (n[17] = i),
              (n[18] = h),
              (n[19] = A))
            : (A = n[19]),
            ($ = A));
          break e;
        }
        case d.LabelItem: {
          var F = _,
            O = p,
            B;
          (n[20] !== I || n[21] !== x
            ? ((B = u.jsx(r("WAWebBizLabelItemDrawer.react"), {
                labelId: I,
                onManageLabels: F,
                onClose: x,
                onRemoveLabel: O,
              })),
              (n[20] = I),
              (n[21] = x),
              (n[22] = B))
            : (B = n[22]),
            ($ = B));
          break e;
        }
        case d.CreateList: {
          var W;
          (n[23] !== x
            ? ((W = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
                onBack: x,
                onClose: x,
                entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .LIST_SETTINGS,
              })),
              (n[23] = x),
              (n[24] = W))
            : (W = n[24]),
            ($ = W));
          break e;
        }
        case d.EditList: {
          var q;
          (n[25] !== I || n[26] !== x || n[27] !== i
            ? ((q = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
                ref: i,
                onBack: x,
                onClose: x,
                listId: I,
                entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .LIST_SETTINGS,
              })),
              (n[25] = I),
              (n[26] = x),
              (n[27] = i),
              (n[28] = q))
            : (q = n[28]),
            ($ = q));
        }
      }
      var U;
      return (
        n[29] !== L || n[30] !== $ || n[31] !== E
          ? ((U = u.jsx(L, { flow: E, children: $ })),
            (n[29] = L),
            (n[30] = $),
            (n[31] = E),
            (n[32] = U))
          : (U = n[32]),
        U
      );
    }
    function p(e, t) {
      var n = [{ id: e, type: "remove" }];
      o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(n, t);
    }
    function _(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
          modelsToUpdate: e,
          onClose: o("WAWebModalManager").closeModalManager,
          entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
            .LIST_SETTINGS,
        }),
      );
    }
    l.default = m;
  },
  98,
);
