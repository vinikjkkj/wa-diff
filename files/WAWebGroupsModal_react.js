__d(
  "WAWebGroupsModal.react",
  [
    "fbt",
    "Promise",
    "WAPromiseDelays",
    "WAWebBoolFunc",
    "WAWebChat.react",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebEmptyState.react",
    "WAWebGroupMetadataCollection",
    "WAWebL10NAccentFold",
    "WAWebModalsListModal.react",
    "WAWebNoop",
    "WAWebPhoneNumberSearch",
    "WAWebSingleSelection",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "react",
    "useLazyRef",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState,
      f = o("WAWebChat.react").ChatFactory(),
      g = o("WAWebModalsListModal.react").ListModalFactory();
    function h(e) {
      var t = e.active,
        n = e.chat,
        r = e.mode,
        a = e.onClick,
        i = e.showSpeakerForCag,
        l = e.subtitle,
        s = e.type,
        u,
        c,
        m = typeof l != "boolean";
      m && ((u = l), (c = "group-modal"));
      var p = function () {
        m ||
          (s === "subgroup_switcher" &&
            new (o(
              "WAWebCommunityGroupJourneyEventImpl",
            ).CommunityGroupJourneyEvent)({
              action: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .COMMUNITY_NAV_SHEET,
              chat: n,
            }).commit(),
          a.call(null, n));
      };
      return d.jsx(f, {
        chat: n,
        mode: r,
        active: t,
        secondary: u,
        noContext: !0,
        theme: c,
        onClick: p,
        overrideCommunityAnnouncementGroupName: !0,
        hiddenSubgroupIcon: "chat-list",
        showSpeakerForCag: i,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = s._(/*BTDS*/ "Groups"),
        c = i.onCancel,
        m = i.chats,
        f = i.filter,
        y = f === void 0 ? o("WAWebBoolFunc").returnTrue : f,
        C = i.onGroup,
        b = i.mode,
        v = b === void 0 ? o("WAWebChat.react").Mode.INFO : b,
        S = i.title,
        R = S === void 0 ? l : S,
        L = i.titleStr,
        E = L === void 0 ? l : L,
        k = i.firstRow,
        I = i.lastRow,
        T = i.hideSearchBar,
        D = T === void 0 ? !1 : T,
        x = i.showSpeakerForCag,
        $ = i.rotateList,
        P = $ === void 0 ? !1 : $,
        N = i.tsNavigationData,
        M = i.type,
        w = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.toString();
          });
        }),
        A = _(!0),
        F = A[0],
        O = A[1],
        B = _(void 0),
        W = B[0],
        q = B[1];
      p(function () {
        o("WAPromiseDelays")
          .delayMs(300)
          .then(function () {
            return (u || (u = n("Promise"))).all(
              m
                .reduce(function (e, t) {
                  var n;
                  return (
                    (n = t.groupMetadata) != null &&
                      n.stale &&
                      e.push(t.groupMetadata.id),
                    e
                  );
                }, [])
                .map(function (e) {
                  return r("WAWebGroupMetadataCollection")
                    .update(e)
                    .catch(r("WAWebNoop"));
                }),
            );
          })
          .finally(function () {
            return O(!1);
          });
      }, []);
      var U = function (t, n) {
          y(n.chat) === !0 && C(n.chat);
        },
        V = function () {
          var e = [];
          if (F) return e;
          var t = o("WAWebL10NAccentFold").accentFold(W),
            n = o("WAWebPhoneNumberSearch").numberSearch(t),
            r = m.filter(function (e) {
              return y(e) && (!t || e.contact.searchMatchExact(t, n));
            });
          return (
            w.current.init(
              r
                .filter(function (e) {
                  return y(e) === !0;
                })
                .map(function (e) {
                  return e.id;
                }),
            ),
            (e = r.map(function (e) {
              return { chat: e, itemKey: e.id.toString() };
            })),
            e
          );
        },
        H = r("useWAWebDebouncedCallback")(q, 100),
        G = F
          ? d.jsx(o("WAWebEmptyState.react").Loading, {})
          : d.jsx(o("WAWebEmptyState.react").SearchGroups, {});
      return d.jsx(g, {
        title: R,
        titleStr: E,
        data: V(),
        tsNavigationData: N,
        renderItem: function (t) {
          var e = t.chat;
          return d.jsx(h, {
            chat: e,
            subtitle: y(e),
            active: w.current,
            onClick: C,
            mode: v,
            showSpeakerForCag: x,
            type: M,
          });
        },
        emptyState: G,
        selection: w.current,
        rotateList: P,
        onCancel: c,
        onSearch: D ? void 0 : H,
        onSelect: U,
        ref: a,
        searchPlaceholder: s._(/*BTDS*/ "Search groups"),
        firstRows: [k],
        lastRow: I,
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
