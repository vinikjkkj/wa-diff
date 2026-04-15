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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.contact,
        r;
      if (t[0] !== (n == null ? void 0 : n.id)) {
        var a, i;
        ((r = o("WAJids").validateChatJid(
          (a = n == null || (i = n.id) == null ? void 0 : i.toJid()) != null
            ? a
            : "",
        )),
          (t[0] = n == null ? void 0 : n.id),
          (t[1] = r));
      } else r = t[1];
      var l = r;
      if (n == null || l == null) return null;
      var s;
      return (
        t[2] !== l || t[3] !== n
          ? ((s = c.jsx(S, { contact: n, chatJid: l })),
            (t[2] = l),
            (t[3] = n),
            (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function S(e) {
      var t,
        a,
        i,
        l = o("react-compiler-runtime").c(15),
        s = e.chatJid,
        u = e.contact,
        d = L(s),
        m = d.value,
        p = (t = m == null ? void 0 : m.content) != null ? t : "",
        _ = (a = m == null ? void 0 : m.createdAt) != null ? a : null,
        f = (i = m == null ? void 0 : m.modifiedAt) != null ? i : null,
        g;
      l[0] !== s || l[1] !== u || l[2] !== m || l[3] !== p
        ? ((g = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e !== p)
                  return (
                    o("WAWebNotesLogEvents").logNoteSaved(u, {
                      content_existed: p !== "",
                      has_content: e !== "",
                      length: e.length,
                      previous_length: p.length,
                    }),
                    m == null
                      ? o("WAWebNoteAction").noteAddAction("unstructured", s, e)
                      : o("WAWebNoteAction").noteEditAction(
                          m.id,
                          "unstructured",
                          s,
                          e,
                          m.createdAt,
                        )
                  );
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (l[0] = s),
          (l[1] = u),
          (l[2] = m),
          (l[3] = p),
          (l[4] = g))
        : (g = l[4]);
      var h = g,
        y = r("useWAWebAsyncSaving")(h),
        C = y[0],
        b = y[1];
      if (!(d.error != null || d.loading)) {
        var v;
        l[5] !== u ||
        l[6] !== _ ||
        l[7] !== f ||
        l[8] !== p ||
        l[9] !== b ||
        l[10] !== C
          ? ((v = c.jsx(R, {
              contact: u,
              createdAt: _,
              modifiedAt: f,
              note: p,
              saveNote: b,
              savingNote: C,
            })),
            (l[5] = u),
            (l[6] = _),
            (l[7] = f),
            (l[8] = p),
            (l[9] = b),
            (l[10] = C),
            (l[11] = v))
          : (v = l[11]);
        var S;
        return (
          l[12] !== u || l[13] !== v
            ? ((S = c.jsx(I, { contact: u, children: v })),
              (l[12] = u),
              (l[13] = v),
              (l[14] = S))
            : (S = l[14]),
          S
        );
      }
    }
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
      var n = o("react-compiler-runtime").c(5),
        r = f(!1),
        a,
        i;
      (n[0] !== t
        ? ((a = function () {
            t && (r.current = !1);
          }),
          (i = [t]),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2])),
        p(a, i));
      var l;
      n[3] !== e
        ? ((l = function (n) {
            r.current ||
              (o("WAWebNotesLogEvents").logStartedTypingNote(e, {
                content_existed: n,
              }),
              (r.current = !0));
          }),
          (n[3] = e),
          (n[4] = l))
        : (l = n[4]);
      var s = l;
      return s;
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.contact,
        i = f(!1),
        l = f(),
        s = r("useWAWebOnScreen")(l, r("WAWebNoop")),
        u,
        d;
      (t[0] !== a || t[1] !== s
        ? ((u = function () {
            s &&
              !i.current &&
              (o("WAWebNotesLogEvents").logNoteViewed(a), (i.current = !0));
          }),
          (d = [a, s]),
          (t[0] = a),
          (t[1] = s),
          (t[2] = u),
          (t[3] = d))
        : ((u = t[2]), (d = t[3])),
        p(u, d));
      var m;
      return (
        t[4] !== n
          ? ((m = c.jsx("span", { ref: l, children: n })),
            (t[4] = n),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = v;
  },
  226,
);
