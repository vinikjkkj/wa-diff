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
    "WAWebUnlinkSubgroupsAction",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        checkboxContainer: {
          fontSize: "x1f6kntn",
          lineHeight: "x16h55sf",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.handleRemove,
        a = e.removeDisclaimer,
        i = e.removeParticipantOption,
        l = i === void 0 ? !1 : i,
        d = r("useWAWebToggle")(!1),
        m = d[0],
        p = d[1],
        _,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Remove group from community?")), (t[0] = f))
        : (f = t[0]);
      var g = f;
      if (l) {
        var h;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
              className:
                "x1rg5ohu x1okw0bk x1uuroth x19991ni x1d8287x xwji4o3 x1sa5p1d",
            }),
            (t[1] = h))
          : (h = t[1]);
        var y;
        t[2] !== m || t[3] !== p
          ? ((y = u.jsx(
              "div",
              babelHelpers.extends(
                { "data-testid": "checkbox-remove-orphan-members" },
                h,
                {
                  children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                    onChange: p,
                    checked: m,
                    id: "checkbox-remove-orphan-members",
                  }),
                },
              ),
            )),
            (t[2] = m),
            (t[3] = p),
            (t[4] = y))
          : (y = t[4]);
        var C = y,
          b;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = s._(/*BTDS*/ "Remove group members")), (t[5] = b))
          : (b = t[5]);
        var v = b,
          S;
        t[6] !== a
          ? ((S = u.jsx(o("WAWebText.react").WAWebTextMuted, {
              xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
              children: a,
            })),
            (t[6] = a),
            (t[7] = S))
          : (S = t[7]);
        var R;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = [
              c.checkboxContainer,
              o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
              o("WDSMargins.stylex").wdsMargins.marginEnd0,
            ]),
            (t[8] = R))
          : (R = t[8]);
        var L;
        t[9] !== C
          ? ((L = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: R,
              children: [C, v],
            })),
            (t[9] = C),
            (t[10] = L))
          : (L = t[10]);
        var E;
        (t[11] !== S || t[12] !== L
          ? ((E = u.jsxs(u.Fragment, { children: [S, L] })),
            (t[11] = S),
            (t[12] = L),
            (t[13] = E))
          : (E = t[13]),
          (_ = E));
      }
      var k;
      t[14] !== m || t[15] !== n
        ? ((k = function () {
            return n(m);
          }),
          (t[14] = m),
          (t[15] = n),
          (t[16] = k))
        : (k = t[16]);
      var I;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Remove")), (t[17] = I))
        : (I = t[17]);
      var T = l ? _ : a,
        D;
      return (
        t[18] !== k || t[19] !== T
          ? ((D = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: k,
              okButtonType: "solid-warning",
              okText: I,
              onCancel: o("WAWebModalManager").closeModalManager,
              title: g,
              children: T,
            })),
            (t[18] = k),
            (t[19] = T),
            (t[20] = D))
          : (D = t[20]),
        D
      );
    }
    function m(e) {
      var t,
        a = e.iAmCommunityAdmin,
        i = a === void 0 ? !0 : a,
        l = e.parentId,
        c = e.removedSubgroupTitle,
        m = e.removedSubgroupWid,
        p = e.setLoading,
        _ =
          (t = o("WAWebChatCollection").ChatCollection.get(l)) == null
            ? void 0
            : t.formattedTitle,
        f,
        g = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (e === void 0 && (e = !1),
              o("WAWebModalManager").ModalManager.close(),
              p(!0),
              yield r("WAWebUnlinkSubgroupsAction")(l, [m], e),
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
              u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c }),
            ),
          ],
        )),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(d, {
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
                  u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c }),
                ),
                s._param(
                  "community_title",
                  u.jsx(o("WAWebEmojiText.react").EmojiText, { text: _ }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ '"{group_title}" will no longer be a part of this community. Anyone in this group will still be able to find it from their chats to send messages and make calls.',
              [
                s._param(
                  "group_title",
                  u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c }),
                ),
              ],
            )),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(d, { removeDisclaimer: f, handleRemove: g }),
        ));
    }
    l.handleRemoveSubgroup = m;
  },
  226,
);
