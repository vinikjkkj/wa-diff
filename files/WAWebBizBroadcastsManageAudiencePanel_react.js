__d(
  "WAWebBizBroadcastsManageAudiencePanel.react",
  [
    "fbt",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebBizBroadcastsDialog.react",
    "WAWebBizBroadcastsDrawerReducer",
    "WAWebBizBroadcastsErrorDetailsSection.react",
    "WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react",
    "WAWebBizBroadcastsSuccessfulContacts.react",
    "WAWebBizBroadcastsTypedError",
    "WAWebBroadcastAudienceNameField.react",
    "WAWebBroadcastListAction",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerManager",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "countWhere",
    "formatDate",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useReducer,
      p = c.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(61),
        a = e.entryPoint,
        i = e.errorList,
        l = e.validContactsData,
        c;
      t[0] !== l || t[1] !== i
        ? ((c = { errorList: i, validContactsData: l }),
          (t[0] = l),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var _ = m(o("WAWebBizBroadcastsDrawerReducer").reducer, c),
        b = _[0],
        v = _[1],
        S;
      t[3] !== a || t[4] !== l.length || t[5] !== i
        ? ((S = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importedContactWizardViewed(
              {
                num_duplicate_contacts: r("countWhere")(i, C),
                num_error_contacts: i.length,
                num_invalid_contacts: r("countWhere")(i, y),
                num_non_wa_contacts: r("countWhere")(i, h),
                num_total_contacts: l.length + i.length,
              },
              a,
            );
          }),
          (t[3] = a),
          (t[4] = l.length),
          (t[5] = i),
          (t[6] = S))
        : (S = t[6]);
      var R;
      (t[7] !== a || t[8] !== l || t[9] !== i
        ? ((R = [a, l, i]), (t[7] = a), (t[8] = l), (t[9] = i), (t[10] = R))
        : (R = t[10]),
        d(S, R));
      var L = p(g),
        E = L[0],
        k = L[1],
        I = p(null),
        T = I[0],
        D = I[1],
        x = b.errorList,
        $ = b.validContactsData,
        P;
      t[11] !== T || t[12] !== a
        ? ((P = function () {
            (T == null
              ? o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(
                  a,
                )
              : o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.contactImportSuccessCancelClicked(
                  a,
                ),
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid());
          }),
          (t[11] = T),
          (t[12] = a),
          (t[13] = P))
        : (P = t[13]);
      var N = P,
        M;
      if (T != null) {
        var w;
        (t[14] !== T.name || t[15] !== T.recipientCount
          ? ((w = u.jsx(
              r(
                "WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react",
              ),
              {
                broadcastListName: T.name,
                broadcastListRecipientCount: T.recipientCount,
              },
            )),
            (t[14] = T.name),
            (t[15] = T.recipientCount),
            (t[16] = w))
          : (w = t[16]),
          (M = w));
      } else {
        var A;
        t[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = { className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka" }),
            (t[17] = A))
          : (A = t[17]);
        var F;
        t[18] !== a
          ? ((F = function () {
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.importedContactListNameEntered(
                a,
              );
            }),
            (t[18] = a),
            (t[19] = F))
          : (F = t[19]);
        var O;
        t[20] !== E || t[21] !== F
          ? ((O = u.jsx(
              "div",
              babelHelpers.extends({}, A, {
                children: u.jsx(r("WAWebBroadcastAudienceNameField.react"), {
                  defaultValue: E,
                  onFocus: F,
                  onValueChange: k,
                }),
              }),
            )),
            (t[20] = E),
            (t[21] = F),
            (t[22] = O))
          : (O = t[22]);
        var B;
        t[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = { className: "xh8yej3" }), (t[23] = B))
          : (B = t[23]);
        var W, q, U;
        t[24] !== a
          ? ((U = function (t) {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.errorContactDeleteClicked(a),
                v({ payload: { errorItem: t }, type: "DELETE_ERROR_ITEM" }));
            }),
            (W = function () {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.allErrorContactsDeleteClicked(
                a,
              ),
                v({ type: "DELETE_ALL_ERROR_ITEMS" }));
            }),
            (q = function (t, n) {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.errorContactEditClicked(a),
                v({
                  payload: { editedContact: t, originalIndex: n },
                  type: "SAVE_EDITED_CONTACT",
                }));
            }),
            (t[24] = a),
            (t[25] = W),
            (t[26] = q),
            (t[27] = U))
          : ((W = t[25]), (q = t[26]), (U = t[27]));
        var V;
        t[28] !== $ ||
        t[29] !== a ||
        t[30] !== x ||
        t[31] !== W ||
        t[32] !== q ||
        t[33] !== U
          ? ((V = u.jsx(r("WAWebBizBroadcastsErrorDetailsSection.react"), {
              errorList: x,
              contacts: $,
              entryPoint: a,
              onDeleteErrorItem: U,
              onDeleteAllErrorItems: W,
              onUpdateContact: q,
            })),
            (t[28] = $),
            (t[29] = a),
            (t[30] = x),
            (t[31] = W),
            (t[32] = q),
            (t[33] = U),
            (t[34] = V))
          : (V = t[34]);
        var H;
        t[35] !== a
          ? ((H = function (t) {
              return u.jsx(r("WDSButton.react"), {
                size: "medium",
                variant: "borderless",
                Icon: r("WDSIconIcDelete.react"),
                onPress: function () {
                  (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.contactDeleteClicked(a),
                    v({ payload: { contact: t }, type: "DELETE_CONTACT" }));
                },
              });
            }),
            (t[35] = a),
            (t[36] = H))
          : (H = t[36]);
        var G;
        t[37] !== $ || t[38] !== H
          ? ((G = u.jsx(r("WAWebBizBroadcastsSuccessfulContacts.react"), {
              contacts: $,
              actions: H,
            })),
            (t[37] = $),
            (t[38] = H),
            (t[39] = G))
          : (G = t[39]);
        var z;
        t[40] !== V || t[41] !== G
          ? ((z = u.jsxs(
              "table",
              babelHelpers.extends({}, B, { children: [V, G] }),
            )),
            (t[40] = V),
            (t[41] = G),
            (t[42] = z))
          : (z = t[42]);
        var j;
        (t[43] !== z || t[44] !== O
          ? ((j = u.jsxs(u.Fragment, { children: [O, z] })),
            (t[43] = z),
            (t[44] = O),
            (t[45] = j))
          : (j = t[45]),
          (M = j));
      }
      var K =
          x.length > 0 ||
          E.length === 0 ||
          E.length >
            o("WAWebBizBroadcastsAudienceUtils").MAX_AUDIENCE_NAME_LENGTH,
        Q;
      t[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Broadcast audience")), (t[46] = Q))
        : (Q = t[46]);
      var X;
      t[47] !== E ||
      t[48] !== $ ||
      t[49] !== T ||
      t[50] !== a ||
      t[51] !== x.length ||
      t[52] !== K
        ? ((X =
            T == null &&
            u.jsx(r("WDSTooltip.react"), {
              disabled: !K,
              label: s._(
                /*BTDS*/ "You\u2019ll need to update recipient errors before saving your audience.",
              ),
              children: u.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Save audience"),
                variant: "filled",
                onPress: function () {
                  var e = function (t) {
                    (D(t),
                      o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.contactImportSuccessViewed(
                        {
                          num_error_contacts: x.length,
                          num_total_contacts: $.length + x.length,
                        },
                        a,
                      ));
                  };
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked(
                    {
                      num_error_contacts: x.length,
                      num_total_contacts: $.length + x.length,
                    },
                    a,
                  );
                  var t = $.map(f);
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                      var n = yield o(
                        "WAWebBroadcastListAction",
                      ).createBroadcastListAction(t, E);
                      (o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(
                        $.length,
                        "success",
                        void 0,
                        a,
                      ),
                        e({
                          audienceExpression: o("WAWebAudienceExpressionTypes")
                            .DEFAULT_AUDIENCE_EXPRESSION,
                          broadcastJid: n,
                          lastBroadcastTimestamp: null,
                          name: E,
                          recipientCount: $.length,
                        }));
                    } catch (e) {
                      var r = e,
                        i = r instanceof Error ? r.message : "unknown";
                      o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(
                        $.length,
                        "failure",
                        i,
                        a,
                      );
                    }
                  })();
                },
                testid: void 0,
                disabled: K,
              }),
            })),
          (t[47] = E),
          (t[48] = $),
          (t[49] = T),
          (t[50] = a),
          (t[51] = x.length),
          (t[52] = K),
          (t[53] = X))
        : (X = t[53]);
      var Y;
      t[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = {
            className: "x1p57kb1 xvpt6g3 x1tvm86q x1hqvyuz x25e6zw xpsqkbl",
          }),
          (t[54] = Y))
        : (Y = t[54]);
      var J;
      t[55] !== M
        ? ((J = u.jsx("div", babelHelpers.extends({}, Y, { children: M }))),
          (t[55] = M),
          (t[56] = J))
        : (J = t[56]);
      var Z;
      return (
        t[57] !== N || t[58] !== X || t[59] !== J
          ? ((Z = u.jsx(r("WAWebBizBroadcastsDialog.react"), {
              title: Q,
              onClose: N,
              testid: void 0,
              primaryAction: X,
              children: J,
            })),
            (t[57] = N),
            (t[58] = X),
            (t[59] = J),
            (t[60] = Z))
          : (Z = t[60]),
        Z
      );
    }
    function f(e) {
      return { lid: e.lid, phone: e.phone };
    }
    function g() {
      var e = r("formatDate")(Date.now() / 1e3, r("formatDate").DEFAULT_FORMAT);
      return s
        ._(/*BTDS*/ "Broadcast audience {creation-date}", [
          s._param("creation-date", e),
        ])
        .toString();
    }
    function h(e) {
      return (
        e.errorType ===
        o("WAWebBizBroadcastsTypedError").PhoneError.NOT_WHATSAPP_USER
      );
    }
    function y(e) {
      return (
        e.errorType === o("WAWebBizBroadcastsTypedError").PhoneError.INVALID
      );
    }
    function C(e) {
      return (
        e.errorType === o("WAWebBizBroadcastsTypedError").PhoneError.DUPLICATE
      );
    }
    l.default = _;
  },
  226,
);
