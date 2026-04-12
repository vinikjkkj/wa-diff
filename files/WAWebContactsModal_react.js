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
      var t,
        n = e.active,
        a = e.contextEnabled,
        i = e.contextMenu,
        l = e.data,
        s = e.elevatedPushNamesEnabled,
        c = e.filter,
        m = e.listenForAdminChange,
        g = e.loadOnlyContactPictures,
        h = g === void 0 ? !1 : g,
        y = e.newsletterRoles,
        C = e.onContext,
        b = e.onSelect,
        v = e.openContextOnClick,
        S = e.participantCollection,
        R = e.showMemberLabel,
        L = e.showNotifyName,
        E = e.showStatusRingAroundProfilePhoto,
        k = e.sourceChat;
      switch (l.type) {
        case p.HEADER:
          return d.jsx(r("WAWebSectionHeader.react"), {
            header: (t = l.header) != null ? t : "",
            uppercase: l.itemKey !== _,
          });
        case p.ROW: {
          var I = !!v,
            T = o("WATypeUtils").isString(c(l.contact)),
            D = T ? "group-modal" : null,
            x = T ? c(l.contact) : null,
            $ =
              y && o("WAWebContactGetters").getIsMe(l.contact)
                ? d.jsx(
                    o("WAWebNewsletterSubscriberList.react")
                      .YouArentVisibleToYourFollowersLabel,
                    {},
                  )
                : x,
            P =
              C && i && a
                ? {
                    contextEnabled: function () {
                      return a(l.contact.id);
                    },
                    contextMenu: i(l.contact.id),
                    onContext: C,
                  }
                : {},
            N = !0;
          return (
            h &&
              (N = o("WAWebFrontendContactGetters").getIsMyContact(l.contact)),
            d.jsx(
              f,
              babelHelpers.extends(
                {
                  contact: l.contact,
                  active: n,
                  theme: D,
                  secondary: $,
                  newsletterMembershipType: l.newsletterRole,
                  onClick:
                    I && C
                      ? C
                      : T
                        ? void 0
                        : b
                          ? function () {
                              b(l.contact);
                            }
                          : r("WAWebNoop"),
                  waitIdle: !0,
                  showNotifyName: L,
                  elevatedPushNamesEnabled: s,
                  listenForAdminChange: m,
                  participantCollection: S,
                  isPendingParticipant: l.isPending,
                },
                P,
                {
                  showStatusRingAroundProfilePhoto: E,
                  loadPicture: N,
                  showMemberLabel: R,
                  sourceChat: k,
                },
              ),
            )
          );
        }
        case p.BUTTON:
          return d.jsx(o("WAWebListButton.react").ListButton, {
            active: n,
            id: l.itemKey,
            onClick: l.onClick,
            children: l.text,
          });
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
    h.displayName = h.name + " [from " + i.id + "]";
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
