__d(
  "WAWebCustomerProfileNotesField.react",
  [
    "fbt",
    "WAJids",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebLinkify",
    "WAWebNoop",
    "WAWebNoteAction",
    "WAWebNotesLogEvents",
    "WAWebNotesPrivacyStrings",
    "WAWebNotesUtils",
    "WAWebRichTextField.react",
    "WAWebRichTextFieldEmojiTextBlock.react",
    "WDSButton.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcEdit.react",
    "WDSIconIcStickyNote2.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsyncSaving",
    "useWAWebBeforeUnload",
    "useWAWebOnScreen",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = 100,
      h = {
        blockQuoteEnabled: !0,
        bulletPointsEnabled: !0,
        floatingToolbarEnabled: !0,
        inlineCodeEnabled: !0,
        linksEnabled: !0,
        numberedListEnabled: !0,
        textFormatEnabled: !0,
        textFormatShortcutsEnabled: !0,
      },
      y = {
        row: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        editButtonContainer: {
          marginInlineStart: "xvc5jky",
          opacity: "xg01cxk",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        editButtonVisible: { opacity: "x1hc1fzr", $$css: !0 },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
        fieldContainer: {
          flexGrow: "x1iyjqo2",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        editActions: {
          columnGap: "x1trrmfo",
          marginTop: "x1380le5",
          width: "xh8yej3",
          $$css: !0,
        },
        richTextOverride: {
          borderTopColor: "x1v8p93f",
          borderBottomColor: "x16stqrj",
          borderTopStyle: "x1ejq31n",
          borderBottomStyle: "x1sy0etr",
          borderTopWidth: "x972fbf",
          borderBottomWidth: "x1qhh985",
          borderInlineStartColor: "xv5lvn5",
          borderInlineEndColor: "x1o3jo1z",
          borderInlineStartStyle: "xstzfhl",
          borderInlineEndStyle: "x18oe1m7",
          borderInlineStartWidth: "x14e42zd",
          borderInlineEndWidth: "x10w94by",
          paddingTop: "xexx8yu",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function C(e) {
      var t,
        n,
        r = e.contact,
        a = e.noteAsyncState,
        i = o("WAJids").validateChatJid(
          (t = (n = r.id) == null ? void 0 : n.toJid()) != null ? t : "",
        );
      return i == null
        ? null
        : u.jsx(b, { contact: r, chatJid: i, noteAsyncState: a });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        a = e.chatJid,
        i = e.contact,
        l = e.noteAsyncState,
        s = l.value,
        c = (t = s == null ? void 0 : s.content) != null ? t : "",
        m = d(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e !== c)
                  return (
                    o("WAWebNotesLogEvents").logNoteSaved(i, {
                      content_existed: c !== "",
                      has_content: e !== "",
                      length: e.length,
                      previous_length: c.length,
                    }),
                    s == null
                      ? o("WAWebNoteAction").noteAddAction("unstructured", a, e)
                      : o("WAWebNoteAction").noteEditAction(
                          s.id,
                          "unstructured",
                          a,
                          e,
                          s.createdAt,
                        )
                  );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [a, i, s, c],
        ),
        p = r("useWAWebAsyncSaving")(m),
        _ = p[1];
      return l.error != null || l.loading
        ? null
        : u.jsx(R, {
            contact: i,
            children: u.jsx(v, { contact: i, noteContent: c, saveNote: _ }),
          });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.contact,
        n = e.noteContent,
        a = e.saveNote,
        i = f(!1),
        l = i[0],
        c = i[1],
        _ = f(!1),
        C = _[0],
        b = _[1],
        v = f(n),
        R = v[0],
        L = v[1],
        E = f(!1),
        k = E[0],
        I = E[1],
        T = f(!1),
        D = T[0],
        x = T[1],
        $ = S(t, l);
      m(
        function () {
          return L(n);
        },
        [n],
      );
      var P = d(
        function () {
          return { showConfirmationDialog: R !== n };
        },
        [R, n],
      );
      r("useWAWebBeforeUnload")(P);
      var N = d(function () {
          b(!0);
        }, []),
        M = d(function () {
          b(!1);
        }, []),
        w = d(
          function () {
            (L(n),
              I(!1),
              c(!0),
              o("WAWebNotesLogEvents").logEditModeOpened(t),
              o("WAWebNotesLogEvents").logEditModeSeen(t, {
                content_existed: n !== "",
              }));
          },
          [t, n],
        ),
        A = d(
          function () {
            (L(n), c(!1));
          },
          [n],
        ),
        F = d(
          function () {
            (R !== n && a(R), c(!1));
          },
          [R, n, a],
        ),
        O = p(
          function () {
            return l ? (k ? null : r("WAWebNotesPrivacyStrings")()) : null;
          },
          [l, k],
        ),
        B = p(
          function () {
            return {
              formatters: o("WAWebFormatConfiguration").Conversation({
                links: o("WAWebLinkify").findLinks(n, !0),
                parseInlineCode: !0,
                parseLists: !0,
                parseQuotes: !0,
                trusted: !0,
              }),
              onReadMore: function () {
                (o("WAWebNotesLogEvents").logReadMorePressed(t), x(!0));
              },
              preserveWhitespace: !0,
              readMoreText: s._(/*BTDS*/ "Read more"),
              textLimit: D ? 1 / 0 : g,
            };
          },
          [t, n, D],
        ),
        W = s._(/*BTDS*/ "Notes");
      if (l) {
        var q;
        return u.jsxs((q = o("WAWebFlex.react")).FlexColumn, {
          align: "stretch",
          xstyle: y.row,
          children: [
            u.jsxs(q.FlexRow, {
              align: "start",
              gap: 12,
              children: [
                u.jsx(q.FlexItem, {
                  xstyle: y.iconContainer,
                  children: u.jsx(r("WDSIconIcStickyNote2.react"), {
                    width: 24,
                    height: 24,
                  }),
                }),
                u.jsxs(q.FlexColumn, {
                  xstyle: y.fieldContainer,
                  children: [
                    u.jsxs("fieldset", {
                      className:
                        "xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xdj266r x14z9mp xat24cr x1lziwak x16ovd2e x12xbjc7 x1iw51ew xde1mab xh8yej3",
                      children: [
                        u.jsx("legend", {
                          className: "xhslqc4 x1pg5gke x181vq82 x1uc92m",
                          children: W,
                        }),
                        u.jsx(
                          o("WAWebRichTextField.react").RichTextField,
                          babelHelpers.extends(
                            {
                              testid: void 0,
                              value: R,
                              lockable: !1,
                              lowProfile: !0,
                              hideFloatingLabel: !0,
                              managed: !1,
                              multiline: !0,
                              enterIsNewLine: !0,
                              minVisibleLines: 3,
                              emojiBtnPosition: "side",
                              shutEmojiPickerOnSelect: !0,
                              selectOnMount: !1,
                              maxLength: o("WAWebNotesUtils").MAX_NOTE_LENGTH,
                              isRefresh: !0,
                              containerXstyle: y.richTextOverride,
                              onChange: function (t) {
                                var e = t.text;
                                (e !== R && $(R !== ""), L(e), I(!0));
                              },
                              onCancel: A,
                            },
                            h,
                          ),
                        ),
                      ],
                    }),
                    O != null &&
                      u.jsx("div", {
                        className: "xav9cv8 x12w63v0",
                        children: u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "contentDeemphasized",
                          children: O,
                        }),
                      }),
                  ],
                }),
              ],
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              xstyle: y.editActions,
              children: [
                u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcClose.react"),
                  size: "small",
                  variant: "tonal",
                  onPress: A,
                  "aria-label": s._(/*BTDS*/ "Cancel"),
                }),
                u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcCheck.react"),
                  size: "small",
                  variant: "filled",
                  onPress: F,
                  "aria-label": s._(/*BTDS*/ "Confirm"),
                }),
              ],
            }),
          ],
        });
      }
      return u.jsx("div", {
        role: "group",
        onMouseEnter: N,
        onMouseLeave: M,
        className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n",
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: n !== "" ? "start" : "center",
          gap: 12,
          xstyle: y.row,
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: y.iconContainer,
              children: u.jsx(r("WDSIconIcStickyNote2.react"), {
                width: 24,
                height: 24,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: y.fieldContainer,
              children:
                n !== ""
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "contentDeemphasized",
                          children: W,
                        }),
                        u.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
                          testid: void 0,
                          textContent: n,
                          settings: B,
                          isRefresh: !0,
                        }),
                      ],
                    })
                  : u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      maxLines: 1,
                      children: s._(/*BTDS*/ "Add notes"),
                    }),
            }),
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: [y.editButtonContainer, C && y.editButtonVisible],
              children: u.jsx("button", {
                className:
                  "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
                onClick: w,
                "aria-label": s._(/*BTDS*/ "Edit Notes"),
                children: u.jsx(r("WDSIconIcEdit.react"), {
                  width: 20,
                  height: 20,
                }),
              }),
            }),
          ],
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      var n = _(!1);
      m(
        function () {
          t && (n.current = !1);
        },
        [t],
      );
      var r = d(
        function (t) {
          n.current ||
            (o("WAWebNotesLogEvents").logStartedTypingNote(e, {
              content_existed: t,
            }),
            (n.current = !0));
        },
        [e],
      );
      return r;
    }
    function R(e) {
      var t = e.children,
        n = e.contact,
        a = _(!1),
        i = _(),
        l = r("useWAWebOnScreen")(i, r("WAWebNoop"));
      return (
        m(
          function () {
            l &&
              !a.current &&
              (o("WAWebNotesLogEvents").logNoteViewed(n), (a.current = !0));
          },
          [n, l],
        ),
        u.jsx("span", { ref: i, children: t })
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
