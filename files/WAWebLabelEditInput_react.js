__d(
  "WAWebLabelEditInput.react",
  [
    "fbt",
    "$InternalEnum",
    "WANullthrows",
    "WAWebBizLabelEditingAction",
    "WAWebCellFrame.react",
    "WAWebL10N",
    "WAWebLabelCollection",
    "WAWebLabelColorPanel.react",
    "WAWebLabelConstants",
    "WAWebLabelErrors",
    "WAWebLabels.react",
    "WAWebListNameValidation",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebMobilePlatforms",
    "WAWebRichTextField.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumListAction",
    "WAWebWamEnumListUpdateUserJourneyAction",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamSmbListEventReporter",
    "asyncToGeneratorRuntime",
    "chunkArray",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = n("$InternalEnum").Mirrored([
        "NameEmpty",
        "NameAlreadyExists",
        "SaveFailed",
      ]),
      f = function (t) {
        var e = o("WAWebListsGatingUtils").isListsEnabled();
        switch (t) {
          case _.NameEmpty:
            return e
              ? s._(/*BTDS*/ "Choose a name for your list.")
              : s._(/*BTDS*/ "Label name can't be empty");
          case _.NameAlreadyExists:
            return e
              ? s._(/*BTDS*/ "This name is in use. Choose a different name.")
              : s._(/*BTDS*/ "Label already exists");
          case _.SaveFailed:
            return e
              ? s._(/*BTDS*/ "Failed to save the list")
              : s._(/*BTDS*/ "Failed to save the label");
        }
      };
    function g(e) {
      var t,
        a,
        i,
        l,
        c = e.editable,
        g = e.entryPoint,
        h = e.initialColorIndex,
        y = e.initialName,
        C = e.label,
        b = e.listsFlow,
        v = e.onCancel,
        S = e.onSave,
        R = e.onTextChange,
        L = e.rowTheme,
        E = p(
          (t = (a = C == null ? void 0 : C.name) != null ? a : y) != null
            ? t
            : "",
        ),
        k = E[0],
        I = E[1],
        T = p(null),
        D = T[0],
        x = T[1],
        $ = p(
          o("WAWebMobilePlatforms").isSMB()
            ? (i = (l = C == null ? void 0 : C.colorIndex) != null ? l : h) !=
              null
              ? i
              : o(
                  "WAWebLabelCollection",
                ).LabelCollection.getNextAvailableColor()
            : null,
        ),
        P = $[0],
        N = $[1],
        M = p(!1),
        w = M[0],
        A = M[1],
        F = m(),
        O = p(!1),
        B = O[0],
        W = O[1],
        q = r("useWAWebUnmountSignal")(),
        U = o("WAWebListsGatingUtils").isListsEnabled();
      d(
        function () {
          U &&
            !b &&
            g != null &&
            o("WAWebListsLogging").logListUpdateUserJorney({
              listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
              userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction")
                .LIST_UPDATE_USER_JOURNEY_ACTION.START,
              entryPoint: g,
            });
        },
        [U, g, b],
      );
      var V = r("WAWebL10N").getFullLocale(),
        H = r("useWAWebDebouncedCallback")(function (e) {
          var t =
            (C == null ? void 0 : C.name.toLocaleLowerCase(V)) ===
            e.toLocaleLowerCase(V);
          !t &&
            o("WAWebListNameValidation").isListNameDuplicate(e) &&
            x(f(_.NameAlreadyExists));
        }, 300),
        G = function (t) {
          var e = t.trim();
          return e === ""
            ? (H.cancel(), x(f(_.NameEmpty)), !1)
            : (x(null), H(e), !0);
        },
        z = function (t) {
          (G(t), b === !0 && S(t, P), I(t), R == null || R(t));
        },
        j = function () {
          A(!w);
        },
        K = function (t) {
          (N(t), A(!1), b && S(k, t));
        },
        Q = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if ((S(k, P), !(U && b))) {
              W(!0);
              try {
                try {
                  if (C)
                    yield o("WAWebBizLabelEditingAction").labelEditAction(
                      C.id,
                      k,
                      C.predefinedId,
                      P,
                    );
                  else {
                    var e = yield o(
                      "WAWebBizLabelEditingAction",
                    ).labelAddAction(k, P);
                    U &&
                      e != null &&
                      g != null &&
                      (o("WAWebListsLogging").logListUpdate({
                        listId: e,
                        listAction: o("WAWebWamEnumListAction").LIST_ACTION
                          .CREATE,
                        entryPoint: g,
                        chatsBeforeUpdate: [],
                        addedChats: [],
                        removedChats: [],
                      }),
                      o("WAWebWamSmbListEventReporter").logSmbListEvent({
                        labelOperation: o("WAWebWamEnumLabelOperations")
                          .LABEL_OPERATIONS.ADD,
                        updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                          .UPDATE_ENTRY_POINT.CREATE_CUSTOM_LIST,
                        listId: e,
                        customListTitle: k,
                      }),
                      o("WAWebListsLogging").logListUpdateUserJorney({
                        listId: "" + e,
                        listAction: o("WAWebWamEnumListAction").LIST_ACTION
                          .CREATE,
                        userJorneyAction: o(
                          "WAWebWamEnumListUpdateUserJourneyAction",
                        ).LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
                        entryPoint: g,
                      }));
                  }
                } catch (e) {
                  throw new (o("WAWebLabelErrors").LabelActionError)();
                }
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: U
                      ? s._(/*BTDS*/ "List saved")
                      : s._(/*BTDS*/ "Label saved"),
                  }),
                );
              } catch (e) {
                e instanceof o("WAWebLabelErrors").LabelActionError &&
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: f(_.SaveFailed),
                    }),
                  );
              } finally {
                q.aborted || W(!1);
              }
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        X;
      if (o("WAWebMobilePlatforms").isSMB() && P != null) {
        var Y = o("WAWebListUtils")
            .getAllLabelColors()
            .map(function (e) {
              return { hexColor: e, enabled: !0 };
            }),
          J = r("chunkArray")(Y, 5);
        X = u.jsxs(r("WAWebUnstyledButton.react"), {
          ref: F,
          onClick: j,
          children: [
            u.jsx(o("WAWebLabels.react").Label, {
              color: o("WAWebListUtils").colorIndexToHex(P),
              renderAsCircle: !0,
              isListsFeatureEnabled: U,
            }),
            w &&
              u.jsx(o("WAWebLabelColorPanel.react").LabelColorPopup, {
                colors: J,
                selectedIndex: P,
                onSelect: K,
                anchor: r("WANullthrows")(F.current),
                onClose: function () {
                  return A(!1);
                },
              }),
          ],
        });
      }
      var Z = u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "xh8yej3 x1j8ymqv" },
            1: { className: "xh8yej3 x1j8ymqv x12w63v0" },
          }[(X == null && b !== !0) << 0],
          {
            children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
              placeholder: U
                ? s._(/*BTDS*/ "New list name")
                : s._(/*BTDS*/ "New label"),
              value: k,
              maxLength: o("WAWebLabelConstants").LABEL_NAME_MAX_LENGTH,
              error: D,
              validate: function (t) {
                return G(t != null ? t : "");
              },
              onChange: function (t) {
                var e = t.text;
                return z(e);
              },
              onSave: Q,
              onCancel: v,
              theme: "label-input",
              lineWrap: !1,
              pending: B,
              lockable: b !== !0,
              startActive: !0,
              editable: c,
              emojiBtnPosition: "side",
              hideFloatingLabel: !0,
              showRemaining: !0,
              focusOnMount: !0,
              testid: void 0,
            }),
          },
        ),
      );
      return u.jsx(r("WAWebCellFrame.react"), {
        theme: L,
        image: X,
        primary: Z,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
