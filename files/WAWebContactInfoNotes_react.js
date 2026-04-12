__d(
  "WAWebContactInfoNotes.react",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebClock",
    "WAWebFormatConfiguration",
    "WAWebLinkify",
    "WAWebNoop",
    "WAWebNoteAction",
    "WAWebNoteCollection",
    "WAWebNotesLogEvents",
    "WAWebNotesPrivacyStrings",
    "WAWebNotesUtils",
    "WAWebRichTextField.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
    "useWAWebAsyncSaving",
    "useWAWebBeforeUnload",
    "useWAWebDebouncedCallback",
    "useWAWebLingeringSavingHint",
    "useWAWebListener",
    "useWAWebOnScreen",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useMemo,
      f = d.useRef,
      g = d.useState,
      h = 2e3,
      y = 500,
      C = 15,
      b = {
        blockQuoteEnabled: !0,
        bulletPointsEnabled: !0,
        floatingToolbarEnabled: !0,
        inlineCodeEnabled: !0,
        linksEnabled: !0,
        numberedListEnabled: !0,
        textFormatEnabled: !0,
        textFormatShortcutsEnabled: !0,
      };
    function v(e) {
      var t,
        n,
        r = e.contact,
        a = o("WAJids").validateChatJid(
          (t = r == null || (n = r.id) == null ? void 0 : n.toJid()) != null
            ? t
            : "",
        );
      return r == null || a == null
        ? null
        : c.jsx(S, { contact: r, chatJid: a });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t,
        a,
        i,
        l = e.chatJid,
        s = e.contact,
        u = L(l),
        d = u.value,
        p = (t = d == null ? void 0 : d.content) != null ? t : "",
        _ = (a = d == null ? void 0 : d.createdAt) != null ? a : null,
        f = (i = d == null ? void 0 : d.modifiedAt) != null ? i : null,
        g = m(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e !== p)
                  return (
                    o("WAWebNotesLogEvents").logNoteSaved(s, {
                      content_existed: p !== "",
                      has_content: e !== "",
                      length: e.length,
                      previous_length: p.length,
                    }),
                    d == null
                      ? o("WAWebNoteAction").noteAddAction("unstructured", l, e)
                      : o("WAWebNoteAction").noteEditAction(
                          d.id,
                          "unstructured",
                          l,
                          e,
                          d.createdAt,
                        )
                  );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [l, s, d, p],
        ),
        h = r("useWAWebAsyncSaving")(g),
        y = h[0],
        C = h[1];
      if (!(u.error != null || u.loading))
        return c.jsx(I, {
          contact: s,
          children: c.jsx(R, {
            contact: s,
            createdAt: _,
            modifiedAt: f,
            note: p,
            saveNote: C,
            savingNote: y,
          }),
        });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.contact,
        n = e.createdAt,
        a = e.modifiedAt,
        i = e.note,
        l = e.saveNote,
        u = e.savingNote,
        d = g(!1),
        f = d[0],
        v = d[1],
        S = g(!1),
        R = S[0],
        L = S[1],
        I = g(!1),
        T = I[0],
        D = I[1],
        x = g(!1),
        $ = x[0],
        P = x[1],
        N = k(t, R),
        M = r("useWAWebLingeringSavingHint")(u, { saveHintMs: y }),
        w = M[0],
        A = M[1],
        F = !R || !f ? s._(/*BTDS*/ "Add notes about your customer.") : "",
        O = g(i),
        B = O[0],
        W = O[1];
      p(
        function () {
          return W(i);
        },
        [i],
      );
      var q = m(
        function () {
          return { showConfirmationDialog: B !== i };
        },
        [B, i],
      );
      r("useWAWebBeforeUnload")(q);
      var U = _(
          function () {
            return E(n, a);
          },
          [n, a],
        ),
        V = _(
          function () {
            return w
              ? s._(/*BTDS*/ "Saving note...")
              : R
                ? T
                  ? U
                  : r("WAWebNotesPrivacyStrings")()
                : U;
          },
          [w, R, T, U],
        ),
        H = m(
          function () {
            B !== i && (W(B), l(B), D(!0));
          },
          [B, i, l],
        ),
        G = r("useWAWebDebouncedCallback")(H, h),
        z = {
          formatters: o("WAWebFormatConfiguration").Conversation({
            links: o("WAWebLinkify").findLinks(i, !0),
            parseInlineCode: !0,
            parseLists: !0,
            parseQuotes: !0,
            trusted: !0,
          }),
          onReadMore: function () {
            (o("WAWebNotesLogEvents").logReadMorePressed(t), P(!0));
          },
          preserveWhitespace: !0,
          readMoreText: s._(/*BTDS*/ "Read more"),
          textLimit: $ ? 1 / 0 : 100,
        };
      return c.jsx("div", {
        "data-testid": void 0,
        className: "x16ovd2e x12xbjc7",
        children: c.jsx(
          o("WAWebRichTextField.react").RichTextField,
          babelHelpers.extends(
            {
              testid: void 0,
              value: B,
              lockable: !0,
              emojiTextSettingsInLockMode: z,
              onBeginEdit: function () {
                (o("WAWebNotesLogEvents").logEditModeOpened(t),
                  o("WAWebNotesLogEvents").logEditModeSeen(t, {
                    content_existed: B !== "",
                  }),
                  L(!0),
                  D(!1));
              },
              onSave: function () {
                (H(), L(!1));
              },
              onCancel: function () {
                (L(!1), W(i));
              },
              onChange: function (t) {
                var e = t.text;
                (e !== B && N(B !== ""), W(e), A(), G());
              },
              onFocus: function () {
                return v(!0);
              },
              onBlur: function () {
                (v(!1), H());
              },
              inputPlaceholder: F,
              hideFloatingLabel: !0,
              managed: !0,
              minVisibleLines: 3,
              enterIsNewLine: !0,
              emojiBtnPosition: "side",
              shutEmojiPickerOnSelect: !0,
              selectOnMount: !1,
              multiline: !0,
              pending: w,
              contextMsg: V,
              lowProfile: V == null,
              showRemaining: !0,
              maxLength: o("WAWebNotesUtils").MAX_NOTE_LENGTH,
              charLimit: C,
            },
            b,
          ),
        ),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(t) {
      var n = g(null),
        a = n[0],
        i = n[1],
        l = g({ error: null, loading: !0, value: null }),
        s = l[0],
        u = l[1],
        c = r("useWAWebAsync")(
          function () {
            return o("WAWebNoteAction").retrieveOnlyNoteForChatJid(t);
          },
          [t],
        ),
        d = m(
          function () {
            var e = o(
              "WAWebNoteCollection",
            ).NoteCollection.maybeGetNoteByChatJid(t);
            (i(e),
              u({
                error: null,
                loading: !1,
                value:
                  e == null
                    ? null
                    : {
                        content: e.content,
                        createdAt: e.createdAt,
                        id: e.id,
                        modifiedAt: e.modifiedAt,
                      },
              }));
          },
          [t],
        );
      return (
        p(
          function () {
            if (
              (c.error != null &&
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[useNoteValues] Error fetching note for chat ",
                      "",
                    ])),
                  t,
                ),
              c.loading || c.error != null)
            ) {
              u(c);
              return;
            }
            d();
          },
          [t, c.loading, c.error, c.value, d],
        ),
        o("useWAWebListener").useListener(
          o("WAWebNoteCollection").NoteCollection,
          "add remove",
          d,
        ),
        o("useWAWebListener").useListener(a, "change", d),
        s
      );
    }
    function E(e, t) {
      return e == null || t == null
        ? null
        : e === t
          ? o("WAWebClock").Clock.addedStr(e)
          : o("WAWebClock").Clock.updatedStr(t);
    }
    function k(e, t) {
      var n = f(!1);
      p(
        function () {
          t && (n.current = !1);
        },
        [t],
      );
      var r = m(
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
    function I(e) {
      var t = e.children,
        n = e.contact,
        a = f(!1),
        i = f(),
        l = r("useWAWebOnScreen")(i, r("WAWebNoop"));
      return (
        p(
          function () {
            l &&
              !a.current &&
              (o("WAWebNotesLogEvents").logNoteViewed(n), (a.current = !0));
          },
          [n, l],
        ),
        c.jsx("span", { ref: i, children: t })
      );
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
