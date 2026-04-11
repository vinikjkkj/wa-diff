__d(
  "WAWebContactsModal.react",
  [
    "fbt",
    "WALogger",
    "WATypeUtils",
    "WAWebBoolFunc",
    "WAWebChatContact.react",
    "WAWebChatParticipantUtils.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterStrings",
    "WAWebContactGetters",
    "WAWebEmptyState.react",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFrontendContactGetters",
    "WAWebL10NAccentFold",
    "WAWebListButton.react",
    "WAWebModalsListModal.react",
    "WAWebNewsletterSubscriberList.react",
    "WAWebNoop",
    "WAWebPhoneNumberSearch",
    "WAWebSectionHeader.react",
    "WAWebSingleSelection",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebDebouncedSearch",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useMemo,
      p = { HEADER: "HEADER", ROW: "ROW", BUTTON: "BUTTON" },
      _ = "in-your-contacts-header-key",
      f = o("WAWebChatContact.react").ContactFactory(),
      g = o("WAWebModalsListModal.react").ListModalFactory();
    function h(e) {
      var t = o("react-compiler-runtime").c(49),
        n = e.active,
        a = e.contextEnabled,
        i = e.contextMenu,
        l = e.data,
        s = e.elevatedPushNamesEnabled,
        c = e.filter,
        m = e.listenForAdminChange,
        g = e.loadOnlyContactPictures,
        h = e.newsletterRoles,
        y = e.onContext,
        C = e.onSelect,
        b = e.openContextOnClick,
        v = e.participantCollection,
        S = e.showMemberLabel,
        R = e.showNotifyName,
        L = e.showStatusRingAroundProfilePhoto,
        E = e.sourceChat,
        k = g === void 0 ? !1 : g;
      switch (l.type) {
        case p.HEADER: {
          var I,
            T = (I = l.header) != null ? I : "",
            D = l.itemKey !== _,
            x;
          return (
            t[0] !== T || t[1] !== D
              ? ((x = d.jsx(r("WAWebSectionHeader.react"), {
                  header: T,
                  uppercase: D,
                })),
                (t[0] = T),
                (t[1] = D),
                (t[2] = x))
              : (x = t[2]),
            x
          );
        }
        case p.ROW: {
          var $ = !!b,
            P;
          t[3] !== l.contact || t[4] !== c
            ? ((P = o("WATypeUtils").isString(c(l.contact))),
              (t[3] = l.contact),
              (t[4] = c),
              (t[5] = P))
            : (P = t[5]);
          var N = P,
            M = N ? "group-modal" : null,
            w;
          t[6] !== l.contact || t[7] !== c || t[8] !== N
            ? ((w = N ? c(l.contact) : null),
              (t[6] = l.contact),
              (t[7] = c),
              (t[8] = N),
              (t[9] = w))
            : (w = t[9]);
          var A = w,
            F;
          t[10] !== l.contact || t[11] !== h || t[12] !== A
            ? ((F =
                h && o("WAWebContactGetters").getIsMe(l.contact)
                  ? d.jsx(
                      o("WAWebNewsletterSubscriberList.react")
                        .YouArentVisibleToYourFollowersLabel,
                      {},
                    )
                  : A),
              (t[10] = l.contact),
              (t[11] = h),
              (t[12] = A),
              (t[13] = F))
            : (F = t[13]);
          var O = F,
            B;
          t[14] !== a || t[15] !== i || t[16] !== l.contact || t[17] !== y
            ? ((B =
                y && i && a
                  ? {
                      contextEnabled: function () {
                        return a(l.contact.id);
                      },
                      contextMenu: i(l.contact.id),
                      onContext: y,
                    }
                  : {}),
              (t[14] = a),
              (t[15] = i),
              (t[16] = l.contact),
              (t[17] = y),
              (t[18] = B))
            : (B = t[18]);
          var W = B,
            q = !0;
          if (k) {
            var U;
            (t[19] !== l.contact
              ? ((U = o("WAWebFrontendContactGetters").getIsMyContact(
                  l.contact,
                )),
                (t[19] = l.contact),
                (t[20] = U))
              : (U = t[20]),
              (q = U));
          }
          var V;
          t[21] !== l.contact ||
          t[22] !== N ||
          t[23] !== y ||
          t[24] !== C ||
          t[25] !== $
            ? ((V =
                $ && y
                  ? y
                  : N
                    ? void 0
                    : C
                      ? function () {
                          C(l.contact);
                        }
                      : r("WAWebNoop")),
              (t[21] = l.contact),
              (t[22] = N),
              (t[23] = y),
              (t[24] = C),
              (t[25] = $),
              (t[26] = V))
            : (V = t[26]);
          var H;
          return (
            t[27] !== n ||
            t[28] !== W ||
            t[29] !== l.contact ||
            t[30] !== l.isPending ||
            t[31] !== l.newsletterRole ||
            t[32] !== s ||
            t[33] !== m ||
            t[34] !== q ||
            t[35] !== v ||
            t[36] !== O ||
            t[37] !== S ||
            t[38] !== R ||
            t[39] !== L ||
            t[40] !== E ||
            t[41] !== V ||
            t[42] !== M
              ? ((H = d.jsx(
                  f,
                  babelHelpers.extends(
                    {
                      contact: l.contact,
                      active: n,
                      theme: M,
                      secondary: O,
                      newsletterMembershipType: l.newsletterRole,
                      onClick: V,
                      waitIdle: !0,
                      showNotifyName: R,
                      elevatedPushNamesEnabled: s,
                      listenForAdminChange: m,
                      participantCollection: v,
                      isPendingParticipant: l.isPending,
                    },
                    W,
                    {
                      showStatusRingAroundProfilePhoto: L,
                      loadPicture: q,
                      showMemberLabel: S,
                      sourceChat: E,
                    },
                  ),
                )),
                (t[27] = n),
                (t[28] = W),
                (t[29] = l.contact),
                (t[30] = l.isPending),
                (t[31] = l.newsletterRole),
                (t[32] = s),
                (t[33] = m),
                (t[34] = q),
                (t[35] = v),
                (t[36] = O),
                (t[37] = S),
                (t[38] = R),
                (t[39] = L),
                (t[40] = E),
                (t[41] = V),
                (t[42] = M),
                (t[43] = H))
              : (H = t[43]),
            H
          );
        }
        case p.BUTTON: {
          var G;
          return (
            t[44] !== n ||
            t[45] !== l.itemKey ||
            t[46] !== l.onClick ||
            t[47] !== l.text
              ? ((G = d.jsx(o("WAWebListButton.react").ListButton, {
                  active: n,
                  id: l.itemKey,
                  onClick: l.onClick,
                  children: l.text,
                })),
                (t[44] = n),
                (t[45] = l.itemKey),
                (t[46] = l.onClick),
                (t[47] = l.text),
                (t[48] = G))
              : (G = t[48]),
            G
          );
        }
        default:
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebContactsModal",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(l)
          );
      }
    }
    var y = 5001;
    function C(e, t) {
      var n;
      if (t == null) return o("WAWebFrontendContactGetters").getHeader(e);
      if (
        (t == null || (n = t.get(e.id)) == null ? void 0 : n.role) ===
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber
      )
        return r("WAWebFbtCommon")("In Your Contacts").toString();
    }
    function b(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.button,
        l = a.contacts,
        u = a.contextEnabled,
        c = a.contextMenu,
        _ = a.elevatedPushNamesEnabled,
        f = a.filter,
        b = f === void 0 ? o("WAWebBoolFunc").returnTrue : f,
        v = a.firstRows,
        S = a.isNewsletter,
        R = S === void 0 ? !1 : S,
        L = a.isParentGroup,
        E = a.lastRow,
        k = a.listenForAdminChange,
        I = a.loadOnlyContactPictures,
        T = I === void 0 ? !1 : I,
        D = a.newsletterRoles,
        x = a.onBack,
        $ = a.onCancel,
        P = a.onContext,
        N = a.onSelect,
        M = a.openContextOnClick,
        w = a.participantCollection,
        A = a.searchPlaceholder,
        F = a.showNotifyName,
        O = a.showStatusRingAroundProfilePhoto,
        B = a.spinnerInHeader,
        W = B === void 0 ? !1 : B,
        q = a.title,
        U = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return String(e.id);
          });
        }),
        V = r("useWAWebDebouncedSearch")(),
        H = V[0],
        G = V[1],
        z = function (t, n) {
          if (n.type === p.ROW) {
            var e = n.contact;
            b(e) === !0 && (N == null || N(e));
          }
        },
        j =
          R && l != null && l.length >= y
            ? d.jsx(
                o("WAWebNewsletterSubscriberList.react")
                  .NewsletterSubListLastRow,
                {
                  text:
                    H != null && H !== ""
                      ? o(
                          "WAWebCommonNewsletterStrings",
                        ).getFirstFiveThousandChannelFollowersSearchingText()
                      : o(
                          "WAWebCommonNewsletterStrings",
                        ).getFirstFiveThousandChannelFollowersText(),
                  textAlign: "center",
                },
              )
            : E,
        K = a.sourceChat,
        Q = a.showMemberLabel === !0,
        X = K == null ? void 0 : K.groupMetadata,
        Y = m(
          function () {
            var e = o("WAWebL10NAccentFold").accentFold(H),
              t = o("WAWebPhoneNumberSearch").numberSearch(e),
              n = l.filter(function (n) {
                return b(n) && (!e || n.searchMatchExact(e, t));
              }),
              r = n.filter(function (e) {
                return b(e) === !0;
              });
            (i && r.push({ id: "button" }), U.current.init(r));
            var a = [];
            if (!n.length) return a;
            for (
              var s, u, c = D == null ? n.length > 10 && L !== !0 : !0, d = 0;
              d < n.length;
              d++
            ) {
              s = n[d];
              var m = C(s, D);
              c &&
                m !== u &&
                a.push({
                  type: p.HEADER,
                  header: m,
                  itemKey: (m || "") + "_" + d,
                });
              var _ = D == null ? void 0 : D.get(s.id);
              (a.push({
                type: p.ROW,
                contact: s,
                itemKey: s.id.toString() + "_" + d,
                newsletterRole: _ == null ? void 0 : _.role,
                isPending: _ == null ? void 0 : _.pendingInvitee,
                height: o(
                  "WAWebChatParticipantUtils.react",
                ).getParticipantItemHeight({
                  contact: s,
                  chat: K,
                  showMemberLabel: Q,
                  groupMetadata: X,
                }),
              }),
                (u = m));
            }
            if (i) {
              var f = i.onClick,
                g = i.text;
              a.push({
                type: p.BUTTON,
                text: g,
                onClick: f,
                itemKey: "button",
                height: o("WAWebListButton.react").LIST_BUTTON_HEIGHT,
              });
            }
            return a;
          },
          [H, l, i, U, D, L, b, K, Q, X],
        ),
        J = s._(/*BTDS*/ "Search contacts");
      return d.jsx(g, {
        testid: void 0,
        ref: n,
        title: q,
        data: Y,
        renderItem: function (t) {
          return d.jsx(h, {
            data: t,
            contextMenu: c,
            onContext: P,
            openContextOnClick: M,
            filter: b,
            contextEnabled: u,
            onSelect: N,
            showNotifyName: F,
            elevatedPushNamesEnabled: _,
            listenForAdminChange: k,
            participantCollection: w,
            active: U.current,
            showStatusRingAroundProfilePhoto: O,
            loadOnlyContactPictures: T,
            newsletterRoles: D,
            showMemberLabel: a.showMemberLabel,
            sourceChat: K,
          });
        },
        emptyState: d.jsx(o("WAWebEmptyState.react").SearchContacts, {}),
        selection: U.current,
        onSearch: G,
        searchPlaceholder: A != null ? A : J,
        onSelect: z,
        onBack: x,
        onCancel: $,
        firstRows: v,
        isNewsletter: R,
        lastRow: j,
        spinnerInHeader: W,
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
