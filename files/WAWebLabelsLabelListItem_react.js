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
      c = e.useRef,
      d = {
        color: { color: "xhslqc4", $$css: !0 },
        iconAlignTop: {
          alignSelf: "xqcrz7y",
          marginTop: "x1f94qq7",
          $$css: !0,
        },
      };
    function m(e) {
      "use no forget";
      var t,
        a = e.detailElement,
        i = e.entryPoint,
        l = e.isReorderActive,
        m = e.label,
        p = e.label,
        _ = e.onClick,
        f = e.shouldDisplayAutoLabeledText,
        g = e.showContextActions,
        h = e.theme,
        y = c(null),
        C = c(null),
        b = c(null),
        v = r("useWAWebContextMenuSafeClick")(_),
        S = v[0],
        R = v[1],
        L = o("WAWebListsGatingUtils").isListsEnabled(),
        E = r("WAWebL10N").isRTL() ? "left" : "right",
        k =
          ((t = {}),
          (t[E] = function () {
            var e;
            (e = C.current) == null || e.focusOnContextMenuButton();
          }),
          t),
        I = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        D = function () {
          T();
        };
      o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "label_updated_" + p,
        D,
      );
      var x = o("WAWebLabelCollection").LabelCollection.get(m),
        $ = function () {
          x != null &&
            (L && _ != null
              ? _()
              : o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebBizLabelEditModal.react"), { label: x }),
                ));
        },
        P = function () {
          x != null &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizLabelChooseColorModal.react"), { label: x }),
            );
        },
        N = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (x != null)
              try {
                try {
                  (yield o("WAWebBizLabelEditingAction").labelDeleteAction(
                    m,
                    x.name,
                    x.colorIndex,
                  ),
                    i != null &&
                      L &&
                      (o("WAWebListsLogging").logListUpdate({
                        listId: Number(m),
                        listAction: o("WAWebWamEnumListAction").LIST_ACTION
                          .DELETE,
                        entryPoint: i,
                      }),
                      o("WAWebWamSmbListEventReporter").logSmbListEvent({
                        labelOperation: o("WAWebWamEnumLabelOperations")
                          .LABEL_OPERATIONS.DELETE,
                        updateEntryPoint: i,
                        listId: Number(m),
                        customListTitle: x.name,
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
        M = function () {
          var e = L
              ? s._(/*BTDS*/ "Delete this list?")
              : s._(/*BTDS*/ "Delete this label?"),
            t = L
              ? s._(
                  /*BTDS*/ "Deleting a list removes it from all contacts and chats. Are you sure you want to delete this list?",
                )
              : s._(
                  /*BTDS*/ "Deleting a label removes it from all messages, contacts, and from the list of labels. Are you sure you want to delete this label?",
                );
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: e,
              onOK: N,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: t,
            }),
          );
        },
        w = u.jsxs(r("WDSMenu.react"), {
          children: [
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcEdit.react"),
                title: s._(/*BTDS*/ "Edit"),
                onPress: $,
                testid: void 0,
              },
              "mi-edit-label",
            ),
            x != null &&
              o("WAWebListUtils").isBuiltInList(x.type) &&
              x.type !== o("WAWebSchemaLabel").ListType.FAVORITES &&
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcVisibilityOff.react"),
                  title: s._(/*BTDS*/ "Disable"),
                  onPress: function () {
                    x != null && o("WAWebListsActions").deactivatePresetList(x);
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
                  onPress: P,
                  testid: void 0,
                },
                "mi-choose-label-color",
              ),
            x != null &&
              !o("WAWebListUtils").isBuiltInList(x.type) &&
              u.jsxs(u.Fragment, {
                children: [
                  u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
                  u.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcDelete.react"),
                      title: s._(/*BTDS*/ "Delete"),
                      onPress: M,
                      destructive: !0,
                      testid: void 0,
                    },
                    "mi-delete-label",
                  ),
                ],
              }),
          ],
        }),
        A = r("useWDSMenu")({ targetRef: b, menu: w, enableUIM: !1 }),
        F = A.isMenuOpen,
        O = A.menuPortal,
        B = A.openMenu;
      if (!x || !x.name) return null;
      var W = o("WAWebLabelGetters").getHexColor(x);
      if (h === "label-list") {
        var q = function (t) {
            (R(),
              t.anchor instanceof HTMLElement
                ? ((b.current = t.anchor), B())
                : t.event != null && B(t.event));
          },
          U;
        o("WAWebBizGatingUtils").canDisplayLabel() &&
          (U = L
            ? u.jsx(r("WAWebListIcon.react"), {
                color: W,
                xstyle: l !== !0 && d.iconAlignTop,
              })
            : u.jsx(o("WAWebLabels.react").Labels, {
                renderAsCircle: !0,
                theme: "label-list",
                labels: [m],
              }));
        var V = o("WAWebListUtils").getListDisplayName(x.name, x.type),
          H = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: V,
            ellipsify: !0,
            titlify: !0,
            preformatted: !0,
          });
        return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: y,
          tabIndex: 0,
          handlers: k,
          onFocus: I,
          children: [
            u.jsx(r("WAWebChatCell.react"), {
              ref: C,
              theme: o("WAWebBizGatingUtils").labelsEditingEnabled()
                ? "label-list-no-border"
                : "label-list",
              image: U,
              primary: H,
              secondary:
                l === !0
                  ? null
                  : s._(/*BTDS*/ '_j{"*":"{count} chats","_1":"1 chat"}', [
                      s._plural(x.chatCount, "count"),
                    ]),
              detail: a,
              active: F,
              contextMenu: F,
              onClick: S,
              onContext: q,
              contextEnabled: function () {
                return (
                  o("WAWebBizGatingUtils").labelsEditingEnabled() &&
                  g &&
                  x.isImmutable !== !0
                );
              },
              contextMenuControlled: !0,
            }),
            O,
          ],
        });
      }
      var G = null;
      if (L) {
        var z = o("WAWebMobilePlatforms").isSMB()
          ? u.jsx("div", {
              className: "x78zum5 xl56j7k x6s0dn4 xvy4d1p xxk0z11",
              children: u.jsx(r("WAWebListIcon.react"), { color: W }),
            })
          : u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {
              iconXstyle: d.color,
              viewBox: { x: 2, y: 2, height: 20, width: 20 },
            });
        G = u.jsx("div", {
          className: "x78zum5 x1okw0bk x6s0dn4 x13jy36j xsfy40s",
          children:
            x.type === o("WAWebSchemaLabel").ListType.FAVORITES
              ? u.jsx(
                  o("WAWebFavoriteRefreshedIcon.react").FavoriteRefreshedIcon,
                  {
                    iconXstyle: d.color,
                    viewBox: { x: 2, y: 2, height: 20, width: 20 },
                  },
                )
              : z,
        });
      } else
        o("WAWebBizGatingUtils").canDisplayLabel() &&
          (G = o("WAWebBizGatingUtils").labelsEditingEnabled()
            ? u.jsx(o("WAWebLabels.react").Labels, {
                renderAsCircle: !0,
                theme: "label-list",
                labels: [m],
              })
            : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
                style: W != null && W !== "" ? { color: W } : {},
              }));
      var j = o("WAWebListUtils").getListDisplayName(x.name, x.type),
        K = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: j,
          ellipsify: !0,
          titlify: !0,
        }),
        Q = null;
      f &&
        (Q = L
          ? s._(/*BTDS*/ "Automatically added")
          : s._(/*BTDS*/ "Auto-labeled"));
      var X = "label-selection";
      return (
        L
          ? (X = "lists-assign-modal")
          : o("WAWebBizGatingUtils").labelsEditingEnabled() &&
            (X = "label-selection-redesigned"),
        u.jsx(r("WAWebCellFrame.react"), {
          theme: X,
          image: G,
          customImage: L,
          primary: K,
          secondary: Q,
          onClick: _,
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
