__d(
  "WAWebCommunityRemoveSubgroup",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnlinkSubgroupsAction",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        checkboxContainer: {
          fontSize: "x1f6kntn",
          lineHeight: "x16h55sf",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        checkbox: {
          display: "x1rg5ohu",
          flex: "x1okw0bk",
          verticalAlign: "x1uuroth",
          transitionProperty: "x19991ni",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xwji4o3",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.handleRemove,
        a = t.removeDisclaimer,
        i = t.removeParticipantOption,
        l = i === void 0 ? !1 : i,
        u = r("useWAWebToggle")(!1),
        m = u[0],
        p = u[1],
        _,
        f = s._(/*BTDS*/ "Remove group from community?");
      if (l) {
        var g = c.jsx(
            "div",
            babelHelpers.extends(
              { "data-testid": void 0 },
              (e || (e = r("stylex"))).props(
                d.checkbox,
                o("WAWebUISpacing").uiMargin.end10,
              ),
              {
                children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                  onChange: p,
                  checked: m,
                  id: "checkbox-remove-orphan-members",
                }),
              },
            ),
          ),
          h = s._(/*BTDS*/ "Remove group members");
        _ = c.jsxs(c.Fragment, {
          children: [
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              xstyle: o("WAWebUISpacing").uiPadding.bottom20,
              children: a,
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                d.checkboxContainer,
                o("WAWebUISpacing").uiPadding.top20,
                o("WAWebUISpacing").uiMargin.end0,
              ],
              children: [g, h],
            }),
          ],
        });
      }
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: function () {
          return n(m);
        },
        okButtonType: "solid-warning",
        okText: s._(/*BTDS*/ "Remove"),
        onCancel: o("WAWebModalManager").closeModalManager,
        title: f,
        children: l ? _ : a,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = function (t) {
      var e,
        a = t.iAmCommunityAdmin,
        i = a === void 0 ? !0 : a,
        l = t.parentId,
        u = t.removedSubgroupTitle,
        d = t.removedSubgroupWid,
        p = t.setLoading,
        _ =
          (e = o("WAWebChatCollection").ChatCollection.get(l)) == null
            ? void 0
            : e.formattedTitle,
        f,
        g = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (e === void 0 && (e = !1),
              o("WAWebModalManager").ModalManager.close(),
              p(!0),
              yield r("WAWebUnlinkSubgroupsAction")(l, [d], e),
              p(!1));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      if (i) {
        ((f = s._(
          /*BTDS*/ 'You can remove the "{group_title}" group from the community. You can also remove the group and its members who aren\'t part of other groups.',
          [
            s._param(
              "group_title",
              c.jsx(o("WAWebEmojiText.react").EmojiText, { text: u }),
            ),
          ],
        )),
          o("WAWebModalManager").ModalManager.open(
            c.jsx(m, {
              removeDisclaimer: f,
              handleRemove: g,
              removeParticipantOption: !0,
            }),
          ));
        return;
      }
      ((f =
        _ != null
          ? s._(
              /*BTDS*/ '"{group_title}" will no longer be a part of this community "{community_title}." Anyone in this group will still be able to find it from their chats to send messages and make calls.',
              [
                s._param(
                  "group_title",
                  c.jsx(o("WAWebEmojiText.react").EmojiText, { text: u }),
                ),
                s._param(
                  "community_title",
                  c.jsx(o("WAWebEmojiText.react").EmojiText, { text: _ }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ '"{group_title}" will no longer be a part of this community. Anyone in this group will still be able to find it from their chats to send messages and make calls.',
              [
                s._param(
                  "group_title",
                  c.jsx(o("WAWebEmojiText.react").EmojiText, { text: u }),
                ),
              ],
            )),
        o("WAWebModalManager").ModalManager.open(
          c.jsx(m, { removeDisclaimer: f, handleRemove: g }),
        ));
    };
    l.handleRemoveSubgroup = p;
  },
  226,
);
