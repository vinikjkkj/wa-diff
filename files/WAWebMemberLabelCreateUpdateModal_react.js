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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(60),
        i = e.chat,
        l = e.entryPoint,
        c = e.uiSurface,
        f =
          c === void 0
            ? o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
            : c,
        g,
        h;
      a[0] !== i
        ? ((g = o(
            "WAWebMemberLabelsFrontendUtils",
          ).getMyMemberLabelStringForChat(i)),
          (h = g != null && g.trim() !== ""),
          (a[0] = i),
          (a[1] = g),
          (a[2] = h))
        : ((g = a[1]), (h = a[2]));
      var y = h,
        C = y ? p.UPDATE : p.CREATE,
        b;
      a[3] !== i.id
        ? ((b = i.id.toString()), (a[3] = i.id), (a[4] = b))
        : (b = a[4]);
      var v = b,
        S = y,
        R;
      a[5] !== l || a[6] !== v || a[7] !== S || a[8] !== f
        ? ((R = {
            groupId: v,
            hasMemberTagAtStart: S,
            memberTagEntryPoint: l,
            uiSurface: f,
          }),
          (a[5] = l),
          (a[6] = v),
          (a[7] = S),
          (a[8] = f),
          (a[9] = R))
        : (R = a[9]);
      var L = R,
        E;
      a[10] !== L
        ? ((E = function () {
            o(
              "WAWebGroupMemberTagUpdateLogger",
            ).GroupMemberTagUpdateLogger.logError(L);
          }),
          (a[10] = L),
          (a[11] = E))
        : (E = a[11]);
      var k = E,
        I = m(g != null ? g : ""),
        T = I[0],
        D = I[1],
        x = m(!1),
        $ = x[0],
        P = x[1],
        N;
      a[12] !== i || a[13] !== T || a[14] !== L || a[15] !== k
        ? ((N = function () {
            T.trim() &&
              (P(!0),
              o("WAWebSendMemberLabelAction")
                .sendMemberLabelMsg(i, T.trim())
                .then(function (e) {
                  e.messageSendResult ===
                  o("WAWebSendMsgResultAction").SendMsgResult.OK
                    ? (o(
                        "WAWebGroupMemberTagUpdateLogger",
                      ).GroupMemberTagUpdateLogger.logUpdateClick(L),
                      o("WAWebModalManager").ModalManager.close())
                    : (k(),
                      o("WAWebToastManager").ToastManager.open(
                        u.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Failed to save member tag. Please try again.",
                          ),
                        }),
                      ));
                })
                .catch(function () {
                  (k(),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Failed to save member tag. Please try again.",
                        ),
                      }),
                    ));
                })
                .finally(function () {
                  P(!1);
                }));
          }),
          (a[12] = i),
          (a[13] = T),
          (a[14] = L),
          (a[15] = k),
          (a[16] = N))
        : (N = a[16]);
      var M = N,
        w;
      a[17] !== i || a[18] !== L || a[19] !== k
        ? ((w = function () {
            o("WAWebModalManager").ModalManager.openSupportModal(
              u.jsx(r("WAWebMemberLabelDeleteModal.react"), {
                onDelete: n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (P(!0),
                      yield o("WAWebSendMemberLabelAction")
                        .sendMemberLabelMsg(i, "")
                        .then(function (e) {
                          e.messageSendResult ===
                            o("WAWebSendMsgResultAction").SendMsgResult.OK &&
                            (o(
                              "WAWebGroupMemberTagUpdateLogger",
                            ).GroupMemberTagUpdateLogger.logDeleteConfirm(L),
                            D(""),
                            o(
                              "WAWebModalManager",
                            ).ModalManager.closeSupportModal(),
                            o("WAWebModalManager").ModalManager.close());
                        })
                        .catch(function () {
                          (k(),
                            o("WAWebToastManager").ToastManager.open(
                              u.jsx(o("WAWebToast.react").Toast, {
                                msg: s._(
                                  /*BTDS*/ "Failed to delete member tag. Please try again.",
                                ),
                              }),
                            ));
                        })
                        .finally(function () {
                          P(!1);
                        }));
                  },
                ),
              }),
              { transition: "modal" },
            );
          }),
          (a[17] = i),
          (a[18] = L),
          (a[19] = k),
          (a[20] = w))
        : (w = a[20]);
      var A = w,
        F;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s._(/*BTDS*/ "Save")), (a[21] = F))
        : (F = a[21]);
      var O;
      a[22] !== T || a[23] !== $
        ? ((O =
            $ ||
            T.trim() === "" ||
            !o("WAWebMemberLabelCommonUtils").isMemberLabelStrValid(T)),
          (a[22] = T),
          (a[23] = $),
          (a[24] = O))
        : (O = a[24]);
      var B;
      a[25] !== M || a[26] !== O
        ? ((B = u.jsx(r("WDSButton.react"), {
            label: F,
            onPress: M,
            size: "medium",
            variant: "filled",
            xstyle: _.saveButton,
            disabled: O,
          })),
          (a[25] = M),
          (a[26] = O),
          (a[27] = B))
        : (B = a[27]);
      var W = B,
        q;
      a[28] !== C
        ? ((q =
            C === p.CREATE
              ? s._(/*BTDS*/ "Add member tag")
              : s._(/*BTDS*/ "Edit member tag")),
          (a[28] = C),
          (a[29] = q))
        : (q = a[29]);
      var U = q,
        V = d(),
        H = C === p.CREATE,
        G;
      a[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = u.jsx(r("WDSButton.react"), {
            Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
            onPress: o("WAWebModalManager").closeModalManager,
            variant: "borderless",
          })),
          (a[30] = G))
        : (G = a[30]);
      var z;
      a[31] !== U
        ? ((z = u.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: U,
            }),
          })),
          (a[31] = U),
          (a[32] = z))
        : (z = a[32]);
      var j;
      a[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Delete")), (a[33] = j))
        : (j = a[33]);
      var K;
      a[34] !== A || a[35] !== H
        ? ((K = u.jsx(r("WDSButton.react"), {
            Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
            onPress: A,
            variant: "borderless",
            disabled: H,
          })),
          (a[34] = A),
          (a[35] = H),
          (a[36] = K))
        : (K = a[36]);
      var Q;
      a[37] !== V || a[38] !== H || a[39] !== K
        ? ((Q = u.jsx(r("WDSTooltip.react"), {
            id: V,
            label: j,
            disabled: H,
            children: K,
          })),
          (a[37] = V),
          (a[38] = H),
          (a[39] = K),
          (a[40] = Q))
        : (Q = a[40]);
      var X;
      a[41] !== z || a[42] !== Q
        ? ((X = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: _.headerRow,
            align: "center",
            children: [G, z, Q],
          })),
          (a[41] = z),
          (a[42] = Q),
          (a[43] = X))
        : (X = a[43]);
      var Y = (t = i.formattedTitle) != null ? t : i.name,
        J;
      a[44] !== Y
        ? ((J = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: _.chatTitle,
            align: "center",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              maxLines: 1,
              children: Y,
            }),
          })),
          (a[44] = Y),
          (a[45] = J))
        : (J = a[45]);
      var Z;
      a[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = s._(
            /*BTDS*/ "Share more about yourself or your role with this group. Your tag can be seen by all group members and anyone who joins.",
          )),
          (a[46] = Z))
        : (Z = a[46]);
      var ee;
      a[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: _.descriptionText,
            children: u.jsxs(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: [
                Z,
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
          })),
          (a[47] = ee))
        : (ee = a[47]);
      var te;
      a[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = { className: "xh8yej3" }), (a[48] = te))
        : (te = a[48]);
      var ne, re;
      a[49] !== T
        ? ((ne = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: _.textFieldContainer,
            children: u.jsx(
              "div",
              babelHelpers.extends({}, te, {
                children: u.jsx(r("WDSTextField.react"), {
                  label: "Member tag",
                  maxCharacterCount: 30,
                  value: T,
                  onValueChange: D,
                }),
              }),
            ),
          })),
          (re = u.jsx(r("WAWebMemberLabelCreateUpdateModalPreview.react"), {
            memberLabel: T,
          })),
          (a[49] = T),
          (a[50] = ne),
          (a[51] = re))
        : ((ne = a[50]), (re = a[51]));
      var oe;
      a[52] !== X || a[53] !== J || a[54] !== ne || a[55] !== re
        ? ((oe = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.modalWrapper,
            align: "stretch",
            children: [X, J, ee, ne, re],
          })),
          (a[52] = X),
          (a[53] = J),
          (a[54] = ne),
          (a[55] = re),
          (a[56] = oe))
        : (oe = a[56]);
      var ae;
      return (
        a[57] !== W || a[58] !== oe
          ? ((ae = u.jsx(o("WAWebModal.react").Modal, {
              actions: W,
              type: o("WAWebModal.react").ModalTheme.Auto,
              children: oe,
            })),
            (a[57] = W),
            (a[58] = oe),
            (a[59] = ae))
          : (ae = a[59]),
        ae
      );
    }
    l.MemberLabelCreateUpdateModal = f;
  },
  226,
);
