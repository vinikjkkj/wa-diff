__d(
  "WAWebContactEditDrawer.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAPromiseCache",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactLogging",
    "WAWebContactPhoneNumberFields.react",
    "WAWebContactPhoneNumberReadOnlyField.react",
    "WAWebContactSyncLogger",
    "WAWebContactsIcon.react",
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "WAWebCustomerManagerGating",
    "WAWebDeleteContactAction",
    "WAWebDeleteContactPopup.react",
    "WAWebDeleteIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebFBLogger",
    "WAWebFailedToSaveContactPopup.react",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebIcSyncIcon.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebModalManager",
    "WAWebPhoneIcon.react",
    "WAWebPhoneNumberValidationUtils",
    "WAWebQueryExistsJob",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSaveContactAction",
    "WAWebSpinner.react",
    "WAWebStopSyncContactToAddressbookPopup.react",
    "WAWebSyncToggleDisabledPopup.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUseContactManagementAvailability",
    "WAWebUserPrefsContactManagement",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameContactField.react",
    "WAWebUsernameKeyVerificationFlow",
    "WAWebUsernamePhoneNumberMismatchModal.react",
    "WAWebUsernameUtils",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVelocityTransitionGroup",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WDSIconIcCheck.react",
    "WDSSwitch.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useWAWebContactValues",
    "useWAWebDebouncedCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState,
      y = {
        iconSection: {
          width: "x100vrsf",
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          justifyContent: "x1nhvcw1",
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          $$css: !0,
        },
        deleteIconRefreshed: { color: "x14ug900", $$css: !0 },
        deleteIconContainer: {
          borderStartStartRadius: "xvs2etk",
          borderStartEndRadius: "xg3wpu6",
          borderEndEndRadius: "x1jwbhkm",
          borderEndStartRadius: "xgg4q86",
          height: "x1vqgdyp",
          width: "x100vrsf",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flex: "x1okw0bk",
          cursor: "x1ypdohk",
          ":hover_backgroundColor": "x17gydlx",
          $$css: !0,
        },
        saveButton: {
          color: "x1pse0pq",
          backgroundColor: "xfn3atn",
          $$css: !0,
        },
      },
      C = "sync-contact-switch";
    function b(t) {
      var a,
        i,
        l,
        c,
        m,
        b,
        v = t.contactData,
        S = t.onBack,
        R = t.onCancel,
        L = t.onSave,
        E = t.origin,
        k = t.ref,
        I = t.viewType,
        T = (v == null ? void 0 : v.isExistingContact) === !0,
        D = v == null || (a = v.phoneNumber) == null ? void 0 : a.user,
        x = T ? D : null,
        $ =
          (i = v == null ? void 0 : v.lid) != null
            ? i
            : v == null
              ? void 0
              : v.phoneNumber,
        P =
          (l = o("useWAWebContactValues").useOptionalContactValues($, [
            o("WAWebFrontendContactGetters").getIsUsernameContact,
          ])) != null
            ? l
            : [],
        N = P[0],
        M = f(
          function () {
            if (r("isStringNullOrEmpty")(D))
              return o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).getCountryCodeIso(
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                  .user,
              );
            var e = o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).cleanPhoneNumberInputValue(D),
              t = e.countryCodeIso;
            return r("WANullthrows")(t);
          },
          [D],
        ),
        w = h((c = v == null ? void 0 : v.firstName) != null ? c : ""),
        A = w[0],
        F = w[1],
        O = h((m = v == null ? void 0 : v.lastName) != null ? m : ""),
        B = O[0],
        W = O[1],
        q = h(M),
        U = q[0],
        V = q[1],
        H = h(function () {
          if (r("isStringNullOrEmpty")(D)) return null;
          var e = o(
              "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
            ).cleanPhoneNumberInputValue(D),
            t = e.phoneNumberWithoutCountryCode;
          return t.length > 0 ? t : null;
        }),
        G = H[0],
        z = H[1],
        j = h(!1),
        K = j[0],
        Q = j[1],
        X = h(
          (b = v == null ? void 0 : v.syncToAddressbook) != null
            ? b
            : o(
                "WAWebUserPrefsContactManagement",
              ).getSyncToAddressbookDefaultSetting(),
        ),
        Y = X[0],
        J = X[1],
        Z = h(v == null ? void 0 : v.username),
        ee = Z[0],
        te = Z[1],
        ne = h(null),
        re = ne[0],
        oe = ne[1],
        ae = h(v == null ? void 0 : v.lid),
        ie = ae[0],
        le = ae[1],
        se = o("WAWebCustomerManagerGating").customerManagerEnabled(),
        ue = o(
          "WAWebUsernameWorkerCompatibleGatingUtils",
        ).usernameContactUIEnabled(),
        ce = o(
          "WAWebUseContactManagementAvailability",
        ).useContactManagementAvailability(),
        de = ce.canSyncToAddressbook,
        me = ce.isNativeContactOn,
        pe = g(null);
      _(k, function () {
        return {
          getElement: function () {
            return pe.current;
          },
          handleDismiss: function () {
            return be.logCancel();
          },
        };
      });
      var _e = g(
          new (r("WAPromiseCache"))(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  return yield o("WAWebQueryExistsJob").queryPhoneExists(
                    e,
                    o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                      .CONTACT_SAVE,
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            {
              maxCached: 100,
              maxAge: 1 / 0,
              shouldCache: function (t) {
                return !!t;
              },
            },
          ),
        ),
        fe = g(D),
        ge = h(
          r("isStringNullOrEmpty")(D)
            ? null
            : o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType
                .Registered,
        ),
        he = ge[0],
        ye = ge[1],
        Ce = r("useWAWebUnmountSignal")(),
        be = f(
          function () {
            return new (o("WAWebContactLogging").AddContactEvent)(E, v);
          },
          [E, v],
        );
      p(
        function () {
          be.logOpen();
        },
        [be],
      );
      var ve = function (t) {
          var e;
          (t === void 0 && (t = !1),
            !K && (t && be.logCancel(), (e = S || R) == null || e()));
        },
        Se = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t;
            if (!K) {
              var n = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(
                  U,
                  G,
                ),
                a = ie;
              if (ue && !r("isStringNullOrEmpty")(ee)) {
                if (re === "key-required" && a == null) {
                  if (
                    (be.logUsernameKeyRequired(),
                    (a = yield o(
                      "WAWebUsernameKeyVerificationFlow",
                    ).usernameKeyVerificationFlow({
                      username: ee,
                      onInvalidKeyError: function () {
                        be.logUsernameKeySubmit();
                      },
                    })),
                    a == null)
                  )
                    return;
                  be.logUsernameKeySubmit(!0);
                }
                if (!r("isStringNullOrEmpty")(n)) {
                  var i = yield _e.current.getOrRun(n),
                    l = i != null && i.username !== ee;
                  if (l) {
                    (be.logUsernameAndPnMismatch(),
                      o("WAWebModalManager").ModalManager.open(
                        d.jsx(
                          r("WAWebUsernamePhoneNumberMismatchModal.react"),
                          {},
                        ),
                      ));
                    return;
                  }
                }
              }
              if (
                T &&
                A.trim() === (v == null ? void 0 : v.firstName) &&
                B.trim() === (v == null ? void 0 : v.lastName) &&
                n === x &&
                ee === (v == null ? void 0 : v.username) &&
                Y ===
                  ((t = v == null ? void 0 : v.syncToAddressbook) != null
                    ? t
                    : !1)
              ) {
                ve();
                return;
              }
              var c = n != null ? n : a,
                m =
                  c != null
                    ? o("WAWebContactCollection").ContactCollection.get(c)
                    : null,
                p =
                  m != null &&
                  o("WAWebFrontendContactGetters").getIsMyContact(m),
                _ = r("isStringNullOrEmpty")(ee)
                  ? void 0
                  : ee !== (v == null ? void 0 : v.username),
                f = p ? void 0 : (v == null ? void 0 : v.username) != null,
                g = p ? (v == null ? void 0 : v.phoneNumber) != null : void 0;
              try {
                Q(!0);
                var h = {
                  firstName: A.trim(),
                  lastName: B.trim(),
                  isExistingContact: p || T,
                };
                if (!r("isStringNullOrEmpty")(n))
                  yield o("WAWebSaveContactAction").saveContactAction(
                    babelHelpers.extends({}, h, {
                      phoneNumber: n,
                      prevPhoneNumber: x,
                      syncToAddressbook: Y,
                      username: ee != null ? ee : void 0,
                      lid: a != null ? a : void 0,
                      isConvertingContactType: N,
                    }),
                  );
                else if (a != null && !r("isStringNullOrEmpty")(ee)) {
                  var y = T && !N,
                    C = n != null ? n : x;
                  yield o("WAWebSaveContactAction").saveContactAction(
                    babelHelpers.extends({}, h, {
                      lid: a,
                      username: ee,
                      pn: C != null ? C : void 0,
                      isConvertingContactType: y,
                    }),
                  );
                } else
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[contact edit] saving contact action but args are not valid",
                        ])),
                    )
                    .sendLogs("saving-contact-but-args-not-valid", {
                      sampling: 0.01,
                    });
                (be.logSave({
                  firstName: A,
                  lastName: B,
                  syncToAddressbook: Y,
                  usernameEdited: _,
                  usernameAutofilled: f,
                  phoneNumberAutofilled: g,
                }),
                  !T &&
                    !p &&
                    o(
                      "WAWebUserPrefsContactManagement",
                    ).setSyncToAddressbookLastSetting(Y));
                var b =
                  n != null ? o("WAWebWidFactory").createUserWidOrThrow(n) : a;
                b == null
                  ? o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[create contact] saving with no PN or LID",
                          ])),
                      )
                      .sendLogs("create-contact-saving-with-no-pn-or-lid")
                  : L({
                      contactId: b,
                      firstName: A,
                      lastName: B,
                      username: ee != null ? ee : void 0,
                      phoneNumber: n != null ? n : void 0,
                    });
                var S;
                if (T || p) S = s._(/*BTDS*/ "Contact updated");
                else {
                  var R = (A + " " + B).trim(),
                    E = r("isStringNullOrEmpty")(R) ? ee : R;
                  S = s._(/*BTDS*/ "{full-name} was added to your contacts", [
                    s._param("full-name", E),
                  ]);
                }
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    id: o("WAWebToast.react").genId(),
                    msg: S,
                  }),
                );
              } catch (e) {
                (be.logSave({
                  firstName: A,
                  lastName: B,
                  syncToAddressbook: Y,
                  error: e,
                  usernameEdited: _,
                  usernameAutofilled: f,
                  phoneNumberAutofilled: g,
                }),
                  o("WAWebModalManager").ModalManager.open(
                    d.jsx(r("WAWebFailedToSaveContactPopup.react"), {
                      onOK: o("WAWebModalManager").closeModalManager,
                    }),
                  ));
              } finally {
                Q(!1);
              }
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        Re = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if ((ye(null), !r("isStringNullOrEmpty")(t))) {
                var n = o(
                  "WAWebPhoneNumberValidationUtils",
                ).getValidPhoneNumber(e, t);
                if (n == null) {
                  ye(
                    o("WAWebContactPhoneNumberFields.react")
                      .PhoneNumberStatusType.Invalid,
                  );
                  return;
                }
                var a = n === D;
                if (a) {
                  ye(
                    o("WAWebContactPhoneNumberFields.react")
                      .PhoneNumberStatusType.Registered,
                  );
                  return;
                }
                var i = o("WAWebWidFactory").createUserWidOrThrow(n + "@c.us"),
                  l = o("WAWebContactCollection").ContactCollection.get(i);
                if (
                  l &&
                  o("WAWebFrontendContactGetters").getIsMyContact(l) &&
                  !T
                ) {
                  ye(
                    o("WAWebContactPhoneNumberFields.react")
                      .PhoneNumberStatusType.Duplicate,
                  );
                  return;
                }
                var s = (yield _e.current.getOrRun(n)) != null;
                Ce.aborted ||
                  ((fe.current = n),
                  ye(
                    s
                      ? o("WAWebContactPhoneNumberFields.react")
                          .PhoneNumberStatusType.Registered
                      : o("WAWebContactPhoneNumberFields.react")
                          .PhoneNumberStatusType.Unregistered,
                  ));
              }
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        Le = r("useWAWebDebouncedCallback")(Re, 250),
        Ee = function (t, n) {
          (V(t), z(n), r("isStringNullOrEmpty")(n) || Le(t, n));
        },
        ke = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(
              U,
              G,
            );
            if (e != null) {
              var t = o("WAWebWidFactory").createWid(e + "@c.us"),
                n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                  t,
                  "createContact",
                ),
                r = n.chat;
              (yield o("WAWebCmd").Cmd.openChatAt({
                chat: r,
                msgContext: null,
              }),
                o("WAWebCmd").Cmd.chatInfoDrawer(r, {
                  showFullGroupDescription: !1,
                  scrollToParticipantList: !1,
                }),
                be.logDuplicate());
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ie = function () {
          var e = !Y;
          (v == null ? void 0 : v.syncToAddressbook) === !0 && !e
            ? o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebStopSyncContactToAddressbookPopup.react"), {
                  onOK: function () {
                    (o("WAWebModalManager").ModalManager.close(), J(e));
                  },
                  onCancel: o("WAWebModalManager").closeModalManager,
                }),
              )
            : J(e);
        },
        Te = function () {
          de ||
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebSyncToggleDisabledPopup.react"), {
                onOK: o("WAWebModalManager").closeModalManager,
              }),
            );
        },
        De = T ? s._(/*BTDS*/ "Edit contact") : s._(/*BTDS*/ "New contact"),
        xe =
          he ===
          o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType
            .Registered,
        $e = (!!A.trim() || !!B.trim()) && xe,
        Pe = ue && o("WAWebUsernameUtils").usernameInputStateIsValid(re),
        Ne = me && ($e || Pe),
        Me = s._(/*BTDS*/ "Save contact"),
        we = Ne
          ? d.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: d.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "btn",
                xstyle: o("WAWebUISpacing").uiPadding.vert32,
                appear: !0,
                children: d.jsx(o("WAWebRound.react").Round, {
                  testid: void 0,
                  xstyle: y.saveButton,
                  onClick: K ? null : Se,
                  label: Me,
                  children: K
                    ? d.jsx(o("WAWebSpinner.react").Spinner, {
                        color: "white",
                        size: 30,
                      })
                    : d.jsx(r("WDSIconIcCheck.react"), {}),
                }),
              }),
            })
          : null,
        Ae;
      if (T && me) {
        var Fe = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = ie != null ? ie : v == null ? void 0 : v.lid,
              a =
                se &&
                t != null &&
                o(
                  "WAWebCustomerDataCollection",
                ).CustomerDataCollection.maybeGetCustomerDataByChatJid(
                  o("WAWebWidToJid").widToChatJid(t),
                ) != null;
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebDeleteContactPopup.react"), {
                syncToAddressbook:
                  (e = v == null ? void 0 : v.syncToAddressbook) != null
                    ? e
                    : !1,
                hasCustomerData: a,
                onCancel: o("WAWebModalManager").closeModalManager,
                onOK: n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (Q(!0), o("WAWebModalManager").ModalManager.close());
                    try {
                      var e = ie != null ? ie : v == null ? void 0 : v.lid;
                      if (!N && !r("isStringNullOrEmpty")(x)) {
                        var t = o("WAWebWidFactory").createUserWidOrThrow(
                          x + "@c.us",
                        );
                        yield o("WAWebDeleteContactAction").deleteContactAction(
                          { phoneNumber: t },
                        );
                      } else
                        !r("isStringNullOrEmpty")(ee) &&
                          e != null &&
                          (yield o(
                            "WAWebDeleteContactAction",
                          ).deleteContactAction({ username: ee, lid: e }));
                      if (se && e != null) {
                        var n = o("WAWebWidToJid").widToChatJid(e);
                        try {
                          yield o(
                            "WAWebCustomerDataAction",
                          ).customerDataDeleteAction(n);
                        } catch (e) {
                          o("WAWebFBLogger")
                            .WAWebFBLogger()
                            .warn(
                              "Failed to delete customer data for %s: %s",
                              n,
                              String(e),
                            );
                        }
                      }
                      (be.logDelete(),
                        ve(),
                        o("WAWebToastManager").ToastManager.open(
                          d.jsx(o("WAWebToast.react").Toast, {
                            id: o("WAWebToast.react").genId(),
                            msg: s._(/*BTDS*/ "Contact deleted"),
                          }),
                        ));
                    } catch (e) {
                      (be.logDelete(e),
                        o("WAWebToastManager").ToastManager.open(
                          d.jsx(o("WAWebToast.react").Toast, {
                            id: o("WAWebToast.react").genId(),
                            msg: s._(
                              /*BTDS*/ "Can't delete contact right now, try again later.",
                            ),
                          }),
                        ));
                    } finally {
                      Q(!1);
                    }
                  },
                ),
              }),
            );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
        Ae = d.jsx(o("WAWebClickable.react").Clickable, {
          dataTestId: "btn-delete-contact",
          onClick: K ? null : Fe,
          ariaLabel: s._(/*BTDS*/ "Delete contact"),
          xstyle: y.deleteIconContainer,
          children: d.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
            xstyle: y.deleteIconRefreshed,
            height: 24,
          }),
        });
      }
      var Oe = E === o("WAWebContactLogging").ContactSourceType.NewChat,
        Be;
      T &&
      !r("isStringNullOrEmpty")(G) &&
      !o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled
        ? (Be = d.jsx(r("WAWebContactPhoneNumberReadOnlyField.react"), {
            countryCode: U,
            numberWithoutPrefix: G,
          }))
        : (Be = d.jsx(
            o("WAWebContactPhoneNumberFields.react").ContactPhoneNumberFields,
            {
              status: he,
              countryCode: U,
              numberWithoutPrefix: G,
              onChange: Ee,
              onViewDuplicateContact: ke,
              origin: E,
            },
          ));
      var We = s._(/*BTDS*/ "First name"),
        qe = s._(/*BTDS*/ "Last name"),
        Ue = s._(/*BTDS*/ "Sync contact to phone"),
        Ve = o("WAWebDrawerUtils").getDrawerHeaderType(I),
        He = d.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: [
            o("WAWebUISpacing").uiPadding.horiz25,
            o("WAWebUISpacing").uiMargin.top24,
          ],
          align: "center",
          children: [
            d.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: y.iconSection,
              children: d.jsx(o("WAWebIcSyncIcon.react").IcSyncIcon, {}),
            }),
            d.jsx(o("WAWebFlex.react").FlexItem, {
              grow: 1,
              shrink: 1,
              children: d.jsxs(
                "label",
                babelHelpers.extends(
                  { htmlFor: C },
                  { 0: {}, 1: { className: "x1ypdohk" } }[!!de << 0],
                  {
                    children: [
                      Ue,
                      d.jsx(r("WDSText.react"), {
                        type: "Body3",
                        colorName: "contentDeemphasized",
                        xstyle: o("WAWebUISpacing").uiMargin.top10,
                        children: s._(
                          /*BTDS*/ "This contact will be added to your phone's address book.",
                        ),
                      }),
                    ],
                  },
                ),
              ),
            }),
            d.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: o("WAWebUISpacing").uiMargin.start30,
              children: d.jsx(r("WDSSwitch.react"), {
                id: C,
                disabled: !de || !xe,
                value: Y,
                onChange: Ie,
                onClick: Te,
                "aria-label": Ue,
              }),
            }),
          ],
        });
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: pe,
        theme: Oe ? void 0 : "striped",
        testid: void 0,
        viewType: I,
        tsNavigationData: { surface: "contact-creation" },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: De,
            type: Ve,
            onBack: S
              ? function () {
                  return ve(!0);
                }
              : void 0,
            onCancel: R
              ? function () {
                  return ve(!0);
                }
              : void 0,
            children: Ae,
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            children: d.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              xstyle: o("WAWebUISpacing").uiPadding.top24,
              children: [
                d.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: o("WAWebUISpacing").uiPadding.horiz25,
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: y.iconSection,
                      children: d.jsx(
                        o("WAWebContactsIcon.react").ContactsIcon,
                        {
                          width: 27,
                          xstyle: o("WAWebUISpacing").uiMargin.top32,
                        },
                      ),
                    }),
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 1,
                      shrink: 1,
                      children: d.jsx(
                        o("WAWebRichTextField.react").RichTextField,
                        {
                          placeholder: We,
                          ariaLabel: We,
                          value: A,
                          onChange: function (t) {
                            var e = t.text;
                            return F(e);
                          },
                          focusOnMount: !0,
                        },
                      ),
                    }),
                  ],
                }),
                d.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.horiz25,
                    o("WAWebUISpacing").uiMargin.top13,
                  ],
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: y.iconSection,
                    }),
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 1,
                      shrink: 1,
                      children: d.jsx(
                        o("WAWebRichTextField.react").RichTextField,
                        {
                          placeholder: qe,
                          ariaLabel: qe,
                          value: B,
                          onChange: function (t) {
                            var e = t.text;
                            return W(e);
                          },
                        },
                      ),
                    }),
                  ],
                }),
                ue
                  ? d.jsx(r("WAWebUsernameContactField.react"), {
                      usernameInput: ee,
                      usernameState: re,
                      setUsernameInput: te,
                      setUsernameState: oe,
                      setContactLid: le,
                      contactLid: ie,
                      origin: E,
                      onInvalidUsername: function () {
                        return be.logInvalidUsername();
                      },
                    })
                  : null,
                d.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.horiz25,
                    o("WAWebUISpacing").uiMargin.top15,
                  ],
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: y.iconSection,
                      children: d.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
                        width: 22,
                        xstyle: [
                          T
                            ? o("WAWebUISpacing").uiMargin.top32
                            : o("WAWebUISpacing").uiMargin.top30,
                          o("WAWebUISpacing").uiMargin.start2,
                        ],
                      }),
                    }),
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 1,
                      shrink: 1,
                      children: Be,
                    }),
                  ],
                }),
                He,
              ],
            }),
          }),
          we,
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
