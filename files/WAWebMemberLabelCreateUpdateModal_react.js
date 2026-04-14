__d(
  "WAWebMemberLabelCreateUpdateModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCloseRefreshedIcon.react",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebMemberLabelCommonUtils",
    "WAWebMemberLabelCreateUpdateModalPreview.react",
    "WAWebMemberLabelDeleteModal.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSendMemberLabelAction",
    "WAWebSendMsgResultAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumTsSurface",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextField.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useId,
      m = c.useState,
      p = n("$InternalEnum").Mirrored(["CREATE", "UPDATE"]),
      _ = {
        headerRow: {
          boxSizing: "x9f619",
          columnGap: "x1aj3ljl",
          height: "x1peatla",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          $$css: !0,
        },
        chatTitle: {
          height: "x1vqgdyp",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          $$css: !0,
        },
        descriptionText: {
          paddingBottom: "x12xbjc7",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xcldk2z",
          paddingInlineStart: "x1phvje8",
          $$css: !0,
        },
        modalWrapper: { boxSizing: "x9f619", width: "x1czfd9k", $$css: !0 },
        saveButton: {
          marginTop: "x1nmyh1g",
          marginInlineEnd: "xd6izgl",
          marginBottom: "xdqhqc9",
          marginInlineStart: "x6pxu1d",
          $$css: !0,
        },
        textFieldContainer: {
          paddingBottom: "x1l90r2v",
          paddingTop: "xyamay9",
          paddingInlineEnd: "x1xnnf8n",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
      };
    function f(e) {
      var t,
        a = e.chat,
        i = e.entryPoint,
        l = e.uiSurface,
        c =
          l === void 0
            ? o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
            : l,
        f = o("WAWebMemberLabelsFrontendUtils").getMyMemberLabelStringForChat(
          a,
        ),
        g = f != null && f.trim() !== "",
        h = g ? p.UPDATE : p.CREATE,
        y = a.id.toString(),
        C = g,
        b = {
          groupId: y,
          hasMemberTagAtStart: C,
          memberTagEntryPoint: i,
          uiSurface: c,
        },
        v = function () {
          o(
            "WAWebGroupMemberTagUpdateLogger",
          ).GroupMemberTagUpdateLogger.logError(b);
        },
        S = m(f != null ? f : ""),
        R = S[0],
        L = S[1],
        E = m(!1),
        k = E[0],
        I = E[1],
        T = function () {
          R.trim() &&
            (I(!0),
            o("WAWebSendMemberLabelAction")
              .sendMemberLabelMsg(a, R.trim())
              .then(function (e) {
                e.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK
                  ? (o(
                      "WAWebGroupMemberTagUpdateLogger",
                    ).GroupMemberTagUpdateLogger.logUpdateClick(b),
                    o("WAWebModalManager").ModalManager.close())
                  : (v(),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Failed to save member tag. Please try again.",
                        ),
                      }),
                    ));
              })
              .catch(function () {
                (v(),
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Failed to save member tag. Please try again.",
                      ),
                    }),
                  ));
              })
              .finally(function () {
                I(!1);
              }));
        },
        D = function () {
          o("WAWebModalManager").ModalManager.openSupportModal(
            u.jsx(r("WAWebMemberLabelDeleteModal.react"), {
              onDelete: n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (I(!0),
                    yield o("WAWebSendMemberLabelAction")
                      .sendMemberLabelMsg(a, "")
                      .then(function (e) {
                        e.messageSendResult ===
                          o("WAWebSendMsgResultAction").SendMsgResult.OK &&
                          (o(
                            "WAWebGroupMemberTagUpdateLogger",
                          ).GroupMemberTagUpdateLogger.logDeleteConfirm(b),
                          L(""),
                          o(
                            "WAWebModalManager",
                          ).ModalManager.closeSupportModal(),
                          o("WAWebModalManager").ModalManager.close());
                      })
                      .catch(function () {
                        (v(),
                          o("WAWebToastManager").ToastManager.open(
                            u.jsx(o("WAWebToast.react").Toast, {
                              msg: s._(
                                /*BTDS*/ "Failed to delete member tag. Please try again.",
                              ),
                            }),
                          ));
                      })
                      .finally(function () {
                        I(!1);
                      }));
                },
              ),
            }),
            { transition: "modal" },
          );
        },
        x = u.jsx(r("WDSButton.react"), {
          label: s._(/*BTDS*/ "Save"),
          onPress: T,
          size: "medium",
          variant: "filled",
          xstyle: _.saveButton,
          disabled:
            k ||
            R.trim() === "" ||
            !o("WAWebMemberLabelCommonUtils").isMemberLabelStrValid(R),
        }),
        $ =
          h === p.CREATE
            ? s._(/*BTDS*/ "Add member tag")
            : s._(/*BTDS*/ "Edit member tag"),
        P = d(),
        N = h === p.CREATE;
      return u.jsx(o("WAWebModal.react").Modal, {
        actions: x,
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: _.modalWrapper,
          align: "stretch",
          children: [
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: _.headerRow,
              align: "center",
              children: [
                u.jsx(r("WDSButton.react"), {
                  Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
                  onPress: o("WAWebModalManager").closeModalManager,
                  variant: "borderless",
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  grow: 1,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: $,
                  }),
                }),
                u.jsx(r("WDSTooltip.react"), {
                  id: P,
                  label: s._(/*BTDS*/ "Delete"),
                  disabled: N,
                  children: u.jsx(r("WDSButton.react"), {
                    Icon: o("WAWebDeleteRefreshedIcon.react")
                      .DeleteRefreshedIcon,
                    onPress: D,
                    variant: "borderless",
                    disabled: N,
                  }),
                }),
              ],
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _.chatTitle,
              align: "center",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                maxLines: 1,
                children: (t = a.formattedTitle) != null ? t : a.name,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _.descriptionText,
              children: u.jsxs(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: [
                  s._(
                    /*BTDS*/ "Share more about yourself or your role with this group. Your tag can be seen by all group members and anyone who joins.",
                  ),
                  " ",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getGroupMemberTagUrl(),
                    children: u.jsx("span", {
                      className: "xo1mcw5 xk50ysn",
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  }),
                ],
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _.textFieldContainer,
              children: u.jsx("div", {
                className: "xh8yej3",
                children: u.jsx(r("WDSTextField.react"), {
                  label: "Member tag",
                  maxCharacterCount: 30,
                  value: R,
                  onValueChange: L,
                }),
              }),
            }),
            u.jsx(r("WAWebMemberLabelCreateUpdateModalPreview.react"), {
              memberLabel: R,
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.MemberLabelCreateUpdateModal = f));
  },
  226,
);
