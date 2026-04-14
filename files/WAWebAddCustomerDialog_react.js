__d(
  "WAWebAddCustomerDialog.react",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebAddCustomerContactRow.react",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactLogging",
    "WAWebContactPhoneNumberFields.react",
    "WAWebContactUtils",
    "WAWebCustomerDataCollection",
    "WAWebCustomerDataFieldSaver",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebL10NAccentFold",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNoteAction",
    "WAWebPhoneNumberSearch",
    "WAWebPhoneNumberValidationUtils",
    "WAWebQueryExistsJob",
    "WAWebSaveContactAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "WDSIconIcArrowDropDown.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "WDSTextField.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebUnmountSignal",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useDeferredValue,
      p = c.useEffect,
      _ = c.useMemo,
      f = c.useRef,
      g = c.useState;
    function h(e) {
      return u.jsx(r("WDSMenu.react"), {
        children: o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function (t) {
          return u.jsx(
            r("WDSMenuItem.react"),
            {
              title: o("WAWebLeadStageNames").getLeadStageName(t),
              onPress: function () {
                return e(t);
              },
              testid: void 0,
            },
            t,
          );
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return u.jsx(r("WDSMenu.react"), {
        children: o("WAWebAcquisitionSourceNames")
          .getRegisteredAcquisitionSourceIds()
          .map(function (t) {
            var n;
            return u.jsx(
              r("WDSMenuItem.react"),
              {
                title:
                  (n = o(
                    "WAWebAcquisitionSourceNames",
                  ).getAcquisitionSourceDisplayName(t)) != null
                    ? n
                    : "",
                onPress: function () {
                  return e(t);
                },
                testid: void 0,
              },
              t,
            );
          }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      var e = g(""),
        t = e[0],
        a = e[1],
        i = g(""),
        l = i[0],
        c = i[1],
        C = g(!0),
        b = C[0],
        v = C[1],
        S = d(function (e) {
          (a(e), v(!0));
        }, []),
        R = d(function (e) {
          (c(e), v(!0));
        }, []),
        L = _(function () {
          return o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).getCountryCodeIso(
            o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user,
          );
        }, []),
        E = g(L),
        k = E[0],
        I = E[1],
        T = g(null),
        D = T[0],
        x = T[1],
        $ = g(null),
        P = $[0],
        N = $[1],
        M = g(null),
        w = M[0],
        A = M[1],
        F = g(!1),
        O = F[0],
        B = F[1],
        W = r("useWAWebUnmountSignal")(),
        q = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              (N(null), A(null), B(!1));
              var n = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(
                e,
                t,
              );
              if (n == null) {
                N(
                  o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType
                    .Invalid,
                );
                return;
              }
              var r = yield o("WAWebQueryExistsJob").queryPhoneExists(n);
              if (!W.aborted) {
                if (r == null) {
                  N(
                    o("WAWebContactPhoneNumberFields.react")
                      .PhoneNumberStatusType.Unregistered,
                  );
                  return;
                }
                A(r.wid);
                var a = o("WAWebContactCollection").ContactCollection.get(
                  r.wid,
                );
                if (
                  a != null &&
                  o(
                    "WAWebCustomerDataCollection",
                  ).CustomerDataCollection.isCustomer(a)
                ) {
                  N(
                    o("WAWebContactPhoneNumberFields.react")
                      .PhoneNumberStatusType.IsCustomer,
                  );
                  return;
                }
                (a != null &&
                  B(o("WAWebFrontendContactGetters").getIsMyContact(a)),
                  N(
                    o("WAWebContactPhoneNumberFields.react")
                      .PhoneNumberStatusType.Registered,
                  ));
              }
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        U = r("useWAWebDebouncedCallback")(q, 250),
        V = d(
          function (e, t) {
            (I(e),
              x(t),
              t != null && t !== "" ? U(e, t) : (N(null), A(null), B(!1)));
          },
          [U],
        ),
        H = r("WAWebNoop"),
        G = g(""),
        z = G[0],
        j = G[1],
        K = g(""),
        Q = K[0],
        X = K[1],
        Y = g(""),
        J = Y[0],
        Z = Y[1],
        ee = g(o("WAWebLeadStage").LeadStage.NEW_LEAD),
        te = ee[0],
        ne = ee[1],
        re = g(null),
        oe = re[0],
        ae = re[1],
        ie = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (w != null) {
              var e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(
                k,
                D,
              );
              if (e != null) {
                var n = o("WAWebWidToJid").widToChatJid(w);
                (yield o("WAWebSaveContactAction").saveContactAction({
                  firstName: t.trim(),
                  lastName: l.trim(),
                  isExistingContact: O,
                  phoneNumber: e,
                  prevPhoneNumber: O ? e : null,
                  syncToAddressbook: !1,
                }),
                  yield o("WAWebFindChatAction").findOrCreateLatestChat(
                    w,
                    "createContact",
                  ),
                  yield o("WAWebCustomerDataFieldSaver").upsertAsCustomer(
                    n,
                    te,
                    {
                      email: z.trim(),
                      altPhoneNumbers: "",
                      address: Q.trim(),
                      acquisitionSource: oe != null ? oe : void 0,
                    },
                  ),
                  J.trim() !== "" &&
                    (yield o("WAWebNoteAction").addOrEditNoteAction(
                      {
                        actionType: "add",
                        noteType: "unstructured",
                        chatJid: n,
                        content: J.trim(),
                      },
                      !0,
                    )),
                  o("WAWebModalManager").closeModalManager());
              }
            }
          }),
          [Q, k, z, t, O, l, J, D, oe, te, w],
        ),
        le = f(null),
        se = f(null),
        ue = f(null);
      p(function () {
        var e = function (t) {
          var e = t.target;
          e instanceof Node &&
            ue.current != null &&
            !ue.current.contains(e) &&
            v(!1);
        };
        return (
          document.addEventListener("mousedown", e),
          function () {
            document.removeEventListener("mousedown", e);
          }
        );
      }, []);
      var ce = (t + " " + l).trim(),
        de = m(ce),
        me = _(
          function () {
            if (de === "") return [];
            var e = o("WAWebL10NAccentFold").accentFold(de),
              t = o("WAWebPhoneNumberSearch").numberSearch(e),
              n = o(
                "WAWebContactCollection",
              ).ContactCollection.getFilteredContacts({ showMe: !1 });
            return n.filter(function (n) {
              return n.searchMatchExact(e, t) != null;
            });
          },
          [de],
        ),
        pe = d(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                (j(""),
                  X(""),
                  Z(""),
                  ne(o("WAWebLeadStage").LeadStage.NEW_LEAD),
                  ae(null),
                  N(null));
                var n =
                  o("WAWebContactUtils").getContactDataFromContactModel(e);
                if (n != null) (a(n.firstName), c(n.lastName));
                else {
                  var r = o("WAWebFrontendContactGetters").getDisplayName(e),
                    i = o("WAWebContactUtils").splitContactName(r),
                    l = i.firstName,
                    s = i.lastName;
                  (a(l), c(s));
                }
                v(!1);
                var u = (t = e.phoneNumber) != null ? t : e.id,
                  d = u.user;
                if (d != null) {
                  var m = o(
                      "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
                    ).cleanPhoneNumberInputValue(String(d)),
                    p = m.countryCodeIso,
                    _ = m.phoneNumberWithoutCountryCode;
                  (p != null && I(p),
                    _.length > 0 && (x(_), U(p != null ? p : k, _)));
                }
                var f = o("WAWebWidToJid").widToChatJid(e.id),
                  g = o(
                    "WAWebCustomerDataCollection",
                  ).CustomerDataCollection.maybeGetCustomerDataByChatJid(f);
                if (g != null) {
                  var h, y, C, b;
                  (j((h = g.email) != null ? h : ""),
                    X((y = g.address) != null ? y : ""));
                  var S = g.leadStage;
                  (ne(
                    (C =
                      S != null
                        ? o("WAWebLeadStage").getLeadStageFromNumber(S)
                        : null) != null
                      ? C
                      : o("WAWebLeadStage").LeadStage.NEW_LEAD,
                  ),
                    ae((b = g.acquisitionSource) != null ? b : null));
                }
                var R =
                  yield o("WAWebNoteAction").retrieveOnlyNoteForChatJid(f);
                if (R != null) {
                  var L;
                  Z((L = R.content) != null ? L : "");
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [k, U],
        ),
        _e = d(
          function (e) {
            pe(e);
          },
          [pe],
        ),
        fe = ce !== "",
        ge = me.length > 0,
        he = d(function (e) {
          ne(e);
        }, []),
        ye = r("useWDSMenu")({ targetRef: le, menu: h(he), dismissable: !0 }),
        Ce = ye.closeMenu,
        be = ye.isMenuOpen,
        ve = ye.menuPortal,
        Se = ye.openMenu,
        Re = d(
          function () {
            be ? Ce() : Se();
          },
          [Ce, be, Se],
        ),
        Le = d(function (e) {
          ae(e);
        }, []),
        Ee = r("useWDSMenu")({ targetRef: se, menu: y(Le), dismissable: !0 }),
        ke = Ee.closeMenu,
        Ie = Ee.isMenuOpen,
        Te = Ee.menuPortal,
        De = Ee.openMenu,
        xe = d(
          function () {
            Ie ? ke() : De();
          },
          [ke, Ie, De],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Add customer"),
        okText: s._(/*BTDS*/ "Save"),
        cancelText: s._(/*BTDS*/ "Cancel"),
        onOK: ie,
        onCancel: o("WAWebModalManager").closeModalManager,
        okDisabled:
          t.trim() === "" ||
          l.trim() === "" ||
          D == null ||
          D.trim() === "" ||
          P !==
            o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType
              .Registered,
        testid: void 0,
        children: u.jsxs("div", {
          className: "x78zum5 xdt5ytf x1f0uite",
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Create a customer from an existing contact or add a new customer.",
              ),
            }),
            u.jsx("div", {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Customer info"),
              }),
            }),
            u.jsxs("div", {
              className: "x1n2onr6",
              ref: ue,
              children: [
                u.jsxs("div", {
                  className: "x78zum5 x1q0g3np x1s70e7g",
                  children: [
                    u.jsx("div", {
                      className: "x1iyjqo2 xs83m0k x1r8uery",
                      children: u.jsx(r("WDSTextField.react"), {
                        value: t,
                        onValueChange: S,
                        label: s._(/*BTDS*/ "First name"),
                        testid: void 0,
                      }),
                    }),
                    u.jsx("div", {
                      className: "x1iyjqo2 xs83m0k x1r8uery",
                      children: u.jsx(r("WDSTextField.react"), {
                        value: l,
                        onValueChange: R,
                        label: s._(/*BTDS*/ "Last name"),
                        testid: void 0,
                      }),
                    }),
                  ],
                }),
                b &&
                  fe &&
                  ge &&
                  u.jsx("div", {
                    className:
                      "x10l6tqk x1o0tod xtijo5x xdsb8wn xfo81ep xw6alqk x1suzm8a x1p453bz x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x972fbf x1kpx6y5 x1hkcv85 x1odjw0f",
                    children: me.map(function (e) {
                      return u.jsx(
                        r("WAWebAddCustomerContactRow.react"),
                        { contact: e, onClick: _e },
                        String(e.id),
                      );
                    }),
                  }),
                b &&
                  fe &&
                  !ge &&
                  u.jsx("div", {
                    className:
                      "x10l6tqk x1o0tod xtijo5x xdsb8wn xfo81ep xw6alqk x1suzm8a x1p453bz x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x972fbf x1kpx6y5 x1hkcv85 x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab",
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      children: s._(
                        /*BTDS*/ 'No matching contacts for "{query}". Enter details below to add a new customer.',
                        [s._param("query", ce)],
                      ),
                    }),
                  }),
              ],
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Search for an existing contact or add a new contact.",
              ),
            }),
            u.jsx(
              o("WAWebContactPhoneNumberFields.react").ContactPhoneNumberFields,
              {
                countryCode: k,
                numberWithoutPrefix: D,
                onChange: V,
                onViewDuplicateContact: H,
                origin: o("WAWebContactLogging").ContactSourceType.NewChat,
                status: P,
              },
            ),
            u.jsx("div", {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Optional info"),
              }),
            }),
            u.jsx(r("WDSTextField.react"), {
              value: z,
              onValueChange: j,
              label: s._(/*BTDS*/ "Email address"),
              testid: void 0,
            }),
            u.jsx(r("WDSTextField.react"), {
              value: Q,
              onValueChange: X,
              label: s._(/*BTDS*/ "Address"),
              testid: void 0,
            }),
            u.jsx("textarea", {
              className:
                "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a x16ovd2e x12xbjc7 xdx6fka xvtqlqk xseoqlg x288g5 xjbqb8w x1heor9g xjb2p0i x1qlqyl8 x15bjb6t x1a2a7pz x9f619 xh8yej3",
              value: J,
              onChange: function (t) {
                return Z(t.currentTarget.value);
              },
              placeholder: s._(/*BTDS*/ "Add notes"),
              "data-testid": void 0,
            }),
            u.jsxs("div", {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1qughib x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a xnnlda6 xdx6fka xvtqlqk x1ypdohk x9f619",
              ref: le,
              onClick: Re,
              onKeyDown: function (t) {
                (t.key === "Enter" || t.key === " ") &&
                  (t.preventDefault(), Re());
              },
              role: "button",
              tabIndex: 0,
              "data-testid": void 0,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: o("WAWebLeadStageNames").getLeadStageName(te),
                }),
                u.jsx(r("WDSIconIcArrowDropDown.react"), {
                  height: 20,
                  width: 20,
                }),
              ],
            }),
            ve,
            u.jsxs("div", {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1qughib x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a xnnlda6 xdx6fka xvtqlqk x1ypdohk x9f619",
              ref: se,
              onClick: xe,
              onKeyDown: function (t) {
                (t.key === "Enter" || t.key === " ") &&
                  (t.preventDefault(), xe());
              },
              role: "button",
              tabIndex: 0,
              "data-testid": void 0,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName:
                    oe != null ? "contentDefault" : "contentDeemphasized",
                  children:
                    oe != null
                      ? o(
                          "WAWebAcquisitionSourceNames",
                        ).getAcquisitionSourceDisplayName(oe)
                      : s._(/*BTDS*/ "Select a source"),
                }),
                u.jsx(r("WDSIconIcArrowDropDown.react"), {
                  height: 20,
                  width: 20,
                }),
              ],
            }),
            Te,
          ],
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
