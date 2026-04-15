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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(21),
        a = t.handleRemove,
        i = t.removeDisclaimer,
        l = t.removeParticipantOption,
        u = l === void 0 ? !1 : l,
        m = r("useWAWebToggle")(!1),
        p = m[0],
        _ = m[1],
        f,
        g;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Remove group from community?")), (n[0] = g))
        : (g = n[0]);
      var h = g;
      if (u) {
        var y;
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (e || (e = r("stylex"))).props(
              d.checkbox,
              o("WAWebUISpacing").uiMargin.end10,
            )),
            (n[1] = y))
          : (y = n[1]);
        var C;
        n[2] !== p || n[3] !== _
          ? ((C = c.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, y, {
                children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                  onChange: _,
                  checked: p,
                  id: "checkbox-remove-orphan-members",
                }),
              }),
            )),
            (n[2] = p),
            (n[3] = _),
            (n[4] = C))
          : (C = n[4]);
        var b = C,
          v;
        n[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(/*BTDS*/ "Remove group members")), (n[5] = v))
          : (v = n[5]);
        var S = v,
          R;
        n[6] !== i
          ? ((R = c.jsx(o("WAWebText.react").WAWebTextMuted, {
              xstyle: o("WAWebUISpacing").uiPadding.bottom20,
              children: i,
            })),
            (n[6] = i),
            (n[7] = R))
          : (R = n[7]);
        var L;
        n[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = [
              d.checkboxContainer,
              o("WAWebUISpacing").uiPadding.top20,
              o("WAWebUISpacing").uiMargin.end0,
            ]),
            (n[8] = L))
          : (L = n[8]);
        var E;
        n[9] !== b
          ? ((E = c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: L,
              children: [b, S],
            })),
            (n[9] = b),
            (n[10] = E))
          : (E = n[10]);
        var k;
        (n[11] !== R || n[12] !== E
          ? ((k = c.jsxs(c.Fragment, { children: [R, E] })),
            (n[11] = R),
            (n[12] = E),
            (n[13] = k))
          : (k = n[13]),
          (f = k));
      }
      var I;
      n[14] !== p || n[15] !== a
        ? ((I = function () {
            return a(p);
          }),
          (n[14] = p),
          (n[15] = a),
          (n[16] = I))
        : (I = n[16]);
      var T;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Remove")), (n[17] = T))
        : (T = n[17]);
      var D = u ? f : i,
        x;
      return (
        n[18] !== I || n[19] !== D
          ? ((x = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: I,
              okButtonType: "solid-warning",
              okText: T,
              onCancel: o("WAWebModalManager").closeModalManager,
              title: h,
              children: D,
            })),
            (n[18] = I),
            (n[19] = D),
            (n[20] = x))
          : (x = n[20]),
        x
      );
    }
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
