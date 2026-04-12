__d(
  "WAWebMixedMultiSelectBar.react",
  [
    "cx",
    "fbt",
    "WAWebBizChatAssignmentAiRepliesModal.react",
    "WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react",
    "WAWebBizChatAssignmentModal.react",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatAssignmentWithContainerIcon.react",
    "WAWebChatModel",
    "WAWebClassnames",
    "WAWebCommonCTWADataSharing",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebLabelOffRefreshedIcon.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebManageLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebQplFlowWrapper",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSIconIcClose.react",
    "WDSIconIcLabel.react",
    "qpl",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c.useEffect,
      p = r("qpl")._(701183376, "3423");
    function _(t) {
      "use no forget";
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.labelEditEnabled,
        s = l === void 0 ? !1 : l,
        c = i.multiSelectEntryPoint,
        _ = i.onCancel,
        g = i.onDelete,
        h = i.onRemoveLabel,
        y = i.selectedModels,
        C =
          c ===
          o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint
            .ChatAssignment,
        b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        v = y.getSelected(),
        S = v.length,
        R = function () {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
              onLabelUpdateComplete: _,
              modelsToUpdate: v,
              onClose: o("WAWebModalManager").closeModalManager,
              entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .CHAT_LONG_PRESS_OPTIONS,
            }),
          );
        },
        L = function () {
          var e = v.reduce(function (e, t) {
            return (t instanceof o("WAWebChatModel").Chat && e.push(t), e);
          }, []);
          r(
            "WAWebSmbDataSharingOptInModalDialog",
          ).maybeShowLabelDataSharingDialog(
            e,
            r("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues
              .CHAT,
            R,
            o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
          );
        },
        E = r("useWAWebStableCallback")(_);
      (m(
        function () {
          S === 0 && E();
        },
        [S, E],
      ),
        o("useWAWebListener").useListener(y, "all", b));
      var k = v.length,
        I,
        T,
        D,
        x;
      if (C && k > 0) {
        var $ = function () {
          var e = v;
          if (
            (o("WAWebQplFlowWrapper").QPL.markerStart(p, {
              annotations: {
                string: { CHAT_ASSIGNMENT_ENTRY_POINT: "MULTI_SELECT" },
              },
            }),
            o("WAWebChatAssignmentUtils").canAssignAllChats(e) === !1)
          ) {
            if (e.length === 1) {
              o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), {
                  chat: e[0],
                }),
              );
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              d.jsx(
                r("WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react"),
                {},
              ),
            );
            return;
          }
          o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebBizChatAssignmentModal.react"), {
              chats: e,
              onSave: _,
              entryPoint: o("WAWebChatAssignmentLogEvents.flow")
                .ChatAssignmentEntryPointType.MULTI_SELECT,
            }),
          );
        };
        I = d.jsx(f, {
          testid: void 0,
          Icon: o("WAWebChatAssignmentWithContainerIcon.react")
            .ChatAssignmentWithContainerIcon,
          disabled: !k,
          title: u._(/*BTDS*/ "Assign chat"),
          onClick: $,
        });
      }
      var P = o("WAWebListsGatingUtils").isListsEnabled();
      if (s && k > 0) {
        var N = P ? u._(/*BTDS*/ "Add to list") : u._(/*BTDS*/ "Add label");
        T = d.jsx(f, {
          testid: void 0,
          Icon: P ? o("WAWebListPeopleIcon.react").ListPeopleIcon : void 0,
          wdsIcon: P
            ? void 0
            : d.jsx(r("WDSIconIcLabel.react"), { testid: void 0 }),
          disabled: !k,
          title: N,
          onClick: L,
        });
      }
      if (h && k > 0) {
        var M = P
          ? u._(/*BTDS*/ "Remove from a list")
          : u._(/*BTDS*/ "Remove label");
        x = d.jsx(f, {
          testid: void 0,
          Icon: o("WAWebLabelOffRefreshedIcon.react").LabelOffRefreshedIcon,
          disabled: !k,
          title: M,
          onClick: h,
        });
      }
      if (g && k > 0) {
        var w = P ? u._(/*BTDS*/ "Delete list") : u._(/*BTDS*/ "Delete label");
        D = d.jsx(f, {
          testid: void 0,
          Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
          disabled: !k,
          title: w,
          onClick: g,
        });
      }
      var A = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
        ((n = {}),
        (n._akao = i.theme === "drawer-header"),
        (n._akap = i.theme === "chatlist-panel"),
        (n._akan = !0),
        (n._arj9 = !0),
        n),
      );
      return d.jsxs("div", {
        className: A,
        ref: a,
        children: [
          d.jsx(f, {
            testid: void 0,
            Icon: r("WDSIconIcClose.react"),
            onClick: i.onCancel,
          }),
          d.jsx("div", {
            className: "_akaq",
            children: u._(
              /*BTDS*/ '_j{"*":"{count} selected","_1":"1 selected"}',
              [u._plural(k, "count")],
            ),
          }),
          I,
          T,
          D,
          x,
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.Icon,
        n = e.customIcon,
        r = e.directional,
        o = e.disabled,
        a = e.onClick,
        i = e.testid,
        l = e.title,
        s = e.wdsIcon;
      return d.jsx("button", {
        "data-testid": void 0,
        className: "_akar",
        title: l,
        onClick: a,
        disabled: o === !0,
        children: s != null ? s : t != null && d.jsx(t, { directional: r }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
