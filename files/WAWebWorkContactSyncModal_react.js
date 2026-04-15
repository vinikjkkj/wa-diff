__d(
  "WAWebWorkContactSyncModal.react",
  [
    "Promise",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebDeleteContactAction",
    "WAWebLidAwareContactsDB",
    "WAWebModal.react",
    "WAWebSaveContactAction",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WDSButton.react",
    "WDSText.react",
    "WDSVars.stylex",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState,
      y = "\uD83D\uDC64";
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebLidAwareContactsDB").all(),
            t = [];
          for (var n of e)
            if (
              !(
                n.name == null ||
                n.name === "" ||
                n.syncToAddressbook === !0 ||
                !n.name.endsWith(y)
              )
            ) {
              var o = n.phoneNumber;
              o == null ||
                !o.endsWith("@c.us") ||
                t.push({
                  familyName: n.name,
                  givenName: "",
                  phoneNumber: o.replace(/@c\.us$/, ""),
                });
            }
          return t;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = new (o("WAWebUsync").USyncQuery)()
              .withMode("query")
              .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.PN);
          e.forEach(function (e) {
            var t = e.phoneNumber;
            if (t != null) {
              var r = new (o("WAWebUsyncUser").USyncUser)(),
                a = t.startsWith("+") ? t : "+" + t;
              (r.withPhone(a), n.withUser(r));
            }
          });
          var r = yield n.execute(),
            a = new Map();
          return (
            (t = r.list) == null ||
              t.forEach(function (e) {
                var t;
                if (e.id && (t = e.contact) != null && t.type) {
                  var n = e.id
                    .toString()
                    .replace(/@c\.us$/, "")
                    .replace(/^\+/, "");
                  a.set(n, e.contact.type);
                }
              }),
            e.filter(function (e) {
              var t = e.phoneNumber;
              if (t == null) return !1;
              var n = t.replace(/^\+/, ""),
                r = a.get(n);
              return r === "in";
            })
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e
            .filter(function (e) {
              return e.phoneNumber != null;
            })
            .map(function (e) {
              var t, n, r;
              return {
                phoneNumber: (t = e.phoneNumber) != null ? t : "",
                firstName: (n = e.givenName) != null ? n : "",
                lastName: (r = e.familyName) != null ? r : "",
                syncToAddressbook: !1,
              };
            });
          t.length !== 0 &&
            (yield o("WAWebSaveContactAction").saveContactBatchAction(t));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("compactMap")(e, function (e) {
            return e.phoneNumber;
          });
          t.length !== 0 &&
            (yield o("WAWebDeleteContactAction").deleteContactBatchAction(t));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      var n = new Map(
          e.map(function (e) {
            return [T(e), e];
          }),
        ),
        r = new Map(
          t.map(function (e) {
            return [T(e), e];
          }),
        ),
        o = e.filter(function (e) {
          var t = r.get(T(e));
          return t == null || !D(e, t);
        }),
        a = t.filter(function (e) {
          var t = n.get(T(e));
          return t == null || !D(e, t);
        });
      return { contactsToAdd: o, contactsToDelete: a };
    }
    function T(e) {
      var t;
      return (t = e.phoneNumber) != null ? t : "";
    }
    function D(e, t) {
      var n = x(e.phoneNumber) === x(t.phoneNumber);
      return (
        n &&
        [e.givenName, e.familyName].filter(Boolean).join(" ") ===
          [t.givenName, t.familyName].filter(Boolean).join(" ")
      );
    }
    function x(e) {
      return e == null ? e : e.replace(/[^+\d]/g, "");
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e._level,
        a = e.children,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className:
              "x6s0dn4 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 x1q0g3np x98l61r x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
          }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] !== a
          ? ((l = d.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: d.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: a,
                }),
              }),
            )),
            (t[1] = a),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    function P(e, t) {
      return e != null
        ? d.jsxs(r("WDSText.react"), {
            type: "Body2",
            colorName: "secondaryPositive",
            children: [
              "Sync completed successfully! Added ",
              e.added,
              " contact",
              e.added !== 1 ? "s" : "",
              ", deleted ",
              e.deleted,
              " ",
              "contact",
              e.deleted !== 1 ? "s" : "",
              ".",
            ],
          })
        : t != null
          ? d.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "secondaryNegative",
              children: t,
            })
          : d.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children:
                "Sync WhatsApp employee contacts with delta-based updates.",
            });
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(t) {
      var a = o("react-compiler-runtime").c(59),
        i = t.onClose,
        l = t.workContacts,
        c = h("default"),
        m = c[0],
        p = c[1],
        f = h(null),
        y = f[0],
        b = f[1],
        S = h(null),
        L = S[0],
        k = S[1],
        T;
      e: {
        if (y == null || L == null) {
          T = null;
          break e;
        }
        var D;
        a[0] !== y || a[1] !== L
          ? ((D = I(y, L)), (a[0] = y), (a[1] = L), (a[2] = D))
          : (D = a[2]);
        var x = D,
          N = x.contactsToAdd,
          w = x.contactsToDelete,
          A;
        (a[3] !== N || a[4] !== w
          ? ((A = { contactsToAdd: N, contactsToDelete: w }),
            (a[3] = N),
            (a[4] = w),
            (a[5] = A))
          : (A = a[5]),
          (T = A));
      }
      var F = T,
        O = h(
          l == null || l.length === 0
            ? "No work contacts provided. Please check your permissions."
            : null,
        ),
        B = O[0],
        W = O[1],
        q = h(null),
        U = q[0],
        V = q[1],
        H = g(!0),
        G;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function (t) {
            H.current && p(t);
          }),
          (a[6] = G))
        : (G = a[6]);
      var z = G,
        j;
      a[7] !== y
        ? ((j = function () {
            return y
              ? C()
                  .then(k)
                  .catch(function (t) {
                    (o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[WorkContactSync] fetchLocalContacts failed",
                        ])),
                    ),
                      W("Failed to fetch device contacts: " + String(t)));
                  })
              : (u || (u = n("Promise"))).resolve();
          }),
          (a[7] = y),
          (a[8] = j))
        : (j = a[8]);
      var K = j,
        Q;
      a[9] !== K
        ? ((Q = function () {
            return (
              k(null),
              z("refreshing_device_contacts"),
              K().then(function () {
                z("default");
              })
            );
          }),
          (a[9] = K),
          (a[10] = Q))
        : (Q = a[10]);
      var X = Q,
        Y,
        J;
      (a[11] !== l
        ? ((Y = function () {
            if (l != null && l.length > 0) {
              var e = l.map(M);
              v(e)
                .then(b)
                .catch(function (e) {
                  (o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WorkContactSync] filterInContactsOnly failed",
                      ])),
                  ),
                    W(String(e)));
                });
            }
          }),
          (J = [l]),
          (a[11] = l),
          (a[12] = Y),
          (a[13] = J))
        : ((Y = a[12]), (J = a[13])),
        _(Y, J));
      var Z, ee;
      (a[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function () {
            return function () {
              H.current = !1;
            };
          }),
          (ee = []),
          (a[14] = Z),
          (a[15] = ee))
        : ((Z = a[14]), (ee = a[15])),
        _(Z, ee));
      var te, ne;
      (a[16] !== y || a[17] !== K
        ? ((te = function () {
            y != null && K();
          }),
          (ne = [y, K]),
          (a[16] = y),
          (a[17] = K),
          (a[18] = te),
          (a[19] = ne))
        : ((te = a[18]), (ne = a[19])),
        _(te, ne));
      var re;
      a[20] !== X
        ? ((re = function (t, n) {
            (z("adding_clearing"),
              W(null),
              E(t)
                .then(function () {
                  return (z("adding_contacts"), R(n));
                })
                .then(function () {
                  (W(null),
                    V({ added: n.length, deleted: t.length }),
                    z("default"));
                })
                .catch(function (e) {
                  W("Sync failed: " + String(e));
                })
                .finally(X));
          }),
          (a[20] = X),
          (a[21] = re))
        : (re = a[21]);
      var oe = re,
        ae;
      a[22] !== X
        ? ((ae = function (t) {
            (z("deleting"),
              W(null),
              E(t)
                .then(function () {
                  W(null);
                })
                .catch(function (e) {
                  W("Delete failed: " + String(e));
                })
                .finally(X));
          }),
          (a[22] = X),
          (a[23] = ae))
        : (ae = a[23]);
      var ie = ae,
        le;
      if (m === "loading") {
        var se;
        (a[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((se = d.jsx($, { children: "Loading contacts..." })), (a[24] = se))
          : (se = a[24]),
          (le = se));
      } else if (L != null && F != null) {
        var ue = F.contactsToAdd,
          ce = F.contactsToDelete;
        if (m === "default") {
          var de;
          a[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((de = { className: "x78zum5 xdt5ytf x1f0uite xs2akgl x98l61r" }),
              (a[25] = de))
            : (de = a[25]);
          var me =
              "Sync Contacts (" +
              ue.length +
              " New, " +
              ce.length +
              " Obsolete)",
            pe;
          a[26] !== ue || a[27] !== ce || a[28] !== oe
            ? ((pe = function () {
                oe(ce, ue);
              }),
              (a[26] = ue),
              (a[27] = ce),
              (a[28] = oe),
              (a[29] = pe))
            : (pe = a[29]);
          var _e;
          a[30] !== me || a[31] !== pe
            ? ((_e = d.jsx(r("WDSButton.react"), {
                variant: "outline",
                size: "medium",
                type: "default",
                label: me,
                onPress: pe,
              })),
              (a[30] = me),
              (a[31] = pe),
              (a[32] = _e))
            : (_e = a[32]);
          var fe;
          a[33] !== L || a[34] !== ie
            ? ((fe =
                L.length > 0 &&
                d.jsx(r("WDSButton.react"), {
                  variant: "outline",
                  size: "medium",
                  type: "default",
                  label: "Delete Synced Contacts (" + L.length + ")",
                  onPress: function () {
                    ie(L);
                  },
                })),
              (a[33] = L),
              (a[34] = ie),
              (a[35] = fe))
            : (fe = a[35]);
          var ge;
          (a[36] !== _e || a[37] !== fe
            ? ((ge = d.jsxs(
                "div",
                babelHelpers.extends({}, de, { children: [_e, fe] }),
              )),
              (a[36] = _e),
              (a[37] = fe),
              (a[38] = ge))
            : (ge = a[38]),
            (le = ge));
        } else if (m === "adding_clearing") {
          var he;
          (a[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((he = d.jsx($, {
                children: "Deleting obsolete WhatsApp employee contacts...",
              })),
              (a[39] = he))
            : (he = a[39]),
            (le = he));
        } else if (m === "adding_contacts") {
          var ye;
          (a[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((ye = d.jsx($, {
                children: "Adding new WhatsApp employee contacts...",
              })),
              (a[40] = ye))
            : (ye = a[40]),
            (le = ye));
        } else if (m === "deleting") {
          var Ce;
          (a[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ce = d.jsx($, {
                children: "Deleting WhatsApp employee contacts...",
              })),
              (a[41] = Ce))
            : (Ce = a[41]),
            (le = Ce));
        } else if (m === "refreshing_device_contacts") {
          var be;
          (a[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((be = d.jsx($, { children: "Refreshing device contacts..." })),
              (a[42] = be))
            : (be = a[42]),
            (le = be));
        } else {
          var ve;
          (a[43] !== m
            ? ((ve = d.jsxs($, { children: ["Error, unexpected state: ", m] })),
              (a[43] = m),
              (a[44] = ve))
            : (ve = a[44]),
            (le = ve));
        }
      } else {
        var Se;
        (a[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((Se = d.jsx($, {
              children: "Computing current device contacts...",
            })),
            (a[45] = Se))
          : (Se = a[45]),
          (le = Se));
      }
      var Re;
      a[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = { surface: "unknown", viewName: "work-contact-sync" }),
          (a[46] = Re))
        : (Re = a[46]);
      var Le, Ee, ke;
      if (a[47] === Symbol.for("react.memo_cache_sentinel")) {
        var Ie;
        ((Le = {
          minWidth: "450px",
          paddingTop: (Ie = o("WDSVars.stylex")).WDSVars.spacingDoublePlus,
          paddingInline: Ie.WDSVars.spacingDoublePlus,
          paddingBottom: 0,
        }),
          (Ee = d.jsx("h1", {
            style: {
              fontSize: "18px",
              marginBottom: Ie.WDSVars.spacingSinglePlus,
            },
            children: "Work Contact Sync",
          })),
          (ke = {
            maxHeight: "50vh",
            overflowY: "auto",
            paddingBlock: Ie.WDSVars.spacingSingle,
            paddingInline: Ie.WDSVars.spacingSingle,
            marginBlock: "calc(-1 * " + Ie.WDSVars.spacingSingle + ")",
            marginInline: "calc(-1 * " + Ie.WDSVars.spacingSingle + ")",
          }),
          (a[47] = Le),
          (a[48] = Ee),
          (a[49] = ke));
      } else ((Le = a[47]), (Ee = a[48]), (ke = a[49]));
      var Te;
      a[50] !== B || a[51] !== U
        ? ((Te = P(U, B)), (a[50] = B), (a[51] = U), (a[52] = Te))
        : (Te = a[52]);
      var De;
      a[53] !== le || a[54] !== Te
        ? ((De = d.jsxs("div", {
            style: Le,
            children: [Ee, d.jsxs("div", { style: ke, children: [Te, le] })],
          })),
          (a[53] = le),
          (a[54] = Te),
          (a[55] = De))
        : (De = a[55]);
      var xe;
      return (
        a[56] !== i || a[57] !== De
          ? ((xe = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.Flex,
              tsNavigationData: Re,
              onCancel: i,
              cancelText: "Close",
              children: De,
            })),
            (a[56] = i),
            (a[57] = De),
            (a[58] = xe))
          : (xe = a[58]),
        xe
      );
    }
    function M(e) {
      var t, n;
      return babelHelpers.extends({}, e, {
        phoneNumber:
          (t = e.phoneNumber) == null ? void 0 : t.replace(/^\+/, ""),
        familyName: ((n = e.familyName) != null ? n : "") + (" " + y),
      });
    }
    l.default = N;
  },
  98,
);
