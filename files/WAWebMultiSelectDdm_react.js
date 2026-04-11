__d(
  "WAWebMultiSelectDdm.react",
  [
    "fbt",
    "WALogger",
    "WAWebChangeEphemeralDurationChatAction",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebChevronCustomIcons",
    "WAWebDisappearingMessageChatPickerWamEvent",
    "WAWebDropdownItem.react",
    "WAWebEphemeralConstants",
    "WAWebEphemeralityDurations",
    "WAWebModalManager",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumDmChatPickerEventNameType",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "asyncToGeneratorRuntime",
    "countWhere",
    "err",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
        durationCTA: {
          display: "x78zum5",
          justifyContent: "x1qughib",
          alignItems: "x6s0dn4",
          textAlign: "x1yc453h",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "xee4sfp",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "x1y55ic2",
          backgroundColor: "x1280gxy",
          ":hover_backgroundColor": "x17gydlx",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        paddingVert16: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
        paddingHoriz32: {
          paddingInlineStart: "x1m4z3lf",
          paddingInlineEnd: "x1evaxtz",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function g(e) {
      var t = e.initialDuration,
        n = e.onSelect,
        a = _(!1),
        i = a[0],
        l = a[1],
        u = _(
          t != null && t > 0 ? t : o("WAWebEphemeralConstants").NINETY_DAYS,
        ),
        d = u[0],
        m = u[1],
        g = p(),
        h;
      if (i) {
        var y = function (t) {
            (m(t), n(t));
          },
          C = {
            menu: o("WAWebEphemeralityDurations")
              .getDefaultEphemeralityDurations()
              .filter(function (e) {
                return e.value > 0;
              })
              .map(function (e) {
                return c.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    action: function () {
                      return y(e.value);
                    },
                    selected: d === e.value,
                    testid: void 0,
                    children: e.label,
                  },
                  "dm-duration-dd-" + e.value,
                );
              }),
            anchor: g.current,
          };
        h = c.jsx(o("WAWebUimUie.react").UIE, {
          dismissOnWindowResize: !0,
          displayName: "ChatContextMenu",
          escapable: !0,
          popable: !0,
          requestDismiss: function () {
            return l(!1);
          },
          children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C }),
        });
      }
      return c.jsxs(r("WAWebUnstyledButton.react"), {
        onClick: function () {
          return l(!0);
        },
        ref: g,
        xstyle: [f.durationCTA, f.paddingVert16, f.paddingHoriz32],
        children: [
          c.jsxs("div", {
            children: [
              c.jsx(o("WAWebText.react").WAWebTextTitle, {
                children: s._(/*BTDS*/ "Disappearing message timer"),
              }),
              c.jsx(o("WAWebText.react").WAWebTextMuted, {
                as: "h1",
                children: o("WAWebEphemeralityDurations").durationToLabel(d),
              }),
            ],
          }),
          c.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
            iconXstyle: f.secondaryColor,
            height: 24,
          }),
          h,
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t, n) {
      switch (e) {
        case o("WAWebEphemeralConstants").ONE_DAY:
          return s._(
            /*BTDS*/ '_j{"*":"You applied a 24 hour message timer to {appliedChatCount} of your existing chats.","_1":"You applied a 24 hour message timer to 1 of your existing chats."}',
            [s._plural(t, "appliedChatCount")],
          );
        case o("WAWebEphemeralConstants").SEVEN_DAYS:
          return s._(
            /*BTDS*/ '_j{"*":"You applied a 7 day message timer to {appliedChatCount} of your existing chats.","_1":"You applied a 7 day message timer to 1 of your existing chats."}',
            [s._plural(t, "appliedChatCount")],
          );
        case o("WAWebEphemeralConstants").NINETY_DAYS:
          return s._(
            /*BTDS*/ '_j{"*":"You applied a 90 day message timer to {appliedChatCount} of your existing chats.","_1":"You applied a 90 day message timer to 1 of your existing chats."}',
            [s._plural(t, "appliedChatCount")],
          );
        default:
          throw r("err")("Duration passed to DM Chat Picker invalid " + e);
      }
    }
    function y(t) {
      var a = t.entryPoint,
        i = t.initialDuration,
        l = t.ref,
        u = _(0),
        d = u[0],
        p = u[1],
        f = _(
          i != null && i > 0 ? i : o("WAWebEphemeralConstants").NINETY_DAYS,
        ),
        y = f[0],
        C = f[1];
      m(function () {
        new (o(
          "WAWebDisappearingMessageChatPickerWamEvent",
        ).DisappearingMessageChatPickerWamEvent)({
          dmChatPickerEntryPoint: a,
          dmChatPickerEventName: o("WAWebWamEnumDmChatPickerEventNameType")
            .DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_TRAY_OPEN,
          ephemeralityDuration: y,
        }).commit();
      }, []);
      var b = c.jsx(g, { initialDuration: y, onSelect: C }),
        v = function (t, n) {
          var e = r("countWhere")(t, function (e) {
              return o("WAWebChatGetters").getIsGroup(e);
            }),
            i = r("countWhere")(t, function (e) {
              return e instanceof o("WAWebChatModel").Chat
                ? !o("WAWebChatEphemerality").isEphemeralSettingOn(e)
                : !1;
            });
          new (o(
            "WAWebDisappearingMessageChatPickerWamEvent",
          ).DisappearingMessageChatPickerWamEvent)({
            dmChatPickerEntryPoint: a,
            dmChatPickerEventName: n,
            ephemeralityDuration: y,
            chatsSelected: t.length,
            groupChatsSelected: e,
            totalChatsInChatPicker: d,
            newlyEphemeralChats: i,
          }).commit();
        },
        S = function (t) {
          p(t.length);
        },
        R = function (t) {
          var e = t;
          (v(
            e,
            o("WAWebWamEnumDmChatPickerEventNameType")
              .DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_TRAY_EXIT,
          ),
            o("WAWebModalManager").ModalManager.close());
        },
        L = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.selectedItems,
              a = n;
            (v(
              a,
              o("WAWebWamEnumDmChatPickerEventNameType")
                .DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_CHATS_SELECTED,
            ),
              o("WAWebModalManager").ModalManager.close());
            var i = 0,
              l = 0,
              u = yield o(
                "WAWebChangeEphemeralDurationChatAction",
              ).bulkChangeEphemeralDuration(
                a,
                y,
                o("WAWebWamEnumEphemeralSettingEntryPointType")
                  .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_PICKER,
              ),
              m = [],
              p = 0;
            (u.map(function (e) {
              switch (e.status) {
                case "fulfilled":
                  i++;
                  break;
                case "rejected":
                  l++;
                  break;
                default:
                  (p++, m.length < 3 && m.push(e.status));
              }
            }),
              p > 0 &&
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "bulkChangeEphemeralDuration: ",
                      " unknown status ",
                      "",
                    ])),
                  p,
                  m,
                ),
              r("gkx")("26258") ||
                (i > 0 &&
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, { msg: h(y, i, d) }),
                  ),
                l > 0 &&
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ '_j{"*":"An error occurred while trying to change the message timer for {errorCount} of your chats.","_1":"An error occurred while trying to change the message timer for 1 of your chats."}',
                        [s._plural(l, "errorCount")],
                      ),
                    }),
                  )));
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        E = function (t) {
          var e;
          return !!(
            (t instanceof o("WAWebChatModel").Chat &&
              !o("WAWebChatEphemerality").shouldShowEphemeralSetting(t)) ||
            (t instanceof o("WAWebChatModel").Chat &&
              o("WAWebChatGetters").getIsGroup(t) &&
              !((e = t.groupMetadata) != null && e.canSetEphemeralSetting()))
          );
        },
        k = function (t, n) {
          if (n) return s._(/*BTDS*/ "You can't edit group settings");
        };
      return c.jsx(o("WAWebSelectModal.react").SelectModal, {
        customHeader: b,
        customItemSecondaryText: k,
        ephemeralIcon: "conversation-header",
        excludeContacts: !0,
        getSelectionSummary: function (t) {
          return s._(
            /*BTDS*/ '_j{"*":"{number} chats selected","_1":"1 chat selected"}',
            [s._plural(t.length, "number")],
          );
        },
        isDisabled: E,
        listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
        multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
          .FooterType.CONFIRM,
        onCancel: R,
        onConfirm: L,
        onDataLoaded: S,
        ref: l,
        singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType
          .CONFIRM,
        testid: void 0,
        title: s._(/*BTDS*/ "Select chats"),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
