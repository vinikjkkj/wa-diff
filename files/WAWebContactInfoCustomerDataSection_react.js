__d(
  "WAWebContactInfoCustomerDataSection.react",
  [
    "fbt",
    "WAJids",
    "WATimeUtils",
    "WAWebAcquisitionSourceNames",
    "WAWebBusinessProfileTextField.react",
    "WAWebChatCollection",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebContactGetters",
    "WAWebContactInfoLeadStageRow.react",
    "WAWebCustomerDataFieldSaver",
    "WAWebCustomerDataLastUpdated",
    "WAWebCustomerManagerGating",
    "WAWebCustomerProfileDateField.react",
    "WAWebCustomerProfileEditableField.react",
    "WAWebCustomerProfileNotesField.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupInfoSeparator.react",
    "WAWebLabelOutlineIcon.react",
    "WAWebLabelsInfoDrawerLabelWell.react",
    "WAWebListPeopleRefreshedIcon.react",
    "WAWebListsGatingUtils",
    "WAWebNotesUtils",
    "WDSIconIcCake.react",
    "WDSIconIcCall.react",
    "WDSIconIcEdit.react",
    "WDSIconIcLocationOn.react",
    "WDSIconIcMail.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcShoppingBag.react",
    "WDSIconIcSyncAlt.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebCustomerDataForContact",
    "useWAWebNoteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      return new Date(e * 1e3).toLocaleString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      });
    }
    var _ = {
      readOnlyRow: {
        marginInlineStart: "x150mmf0",
        marginInlineEnd: "xqf2s3x",
        marginLeft: null,
        marginRight: null,
        $$css: !0,
      },
      lastUpdatedText: { marginTop: "xav9cv8", $$css: !0 },
      labelsRow: {
        alignSelf: "xkh2ocl",
        paddingBottom: "x12xbjc7",
        paddingInlineEnd: "xvtqlqk",
        paddingInlineStart: "x12w63v0",
        paddingTop: "x16ovd2e",
        $$css: !0,
      },
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
      editButtonContainer: {
        opacity: "xmywcsy",
        flexShrink: "x2lah0s",
        $$css: !0,
      },
    };
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.contact;
      if (
        !o("WAWebCustomerManagerGating").customerManagerEnabled() ||
        !o("WAWebCustomerManagerGating").isEligibleForCustomerFields(n)
      )
        return null;
      var r;
      return (
        t[0] !== n
          ? ((r = u.jsx(g, { contact: n })), (t[0] = n), (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(76),
        n = e.contact,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebContactGetters").getLabels]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebContactValues").useContactValues(n.id, a),
        l = i[0],
        c = r("useWAWebCustomerDataForContact")(n.id),
        d;
      if (t[1] !== n.id) {
        var m, f;
        ((d = o("WAJids").validateChatJid(
          (m = (f = n.id) == null ? void 0 : f.toJid()) != null ? m : "",
        )),
          (t[1] = n.id),
          (t[2] = d));
      } else d = t[2];
      var g = d,
        R = r("useWAWebNoteValues")(g),
        L;
      t[3] !== c || t[4] !== g
        ? ((L = function (t, n) {
            g != null &&
              o("WAWebCustomerDataFieldSaver").handleLeadStageTransition(
                g,
                c,
                t,
                n,
              );
          }),
          (t[3] = c),
          (t[4] = g),
          (t[5] = L))
        : (L = t[5]);
      var E = L;
      if (g == null) return null;
      var k = g,
        I,
        T,
        D,
        x,
        $;
      if (t[6] !== c || t[7] !== R.value) {
        var P = o("WAWebCustomerDataLastUpdated").getLastUpdatedTimestamp(
          c,
          R.value,
        );
        ((x = "contact-info-customer-data-section"),
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 })),
              (I = { className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk" }),
              (t[13] = I),
              (t[14] = $))
            : ((I = t[13]), ($ = t[14])),
          t[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Customer info"),
              })),
              (t[15] = T))
            : (T = t[15]),
          (D =
            P != null &&
            u.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              xstyle: _.lastUpdatedText,
              children: s._(/*BTDS*/ "Last updated {timeAgo}", [
                s._param(
                  "timeAgo",
                  o("WAWebCustomerDataLastUpdated").formatTimeAgo(P),
                ),
              ]),
            })),
          (t[6] = c),
          (t[7] = R.value),
          (t[8] = I),
          (t[9] = T),
          (t[10] = D),
          (t[11] = x),
          (t[12] = $));
      } else ((I = t[8]), (T = t[9]), (D = t[10]), (x = t[11]), ($ = t[12]));
      var N;
      t[16] !== I || t[17] !== T || t[18] !== D
        ? ((N = u.jsxs(
            "div",
            babelHelpers.extends({}, I, { children: [T, D] }),
          )),
          (t[16] = I),
          (t[17] = T),
          (t[18] = D),
          (t[19] = N))
        : (N = t[19]);
      var M;
      t[20] !== c || t[21] !== E
        ? ((M = u.jsx(r("WAWebContactInfoLeadStageRow.react"), {
            customer: c,
            onStageChange: E,
          })),
          (t[20] = c),
          (t[21] = E),
          (t[22] = M))
        : (M = t[22]);
      var w;
      t[23] !== n || t[24] !== R
        ? ((w =
            o("WAWebNotesUtils").shouldEnableNotesForWid(n.id) &&
            u.jsx(r("WAWebCustomerProfileNotesField.react"), {
              contact: n,
              noteAsyncState: R,
            })),
          (t[23] = n),
          (t[24] = R),
          (t[25] = w))
        : (w = t[25]);
      var A;
      t[26] !== n
        ? ((A = u.jsx(y, { contact: n })), (t[26] = n), (t[27] = A))
        : (A = t[27]);
      var F = "email-" + String(k),
        O;
      t[28] !== k || t[29] !== c || t[30] !== F
        ? ((O = u.jsx(C, { chatJid: k, customerData: c }, F)),
          (t[28] = k),
          (t[29] = c),
          (t[30] = F),
          (t[31] = O))
        : (O = t[31]);
      var B = "address-" + String(k),
        W;
      t[32] !== k || t[33] !== c || t[34] !== B
        ? ((W = u.jsx(b, { chatJid: k, customerData: c }, B)),
          (t[32] = k),
          (t[33] = c),
          (t[34] = B),
          (t[35] = W))
        : (W = t[35]);
      var q = "birthday-" + String(k),
        U;
      t[36] !== k || t[37] !== c || t[38] !== q
        ? ((U = u.jsx(v, { chatJid: k, customerData: c }, q)),
          (t[36] = k),
          (t[37] = c),
          (t[38] = q),
          (t[39] = U))
        : (U = t[39]);
      var V;
      t[40] !== n || t[41] !== l
        ? ((V = u.jsx(h, { contact: n, labels: l })),
          (t[40] = n),
          (t[41] = l),
          (t[42] = V))
        : (V = t[42]);
      var H, G;
      t[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 })),
          (G = { className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk" }),
          (t[43] = H),
          (t[44] = G))
        : ((H = t[43]), (G = t[44]));
      var z;
      t[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = u.jsx(
            "div",
            babelHelpers.extends({}, G, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Activity"),
              }),
            }),
          )),
          (t[45] = z))
        : (z = t[45]);
      var j = "lastOrder-" + String(k),
        K;
      t[46] !== k || t[47] !== c || t[48] !== j
        ? ((K = u.jsx(S, { chatJid: k, customerData: c }, j)),
          (t[46] = k),
          (t[47] = c),
          (t[48] = j),
          (t[49] = K))
        : (K = t[49]);
      var Q;
      t[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = u.jsx(r("WDSIconIcSyncAlt.react"), { width: 24, height: 24 })),
          (t[50] = Q))
        : (Q = t[50]);
      var X;
      t[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = s._(/*BTDS*/ "Acquisition source")), (t[51] = X))
        : (X = t[51]);
      var Y;
      if (t[52] !== c) {
        var J;
        ((Y =
          (J =
            (c == null ? void 0 : c.acquisitionSource) != null
              ? o(
                  "WAWebAcquisitionSourceNames",
                ).getAcquisitionSourceDisplayName(c.acquisitionSource)
              : null) != null
            ? J
            : o(
                "WAWebAcquisitionSourceNames",
              ).getUnknownAcquisitionSourceLabel()),
          (t[52] = c),
          (t[53] = Y));
      } else Y = t[53];
      var Z = String(Y),
        ee;
      t[54] !== Z
        ? ((ee = u.jsx(r("WAWebBusinessProfileTextField.react"), {
            icon: Q,
            editable: !1,
            label: X,
            value: Z,
            xstyle: _.readOnlyRow,
          })),
          (t[54] = Z),
          (t[55] = ee))
        : (ee = t[55]);
      var te;
      t[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = u.jsx(r("WDSIconIcPersonAdd.react"), {
            width: 24,
            height: 24,
          })),
          (t[56] = te))
        : (te = t[56]);
      var ne;
      t[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = s._(/*BTDS*/ "Acquisition date")), (t[57] = ne))
        : (ne = t[57]);
      var re;
      t[58] !== c
        ? ((re =
            (c == null ? void 0 : c.createdAt) != null
              ? p(c.createdAt)
              : String(s._(/*BTDS*/ "Unknown"))),
          (t[58] = c),
          (t[59] = re))
        : (re = t[59]);
      var oe;
      t[60] !== re
        ? ((oe = u.jsx(r("WAWebBusinessProfileTextField.react"), {
            icon: te,
            editable: !1,
            label: ne,
            value: re,
            xstyle: _.readOnlyRow,
          })),
          (t[60] = re),
          (t[61] = oe))
        : (oe = t[61]);
      var ae;
      return (
        t[62] !== M ||
        t[63] !== w ||
        t[64] !== A ||
        t[65] !== O ||
        t[66] !== W ||
        t[67] !== U ||
        t[68] !== V ||
        t[69] !== K ||
        t[70] !== ee ||
        t[71] !== oe ||
        t[72] !== x ||
        t[73] !== $ ||
        t[74] !== N
          ? ((ae = u.jsxs("div", {
              "data-testid": void 0,
              children: [$, N, M, w, A, O, W, U, V, H, z, K, ee, oe],
            })),
            (t[62] = M),
            (t[63] = w),
            (t[64] = A),
            (t[65] = O),
            (t[66] = W),
            (t[67] = U),
            (t[68] = V),
            (t[69] = K),
            (t[70] = ee),
            (t[71] = oe),
            (t[72] = x),
            (t[73] = $),
            (t[74] = N),
            (t[75] = ae))
          : (ae = t[75]),
        ae
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.contact,
        a = e.labels,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebListsGatingUtils").isListsEnabled()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] !== n.id
        ? ((c = function () {
            var e = o("WAWebChatCollection").ChatCollection.get(n.id);
            e != null &&
              o(
                "WAWebChatContextMenuItemEditLabel.react",
              ).checkDataSharingOrHandleLabelAction(e);
          }),
          (t[1] = n.id),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = {
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x85wx34 x1ubxc9n xi52gnm",
          }),
          (t[3] = m))
        : (m = t[3]);
      var p, f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: _.iconContainer,
            children: l
              ? u.jsx(
                  o("WAWebListPeopleRefreshedIcon.react")
                    .ListPeopleRefreshedIcon,
                  {},
                )
              : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {}),
          })),
          (f = { className: "x98rzlu xeuugli" }),
          (t[4] = p),
          (t[5] = f))
        : ((p = t[4]), (f = t[5]));
      var g;
      if (t[6] !== a) {
        var h;
        ((g = u.jsx(
          "div",
          babelHelpers.extends({}, f, {
            children:
              ((h = a == null ? void 0 : a.length) != null ? h : 0) > 0
                ? u.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
                    labels: a,
                    theme: "standalone",
                  })
                : u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: l
                      ? s._(/*BTDS*/ "Add to lists")
                      : s._(/*BTDS*/ "Add labels"),
                  }),
          }),
        )),
          (t[6] = a),
          (t[7] = g));
      } else g = t[7];
      var y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className:
              "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
          }),
          (t[8] = y))
        : (y = t[8]);
      var C, b;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Edit labels")),
          (b = u.jsx(r("WDSIconIcEdit.react"), { width: 20, height: 20 })),
          (t[9] = C),
          (t[10] = b))
        : ((C = t[9]), (b = t[10]));
      var v;
      t[11] !== d
        ? ((v = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: _.editButtonContainer,
            children: u.jsx(
              "button",
              babelHelpers.extends({}, y, {
                onClick: d,
                "aria-label": C,
                children: b,
              }),
            ),
          })),
          (t[11] = d),
          (t[12] = v))
        : (v = t[12]);
      var S;
      return (
        t[13] !== v || t[14] !== g
          ? ((S = u.jsx(
              "div",
              babelHelpers.extends({}, m, {
                children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  gap: 12,
                  xstyle: _.labelsRow,
                  children: [p, g, v],
                }),
              }),
            )),
            (t[13] = v),
            (t[14] = g),
            (t[15] = S))
          : (S = t[15]),
        S
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.contact,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebFrontendContactGetters").getFormattedPhoneAndType]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebContactValues").useContactValues(n.id, a),
        l = i[0],
        c = l.displayName;
      if (!c) return null;
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("WDSIconIcCall.react"), { width: 24, height: 24 })),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Phone number")), (t[2] = m))
        : (m = t[2]);
      var p;
      return (
        t[3] !== c
          ? ((p = u.jsx(r("WAWebBusinessProfileTextField.react"), {
              icon: d,
              editable: !1,
              label: m,
              value: c,
              xstyle: _.readOnlyRow,
            })),
            (t[3] = c),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    function C(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        a = e.chatJid,
        i = e.customerData,
        l = m((t = i == null ? void 0 : i.email) != null ? t : ""),
        c = l[0],
        d = l[1],
        p = m(i == null ? void 0 : i.email),
        _ = p[0],
        f = p[1];
      if ((i == null ? void 0 : i.email) !== _) {
        var g;
        (f(i == null ? void 0 : i.email),
          d((g = i == null ? void 0 : i.email) != null ? g : ""));
      }
      var h;
      n[0] !== a || n[1] !== i
        ? ((h = function (t) {
            (d(t),
              o("WAWebCustomerDataFieldSaver").saveCustomerDataField(a, i, {
                email: t,
              }));
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = h))
        : (h = n[2]);
      var y = h,
        C,
        b,
        v;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(r("WDSIconIcMail.react"), { width: 24, height: 24 })),
          (b = s._(/*BTDS*/ "Email")),
          (v = s._(/*BTDS*/ "Add email")),
          (n[3] = C),
          (n[4] = b),
          (n[5] = v))
        : ((C = n[3]), (b = n[4]), (v = n[5]));
      var S;
      return (
        n[6] !== c || n[7] !== y
          ? ((S = u.jsx(r("WAWebCustomerProfileEditableField.react"), {
              icon: C,
              label: b,
              placeholder: v,
              value: c,
              onSave: y,
            })),
            (n[6] = c),
            (n[7] = y),
            (n[8] = S))
          : (S = n[8]),
        S
      );
    }
    function b(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        a = e.chatJid,
        i = e.customerData,
        l = m((t = i == null ? void 0 : i.address) != null ? t : ""),
        c = l[0],
        d = l[1],
        p = m(i == null ? void 0 : i.address),
        _ = p[0],
        f = p[1];
      if ((i == null ? void 0 : i.address) !== _) {
        var g;
        (f(i == null ? void 0 : i.address),
          d((g = i == null ? void 0 : i.address) != null ? g : ""));
      }
      var h;
      n[0] !== a || n[1] !== i
        ? ((h = function (t) {
            (d(t),
              o("WAWebCustomerDataFieldSaver").saveCustomerDataField(a, i, {
                address: t,
              }));
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = h))
        : (h = n[2]);
      var y = h,
        C,
        b,
        v;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(r("WDSIconIcLocationOn.react"), {
            width: 24,
            height: 24,
          })),
          (b = s._(/*BTDS*/ "Address")),
          (v = s._(/*BTDS*/ "Add address")),
          (n[3] = C),
          (n[4] = b),
          (n[5] = v))
        : ((C = n[3]), (b = n[4]), (v = n[5]));
      var S;
      return (
        n[6] !== c || n[7] !== y
          ? ((S = u.jsx(r("WAWebCustomerProfileEditableField.react"), {
              icon: C,
              label: b,
              placeholder: v,
              value: c,
              onSave: y,
            })),
            (n[6] = c),
            (n[7] = y),
            (n[8] = S))
          : (S = n[8]),
        S
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.chatJid,
        a = e.customerData,
        i;
      t[0] !== a
        ? ((i =
            (a == null ? void 0 : a.birthday) != null
              ? new Date(a.birthday * 1e3)
              : null),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = m(i),
        c = l[0],
        d = l[1],
        p = m(a == null ? void 0 : a.birthday),
        _ = p[0],
        f = p[1];
      (a == null ? void 0 : a.birthday) !== _ &&
        (f(a == null ? void 0 : a.birthday),
        d(
          (a == null ? void 0 : a.birthday) != null
            ? new Date(a.birthday * 1e3)
            : null,
        ));
      var g;
      t[2] !== n || t[3] !== a
        ? ((g = function (t) {
            d(t);
            var e =
              t != null
                ? o("WATimeUtils").castToUnixTime(Math.floor(t.getTime() / 1e3))
                : void 0;
            o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, {
              birthday: e,
            });
          }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y,
        C,
        b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSIconIcCake.react"), { width: 24, height: 24 })),
          (C = s._(/*BTDS*/ "Birthday")),
          (b = s._(/*BTDS*/ "Add birthday")),
          (t[5] = y),
          (t[6] = C),
          (t[7] = b))
        : ((y = t[5]), (C = t[6]), (b = t[7]));
      var v;
      return (
        t[8] !== c || t[9] !== h
          ? ((v = u.jsx(r("WAWebCustomerProfileDateField.react"), {
              icon: y,
              label: C,
              placeholder: b,
              value: c,
              onSave: h,
            })),
            (t[8] = c),
            (t[9] = h),
            (t[10] = v))
          : (v = t[10]),
        v
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.chatJid,
        a = e.customerData,
        i;
      t[0] !== a
        ? ((i =
            (a == null ? void 0 : a.lastOrder) != null
              ? new Date(a.lastOrder * 1e3)
              : null),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = m(i),
        c = l[0],
        d = l[1],
        p = m(a == null ? void 0 : a.lastOrder),
        _ = p[0],
        f = p[1];
      (a == null ? void 0 : a.lastOrder) !== _ &&
        (f(a == null ? void 0 : a.lastOrder),
        d(
          (a == null ? void 0 : a.lastOrder) != null
            ? new Date(a.lastOrder * 1e3)
            : null,
        ));
      var g;
      t[2] !== n || t[3] !== a
        ? ((g = function (t) {
            d(t);
            var e =
              t != null
                ? o("WATimeUtils").castToUnixTime(Math.floor(t.getTime() / 1e3))
                : void 0;
            o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, {
              lastOrder: e,
            });
          }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y,
        C,
        b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSIconIcShoppingBag.react"), {
            width: 24,
            height: 24,
          })),
          (C = s._(/*BTDS*/ "Last order")),
          (b = s._(/*BTDS*/ "Add last order date")),
          (t[5] = y),
          (t[6] = C),
          (t[7] = b))
        : ((y = t[5]), (C = t[6]), (b = t[7]));
      var v;
      return (
        t[8] !== h || t[9] !== c
          ? ((v = u.jsx(r("WAWebCustomerProfileDateField.react"), {
              icon: y,
              label: C,
              placeholder: b,
              value: c,
              onSave: h,
            })),
            (t[8] = h),
            (t[9] = c),
            (t[10] = v))
          : (v = t[10]),
        v
      );
    }
    l.default = f;
  },
  226,
);
