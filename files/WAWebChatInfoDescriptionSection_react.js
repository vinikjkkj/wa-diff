__d(
  "WAWebChatInfoDescriptionSection.react",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebChatInfoDrawerSection.react",
    "WAWebConfirmPopup.react",
    "WAWebConstantsDeprecated",
    "WAWebFbtCommon",
    "WAWebFormatConfiguration",
    "WAWebGroupGatingUtils",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebRichTextField.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebPrevious",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useRef,
      _ = m.useState,
      f = {
        containerRefreshed: { background: "xsm26vf", $$css: !0 },
        textAlign: { textAlign: "x1yc453h", $$css: !0 },
      };
    function g(t) {
      var n = t.bulletPointsEnabled,
        a = t.chat,
        i = t.containerTestId,
        l = t.editRestrictionText,
        c = t.emptyValuePlaceholder,
        m = t.expandedFormattingEnabled,
        g = t.focusOnMount,
        y = t.preventBlankDescription,
        C = y === void 0 ? !1 : y,
        b = t.setIsEditing,
        v = t.testid,
        S = p(),
        R = _(t.description),
        L = R[0],
        E = R[1],
        k = _(!1),
        I = k[0],
        T = k[1],
        D = _(t.showFullDescription || !(L && L.length > 30)),
        x = D[0],
        $ = D[1],
        P = r("useWAWebUnmountSignal")(),
        N = r("useWAWebPrevious")(t.description);
      N !== t.description && L !== t.description && E(t.description);
      var M = function () {
          $(!0);
        },
        w = function (n) {
          (E(n), t.onChange == null || t.onChange(n));
        },
        A = function () {
          (E(t.description), t.onCancel == null || t.onCancel());
        },
        F = function () {
          if (t.canSetDescription) {
            var n = L || "",
              i = n.match(/\r\n/gm) ? "\r\n" : "\n",
              l = new RegExp("^(" + i + "{2,})([^\n])", "gm"),
              s = n.replace(l, i + "$2").trim(),
              u = n.trim().length === 0 && /\s/.test(n);
            if (s === t.description || (s === "" && t.description == null))
              return E(C && u ? t.description : s);
            (T(!0),
              r("WAPromiseRaceAbort")(t.setDescriptionAction(a, s), P)
                .then(r("WAWebNoop"))
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (n) {
                  (o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "description_input:onSetDescription failed",
                      ])),
                  ),
                    E(t.description));
                })
                .finally(function () {
                  (T(!1), t.onSave == null || t.onSave());
                }));
          }
        },
        O =
          l != null
            ? function () {
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "chat-info-description",
                    },
                    onOK: h,
                    okText: r("WAWebFbtCommon")("OK"),
                    children: l,
                  }),
                );
              }
            : null,
        B = function () {
          return t.creationString == null
            ? null
            : d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    o("WAWebUISpacing").uiMargin.top10,
                  ),
                  {
                    children: d.jsx(
                      o("WAWebText.react").WAWebTextTitleRefreshed,
                      {
                        color: "wdsContentDeemphasized",
                        children: t.creationString,
                      },
                    ),
                  },
                ),
              );
        };
      if (o("WAWebGroupGatingUtils").getGroupDescriptionLength() <= 0)
        return null;
      var W = {
          textLimit: x
            ? 1 / 0
            : r("WAWebConstantsDeprecated")
                .GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
          readMoreText: s._(/*BTDS*/ "Read more"),
          onReadMore: M,
          ellipsify: !0,
          multiline: !0,
          breakWord: !0,
          direction: "auto",
          inferLinesDirection: !0,
          formatters: a.isTrusted()
            ? o("WAWebFormatConfiguration").TrustedGroupDesc({
                links: o("WAWebLinkify").findLinks(L),
                bulletPointsEnabled: n,
                expandedFormattingEnabled: m,
              })
            : o("WAWebFormatConfiguration").UntrustedGroupDesc({
                bulletPointsEnabled: n,
                expandedFormattingEnabled: m,
              }),
        },
        q = [
          o("WAWebRichTextField.react").TextInputCustomStyleThemes
            .GroupInfoName,
          o("WAWebRichTextField.react").TextInputCustomStyleThemes
            .ChatInfoDefaultText,
        ],
        U = d.jsx("div", {
          className: "x126k92a",
          children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
            ref: S,
            testid: void 0,
            containerXstyle: f.textAlign,
            value: L,
            emptyValuePlaceholder: c,
            emojiTextSettingsInLockMode: W,
            editable: t.canSetDescription,
            pending: I,
            showRemaining: !0,
            maxLength: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
            onChange: function (t) {
              var e = t.text;
              return w(e);
            },
            onSave: F,
            isRefresh: !0,
            onCancel: A,
            multiline: !0,
            editRestrictionInfo:
              !t.canSetDescription && !a.isSuspendedOrTerminated() ? O : void 0,
            emojiBtnPosition: "side",
            lockable: !0,
            lowProfile: !0,
            customStyleThemes: q,
            theme: "small",
            showEditOnHover: !0,
            constrainedWidth: !0,
            textFormatEnabled: !0,
            bulletPointsEnabled: n != null ? n : m,
            numberedListEnabled: m,
            blockQuoteEnabled: m,
            inlineCodeEnabled: m,
            textFormatShortcutsEnabled: !0,
            linksEnabled: !0,
            internLinksEnabled: !0,
            floatingToolbarEnabled: !0,
            onBlur: t.onBlur,
            startActive: g,
            focusOnMount: g,
            setIsEditing: b,
            placeholderClickToEditEnabled: !0,
            fieldName: s._(/*BTDS*/ "group description"),
            ariaLabel: s._(/*BTDS*/ "group description"),
          }),
        });
      !L && !t.canSetDescription && (U = null);
      var V = B();
      return !U && !V
        ? null
        : d.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            testid: void 0,
            xstyle: [
              o("WAWebUISpacing").uiPadding.horiz20,
              o("WAWebUISpacing").uiPadding.vert10,
              f.containerRefreshed,
            ],
            children: [U, V],
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = g;
  },
  226,
);
