__d(
  "WAWebGroupInfoSubjectInput.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = {
        containerRefreshed: {
          textAlign: "x2b8uid",
          width: "xh8yej3",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
        editing: {
          width: "xh8yej3",
          textAlign: "x1yc453h",
          "@media (max-width: 1441px)_width": "x1enirru",
          $$css: !0,
        },
      };
    function f(t) {
      var a = t.direction,
        i = t.editable,
        l = t.editRestrictionInfo,
        u = t.emptyErrorMessage,
        d = t.focusOnMount,
        f = d === void 0 ? !1 : d,
        g = t.onBlur,
        h = t.onChange,
        y = t.onSave,
        C = t.subject,
        b = t.testid,
        v = t.xstyle,
        S = m(),
        R = p(null),
        L = R[0],
        E = R[1],
        k = p(!1),
        I = k[0],
        T = k[1],
        D = p(f),
        x = D[0],
        $ = D[1],
        P = function () {
          var e, t;
          ($(!0),
            (e = S.current) == null || e.restoreFocus(),
            (t = S.current) == null || t.triggerSelect());
        };
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "edit_group_subject",
        P,
      );
      var N = function (t) {
          return t != null && t.trim() !== "";
        },
        M = function () {
          $(!0);
        },
        w = function (t) {
          var e = t.text;
          x && (E(e), h == null || h(e));
        },
        A = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (($(!1), L == null || L === "" || L === C)) {
              E(null);
              return;
            }
            T(!0);
            try {
              yield y(L);
            } finally {
              (T(!1), E(null));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        F = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              okText: r("WAWebFbtCommon")("OK"),
              children:
                u != null ? u : s._(/*BTDS*/ "Group subject can't be empty"),
            }),
          );
        },
        O = function () {
          ($(!1), E(null));
        },
        B = [
          o("WAWebRichTextField.react").TextInputCustomStyleThemes
            .GroupInfoName,
          o("WAWebRichTextField.react").TextInputCustomStyleThemes
            .ChatInfoLargeText,
        ],
        W = L != null ? L : C || String(s._(/*BTDS*/ "Unknown subject"));
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            _.containerRefreshed,
            x && _.editing,
            v,
          ),
          {
            children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
              ref: S,
              testid: void 0,
              title: W,
              value: W,
              pending: I,
              showRemaining: !0,
              validate: N,
              maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
              onBeginEdit: M,
              onChange: w,
              onSave: A,
              onError: F,
              onCancel: O,
              emojiBtnPosition: "side",
              lockable: !0,
              lowProfile: !0,
              isRefresh: !0,
              constrainedWidth: !0,
              theme: "large",
              customStyleThemes: B,
              showEditOnHover: !0,
              showHighlightOnHover: !0,
              editable: i,
              editRestrictionInfo: l,
              onBlur: g,
              direction: a,
              focusOnMount: f || x,
              setIsEditing: x,
              startActive: f,
              fieldName: s._(/*BTDS*/ "group subject"),
              ariaLabel: s._(/*BTDS*/ "group subject"),
            }),
          },
        ),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
