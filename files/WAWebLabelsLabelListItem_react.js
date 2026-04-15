__d(
  "WAWebLabelsLabelListItem.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBizLabelChooseColorModal.react",
    "WAWebBizLabelEditModal.react",
    "WAWebBizLabelEditingAction",
    "WAWebCellFrame.react",
    "WAWebChatCell.react",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFavoriteRefreshedIcon.react",
    "WAWebIcLabelFilledIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardListHotKeys.react",
    "WAWebL10N",
    "WAWebLabelCollection",
    "WAWebLabelErrors",
    "WAWebLabelGetters",
    "WAWebLabels.react",
    "WAWebListIcon.react",
    "WAWebListPeopleIcon.react",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebSchemaLabel",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumListAction",
    "WAWebWamSmbListEventReporter",
    "WDSIconIcDelete.react",
    "WDSIconIcEdit.react",
    "WDSIconIcPalette.react",
    "WDSIconIcVisibilityOff.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebContextMenuSafeClick",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        color: { color: "xhslqc4", $$css: !0 },
        iconAlignTop: {
          alignSelf: "xqcrz7y",
          marginTop: "x1f94qq7",
          $$css: !0,
        },
      };
    function _(e) {
      "use no forget";
      var t,
        a = e.detailElement,
        i = e.entryPoint,
        l = e.isFirstItem,
        c = l === void 0 ? !1 : l,
        _ = e.isReorderActive,
        f = e.label,
        g = e.label,
        h = e.onClick,
        y = e.shouldDisplayAutoLabeledText,
        C = e.showContextActions,
        b = e.theme,
        v = d(null),
        S = d(null),
        R = d(null),
        L = r("useWAWebContextMenuSafeClick")(h),
        E = L[0],
        k = L[1],
        I = o("WAWebListsGatingUtils").isListsEnabled(),
        T = m(!1),
        D = T[0],
        x = T[1],
        $ = r("WAWebL10N").isRTL() ? "left" : "right",
        P =
          ((t = {}),
          (t[$] = function () {
            var e;
            (e = S.current) == null || e.focusOnContextMenuButton();
          }),
          (t.enter = function (t) {
            h == null || h(t);
          }),
          (t.space = function (t) {
            (t.preventDefault(), h == null || h(t));
          }),
          t),
        N = function (t) {
          x(!0);
        },
        M = function (t) {
          x(!1);
        },
        w = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        A = function () {
          w();
        };
      o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "label_updated_" + g,
        A,
      );
      var F = o("WAWebLabelCollection").LabelCollection.get(f),
        O = function () {
          F != null &&
            (I && h != null
              ? h()
              : o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebBizLabelEditModal.react"), { label: F }),
                ));
        },
        B = function () {
          F != null &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizLabelChooseColorModal.react"), { label: F }),
            );
        },
        W = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (F != null)
              try {
                try {
                  (yield o("WAWebBizLabelEditingAction").labelDeleteAction(
                    f,
                    F.name,
                    F.colorIndex,
                  ),
                    i != null &&
                      I &&
                      (o("WAWebListsLogging").logListUpdate({
                        listId: Number(f),
                        listAction: o("WAWebWamEnumListAction").LIST_ACTION
                          .DELETE,
                        entryPoint: i,
                      }),
                      o("WAWebWamSmbListEventReporter").logSmbListEvent({
                        labelOperation: o("WAWebWamEnumLabelOperations")
                          .LABEL_OPERATIONS.DELETE,
                        updateEntryPoint: i,
                        listId: Number(f),
                        customListTitle: F.name,
                      })));
                } catch (e) {
                  throw new (o("WAWebLabelErrors").LabelActionError)();
                }
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Label deleted"),
                  }),
                );
              } catch (e) {
                e instanceof o("WAWebLabelErrors").LabelActionError &&
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Failed to delete label"),
                    }),
                  );
              } finally {
                o("WAWebModalManager").ModalManager.close();
              }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        q = function () {
          var e = I
              ? s._(/*BTDS*/ "Delete this list?")
              : s._(/*BTDS*/ "Delete this label?"),
            t = I
              ? s._(
                  /*BTDS*/ "Deleting a list removes it from all contacts and chats. Are you sure you want to delete this list?",
                )
              : s._(
                  /*BTDS*/ "Deleting a label removes it from all messages, contacts, and from the list of labels. Are you sure you want to delete this label?",
                );
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: e,
              onOK: W,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: t,
            }),
          );
        },
        U = u.jsxs(r("WDSMenu.react"), {
          children: [
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcEdit.react"),
                title: s._(/*BTDS*/ "Edit"),
                onPress: O,
                testid: void 0,
              },
              "mi-edit-label",
            ),
            F != null &&
              o("WAWebListUtils").isBuiltInList(F.type) &&
              F.type !== o("WAWebSchemaLabel").ListType.FAVORITES &&
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcVisibilityOff.react"),
                  title: s._(/*BTDS*/ "Disable"),
                  onPress: function () {
                    F != null && o("WAWebListsActions").deactivatePresetList(F);
                  },
                  testid: void 0,
                },
                "mi-disable-list",
              ),
            o("WAWebMobilePlatforms").isSMB() &&
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcPalette.react"),
                  title: s._(/*BTDS*/ "Choose color"),
                  onPress: B,
                  testid: void 0,
                },
                "mi-choose-label-color",
              ),
            F != null &&
              !o("WAWebListUtils").isBuiltInList(F.type) &&
              u.jsxs(u.Fragment, {
                children: [
                  u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
                  u.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcDelete.react"),
                      title: s._(/*BTDS*/ "Delete"),
                      onPress: q,
                      destructive: !0,
                      testid: void 0,
                    },
                    "mi-delete-label",
                  ),
                ],
              }),
          ],
        }),
        V = r("useWDSMenu")({ targetRef: R, menu: U, enableUIM: !1 }),
        H = V.isMenuOpen,
        G = V.menuPortal,
        z = V.openMenu;
      if (!F || !F.name) return null;
      var j = o("WAWebLabelGetters").getHexColor(F);
      if (b === "label-list") {
        var K = function (t) {
            (k(),
              t.anchor instanceof HTMLElement
                ? ((R.current = t.anchor), z())
                : t.event != null && z(t.event));
          },
          Q;
        o("WAWebBizGatingUtils").canDisplayLabel() &&
          (Q = I
            ? u.jsx(r("WAWebListIcon.react"), {
                color: j,
                xstyle: _ !== !0 && p.iconAlignTop,
              })
            : u.jsx(o("WAWebLabels.react").Labels, {
                renderAsCircle: !0,
                theme: "label-list",
                labels: [f],
              }));
        var X = o("WAWebListUtils").getListDisplayName(F.name, F.type),
          Y = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: X,
            ellipsify: !0,
            titlify: !0,
            preformatted: !0,
          });
        return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: v,
          tabIndex: c ? 0 : -1,
          className:
            o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME +
            " x1n2onr6",
          role: "listitem",
          handlers: P,
          onFocus: N,
          onBlur: M,
          children: [
            D &&
              u.jsx("div", {
                className:
                  "x10l6tqk xs7f9wi x1c7jfne x1r4y97 x9q68il xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 xlr9sxt xvvg52n xwd4zgb xq8v1ta x47corl x1vjfegm",
              }),
            u.jsx(r("WAWebChatCell.react"), {
              ref: S,
              theme: o("WAWebBizGatingUtils").labelsEditingEnabled()
                ? "label-list-no-border"
                : "label-list",
              image: Q,
              primary: Y,
              secondary:
                _ === !0
                  ? null
                  : s._(/*BTDS*/ '_j{"*":"{count} chats","_1":"1 chat"}', [
                      s._plural(F.chatCount, "count"),
                    ]),
              detail: a,
              active: H,
              contextMenu: H,
              onClick: E,
              onContext: K,
              contextEnabled: function () {
                return (
                  o("WAWebBizGatingUtils").labelsEditingEnabled() &&
                  C &&
                  F.isImmutable !== !0
                );
              },
              contextMenuControlled: !0,
            }),
            G,
          ],
        });
      }
      var J = null;
      if (I) {
        var Z = o("WAWebMobilePlatforms").isSMB()
          ? u.jsx("div", {
              className: "x78zum5 xl56j7k x6s0dn4 xvy4d1p xxk0z11",
              children: u.jsx(r("WAWebListIcon.react"), { color: j }),
            })
          : u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {
              iconXstyle: p.color,
              viewBox: { x: 2, y: 2, height: 20, width: 20 },
            });
        J = u.jsx("div", {
          className: "x78zum5 x1okw0bk x6s0dn4 x13jy36j xsfy40s",
          children:
            F.type === o("WAWebSchemaLabel").ListType.FAVORITES
              ? u.jsx(
                  o("WAWebFavoriteRefreshedIcon.react").FavoriteRefreshedIcon,
                  {
                    iconXstyle: p.color,
                    viewBox: { x: 2, y: 2, height: 20, width: 20 },
                  },
                )
              : Z,
        });
      } else
        o("WAWebBizGatingUtils").canDisplayLabel() &&
          (J = o("WAWebBizGatingUtils").labelsEditingEnabled()
            ? u.jsx(o("WAWebLabels.react").Labels, {
                renderAsCircle: !0,
                theme: "label-list",
                labels: [f],
              })
            : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
                style: j != null && j !== "" ? { color: j } : {},
              }));
      var ee = o("WAWebListUtils").getListDisplayName(F.name, F.type),
        te = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: ee,
          ellipsify: !0,
          titlify: !0,
        }),
        ne = null;
      y &&
        (ne = I
          ? s._(/*BTDS*/ "Automatically added")
          : s._(/*BTDS*/ "Auto-labeled"));
      var re = "label-selection";
      return (
        I
          ? (re = "lists-assign-modal")
          : o("WAWebBizGatingUtils").labelsEditingEnabled() &&
            (re = "label-selection-redesigned"),
        u.jsx(r("WAWebCellFrame.react"), {
          theme: re,
          image: J,
          customImage: I,
          primary: te,
          secondary: ne,
          onClick: h,
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
