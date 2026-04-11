__d(
  "WAWebBizBroadcastsEditContactDialog.react",
  [
    "fbt",
    "WAWebBizBroadcastsContactErrorMessage",
    "WAWebBizBroadcastsContactVerifier",
    "WAWebBizBroadcastsFileProcessor",
    "WAWebBizBroadcastsTemplateParsingUtils",
    "WAWebBizBroadcastsTypedError",
    "WAWebBizBroadcastsValidationUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextField.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
      g = { surface: "bb-edit-contact" },
      h = {
        controlsStyle: {
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1c1uobl",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        inputFields: { rowGap: "x1f0uite", $$css: !0 },
      };
    function y(e, t) {
      if (e.trim().length === 0) return !1;
      var n = o("WAWebBizBroadcastsFileProcessor").normalizePhoneNumber(e);
      return t.has(n);
    }
    function C(e, t) {
      if (e != null && !e.isVerifying) {
        if (e.isValidPhoneNumber === !1)
          return r("WAWebBizBroadcastsContactErrorMessage")(
            o("WAWebBizBroadcastsTypedError").PhoneError.INVALID,
          );
        if (e.isWhatsAppUser === !1)
          return r("WAWebBizBroadcastsContactErrorMessage")(
            o("WAWebBizBroadcastsTypedError").PhoneError.NOT_WHATSAPP_USER,
          );
      }
      return t
        ? r("WAWebBizBroadcastsContactErrorMessage")(
            o("WAWebBizBroadcastsTypedError").PhoneError.DUPLICATE,
          )
        : null;
    }
    function b(e, t) {
      if (e.trim().length <= 0) return null;
      var n = t(e);
      return { status: n.status, type: n.type };
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.defaultValue,
        a = e.entryPoint,
        i = e.errorMessage,
        l = e.onValueChange,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Name")), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] !== a
        ? ((d = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.contactNameEntered(a);
          }),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]);
      var m = i != null,
        p;
      return (
        t[3] !== n || t[4] !== i || t[5] !== l || t[6] !== d || t[7] !== m
          ? ((p = u.jsx(r("WDSTextField.react"), {
              label: c,
              defaultValue: n,
              onValueChange: l,
              onFocus: d,
              error: m,
              errorText: i,
            })),
            (t[3] = n),
            (t[4] = i),
            (t[5] = l),
            (t[6] = d),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.contactVerificationStatus,
        a = e.defaultValue,
        i = e.entryPoint,
        l = e.isDuplicate,
        c = e.onValueChange,
        d;
      t[0] !== n || t[1] !== l
        ? ((d = C(n, l)), (t[0] = n), (t[1] = l), (t[2] = d))
        : (d = t[2]);
      var m = d,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Phone Number")), (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== i
        ? ((_ = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.phoneNumberEntered(i);
          }),
          (t[4] = i),
          (t[5] = _))
        : (_ = t[5]);
      var f = m != null,
        g;
      return (
        t[6] !== a || t[7] !== m || t[8] !== c || t[9] !== _ || t[10] !== f
          ? ((g = u.jsx(r("WDSTextField.react"), {
              label: p,
              defaultValue: a,
              onValueChange: c,
              onFocus: _,
              error: f,
              errorText: m,
            })),
            (t[6] = a),
            (t[7] = m),
            (t[8] = c),
            (t[9] = _),
            (t[10] = f),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    function R(e) {
      var t = e.entryPoint,
        a = e.item,
        i = e.onCancel,
        l = e.onSave,
        c = e.validContactsData,
        C = p(
          function () {
            return new Set(
              c.map(function (e) {
                return o(
                  "WAWebBizBroadcastsFileProcessor",
                ).normalizePhoneNumber(e.phone);
              }),
            );
          },
          [c],
        ),
        R = o("WAWebBizBroadcastsTemplateParsingUtils").extractPhone(a.rowData),
        L = o("WAWebBizBroadcastsTemplateParsingUtils").extractName(a.rowData),
        E = f(R),
        k = E[0],
        I = E[1],
        T = f(L),
        D = T[0],
        x = T[1],
        $ = f(null),
        P = $[0],
        N = $[1],
        M = _(null),
        w = f(function () {
          return b(L, o("WAWebBizBroadcastsValidationUtils").sanitizeName);
        }),
        A = w[0],
        F = w[1],
        O = d(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if ((N(null), e !== "")) {
                  var t = o(
                    "WAWebBizBroadcastsValidationUtils",
                  ).validateAndFormatPhoneNumber(e);
                  if (
                    t.status !==
                      o("WAWebBizBroadcastsValidationUtils").ValidationStatus
                        .VALID ||
                    t.value == null
                  ) {
                    N({ isValidPhoneNumber: !1, isVerifying: !1 });
                    return;
                  }
                  try {
                    var n = yield o(
                        "WAWebBizBroadcastsContactVerifier",
                      ).verifyWhatsAppUsers([e]),
                      r = n[Object.keys(n)[0]],
                      a = r.isWhatsAppUser,
                      i = r.lid;
                    N({
                      isValidPhoneNumber: !0,
                      isVerifying: !1,
                      isWhatsAppUser: a,
                      lid: i,
                    });
                  } catch (e) {
                    N({
                      isValidPhoneNumber:
                        t.status ===
                        o("WAWebBizBroadcastsValidationUtils").ValidationStatus
                          .VALID,
                      isVerifying: !1,
                      isWhatsAppUser: !1,
                    });
                  }
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [],
        ),
        B = d(function (e) {
          x(e);
          var t = o("WAWebBizBroadcastsValidationUtils").sanitizeName(e);
          F({ status: t.status, type: t.type });
        }, []),
        W = d(
          function (e) {
            (I(e),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.phoneNumberEntered(t),
              M.current != null &&
                (window.clearTimeout(M.current), (M.current = null)),
              N(null),
              e.trim().length > 0 &&
                (M.current = window.setTimeout(function () {
                  O(e.trim());
                }, 250)));
          },
          [O, t],
        );
      (m(
        function () {
          R.trim().length > 0 && O(R.trim());
        },
        [R, O],
      ),
        m(function () {
          return function () {
            M.current != null && window.clearTimeout(M.current);
          };
        }, []),
        m(
          function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.editContactViewed(t);
          },
          [t],
        ));
      function q() {
        return !(
          A == null ||
          A.status !==
            o("WAWebBizBroadcastsValidationUtils").ValidationStatus.VALID ||
          P == null ||
          P.isVerifying ||
          P.isValidPhoneNumber !== !0 ||
          P.isWhatsAppUser !== !0 ||
          (y(k, C) && a.type === "error")
        );
      }
      function U() {
        if (q()) {
          var e = o(
              "WAWebBizBroadcastsValidationUtils",
            ).validateAndFormatPhoneNumber(k),
            n = { phone: e.value || "" },
            r =
              D.trim().length > 0
                ? o("WAWebBizBroadcastsValidationUtils").sanitizeName(D)
                : null;
          (r == null ? void 0 : r.value) != null && (n.firstName = r.value);
          var a = P == null ? void 0 : P.lid;
          (a != null && (n.lid = a),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.editContactConfirmClicked(t),
            l(n));
        }
      }
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
        tsNavigationData: g,
        actions: u.jsxs("div", {
          className: "x78zum5 x7v6yn8 xh8yej3",
          children: [
            u.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Cancel"),
              variant: "borderless",
              onPress: i,
              testid: void 0,
            }),
            u.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Update"),
              disabled: !q(),
              variant: "filled",
              onPress: U,
              testid: void 0,
            }),
          ],
        }),
        onOverlayClick: i,
        testid: void 0,
        controlsStyle: h.controlsStyle,
        children: u.jsxs("div", {
          className: "x78zum5 xdt5ytf x1f0uite xs2akgl xh8yej3",
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Edit recipient information"),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: h.inputFields,
              align: "stretch",
              children: [
                u.jsx(v, {
                  defaultValue: D,
                  entryPoint: t,
                  onValueChange: B,
                  errorMessage:
                    A != null && A.type
                      ? r("WAWebBizBroadcastsContactErrorMessage")(
                          A == null ? void 0 : A.type,
                        )
                      : null,
                }),
                u.jsx(S, {
                  defaultValue: k,
                  contactVerificationStatus: P,
                  entryPoint: t,
                  isDuplicate: y(k, C),
                  onValueChange: W,
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
