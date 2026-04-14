__d(
  "WAWebCustomerManagerDrawer.react",
  [
    "fbt",
    "WAWebAddCustomerDialog.react",
    "WAWebContactCollection",
    "WAWebCustomerDataCollection",
    "WAWebCustomerManagerFilterBar.react",
    "WAWebCustomerManagerFindOrCreateChat",
    "WAWebCustomerManagerLastMessageFilter.react",
    "WAWebCustomerManagerListView.react",
    "WAWebCustomerManagerPipelineView.react",
    "WAWebCustomerManagerSearchInput.react",
    "WAWebCustomerManagerSearchUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebExternalLink.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebViewSwitcher.react",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconIcFormatListBulleted.react",
    "WDSIconIcSpaceDashboard.react",
    "WDSText.react",
    "react",
    "useWAWebCustomerData",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = "list",
      g = "pipeline",
      h = [
        {
          value: f,
          label: function () {
            return s._(/*BTDS*/ "List view");
          },
          Icon: r("WDSIconIcFormatListBulleted.react"),
          testid: "customer-manager-view-list",
        },
        {
          value: g,
          label: function () {
            return s._(/*BTDS*/ "Pipeline view");
          },
          Icon: r("WDSIconIcSpaceDashboard.react"),
          testid: "customer-manager-view-pipeline",
        },
      ];
    function y() {
      var e = _(f),
        t = e[0],
        n = e[1],
        a = _(""),
        i = a[0],
        l = a[1],
        c = _([]),
        y = c[0],
        C = c[1],
        b = _(null),
        v = b[0],
        S = b[1],
        R = _(null),
        L = R[0],
        E = R[1],
        k = _(null),
        I = k[0],
        T = k[1],
        D = d(function (e) {
          (n(e), e === g && C([]));
        }, []),
        x = d(function (e) {
          C(function (t) {
            return t.includes(e)
              ? t.filter(function (t) {
                  return t !== e;
                })
              : [].concat(t, [e]);
          });
        }, []),
        $ = d(function () {
          C([]);
        }, []),
        P = d(function (e) {
          S(e);
        }, []),
        N = d(function () {
          S(null);
        }, []),
        M = d(function (e) {
          E(e);
        }, []),
        w = d(function () {
          E(null);
        }, []),
        A = d(function (e) {
          T(e);
        }, []),
        F = m(
          function () {
            return {
              acquisitionSource: L,
              labelId: v,
              lastMessageRange: I,
              leadStages: y,
              query: i,
            };
          },
          [L, v, I, y, i],
        ),
        O = r("useWAWebCustomerData")(),
        B = m(
          function () {
            return o(
              "WAWebCustomerDataCollection",
            ).CustomerDataCollection.filterCustomers(O, F);
          },
          [O, F],
        ),
        W = _(null),
        q = W[0],
        U = W[1],
        V = _(!1),
        H = V[0],
        G = V[1],
        z = m(
          function () {
            var e;
            return q != null &&
              (e = o("WAWebContactCollection").ContactCollection.get(
                q.chatJid,
              )) != null
              ? e
              : null;
          },
          [q],
        ),
        j = _(null),
        K = j[0],
        Q = j[1],
        X = _("profile"),
        Y = X[0],
        J = X[1],
        Z = p(null),
        ee = d(function (e, t) {
          var n = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
          n != null &&
            (G(!1),
            U(e),
            Q(null),
            J(t),
            (Z.current = e),
            o("WAWebCustomerManagerFindOrCreateChat")
              .customerManagerFindOrCreateChat(n.id)
              .then(function (t) {
                Z.current === e && Q(t);
              })
              .catch(function () {
                Z.current === e && (U(null), Q(null), (Z.current = null));
              }));
        }, []),
        te = d(
          function (e) {
            ee(e, "profile");
          },
          [ee],
        ),
        ne = d(
          function (e) {
            var t = O.find(function (t) {
              return t.chatJid === e;
            });
            t != null && ee(t, "chat");
          },
          [O, ee],
        ),
        re = d(function () {
          (U(null), Q(null), (Z.current = null));
        }, []),
        oe = d(
          function (e) {
            Z.current != null && Z.current.chatJid === e && re();
          },
          [re],
        ),
        ae = d(function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebAddCustomerDialog.react"), {}),
          );
        }, []),
        ie = d(
          function () {
            (re(), G(!0));
          },
          [re],
        ),
        le = d(function () {
          G(!1);
        }, []),
        se = d(function () {
          o("WAWebExternalLink.react").openExternalLink(
            "https://faq.whatsapp.com/",
          );
        }, []);
      return u.jsx(r("WAWebDrawer.react"), {
        theme: "catalog",
        testid: void 0,
        children: u.jsxs("div", {
          className: "x78zum5 x1q0g3np x98rzlu x2lwn1j x6ikm8r x10wlt62",
          children: [
            H &&
              u.jsx("div", {
                className:
                  "x1n2onr6 x1czfd9k x2lah0s x1lun4ml x18b5jzi xbogo7e x6ikm8r x10wlt62",
                children: u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
                  isInitialStep: !0,
                  onEnd: le,
                }),
              }),
            u.jsxs("div", {
              className:
                "x1n2onr6 x78zum5 xdt5ytf x98rzlu xeuugli x6ikm8r x10wlt62",
              children: [
                u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title: s._(/*BTDS*/ "Customer Manager"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
                  rightActionElement: u.jsx(r("WDSButton.react"), {
                    variant: "filled",
                    type: "default",
                    Icon: r("WDSIconIcAdd.react"),
                    label: s._(/*BTDS*/ "Add customer"),
                    onPress: ae,
                    testid: void 0,
                  }),
                }),
                u.jsxs("div", {
                  className:
                    "x78zum5 x6s0dn4 x1s70e7g xdx6fka x16ovd2e x12xbjc7",
                  children: [
                    u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      testid: void 0,
                      children: s._(
                        /*BTDS*/ '_j{"*":"{number} customers","_1":"1 customer"}',
                        [s._plural(B.length, "number")],
                      ),
                    }),
                    u.jsx(r("WAWebViewSwitcher.react"), {
                      items: h,
                      currentValue: t,
                      onValueChange: D,
                      testid: void 0,
                    }),
                    u.jsx(r("WAWebCustomerManagerLastMessageFilter.react"), {
                      onSelectRange: A,
                      selectedRange: I,
                      testid: void 0,
                    }),
                    u.jsx(r("WAWebCustomerManagerSearchInput.react"), {
                      value: i,
                      onChange: l,
                      testid: void 0,
                    }),
                    u.jsx(r("WAWebCustomerManagerFilterBar.react"), {
                      hideLeadStage: t === g,
                      onClear: $,
                      onClearAcquisitionSource: w,
                      onClearLabel: N,
                      onSelectAcquisitionSource: M,
                      onSelectLabel: P,
                      onToggleStage: x,
                      selectedAcquisitionSource: L,
                      selectedLabelId: v,
                      selectedStages: y,
                      testid: void 0,
                    }),
                  ],
                }),
                u.jsx(r("WAWebDrawerBody.react"), {
                  children: u.jsx("div", {
                    className: "x5yr21d",
                    children:
                      t === f
                        ? u.jsx(r("WAWebCustomerManagerListView.react"), {
                            customers: B,
                            hasActiveFilter: o(
                              "WAWebCustomerManagerSearchUtils",
                            ).hasActiveFilter(F),
                            onAddCustomer: ae,
                            onChatClick: ne,
                            onCustomerClick: te,
                            onDeleteCustomer: oe,
                            onLearnMore: se,
                            onManageLabels: ie,
                            selectedCustomerJid: q == null ? void 0 : q.chatJid,
                          })
                        : u.jsx(r("WAWebCustomerManagerPipelineView.react"), {
                            onCustomerClick: te,
                            searchOptions: F,
                          }),
                  }),
                }),
              ],
            }),
            q != null &&
              K != null &&
              z != null &&
              u.jsx("div", {
                className:
                  "x1n2onr6 x1czfd9k x2lah0s xpilrb4 x1t7ytsu x1vb5itz x6ikm8r x10wlt62",
                children: u.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  {
                    chat: K,
                    initialContactInfoTab: Y,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
                    contactProp: z,
                    onEnd: re,
                    showChatTabInContactInfoDrawer: !0,
                  },
                  z.id.toString() + "-" + Y,
                ),
              }),
          ],
        }),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
